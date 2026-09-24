# Yutzy hero — 16:9 desktop

Unlike D&M (whose source was a small shed that had to be dropped into an invented scene),
Yutzy's source photo is **already a premium 16:9 landscape at the highest resolution we
have** (1900×1069). So the desktop path is different — and simpler.

## Option A — keep the native photo, just sharpen it  ← DONE (installed)

No Gemini. The real photo is the best desktop asset; we only made it crisper.
Real-ESRGAN 2× → 3800×2138, downscaled to 2560px WebP q88, now live at
`public/images/hero.webp`. The building stays big, dramatic and real; the siding grooves,
timber braces and stone are sharper than the old compressed copy. Nothing invented. This is
the sharpest possible version of the shot, and it's the current desktop hero.

To reproduce: `python upscale/rrdb_upscale.py upscale/hero-desktop-src-even.png upscale/hero-desktop-esrgan-2x.png`
(source padded to even dims first), crop to 3800×2138, resize to 2560w, export WebP q88.

## Option B — derive 16:9 from the approved mobile (9:16 → 16:9 outpaint, then mirror)

This is the "go from 9:16 to 16:9" step. Run it after you've approved the mobile 9:16.

**Why extend right, then mirror:** in this photo the building's left side is crowded (the dark
wing + close trees), so Gemini has nothing real to continue on the left — it comes out empty or
invented. The right side has open room, so we outpaint **to the right** (where it generates
cleanly), which leaves the building on the left and open space on the right. Then we **mirror
the finished image horizontally**, which flips the building to the right and the open space to
the left — exactly where the left-aligned desktop headline needs its clearance. Mirroring is a
lossless flip; the building has no text or handed detail, so it reads fine reversed.

**Attach:** the approved 9:16 Gemini result. **Model:** Gemini Pro / 2K.

---

Expand this image into a 16:9 landscape photograph by extending the scene to the right. Keep everything already in the image exactly as it is, unchanged in every detail and at the same size: the sage-green steel post-frame building, its cedar timber-frame gable trusses, the bronze-brown overhead doors, the stacked-stone wainscot, the glowing gooseneck lights, the porch, the gravel drive it sits on, the lawn, the tree line, the dusk sky and the dusk falloff across the foreground.

Keep the existing image anchored to the left edge of the frame at its full height, so the building stays in the left third: about 2% to 32% of the way across, its roofline about 11% down and its base about 40% down. Do not crop, move or rescale it; only add new scenery to its right.

To the right, continue the same scene seamlessly: the same blue-to-warm dusk sky, a flat eastern Kansas horizon with a low line of distant trees at exactly the same height as in the image, the mowed lawn and, in the foreground, the same clean gravel/grass ground carrying the same dusk falloff so it grows gradually darker toward the bottom edge.

The right 60% of the frame must stay open and quiet: dusk sky over field, with no buildings, trees, poles, fence posts, animals or bright patches on the horizon or in the foreground. Same warm dusk light from the same direction as on the building. Blend seamlessly with no visible seam. No additional buildings, fences, roads, utility poles, vehicles, people, text or signage. No vignette or frame. No watermark.

---

## Mirror + finish (both images)

To keep mobile and desktop consistent, mirror **both** final photos horizontally so the
building faces the same way in each and the open text room lands on the left:

```
python - <<'PY'
from PIL import Image, ImageOps
for f in ["hero-desktop-16x9.png", "hero-mobile-9x16.png"]:
    ImageOps.mirror(Image.open(f)).save(f.replace(".png","-mirrored.png"))
PY
```

Then upscale each mirrored result 2× (`upscale/rrdb_upscale.py`, even dims) and export WebP q88
→ `public/images/hero.webp` (desktop) and `public/images/hero-mobile.webp` (mobile).

Or just send me the two Gemini results and I'll mirror, upscale, and wire the `<picture>`.
