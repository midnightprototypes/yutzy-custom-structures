// SINGLE SOURCE OF TRUTH for the whole site.
// Change a phone number, address, building, or review here once and every
// page updates. This is what keeps the site consistent as it grows.

export const business = {
  name: "Yutzy Custom Structures",
  tagline: "Handcrafted post-frame buildings, built to last.",
  // Main line to call (Kansas HQ). Missouri is a secondary local line.
  phoneMain: "1-785-336-9051",
  phoneMainHref: "+17853369051",
  phoneMO: "(417) 329-2340",
  phoneMOHref: "+14173292340",
  hoursShort: "Mon–Fri 8–5",
  hours: "Mon–Fri 8am–5pm",
  address: { street: "24917 N Hwy 169", city: "Garnett", region: "KS", zip: "66032", country: "US" },
  areaServed: ["Kansas", "Missouri"],
  logo: "logo.png",
  url: "https://www.yutzyconstruction.com",
  facebook: "https://www.facebook.com/yutzyconstruction",
  houzz: "https://www.houzz.com/pro/yutzycustomstructures/yutzy-custom-structures",
  // Google reviews summary shown as a live badge. Update rating/count as it
  // grows; swap url for the exact Google reviews link when handy.
  google: {
    rating: "4.4",
    count: 88,
    url: "https://www.google.com/search?q=Yutzy+Custom+Structures+reviews",
  },
  // Paste the GoHighLevel form embed URL here when ready (see references/ghl-form.md).
  ghlFormEmbedUrl: "",
  // GoHighLevel inbound-webhook URL for the custom quote form. When set, form
  // submissions POST here and flow into the CRM. Leave "" until you have it.
  quoteWebhookUrl: "",
};

export type Building = {
  slug: string;
  name: string;
  img: string;
  alt: string;
  blurb: string;      // short line for the homepage card
  tagline: string;    // hero subhead on the detail page
  intro: string;      // opening paragraph on the detail page
  features: string[]; // 4 selling points
  seoTitle: string;
  seoDesc: string;
};

// Photos currently hotlinked from their live site as placeholders.
// Swap for optimized local originals before final launch.
export const buildings: Building[] = [
  {
    slug: "pole-barns",
    name: "Pole Barns",
    img: "images/pole-barns.webp",
    alt: "Agricultural post-frame pole barn built in Kansas",
    blurb: "Durable post-frame barns for storage, livestock, and equipment.",
    tagline: "Durable, versatile post-frame barns built to your needs.",
    intro: "Pole barns are our specialty. Using post-frame construction, we build strong, cost-effective barns for agriculture, storage, livestock, and equipment — sized, colored, and doored exactly the way you need. Every build comes with our sturdier framing and a 5-year warranty.",
    features: [
      "Custom sizes, colors, and door layouts",
      "Built for ag, storage, and equipment",
      "Sturdier post-frame construction",
      "Backed by our 5-year warranty",
    ],
    seoTitle: "Pole Barn Builders in Kansas & Missouri",
    seoDesc: "Custom post-frame pole barns for storage, livestock, and equipment — built sturdy by Yutzy's Amish crews and backed by a 5-year warranty. Free quotes in KS & MO.",
  },
  {
    slug: "post-frame-garages",
    name: "Post-Frame Garages",
    img: "images/post-frame-garages.webp",
    alt: "Residential post-frame garage with overhead doors",
    blurb: "Attached or standalone garages built to match your property.",
    tagline: "Room for vehicles, RVs, boats, and everything else.",
    intro: "Whether you need a simple one-bay garage or a tall RV and boat shelter, we build post-frame garages that match your home and your needs. Attached or standalone, with the door sizes and heights that fit your vehicles.",
    features: [
      "One to four-plus bays",
      "RV and boat height options",
      "Styled to match your home",
      "Insulation and finishing options",
    ],
    seoTitle: "Post-Frame Garage Builders in Kansas & Missouri",
    seoDesc: "Custom post-frame garages for cars, RVs, and boats — attached or standalone, styled to match your home. Free quotes across Kansas & Missouri.",
  },
  {
    slug: "hobby-shops",
    name: "Hobby Shops",
    img: "images/hobby-shops.webp",
    alt: "Large hobby shop with three overhead garage doors",
    blurb: "Workshops and she-sheds sized for the way you actually work.",
    tagline: "The workshop, she-shed, or home-business space you've wanted.",
    intro: "A hobby shop is where projects happen. We build insulated, finish-ready workshops sized around how you actually work — with the doors, windows, and layout to make it yours. Great for woodworking, small business, she-sheds, and man caves.",
    features: [
      "Insulated and finish-ready",
      "Overhead and walk-in doors",
      "Fully custom sizing",
      "Wired-ready for your setup",
    ],
    seoTitle: "Hobby Shop & Workshop Builders in Kansas & Missouri",
    seoDesc: "Custom post-frame hobby shops, workshops, and she-sheds — insulated and finish-ready, sized to your needs. Free quotes in Kansas & Missouri.",
  },
  {
    slug: "equestrian-barns",
    name: "Equestrian Barns",
    img: "images/equestrian-barns.webp",
    alt: "Custom post-frame equestrian barn",
    blurb: "Horse barns with the stalls, airflow, and storage you need.",
    tagline: "Horse barns designed around your animals and your routine.",
    intro: "We build equestrian barns with the stalls, ventilation, and storage that keep horses healthy and chores easy. From a few stalls to a full facility, we design the layout, airflow, and tack and hay storage around the way you work.",
    features: [
      "Custom stall layouts",
      "Proper ventilation and lighting",
      "Tack and hay storage",
      "Built to hold up to daily use",
    ],
    seoTitle: "Equestrian & Horse Barn Builders in Kansas & Missouri",
    seoDesc: "Custom post-frame equestrian barns with stalls, ventilation, and storage designed around your horses. Free quotes across Kansas & Missouri.",
  },
  {
    slug: "barndominiums",
    name: "Barndominiums",
    img: "images/barndominiums.webp",
    alt: "Modern barndominium with metal roof, stone accents, and attached garage",
    blurb: "Living space and shop under one sturdy, efficient roof.",
    tagline: "Home and shop under one sturdy, efficient roof.",
    intro: "A barndominium combines comfortable living space and a working shop in one efficient building. We design custom floor plans with the finishes, insulation, and style you want — energy-efficient and built to last, with the option to add stone and metal accents.",
    features: [
      "Living space and shop combined",
      "Fully custom floor plans",
      "Energy-efficient and well-insulated",
      "Stone and metal accent options",
    ],
    seoTitle: "Barndominium Builders in Kansas & Missouri",
    seoDesc: "Custom barndominiums that combine living space and a shop under one efficient roof. Family-owned Amish craftsmanship across Kansas & Missouri.",
  },
  {
    slug: "slab-homes",
    name: "Slab Homes",
    img: "images/slab-homes.webp",
    alt: "Gray slab-foundation home with metal roof and attached garage",
    blurb: "Stud-frame new-construction homes, with optional attached barns.",
    tagline: "Stud-frame new-construction homes with a unique building style.",
    intro: "We also build stud-frame homes on slab foundations — ranchers and custom plans with the efficient, well-insulated construction Yutzy is known for. Add an attached barn or garage for the best of both worlds.",
    features: [
      "Ranchers and custom plans",
      "Optional attached barn or garage",
      "Well-insulated and efficient",
      "A unique, quality-first build",
    ],
    seoTitle: "Slab Home & Residential Builders in Kansas & Missouri",
    seoDesc: "Stud-frame new-construction slab homes — ranchers and custom plans with optional attached barns. Family-owned builders serving Kansas & Missouri.",
  },
];

