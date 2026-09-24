import sys, time, torch, torch.nn as nn, torch.nn.functional as F
from PIL import Image
import numpy as np

class RDB(nn.Module):
    def __init__(self, nf=64, gc=32):
        super().__init__()
        self.conv1 = nn.Conv2d(nf, gc, 3, 1, 1)
        self.conv2 = nn.Conv2d(nf + gc, gc, 3, 1, 1)
        self.conv3 = nn.Conv2d(nf + 2*gc, gc, 3, 1, 1)
        self.conv4 = nn.Conv2d(nf + 3*gc, gc, 3, 1, 1)
        self.conv5 = nn.Conv2d(nf + 4*gc, nf, 3, 1, 1)
        self.lrelu = nn.LeakyReLU(0.2, True)
    def forward(self, x):
        x1 = self.lrelu(self.conv1(x))
        x2 = self.lrelu(self.conv2(torch.cat((x, x1), 1)))
        x3 = self.lrelu(self.conv3(torch.cat((x, x1, x2), 1)))
        x4 = self.lrelu(self.conv4(torch.cat((x, x1, x2, x3), 1)))
        x5 = self.conv5(torch.cat((x, x1, x2, x3, x4), 1))
        return x5 * 0.2 + x

class RRDB(nn.Module):
    def __init__(self, nf=64, gc=32):
        super().__init__()
        self.rdb1, self.rdb2, self.rdb3 = RDB(nf, gc), RDB(nf, gc), RDB(nf, gc)
    def forward(self, x):
        return self.rdb3(self.rdb2(self.rdb1(x))) * 0.2 + x

class RRDBNet(nn.Module):
    def __init__(self, nf=64, nb=23, gc=32, scale=2):
        super().__init__()
        self.scale = scale
        in_ch = 3 * 4 if scale == 2 else 3
        self.conv_first = nn.Conv2d(in_ch, nf, 3, 1, 1)
        self.body = nn.Sequential(*[RRDB(nf, gc) for _ in range(nb)])
        self.conv_body = nn.Conv2d(nf, nf, 3, 1, 1)
        self.conv_up1 = nn.Conv2d(nf, nf, 3, 1, 1)
        self.conv_up2 = nn.Conv2d(nf, nf, 3, 1, 1)
        self.conv_hr = nn.Conv2d(nf, nf, 3, 1, 1)
        self.conv_last = nn.Conv2d(nf, 3, 3, 1, 1)
        self.lrelu = nn.LeakyReLU(0.2, True)
    def forward(self, x):
        feat = F.pixel_unshuffle(x, 2) if self.scale == 2 else x
        feat = self.conv_first(feat)
        feat = feat + self.conv_body(self.body(feat))
        feat = self.lrelu(self.conv_up1(F.interpolate(feat, scale_factor=2, mode="nearest")))
        feat = self.lrelu(self.conv_up2(F.interpolate(feat, scale_factor=2, mode="nearest")))
        return self.conv_last(self.lrelu(self.conv_hr(feat)))

def upscale(src, dst, weights="RealESRGAN_x2plus.pth", tile=384, pad=16):
    torch.set_num_threads(max(1, torch.get_num_threads()))
    net = RRDBNet()
    sd = torch.load(weights, map_location="cpu")
    sd = sd.get("params_ema", sd.get("params", sd))
    net.load_state_dict(sd, strict=True)
    net.eval()
    im = Image.open(src).convert("RGB")
    x = torch.from_numpy(np.array(im)).permute(2, 0, 1).float().div(255).unsqueeze(0)
    _, _, H, W = x.shape
    out = torch.zeros(1, 3, H*2, W*2)
    t0 = time.time()
    with torch.no_grad():
        for y in range(0, H, tile):
            for xx in range(0, W, tile):
                y0, y1 = max(0, y - pad), min(H, y + tile + pad)
                x0, x1 = max(0, xx - pad), min(W, xx + tile + pad)
                o = net(x[:, :, y0:y1, x0:x1])
                oy, ox = (y - y0)*2, (xx - x0)*2
                th, tw = min(tile, H - y)*2, min(tile, W - xx)*2
                out[:, :, y*2:y*2+th, xx*2:xx*2+tw] = o[:, :, oy:oy+th, ox:ox+tw]
    arr = (out.squeeze(0).permute(1, 2, 0).clamp(0, 1).numpy() * 255).round().astype(np.uint8)
    Image.fromarray(arr).save(dst, "PNG", optimize=True)
    print(f"{dst}: {W}x{H} -> {W*2}x{H*2} in {time.time()-t0:.0f}s")

if __name__ == "__main__":
    upscale(sys.argv[1], sys.argv[2])
