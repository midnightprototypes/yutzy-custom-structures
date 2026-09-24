# Hero Photo Rebuild Playbook

A repeatable way to turn one real product photo into art-directed hero images
(mobile 9:16 + desktop 16:9) that are sharp enough to ship and framed to leave
room for headline text. Distilled from the D&M Mini Barns build (which itself
started from the Montana Custom Sheds workflow).

---

## The optimized path (do this)

If you just want the shortest route that worked, follow these seven steps. The
rest of the doc is detail and alternatives.

1. **Pick the flagship product, highest-resolution source you have.** Catalog
   the photos, tier them, and choose the biggest / most premium item — that's
   what the hero should sell. Use the largest original file (not a scraped or
   web-compressed copy); every later step is only as sharp as the source.
2. **Build ONE gray-canvas composite at the mobile ratio (9:16).** Place the
   real photo on a gray canvas at the exact spot you want the subject, then
   mask out everything you want Gemini to *rebuild* (e.g. the parking lot),
   leaving only the subject + sky + immediate background protected. The canvas
   is what locks placement — see "Why the canvas" below.
3. **Generate in Gemini. Use the Pro model / 2K output if you have it.** Flash
   outputs ~1 MP, which is soft on 3× phones and 1920px desktops. The prompt
   template is below.