// Real 5-star reviews pulled from the company's Houzz profile.
// Featured reviews shown in the scrolling carousel. Add/remove freely — set
// `stars` (1–5) and `source` ("Google" / "Houzz"). Keep quotes accurate.
export const testimonials = [
  { stars: 5, name: "Diane Hirt", source: "Google", quote: "Very pleased with the entire crew from project team to completion and all crews in between. Not only are they precise and quick, but the attention to detail is beyond compare. We recommend Yutzy to friends and family any chance we get." },
  { stars: 5, name: "Aaron Woods", source: "Google", quote: "Highly recommend Yutzy Custom Structures! From start to finish, these guys were outstanding. The sales team was knowledgeable, patient, and never pushy — they listened to exactly what we wanted." },
  { stars: 5, name: "Jacob McCoy", source: "Google", quote: "YCS was outstanding! In the often-intimidating world of barndominium builders, it's important to find a company you can trust. YCS proved to be extremely professional and transparent throughout our project." },
  { stars: 5, name: "Mark Munoz", source: "Google", quote: "After researching different companies, I'm glad I did business with Yutzy. Just completed a 40x60x14 post frame — all employees were professional and completed each job in a timely manner." },
  { stars: 5, name: "Brian Huff", source: "Google", quote: "Yutzy was a fantastic company to work with. I was very impressed with all of the crews. They listened to my input and the quality of their work was second to none. The building material was also first class." },
  { stars: 5, name: "Katee Smith", source: "Google", quote: "YCS did an amazing job on my workshop (30x40x12)! I'd been waiting 10 years to have a shop, and they made it happen." },
  { stars: 5, name: "Shaun Smith", source: "Google", quote: "I wanted to share our absolutely positive experience with the team at YCS. When we moved to the country, a workshop was always a dream of ours — and they made it a reality." },
  { stars: 5, name: "Morgan Messer", source: "Google", quote: "I talked with Yutzy about my dream dog grooming and boarding facility and they were able to make it happen! I am beyond thankful for everyone who worked hard on this project for me." },
  { stars: 5, name: "Rhonda Behm", source: "Google", quote: "We used Yutzy for our home/barn. They were on schedule, we had no delays, and the crew worked whether it was icy, snowy, or windy. They cut no corners." },
  { stars: 4, name: "Nikki Ingram", source: "Google", quote: "We love our new building! The crew that installed it was top notch. The building went up quickly, the quality of work was great, and they cleaned up well." },
  { stars: 5, name: "Dave", source: "Google", quote: "They were great to work with and did a great job. If you're interested in a new building, I would definitely recommend them." },
  { stars: 5, name: "Michelle Hesselman", source: "Google", quote: "Yutzy did a great job erecting our building, with great customer service. Everyone from initial bids to finance, construction, and post-construction support was great to work with." },
  { stars: 5, name: "Jarrett Ross", source: "Google", quote: "They did a very nice job on my shop." },
  { stars: 5, name: "Michelle Honn", source: "Houzz", quote: "We worked with Yutzy to build our family home on 3 acres. They were very efficient, great at communicating, and did a fantastic job — a very nice, well-insulated home." },
  { stars: 5, name: "Verified Houzz customer", source: "Houzz", quote: "Amazing — fast and in touch throughout the whole process. Vernon kept me updated the whole way, and I love my building." },
  { stars: 5, name: "Verified Houzz customer", source: "Houzz", quote: "Just about finished with our home. I hired Yutzy to build our structure and they did an amazing job." },
];

