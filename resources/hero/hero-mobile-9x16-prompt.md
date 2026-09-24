# Yutzy hero — 9:16 mobile (straight photo, no gray canvas)

**Attach:** `hero-source-sharpened.jpg` (3800×2138 — the Real-ESRGAN-sharpened full-frame photo).
**Model:** Gemini Pro / 2K output (Flash's ~1 MP is too soft for a 3× phone).

Gemini does the recomposition itself, so the prompt spells out where the building sits.
Building placed **high** in the frame so the lower ~60% is open dusk ground for the headline,
subhead and buttons. (The gray-canvas alternative — `hero-mobile-9x16-composite.png` + the
prompt in git history — is still here if you ever want locked placement instead.)

After you approve a 9:16, use `hero-desktop-16x9-prompt.md` (Option B) to extend it to 16:9.

---

## Prompt

Photorealistic photograph, 9:16 portrait, golden-hour dusk, recomposed from the attached photo for a mobile website hero with text over the lower half.

Keep the building exactly as it appears in the attached photo: the same sage-green vertical steel post-frame building, its cedar timber-frame gable trusses and knee braces, the two bronze-brown overhead garage doors with their rows of windows, the stacked-stone wainscot, the warm glowing gooseneck barn lights, the shed-roof porch with timber posts on the right, and the darker lower wing on the left — the same proportions, colors, three-quarter camera angle, eye level and warm dusk lighting. Do not redraw, restyle, simplify or reproportion any part of it.

Composition: place the building high in the frame. Its roofline (the gable peak) should sit about 11% of the way down from the top edge and its base about 40% of the way down, well above the middle of the frame; everything below that is open ground for text. The building should span about 88% of the frame width, roughly centered, with a little open space on each side. It is fine to trim the far left and right edges of the original scene to achieve this.

Above the building: continue the same clear dusk sky upward to the top edge — the soft blue-to-warm gradient of early evening, matching the photo's sky color and light exactly, clean and uncluttered, at most a few faint high clouds.

Behind the building: keep the dark evening tree line from the photo along a low, flat eastern Kansas horizon.

Below the building, down to the bottom edge: extend the ground toward the camera as a real rural property at dusk. Mowed green lawn at the base of the building gives way to a clean gravel driveway approach that reads as leading up to the overhead doors, squared to the building — its edges in the same perspective as the building's base, so it looks properly set in front of it, not turned. No hard border or curbing: the gravel thins and mixes into the grass along its edges like a natural drive. The building meets the ground with a soft contact shadow along its base.

A broad, soft falloff of the evening light crosses the near foreground, so the lower half of the frame gets gradually darker and lower in contrast toward the bottom edge and white text laid over it stays readable. Everywhere the warm light reaches, keep the same dusk lighting direction and color as on the building. No bright, pale or washed-out ground in the lower half; no bright gravel patches.

No people, vehicles, animals, fences, roads or extra driveways, utility poles or power lines, landscaping or flower beds, text, signage, or additional buildings. No vignette or frame. No watermark.

---

## After Gemini

1. Approve the 9:16 result. If the building isn't high enough or the drive reads crooked, nudge the percentages and regenerate.
2. Upscale 2×: `python upscale/rrdb_upscale.py <gemini-9x16>.png upscale/hero-mobile-esrgan-2x.png` (input must have even width & height — pad if needed, see hero-README).
3. Export WebP q90 → `public/images/hero-mobile.webp`. Ping me to wire the art-directed `<picture>`.
