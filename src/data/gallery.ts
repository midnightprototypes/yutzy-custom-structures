// Project gallery images (WebP).
//
// `type` groups each photo by building type so it also appears on that
// building's detail page (every "pole-barns" photo shows on pole-barns.html).
// Valid types (must match a building slug in site.ts):
//   pole-barns · post-frame-garages · hobby-shops · equestrian-barns ·
//   barndominiums · slab-homes
// To move a photo to a different building, just change its `type` here.
// Set type:"" to show a photo only on the main Gallery page.
//
// ALT TEXT — per the client's standing instruction: describe what's actually
// visible in THAT photo, not a copy-pasted category template repeated down
// the file. Two buildings of the same type should still read as two
// different sentences. A few rules of thumb:
//   - Lead with the specific, visible detail (a porch, a door style, a
//     roofline, a color combo) — not just "custom pole barn."
//   - Don't stuff a city/state into every alt tag. Only name a location if
//     you actually know that specific photo's location — otherwise leave it
//     out rather than guess or hedge with "in Kansas or Missouri."
//   - "built by Yutzy Custom Structures" is a fine, accurate suffix to use
//     on some (not all — vary it) since every photo here is real Yutzy work.
//   - Bad: "Post frame home" / "Custom pole barn built by Yutzy Custom
//     Structures in Kansas or Missouri" (this file's old default, don't
//     reuse it). Good: "Red pole barn with three overhead doors, roof
//     cupolas and an attached livestock lean-to."

export const gallery = [
  { src: "images/gallery/g01.webp", type: "barndominiums",      alt: "Barndominium with a covered wraparound porch, timber-frame gable entry and stone accents, built by Yutzy Custom Structures" },
  { src: "images/gallery/g02.webp", type: "barndominiums",      alt: "Two-tone tan and brown barndominium with a covered patio and outdoor seating area" },
  { src: "images/gallery/g03.webp", type: "slab-homes",         alt: "Aerial view of a slab home with an attached shop, covered porch and stone accents" },
  { src: "images/gallery/g04.webp", type: "barndominiums",      alt: "Covered entry with exposed timber-frame trusses, stone wainscoting and glass double doors on a Yutzy barndominium" },
  { src: "images/gallery/g05.webp", type: "post-frame-garages", alt: "Long two-tone post-frame garage with a large overhead door and a row of windows" },
  { src: "images/gallery/g06.webp", type: "barndominiums",      alt: "White barndominium with a covered front porch, wood posts and rocking chairs" },
  { src: "images/gallery/g07.webp", type: "slab-homes",         alt: "White slab home with a wraparound covered porch, rocking chairs and an attached shop wing" },
  { src: "images/gallery/g08.webp", type: "hobby-shops",        alt: "Two-story white hobby shop with a covered patio and pergola" },
  { src: "images/gallery/g09.webp", type: "post-frame-garages", alt: "Post-frame garage with wood-tone carriage-style overhead doors and a gravel driveway" },
  { src: "images/gallery/g10.webp", type: "barndominiums",      alt: "Barndominium with an attached shop wing, two overhead doors and stone wainscoting" },
  { src: "images/gallery/g11.webp", type: "barndominiums",      alt: "Red barndominium under construction with an exposed timber-frame gable entry" },
  { src: "images/gallery/g12.webp", type: "post-frame-garages", alt: "White post-frame garage with three overhead doors and a covered porch entry" },
  { src: "images/gallery/g13.webp", type: "pole-barns",         alt: "Close-up of dark sliding doors and a gooseneck light fixture on a Yutzy pole barn" },
  { src: "images/gallery/g14.webp", type: "hobby-shops",        alt: "Covered porch on a two-tone hobby shop with wooden rocking chairs and string lights" },
  { src: "images/gallery/g15.webp", type: "pole-barns",         alt: "Long post-frame building with a covered porch and a large overhead door" },
  { src: "images/gallery/g16.webp", type: "hobby-shops",        alt: "Close-up of a covered porch eave and gutter detail on a dark metal building with copper-toned trim" },
  { src: "images/gallery/g17.webp", type: "post-frame-garages", alt: "Two red post-frame buildings with overhead doors on a wooded property" },
  { src: "images/gallery/g18.webp", type: "pole-barns",         alt: "Red pole barn with three overhead doors, roof cupolas and an attached livestock lean-to" },
  { src: "images/gallery/g19.webp", type: "post-frame-garages", alt: "Red and black two-tone post-frame garage with a single overhead door" },
  { src: "images/gallery/g20.webp", type: "post-frame-garages", alt: "Red and black two-tone garage with a wide overhead door and walk door" },
  { src: "images/gallery/g21.webp", type: "pole-barns",         alt: "Large post-frame building with wide sliding doors, built by Yutzy Custom Structures" },
  { src: "images/gallery/g22.webp", type: "pole-barns",         alt: "Gray pole barn with rust-toned trim, a gambrel roofline and two carriage-style overhead doors" },
  { src: "images/gallery/g23.webp", type: "barndominiums",      alt: "Red building with a covered porch, rocking chairs, cupola and weathervane" },
  { src: "images/gallery/g24.webp", type: "post-frame-garages", alt: "Tan two-car garage with a covered entry on a wooded hillside lot" },
  { src: "images/gallery/g25.webp", type: "post-frame-garages", alt: "Yellow and brown two-tone garage with a cupola and weathervane" },
  { src: "images/gallery/g26.webp", type: "hobby-shops",        alt: "White hobby shop with a dark overhead door and a row of windows" },
  { src: "images/gallery/g27.webp", type: "pole-barns",         alt: "Wide view of a tan pole barn with a large overhead door" },
  { src: "images/gallery/g28.webp", type: "equestrian-barns",   alt: "White equestrian building with an open lean-to bay and metal livestock panels" },
  { src: "images/gallery/g29.webp", type: "equestrian-barns",   alt: "White equestrian building with an open lean-to, wood posts and livestock panels" },
  { src: "images/gallery/g30.webp", type: "barndominiums",      alt: "Two-story red barndominium with an upper balcony, wraparound porch and stone-clad columns" },

  // === Add tomorrow's new photos below this line ===
  // Copy one row, bump the number (g31, g32...), point `src` at the new
  // file in public/images/gallery/, pick the matching `type` from the list
  // at the top of this file, and write an alt tag describing THAT photo
  // specifically — see the guidance above before reusing a phrase.
];