4. **Derive the other ratio FROM the approved result, in Gemini.** Take the
   9:16 you just approved and outpaint it to 16:9 ("keep everything exactly,
   expand to the left"). This keeps the subject and pad *identical* across both
   images instead of generating two slightly different buildings.
5. **Upscale 2× with Real-ESRGAN x2plus.** Local Python script, ~20s/image on
   CPU. This is the single biggest quality win and the step you asked to carry
   over — details below.
6. **Crop for final framing.** Usually a sky-crop off the top of the mobile
   image to move the subject up and open room for text below.
7. **Install as an art-directed `<picture>` and verify against the live
   layout.** Anchor each crop on the subject's side; measure the subject vs.
   the text at real device sizes. Method below.

---

## Step 1 — Catalog & choose

- Index every photo (a `photo-catalog.md` with tiers works well). Note
  resolution, orientation, and what's in frame.
- Favor the **highest-value product** and a **clean three-quarter angle**.
- Landscape sources extend more easily to 16:9; a portrait source extends more
  easily to 9:16. You'll make both, but the cleaner direction needs less
  invention.

## Step 2 — The Gemini outpaint

### Why the canvas (the key trick)

Gemini does **not** reliably follow numeric position instructions ("put the
subject at 40% down, 75% wide"). It drifts. So don't ask it to *compose* —
ask it to *fill*:

- Composite the real photo onto a flat gray canvas at the target size/ratio,
  positioned exactly where you want the subject in the final frame.
- **Mask (paint gray) anything you want rebuilt.** On D&M the original gravel
  lot read as the shed sitting crooked, so we masked the lot and let Gemini
  build a fresh pad squared to the building.
- Protect (leave untouched) only the subject, the sky, and the mowed field
  right behind it.
- Prompt: *"Fill the flat gray areas of the attached image with continuous
  scenery that matches the photo. Do not modify, move, resize or redraw
  anything in the existing photo region…"*

The gray region is where Gemini paints; the photo region is locked. That's how
you get placement you can actually measure against a text layout.

**Straight-image alternative:** give Gemini the raw photo and describe the
composition in words. Faster to set up, but placement is a roll of the dice.
Use it only when exact position doesn't matter.

### Prompt building blocks that mattered

These are the phrasings that fixed real problems on D&M — reuse them:

- **Square the pad to the building.** *"The pad's outline stays straight and
  square to the building: the long edge parallel to the long wall, the short
  edge parallel to the gable end, the front corner directly below the shed's
  nearest corner, in the same perspective as the base, so it looks properly
  set on it, not turned or hanging off one side."* (Fixes the "subject looks
  crooked on its base" problem.)
- **Natural mound, not a border.** *"No border or edging: the pad's sides
  slope gently down a few inches into the lawn like a natural mound, gravel
  thinning and mixing into the grass along the bottom of the slope."* (A
  timber/wood border looked fake; the mound reads real.)
- **Contact shadow.** *"The subject rests on the pad with a soft contact
  shadow along its base."*
- **Text legibility built into the image.** *"A broad, soft shadow from one of
  the cumulus clouds falls across the near foreground, so the lower half gets
  gradually darker and lower in contrast toward the bottom edge and white text
  laid over it stays readable. No bright white gravel or pale ground in the
  lower half."*
- **Keep the far side quiet for text (16:9).** *"The left 60% of the frame
  must stay open: sky over field, with no buildings, trees, poles, animals or
  bright patches on the horizon or in the foreground."*
- **Negatives, always.** No people, vehicles, animals, fences, roads,
  landscaping, text, signage, additional buildings, vignette or frame.

### Placement targets (from measuring the live layout)

- **Mobile 9:16:** subject roofline ~13% down, base ~40% down, ~75% of frame
  width. On 393–430px phones the eyebrow text starts ~46–52% down, so a base
  at 40% clears it. (Gemini shifted ours ~6% low; the sky-crop in step 6
  fixed it.)
- **Desktop 16:9:** subject in the right third (~63–96% across), roof ~24–36%
  down, base ~58–72% down, so the left-aligned headline clears it.

## Step 5 — Upscale with Real-ESRGAN (the quality win)

Gemini Flash returns ~1 MP. Real-ESRGAN x2plus doubles it and genuinely
sharpens edges (siding grooves, trim, door braces go from mushy to crisp).

- **Script:** `rrdb_upscale.py` (a self-contained RRDBNet x2 implementation,
  no `realesrgan` pip package needed — just `torch`, `pillow`, `numpy`).
- **Weights:** `RealESRGAN_x2plus.pth` (~64 MB, the official public weights).
- **Run:** `python rrdb_upscale.py in.jpg out.png` — CPU is fine, ~20s for a
  ~1 MP image, tiled at 384px so memory stays flat.
- Both the script and weights live in
  `resources/hero/upscale/` on D&M — copy that whole folder to the next
  project as-is. It has no client-specific anything.
- If your source is already 2K+ (e.g. Gemini Pro), you may not need this, or
  you upscale less. Do it after Gemini, before the final crop.

## Step 6 — Final crop

Export to WebP at q90 after upscaling. The common move is cropping sky off the
top of the mobile image to raise the subject and open the lower half for text
(on D&M, 100px off a 768-wide → 200px off the 2× version).

## Step 7 — Install as art-directed `<picture>` + verify

A single `<Image>` can't serve both shapes — cropped to a phone, the 16:9
loses the subject off the edge. So:

- Give the hero component an optional `mobileImage`. Render a `<picture>`:
  `<source media="(max-width:1100px) and (orientation:portrait)">` for the
  9:16, `<img>` (the 16:9) as the default. (1100px, not 860 — portrait tablets
  like the iPad Pro 1024×1366 want the tall one too, or the subject lands
  under the headline.)
- **Anchor each crop on the subject's side** with `object-position`: wide photo
  `100% 50%` (loses sky on the left, never the building); tall photo `50% 0`
  (loses foreground at the bottom, never the roof).
- If there's a slow zoom, set its `transform-origin` on the subject so it grows
  in place instead of pushing the roof under the header.
- Portrait tablets: let the hero run near full height and slide the photo up so
  the roof sits just under the header — otherwise the text overlaps the subject.

**Verification (don't eyeball a screenshot):** load the live/deployed layout,
freeze the hero animation, and compute the subject's on-screen position with
object-fit *cover* math, then compare to the text top:

```
s  = max(heroW / imgW, heroH / imgH)          // cover scale
ox = (imgW*s - heroW) * objPosX               // 0..1 from object-position
oy = (imgH*s - heroH) * objPosY
screenX = frac_x * imgW * s - ox              // frac_* = subject feature as a
screenY = frac_y * imgH * s - oy              //          fraction of the image
```

Check at 393×852, 412×892, 768×1024, 820×1180, 1024×1366, and a desktop width.
You want positive clearance between the subject's base and the eyebrow/headline
top at every size. Local builds on this network drive drop CSS — measure on the
Vercel deploy, not `dist/`.

---

## Gotchas learned the hard way

- **Gemini ignores numeric positions** → use the gray canvas.
- **Organic/irregular pad = "crooked" subject** → square the pad, mask the lot.
- **Wood/timber border looks fake** → natural gravel mound.
- **Flash ~1 MP is soft** → Real-ESRGAN 2× (or generate at 2K).
- **One image for all screens fails** → art-directed `<picture>`, crops
  anchored on the subject side.
- **860px breakpoint misses portrait tablets** → use 1100px + portrait.
- **A hidden browser pane won't advance CSS animations/rAF** → freeze the
  animation before measuring, or measure computed styles directly.
- **Don't judge styling from a local `dist/` build here** → the network drive
  drops CSS; check the live deploy.

---

## What to copy to the next project

1. `resources/hero/upscale/` (script + weights) — verbatim.
2. This file.
3. The four prompt files in `resources/hero/` as templates
   (`deluxe-skyview-9x16-prompt.md`, `-straight`, `-16x9-*`,
   `-16x9-prompt-from-mobile.md`) — swap the subject/place wording.
4. The `<picture>` art-direction pattern from `OverlayHero.astro` +
   `Layout.astro` (`.ohero-art` rules).
