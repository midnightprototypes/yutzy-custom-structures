# Yutzy hero photo pipeline

Following the Hero Photo Rebuild Playbook (`HERO-PHOTO-PLAYBOOK.md`, copied from D&M).
Flagship build chosen: the current hero (`public/images/hero.webp`, 1900×1069) — the premium
sage-green timber-frame shop/barndo at dusk. No higher-res original is available yet; if
Yutzy provides the camera original later, re-run from Step 1 for a sharper result.

## Files here

Mobile approach chosen: **straight photo + prompt** (Gemini recomposes; we tell it where to
place the building), not the gray canvas. The composite is kept as an alternative.

| File | What it is |
|---|---|
| `hero-source-sharpened.jpg` | The Real-ESRGAN-sharpened full-frame photo (3800×2138). **Feed this to Gemini** for the mobile 9:16. |
| `hero-mobile-9x16-prompt.md` | Straight-photo Gemini prompt — building placed high, dusk foreground below for text. |
| `hero-desktop-16x9-prompt.md` | Desktop plan — Option A (sharpen native, DONE/installed) and Option B (9:16 → 16:9 outpaint). |
| `hero-mobile-9x16-composite.png` | Gray-canvas alternative (locked placement) if you ever want it instead. |
| `upscale/rrdb_upscale.py` | Real-ESRGAN x2plus (self-contained RRDBNet). `python rrdb_upscale.py in out.png`. |
| `upscale/RealESRGAN_x2plus.pth` | Weights (~64 MB, gitignored — carried by the skill, not source-controlled). |
| `HERO-PHOTO-PLAYBOOK.md` | The full playbook. |

## Where this project stands

- **Step 1 (pick flagship):** done — current hero photo.
- **Step 4/5 (desktop):** DONE — native photo sharpened 2× and installed as `public/images/hero.webp` (2560×1440 WebP).
- **Step 2/3 (mobile):** mobile 9:16 generated from the straight prompt — good result.
- **9:16 → 16:9:** Option B in `hero-desktop-16x9-prompt.md` — **outpaint to the RIGHT** (the side
  with room; the left is crowded and won't generate), then **mirror both** final images so the
  building faces the same way and the open text room lands on the left for the desktop headline.
- **Step 5 (mobile upscale):** after mirroring — `upscale/rrdb_upscale.py` (even dims).
- **Step 7 (install `<picture>`):** TODO — `OverlayHero.astro` renders a single `<img>`; add an
  optional `mobileImage` + art-directed `<picture>` once both mirrored images exist. Send me the
  two Gemini results and I'll mirror, upscale, and wire it.

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