// Service-area / location pages for local SEO. Swap these cities for the real
// target markets any time — each one generates its own page automatically.
export type Location = {
  slug: string; city: string; state: string; county: string;
  intro: string; nearby: string[];
};
export const locations: Location[] = [
  {
    slug: "ottawa-ks", city: "Ottawa", state: "KS", county: "Franklin County",
    intro: "Just up US-59 from our Garnett shop, Ottawa and the rest of Franklin County are right in our backyard. We build custom pole barns, post-frame garages, hobby shops, and barndominiums on acreages and farms across the area — delivered and installed by our own crews, not subcontractors.",
    nearby: ["Wellsville", "Pomona", "Williamsburg", "Princeton"],
  },
  {
    slug: "emporia-ks", city: "Emporia", state: "KS", county: "Lyon County",
    intro: "From the Flint Hills around Emporia to the farms of Lyon County, we build post-frame buildings made for real Kansas weather. Whether it's a machine shed, a horse barn, or a full barndominium, our Amish craftsmanship and 5-year warranty travel well past the city limits.",
    nearby: ["Americus", "Olpe", "Hartford", "Reading"],
  },
  {
    slug: "overland-park-ks", city: "Overland Park", state: "KS", county: "Johnson County",
    intro: "For homeowners on the edges of the Kansas City metro, we bring true post-frame construction to Overland Park and the surrounding Johnson County countryside — detached garages, workshops, and barndominiums built to suburban standards with rural durability.",
    nearby: ["Olathe", "Gardner", "Spring Hill", "Stilwell"],
  },
  {
    slug: "lawrence-ks", city: "Lawrence", state: "KS", county: "Douglas County",
    intro: "Around Lawrence and Douglas County, we help landowners add the shop, barn, or barndominium their property has been missing. Every build is custom-sized and finished to fit the way you'll actually use it — backed by our workmanship warranty.",
    nearby: ["Eudora", "Baldwin City", "Lecompton", "Overbrook"],
  },
  {
    slug: "kansas-city-mo", city: "Kansas City", state: "MO", county: "Jackson County",
    intro: "We proudly cross the state line to serve Kansas City and western Missouri. From post-frame garages and hobby shops to full barndominiums, our crews deliver the same builder-backed quality on the Missouri side that Yutzy is known for across Kansas.",
    nearby: ["Lee's Summit", "Blue Springs", "Grandview", "Belton"],
  },
];

// Metal roof/siding colors (Sherwin-Williams coil coatings via United Steel
// Supply) — the real chart Yutzy offers. Hex values are close matches; nudge
// any of them to taste. Used by the color visualizer.
export const metalColors = [
  { name: "Brilliant White", hex: "#f7f7f3" },
  { name: "Alamo White", hex: "#efeee4" },
  { name: "Ivory", hex: "#e8e6ce" },
  { name: "Light Stone", hex: "#d2d5bd" },
  { name: "Tan", hex: "#b49b73" },
  { name: "Taupe", hex: "#9a9a85" },
  { name: "Ash Gray", hex: "#a6b0ab" },
  { name: "Pewter Gray", hex: "#8a9092" },
  { name: "Copper Metallic", hex: "#8a4a27" },
  { name: "Brown", hex: "#3a2417" },
  { name: "Burnished Slate", hex: "#3b3a25" },
  { name: "Charcoal", hex: "#40463c" },
  { name: "Rustic Red", hex: "#8b2a24" },
  { name: "Brite Red", hex: "#b0202a" },
  { name: "Burgundy", hex: "#3a1414" },
  { name: "Hunter Green", hex: "#1e5d39" },
  { name: "Dark Green", hex: "#1b4130" },
  { name: "Ocean Blue", hex: "#1f5b72" },
  { name: "Gallery Blue", hex: "#1f4a6b" },
  { name: "Matte Black", hex: "#1a1a1a" },
];
