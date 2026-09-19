// Project gallery images (WebP).
//
// `type` groups each photo by building type so it also appears on that
// building's detail page (every "pole-barns" photo shows on pole-barns.html).
// Valid types (must match a building slug in site.ts):
//   pole-barns · post-frame-garages · hobby-shops · equestrian-barns ·
//   barndominiums · slab-homes · post-frame-homes
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
//
// 2026-09-19: full photo refresh — all 45 photos below (including g01-g30,
// which reused the prior filenames with entirely new content) came from
// N:\Clients\Co-Creative\Yutzy\photos\New Photos\site-ready-dropin\gallery.
// This is also the first real batch of Post-Frame Homes photos.

export const gallery = [
  { src: "images/gallery/g01.webp", type: "barndominiums",      alt: "Charcoal two-story barndominium with a covered wraparound porch, hanging flower baskets and a picnic table" },
  { src: "images/gallery/g02.webp", type: "barndominiums",      alt: "Bright red two-story barndominium with a stone-clad porch and a wood balcony off the upper level" },
  { src: "images/gallery/g03.webp", type: "post-frame-homes",   alt: "Red and white post-frame home with an open timber-frame porch on black steel brackets" },
  { src: "images/gallery/g04.webp", type: "barndominiums",      alt: "White two-story barndominium with twin roof cupolas and an attached carport" },
  { src: "images/gallery/g05.webp", type: "post-frame-homes",   alt: "Close-up of an exposed timber-frame gable entry with black steel connectors on a post-frame home" },
  { src: "images/gallery/g06.webp", type: "barndominiums",      alt: "Charcoal barndominium with stone wainscoting, a timber-frame entry and an attached three-bay shop" },
  { src: "images/gallery/g07.webp", type: "slab-homes",         alt: "Tan slab home with stone wainscoting and an attached shop wing with wood-tone overhead doors" },
  { src: "images/gallery/g08.webp", type: "pole-barns",         alt: "Tan pole barn with solar panels and a covered lean-to next to a fenced pasture" },
  { src: "images/gallery/g09.webp", type: "equestrian-barns",   alt: "Row of horse stalls with black metal fronts inside a post-frame equestrian barn" },
  { src: "images/gallery/g10.webp", type: "post-frame-garages", alt: "Tan post-frame garage with a covered side porch and a single wood post" },
  { src: "images/gallery/g11.webp", type: "pole-barns",         alt: "Open-sided pole barn sheltering a tractor and farm equipment" },
  { src: "images/gallery/g12.webp", type: "pole-barns",         alt: "Red and white pole barn with cattle grazing in the pasture out front" },
  { src: "images/gallery/g13.webp", type: "equestrian-barns",   alt: "Tan equestrian barn with a covered porch and a horse near the round pen" },
  { src: "images/gallery/g14.webp", type: "pole-barns",         alt: "Red pole barn with a covered porch and wicker seating" },
  { src: "images/gallery/g15.webp", type: "pole-barns",         alt: "Open-sided pole barn storing farm equipment" },
  { src: "images/gallery/g16.webp", type: "pole-barns",         alt: "Red and white pole barn with a split roofline at dusk" },
  { src: "images/gallery/g17.webp", type: "pole-barns",         alt: "Large open-bay pole barn under construction" },
  { src: "images/gallery/g18.webp", type: "pole-barns",         alt: "Large tan commercial pole barn with five matching overhead doors" },
  { src: "images/gallery/g19.webp", type: "equestrian-barns",   alt: "White equestrian barn with a row of evenly spaced stall windows" },
  { src: "images/gallery/g20.webp", type: "equestrian-barns",   alt: "Gray equestrian barn with three horses sheltered under an open lean-to" },
  { src: "images/gallery/g21.webp", type: "post-frame-garages", alt: "Brown two-car garage with green trim and roof" },
  { src: "images/gallery/g22.webp", type: "pole-barns",         alt: "Simple red pole barn with a single overhead door in an open field" },
  { src: "images/gallery/g23.webp", type: "barndominiums",      alt: "Tan barndominium with a stone-clad timber-frame entry and an attached shop" },
  { src: "images/gallery/g24.webp", type: "post-frame-garages", alt: "Red two-car garage with green trim and a covered carport" },
  { src: "images/gallery/g25.webp", type: "post-frame-garages", alt: "Green and tan two-car garage tucked into a wooded lot" },
  { src: "images/gallery/g26.webp", type: "hobby-shops",        alt: "Navy and white pool house with a covered porch and hanging flower baskets beside an in-ground pool" },
  { src: "images/gallery/g27.webp", type: "post-frame-garages", alt: "Tan and brown four-bay garage with a roof cupola" },
  { src: "images/gallery/g28.webp", type: "post-frame-garages", alt: "Tan and brown two-car garage with a Yutzy nameplate on the peak" },
  { src: "images/gallery/g29.webp", type: "post-frame-garages", alt: "Gray three-bay garage with a covered entry and landscaped stone accents" },
  { src: "images/gallery/g30.webp", type: "post-frame-garages", alt: "White two-car garage with an open carport and a curved driveway" },
  { src: "images/gallery/g31.webp", type: "hobby-shops",        alt: "Gray and white hobby shop with a covered sitting porch" },
  { src: "images/gallery/g32.webp", type: "post-frame-homes",   alt: "Modern white post-frame home with black-framed windows and a two-story gable" },
  { src: "images/gallery/g33.webp", type: "slab-homes",         alt: "Gray slab home with a full-length covered porch and stone-clad columns" },
  { src: "images/gallery/g34.webp", type: "slab-homes",         alt: "Close-up of an arched wood front door with sidelights on a slab home" },
  { src: "images/gallery/g35.webp", type: "post-frame-homes",   alt: "Tan post-frame home with stone wainscoting and a covered gable entry" },
  { src: "images/gallery/g36.webp", type: "barndominiums",      alt: "White barndominium with a covered porch and an attached two-bay shop" },
  { src: "images/gallery/g37.webp", type: "post-frame-homes",   alt: "White post-frame home with a timber-frame covered patio and ceiling fan" },
  { src: "images/gallery/g38.webp", type: "hobby-shops",        alt: "Blue hobby shop with a covered porch and no overhead door" },
  { src: "images/gallery/g39.webp", type: "pole-barns",         alt: "Tan and maroon pole barn with multiple walk doors" },
  { src: "images/gallery/g40.webp", type: "post-frame-homes",   alt: "Gray post-frame home with stone wainscoting and an attached two-car garage" },
  { src: "images/gallery/g41.webp", type: "slab-homes",         alt: "White slab home with a covered back porch overlooking a pond" },
  { src: "images/gallery/g42.webp", type: "slab-homes",         alt: "Brown ranch-style home with a full-length wraparound covered porch" },
  { src: "images/gallery/g43.webp", type: "slab-homes",         alt: "Tan slab home, rear elevation with matching windows" },
  { src: "images/gallery/g44.webp", type: "post-frame-homes",   alt: "Elegant post-frame home with a stone-columned covered porch and timber-frame entry" },
  { src: "images/gallery/g45.webp", type: "pole-barns",         alt: "White pole barn with red trim and an open drive-through bay for RV storage" },

  // === Add the next batch of new photos below this line ===
  // Copy one row, bump the number (g46, g47...), point `src` at the new
  // file in public/images/gallery/, pick the matching `type` from the list
  // at the top of this file, and write an alt tag describing THAT photo
  // specifically — see the guidance above before reusing a phrase.
];
