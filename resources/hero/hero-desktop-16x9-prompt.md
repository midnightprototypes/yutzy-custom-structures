# Yutzy hero — 16:9 desktop

Unlike D&M (whose source was a small shed that had to be dropped into an invented scene),
Yutzy's source photo is **already a premium 16:9 landscape at the highest resolution we
have** (1900×1069). So the desktop path is different — and simpler.

## Option A — keep the native photo, just sharpen it  ← recommended

No Gemini. The real photo is the best desktop asset; we only make it crisper.

1. `python upscale/rrdb_upscale.py upscale/hero-desktop-src.webp upscale/hero-desktop-esrgan-2x.png`
   (2× → 3800×2138; Real-ESRGAN cleans the web-compression softness in the siding grooves,
   timber braces and stone).
2. Downscale to ~2560 wide and export WebP q88 → `public/images/hero.webp` (replaces the
   current one). 2560px covers a 2× retina desktop hero without bloating the page.

Why recommended: the building stays big, dramatic and real; nothing is invented; it's the
sharpest possible version of the shot you already approved. The current live desktop hero
already uses this framing and works — this just upgrades its resolution.

Trade-off: the building fills center-right, so the left-aligned desktop headline sits over
the sky/tree area on the left with the scrim carrying it (as it does today). If you want a
cleaner, more open left side for the headline, use Option B instead.

## Option B — derive 16:9 from the approved mobile (outpaint left)

The playbook's canonical flow. Use this only if you want desktop to exactly match the mobile
image (same invented dusk foreground) and a wide-open left third for the headline. The
building ends up smaller, anchored in the right third — and it's a Gemini re-gen, so slightly
lower fidelity than Option A.

**Attach:** the approved 9:16 Gemini result. **Model:** Gemini Pro / 2K.

---

Expand this image into a 16:9 landscape photograph by extending the scene to the left. Keep everything already in the image exactly as it is, unchanged in every detail and at the same size: the sage-green steel post-frame building, its cedar timber-frame gable trusses, the bronze-brown overhead doors, the stacked-stone wainscot, the glowing gooseneck lights, the porch, the gravel drive it sits on, the lawn, the tree line, the dusk sky and the cloud/shadow falloff across the foreground.

Keep the existing image anchored to the right edge of the frame at its full height, so the building stays in the right third: about 68% to 98% of the way across, its roof about 12% down and its base about 35% down. Do not crop, move or rescale it; only add new scenery to its left.

To the left, continue the same scene seamlessly: the same blue-to-warm dusk sky, a flat eastern Kansas horizon with a low line of distant trees at exactly the same height as in the image, the mowed lawn and, in the foreground, the same clean gravel/grass ground carrying the same dusk falloff so it grows gradually darker toward the bottom edge.

The left 60% of the frame must stay open and quiet: dusk sky over field, with no buildings, trees, poles, fence posts, animals or bright patches on the horizon or in the foreground. Same warm dusk light from the same direction as on the building. Blend seamlessly with no visible seam. No additional buildings, fences, roads, utility poles, vehicles, people, text or signage. No vignette or frame. No watermark.

---

Then upscale the 16:9 result 2× and export WebP q88 → `public/images/hero.webp`.
