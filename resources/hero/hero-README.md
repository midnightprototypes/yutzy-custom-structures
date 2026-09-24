# Yutzy hero photo pipeline

Following the Hero Photo Rebuild Playbook (`HERO-PHOTO-PLAYBOOK.md`, copied from D&M).
Flagship build chosen: the current hero (`public/images/hero.webp`, 1900×1069) — the premium
sage-green timber-frame shop/barndo at dusk. No higher-res original is available yet; if
Yutzy provides the camera original later, re-run from Step 1 for a sharper result.

## Files here

| File | What it is |
|---|---|
| `hero-mobile-9x16-composite.png` | Gray-canvas composite for Gemini (mobile 9:16). Real building locked, sky+foreground grayed to fill. |
| `hero-mobile-9x16-prompt.md` | Tuned Gemini fill prompt for the composite above. |
| `hero-desktop-16x9-prompt.md` | Desktop plan — Option A (keep native + sharpen, recommended) and Option B (outpaint from mobile). |
| `upscale/rrdb_upscale.py` | Real-ESRGAN x2plus (self-contained RRDBNet). `python rrdb_upscale.py in out.png`. |
| `upscale/RealESRGAN_x2plus.pth` | Weights (~64 MB, gitignored — carried by the skill, not source-controlled). |
| `upscale/hero-desktop-esrgan-2x.png` | 2× upscale of the desktop photo (gitignored intermediate). |
| `HERO-PHOTO-PLAYBOOK.md` | The full playbook. |

## Where this project stands

- **Step 1 (pick flagship):** done — current hero photo.
- **Step 2 (mobile composite):** done — `hero-mobile-9x16-composite.png`.
- **Step 3 (Gemini mobile):** TODO — run `hero-mobile-9x16-prompt.md` in Gemini Pro/2K.
- **Step 4 (desktop):** Option A recommended — sharpen the native photo, no Gemini (see below).
- **Step 5 (upscale):** desktop upscale run here; mobile upscale after Gemini.
- **Step 6 (crop):** as needed.
- **Step 7 (install `<picture>`):** TODO — `OverlayHero.astro` currently renders a single `<img>`;
  add an optional `mobileImage` + art-directed `<picture>` once both images exist. Ping to wire it.

## Regenerating the mobile composite (tunable)

`hero-mobile-9x16-composite.png` was built by placing the real photo full-width on a 1152×2048
canvas with the roofline at 12% and the building base at ~35%, graying the sky above and the
lower ~60% for Gemini to paint. To change the framing, edit and re-run the composite builder
(the PIL snippet in the session / commit): raise `ROOF_CANVAS` to lower the building, or scale
the photo wider than the canvas (side-crop) to make the building larger and shrink the invented
foreground.

## Desktop, Option A (recommended) — the quick path

```
cd resources/hero/upscale
python rrdb_upscale.py hero-desktop-src.webp hero-desktop-esrgan-2x.png   # 2x, needs even dims
# then downscale to ~2560 wide, export WebP q88 -> public/images/hero.webp
```

Note: the upscaler's `pixel_unshuffle` needs even input dimensions; the source's 1069px height
is odd, so pad to even (replicate the last row) before upscaling, then crop the 2× output back.
