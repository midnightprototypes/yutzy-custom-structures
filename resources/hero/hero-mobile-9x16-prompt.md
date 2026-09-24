# Yutzy hero — 9:16 mobile (gray-canvas outpaint)

**Attach:** `hero-mobile-9x16-composite.png` (1152×2048).
**Model:** Gemini Pro / 2K output (Flash's ~1 MP is too soft for a 3× phone).

## What this is

The source (`public/images/hero.webp`, 1900×1069) is a wide landscape shot where the
building nearly fills the frame — great for desktop, wrong shape for a phone. This
composite keeps the **real building pixels** placed in the upper third of a 9:16 canvas
and grays out the sky above and a large foreground below for Gemini to paint. The
building, its lights, the stone, the timber trusses and the tree line are the locked
photo region; only the flat gray gets filled.

## Placement (measured against the live mobile hero)

- Roofline (gable peak) ~12% down · building base ~35% down · building fills the full width.
- The lower ~60% (grayed) becomes the dusk foreground the 2-line headline, subhead and
  buttons sit over. Yutzy's mobile hero overlays text on the lower half with a dark scrim,
  so a long, low-contrast foreground here is exactly what we want.
- **Tunable:** to make the building larger, regenerate the composite with a lighter side-crop
  (see `hero-README.md`); to raise/lower it, change `ROOF_CANVAS`.

---

## Prompt

Photorealistic photograph, 9:16 portrait, golden-hour dusk. Fill the flat gray areas of the attached image with continuous scenery that matches the photo. Do not modify, move, resize or redraw anything in the existing photo region: the sage-green vertical steel post-frame building, its cedar timber-frame gable trusses and knee braces, the two bronze-brown overhead garage doors with their rows of windows, the stacked-stone wainscot, the warm glowing gooseneck barn lights, the shed-roof porch with timber posts on the right, the dark lower wing on the left, and the trees and dusk sky must stay exactly as they are, at the same size and in the same place.

Below the building, extend the ground toward the camera as a real rural property in eastern Kansas at dusk: mowed green lawn directly at the base of the building, giving way to a clean gravel driveway approach that reads as leading up to the overhead doors, squared to the building — the drive's edges in the same perspective as the building's base, so it looks properly set in front of it, not turned. No hard border or curbing: the gravel thins and mixes into the grass along its edges like a natural drive. The building meets the ground with a soft contact shadow along its base. Natural ground texture, but no single distracting object.

Above the building, continue the same clear dusk sky upward: the soft blue-to-warm gradient of early evening, matching the existing sky's color and light exactly, clean and uncluttered, with at most a few faint high clouds. Keep the same camera height, eye level and horizon.

The lower half of the frame stays gradually darker and lower in contrast toward the bottom edge — the warm dusk light falling off into cooler evening shadow across the foreground — so white text laid over the bottom of the image stays readable. No bright, pale or washed-out ground in the lower half; no bright gravel patches. Keep the same warm dusk lighting direction and color as on the building. Blend every edge seamlessly, with no visible seam between the photo and the filled areas.

No people, vehicles, animals, fences, roads, additional driveways, landscaping or flower beds, power lines or poles, text, signage, or additional buildings. No vignette or frame. No watermark.

---

## After Gemini

1. Approve the 9:16 result (regenerate if the drive reads crooked or the foreground is too bright).
2. Upscale 2×: `python upscale/rrdb_upscale.py <gemini-9x16>.png upscale/hero-mobile-esrgan-2x.png`
3. Crop sky off the top only if the building needs to sit higher (see playbook Step 6).
4. Export WebP q90 → `public/images/hero-mobile.webp`. Ping me to wire the art-directed `<picture>`.
