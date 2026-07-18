// data/packages.ts — SINGLE SOURCE OF TRUTH for all trips.
// Pages, JSON-LD schema, WhatsApp messages, and the elevation animation all read from here.

export type Tier = "budget" | "mid-range" | "comfort";

// Kilimanjaro route difficulty bucket — drives the difficulty filter pills.
export type Difficulty = "Moderate" | "Challenging" | "Tough";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  altitudeStart?: number;
  altitudeEnd?: number;
  distanceKm?: number;
  hours?: string;
  meals: string;
  accommodation: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// Canonical destinations used by the homepage trip finder. Keep package
// `destinations` values drawn from this list so the finder dropdown and the
// data never drift apart.
export const DESTINATIONS = [
  "Kilimanjaro",
  "Mount Meru",
  "Serengeti",
  "Ngorongoro",
  "Tarangire",
  "Lake Manyara",
  "Zanzibar",
  "Arusha",
  "Kenya",
  "Ol Doinyo Lengai",
  "Lake Natron",
] as const;
export type Destination = (typeof DESTINATIONS)[number];

export interface TripPackage {
  slug: string;
  category: "kilimanjaro" | "safari" | "trekking" | "zanzibar" | "cultural" | "paramotoring";
  // Places this trip visits — drives the finder's Destination filter.
  destinations: Destination[];
  title: string;
  shortName: string;
  days: number;
  priceFromUSD: number;
  priceNote: string;
  tier: Tier[];
  heroImage: string;
  gallery: string[];
  summary: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  faqs: FAQ[];
  bestMonths: string[];
  summitSuccessRate?: string;
  // Kilimanjaro route ratings (1–5). Power the difficulty selector + card badges.
  // effort = physical difficulty; summitChance = likelihood of reaching Uhuru.
  // NOTE: editable marketing estimates — confirm with Ombeni.
  effort?: number;
  summitChance?: number;
  difficulty?: Difficulty;
  reviewSnippets?: { author: string; text: string; source: string }[];
  oldUrl?: string;
  // Cross-cutting themes (e.g. "honeymoon") — power themed listing pages like
  // /honeymoon without changing a trip's primary category/route.
  tags?: string[];
  // SEO overrides for the money pages (Day 12). When unset, generateMetadata
  // falls back to the shortName-based title and a summary excerpt. Keep the
  // rendered <title> ≤60 chars and the description ≤160.
  seoTitle?: string;
  metaDescription?: string;
}

// Category → URL segment for package detail routes. Single source of truth —
// consumed by the sitemap, package cards and ItemList schema so the path logic
// lives in exactly one place.
export const CATEGORY_PATH: Record<TripPackage["category"], string> = {
  kilimanjaro: "kilimanjaro",
  safari: "safaris",
  zanzibar: "zanzibar",
  trekking: "trekking",
  cultural: "cultural",
  paramotoring: "paramotoring",
};

// Root-relative canonical path to a package's detail page, e.g. "/kilimanjaro/7-day-machame-route".
export const packagePath = (pkg: TripPackage): string =>
  `/${CATEGORY_PATH[pkg.category]}/${pkg.slug}`;

export const packages: TripPackage[] = [
  // ─────────────────────────────────────────────────────────────────
  // FLAGSHIP — fully written. Template for all others.
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "7-day-machame-route",
    seoTitle: "Machame Route, 7 Days — from $2,180 · Trust Tours",
    metaDescription:
      "Kilimanjaro's most popular route, with a climb-high-sleep-low profile for higher summit success. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $2,180 pp.",
    destinations: ["Kilimanjaro"],
    category: "kilimanjaro",
    effort: 4,
    summitChance: 4,
    difficulty: "Challenging",
    title: "7-Day Kilimanjaro Climb – Machame Route",
    shortName: "7-Day Machame",
    days: 7,
    priceFromUSD: 2180, // From Ombeni's official 7-day Machame PDF
    priceNote:
      "Per person, sharing, group of 2+. Final price depends on group size and season.",
    tier: ["mid-range"],
    heroImage: "/images/kilimanjaro-kibo-from-trail.jpg",
    gallery: [],
    summary:
      "The 7-day Machame Route is Kilimanjaro's most popular path, climbing through five climate zones with a 'climb high, sleep low' profile that boosts summit success. With Trust Tours' full crew of guides, porters and cooks, you trek 62 km to Uhuru Peak at 5,895 m.",
    highlights: [
      "Best acclimatization profile of the classic routes — climb high, sleep low",
      "Scenic southern approach: rainforest, Shira Plateau, Lava Tower, Barranco Wall",
      "Licensed guides, full porter and cook crew, quality 4-season tents",
      "Summit night timed for sunrise at Uhuru Peak (5,895 m)",
      "Airport pickup, park fees and all meals on the mountain included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Machame Gate to Machame Camp",
        description:
          "After registration at Machame Gate, trek through dense montane rainforest — listen for colobus monkeys. The trail climbs steadily to camp at the forest's edge.",
        altitudeStart: 1800,
        altitudeEnd: 3010,
        distanceKm: 11,
        hours: "5–7 hours",
        meals: "Lunch, dinner",
        accommodation: "Machame Camp (tents)",
      },
      {
        day: 2,
        title: "Machame Camp to Shira Cave Camp",
        description:
          "Leave the forest for heath and moorland with first big views of Kibo. A steep ridge brings you onto the Shira Plateau.",
        altitudeStart: 3010,
        altitudeEnd: 3845,
        distanceKm: 5,
        hours: "4–6 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Shira Cave Camp (tents)",
      },
      {
        day: 3,
        title: "Shira to Barranco via Lava Tower",
        description:
          "The key acclimatization day: ascend to Lava Tower at 4,630 m for lunch, then descend into the Barranco Valley to sleep low. Tough day, huge payoff for your summit chances.",
        altitudeStart: 3845,
        altitudeEnd: 3960,
        distanceKm: 10,
        hours: "6–8 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Barranco Camp (tents)",
      },
      {
        day: 4,
        title: "Barranco Wall to Karanga Camp",
        description:
          "Scramble up the famous Barranco Wall — easier than it looks, and the most fun section of the route — then cross ridges and valleys to Karanga.",
        altitudeStart: 3960,
        altitudeEnd: 4035,
        distanceKm: 5,
        hours: "4–5 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Karanga Camp (tents)",
      },
      {
        day: 5,
        title: "Karanga to Barafu Base Camp",
        description:
          "A short climb to base camp. Early dinner and sleep by 19:00 — the summit push starts around midnight.",
        altitudeStart: 4035,
        altitudeEnd: 4673,
        distanceKm: 4,
        hours: "3–4 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Barafu Camp (tents)",
      },
      {
        day: 6,
        title: "Summit Day — Uhuru Peak, descend to Mweka",
        description:
          "Depart ~midnight by headlamp. Reach Stella Point on the crater rim for sunrise, then the final 45 minutes to Uhuru Peak, 5,895 m — the roof of Africa. Descend all the way to Mweka Camp.",
        altitudeStart: 4673,
        altitudeEnd: 5895,
        distanceKm: 17,
        hours: "11–15 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mweka Camp (tents)",
      },
      {
        day: 7,
        title: "Mweka Camp to Mweka Gate",
        description:
          "Final descent through the rainforest. Certificate ceremony at the gate, then transfer back to your Moshi/Arusha hotel for a long shower and a cold Kilimanjaro beer.",
        altitudeStart: 3100,
        altitudeEnd: 1640,
        distanceKm: 10,
        hours: "3–4 hours",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All Kilimanjaro National Park fees, camping fees and rescue fees",
      "Licensed English-speaking mountain guides, porters and cook",
      "4-season mountain tents, sleeping mats, mess tent with table & chairs",
      "All meals on the mountain + drinking water",
      "Airport/hotel transfers, pre-climb briefing and gear check",
      "Emergency oxygen and pulse-oximeter checks twice daily",
    ],
    excluded: [
      "International flights and visa",
      "Tips for the mountain crew (budget $250–300 total)",
      "Personal trekking gear (rental available in Moshi)",
      "Travel insurance (required — must cover trekking to 6,000 m)",
    ],
    faqs: [
      {
        question: "How hard is the 7-day Machame Route?",
        answer:
          "Machame is a demanding trek but requires no technical climbing. Any reasonably fit person who trains with regular hikes for 2–3 months can do it. The 7-day version adds an acclimatization day, which significantly raises summit success.",
      },
      {
        question:
          "What is the summit success rate on the 7-day Machame Route?",
        answer:
          "On our 7-day Machame itinerary, climbers reach the summit at rates of about 85–93% — well above the 60–70% typical of rushed 5-day routes. The extra acclimatisation day at altitude is the single biggest factor.",
      },
      {
        question: "When is the best time to climb Kilimanjaro?",
        answer:
          "The dry seasons: January–early March and June–October. July–September offers the most stable weather and clearest summit views, and pairs perfectly with Great Migration safaris.",
      },
      {
        question: "How much should I tip the crew?",
        answer:
          "Plan roughly $250–300 per climber for the whole crew, handed over at the tipping ceremony on the final day. We'll give you a clear breakdown per role at your briefing.",
      },
      {
        question: "Can I combine the climb with a safari?",
        answer:
          "Yes — most of our climbers add a 3–5 day Serengeti and Ngorongoro safari afterwards. We handle everything as one trip with one price.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct"],
    summitSuccessRate: "85–93% (7-day)",
    reviewSnippets: [
      {
        author: "Robin V",
        text: "We hiked to the top of Kilimanjaro — Ombeni arranged everything. 10/10 would recommend.",
        source: "TripAdvisor, Oct 2023",
      },
    ],
    oldUrl: "/booking/CONFIRM-OLD-SLUG/",
  },

  // ─────────────────────────────────────────────────────────────────
  // STUBS — itineraries TODO: copy from old /booking/ pages while still live.
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "9-day-northern-circuit",
    seoTitle: "Northern Circuit, 9 Days — from $2,497 · Trust Tours",
    metaDescription:
      "Kilimanjaro's longest, quietest route — and the highest summit success. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $2,497 pp, no OTA markup.",
    destinations: ["Kilimanjaro"],
    category: "kilimanjaro",
    effort: 4,
    summitChance: 5,
    difficulty: "Challenging",
    title: "9-Day Kilimanjaro Climb – Northern Circuit Route",
    shortName: "9-Day Northern Circuit",
    days: 9,
    priceFromUSD: 2497,
    priceNote: "Per person, sharing, group of 2+.",
    tier: ["mid-range"],
    // INTERIM low-res photo from Ombeni's archive — replace with a hi-res shot.
    heroImage: "/images/packages/9-day-northern-circuit.jpg",
    gallery: [],
    summary:
      "The Northern Circuit is Kilimanjaro's longest and quietest route, circling the mountain's remote northern slopes with the highest summit success rate of any route thanks to nine days of acclimatization.",
    highlights: [
      "Highest success rate of all routes",
      "Quietest trails on the mountain",
      "360° circuit of Kibo",
    ],
    // DRAFT itinerary based on the standard Lemosho→Northern Circuit route.
    // Altitudes/distances are typical figures — CONFIRM against Ombeni's own plan.
    itinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Mti Mkubwa (Big Tree) Camp",
        description:
          "Drive to Londorossi Gate on the remote western side, then trek through dense montane rainforest — watch for colobus monkeys — to the first camp at the forest's edge.",
        altitudeStart: 2100,
        altitudeEnd: 2780,
        distanceKm: 6,
        hours: "3–4 hours",
        meals: "Lunch, dinner",
        accommodation: "Mti Mkubwa Camp (tents)",
      },
      {
        day: 2,
        title: "Mti Mkubwa to Shira 1 Camp",
        description:
          "Leave the forest for open heath and moorland, climbing onto the Shira Ridge with the first big views of Kibo ahead.",
        altitudeStart: 2780,
        altitudeEnd: 3505,
        distanceKm: 8,
        hours: "5–6 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Shira 1 Camp (tents)",
      },
      {
        day: 3,
        title: "Shira 1 to Shira 2 Camp",
        description:
          "A gentle day crossing the high Shira Plateau — one of the world's largest calderas — for acclimatization, with Kibo growing on the horizon.",
        altitudeStart: 3505,
        altitudeEnd: 3810,
        distanceKm: 7,
        hours: "4–5 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Shira 2 Camp (tents)",
      },
      {
        day: 4,
        title: "Shira 2 to Moir Hut via Lava Tower",
        description:
          "Climb high to Lava Tower (4,630 m) for lunch, then descend to the quiet Moir Hut camp below the Lent Hills — classic 'climb high, sleep low' acclimatization.",
        altitudeStart: 3810,
        altitudeEnd: 4200,
        distanceKm: 11,
        hours: "6–7 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Moir Hut Camp (tents)",
      },
      {
        day: 5,
        title: "Moir Hut to Buffalo Camp",
        description:
          "Begin the Northern Circuit proper, traversing onto the remote, rarely-walked northern slopes of Kibo. Big, quiet views toward Kenya open up.",
        altitudeStart: 4200,
        altitudeEnd: 4020,
        distanceKm: 12,
        hours: "5–7 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Buffalo Camp (tents)",
      },
      {
        day: 6,
        title: "Buffalo Camp to Rongai Third Cave",
        description:
          "Continue the circuit around the northern side to Third Cave, gaining gentle altitude on solitary trails far from the crowds of the southern routes.",
        altitudeStart: 4020,
        altitudeEnd: 3800,
        distanceKm: 8,
        hours: "5–6 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Third Cave Camp (tents)",
      },
      {
        day: 7,
        title: "Third Cave to School Hut",
        description:
          "A steady climb to summit base camp at School Hut. Early dinner and rest — the summit push starts around midnight.",
        altitudeStart: 3800,
        altitudeEnd: 4750,
        distanceKm: 5,
        hours: "4–5 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "School Hut (tents)",
      },
      {
        day: 8,
        title: "Summit Day — Uhuru Peak, descend to Mweka",
        description:
          "Depart ~midnight by headlamp. Reach Gilman's Point on the crater rim, then the final stretch to Uhuru Peak, 5,895 m — the roof of Africa — at sunrise. Long descent to Mweka Camp.",
        altitudeStart: 4750,
        altitudeEnd: 5895,
        distanceKm: 17,
        hours: "11–15 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mweka Camp (tents)",
      },
      {
        day: 9,
        title: "Mweka Camp to Mweka Gate",
        description:
          "Final descent through the rainforest. Certificate ceremony at the gate, then transfer back to your Moshi/Arusha hotel for a long shower and a cold Kilimanjaro beer.",
        altitudeStart: 3100,
        altitudeEnd: 1640,
        distanceKm: 10,
        hours: "3–4 hours",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All Kilimanjaro National Park fees, camping fees and rescue fees",
      "Licensed English-speaking mountain guides, porters and cook",
      "4-season mountain tents, sleeping mats, mess tent with table & chairs",
      "All meals on the mountain + drinking water",
      "Airport/hotel transfers, pre-climb briefing and gear check",
      "Emergency oxygen and pulse-oximeter checks twice daily",
    ],
    excluded: [
      "International flights and visa",
      "Tips for the mountain crew (budget $250–350 total)",
      "Personal trekking gear (rental available in Moshi)",
      "Travel insurance (required — must cover trekking to 6,000 m)",
    ],
    faqs: [
      {
        question: "Why is the Northern Circuit the best route for summit success?",
        answer:
          "At nine days it gives your body the most time to acclimatize of any Kilimanjaro route, and the northern traverse adds extra 'climb high, sleep low' days. That's why it has the highest reported summit success rate. (Confirm Trust Tours' own number with Ombeni.)",
      },
      {
        question: "How hard is the Northern Circuit?",
        answer:
          "No technical climbing is required, but it is the longest route, so you need to be comfortable hiking 5–7 hours a day for over a week. The gentle daily gradients and extra rest days actually make summit night easier than on shorter routes.",
      },
      {
        question: "When is the best time to climb the Northern Circuit?",
        answer:
          "The dry seasons: January–early March and June–October. July–September has the most stable weather and clearest summit views, and pairs perfectly with Great Migration safaris.",
      },
      {
        question: "How much should I tip the crew?",
        answer:
          "Because this is a longer climb with a larger crew, plan roughly $300–350 per climber for the whole team, handed over at the tipping ceremony on the final day. We'll give you a clear per-role breakdown at your briefing.",
      },
      {
        question: "Can I combine the climb with a safari?",
        answer:
          "Yes — most of our climbers add a 3–5 day Serengeti and Ngorongoro safari afterwards. We handle everything as one trip with one price.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl:
      "/booking/9-days-climb-mount-kilimanjaro-with-the-best-northern-circuit-route-trust-tours-and-safaris/",
  },

  {
    slug: "8-day-lemosho-route",
    seoTitle: "Lemosho Route, 8 Days — from $2,180 · Trust Tours",
    metaDescription:
      "Crosses the wild Shira Plateau — the best acclimatisation and summit rates on Kilimanjaro. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $2,180 pp, direct.",
    destinations: ["Kilimanjaro"],
    category: "kilimanjaro",
    effort: 3,
    summitChance: 4,
    difficulty: "Moderate",
    title: "8-Day Kilimanjaro Climb – Lemosho Route",
    shortName: "8-Day Lemosho",
    days: 8,
    priceFromUSD: 2180,
    priceNote:
      "Per person, sharing, midrange services, group of 2+. Final price depends on group size and season.",
    tier: ["mid-range"],
    heroImage: "/images/lemosho-route-hero.jpg",
    gallery: [],
    summary:
      "Lemosho approaches Kilimanjaro from the remote west, crossing the wild Shira Plateau before joining the southern circuit to Uhuru Peak. Eight days of gradual 'climb high, sleep low' ascent gives it one of the best acclimatization profiles — and success rates — on the mountain, with quiet trails on the early days.",
    highlights: [
      "Most scenic western approach across the Shira Plateau caldera",
      "Excellent 8-day acclimatization profile — climb high, sleep low",
      "Quiet, low-traffic trails on the first three days",
      "Lava Tower (4,630 m) acclimatization day and the Barranco Wall scramble",
      "Summit night timed for sunrise at Uhuru Peak (5,895 m)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Mti Mkubwa (Big Tree) Camp",
        description:
          "Drive through rural farmland to Londorossi Gate for registration, then begin a gradual ascent through lush montane rainforest. Watch for blue and colobus monkeys before reaching Mti Mkubwa Camp, tucked into the forest.",
        altitudeStart: 2100,
        altitudeEnd: 2750,
        meals: "Lunch, dinner",
        accommodation: "Mti Mkubwa Camp (tents)",
      },
      {
        day: 2,
        title: "Mti Mkubwa to Shira 1 Camp",
        description:
          "Leave the last of the rainforest for open moorland dotted with giant heathers and lobelias. Cross the Shira Ridge onto the Shira Plateau with first views of Kibo and Mount Meru to the west.",
        altitudeStart: 2750,
        altitudeEnd: 3500,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Shira 1 Camp (tents)",
      },
      {
        day: 3,
        title: "Shira 1 to Shira 2 Camp",
        description:
          "An easier hike across the volcanic Shira Plateau, a feature unique to this side of the mountain. Optional short acclimatization walks at camp help your body adjust before the higher days ahead.",
        altitudeStart: 3500,
        altitudeEnd: 3850,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Shira 2 Camp (tents)",
      },
      {
        day: 4,
        title: "Shira 2 to Barranco Camp via Lava Tower",
        description:
          "The key acclimatization day: climb through alpine desert to Lava Tower at 4,630 m for lunch, then descend into the Barranco Valley to sleep low. A long day that pays off on summit night.",
        altitudeStart: 3850,
        altitudeEnd: 3900,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Barranco Camp (tents)",
      },
      {
        day: 5,
        title: "Barranco Wall to Karanga Camp",
        description:
          "Scramble up the famous Barranco Wall — steep but non-technical, and the most fun stretch of the route — then cross ridges and valleys to Karanga Camp with panoramic views of the Kibo summit.",
        altitudeStart: 3900,
        altitudeEnd: 4035,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Karanga Camp (tents)",
      },
      {
        day: 6,
        title: "Karanga to Barafu Base Camp",
        description:
          "A steady ascent across rocky, arid high-altitude terrain to Barafu, the final base camp. Your guide reviews the summit plan; an early dinner and sleep precede the midnight push.",
        altitudeStart: 4035,
        altitudeEnd: 4640,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Barafu Camp (tents)",
      },
      {
        day: 7,
        title: "Summit Day — Uhuru Peak, descend to Mweka",
        description:
          "Depart around midnight by headlamp, reaching Stella Point (5,756 m) on the crater rim near sunrise, then the final stretch to Uhuru Peak, 5,895 m — the roof of Africa. Descend to Barafu for a rest, then on to Mweka Camp.",
        altitudeStart: 4640,
        altitudeEnd: 5895,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mweka Camp (tents)",
      },
      {
        day: 8,
        title: "Mweka Camp to Mweka Gate, transfer to Arusha",
        description:
          "A final descent through the rainforest to Mweka Gate, where you receive your summit certificate. Transfer back to your Arusha hotel for a hot shower and a well-earned celebration.",
        altitudeStart: 3080,
        altitudeEnd: 1640,
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All Kilimanjaro National Park fees: conservation, camping, crew, rescue and vehicle fees",
      "Licensed English-speaking mountain guide(s), porters and cook",
      "Two nights' hotel accommodation (Moshi and Arusha), sharing basis",
      "4-season tents, 10 cm sleeping mats, dining tent with table and chairs",
      "All meals on the mountain plus drinking water, tea, coffee and hot chocolate",
      "Airport transfers, summit certificate, emergency oxygen and twice-daily oximeter checks",
      "GPS-tracking service, complete medical kits and free helicopter rescue coordination",
    ],
    excluded: [
      "International flights and Tanzania visa ($50 on arrival)",
      "Travel insurance (required — must cover trekking to 6,000 m)",
      "Tips for the mountain crew (budget $200–350 per climber)",
      "Sleeping bag rental ($35 for the trip) and personal trekking gear",
      "Optional portable toilet ($150 per group, up to 5 people)",
      "Alcoholic and other personal-nature expenses",
    ],
    faqs: [
      {
        question: "Why choose the 8-day Lemosho over a shorter route?",
        answer:
          "The extra days give your body more time to acclimatize, which is the single biggest factor in reaching the summit. Lemosho's gradual western approach and 'climb high, sleep low' profile make it one of the highest-success routes on Kilimanjaro.",
      },
      {
        question: "How hard is the Lemosho Route?",
        answer:
          "It is a demanding multi-day trek but requires no technical climbing. Any reasonably fit person who trains with regular hikes for 2–3 months beforehand can attempt it. The Barranco Wall is a fun scramble, not a climb.",
      },
      {
        question: "When is the best time to climb the Lemosho Route?",
        answer:
          "The dry seasons — January to early March and June to October. July to September offers the most stable weather and clearest summit views, and pairs perfectly with a Great Migration safari afterwards.",
      },
      {
        question: "I'm travelling solo — can I still join?",
        answer:
          "Yes. Solo climbers are matched with a same-sex tent and room partner on a sharing basis, or you can request a private climb. Message Ombeni on WhatsApp for solo and private pricing.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl: "/booking/CONFIRM/",
  },

  {
    slug: "6-day-marangu-route",
    seoTitle: "Marangu Route, 6 Days — from $1,580 · Trust Tours",
    metaDescription:
      "The only hut-based Kilimanjaro route and our most affordable climb. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $1,580 pp, book direct.",
    destinations: ["Kilimanjaro"],
    category: "kilimanjaro",
    effort: 3,
    summitChance: 3,
    difficulty: "Moderate",
    title: "6-Day Kilimanjaro Climb – Marangu Route",
    shortName: "6-Day Marangu",
    days: 6,
    priceFromUSD: 1580,
    priceNote:
      "Per person, sharing, hut accommodation. From $1,580 for groups of 5+, $1,690 for 1–4 climbers.",
    tier: ["budget"],
    heroImage: "/images/packages/6-day-marangu-route.jpg",
    gallery: [],
    summary:
      "Marangu — the 'Coca-Cola Route' — is the only path on Kilimanjaro with comfortable hut accommodation and the most affordable way to attempt the summit. This 6-day version adds an extra acclimatization day at Horombo, raising your chances of reaching Uhuru Peak on the gentlest gradients of any route.",
    highlights: [
      "The only route with dormitory huts instead of tents",
      "Extra acclimatization day at Horombo Hut for better summit odds",
      "Gentlest gradients and a well-established, well-marked trail",
      "Maundi Crater and Zebra Rocks side hikes en route",
      "The most affordable guided way to summit Kilimanjaro",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marangu Gate to Mandara Hut",
        description:
          "Register at Marangu Gate (1,860 m) and trek through lush, wide-trailed rainforest alive with birds and primates. Reach Mandara Hut and, with time to spare, walk to nearby Maundi Crater for views of Mawenzi Peak.",
        altitudeStart: 1860,
        altitudeEnd: 2720,
        distanceKm: 8,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mandara Hut (dormitory huts)",
      },
      {
        day: 2,
        title: "Mandara Hut to Horombo Hut",
        description:
          "The forest gives way to open moorland of giant lobelias and groundsels as the air thins. Horombo Hut sits on a ridge with sweeping views of both Kibo and Mawenzi peaks.",
        altitudeStart: 2720,
        altitudeEnd: 3720,
        distanceKm: 12,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Horombo Hut (dormitory huts)",
      },
      {
        day: 3,
        title: "Acclimatization Day at Horombo Hut",
        description:
          "A dedicated acclimatization day. After breakfast, take a short hike to Zebra Rocks (about 4,000 m) to help your body adjust, then return to Horombo to rest — the single best thing you can do for your summit chances.",
        altitudeStart: 3720,
        altitudeEnd: 3720,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Horombo Hut (dormitory huts)",
      },
      {
        day: 4,
        title: "Horombo Hut to Kibo Hut",
        description:
          "Ascend across 'The Saddle', a vast desert-like plateau between Mawenzi and Kibo. Arrive at Kibo Hut, eat an early dinner and rest — the summit push begins around midnight.",
        altitudeStart: 3720,
        altitudeEnd: 4700,
        distanceKm: 10,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Kibo Hut (dormitory huts)",
      },
      {
        day: 5,
        title: "Summit Day — Uhuru Peak, descend to Horombo",
        description:
          "Set off just after midnight for the steep, thin-aired climb to Gilman's Point (5,685 m) on the crater rim, then on to Uhuru Peak, 5,895 m, for sunrise. Descend to Kibo for a brief rest, then continue down to Horombo Hut.",
        altitudeStart: 4700,
        altitudeEnd: 5895,
        distanceKm: 22,
        meals: "Breakfast, lunch, dinner",
        accommodation: "Horombo Hut (dormitory huts)",
      },
      {
        day: 6,
        title: "Horombo Hut to Marangu Gate, return to Moshi",
        description:
          "A final descent through the rainforest to Marangu Gate, where you receive your summit certificate. Transfer back to your Moshi hotel for a farewell lunch and a well-earned rest.",
        altitudeStart: 3720,
        altitudeEnd: 1860,
        distanceKm: 20,
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "All Kilimanjaro National Park fees: conservation, camping, crew, rescue and vehicle fees",
      "Licensed English-speaking mountain guide(s), porters and cook",
      "One night's 3–4★ hotel accommodation before the climb, sharing basis",
      "Hut accommodation on the mountain with mattresses",
      "All meals on the mountain plus drinking water, tea, coffee and hot chocolate",
      "Airport transfers, summit certificate, oxygen cylinders and oximeters",
      "GPS-tracking service, complete medical kits and free helicopter rescue coordination",
    ],
    excluded: [
      "International flights and Tanzania visa ($50 on arrival)",
      "Travel insurance (required — must cover trekking to 6,000 m)",
      "Tips for the mountain crew (budget $250–350 per climber)",
      "Lunch and dinner at the hotel before and after the climb",
      "Optional portable toilet ($270 for the trip) and personal trekking gear",
      "Alcoholic and other personal-nature expenses",
    ],
    faqs: [
      {
        question: "Why is Marangu called the 'Coca-Cola Route'?",
        answer:
          "It's the oldest and most established route, historically where soft drinks were sold at the huts. It's the only Kilimanjaro route where you sleep in dormitory huts rather than tents.",
      },
      {
        question: "Is the 6-day Marangu better than the 5-day?",
        answer:
          "Yes for summit success. The 6-day version adds an acclimatization day at Horombo Hut, which gives your body an extra day to adjust to altitude and meaningfully improves your chances of reaching the summit.",
      },
      {
        question: "What's the accommodation like on Marangu?",
        answer:
          "Shared dormitory-style huts with mattresses and pillows at Mandara, Horombo and Kibo. It's more comfortable and weatherproof than camping, which makes Marangu a good choice in shoulder seasons.",
      },
      {
        question: "When is the best time to climb the Marangu Route?",
        answer:
          "The dry seasons — January to early March and June to October. Because you sleep in huts, Marangu copes better with occasional wet weather than the tented routes.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl: "/booking/CONFIRM/",
  },

  {
    slug: "6-day-umbwe-route",
    destinations: ["Kilimanjaro"],
    category: "kilimanjaro",
    effort: 5,
    summitChance: 3,
    difficulty: "Tough",
    title: "6-Day Kilimanjaro Climb – Umbwe Route",
    shortName: "6-Day Umbwe",
    days: 6,
    priceFromUSD: 1900,
    priceNote:
      "Per person, sharing, mid-range tented. From $1,900 for larger groups, up to ~$3,000 for 1–2 climbers, depending on group size and season.",
    tier: ["mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "Umbwe is Kilimanjaro's steepest, most direct ascent — a bold ridge climb for fit, experienced trekkers and tight groups who want the boldest path to the summit. This 6-day version builds in a rest day at Barranco to acclimatise before the Barranco Wall and summit push to Uhuru Peak at 5,895 m.",
    highlights: [
      "The mountain's most direct and dramatic route — quiet gate, fewer climbers",
      "Steep, ancient ridge forest and outstanding open ridgeline views",
      "Acclimatisation rest day at Barranco to protect summit success",
      "The famous Barranco Wall scramble onto the Southern Circuit",
      "Built for fit, experienced hikers and corporate/expedition groups",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Umbwe Gate, trek to Umbwe Cave Camp",
        description:
          "A short drive to the quiet Umbwe Gate, then straight into a steep, ancient ridge forest — narrow trail with hands-on-root scrambling in places. Camp just above the treeline with the first open views of Kibo.",
        altitudeStart: 1640,
        altitudeEnd: 2850,
        distanceKm: 8,
        hours: "5–7 hours",
        meals: "Lunch, dinner",
        accommodation: "Umbwe Cave Camp (tents)",
      },
      {
        day: 2,
        title: "Umbwe Cave Camp to Barranco Camp",
        description:
          "Leave the forest for the Umbwe's signature open ridgeline, with steep drops, giant senecios and sweeping views. Arrive early at Barranco beneath the Breach Wall for an afternoon health check and a briefing on the Wall.",
        altitudeStart: 2850,
        altitudeEnd: 3950,
        distanceKm: 6,
        hours: "4–6 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Barranco Camp (tents)",
      },
      {
        day: 3,
        title: "Acclimatisation day at Barranco",
        description:
          "The strategic heart of the itinerary. A short 'climb high, sleep low' walk to about 4,200 m and back, with rest, hydration and full health monitoring — the single biggest investment in summit night.",
        altitudeStart: 3950,
        altitudeEnd: 4200,
        distanceKm: 4,
        hours: "2–3 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Barranco Camp (tents)",
      },
      {
        day: 4,
        title: "Barranco Camp to Barafu via the Barranco Wall",
        description:
          "Scramble the 257 m Barranco Wall — hands and feet, no ropes — onto the Southern Circuit, lunch in the Karanga Valley, then the final climb to the windswept high camp at Barafu. Early dinner and sleep before the midnight start.",
        altitudeStart: 3950,
        altitudeEnd: 4673,
        distanceKm: 10,
        hours: "6–8 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Barafu Camp (tents)",
      },
      {
        day: 5,
        title: "Summit night — Uhuru Peak, descend to Mweka",
        description:
          "Depart around midnight by headlamp up the scree to Stella Point on the crater rim for sunrise, then the final traverse to Uhuru Peak, 5,895 m — the roof of Africa. Descend all the way to Mweka Camp.",
        altitudeStart: 4673,
        altitudeEnd: 5895,
        distanceKm: 17,
        hours: "12–15 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mweka Camp (tents)",
      },
      {
        day: 6,
        title: "Mweka Camp to Mweka Gate, return to Arusha",
        description:
          "An easy forest descent to Mweka Gate, where your summit certificates and the tipping ceremony with your crew await. Transfer back to Arusha by early afternoon — tired, triumphant and at sea level again.",
        altitudeStart: 3100,
        altitudeEnd: 1640,
        distanceKm: 10,
        hours: "3–4 hours",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All Kilimanjaro National Park entry, conservation and rescue fees, VAT and taxes",
      "Certified senior guide and qualified assistant guides (1 per 4 climbers)",
      "Professional mountain chef and full KPAP-compliant porter team",
      "Quality dome tents (two-share), private group dining tent and toilet tent",
      "All meals on the mountain, hot drinks throughout, and sleeping mats",
      "Road transfers to/from your Arusha hotel, pre-climb briefing and gear check",
      "Emergency oxygen and daily pulse-oximetry checks for every climber",
    ],
    excluded: [
      "International flights to Kilimanjaro (JRO) and Tanzania visa",
      "Travel and medical insurance (required — must cover trekking to 6,000 m)",
      "Personal trekking gear and sleeping bag (hire in Arusha from $20–30)",
      "Tips for the mountain crew (budget roughly $60–90 per climber)",
      "Personal expenses and souvenirs",
    ],
    faqs: [
      {
        question: "Who is the Umbwe Route right for?",
        answer:
          "Fit, experienced hikers who have done multi-day mountain treks before — and groups who want the most direct, most challenging ascent. It is not a good choice for a first big trek or for anyone with a history of altitude sickness. If you're unsure, contact us and we'll give an honest recommendation.",
      },
      {
        question: "How hard is the Umbwe Route compared with Machame?",
        answer:
          "Harder. Umbwe is the steepest, most direct route on the mountain, gaining altitude faster than any other. The Day 1 forest involves genuine scrambling, and the Barranco Wall on Day 4 is a hands-and-feet scramble (no ropes needed). The Day 3 rest day at Barranco is what makes the 6-day version responsible.",
      },
      {
        question: "What summit success rate can a group expect?",
        answer:
          "With proper fitness preparation, full guide coverage and the built-in acclimatisation day, groups consistently achieve summit success rates of about 75–88% on the 6-day Umbwe.",
      },
      {
        question: "How large can an Umbwe group be?",
        answer:
          "We recommend a maximum of 8 climbers per group because of the narrow ridgeline and the technical Barranco Wall. For groups of 9–16 we run two guide teams. Itineraries can be customised for corporate teams, charity expeditions and clubs.",
      },
      {
        question: "When is the best time to climb the Umbwe Route?",
        answer:
          "January–March and June–October. June–October is peak season with the finest, clearest conditions. April–May (the long rains) is not recommended on Umbwe — wet rock and root make the steep forest ridge genuinely hazardous.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct"],
    summitSuccessRate: "75–88% (6-day, with acclimatisation day)",
  },

  {
    slug: "6-day-rongai-route",
    destinations: ["Kilimanjaro"],
    category: "kilimanjaro",
    effort: 3,
    summitChance: 4,
    difficulty: "Moderate",
    title: "6-Day Kilimanjaro Climb – Rongai Route",
    shortName: "6-Day Rongai",
    days: 6,
    priceFromUSD: 1800,
    priceNote:
      "Per person, sharing, mid-range tented. From $1,800 for larger groups, up to ~$2,800 for 1–2 climbers, depending on group size and season.",
    tier: ["mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "Rongai is Kilimanjaro's only northern approach — the quiet, drier route that climbs in from the Kenya side through open moorland that most climbers never see. This 6-day version adds a crucial acclimatisation day at Second Cave, meaningfully improving your odds of reaching Uhuru Peak at 5,895 m on a steady, manageable gradient ideal for first-time climbers.",
    highlights: [
      "The only route up Kilimanjaro from the northern, Kenya side",
      "Far fewer crowds than the busy southern Machame and Marangu routes",
      "Drier approach — the best choice during the April–May long rains",
      "Acclimatisation rest day at Second Cave to protect summit success",
      "Open moorland views of the Amboseli basin and, on clear days, Mount Kenya",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Rongai Gate, trek to First Cave Camp",
        description:
          "A scenic 5–6 hour drive north around the mountain to the quiet Rongai Gate, then a gentle first climb through pine plantation and native rainforest — colobus monkeys overhead — to First Cave Camp, just above the treeline with your first open view of the summit.",
        altitudeStart: 1950,
        altitudeEnd: 2600,
        distanceKm: 7.5,
        hours: "3–4 hours",
        meals: "Lunch, dinner",
        accommodation: "First Cave Camp (tents)",
      },
      {
        day: 2,
        title: "First Cave Camp to Second Cave Camp",
        description:
          "One of the finest days on the route, crossing open heath and moorland of giant heather and lobelia with Kibo rising ahead. Second Cave sits on open moorland with views to the Kenyan plains, followed by a short 'climb high, sleep low' acclimatisation walk to about 3,700 m.",
        altitudeStart: 2600,
        altitudeEnd: 3450,
        distanceKm: 8.5,
        hours: "4–5 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Second Cave Camp (tents)",
      },
      {
        day: 3,
        title: "Acclimatisation day at Second Cave",
        description:
          "The strategic heart of the itinerary. A short walk up to Kikelewa Cave (about 3,600 m) and back gives your body extra altitude exposure before returning to sleep low, with rest, hydration, health monitoring and a full pre-summit briefing — the single biggest investment in summit night.",
        altitudeStart: 3450,
        altitudeEnd: 3600,
        distanceKm: 4,
        hours: "2–3 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Second Cave Camp (tents)",
      },
      {
        day: 4,
        title: "Second Cave Camp to Kibo Huts / School Hut",
        description:
          "Leave the moorland for Kilimanjaro's stark alpine desert — a vast rust-coloured plain of volcanic scree beneath the crater wall, with rare views of the northern icefields. Arrive early at the high camp, eat an early dinner and rest before the 11pm summit start.",
        altitudeStart: 3450,
        altitudeEnd: 4750,
        distanceKm: 9,
        hours: "5–7 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Kibo Huts / School Hut Area (tents)",
      },
      {
        day: 5,
        title: "Summit night — Uhuru Peak, descend to 3,100 m",
        description:
          "Wake at 11pm for the steep, thin-aired climb by headlamp up the northern approach to Gilman's Point (5,685 m) on the crater rim, then the final traverse to Uhuru Peak, 5,895 m — the roof of Africa — for sunrise. A long descent all the way down to camp at around 3,100 m.",
        altitudeStart: 4750,
        altitudeEnd: 5895,
        distanceKm: 16,
        hours: "12–14 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Horombo / Mweka area (tents)",
      },
      {
        day: 6,
        title: "Final descent to Mweka Gate, return to Arusha",
        description:
          "A leisurely final descent through lush montane forest to Mweka Gate, where your summit certificate and the tipping ceremony with your crew await. Transfer back to your Arusha hotel — tired, triumphant and at sea level again.",
        altitudeStart: 3100,
        altitudeEnd: 1800,
        distanceKm: 10,
        hours: "3–4 hours",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All Kilimanjaro National Park entry, conservation and rescue fees, VAT and taxes",
      "Certified senior guide and qualified assistant guides (1 per 4 climbers)",
      "Professional mountain chef and full porter team",
      "Quality dome tents (two-share), private group dining tent and toilet tent",
      "All meals on the mountain, hot drinks throughout, and sleeping mats",
      "Road transfers to/from your Arusha hotel, pre-climb briefing and gear check",
      "Emergency oxygen and daily pulse-oximetry checks for every climber",
    ],
    excluded: [
      "International flights to Kilimanjaro (JRO) and Tanzania visa",
      "Travel and medical insurance (required — must cover trekking to 6,000 m)",
      "Personal trekking gear and sleeping bag (hire in Arusha from $20–30)",
      "Tips for the mountain crew (budget roughly $250–350 per climber)",
      "Alcoholic and other personal-nature expenses",
    ],
    faqs: [
      {
        question: "Is the Rongai Route good for beginners?",
        answer:
          "Yes. Rongai is one of the most accessible routes on Kilimanjaro — the gradient is steady rather than steep and the terrain is straightforward. Combined with a 6-day itinerary that includes an acclimatisation day, it's an excellent choice for first-time climbers with a moderate fitness level.",
      },
      {
        question: "How does Rongai compare to Machame?",
        answer:
          "Machame is more dramatic — steeper terrain, the Barranco Wall scramble and more spectacular forest. Rongai is more gradual and quieter, with a drier northern approach and open moorland scenery. Both reach the summit via the crater rim, but Machame is more physically demanding while Rongai is more serene and private.",
      },
      {
        question: "What is the success rate on the 6-day Rongai?",
        answer:
          "With an experienced operator and proper acclimatisation, the 6-day Rongai achieves summit success rates of roughly 80–88%. The dedicated acclimatisation day at Second Cave on Day 3 is a significant contributor to that figure.",
      },
      {
        question: "When is the best time to climb the Rongai Route?",
        answer:
          "January–March and June–October offer the finest conditions. Because the northern approach stays comparatively dry, Rongai is also the recommended alternative to the southern routes during the April–May long rains.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct"],
    summitSuccessRate: "80–88% (6-day, with acclimatisation day)",
  },

  {
    slug: "7-day-great-migration-safari",
    seoTitle: "Great Migration Safari, 7 Days — from $2,200",
    metaDescription:
      "Private Great Migration safari across Tarangire, Serengeti & Ngorongoro. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $2,200 pp, no OTA markup.",
    destinations: ["Tarangire", "Serengeti", "Ngorongoro"],
    category: "safari",
    title: "7-Day Great Migration Safari – Tarangire, Serengeti & Ngorongoro",
    shortName: "7-Day Migration Safari",
    days: 7,
    priceFromUSD: 2200,
    priceNote:
      "Per person, sharing, group of 2+. From $2,200 budget / $2,800 mid-range camps and lodges.",
    tier: ["budget", "mid-range"],
    heroImage: "/images/migration-river-crossing.jpg",
    gallery: [
      "/images/gallery/safari/safari-2023-01-07-1.jpg",
      "/images/gallery/safari/safari-2023-01-07-25.jpg",
      "/images/gallery/safari/safari-fb-img-1443719006917.jpg",
      "/images/gallery/safari/safari-fb-img-1453366840089.jpg",
      "/images/gallery/safari/safari-2023-01-07-28.jpg",
      "/images/gallery/safari/safari-2023-01-07-20.jpg",
    ],
    summary:
      "Track the Great Wildebeest Migration across the Serengeti with game drives in Tarangire and a full day inside the Ngorongoro Crater — seven days covering northern Tanzania's headline parks in a private 4x4 with a pop-up roof. Your guide tailors each drive to your interests, whether that's river crossings, big cats or photography.",
    highlights: [
      "Timed to the Great Migration river crossings (July–October)",
      "Full day inside the Ngorongoro Crater, the 'Eden of Africa'",
      "Tarangire's baobabs, elephant herds and 550+ bird species",
      "Private 4x4 with pop-up roof and an expert English-speaking guide",
      "Maasai village visit and Serengeti sundowners",
    ],
    itinerary: [
      {
        day: 1,
        title: "Tarangire National Park — Baobabs and Elephants",
        description:
          "Morning pickup and drive to Tarangire for a game drive among iconic baobab trees and large elephant herds along the Tarangire River. Look for lions, leopards, buffalo, zebra and an exceptional variety of birdlife, with a picnic lunch in the park.",
        meals: "Lunch, dinner",
        accommodation: "Budget or mid-range tented camp near Tarangire",
      },
      {
        day: 2,
        title: "Ngorongoro Crater — The Eden of Africa",
        description:
          "Descend at dawn into the Ngorongoro Crater, a UNESCO World Heritage Site with one of the highest wildlife densities in Africa — lions, elephants, rhinos, hippos and flamingos. Picnic lunch by a hippo pool, then a Maasai village visit on the way out.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Budget or mid-range lodge on the crater rim",
      },
      {
        day: 3,
        title: "Into the Serengeti — Endless Plains",
        description:
          "Drive into the Serengeti, game-viewing as you go. The afternoon is spent tracking wildlife across the southern and central plains — home to the Big Five — before a sundowner as the sun dips below the horizon.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Budget or mid-range tented camp in the Serengeti",
      },
      {
        day: 4,
        title: "Northern Serengeti — Tracking the Migration",
        description:
          "A full day following the Great Migration toward the Mara River. In season (July–October) you may witness thousands of wildebeest, zebra and gazelle massing to cross, watched by lions, cheetahs and crocodiles.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Budget or mid-range tented camp in the Serengeti",
      },
      {
        day: 5,
        title: "Serengeti — Big Cats and River Crossings",
        description:
          "Another full day in the heart of the Serengeti, with drives customized to your interests — photography, predators, or quieter corners of the park. Your guide reads the herds to give you the best chance at a crossing.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Budget or mid-range tented camp in the Serengeti",
      },
      {
        day: 6,
        title: "Serengeti — Full Day Game Drives",
        description:
          "A final full day exploring the vast plains, returning to favourite sightings and chasing new ones. Enjoy a sundowner in a scenic spot before your last night under the Serengeti sky.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Budget or mid-range tented camp in the Serengeti",
      },
      {
        day: 7,
        title: "Return to Arusha — Farewell Tanzania",
        description:
          "An early morning game drive for last sightings, then breakfast and the scenic drive back to Arusha. Depending on your flight, there's time for a coffee plantation or cultural visit and a farewell dinner of Tanzanian cuisine.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Six nights' accommodation in budget or mid-range tented camps and lodges",
      "Full board throughout — breakfast, lunch and dinner",
      "Private 4x4 safari vehicle with pop-up roof for game viewing",
      "All national park and Ngorongoro Conservation Area entrance fees",
      "Professional, English-speaking safari guide",
      "Game drives, Maasai village visit and a birdwatching checklist",
      "Pickup and drop-off at Kilimanjaro International Airport",
    ],
    excluded: [
      "International flights and Tanzania visa ($50–100 depending on nationality)",
      "Optional hot air balloon safari ($600 per person)",
      "Tips for guides, drivers and lodge staff",
      "Travel insurance (recommended for all travellers)",
      "Alcoholic drinks and items of a personal nature",
    ],
    faqs: [
      {
        question: "When can I see the Great Migration river crossings?",
        answer:
          "The dramatic Mara River crossings in the northern Serengeti typically happen between July and October. Timing varies year to year with the rains — message Ombeni with your travel dates and he'll advise where the herds are likely to be.",
      },
      {
        question: "Budget or mid-range — what's the difference?",
        answer:
          "The route, vehicle and guiding are the same; the difference is accommodation. Budget uses simpler tented camps, mid-range uses more comfortable camps and lodges. Both are full board.",
      },
      {
        question: "Can I combine this safari with a Kilimanjaro climb?",
        answer:
          "Yes — many travellers climb Kilimanjaro first and add this safari afterwards. We arrange it as one trip with a single price. Just ask Ombeni on WhatsApp.",
      },
      {
        question: "Is the vehicle private?",
        answer:
          "Yes. You travel in a private 4x4 with a pop-up roof, so drives are tailored to your group's interests rather than shared with strangers.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl:
      "/booking/7-day-6-night-lower-budget-and-mid-range-safari-tracking-the-great-migration-crossing-with-trust-tours-and-safaris/",
  },

  {
    slug: "7-day-tanzania-zanzibar",
    seoTitle: "Tanzania Safari + Zanzibar, 7 Days — $2,879",
    metaDescription:
      "Big Five safari then Zanzibar's beaches — bush to beach, done right. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $2,879 pp, book direct.",
    destinations: ["Ngorongoro", "Serengeti", "Zanzibar"],
    category: "safari",
    title: "7-Day Tanzania Safari & Zanzibar Beach Escape",
    shortName: "7-Day Safari + Zanzibar",
    days: 7,
    priceFromUSD: 2879,
    priceNote:
      "Per person, sharing. Includes return local flights to Zanzibar.",
    tier: ["mid-range"],
    heroImage: "/images/safari-lion-pride.jpg",
    gallery: [
      "/images/gallery/safari/safari-2023-01-07-25.jpg",
      "/images/gallery/safari/safari-fb-img-1443719006917.jpg",
      "/images/gallery/safari/safari-fb-img-1480881331527.jpg",
      "/images/gallery/safari/safari-2023-01-07-5.jpg",
    ],
    summary:
      "The complete Tanzania trip in one week: four days of game drives in the Ngorongoro Crater and Serengeti, then a flight to Zanzibar for three days of Stone Town culture, spice farms and white-sand beaches. Safari adrenaline and Indian Ocean recovery, seamlessly arranged.",
    highlights: [
      "Safari and beach in one booking, with internal flights arranged",
      "Full day inside the Ngorongoro Crater, the 'Eden of Africa'",
      "Central Serengeti game drives — Big Cat country and the migration plains",
      "Stone Town guided tour and a Zanzibar spice farm visit",
      "White-sand beaches, dhow cruise and Indian Ocean snorkelling",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Ngorongoro Crater Rim",
        description:
          "Met at Kilimanjaro International Airport and driven through the Great Rift Valley's coffee highlands to the Ngorongoro Conservation Area. Settle into a lodge on the crater rim with panoramic views and an evening at leisure.",
        meals: "Lunch, dinner",
        accommodation: "Mid-range lodge or tented camp on the crater rim",
      },
      {
        day: 2,
        title: "Ngorongoro Crater Safari & Transfer to Serengeti",
        description:
          "Descend 600 m into the crater at dawn for game viewing among lions, elephants, hippos and rare black rhino, then ascend and drive on across the Maasai highlands into the Serengeti's endless plains.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge or tented camp, central Serengeti",
      },
      {
        day: 3,
        title: "Full Day in the Serengeti",
        description:
          "A full day of game drives in the Serengeti — morning for predators in the Seronera Valley, the 'Big Cat Capital', and afternoon exploring further plains. Dinner under an unpolluted night sky.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge or tented camp, central Serengeti",
      },
      {
        day: 4,
        title: "Morning Game Drive & Flight to Zanzibar",
        description:
          "A final dawn game drive, then transfer to the airstrip for your flight to Zanzibar. Arrive on the Spice Island and transfer to your beach resort for an evening of ocean-side relaxation.",
        meals: "Breakfast, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 5,
        title: "Zanzibar Beach Day",
        description:
          "A free day on the beach: swim in the warm Indian Ocean, snorkel the coral reefs, or unwind with an optional spa treatment. Sunset stroll and a fresh seafood dinner at the resort.",
        meals: "Breakfast, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 6,
        title: "Stone Town Tour & Spice Farm",
        description:
          "A guided tour of UNESCO-listed Stone Town — the House of Wonders, Sultan's Palace and Old Fort — followed by a spice farm visit to see, smell and taste Zanzibar's famous cloves, cinnamon and vanilla.",
        meals: "Breakfast, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 7,
        title: "Leisure & Departure",
        description:
          "A final morning at leisure — beach, markets or an optional dhow cruise along the coast — before your airport transfer for departure.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Airport transfers and all transfers as per the itinerary",
      "Return local flights (Serengeti to Zanzibar)",
      "All national park and conservation area entry fees",
      "Guided game drives in a 4x4 safari vehicle",
      "Accommodation in lodges, tented camps and a Zanzibar beach resort",
      "All meals as specified plus bottled water on game drives",
      "Services of an experienced English-speaking safari guide",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional activities not mentioned in the itinerary",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "Is the flight to Zanzibar included?",
        answer:
          "Yes — return local flights between the Serengeti and Zanzibar are included in the package price, along with all transfers.",
      },
      {
        question: "Can the safari and beach split be adjusted?",
        answer:
          "Yes. The standard split is four days on safari and three in Zanzibar, but we can lengthen either side. Message Ombeni on WhatsApp with what you have in mind.",
      },
      {
        question: "When is the best time for this trip?",
        answer:
          "June to October offers the best safari game viewing and dry beach weather; January and February are also excellent. The Serengeti has resident wildlife year-round even outside the migration.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
    oldUrl: "/booking/CONFIRM/",
  },

  // ─────────────────────────────────────────────────────────────────
  // SAFARIS — longer migration trips & multi-region combos (Wave 3).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "8-day-great-migration-safari",
    heroImage: "/images/safari-hippo.jpg",
    seoTitle: "8-Day Migration Safari — from $3,250 · Trust Tours",
    metaDescription:
      "Extra days in the Serengeti timed to the Great Migration river crossings. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $3,250 pp, private and direct.",
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "8-Day Great Migration Safari – Tarangire, Ngorongoro & Serengeti",
    shortName: "8-Day Migration Safari",
    days: 8,
    priceFromUSD: 3250,
    priceNote:
      "Per person, sharing. From $3,250 (3-star) / $3,950 (4-star lodges & camps). Best July–October for the Mara crossings.",
    tier: ["mid-range", "comfort"],
    gallery: [],
    summary:
      "Eight days built around the Great Migration river crossings: Tarangire's elephants and baobabs, a full day in the Ngorongoro Crater, and three days deep in the Serengeti tracking the herds toward the Mara River. Small private groups, a 4x4 with pop-up roof, and 4-star lodges and tented camps (3-star option available).",
    highlights: [
      "Three days in the Serengeti at the height of the migration",
      "The dramatic Mara River crossing in season (July–October)",
      "Full day inside the Ngorongoro Crater and the Big Five",
      "Tarangire's baobabs and big elephant herds",
      "Small private groups with 4-star lodges and tented camps",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport and transferred to your lodge in Arusha for a welcome drink and a safari briefing. An optional visit to the Arusha Cultural Heritage Centre, then a relaxed dinner under the African sky.",
        meals: "Dinner",
        accommodation: "Lodge in Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park to Karatu",
        description:
          "An early start for Tarangire, where the sun rises over ancient baobabs and predators are active. Game viewing among large elephant herds, giraffe, zebra and cheetah along the wildlife-rich Tarangire River, with a picnic lunch in the park. Drive on to Karatu for dinner and overnight.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge, Karatu",
      },
      {
        day: 3,
        title: "Ngorongoro Crater to the Serengeti",
        description:
          "A sunrise descent into the Ngorongoro Crater for a morning game drive among the Big Five — black rhino, lion, elephant, buffalo and leopard — plus hippos and flamingos, with a picnic lunch near the hippo pool. In the afternoon, drive on into the Serengeti to a tented camp and a fireside dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Serengeti",
      },
      {
        day: 4,
        title: "Serengeti — Tracking the Migration",
        description:
          "Sunrise and full-day game drives following the migration herds across the plains, with cheetah, leopard and hyena hunting at dawn. Explore the predator-rich Seronera Valley and, in season, position for the herds massing toward the Mara. Picnic lunch and a sundowner with endless Serengeti views.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Serengeti",
      },
      {
        day: 5,
        title: "Serengeti — Mara River Crossings",
        description:
          "A full day in the northern Serengeti, where in season the wildebeest face the crocodile-filled Mara River in the migration's most dramatic spectacle. Your guide reads the herds for the best chance at a crossing, with photography stops throughout the day.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Serengeti",
      },
      {
        day: 6,
        title: "Serengeti — Full Day Game Drives",
        description:
          "A final full day exploring different regions of the Serengeti, returning to favourite sightings and chasing new ones. Sundowners and fireside storytelling at your luxury tented camp under a sky thick with stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Serengeti",
      },
      {
        day: 7,
        title: "Serengeti to Arusha",
        description:
          "An early morning game drive for last sightings as the sun rises over the plains, then begin the journey back toward Arusha with an optional Maasai village visit and lunch en route. Arrive for a relaxing evening and a farewell dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge in Arusha",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "Breakfast at the lodge, then a private transfer to Kilimanjaro International Airport for your onward flight, with a lifetime of memories from the migration.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Seven nights' accommodation in 4-star (or 3-star) lodges and tented camps",
      "All meals — breakfast, lunch and dinner",
      "Private 4x4 safari vehicle with pop-up roof and a professional guide",
      "All park entrance and conservation fees",
      "Unlimited game drives as per the itinerary",
      "Bottled water throughout and airport transfers",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Tips and gratuities for guides and staff",
      "Personal expenses and optional activities",
    ],
    faqs: [
      {
        question: "When can I see the Mara River crossings?",
        answer:
          "The crossings in the northern Serengeti typically happen July to October, peaking in the dry season. Timing shifts each year with the rains — message Ombeni with your dates and he'll advise where the herds are likely to be.",
      },
      {
        question: "How is this different from the 7-Day Migration Safari?",
        answer:
          "The 8-day adds an extra full day in the Serengeti, which means more time positioning for river crossings and big-cat sightings. Both are private safaris with the same route through Tarangire and Ngorongoro.",
      },
      {
        question: "What's the difference between 3-star and 4-star?",
        answer:
          "The route, vehicle and guiding are identical; the difference is the lodges and camps. 3-star is from $3,250pp and 4-star from $3,950pp.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl:
      "/booking/8-day-7-night-mid-range-safari-tracking-the-great-migration-crossing-with-trust-tours-and-safaris/",
  },

  {
    slug: "9-day-beach-city-bush",
    destinations: ["Zanzibar", "Arusha", "Tarangire", "Kenya"],
    category: "safari",
    title: "9-Day Beach, City & Bush – Zanzibar, Tanzania & the Maasai Mara",
    shortName: "9-Day Beach, City & Bush",
    days: 9,
    priceFromUSD: 2890,
    priceNote:
      "Per person, double sharing. From $2,890 (4-star) / $3,999 (premium). Includes all internal flights.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/packages/9-day-beach-city-bush.jpg",
    gallery: [],
    summary:
      "The ultimate East Africa sampler: white-sand Zanzibar and historic Stone Town, a Dar es Salaam city tour, a game drive in Arusha's parks, and Kenya's legendary Maasai Mara. Beach, city and bush across Tanzania and Kenya in nine days, with all the internal flights and transfers handled for you.",
    highlights: [
      "Zanzibar beaches, Stone Town and a sunset cruise",
      "Dar es Salaam city tour — museum, markets and waterfront",
      "Tarangire game drive (or a Kilimanjaro-foothills cultural day)",
      "Kenya's Maasai Mara — the Big Five and the Great Migration",
      "All internal flights between Zanzibar, Dar, Arusha and Nairobi included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zanzibar — Sunset Cruise",
        description:
          "Arrive in Zanzibar, where you're welcomed and transferred to your hotel. In the evening, a relaxing sunset cruise along the coast as the sky turns orange and pink over the Indian Ocean, followed by dinner.",
        meals: "Dinner",
        accommodation: "4-star or 3-star hotel, Zanzibar",
      },
      {
        day: 2,
        title: "Stone Town & Nakupenda Beach",
        description:
          "A guided tour of UNESCO-listed Stone Town — narrow streets, historic buildings and vibrant markets — then the Nakupenda sandbank for a seafood lunch, swimming and snorkelling. Return to visit the Old Slave Market and Anglican Church before sunset.",
        meals: "Breakfast, lunch",
        accommodation: "4-star or 3-star hotel, Zanzibar",
      },
      {
        day: 3,
        title: "Zanzibar to Dar es Salaam — City Tour",
        description:
          "A scenic crossing to Dar es Salaam, then a full-day city tour taking in the National Museum, the Kivukoni fish market and the city's lively neighbourhoods. Dinner and overnight in Dar.",
        meals: "Breakfast, dinner",
        accommodation: "4-star or 3-star hotel, Dar es Salaam",
      },
      {
        day: 4,
        title: "Fly to Arusha — Tarangire or Cultural Day",
        description:
          "A short flight to Arusha, then your choice of a full-day game drive in Tarangire National Park or a cultural tour with a hike in the foothills of Kilimanjaro. Dinner and overnight in Arusha.",
        meals: "Breakfast, dinner",
        accommodation: "4-star or 3-star hotel, Arusha",
      },
      {
        day: 5,
        title: "Fly to Nairobi — Half-Day City Tour",
        description:
          "Transfer to Kilimanjaro Airport for a flight to Nairobi, arriving by midday. An afternoon half-day city tour visits the Giraffe Centre and the Karen Blixen Museum. Dinner and overnight in Nairobi.",
        meals: "Breakfast, dinner",
        accommodation: "4-star or 3-star hotel, Nairobi",
      },
      {
        day: 6,
        title: "Nairobi to the Maasai Mara — Evening Game Drive",
        description:
          "Travel to the Maasai Mara, Kenya's most famous reserve. Check in and lunch, then an evening game drive among lions, elephants and plains game, finishing with a bonfire and dinner under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mara lodge or camp",
      },
      {
        day: 7,
        title: "Maasai Mara — Full Day of Game Drives",
        description:
          "A full day searching for the Big Five across the Mara's golden plains, with a morning and a sunset game drive and time to relax at the lodge in between. In season, the Great Migration fills the reserve.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mara lodge or camp",
      },
      {
        day: 8,
        title: "Maasai Mara Culture & Return to Nairobi",
        description:
          "A morning visit to a Maasai village to learn about their traditions and way of life, then explore the Great Rift Valley on the drive back to Nairobi, with time for a craft-market shopping stop. Dinner and overnight in Nairobi.",
        meals: "Breakfast, dinner",
        accommodation: "4-star or 3-star hotel, Nairobi",
      },
      {
        day: 9,
        title: "Departure",
        description:
          "An early check-out and transfer to the airport for your departure flight, carrying memories of beach, city and bush across two countries.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All internal flights (Zanzibar–Dar, Dar–Arusha, Arusha–Nairobi)",
      "All airport, hotel and intercity transfers",
      "Full-board accommodation in 4-star or 3-star hotels and lodges",
      "All activities — sunset cruise, city and Stone Town tours, game drives, cultural visits",
      "Park fees and entry tickets throughout",
      "Professional guides and drivers",
    ],
    excluded: [
      "International flights and visa fees (Tanzania and Kenya)",
      "Travel insurance (recommended for all travellers)",
      "Tips and gratuities, plus personal expenses",
      "Optional activities not mentioned in the itinerary",
    ],
    faqs: [
      {
        question: "Does this trip cross into Kenya?",
        answer:
          "Yes — it begins in Tanzania (Zanzibar, Dar es Salaam, Arusha) and flies to Nairobi for the Maasai Mara, so you'll need entry for both countries. We arrange the internal flights; you handle the two visas.",
      },
      {
        question: "Can the dates and mix be adjusted?",
        answer:
          "Absolutely — this is a flexible combo. You can lengthen the beach or the Mara, swap the Tarangire day for a cultural day, or change start dates. Tell Ombeni what you'd like on WhatsApp.",
      },
      {
        question: "When is the best time to go?",
        answer:
          "June to October is excellent for the Mara migration and dry beach weather; December to February is also great. The reserves hold resident wildlife year-round.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl:
      "/booking/9-day-adventure-is-perfect-a-perfect-combination-for-an-unforgettable-adventure-with-trust-tours-and-safaris/",
  },

  {
    slug: "10-day-kenya-safari",
    heroImage: "/images/kenya-safari.jpg",
    destinations: ["Kenya"],
    category: "safari",
    title: "10-Day Kenya Safari – Amboseli, Lake Naivasha & the Maasai Mara",
    shortName: "10-Day Kenya Safari",
    days: 10,
    priceFromUSD: 0,
    priceNote: "Private Kenya safari — per-person pricing on request.",
    tier: ["mid-range"],
    gallery: [],
    summary:
      "A ten-day journey through Kenya's headline parks: elephant-rich Amboseli beneath Mount Kilimanjaro, the lakes and walking trails of Naivasha, and the world-famous Maasai Mara for the Big Five and the Great Migration — finishing with Nairobi's giraffe centre, elephant orphanage and Karen Blixen heritage. Wildlife, landscapes and culture across the best of Kenya.",
    highlights: [
      "Amboseli's big elephant herds with Mount Kilimanjaro behind",
      "Boat ride on Lake Naivasha and a walk on Crescent Island",
      "Three days in the Maasai Mara — Big Five and the migration",
      "Maasai village visit for culture and tradition",
      "Nairobi's Giraffe Centre, Sheldrick elephant orphanage and Karen Blixen Museum",
    ],
    itinerary: [
      {
        day: 1,
        title: "Nairobi to Amboseli National Park",
        description:
          "Met at Jomo Kenyatta International Airport and driven to Amboseli, famed for its views of Mount Kilimanjaro. Check in and lunch, then an introductory game drive among large elephant herds, buffalo, giraffe and lion. Dinner at the lodge.",
        meals: "Lunch, dinner",
        accommodation: "Mid-range lodge, Amboseli",
      },
      {
        day: 2,
        title: "Amboseli National Park",
        description:
          "An early game drive for the best chance to see Kilimanjaro before the clouds gather and to catch the wildlife waking. Visit Observation Hill for panoramic views over the park, then sundowners and a serene dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge, Amboseli",
      },
      {
        day: 3,
        title: "Amboseli to Lake Naivasha",
        description:
          "Drive through the scenic Great Rift Valley to Lake Naivasha. After lunch, a peaceful boat ride on the lake to see hippos and abundant birdlife — cormorants, kingfishers and fish eagles. Dinner at your lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge, Lake Naivasha",
      },
      {
        day: 4,
        title: "Crescent Island & Lake Naivasha",
        description:
          "Explore Crescent Island Game Sanctuary on foot — one of the few places in Kenya to walk alongside giraffe, zebra and antelope. Relax by the lake or visit nearby flower farms in the afternoon, then a tranquil lakeside dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge, Lake Naivasha",
      },
      {
        day: 5,
        title: "To the Maasai Mara",
        description:
          "After breakfast, travel to the world-renowned Maasai Mara through dramatic landscapes. Check in and lunch, then your first game drive in the Mara — famous for lion, cheetah, leopard and, in season, the Great Migration. Dinner at the lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mara lodge",
      },
      {
        day: 6,
        title: "Maasai Mara Game Drives",
        description:
          "Early morning and afternoon game drives to catch predators at their most active across the Mara's plains, with time to relax at the lodge in between. Sundowners and a bonfire dinner in the evening.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mara lodge",
      },
      {
        day: 7,
        title: "Maasai Mara & Village Visit",
        description:
          "More game viewing across the reserve plus a visit to a traditional Maasai village to learn about their culture and way of life. Evening at the lodge with dinner under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mara lodge",
      },
      {
        day: 8,
        title: "Return to Nairobi — Giraffe Centre",
        description:
          "Drive back to Nairobi after breakfast, arriving for lunch. In the afternoon, visit the Giraffe Centre to meet the endangered Rothschild's giraffes, then a leisurely dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Hotel, Nairobi",
      },
      {
        day: 9,
        title: "Nairobi — Elephants & Heritage",
        description:
          "Visit the David Sheldrick Wildlife Trust to see orphaned baby elephants, then explore the Karen Blixen Museum or local craft markets. A farewell dinner at a top Nairobi restaurant.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Hotel, Nairobi",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "After breakfast, free time to relax or shop before your transfer to Jomo Kenyatta International Airport for your departure flight, with unforgettable memories of Kenya.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Mid-range lodge accommodation throughout",
      "All meals during the safari",
      "Guided game drives in Amboseli, Lake Naivasha and the Maasai Mara",
      "Professional safari guide/driver and comfortable 4x4 with pop-up roof",
      "Park entry fees for all reserves",
      "Maasai village visit, Giraffe Centre and David Sheldrick Wildlife Trust",
      "Airport transfers",
    ],
    excluded: [
      "International flights and Kenya visa fees",
      "Travel insurance (recommended for all travellers)",
      "Tips and personal expenses",
      "Optional activities not mentioned in the itinerary",
    ],
    faqs: [
      {
        question: "When is the best time for a Kenya safari?",
        answer:
          "July to October is peak season for the Maasai Mara and the Great Migration, with excellent game viewing. January and February are also good and drier; the reserves hold resident wildlife year-round.",
      },
      {
        question: "Can I combine Kenya with Tanzania?",
        answer:
          "Yes — many travellers pair the Maasai Mara with the Serengeti, or add Zanzibar. We arrange the cross-border logistics and flights. Ask Ombeni on WhatsApp.",
      },
      {
        question: "Is this a private safari?",
        answer:
          "Yes — it's run as a private trip with your own guide and vehicle, so the pace and focus are tailored to your group. Message Ombeni with your party size for a quote.",
      },
    ],
    bestMonths: ["Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
  },

  {
    slug: "9-day-northern-tanzania-safari",
    destinations: ["Arusha", "Tarangire", "Lake Manyara", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "9-Day Northern Tanzania Safari – Tarangire, Manyara, Ngorongoro & Serengeti",
    shortName: "9-Day Northern Safari",
    days: 9,
    priceFromUSD: 3410,
    priceNote:
      "Per person, sharing (minimum 3). From $3,410 mid-range / $4,106 luxury, all-inclusive.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/northern-tanzania-safari.jpg",
    gallery: [],
    summary:
      "Nine unhurried days across the whole northern circuit — Tarangire, Lake Manyara, the Ngorongoro Crater and three days deep in the Serengeti, from the big-cat Seronera Valley to the Mara crossings of the north — finishing with a Maasai village visit in the Ngorongoro Highlands. A 'Comfort' or 'Classic' itinerary for travellers who want time to take it all in.",
    highlights: [
      "Three full days in the Serengeti — central plains to the northern Mara",
      "Full game drive on the floor of the Ngorongoro Crater",
      "Lake Manyara's tree-climbing lions and flamingos",
      "Tarangire's elephant herds and 500+ bird species",
      "Maasai village cultural visit in the Ngorongoro Highlands",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport and transferred to your mid-range lodge in Arusha, gateway to the northern circuit, with views of Mount Meru. Unwind in the afternoon, then a welcome dinner where you meet your guide and run through the itinerary.",
        meals: "Dinner",
        accommodation: "Mid-range lodge, Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "A scenic drive to Tarangire, renowned for vast elephant herds and towering baobabs. A morning game drive when wildlife is most active, picnic lunch in the park, then more game viewing among leopards, zebra, wildebeest and 500+ bird species. Dinner and overnight near the park.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge or tented camp near Tarangire",
      },
      {
        day: 3,
        title: "Lake Manyara National Park",
        description:
          "An early drive to Lake Manyara for a morning game drive along the lakeshore — flamingos, hippos and the park's famous tree-climbing lions — then the groundwater forest for elephants, giraffe and baboons. Transfer to a lodge overlooking the Rift Valley escarpment for the evening.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge near Lake Manyara",
      },
      {
        day: 4,
        title: "Ngorongoro Crater",
        description:
          "Descend into the Ngorongoro Crater — 'Africa's Eden' — for a morning among the Big Five, with the Lerai Forest for leopard and the open plains for wildebeest and zebra. Picnic lunch at the hippo pool, then ascend to a lodge on the crater rim with panoramic views.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge on the Ngorongoro crater rim",
      },
      {
        day: 5,
        title: "Central Serengeti — Seronera Valley",
        description:
          "Drive into the Serengeti's endless plains and the Seronera Valley, the 'big cat capital of Africa', for an afternoon tracking lion, cheetah and leopard along the Seronera River. Overnight at a tented camp under a star-filled sky.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp, central Serengeti",
      },
      {
        day: 6,
        title: "Serengeti — Full Day Game Drive",
        description:
          "A full day exploring the Serengeti, starting at sunrise when predators return from the night's hunt. Explore the kopjes where lions bask and, in season, the migration herds crossing the plains. Sundowner and dinner back at camp.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp, central Serengeti",
      },
      {
        day: 7,
        title: "Northern Serengeti — Mara River",
        description:
          "Head to the quieter northern Serengeti, famous for the Mara River crossings — in season, thousands of wildebeest and zebra braving the crocodile-filled waters. Picnic lunch in the wilderness amid rolling hills, elephant and antelope. Overnight at a northern camp.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp, northern Serengeti",
      },
      {
        day: 8,
        title: "Serengeti to the Ngorongoro Highlands & Maasai Village",
        description:
          "A final Serengeti game drive, then the scenic drive back to the cooler Ngorongoro Highlands. After lunch, an optional Maasai village visit to learn about their traditions and relationship with the land. Dinner and overnight at a highland lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Ngorongoro Highlands",
      },
      {
        day: 9,
        title: "Departure",
        description:
          "After breakfast, transfer back to Arusha with time for last-minute shopping or a market visit, then a farewell lunch and your transfer to Kilimanjaro International Airport for departure.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Eight nights in mid-range or luxury lodges and tented camps",
      "All meals including picnic lunches on game-drive days",
      "Daily game drives in a private 4x4 with pop-up roof and a professional guide",
      "All park, crater and conservation fees",
      "Maasai village cultural visit and scenic sundowners",
      "All airport transfers and transport between parks",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional hot air balloon safari ($500 per person)",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "How is this different from the shorter safaris?",
        answer:
          "At nine days it covers the full northern circuit at a relaxed pace, with three days in the Serengeti (central, full-day and the northern Mara) plus Lake Manyara and a cultural visit — more time and breadth than the 5-, 6- or 7-day options.",
      },
      {
        question: "Is there a minimum group size?",
        answer:
          "Yes — this rate is based on a minimum of three travellers sharing. For couples or solo travellers we can quote a private version; message Ombeni on WhatsApp.",
      },
      {
        question: "Will I see the Great Migration?",
        answer:
          "In season, yes — the northern Mara crossings are roughly July–October and the calving plains December–March. The Serengeti and Ngorongoro hold abundant resident wildlife year-round.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl: "/booking/9-day-wildlife-and-culture-safari-in-tanzania/",
  },

  {
    slug: "10-day-serengeti-calving-safari",
    destinations: ["Tarangire", "Lake Manyara", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "10-Day Calving-Season Migration Safari – Ndutu & the Serengeti",
    shortName: "10-Day Calving Safari",
    days: 10,
    priceFromUSD: 0,
    priceNote: "Calving-season safari (December–March). Per-person pricing on request.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
    gallery: [],
    summary:
      "Ten days timed to the Great Migration's calving season (December–March), when nearly half a million wildebeest give birth on the southern Serengeti plains. From Tarangire and Lake Manyara through the Ngorongoro Crater to two full days at Ndutu and the central Serengeti, it's built for travellers who want to witness the raw drama of new life and the predators it draws.",
    highlights: [
      "Two full days at Ndutu in peak calving season (Dec–Mar)",
      "Half a million wildebeest calving — and the predators in pursuit",
      "Full day inside the Ngorongoro Crater and the Big Five",
      "Tarangire's baobabs and Lake Manyara's tree-climbing lions",
      "Central Serengeti's resident leopards, lions and elephants",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport and transferred to a charming lodge in Arusha for a welcome drink. Depending on arrival time, a short city tour or time to relax, then a detailed safari briefing over dinner.",
        meals: "Dinner",
        accommodation: "Lodge in Arusha",
      },
      {
        day: 2,
        title: "Arusha to Tarangire National Park",
        description:
          "After breakfast, drive to Tarangire — famous for enormous baobabs and large elephant herds — and begin game viewing with a picnic lunch in the park. Watch elephants bathing, giraffe grazing and birds along the riverbanks before settling at a camp near the park.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Safari lodge or tented camp near Tarangire",
      },
      {
        day: 3,
        title: "Tarangire to Lake Manyara",
        description:
          "Drive to Lake Manyara, a small but stunning park of groundwater forest and soda lake. Explore its varied ecosystems for flamingos, hippos, tree-climbing lions and blue monkeys, then continue to a lodge in the Great Rift Valley.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge near Lake Manyara / Rift Valley",
      },
      {
        day: 4,
        title: "To the Ngorongoro Highlands",
        description:
          "A relaxed drive into the Ngorongoro Highlands through fertile farmland and highland villages, with photo stops and cultural encounters along the way. Arrive at a lodge near the crater rim with time to soak in the sweeping views.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Ngorongoro Highlands",
      },
      {
        day: 5,
        title: "Ngorongoro Crater to Ndutu",
        description:
          "An early descent into the Ngorongoro Crater for a dense concentration of wildlife — lion, black rhino, buffalo, zebra and birdlife — with a picnic lunch at the hippo pool. Ascend and continue to the southern Serengeti's Ndutu plains for the night.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Ndutu (southern Serengeti)",
      },
      {
        day: 6,
        title: "Ndutu Plains — Calving Season Begins",
        description:
          "A first full day in the heart of the calving season, where hundreds of thousands of wildebeest, zebra and gazelle gather to give birth — and lions, hyenas and cheetahs follow. Morning and afternoon game drives put you close to the action.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mobile tented camp or eco-lodge, Ndutu",
      },
      {
        day: 7,
        title: "Full Day in Ndutu — Migration & Predators",
        description:
          "Continue exploring Ndutu as the drama unfolds daily; the sheer number of newborn calves draws predators, and hunts often play out at a close but safe distance. Your guide reads the behaviour for the best photography, finishing with a sundowner in the wild.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mobile tented camp or eco-lodge, Ndutu",
      },
      {
        day: 8,
        title: "Ndutu to Central Serengeti",
        description:
          "Drive north to the central Serengeti, known for its resident wildlife and classic acacia-dotted plains — leopards in sausage trees, elephants in the grasslands and prides of lion in the sun. Settle into a camp amid the serenity of the plains.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, central Serengeti",
      },
      {
        day: 9,
        title: "Serengeti to Karatu",
        description:
          "A final morning game drive in the Serengeti, then the journey back through the Ngorongoro Highlands to Karatu, between the crater and Lake Manyara. An evening at leisure in a cosy lodge, reflecting on the past days.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Karatu",
      },
      {
        day: 10,
        title: "Karatu to Arusha — Departure",
        description:
          "After a leisurely breakfast, drive back to Arusha — with an optional coffee-plantation or souvenir stop depending on your flight — and a transfer to Kilimanjaro International Airport for your onward journey.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "All park fees and conservation charges",
      "Private 4x4 safari vehicle with pop-up roof and a professional guide",
      "All meals and accommodation as listed",
      "Domestic flights where applicable",
      "Bottled water on game drives and airport transfers",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Tips, souvenirs and items of a personal nature",
      "Optional activities not mentioned in the itinerary",
    ],
    faqs: [
      {
        question: "When exactly is the calving season?",
        answer:
          "Roughly December to March, peaking in late January and February, when the herds mass on the southern Serengeti and Ndutu plains to give birth. It's one of the best windows for predator action and photography.",
      },
      {
        question: "How is this different from the 5-Day Ndutu safari?",
        answer:
          "This 10-day trip adds Lake Manyara, more highlands and an extra Serengeti leg around the same Ndutu core, so you get the full northern circuit alongside the calving plains rather than a focused short version.",
      },
      {
        question: "Why is the price shown on request?",
        answer:
          "The source itinerary doesn't list a fixed rate; pricing depends on group size, season and lodge level. Message Ombeni on WhatsApp with your dates and party for an exact quote.",
      },
    ],
    bestMonths: ["Dec", "Jan", "Feb", "Mar"],
    oldUrl:
      "/booking/10-day-serengeti-great-migration-safari-itinerary-with-trust-tours-and-safaris-calving-season-focus-december-to-march/",
  },

  {
    slug: "12-day-kilimanjaro-safari-culture",
    seoTitle: "Kilimanjaro + Safari + Culture, 12 Days — $2,750",
    metaDescription:
      "Climb Kilimanjaro, safari the Serengeti and meet the Maasai in one trip. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $2,750 pp, book direct.",
    destinations: ["Kilimanjaro", "Arusha", "Tarangire", "Lake Manyara", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "12-Day Tanzania Adventure – Kilimanjaro Trek, Safari & Culture",
    shortName: "12-Day Trek, Safari & Culture",
    days: 12,
    priceFromUSD: 2750,
    priceNote:
      "Per person. From $2,750 shared group / $3,799 private (2–3-star camps & tents). Best July–October for the Mara crossings.",
    tier: ["budget", "mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "The full Tanzania adventure in twelve days: a scenic three-day Kilimanjaro trek on the Marangu Route to Horombo Hut, a cultural day of waterfalls, coffee and hot springs, the classic safari circuit tracking the Great Migration, and a finale at the surreal flamingo-filled Lake Natron. Trek, bush and culture in one trip, with mobile camping and a small group.",
    highlights: [
      "Three-day Marangu trek to Horombo Hut (3,720 m) with Mawenzi views",
      "Materuni Waterfall, a coffee tour and the Kikuletwa Hot Springs",
      "Tarangire, Lake Manyara and the Ngorongoro Crater",
      "Serengeti and the Great Migration's Mara River crossing in season",
      "Lake Natron's flamingos and the Engaresero Waterfall to finish",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Arrive in Arusha and settle into your accommodation. Our team meets you for a briefing on the trek and safari ahead and to sort any final details.",
        meals: "—",
        accommodation: "Lodge in Arusha",
      },
      {
        day: 2,
        title: "Marangu Gate to Mandara Hut",
        description:
          "Drive to Marangu Gate (1,860 m) on Kilimanjaro, meet your mountain guide and trek through lush rainforest — colobus monkeys and unique flora — to Mandara Hut (2,700 m) for dinner and your first night on the mountain.",
        altitudeStart: 1860,
        altitudeEnd: 2700,
        hours: "4–5 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mandara Hut",
      },
      {
        day: 3,
        title: "Mandara Hut to Horombo Hut",
        description:
          "Climb out of the forest into open moorland with stunning views, reaching Horombo Hut (3,720 m). Time to acclimatize and take in Mawenzi Ridge before an early night.",
        altitudeStart: 2700,
        altitudeEnd: 3720,
        hours: "5–6 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Horombo Hut",
      },
      {
        day: 4,
        title: "Descend to Marangu Gate, return to Arusha",
        description:
          "Descend through moorland and rainforest back to Marangu Gate, then transfer to Arusha to rest after your high-altitude trek.",
        altitudeStart: 3720,
        altitudeEnd: 1860,
        hours: "5–6 hours",
        meals: "Breakfast, lunch",
        accommodation: "Lodge in Arusha",
      },
      {
        day: 5,
        title: "Materuni Waterfall, Coffee Tour & Hot Springs",
        description:
          "A cultural day near Kilimanjaro: a short hike to Materuni Falls, a traditional coffee-making experience with a home-cooked Tanzanian meal, then a relaxing swim at the Kikuletwa Hot Springs before returning to Arusha.",
        meals: "Breakfast, lunch",
        accommodation: "Lodge in Arusha",
      },
      {
        day: 6,
        title: "Tarangire National Park",
        description:
          "Depart at dawn for Tarangire, home to Tanzania's largest elephant herds. A full-day game drive among baobabs along the Tarangire River, spotting lion, giraffe, zebra and leopard, then a bonfire under the stars at a tented campsite.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp near Tarangire",
      },
      {
        day: 7,
        title: "Lake Manyara & Mto wa Mbu Village",
        description:
          "A morning game drive in Lake Manyara for tree-climbing lions, flamingos, elephants and hippos, then a cultural tour of Mto wa Mbu village — local food and banana plantations — before overnighting near Manyara.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Campsite or lodge near Lake Manyara",
      },
      {
        day: 8,
        title: "Ngorongoro Crater to the Serengeti",
        description:
          "An early descent into the Ngorongoro Crater for a sunrise game drive among the Big Five, flamingos at Lake Magadi and hyena, hippo and cheetah. In the afternoon, drive on to the Serengeti for a tented-camp overnight.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Serengeti",
      },
      {
        day: 9,
        title: "Central Serengeti Plains",
        description:
          "Explore the central Serengeti's vast plains — lion, cheetah and elephant — with sunrise and daytime game drives, before moving toward the northern Serengeti for the night.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Serengeti",
      },
      {
        day: 10,
        title: "Northern Serengeti & Mara River Crossing",
        description:
          "An early start for the northern Serengeti and the Mara River, where in season the wildebeest and zebra brave the crocodile-filled waters — the migration's most dramatic spectacle — with game drives throughout the day.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Serengeti",
      },
      {
        day: 11,
        title: "Serengeti to Lake Natron",
        description:
          "Depart for Lake Natron, home to thousands of flamingos. Visit the Engaresero Waterfall and hike the volcanic landscapes around the surreal alkaline lake, then camp under the African sky.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Camp near Lake Natron",
      },
      {
        day: 12,
        title: "Lake Natron to Arusha — Departure",
        description:
          "Depart Lake Natron's breathtaking landscapes for the 2–3 hour drive back to Arusha, where your adventure concludes with a transfer for your onward journey.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All park fees and government taxes",
      "Professional English-speaking mountain and safari guides",
      "Transport in a 4x4 safari vehicle with pop-up roof",
      "Accommodation in mountain huts, tented camps and tents",
      "All meals (breakfast, lunch, dinner) and drinking water",
      "Cultural village and coffee tour",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (required for the Kilimanjaro trek)",
      "Tips for guides and crew ($20–30 per day recommended)",
      "Personal expenses such as souvenirs and laundry",
    ],
    faqs: [
      {
        question: "Does the Kilimanjaro part reach the summit?",
        answer:
          "No — this is a scenic three-day Marangu trek to Horombo Hut (3,720 m), a beautiful high-altitude hike rather than a summit climb. If you'd like to summit Uhuru Peak, we can swap in a full 6–8 day climb; just ask.",
      },
      {
        question: "Is this a group or private trip?",
        answer:
          "Both — it runs as a shared group tour from $2,750pp (joining other travellers) or as a private trip from $3,799pp. Tell Ombeni which you prefer on WhatsApp.",
      },
      {
        question: "When is the best time to go?",
        answer:
          "July to October for the Mara River crossings and the most stable trekking weather. The safari and trek run at other times too, with resident wildlife year-round.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl:
      "/booking/12-day-itinerary-customized-tracking-the-great-migration-crossing-with-trust-tours-and-safaris/",
  },

  {
    slug: "7-day-northern-circuit-safari",
    destinations: ["Arusha", "Tarangire", "Serengeti", "Ngorongoro"],
    category: "safari",
    title: "7-Day Northern Circuit Safari – Tarangire, Serengeti & Ngorongoro",
    shortName: "7-Day Northern Circuit",
    days: 7,
    priceFromUSD: 3210,
    priceNote:
      "Per person, sharing, mid-range. 'Comfort' and 'Classic' accommodation options available.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
    gallery: [],
    summary:
      "A week across Tanzania's Northern Circuit at a comfortable pace — Tarangire's elephants and baobabs with sunrise-to-sunset game drives, two days in the Serengeti, a full descent into the Ngorongoro Crater, and a Maasai village visit to finish. A relaxed 'Comfort' or 'Classic' safari for travellers who want the highlights without rushing.",
    highlights: [
      "Sunrise, daytime and sunset game drives in Tarangire",
      "Two days in the Serengeti, including the Seronera Valley",
      "Full game drive on the floor of the Ngorongoro Crater",
      "Maasai village cultural visit",
      "Choice of 'Comfort' or 'Classic' lodges and camps",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Welcomed at Kilimanjaro International Airport and transferred to your hotel in Arusha, gateway to the Northern Circuit at the foot of Mount Meru. A welcome dinner with your guide and a briefing on the week ahead.",
        meals: "Dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park — Land of Giants",
        description:
          "A sunrise game drive in Tarangire, famous for its massive elephant herds and baobabs, then a full day across savannah and riverine forest with buffalo, zebra, wildebeest and 550+ bird species — ending with a golden-light sunset drive. Overnight near the park.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge or tented camp near Tarangire",
      },
      {
        day: 3,
        title: "To the Serengeti — Seronera",
        description:
          "Drive through the Great Rift Valley and up the escarpment into the Serengeti, its open plains teeming with wildlife. An afternoon game drive in the central Seronera area — large herds and predators like lion and leopard — then a tented-camp dinner under unpolluted skies.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp or lodge, Serengeti",
      },
      {
        day: 4,
        title: "Full Day in the Serengeti",
        description:
          "A sunrise game drive when predators are on the hunt, then full days exploring different regions of the park — in season, the Great Migration crossing the plains. Your guide finds the best sightings, with an evening back at camp around the fire.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp or lodge, Serengeti",
      },
      {
        day: 5,
        title: "Serengeti to the Ngorongoro Crater",
        description:
          "A final morning game drive en route to the Ngorongoro Conservation Area, then descend into the crater — the 'Eighth Wonder of the World' — with a picnic lunch by the hippo pool. Ascend to a lodge on the crater rim for spectacular views and dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Ngorongoro crater rim",
      },
      {
        day: 6,
        title: "Ngorongoro to Arusha — Maasai Village",
        description:
          "A morning visit to a Maasai village to learn about their customs and way of life, then the drive back to Arusha with time to relax or shop. A special farewell dinner to celebrate your last night in Tanzania.",
        meals: "Breakfast, dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "After breakfast and, depending on your flight, some free time in Arusha, your guide transfers you to Kilimanjaro International Airport for your departure flight.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Six nights in lodges and tented camps (Comfort or Classic)",
      "All meals from dinner on Day 1 to breakfast on Day 7, with picnic lunches",
      "Daily game drives — sunrise, sunset and a full Serengeti day — in a private 4x4",
      "All park, crater and conservation fees",
      "Maasai village cultural visit and scenic sundowners",
      "All airport transfers and transport between parks",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional hot air balloon safari ($500 per person)",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "What's the difference between 'Comfort' and 'Classic'?",
        answer:
          "The route and guiding are the same; the difference is the accommodation level. 'Classic' uses well-priced lodges and camps, 'Comfort' steps up to more upscale options. Tell Ombeni your preference for a tailored quote.",
      },
      {
        question: "How is this different from the 7-Day Migration Safari?",
        answer:
          "This northern-circuit week balances Tarangire, two Serengeti days, the crater and a cultural visit at a relaxed pace, while the 7-Day Migration Safari spends more days deep in the Serengeti chasing the herds and river crossings.",
      },
      {
        question: "Can I add a balloon flight or Zanzibar?",
        answer:
          "Yes — a sunrise hot air balloon over the Serengeti is $500pp, and a Zanzibar beach extension is easy to add as one trip. Just ask Ombeni on WhatsApp.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"],
  },

  {
    slug: "7-day-photography-cultural-safari",
    heroImage: "/images/maasai-dance.jpg",
    destinations: ["Arusha", "Tarangire", "Serengeti", "Ngorongoro"],
    category: "safari",
    title: "7-Day Great Migration, Photography & Cultural Safari",
    shortName: "7-Day Photo & Culture",
    days: 7,
    priceFromUSD: 3100,
    priceNote:
      "Per person. From $3,100 mid-range / $4,750 luxury (varies by group size and migration season).",
    tier: ["mid-range", "comfort"],
    gallery: [],
    summary:
      "A safari built for photographers and culture-seekers: golden-hour game drives through Tarangire, the Serengeti migration and the Ngorongoro Crater, paired with deep cultural immersion among the Hadzabe and Datoga peoples of Lake Eyasi and a Maasai village. Timed drives, expert photography guidance and authentic tribal encounters.",
    highlights: [
      "Golden-hour photography drives across the Northern Circuit",
      "Great Migration tracking in the Serengeti (season-dependent)",
      "Lake Eyasi — Hadzabe hunter-gatherers and Datoga blacksmiths",
      "Full game drive in the Ngorongoro Crater — black rhino and flamingos",
      "Maasai village portraits and on-safari photography guidance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Welcomed at Kilimanjaro International Airport and transferred to a tranquil lodge set among gardens or coffee plantations. An evening cultural briefing and a photography orientation to set up your gear and your week.",
        meals: "Dinner",
        accommodation: "Tranquil lodge, Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park — Land of Giants",
        description:
          "A day among Tarangire's baobabs and elephant herds, framing wide-angle shots of elephants against ancient trees and the golden-hour glow over the riverbed as wildlife gathers. Overnight at a lodge or tented camp near the park.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp near Tarangire",
      },
      {
        day: 3,
        title: "Lake Eyasi — Hadzabe & Datoga Cultures",
        description:
          "A soul-stirring cultural day at Lake Eyasi: join the Hadzabe hunter-gatherers to learn bow hunting, language and rituals, then the Datoga blacksmith community for metalwork and jewellery crafting — a rare window into Tanzania's ancestral roots. Overnight at a cultural lodge near the lake.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Cultural lodge near Lake Eyasi",
      },
      {
        day: 4,
        title: "Into the Serengeti",
        description:
          "A scenic drive through the Ngorongoro highlands to the Serengeti, with an afternoon game drive across the endless plains — wildebeest, zebra and predators — and a sunset photography session at a kopje or river point. Overnight at a tented camp positioned for the season.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Serengeti (central or northern)",
      },
      {
        day: 5,
        title: "Full-Day Serengeti — Migration in Motion",
        description:
          "A full day chasing the migration — stampeding herds, river crossings and predator chases — with a midday rest and a golden-hour drive. An optional sunrise hot air balloon safari is available for aerial photography. Overnight under the Serengeti stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Serengeti",
      },
      {
        day: 6,
        title: "Ngorongoro Crater — Wildlife Wonderland",
        description:
          "An early game drive en route to Ngorongoro, then descend into the crater — a photographer's paradise of black rhino, flamingos and lion prides — with a picnic by the hippo pool. Overnight at a lodge on the crater rim with sweeping views.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Ngorongoro crater rim",
      },
      {
        day: 7,
        title: "Maasai Cultural Visit & Departure",
        description:
          "A morning at a Maasai village for music, storytelling and portrait photography, learning about their customs and dress, then return to Arusha for souvenir shopping or lunch before your airport transfer.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Expert wildlife and cultural safari guide with photography guidance",
      "Private 4x4 Land Cruiser with pop-up roof",
      "All park and conservation fees (Tarangire, Serengeti, Ngorongoro)",
      "Six nights' mid-range or luxury accommodation, full board",
      "Cultural activities with the Hadzabe, Datoga and Maasai",
      "Bottled water and soft drinks on game drives, plus airport transfers",
    ],
    excluded: [
      "International and domestic flights and Tanzania visa fees",
      "Travel and health insurance",
      "Optional balloon safari in the Serengeti ($550 per person)",
      "Tips, alcoholic drinks and personal shopping",
    ],
    faqs: [
      {
        question: "Do I need to be a professional photographer?",
        answer:
          "Not at all. Drives are timed for the best light and your guide offers tips, whether you're shooting on a pro camera or a smartphone. A private photographic instructor can be arranged on request.",
      },
      {
        question: "What makes the cultural side special?",
        answer:
          "Beyond the usual Maasai visit, you spend a full day at Lake Eyasi with the Hadzabe hunter-gatherers and Datoga blacksmiths — among the most authentic tribal encounters in Tanzania.",
      },
      {
        question: "When is the best time for the migration?",
        answer:
          "June–October for the northern river crossings and December–March for the southern calving. Your camp location in the Serengeti is set to match the season, so you're always near the herds.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "11-day-bird-photography-safari",
    heroImage: "/images/safari-birds.jpg",
    destinations: ["Arusha", "Tarangire", "Lake Manyara", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "11-Day Bird Photography & Great Migration Safari",
    shortName: "11-Day Bird Photography",
    days: 11,
    priceFromUSD: 4314,
    priceNote:
      "Per person, sharing. From $4,314 mid-range / $5,939 luxury, all-inclusive.",
    tier: ["mid-range", "comfort"],
    gallery: [],
    summary:
      "Eleven days for birders and photographers: the full Northern Circuit — Tarangire, Lake Manyara, the Ngorongoro Crater and five days in the Serengeti — timed to the Great Migration and built around the region's spectacular birdlife, from lovebirds and bustards to crowned cranes, fish eagles and Goliath herons. Mid-range lodges and tented camps throughout.",
    highlights: [
      "Five days in the Serengeti tracking the migration and birdlife",
      "Lake Manyara — flamingos, pelicans and the African Fish Eagle",
      "Ngorongoro's Secretary Bird and Grey Crowned Crane",
      "Tarangire's Yellow-collared Lovebird and Kori Bustard",
      "Big Five game viewing alongside dedicated birding stops",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport and transferred to Arusha. An evening safari briefing and equipment check (cameras, binoculars), with optional birding around the lodge gardens — superb starling, hadada ibis and tropical boubou.",
        meals: "Lunch, dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "A full day in Tarangire with birding along the river — Yellow-collared Lovebird, Ashy Starling and Kori Bustard — plus elephants and baobabs for wide-angle shots. Afternoon searches for endemics like Von der Decken's Hornbill and the Red-and-Yellow Barbet, then sunset photography over the savanna.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented lodge near Tarangire",
      },
      {
        day: 3,
        title: "Lake Manyara — Birdwatching Paradise",
        description:
          "Early entry to Lake Manyara for waterbirds along the shore — Pink-backed Pelican, flamingos and the African Fish Eagle — and a picnic by the hippo pool. An optional forest walk for Silvery-cheeked Hornbill and Narina Trogon, then owls and nightjars in the evening.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge near Lake Manyara",
      },
      {
        day: 4,
        title: "To the Ngorongoro Highlands & Maasai Village",
        description:
          "A scenic drive into the Ngorongoro Highlands with photo stops, then an afternoon Maasai village visit and birding around the lodge for Scarlet-tufted Sunbird and Augur Buzzard. An early dinner ahead of the crater descent.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Ngorongoro Highlands",
      },
      {
        day: 5,
        title: "Ngorongoro Crater — Full Day",
        description:
          "A sunrise descent into the crater for the best light: wetland birding for Greater Flamingo and Black-winged Stilt, the Big Five including black rhino, and a picnic at Ngoitokitok. A walk through the Lerai Forest for Secretary Bird and Grey Crowned Crane, then sunset on the rim.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Ngorongoro crater rim",
      },
      {
        day: 6,
        title: "Central Serengeti — Seronera Valley",
        description:
          "Drive to the Serengeti with a birding stop at Naabi Hill (larks and bustards). An afternoon game drive in the Seronera Valley for leopard, cheetah and raptors among the big-cat country.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp, central Serengeti",
      },
      {
        day: 7,
        title: "Central & Western Serengeti",
        description:
          "Mornings tracking predators near the river crossings and birding the kopjes for Rock-loving Cisticola and Pygmy Falcon, with full-day game drives following the wildebeest herds and golden-hour photography over the plains.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp, Serengeti",
      },
      {
        day: 8,
        title: "Western Serengeti — Migration Focus",
        description:
          "More time with the migration herds and the western corridor's birdlife and predators, with timed drives for the best photographic light morning and evening.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp, Serengeti",
      },
      {
        day: 9,
        title: "Northern Serengeti — Mara River",
        description:
          "Head to the northern Serengeti and Kogatende for the Mara River crossings (July–October), a front-row seat to one of nature's greatest spectacles as the herds brave the crocodile-filled waters.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp, northern Serengeti",
      },
      {
        day: 10,
        title: "Northern Serengeti — River Birding",
        description:
          "Birding along the Mara River for Goliath Heron and Saddle-billed Stork between game drives, with more chances at the crossings and the predators that gather. Evening relaxation at the lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp, northern Serengeti",
      },
      {
        day: 11,
        title: "Return to Arusha & Departure",
        description:
          "An early breakfast, then a scenic flight or drive back to Arusha with a market stop for souvenirs, and a transfer to Kilimanjaro International Airport for your departure.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Mid-range or luxury lodges and tented camps throughout",
      "All meals including picnic lunches on game-drive days",
      "Daily game drives in a private 4x4 with pop-up roof and a professional guide",
      "All park, crater and conservation fees",
      "Maasai village cultural visit and guided nature walks",
      "All airport transfers and transport between parks",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional hot air balloon safari ($500 per person)",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "Is this trip only for birders?",
        answer:
          "No — it pairs dedicated birding with full Big Five game viewing and the Great Migration, so it suits photographers and wildlife lovers too. The pace simply builds in more time for birds and light than a standard safari.",
      },
      {
        question: "When is the best time for birds and the migration?",
        answer:
          "Resident birds are excellent year-round; migrant species peak November–April. For the migration, June–July is the western Serengeti (Grumeti) and August–October the northern Mara crossings.",
      },
      {
        question: "Can I fly between some legs?",
        answer:
          "Yes — internal flights can replace some long drives (e.g. the return from the northern Serengeti). Ask Ombeni for a fly-in/fly-out version on WhatsApp.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct"],
  },

  {
    slug: "3-day-serengeti-balloon-zanzibar",
    destinations: ["Serengeti", "Zanzibar"],
    category: "safari",
    title: "3-Day Serengeti Safari & Hot Air Balloon from Zanzibar",
    shortName: "3-Day Serengeti Fly-in",
    days: 3,
    priceFromUSD: 2228,
    priceNote:
      "Per person, sharing, mid-range. Includes round-trip flights from Zanzibar and the hot air balloon safari.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/packages/3-day-serengeti-balloon-zanzibar.jpg",
    gallery: [],
    summary:
      "The perfect safari add-on to a Zanzibar beach holiday: fly straight from the island to the Serengeti for two nights of game drives and a dawn hot air balloon flight with a champagne bush breakfast, then fly back to the coast. Three action-packed days with the flights, balloon and all meals included.",
    highlights: [
      "Round-trip flights between Zanzibar and the Serengeti",
      "Sunrise hot air balloon safari with a champagne bush breakfast",
      "Game drives across the Serengeti's wildlife-rich plains",
      "Lions, elephants, cheetahs, wildebeest and more",
      "An easy safari taste for beach holidaymakers, all arranged",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly Zanzibar to the Serengeti — Afternoon Game Drive",
        description:
          "Fly directly from Zanzibar to the Serengeti and check into your lodge or tented camp. Head out for an afternoon game drive across the plains for your first sightings — lion, elephant, giraffe and herds of wildebeest — returning for a relaxed dinner.",
        meals: "Lunch, dinner",
        accommodation: "Mid-range lodge or tented camp, Serengeti",
      },
      {
        day: 2,
        title: "Hot Air Balloon Safari & Full-Day Game Drive",
        description:
          "An early start for a dawn hot air balloon flight over the Serengeti, drifting above the plains as the sunrise lights up the herds, followed by a champagne breakfast in the bush. A full-day game drive then explores more of the park — cheetah, zebra and hippo — with a picnic lunch at a scenic spot.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge or tented camp, Serengeti",
      },
      {
        day: 3,
        title: "Final Game Drive & Return to Zanzibar",
        description:
          "A last morning game drive to catch the wildlife at its most active — predators returning from the night's hunt — then transfer to the airstrip for your return flight to Zanzibar.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Round-trip flights from Zanzibar to the Serengeti",
      "Two nights' mid-range lodge or tented-camp accommodation",
      "All meals — breakfast, lunch and dinner",
      "Sunrise hot air balloon safari with champagne breakfast",
      "Game drives in a 4x4 with a professional guide",
      "Park entry and conservation fees",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Tips, souvenirs and items of a personal nature",
      "Drinks beyond those specified",
    ],
    faqs: [
      {
        question: "Is this good as an add-on to a Zanzibar holiday?",
        answer:
          "Exactly — it's designed for it. You fly from Zanzibar to the Serengeti and back, so you get a real safari and a balloon flight in three days without unwinding your beach plans. We arrange the flights both ways.",
      },
      {
        question: "Is the balloon flight guaranteed?",
        answer:
          "The sunrise balloon is included and pre-booked, but flies subject to weather for safety. If conditions force a cancellation, that portion is refunded by the operator.",
      },
      {
        question: "Can I extend my time on safari?",
        answer:
          "Yes — add nights in the Serengeti or the Ngorongoro Crater, or combine with a longer northern-circuit safari. Message Ombeni with your dates on WhatsApp.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "6-day-calving-safari",
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "6-Day Calving-Season Safari – Tarangire, Ndutu & Ngorongoro",
    shortName: "6-Day Calving Safari",
    days: 6,
    priceFromUSD: 2350,
    priceNote:
      "Per person, mid-range. From $2,350 (3 travellers) / $2,650 (2) / $3,250 (solo). December–April.",
    tier: ["mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "Six days at the heart of the Great Migration's calving season (December–April), when over two million wildebeest, zebra and gazelle gather on the Ndutu and southern Serengeti plains and around 8,000 calves are born each day at the peak. Three full days in the migration zone, bookended by Tarangire and the Ngorongoro Crater — outstanding value and superb predator action.",
    highlights: [
      "Three days in the Ndutu calving grounds at peak season",
      "Thousands of newborn calves and intense predator activity",
      "Tarangire's baobabs and large elephant herds",
      "Full game drive on the floor of the Ngorongoro Crater",
      "Excellent value — per-person price drops with group size",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description:
          "A morning briefing in Arusha, then the 2½-hour drive to Tarangire through Maasai country. An afternoon game drive among massive elephant herds, baobabs, lions and 550+ bird species, with a picnic lunch in the park. Continue to Karatu for dinner and overnight.",
        meals: "Lunch, dinner",
        accommodation: "Mid-range lodge, Karatu",
      },
      {
        day: 2,
        title: "Karatu to the Ndutu Conservation Area",
        description:
          "Drive through the Ngorongoro highlands and volcanic landscapes into the Ndutu ecosystem, arriving by midday as the plains fill with wildebeest, zebra and the predators that follow. An afternoon game drive where the migration drama begins — newborn calves, stalking lions and cheetahs.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Ndutu",
      },
      {
        day: 3,
        title: "Full Day in Ndutu — Calving Season",
        description:
          "A full day in the migration's maternity ward. Early morning for predators returning from the hunt, then tracking the short-grass plains where thousands of calves are born daily — wildebeest mothers, massive zebra herds, bat-eared foxes and serval cats. Evening storytelling around the campfire.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Ndutu",
      },
      {
        day: 4,
        title: "Full Day — Ndutu & Southern Serengeti",
        description:
          "Another full day following the herds, your guide positioning you in the most active areas. Lion prides with cubs, cheetahs hunting gazelle, large hyena clans and elephants crossing the plains — short grass and high density make it superb for photography. Spectacular southern Serengeti sunsets.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Ndutu",
      },
      {
        day: 5,
        title: "Ndutu to the Ngorongoro Highlands",
        description:
          "A final migration game drive, then after lunch the drive toward the Ngorongoro Highlands, arriving at the crater rim in the late afternoon for spectacular views over one of Africa's most iconic landscapes.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or camp, Ngorongoro rim",
      },
      {
        day: 6,
        title: "Ngorongoro Crater to Arusha",
        description:
          "An early descent into the Ngorongoro Crater — 'Africa's Garden of Eden' — for a chance at the Big Five in a single morning, plus hippo, flamingo and hyena, with a picnic lunch by the hippo pool. Continue your game drive, then return to Arusha where your safari concludes.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Private 4x4 Land Cruiser with pop-up roof and a professional guide",
      "All national park, conservation and Ngorongoro Crater fees",
      "Full-board accommodation throughout the safari",
      "Unlimited game drives and bottled water on safari",
      "Government taxes and VAT, plus Arusha airport transfers",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Alcoholic and soft drinks, plus personal expenses",
      "Tips and gratuities for guide and staff",
    ],
    faqs: [
      {
        question: "When exactly is the calving season?",
        answer:
          "December to April, peaking January–March, when up to 500,000 calves are born around Ndutu and thousands of births occur daily — drawing exceptional numbers of predators.",
      },
      {
        question: "How does the price work?",
        answer:
          "It's per person and drops with group size: from $3,250 solo, $2,650 for two, and $2,350 each for three travellers sharing. Message Ombeni with your party for an exact quote.",
      },
      {
        question: "How is this different from the 5- and 10-day calving safaris?",
        answer:
          "The 6-day gives three full days in Ndutu — more migration time than the 5-day — while staying more focused (and better value) than the 10-day full-circuit version.",
      },
    ],
    bestMonths: ["Dec", "Jan", "Feb", "Mar", "Apr"],
  },

  {
    slug: "10-day-safari-zanzibar-adventure",
    heroImage: "/images/safari-zanzibar-adventure.jpg",
    seoTitle: "Safari & Zanzibar Adventure, 10 Days — $4,890",
    metaDescription:
      "Bush-to-beach adventure: a northern-circuit safari paired with Zanzibar. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $4,890 pp, no OTA markup.",
    destinations: ["Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
    category: "safari",
    title: "10-Day Safari & Zanzibar Adventure – Bush to Beach",
    shortName: "10-Day Safari + Zanzibar",
    days: 10,
    priceFromUSD: 4890,
    priceNote:
      "Per person, double sharing. From $4,890 (4-star) / $5,999 (5-star). Includes the flight from the safari to Zanzibar.",
    tier: ["comfort"],
    gallery: [],
    summary:
      "The complete bush-to-beach escape: six days on the classic northern circuit — Tarangire, the Ngorongoro Crater and the Serengeti — then a flight to Zanzibar for four days of Stone Town, spice farms, Mnemba's reefs and the white sands of the Indian Ocean. A 'Comfort' (4-star) or 'Classic' (5-star) itinerary with the internal flight and all activities arranged.",
    highlights: [
      "Big Five game drives in Tarangire, Ngorongoro and the Serengeti",
      "Flight from the safari straight to the Zanzibar coast",
      "Stone Town tour, spice farm and a sunset dhow cruise",
      "Mnemba Island snorkelling, dolphins and a Blue Safari",
      "Sea turtles at Baraka and white-sand beach time to finish",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Welcomed at Kilimanjaro International Airport and transferred to your lodge in Arusha. Relax after your journey and meet your guide in the evening for a detailed briefing on the safari ahead.",
        meals: "Dinner",
        accommodation: "Lodge, Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "A scenic drive to Tarangire, famous for its large elephant herds and ancient baobabs. Picnic lunch in the park, then a game drive for elephant, giraffe, lion, leopard and abundant birdlife. Dinner under the stars at a lodge or tented camp near the park.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp near Tarangire",
      },
      {
        day: 3,
        title: "Tarangire to the Ngorongoro Crater",
        description:
          "An early game drive in Tarangire, then drive through the Great Rift Valley to the Ngorongoro Conservation Area and descend into the crater for an afternoon among the Big Five. Ascend to a lodge on the crater rim for dinner with a view.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Ngorongoro crater rim",
      },
      {
        day: 4,
        title: "Ngorongoro Crater to the Serengeti",
        description:
          "A second descent into the crater at dawn for predators and grazing herds, picnic lunch, then drive on to the central Serengeti (Seronera) for an evening game drive in big-cat country. Dinner and overnight at a Serengeti lodge or camp.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp, Serengeti",
      },
      {
        day: 5,
        title: "Full Day in the Serengeti",
        description:
          "A sunrise game drive in golden light, brunch and rest, then an afternoon following the wildlife — the Great Migration if in season, or resident herds and predators. A sundowner and dinner around the campfire.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp, Serengeti",
      },
      {
        day: 6,
        title: "Serengeti to Zanzibar",
        description:
          "A final morning game drive, then transfer to the airstrip and fly (via Kilimanjaro/Arusha) to Zanzibar. Arrive on the Spice Island and transfer to your Stone Town hotel for an evening at leisure.",
        meals: "Breakfast, dinner",
        accommodation: "Top-quality hotel, Stone Town",
      },
      {
        day: 7,
        title: "Stone Town & Sunset Dhow Cruise",
        description:
          "A guided walking tour of UNESCO-listed Stone Town — the House of Wonders, Sultan's Palace, Old Fort and Darajani Market — then a romantic sunset dhow cruise with cocktails and a traditional Swahili dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Top-quality hotel, Stone Town",
      },
      {
        day: 8,
        title: "Spice Tour & Nakupenda Beach",
        description:
          "A morning spice farm tour — cinnamon, cloves and nutmeg — then the Nakupenda sandbank for swimming, snorkelling and a fresh seafood lunch on the beach. Evening at leisure with an optional spa treatment.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Beachfront hotel",
      },
      {
        day: 9,
        title: "Mnemba Island & Blue Safari",
        description:
          "Boat out to Mnemba Island to snorkel pristine reefs and look for dolphins, then a Blue Safari among remote sandbanks with a beach barbecue. Return for a private dinner, with the option to dine under the stars on the beach.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Beachfront hotel",
      },
      {
        day: 10,
        title: "Sea Turtles & Departure",
        description:
          "A morning visit to the Baraka Natural Aquarium to swim alongside endangered green sea turtles, then time to relax or explore Stone Town's galleries and shops before your airport transfer for departure.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Internal flight from the safari to Zanzibar and all transfers",
      "Six nights' safari accommodation (4-star or 5-star) and three nights in Zanzibar, full board",
      "All park, crater and conservation fees",
      "Private 4x4 game drives with a professional guide",
      "Stone Town and spice tours, Nakupenda, Mnemba snorkelling and Baraka turtles",
      "Sunset dhow cruise and all activities as per the itinerary",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional activities not mentioned in the itinerary",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "Is the flight to Zanzibar included?",
        answer:
          "Yes — the internal flight from the safari to Zanzibar is included, along with all transfers. You only arrange your international flights.",
      },
      {
        question: "What's the difference between 4-star and 5-star?",
        answer:
          "The itinerary is identical; the difference is the hotels and lodges. The 4-star 'Comfort' package is from $4,890pp and the 5-star 'Classic' (Serena, Park Hyatt and similar) from $5,999pp.",
      },
      {
        question: "Can the safari/beach split be adjusted?",
        answer:
          "Yes — you can lengthen either side or add a Kilimanjaro climb. Tell Ombeni what you have in mind on WhatsApp and he'll tailor it.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl:
      "/booking/11-day-adventure-is-perfect-a-perfect-combination-for-an-unforgettable-adventure-with-trust-tours-and-safaris-stay-at-5-star-or-4-star-hotels-and-lodges/",
  },

  {
    slug: "5-day-safari-lengai",
    heroImage: "/images/safari-gazelle.jpg",
    destinations: ["Tarangire", "Serengeti", "Ngorongoro", "Lake Natron", "Ol Doinyo Lengai"],
    category: "safari",
    title: "5-Day Safari & Ol Doinyo Lengai Volcano Adventure",
    shortName: "5-Day Safari + Lengai Climb",
    days: 5,
    priceFromUSD: 1450,
    priceNote:
      "Per person. From $1,450 budget / $2,350 mid-range / $3,800+ luxury. Plus local climbing & TAWA fees (~$90–120pp). Available year-round.",
    tier: ["budget", "mid-range", "comfort"],
    gallery: [],
    summary:
      "Wildlife and volcano in one trip: game drives in Tarangire and the Serengeti, the Big Five in the Ngorongoro Crater, and a thrilling midnight climb of Ol Doinyo Lengai — the only active carbonatite volcano on Earth — for a sunrise over Lake Natron and the Great Rift Valley. A rare blend of safari, culture and real adventure.",
    highlights: [
      "Tarangire's elephant herds and the Serengeti's endless plains",
      "Full game drive on the floor of the Ngorongoro Crater",
      "Midnight summit of Ol Doinyo Lengai (2,962 m) for sunrise",
      "Lake Natron, flamingos and the Great Rift Valley",
      "Maasai mountain guides on the 'Mountain of God'",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description:
          "Drive from Arusha to Tarangire for a full-day game drive among giant baobabs and large elephant herds, with lions, giraffe, zebra and 500+ bird species. Picnic lunch in the park, then dinner and overnight at your lodge or camp.",
        meals: "Lunch, dinner",
        accommodation: "Budget, mid-range or luxury lodge near Tarangire",
      },
      {
        day: 2,
        title: "Ngorongoro Highlands to the Serengeti",
        description:
          "Drive to the Serengeti via the Ngorongoro Highlands with scenic crater viewpoints, then a game drive across the endless plains — lions, cheetahs, leopards, elephants and thousands of grazers. Dinner under a sky full of stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Camp or lodge, Serengeti",
      },
      {
        day: 3,
        title: "Serengeti to Lake Natron",
        description:
          "An early game drive when predators are active, then journey toward the remote Lake Natron region through Maasai territory and dramatic volcanic scenery. Check in, an evening briefing for the climb, an early dinner and a few hours' rest before the ~11 PM start.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or camp, Lake Natron",
      },
      {
        day: 4,
        title: "Ol Doinyo Lengai Summit to Ngorongoro",
        description:
          "Shortly after midnight, climb Ol Doinyo Lengai with experienced Maasai guides — a steep 4–7 hour ascent under the stars to reach the summit for sunrise over Lake Natron, the Rift Valley, Mount Meru and, on clear mornings, Kilimanjaro. Descend for brunch, then drive to the Ngorongoro area for dinner and overnight.",
        altitudeStart: 1000,
        altitudeEnd: 2962,
        hours: "4–7 hours up",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or camp near Ngorongoro",
      },
      {
        day: 5,
        title: "Ngorongoro Crater to Arusha",
        description:
          "An early descent 600 m into the Ngorongoro Crater — 'Africa's Garden of Eden' — for a chance at the Big Five in a single morning, plus hippo, flamingo and hyena, with a picnic lunch by the hippo pool. Return to Arusha in the afternoon.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Private 4x4 safari vehicle with pop-up roof and a driver-guide",
      "Local Maasai mountain guide and Ol Doinyo Lengai climbing arrangements",
      "Accommodation (budget, mid-range or luxury) and all meals on safari",
      "All park entry, Ngorongoro Crater and conservation fees",
      "Lake Natron activities and drinking water on safari",
      "Government taxes",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended; trekking cover advised)",
      "Local village climbing fee (~$70–100pp) and TAWA fee (~$20pp)",
      "Tips, alcoholic drinks and personal expenses",
    ],
    faqs: [
      {
        question: "How hard is the Ol Doinyo Lengai climb?",
        answer:
          "It's challenging — a steep midnight ascent of about 1,600 m over a short distance to 2,962 m, taking 4–7 hours up. No technical climbing, but a real test of fitness and willpower. Experienced Maasai guides set the pace.",
      },
      {
        question: "Why climb at midnight?",
        answer:
          "To reach the summit for sunrise and to avoid the fierce daytime heat of the Lake Natron basin, which can be extreme. You'll be back at the lodge by early afternoon to rest.",
      },
      {
        question: "Can I do the volcano without the safari?",
        answer:
          "Yes — we also run 2-day, 3-day and 7-day Ol Doinyo Lengai trekking trips focused on the volcano and Lake Natron. See the Trekking section or ask Ombeni.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "7-day-kilimanjaro-hike-safari",
    destinations: ["Kilimanjaro", "Arusha", "Tarangire", "Serengeti", "Ngorongoro"],
    category: "safari",
    title: "7-Day Kilimanjaro Hike + Northern Circuit Safari + Maasai Culture",
    shortName: "7-Day Hike & Safari",
    days: 7,
    priceFromUSD: 2210,
    priceNote:
      "Per person, sharing, mid-range, all-inclusive. Trek, safari and culture in one trip.",
    tier: ["mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "Three experiences in one unforgettable week: a two-day taste of Kilimanjaro on the Marangu Route (to Horombo Hut, no summit pressure), four days of safari in Tarangire, the Serengeti and the Ngorongoro Crater, and a Maasai village visit to finish. Mountain, wildlife and culture — ideal for travellers who want it all without a full summit climb.",
    highlights: [
      "Two days hiking Kilimanjaro's Marangu Route to Horombo Hut (3,720 m)",
      "Tarangire's elephants and a full day in the Serengeti",
      "Game drive on the floor of the Ngorongoro Crater",
      "Maasai village cultural visit",
      "A trek, a safari and culture in a single week",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Moshi / Arusha",
        description:
          "Welcomed at Kilimanjaro International Airport and transferred to your hotel at the foot of Kilimanjaro. A welcome dinner and a briefing on the days ahead.",
        meals: "Dinner",
        accommodation: "Hotel, Moshi or Arusha",
      },
      {
        day: 2,
        title: "Marangu Gate to Mandara Hut",
        description:
          "Drive to Marangu Gate, register, and hike through Kilimanjaro's lush rainforest to Mandara Hut (2,700 m), with a short walk to the Maundi Crater for sweeping views.",
        altitudeStart: 1870,
        altitudeEnd: 2700,
        hours: "4–5 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mandara Hut (mountain hut)",
      },
      {
        day: 3,
        title: "Mandara to Horombo Hut & back to Arusha",
        description:
          "Trek through heath and moorland to Horombo Hut (3,720 m) for views of Mawenzi and Kibo, then descend to Marangu Gate and transfer to Arusha for a hot shower and a comfortable lodge.",
        altitudeStart: 2700,
        altitudeEnd: 3720,
        hours: "6–7 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge, Arusha",
      },
      {
        day: 4,
        title: "Safari Begins — Tarangire National Park",
        description:
          "Drive to Tarangire for a full-day game drive among massive elephant herds and ancient baobabs, with lions, zebra and abundant birdlife, and a scenic picnic lunch.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp or lodge near Tarangire",
      },
      {
        day: 5,
        title: "Full Day in the Serengeti",
        description:
          "A sunrise game drive and full day across the Serengeti plains — predators, plains game and, in season, the Great Migration — finishing with a campfire evening under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp, Serengeti",
      },
      {
        day: 6,
        title: "Serengeti to the Ngorongoro Crater",
        description:
          "A final Serengeti morning drive en route to Ngorongoro, descending into the crater for a picnic lunch by the hippo pool and game viewing among the Big Five. Overnight at a lodge on the crater rim.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Ngorongoro crater rim",
      },
      {
        day: 7,
        title: "Maasai Village & Departure",
        description:
          "A morning Maasai village visit to learn about their customs and way of life, then transfer to Arusha with an optional lunch and souvenir stop before your departure flight.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Six nights in mid-range lodges, camps and a Kilimanjaro mountain hut",
      "All meals from dinner on Day 1 to breakfast on Day 7",
      "Kilimanjaro hiking fees, permits and hut stay",
      "Game drives in a 4x4 with a professional guide; all park and crater fees",
      "Maasai village cultural visit",
      "All airport transfers and transport between parks",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended; trekking cover advised)",
      "Optional hot air balloon safari ($500 per person)",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "Do we summit Kilimanjaro on this trip?",
        answer:
          "No — the Kilimanjaro portion is a two-day hike to Horombo Hut (3,720 m), a real taste of the mountain without the summit commitment. For Uhuru Peak, see our full 6–9 day Kilimanjaro climbs.",
      },
      {
        question: "Who is this trip best for?",
        answer:
          "Travellers who want variety in one week — a mountain hike, the headline safari parks and authentic Maasai culture — without dedicating the whole trip to a summit climb.",
      },
      {
        question: "Can it be upgraded or extended?",
        answer:
          "Yes — upgrade lodges, add a balloon safari, extend the Serengeti, or finish on a Zanzibar beach. Ombeni will tailor it on WhatsApp.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl:
      "/booking/7-day-safari-adventure-marangu-route-hike-northern-circuit-safari-maasai-cultural-experience-northern-circuit/",
  },

  // ─────────────────────────────────────────────────────────────────
  // HONEYMOON & ROMANCE — themed safaris/combos (tag: "honeymoon").
  // Surfaced together on /honeymoon; each keeps its safari detail route.
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "7-day-ultimate-honeymoon",
    destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
    category: "safari",
    tags: ["honeymoon"],
    title: "7-Day Ultimate Honeymoon – Safari & Zanzibar",
    shortName: "7-Day Honeymoon",
    days: 7,
    priceFromUSD: 0,
    priceNote: "Private luxury honeymoon — per-person pricing on request.",
    tier: ["comfort"],
    heroImage: "",
    gallery: [],
    summary:
      "A luxury honeymoon that blends adventure and romance: private game drives in Tarangire, the Ngorongoro Crater and the Serengeti — with a sunrise balloon flight and champagne breakfast — then a flight to a Zanzibar beach resort for sunset dhow cruises and couples' spa days. Candlelit bush dinners, special honeymoon touches and handpicked lodges throughout.",
    highlights: [
      "Private game drives with romantic sundowners and bush dinners",
      "Sunrise hot air balloon safari over the Serengeti with champagne",
      "Couples' spa treatments and candlelit dinners",
      "Luxury Zanzibar beach resort with a sunset dhow cruise",
      "VIP welcome and personalised honeymoon surprises",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "A VIP welcome at Kilimanjaro International Airport and a private transfer to your lodge in Arusha. A romantic dinner under the stars with a special honeymoon setup.",
        meals: "Dinner",
        accommodation: "Luxury lodge, Arusha (Arusha Coffee Lodge or similar)",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "Private transfer to Tarangire for an exclusive game drive focused on its great elephant herds, with a gourmet picnic lunch. Sundowners over the baobab-studded landscape, then a private candlelit dinner at camp.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Luxury tented camp near Tarangire",
      },
      {
        day: 3,
        title: "Ngorongoro Crater",
        description:
          "A scenic drive to Ngorongoro with a Maasai village visit en route, then a private game drive on the crater floor among the Big Five. Unwind with a couples' spa treatment and dinner overlooking the crater.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Ngorongoro rim",
      },
      {
        day: 4,
        title: "Fly to the Serengeti",
        description:
          "Fly to the Serengeti for a private game drive focused on the Great Migration or the Big Five, a luxury bush picnic, and a romantic sundowner followed by a private bush dinner under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Luxury lodge or tented camp, Serengeti",
      },
      {
        day: 5,
        title: "Serengeti — Balloon Safari",
        description:
          "An early hot air balloon safari over the Serengeti with a champagne breakfast on landing, then more private game viewing for lions and cheetahs. A private dinner on your terrace or a couples' massage to end the day.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Luxury lodge or tented camp, Serengeti",
      },
      {
        day: 6,
        title: "Fly to Zanzibar — Beach Escape",
        description:
          "Fly to Zanzibar and transfer to a luxury beachfront resort. A private beach lunch and time to swim in the turquoise water, then a sunset dhow cruise with champagne and canapés and a romantic resort dinner.",
        meals: "Breakfast, dinner",
        accommodation: "Luxury beach resort, Zanzibar (The Residence or similar)",
      },
      {
        day: 7,
        title: "Zanzibar — Relaxation & Departure",
        description:
          "A leisurely breakfast and a final couples' spa treatment or water activities like snorkelling, then a private transfer to the airport for your departure flight.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Private transfers and internal flights (Serengeti, Zanzibar)",
      "Mid-range to luxury lodges and a Zanzibar beach resort",
      "Private 4x4 game drives with a professional guide",
      "Romantic touches — bush dinners, sundowners, honeymoon setups",
      "Park and conservation fees and meals as listed",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional balloon safari surcharge where applicable and add-ons",
      "Tips, drinks and items of a personal nature",
    ],
    faqs: [
      {
        question: "Can you arrange special honeymoon touches?",
        answer:
          "Yes — rose-petal decorations, private candlelit dinners, couples' massages, a sunset horseback ride on the beach and personalised gifts can all be arranged. Tell Ombeni it's your honeymoon and he'll set it up.",
      },
      {
        question: "Is the balloon safari included?",
        answer:
          "A sunrise balloon flight with champagne breakfast is part of the planned Serengeti experience; depending on the package tier it may carry a surcharge. We'll confirm when we quote.",
      },
      {
        question: "Can we adjust the safari/beach balance?",
        answer:
          "Absolutely — lengthen the Serengeti or the Zanzibar beach days, or upgrade lodges. It's a private trip built around you.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl: "/booking/7-days-in-paradise-with-trust-tours-and-safaris-company-your-ultimate-honeymoon-haven/",
  },

  {
    slug: "10-day-honeymoon-migration",
    destinations: ["Arusha", "Tarangire", "Lake Manyara", "Ngorongoro", "Serengeti"],
    category: "safari",
    tags: ["honeymoon"],
    title: "10-Day Honeymoon Safari – Tracking the Great Migration",
    shortName: "10-Day Honeymoon Migration",
    days: 10,
    priceFromUSD: 0,
    priceNote: "Private luxury honeymoon safari — per-person pricing on request.",
    tier: ["comfort"],
    heroImage: "/images/packages/10-day-honeymoon-migration.jpg",
    gallery: [],
    summary:
      "Celebrate your love in the heart of the Great Migration: ten days through Tarangire, Lake Manyara, the Ngorongoro Crater and deep into the Serengeti — central plains, big-cat country and the northern Mara crossings — with luxury tented camps, romantic sundowners, private bush dinners and a balloon safari. Intimate, unhurried and tailored to couples.",
    highlights: [
      "Follows the path of the Great Migration across the Serengeti",
      "Northern Serengeti Mara River crossings (season dependent)",
      "Sunrise balloon safari and champagne bush breakfast",
      "Couples' spa, private bush dinners and sundowners for two",
      "Luxury tented camps and lodges throughout",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport by your private guide and transferred to a serene lodge outside Arusha. A candlelit dinner and a toast to the start of your honeymoon.",
        meals: "Dinner",
        accommodation: "Luxury lodge, Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "Drive to Tarangire — towering baobabs and Tanzania's largest elephant concentration — tracking elephant, giraffe and big cats, with a romantic picnic over the Tarangire River and a sundowner just for two.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Romantic tented camp near Tarangire",
      },
      {
        day: 3,
        title: "Lake Manyara National Park",
        description:
          "A leisurely game drive in Lake Manyara — tree-climbing lions, flamingos and forested lakeshore — then unwind at a Rift Valley lodge with an optional couples' spa treatment.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge with lake or escarpment views",
      },
      {
        day: 4,
        title: "Ngorongoro Crater",
        description:
          "Descend into the Ngorongoro Crater for a game drive among the densest wildlife in Africa — black rhino, lion and hippo — with a gourmet picnic lunch and a sunset toast from a luxury lodge on the rim.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Luxury lodge on the crater rim",
      },
      {
        day: 5,
        title: "Into the Central Serengeti",
        description:
          "Travel through the Ngorongoro Highlands into the central Serengeti, with an afternoon game drive, then settle into a luxury tented camp where lanterns glow and the savannah sets a dreamy tone.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Luxury tented camp, central Serengeti",
      },
      {
        day: 6,
        title: "Full Day in the Serengeti",
        description:
          "A sunrise game drive for predators on the move, quiet time together at camp, then an afternoon among the Big Five and the great herds — capped by a private bush dinner under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Luxury tented camp, central Serengeti",
      },
      {
        day: 7,
        title: "Northern Serengeti — The Migration",
        description:
          "Journey north to track the Great Migration, with dramatic Mara River crossings in season as the herds brave the crocodile-filled waters. Overnight at a remote migration-hotspot camp.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Luxury migration camp, northern Serengeti",
      },
      {
        day: 8,
        title: "Serengeti Balloon Safari",
        description:
          "An early hot air balloon safari over the plains (optional) with a champagne bush breakfast, then game drives or romantic downtime at camp — a couples' massage or a private bush lunch in untouched nature.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Luxury camp, northern Serengeti",
      },
      {
        day: 9,
        title: "Fly Back to Arusha",
        description:
          "A final morning game drive, then a scenic bush flight back to Arusha and a relaxing afternoon at a charming lodge — time to reflect, shop for souvenirs and enjoy a celebratory dinner.",
        meals: "Breakfast, dinner",
        accommodation: "Boutique lodge, Arusha",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "A leisurely breakfast and, time permitting, a craft market or coffee-estate visit before your private transfer to Kilimanjaro International Airport.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All ground transfers and domestic flights",
      "Private 4x4 safari vehicle with pop-up roof and a professional guide",
      "Mid- to high-end lodges and luxury tented camps",
      "Park and conservation fees and all meals as listed",
      "Romantic bush dinners, sundowners and special honeymoon touches",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional balloon safari surcharge and personal expenses",
      "Tips and gratuities for guides and staff",
    ],
    faqs: [
      {
        question: "When are the Mara River crossings?",
        answer:
          "Typically July–October in the northern Serengeti. Timing shifts with the rains, so tell Ombeni your dates and he'll place your northern nights for the best chance of a crossing.",
      },
      {
        question: "How private is this honeymoon?",
        answer:
          "Fully private — your own vehicle, guide and tailored pace, with intimate experiences like private bush dinners and sundowners for two throughout.",
      },
      {
        question: "Can we add Zanzibar at the end?",
        answer:
          "Yes — many couples finish on the beach. We'll add the flights and resort and book it as one trip. Just ask.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl: "/booking/tanzania-honeymoon-safari-tracking-the-great-migration/",
  },

  {
    slug: "20-day-honeymoon-tanzania-zanzibar",
    destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Lake Natron", "Zanzibar"],
    category: "safari",
    tags: ["honeymoon"],
    title: "20-Day Tanzania & Zanzibar Honeymoon Adventure",
    shortName: "20-Day Honeymoon",
    days: 20,
    priceFromUSD: 8750,
    priceNote:
      "Per person, sharing. From $8,750 mid-range / $14,450 luxury. Includes Flying Doctors evacuation cover.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/packages/20-day-honeymoon-tanzania-zanzibar.jpg",
    gallery: [],
    summary:
      "The ultimate once-in-a-lifetime honeymoon: ten days across Tanzania's wilderness — Arusha NP, Tarangire, the Ngorongoro Crater, the Serengeti migration and the surreal Lake Natron — then ten days unwinding on Zanzibar's beaches with Stone Town, spice farms, Jozani Forest and Mnemba snorkelling. Romance, adventure and island bliss, with mid-range or luxury options throughout.",
    highlights: [
      "Ten days of safari plus ten days on the Zanzibar coast",
      "Great Migration in the Serengeti and the Big Five in Ngorongoro",
      "Lake Natron's flamingos, waterfalls and volcanic scenery",
      "Stone Town, spice farm, Jozani Forest and Mnemba snorkelling",
      "Flying Doctors evacuation cover and handpicked romantic stays",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport and transferred to a romantic lodge in Arusha to relax among lush gardens before the adventure begins.",
        meals: "Dinner",
        accommodation: "Mid-range or luxury hotel, Arusha",
      },
      {
        day: 2,
        title: "Arusha National Park — Walking Safari",
        description:
          "Ease in with a guided walking safari in Arusha National Park — giraffe, zebra and monkeys — an optional canoe on Momella Lake and a picnic lunch in the wild.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury hotel, Arusha",
      },
      {
        day: 3,
        title: "Tarangire National Park",
        description:
          "A full-day game drive in Tarangire among huge elephant herds and baobabs, with lions, leopards and migratory birds, ending with a candlelit dinner under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury lodge near Tarangire",
      },
      {
        day: 4,
        title: "Mto wa Mbu Cultural Tour & Karatu",
        description:
          "A guided cultural tour of the multicultural village of Mto wa Mbu — local cuisine, banana farms and artisans — then on to the highland town of Karatu.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury lodge, Karatu",
      },
      {
        day: 5,
        title: "Ngorongoro Crater",
        description:
          "A full-day game drive on the Ngorongoro Crater floor — high chances of the Big Five in a single day — with a picnic lunch beside a hippo pool.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury lodge, Karatu",
      },
      {
        day: 6,
        title: "Drive to the Central Serengeti",
        description:
          "Travel into the Serengeti with game viewing en route and an evening game drive before settling into a romantic safari tent.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury tented camp, Serengeti",
      },
      {
        day: 7,
        title: "Serengeti — Track the Migration",
        description:
          "A full day across the central (and possibly northern) Serengeti following the Great Migration — epic herds, predator action and sunsets — with romantic bush lunches and private dinners.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury tented camp, Serengeti",
      },
      {
        day: 8,
        title: "Serengeti — Full Day Safari",
        description:
          "Another full day chasing the migration and the Big Five across the plains, your guide positioning you for the best wildlife and light.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury tented camp, Serengeti",
      },
      {
        day: 9,
        title: "Serengeti to Lake Natron",
        description:
          "Journey to the remote, surreal landscapes of Lake Natron — flamingos and volcanic scenery — with a guided walk to nearby waterfalls.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury camp, Lake Natron",
      },
      {
        day: 10,
        title: "Lake Natron to Arusha",
        description:
          "A scenic drive back to Arusha to rest, review your safari photos and prepare for the island half of your honeymoon.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury hotel, Arusha",
      },
      {
        day: 11,
        title: "Fly to Zanzibar",
        description:
          "A short flight to Zanzibar and a transfer to your east-coast resort for ocean views and swaying palms. (Zanzibar nights and some meals per the package tier.)",
        meals: "Breakfast, dinner",
        accommodation: "Mid-range or luxury beach resort, Zanzibar",
      },
      {
        day: 12,
        title: "Stone Town & Sunset Dhow Cruise",
        description:
          "A private guided tour of historic Stone Town — markets, landmarks and ancient alleys — then a romantic sunset dhow cruise on the Indian Ocean.",
        meals: "Breakfast, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 13,
        title: "Spice Farm & Jozani Forest",
        description:
          "Visit a Zanzibar spice farm to taste the island's famous spices, then Jozani Forest to see the rare red colobus monkeys in their natural habitat.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 14,
        title: "Beach Relaxation",
        description:
          "A day at leisure on white-sand beaches — swim, snorkel or paddleboard — with an optional beach massage and a private dinner on the sand.",
        meals: "Breakfast, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 15,
        title: "Mnemba Island Snorkelling",
        description:
          "A boat trip to the Mnemba Atoll for world-class snorkelling among coral reefs and tropical fish, with a seafood lunch aboard or on a secluded beach.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 16,
        title: "Leisure by the Ocean",
        description:
          "A free day for honeymoon pampering or optional diving, kite surfing or a fishing-village visit — at the pace you like.",
        meals: "Breakfast, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 17,
        title: "Leisure by the Ocean",
        description:
          "More time to relax and enjoy the tranquillity and beauty of your resort and the Indian Ocean.",
        meals: "Breakfast, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 18,
        title: "Leisure by the Ocean",
        description:
          "A final full beach day — spa, water sports or simply soaking up paradise together.",
        meals: "Breakfast, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 19,
        title: "Farewell Dinner & Cultural Drumming",
        description:
          "On your final night, a romantic candlelit dinner followed by a live cultural drumming performance — a last toast in paradise.",
        meals: "Breakfast, dinner",
        accommodation: "Beach resort, Zanzibar",
      },
      {
        day: 20,
        title: "Departure",
        description:
          "After breakfast, a transfer to Zanzibar International Airport for your flight home, carrying memories of an unforgettable honeymoon.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All airport transfers in Tanzania and Zanzibar, plus the Arusha–Zanzibar flight",
      "Private 4x4 Land Cruiser with pop-up roof and an English-speaking guide",
      "All park entry and conservation fees",
      "Accommodation as listed (mid-range or luxury) and meals as specified",
      "All cultural tours, walking safari, dhow cruise and excursions mentioned",
      "Flying Doctors emergency medical evacuation cover",
    ],
    excluded: [
      "International flights and Tanzania visa ($50pp)",
      "Travel and health insurance",
      "Optional balloon safari in the Serengeti ($590pp)",
      "Alcoholic drinks, gratuities and personal expenses",
    ],
    faqs: [
      {
        question: "Is 20 days too long?",
        answer:
          "It's designed as a complete honeymoon — ten days of safari and ten days of beach, with rest days built in so it never feels rushed. We can shorten either half if you prefer; just ask Ombeni.",
      },
      {
        question: "What's the difference between mid-range and luxury?",
        answer:
          "The route and private guiding are the same; the difference is the lodges, camps and resorts. Mid-range is from $8,750pp and luxury from $14,450pp at premium properties.",
      },
      {
        question: "Are honeymoon extras included?",
        answer:
          "Romantic touches like candlelit dinners and a farewell drumming night are built in; spa treatments and some beach extras are arranged on request. Tell us it's your honeymoon and we'll make it special.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl: "/booking/20-day-tanzania-zanzibar-honeymoon-safari-adventure/",
  },

  {
    slug: "7-day-zanzibar-honeymoon",
    destinations: ["Zanzibar"],
    category: "zanzibar",
    tags: ["honeymoon"],
    title: "7-Day Zanzibar Honeymoon – Beaches, Spice & Romance",
    shortName: "7-Day Zanzibar Honeymoon",
    days: 7,
    priceFromUSD: 0,
    priceNote: "Mid-range Zanzibar honeymoon — per-person pricing on request.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/packages/7-day-zanzibar-honeymoon.jpg",
    gallery: [],
    summary:
      "A romantic week on the Spice Island, blending relaxation, adventure and culture: white-sand beaches and turquoise water, historic Stone Town, a spice tour, the Nakupenda sandbank, Jozani Forest, Mnemba snorkelling and couples' spa days. Carefully paced for newlyweds, with optional sunset dhow cruises and beach dinners.",
    highlights: [
      "Stone Town tour and a Zanzibar spice farm",
      "Nakupenda sandbank with a seafood BBQ",
      "Jozani Forest red colobus monkeys and lunch at The Rock",
      "Mnemba Island snorkelling with dolphins",
      "Couples' spa day and romantic beachside dinners",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zanzibar",
        description:
          "Met at Abeid Amani Karume International Airport and transferred to your mid-range beachfront hotel. Relax on the beach and enjoy a welcome dinner.",
        meals: "Dinner",
        accommodation: "Beachfront hotel, Zanzibar",
      },
      {
        day: 2,
        title: "Stone Town & Spice Tour",
        description:
          "A guided tour of historic Stone Town — architecture, markets and culture — then a spice farm to taste and learn about Zanzibar's famous spices, with dinner at a local restaurant.",
        meals: "Breakfast, dinner",
        accommodation: "Hotel, Stone Town",
      },
      {
        day: 3,
        title: "Nakupenda Beach Excursion",
        description:
          "A full-day trip to the Nakupenda sandbank near Stone Town for snorkelling, swimming and a seafood BBQ lunch, then back to relax at your hotel.",
        meals: "Breakfast, lunch",
        accommodation: "Hotel, Stone Town",
      },
      {
        day: 4,
        title: "Jozani Forest & The Rock",
        description:
          "Visit Jozani Forest to see the rare red colobus monkeys and mangrove boardwalks, then a memorable lunch at The Rock Restaurant, perched on a rock in the ocean. Transfer to a beachfront resort.",
        meals: "Breakfast, lunch",
        accommodation: "Beachfront resort, Zanzibar",
      },
      {
        day: 5,
        title: "Mnemba Island & Water Activities",
        description:
          "An excursion to Mnemba Island for snorkelling in crystal-clear water with a chance of dolphins, then beach time or water sports like kayaking and paddleboarding, and a fresh seafood dinner.",
        meals: "Breakfast, dinner",
        accommodation: "Beachfront resort, Zanzibar",
      },
      {
        day: 6,
        title: "Relaxation Day",
        description:
          "A relaxed day with an optional couples' spa treatment, a stroll to nearby markets, or simply unwinding by the beach, ending with a romantic beachside dinner.",
        meals: "Breakfast, dinner",
        accommodation: "Beachfront resort, Zanzibar",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "A leisurely breakfast and a final walk on the beach before your private transfer to the airport for departure.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Private airport and activity transfers",
      "6 nights' mid-range beachfront and Stone Town accommodation",
      "Daily breakfast plus meals as specified",
      "Stone Town and spice tours, Nakupenda, Jozani and Mnemba excursions",
      "Professional English-speaking local guides",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional add-ons (sunset dhow cruise, horse riding, village tour)",
      "Tips, drinks and items of a personal nature",
    ],
    faqs: [
      {
        question: "Is this a good standalone honeymoon?",
        answer:
          "Yes — it's a complete week of beach, culture and romance on Zanzibar. Many couples also pair it with a few safari days beforehand; we can add those and the flights as one trip.",
      },
      {
        question: "Can you arrange romantic extras?",
        answer:
          "Of course — sunset dhow cruises, private beach dinners, couples' spa treatments and honeymoon room setups. Tell Ombeni it's your honeymoon when booking.",
      },
      {
        question: "When is the best time to visit Zanzibar?",
        answer:
          "June–October and December–February are the driest, sunniest months. The long rains (April–May) are quieter and greener but wetter.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "9-day-honeymoon-northern",
    destinations: ["Arusha", "Tarangire", "Lake Manyara", "Ngorongoro", "Serengeti"],
    category: "safari",
    tags: ["honeymoon"],
    title: "9-Day Honeymoon Safari – Northern Tanzania",
    shortName: "9-Day Honeymoon Safari",
    days: 9,
    priceFromUSD: 0,
    priceNote: "Private mid-range honeymoon safari — per-person pricing on request.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
    gallery: [],
    summary:
      "A romantic nine-day safari through northern Tanzania for couples: Tarangire, Lake Manyara, the Ngorongoro Crater and three days in the Serengeti — central plains, big cats and the northern Mara — with candlelit dinners, sundowners for two and a Maasai-highlands finale. Intimate lodges and a private vehicle throughout.",
    highlights: [
      "Three days in the Serengeti, including the northern Mara",
      "Full game drive in the Ngorongoro Crater — black rhino country",
      "Lake Manyara's tree-climbing lions and flamingos",
      "Candlelit bush dinners and sundowners for two",
      "Maasai village visit in the Ngorongoro Highlands",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "A warm welcome at Kilimanjaro International Airport and transfer to a charming lodge in Arusha. A romantic dinner and a safari briefing, with a toast to your new journey together.",
        meals: "Dinner",
        accommodation: "Mid-range lodge, Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "A morning and afternoon game drive in Tarangire among large elephant herds and ancient baobabs, with a picnic lunch and a private dinner under the stars by the campfire.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp near Tarangire",
      },
      {
        day: 3,
        title: "Lake Manyara National Park",
        description:
          "A lakeside game drive for hippos, flamingos and tree-climbing lions, the groundwater forest for elephants and baboons, then a romantic sunset dinner at a Rift Valley escarpment lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Rift Valley escarpment",
      },
      {
        day: 4,
        title: "Ngorongoro Crater",
        description:
          "Descend into the crater — the 'Garden of Eden' — for the Big Five including elusive black rhino, with a picnic lunch at the hippo pool, then a private dinner at a romantic lodge on the crater rim.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Ngorongoro rim",
      },
      {
        day: 5,
        title: "Central Serengeti — Seronera",
        description:
          "Journey into the Serengeti and the Seronera Valley, famed for big cats, with an afternoon game drive and a candlelit dinner under a dazzling, unpolluted night sky.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp, central Serengeti",
      },
      {
        day: 6,
        title: "Full Day in the Serengeti",
        description:
          "A sunrise game drive for predators in action, quiet time together, then a full day exploring the plains — and, in season, the Great Migration — with a private dinner to follow.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp, central Serengeti",
      },
      {
        day: 7,
        title: "Northern Serengeti — The Mara",
        description:
          "Head to the remote northern Serengeti, famous for the dramatic Mara River crossings in season, with a picnic in the wilderness and a fireside evening at a remote camp.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range camp, northern Serengeti",
      },
      {
        day: 8,
        title: "Serengeti to the Ngorongoro Highlands",
        description:
          "A final Serengeti game drive, then the scenic drive into the cooler highlands, with an optional nature walk or Maasai village visit and a romantic dinner in the peaceful highland air.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Ngorongoro Highlands",
      },
      {
        day: 9,
        title: "Departure",
        description:
          "A leisurely breakfast and free time, then a transfer back to Arusha for a farewell lunch before your departure flight.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Eight nights in mid-range lodges and romantic tented camps",
      "All meals from dinner on Day 1, with private dining and picnic lunches",
      "Daily game drives in a private 4x4 with a professional guide",
      "All park and Ngorongoro Crater fees",
      "Guided bush walks, Maasai village visit and sundowners",
      "All airport transfers and transport between parks",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional balloon safari and personal expenses",
      "Tips and gratuities for guides and staff",
    ],
    faqs: [
      {
        question: "How romantic is this safari really?",
        answer:
          "It's built for couples — private vehicle and guide, intimate camps, candlelit and private bush dinners, and sundowners for two. Tell Ombeni it's your honeymoon and he'll add special touches.",
      },
      {
        question: "Will we see the migration?",
        answer:
          "In season, yes — northern Mara crossings around July–October, the calving plains December–March. The Serengeti and Ngorongoro hold abundant wildlife year-round.",
      },
      {
        question: "Can we finish on the beach?",
        answer:
          "Absolutely — add a Zanzibar stay and we'll arrange the flights and book it as one honeymoon.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "13-day-romance-honeymoon",
    seoTitle: "Tanzania Honeymoon Safari, 13 Days — $5,646",
    metaDescription:
      "Private safari and Zanzibar beaches for two — 13 days of romance. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $5,646 pp, book direct.",
    destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
    category: "safari",
    tags: ["honeymoon"],
    title: "13-Day Romance Honeymoon – Safari & Zanzibar",
    shortName: "13-Day Romance Honeymoon",
    days: 13,
    priceFromUSD: 5646,
    priceNote:
      "Per person, all-inclusive. From $5,646 (tented camps) / $6,599 (luxury lodges). Includes the Serengeti–Zanzibar flight.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/packages/13-day-romance-honeymoon.jpg",
    gallery: [],
    summary:
      "The 'Days of Romance' honeymoon: eight days of safari — Arusha NP, Tarangire, the Ngorongoro Crater and three days in the Serengeti among the Great Migration and Big Five — then five days on Zanzibar with Stone Town, a spice tour, Prison Island tortoises and swimming with dolphins. The perfect balance of adventure and beachfront bliss.",
    highlights: [
      "Three days in the Serengeti for the Great Migration and Big Five",
      "Arusha NP, Tarangire and a full day in the Ngorongoro Crater",
      "Optional sunrise balloon safari over the Serengeti",
      "Zanzibar: Stone Town, spice tour and Prison Island tortoises",
      "Swim with dolphins and special honeymoon dinners",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport and transferred to your Arusha lodge to relax, with a safari briefing and a romantic welcome dinner.",
        meals: "Dinner",
        accommodation: "Lodge or hotel, Arusha",
      },
      {
        day: 2,
        title: "Arusha National Park",
        description:
          "A full-day game drive in Arusha National Park — Mount Meru views, the Momela Lakes and a waterfall — with a picnic lunch, then back to the lodge for the evening.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or hotel, Arusha",
      },
      {
        day: 3,
        title: "Arusha to Tarangire National Park",
        description:
          "Drive to Tarangire and check into a safari lodge, then an afternoon game drive among great elephant herds and baobabs, with sundowner drinks and a romantic dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Safari lodge near Tarangire",
      },
      {
        day: 4,
        title: "Tarangire to the Ngorongoro Crater Rim",
        description:
          "An early game drive in Tarangire, then the scenic drive to the Ngorongoro Conservation Area and a lodge on the crater rim, with an afternoon at leisure and a candlelit dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Ngorongoro rim",
      },
      {
        day: 5,
        title: "Ngorongoro Crater",
        description:
          "Descend into the crater for a full-day game drive with a picnic lunch among its dense wildlife and dramatic landscapes, then a relaxing evening and dinner on the rim.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge on the Ngorongoro rim",
      },
      {
        day: 6,
        title: "Ngorongoro to the Serengeti",
        description:
          "Drive to the Serengeti with an optional stop at Olduvai Gorge, check into a tented camp or lodge, and enjoy an afternoon game drive followed by a romantic dinner under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp or lodge, Serengeti",
      },
      {
        day: 7,
        title: "Serengeti — Balloon & Game Drives",
        description:
          "An optional sunrise hot air balloon safari, then full-day game drives across the plains, ending with a special honeymoon dinner in a private setting.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp or lodge, Serengeti",
      },
      {
        day: 8,
        title: "Full Day in the Serengeti",
        description:
          "Another full day of game drives across the savannah and a picnic lunch, with time to soak up the wilderness before a relaxed evening and dinner at the lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp or lodge, Serengeti",
      },
      {
        day: 9,
        title: "Serengeti to Zanzibar",
        description:
          "A morning game drive en route to the airstrip, then fly from the Serengeti to Zanzibar and transfer to a beachfront resort for an afternoon at leisure and a romantic sunset dinner on the beach.",
        meals: "Breakfast, dinner",
        accommodation: "Beachfront resort, Zanzibar",
      },
      {
        day: 10,
        title: "Zanzibar Beach Relaxation",
        description:
          "A full day at leisure — swim, relax by the pool, or take optional water activities like snorkelling, diving or a dhow cruise — with dinner at the resort.",
        meals: "Breakfast, dinner",
        accommodation: "Beachfront resort, Zanzibar",
      },
      {
        day: 11,
        title: "Stone Town & Spice Tour",
        description:
          "A guided tour of UNESCO-listed Stone Town and an aromatic spice tour into Zanzibar's history of the spice trade, then back to the resort for dinner.",
        meals: "Breakfast, dinner",
        accommodation: "Beachfront resort, Zanzibar",
      },
      {
        day: 12,
        title: "Prison Island & Swimming with Dolphins",
        description:
          "A boat trip to Prison Island for the giant tortoises and snorkelling, then a dolphin excursion with the chance to swim alongside them, and a final romantic dinner at the resort.",
        meals: "Breakfast, dinner",
        accommodation: "Beachfront resort, Zanzibar",
      },
      {
        day: 13,
        title: "Departure",
        description:
          "A leisurely breakfast and a relaxed morning — beach or spa — before your transfer to Zanzibar International Airport for departure.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Private transfers and transport in a 4x4 safari vehicle",
      "Professional English-speaking driver/guide",
      "Accommodation in lodges, tented camps and beachfront resorts",
      "All meals as specified and park entry fees",
      "Flight from the Serengeti to Zanzibar",
      "Romantic dinners, honeymoon arrangements and Zanzibar guided tours",
    ],
    excluded: [
      "International flights to and from Tanzania",
      "Travel insurance (recommended for all travellers)",
      "Optional balloon safari ($550 per person)",
      "Tips, drinks, souvenirs and personal expenses",
    ],
    faqs: [
      {
        question: "Why is it called 'Days of Romance'?",
        answer:
          "It's Ombeni's signature honeymoon — a balanced blend of safari adventure and Zanzibar beach time with romantic touches throughout. The day-by-day runs to 13 days including travel and departure.",
      },
      {
        question: "What's the difference between the two price tiers?",
        answer:
          "The route is the same; the difference is accommodation. From $5,646pp uses comfortable tented camps; from $6,599pp uses luxury lodges and resorts.",
      },
      {
        question: "Is the balloon safari included?",
        answer:
          "It's optional at $550 per person on the Serengeti day. Let Ombeni know if you'd like it added.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  // ─────────────────────────────────────────────────────────────────
  // ZANZIBAR — standalone beach escapes (Wave 2, from Ombeni's PDFs).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "4-day-zanzibar-escape",
    destinations: ["Zanzibar"],
    category: "zanzibar",
    tags: ["honeymoon"],
    title: "4-Day Zanzibar Escape – Stone Town, Mnemba & Sea Turtles",
    shortName: "4-Day Zanzibar",
    days: 4,
    priceFromUSD: 1708,
    priceNote:
      "Per person, sharing. From $1,708 mid-range / $2,204 luxury beachfront. Includes a one-way flight to Zanzibar.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/packages/4-day-zanzibar-escape.jpg",
    gallery: [],
    summary:
      "A short, romantic taste of the Spice Island: historic Stone Town and a sunset dhow cruise, an aromatic spice tour and the Nakupenda sandbank, the coral reefs and dolphins of Mnemba Island, and a morning with green sea turtles at Baraka. Four days designed for honeymooners and anyone wanting a quick island getaway or a post-safari unwind.",
    highlights: [
      "Guided Stone Town tour and a romantic sunset dhow cruise",
      "Spice farm tour — see, smell and taste the Spice Island",
      "Nakupenda sandbank with a fresh seafood lunch on the beach",
      "Mnemba Island snorkelling, dolphins and a Blue Safari excursion",
      "Swim with green sea turtles at the Baraka Natural Aquarium",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Stone Town",
        description:
          "Arrive in Zanzibar and transfer to your hotel in the heart of Stone Town. Explore the UNESCO-listed old town — the House of Wonders, the Sultan's Palace, the Old Fort and the bustling Darajani Market — then board a sunset dhow cruise along the coast with cocktails, before a traditional Swahili dinner at a local restaurant.",
        meals: "Dinner",
        accommodation: "Top-quality hotel, Stone Town",
      },
      {
        day: 2,
        title: "Spice Tour & Nakupenda Beach",
        description:
          "A morning spice farm tour to discover why Zanzibar is the 'Spice Island' — cinnamon, cloves and nutmeg straight from the plant. Then head to Nakupenda, a stunning sandbank, for swimming, snorkelling over the reefs and a fresh seafood lunch on the sand. Return for an evening at leisure or an optional spa treatment.",
        meals: "Breakfast, lunch",
        accommodation: "Beachfront resort",
      },
      {
        day: 3,
        title: "Mnemba Island & Blue Safari",
        description:
          "An early transfer to the north coast to boat out to Mnemba Island, ringed by pristine coral reefs, to snorkel among vibrant fish and look for dolphins. In the afternoon, a Blue Safari among remote sandbanks with a beach barbecue and shallow waters full of starfish. Return for a private dinner, with the option to dine under the stars on the beach.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Beachfront resort",
      },
      {
        day: 4,
        title: "Sea Turtles & Departure",
        description:
          "Visit the Baraka Natural Aquarium to feed and swim alongside endangered green sea turtles in a natural lagoon. Time to relax or take a final stroll through Stone Town's galleries and shops, then your airport transfer for departure.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "One-way flight to Zanzibar plus private airport and activity transfers",
      "3 nights in mid-range or luxury beachfront accommodation",
      "Daily breakfast plus 2 lunches and 3 dinners (welcome and farewell dinners included)",
      "Stone Town and spice tour, Nakupenda sandbank, Mnemba snorkelling and Blue Safari",
      "Baraka sea-turtle visit and a sunset dhow cruise",
      "Professional, English-speaking local guides",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional activities not mentioned in the itinerary",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "Is the 4-Day Zanzibar good for a honeymoon?",
        answer:
          "Yes — it's built as a honeymoon and getaway trip, with a luxury beachfront option, a sunset dhow cruise and private ocean-side dinners. Tell Ombeni it's a special occasion and he'll arrange the extra touches.",
      },
      {
        question: "How is this different from the 5-Day Zanzibar?",
        answer:
          "The 4-day is the shorter version (3 nights) and a great quick escape or post-safari unwind. The 5-day adds an extra night and more relaxed beach time. Both cover Stone Town, the spice tour, Mnemba and the sea turtles.",
      },
      {
        question: "Can I add this to a safari or Kilimanjaro climb?",
        answer:
          "Absolutely. Many travellers finish a climb or safari with a few days on the beach — we arrange the connecting flights and book it all as one trip.",
      },
      {
        question: "When is the best time to visit Zanzibar?",
        answer:
          "June to October and December to February are the driest, sunniest months. The long rains (April–May) are quieter and greener but wetter.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "5-day-zanzibar-escape",
    destinations: ["Zanzibar"],
    category: "zanzibar",
    tags: ["honeymoon"],
    title: "5-Day Zanzibar Beach & Culture Escape",
    shortName: "5-Day Zanzibar",
    days: 5,
    priceFromUSD: 1708,
    priceNote:
      "Per person, sharing. From $1,708 mid-range / $2,804 luxury beachfront.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/packages/5-day-zanzibar-escape.jpg",
    gallery: [],
    summary:
      "Five days of the best of the Spice Island: historic Stone Town, an aromatic spice tour, the coral reefs of Mnemba Island and the white sandbank of Nakupenda. A relaxed blend of culture, ocean adventure and beach time — ideal as a standalone trip or a post-safari unwind.",
    highlights: [
      "Guided Stone Town tour and sunset dhow cruise",
      "Spice farm tour — see, smell and taste the Spice Island",
      "Mnemba Island snorkelling and a Blue Safari sandbank trip",
      "Seafood lunch on Nakupenda Beach",
      "Mid-range or luxury beachfront accommodation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Stone Town",
        description:
          "Arrive in Zanzibar and transfer to your Stone Town hotel. Explore the UNESCO-listed old town — House of Wonders, Sultan's Palace, Old Fort and Darajani Market — then a sunset dhow cruise and a traditional Swahili dinner.",
        meals: "Dinner",
        accommodation: "Top-quality hotel, Stone Town",
      },
      {
        day: 2,
        title: "Spice Tour & Nakupenda Beach",
        description:
          "A morning spice farm tour to discover why Zanzibar is the 'Spice Island', then to Nakupenda — a stunning sandbank — for swimming, snorkelling and a fresh seafood lunch on the beach.",
        meals: "Breakfast, lunch",
        accommodation: "Beachfront resort",
      },
      {
        day: 3,
        title: "Mnemba Island & Blue Safari",
        description:
          "Boat out to Mnemba Island to snorkel pristine coral reefs and look for dolphins, then a Blue Safari among remote sandbanks with a beach barbecue. Return for a private dinner by the ocean.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Beachfront resort",
      },
      {
        day: 4,
        title: "Sea Turtles & Leisure",
        description:
          "Visit the Baraka Natural Aquarium to meet and swim alongside endangered green sea turtles in a natural lagoon, then time at leisure — beach, Stone Town galleries or last-minute shopping.",
        meals: "Breakfast",
        accommodation: "Beachfront resort",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "A final morning at leisure on the beach before your airport transfer. If time allows, an optional short cultural village tour can be arranged before you depart.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Airport transfers and private activity transfers",
      "4 nights in mid-range or luxury beachfront accommodation",
      "Daily breakfast plus selected lunches and dinners",
      "Stone Town and spice tour, Nakupenda sandbank, Mnemba snorkelling",
      "Professional, English-speaking local guides",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional activities not mentioned in the itinerary",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "Is the 5-Day Zanzibar good as a honeymoon?",
        answer:
          "Yes — it's a popular honeymoon and getaway choice, with a luxury beachfront option, sunset dhow cruise and private ocean-side dinners. Tell Ombeni it's a special occasion and he'll arrange the details.",
      },
      {
        question: "Can I add Zanzibar to a safari or Kilimanjaro climb?",
        answer:
          "Absolutely. Many travellers finish a climb or safari with a few days on the beach. We arrange the connecting flights and book it all as one trip.",
      },
      {
        question: "When is the best time to visit Zanzibar?",
        answer:
          "June to October and December to February are the driest, sunniest months. The long rains (April–May) are quieter and greener but wetter.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  // ─────────────────────────────────────────────────────────────────
  // SAFARIS — short & mid-length northern circuit (Wave 2, from PDFs).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "2-day-tarangire-ngorongoro",
    destinations: ["Tarangire", "Ngorongoro"],
    category: "safari",
    title: "2-Day Tanzania Safari – Tarangire & Ngorongoro Crater",
    shortName: "2-Day Safari",
    days: 2,
    priceFromUSD: 576,
    priceNote:
      "Per person, sharing, mid-range lodge, group of 2+. Final price depends on group size and season.",
    tier: ["mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "The quickest way to see two of northern Tanzania's finest parks: a full game-drive day among the baobabs and elephant herds of Tarangire, then a dawn descent onto the floor of the Ngorongoro Crater for the Big Five. A compact round-trip from Arusha — ideal if you're short on time or adding a safari to a beach stay or climb.",
    highlights: [
      "Two headline parks in a tight 2-day loop from Arusha",
      "Tarangire's giant baobabs and some of Africa's largest elephant herds",
      "Full game drive on the floor of the Ngorongoro Crater",
      "Picnic lunch beside the crater's hippo pool",
      "Maasai village visit and a private 4x4 with pop-up roof",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description:
          "Morning pickup from your Arusha hotel around 8:30 and a drive to Tarangire with a picnic lunch for a full day of game viewing. Famous for its majestic baobabs and large elephant herds along the Tarangire River, the park also holds lion, leopard, cheetah, lesser kudu, buffalo, eland, giraffe and zebra. Dinner and overnight at your lodge or camp.",
        meals: "Lunch, dinner",
        accommodation: "Mid-range lodge or tented camp near Tarangire",
      },
      {
        day: 2,
        title: "Ngorongoro Crater, return to Arusha",
        description:
          "An early breakfast and a dawn descent (around 6:30) onto the crater floor — the world's largest intact volcanic caldera — for a roughly five-hour game drive among elephant, buffalo, black rhino, hippo, hyena, cheetah and lion. Picnic lunch at the hippo pool, then the climb out and the scenic drive back to Arusha, arriving by early evening.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "All transfers and transport in a 4x4 safari vehicle with pop-up roof",
      "One night's full-board mid-range lodge or tented-camp accommodation",
      "All national park entry and Ngorongoro Crater fees, plus government taxes and VAT",
      "Professional, English-speaking driver/guide",
      "Game drives, Maasai village visit and crater tour services",
      "Unlimited drinking water, medical kit, binoculars and helicopter rescue coordination",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Alcoholic and bottled drinks, laundry and SIM cards",
      "Tips for your guide and lodge staff",
      "Items of a personal nature",
    ],
    faqs: [
      {
        question: "Is two days enough for a safari?",
        answer:
          "It's the quickest way to experience two of the north's best parks, so it's perfect if you're short on time or pairing a safari with a beach stay or climb. If you'd like Serengeti time and the migration, step up to the 3-day or 5-day safari.",
      },
      {
        question: "What animals will I see?",
        answer:
          "In Tarangire: big elephant herds, baobabs, lion, leopard, cheetah, giraffe and zebra. In the Ngorongoro Crater: black rhino, lion, elephant, buffalo, hippo, hyena and cheetah — one of the densest concentrations of wildlife in Africa.",
      },
      {
        question: "Can I extend or upgrade this safari?",
        answer:
          "Yes — add a day in Lake Manyara or the Serengeti, or upgrade to luxury lodges. Tell Ombeni your dates and budget on WhatsApp and he'll tailor it.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl: "/booking/2-days-tarangire-and-ngorongoro-crater/",
  },

  {
    slug: "3-day-safari-tarangire-manyara-ngorongoro",
    destinations: ["Tarangire", "Lake Manyara", "Ngorongoro"],
    category: "safari",
    title: "3-Day Tanzania Safari – Tarangire, Lake Manyara & Ngorongoro",
    shortName: "3-Day Safari",
    days: 3,
    priceFromUSD: 1460,
    priceNote:
      "Per person, sharing. From $1,460 midrange / $1,906 luxury lodges.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/safari-giraffes.jpg",
    gallery: [
      "/images/gallery/safari/safari-2023-01-07-1.jpg",
      "/images/gallery/safari/safari-2023-01-07-25.jpg",
      "/images/gallery/safari/safari-fb-img-1453366840089.jpg",
      "/images/gallery/safari/safari-2023-01-07-28.jpg",
      "/images/gallery/safari/safari-2023-01-07-9.jpg",
    ],
    summary:
      "A perfect short introduction to northern Tanzania's classic parks: the elephant herds and baobabs of Tarangire, the tree-climbing lions and flamingos of Lake Manyara, and a full game drive on the floor of the Ngorongoro Crater. Three days of Big Five game viewing for travellers short on time.",
    highlights: [
      "Three iconic parks in three days, round-trip from Arusha",
      "Tarangire's large elephant herds and ancient baobabs",
      "Lake Manyara's tree-climbing lions and flamingo-lined shore",
      "Game drive on the floor of the Ngorongoro Crater",
      "Private 4x4 with pop-up roof and an expert guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Tarangire National Park",
        description:
          "Morning pickup in Arusha and a two-hour drive to Tarangire, famous for big elephant herds and ancient baobabs. Picnic lunch in the park, then morning and afternoon game drives along the Tarangire River where wildlife gathers to drink.",
        meals: "Lunch, dinner",
        accommodation: "Midrange lodge or tented camp near Tarangire",
      },
      {
        day: 2,
        title: "Lake Manyara National Park",
        description:
          "Drive to Lake Manyara, a lush hidden gem of groundwater forest and savanna. Look for tree-climbing lions, large elephant groups, baboons and, on the alkaline lake, thousands of flamingos. Picnic lunch overlooking the water.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange lodge near Karatu or Manyara",
      },
      {
        day: 3,
        title: "Ngorongoro Crater — return to Arusha",
        description:
          "Descend 600 m into the Ngorongoro Crater for a morning game drive among lions, elephants, buffalo and the rare black rhino, with a picnic lunch near the hippo pools. Ascend in the afternoon and drive back to Arusha for drop-off.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "All transfers and transport in a 4x4 safari vehicle with pop-up roof",
      "Two nights in midrange lodges or tented camps (full board)",
      "All national park entry and Ngorongoro Crater service fees",
      "Professional, English-speaking safari guide",
      "Morning, afternoon and evening game drives as per the itinerary",
      "Bottled water on game drives, plus all government taxes and VAT",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional hot air balloon safari ($500 per person)",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "Is three days enough for a Tanzania safari?",
        answer:
          "Yes — this route packs three of the north's best parks into a tight loop from Arusha, so it's ideal if you're short on time or adding a safari to a beach or climbing trip. For more Serengeti time, consider the 5-day safari.",
      },
      {
        question: "What will I see on this safari?",
        answer:
          "Expect the Big Five (lion, elephant, leopard, buffalo, rhino), plus giraffe, zebra, hippo, flamingo and over 550 bird species across the three parks. The Ngorongoro Crater has one of the densest wildlife concentrations in Africa.",
      },
      {
        question: "Can I upgrade the lodges?",
        answer:
          "Yes — the midrange package is from $1,460pp; luxury lodges are from $1,906pp. Tell Ombeni your preference on WhatsApp and he'll tailor it.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
  },

  {
    slug: "4-day-arusha-tarangire-manyara-ngorongoro",
    destinations: ["Arusha", "Tarangire", "Lake Manyara", "Ngorongoro"],
    category: "safari",
    title: "4-Day Safari – Arusha Park Walk, Tarangire, Manyara & Ngorongoro",
    shortName: "4-Day Walking & Game Safari",
    days: 4,
    priceFromUSD: 2218,
    priceNote:
      "Per person, sharing, mid-range lodges, group of 2+. Final price depends on group size and season.",
    tier: ["mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "A four-day safari that opens on foot: a guided walking safari in Arusha National Park on the slopes of Mount Meru, then classic game drives in Tarangire, Lake Manyara and the Ngorongoro Crater. The walking start gets you close to the landscape and birdlife before the big-game days, making this a more varied loop than a standard drive-only safari.",
    highlights: [
      "Walking safari in Arusha National Park — wildlife and views on foot",
      "Tarangire's giant baobabs and large elephant herds",
      "Lake Manyara's flamingos, hippos and tree-climbing lions",
      "Full game drive on the floor of the Ngorongoro Crater",
      "Four parks in four days, with full-board mid-range lodges",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha National Park Walking Safari",
        description:
          "Begin on foot with a guided walking safari in Arusha National Park on the lower slopes of Mount Meru — a rare chance to approach giraffe, zebra, buffalo and birdlife up close, with views toward Kilimanjaro on a clear day. Picnic lunch near the flamingo-dotted Momella Lakes, looking for colobus monkeys in the forest, then transfer to your Arusha lodge for dinner.",
        meals: "Lunch, dinner",
        accommodation: "Mid-range lodge, Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "After breakfast, drive to Tarangire for a full day among its famous baobabs and large elephant herds. Game drives along the savannah and the Tarangire River — a year-round magnet for wildlife — give great chances at lions, zebra, giraffe and the occasional tree-climbing lion or leopard. Picnic lunch in the park, dinner and overnight at a lodge or tented camp nearby.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge or tented camp near Tarangire",
      },
      {
        day: 3,
        title: "Lake Manyara National Park",
        description:
          "A morning game drive in Lake Manyara, where groundwater forest, grassland and a soda lake meet — pink flamingos, pelicans and storks, plus hippos, baboons, big elephant herds and the park's famous tree-climbing lions. Picnic lunch by the lake, more game viewing, then transfer to a lodge in Karatu near the Ngorongoro highlands for the evening.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge, Karatu",
      },
      {
        day: 4,
        title: "Ngorongoro Crater, return to Arusha",
        description:
          "An early descent onto the crater floor — a UNESCO World Heritage Site with one of Africa's densest wildlife populations, including the Big Five. Game drive through grassland and forest with a picnic lunch by the hippo pool, then ascend the crater wall and drive back to Arusha or Kilimanjaro Airport in the late afternoon.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "All park fees and entrance permits",
      "Guided walking safari in Arusha National Park",
      "Game drives in Tarangire, Lake Manyara and the Ngorongoro Crater",
      "Transfers between parks and lodges in a 4x4 with pop-up roof",
      "Professional, English-speaking driver-guide",
      "Full-board meals and mid-range lodge accommodation throughout",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Tips, souvenirs and items of a personal nature",
      "Drinks and optional activities not mentioned",
    ],
    faqs: [
      {
        question: "How is this different from other 4-day safaris?",
        answer:
          "It starts with a walking safari in Arusha National Park, so you experience the bush on foot before the game-drive days. It also adds Lake Manyara to the classic Tarangire–Ngorongoro loop, giving four distinct parks in four days.",
      },
      {
        question: "Is the walking safari strenuous?",
        answer:
          "No — it's a guided nature walk at an easy pace on the lower slopes of Mount Meru, suitable for anyone reasonably mobile. An armed park ranger accompanies the group as required in Arusha National Park.",
      },
      {
        question: "Can I upgrade the lodges or add Serengeti?",
        answer:
          "Yes — you can upgrade to luxury lodges or extend into the Serengeti for the Great Migration. Tell Ombeni your dates and budget on WhatsApp and he'll tailor it.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
    oldUrl:
      "/booking/4-day-safari-itinerary-arusha-national-park-tarangire-lake-manyara-and-ngorongoro-crater/",
  },

  {
    slug: "4-day-private-ndutu-calving-safari",
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "4-Day Private Calving-Season Safari – Tarangire, Ngorongoro & Ndutu",
    shortName: "4-Day Ndutu Calving Safari",
    days: 4,
    priceFromUSD: 0,
    priceNote:
      "Private trip. From $4,035 for 2 adults + 1 child (mid-range) / $5,685 luxury. Per-person pricing on request — family-friendly.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
    gallery: [],
    summary:
      "A private, family-friendly safari built around the Great Migration's calving season in the southern Serengeti. From Kilimanjaro Airport you take in Tarangire's elephants and baobabs and a full day in the Ngorongoro Crater, then two days on the Ndutu plains where thousands of wildebeest, zebra and gazelle give birth — and the predators that follow them. Travel times and activities are paced for families.",
    highlights: [
      "Two days on the Ndutu plains in peak calving season (Dec–Mar)",
      "Newborn herds and dramatic predator action — lion, cheetah, hyena",
      "Full day in the Ngorongoro Crater and the Big Five",
      "Tarangire's elephant herds and ancient baobabs",
      "Private vehicle and guide, paced for families with children",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kilimanjaro Airport to Tarangire National Park",
        description:
          "Met at Kilimanjaro International Airport by your private guide and driven via Arusha to Tarangire National Park. Picnic lunch, then an afternoon game drive among the park's iconic baobabs and some of the largest elephant herds in Africa, with giraffe, zebra, lion and over 500 bird species along the Tarangire River. Dinner and overnight at a lodge near the park.",
        meals: "Lunch, dinner",
        accommodation: "Mid-range lodge near Tarangire",
      },
      {
        day: 2,
        title: "Ngorongoro Crater",
        description:
          "After breakfast, drive through the highlands to the Ngorongoro Conservation Area and descend 600 m into the crater — the largest intact volcanic caldera on Earth. Game viewing among the Big Five plus zebra, wildebeest, warthog and flamingos on the soda lakes, with a picnic lunch near the hippo pool. Ascend in the late afternoon and transfer to your lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge near the Ngorongoro highlands",
      },
      {
        day: 3,
        title: "Southern Serengeti — Ndutu Calving Plains",
        description:
          "Head onto the Ndutu plains of the southern Serengeti, a prime calving-season location where thousands of wildebeest, zebra and gazelle gather on lush grass. Watch newborn calves and the herds' interactions — and the lions, cheetahs and hyenas the season draws in. Picnic lunch on the plains and an afternoon of game viewing before a tented-camp dinner under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Tented camp, Ndutu area",
      },
      {
        day: 4,
        title: "Ndutu Sunrise Drive & Return to Arusha",
        description:
          "An early sunrise game drive in Ndutu at the height of calving season, followed by a bush breakfast on the plains and a final drive through the woodlands. Around midday, begin the scenic 5–6 hour drive back to Arusha for your onward flight or an overnight before departure.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Private safari vehicle and English-speaking guide",
      "Park and conservation-area entry fees for all destinations",
      "Mid-range (or luxury) lodge and tented-camp accommodation",
      "Full-board meals as specified plus bottled water throughout",
      "Airport transfers",
    ],
    excluded: [
      "International and domestic flights",
      "Travel insurance (recommended for all travellers)",
      "Tips and gratuities",
      "Personal expenses and optional activities",
    ],
    faqs: [
      {
        question: "When is the calving season?",
        answer:
          "Roughly December to March, peaking around late January–February, when the migration herds gather on the southern Serengeti and Ndutu plains to give birth. It's one of the best times for predator action.",
      },
      {
        question: "Is this safari suitable for children?",
        answer:
          "Yes — it's a private trip paced with manageable travel times and family-friendly activities, and your guide tailors each day to your group. Tell Ombeni your children's ages and he'll adjust accordingly.",
      },
      {
        question: "Why is the price shown on request?",
        answer:
          "Because it's a private trip, the price depends on group size, ages and lodge level. As a guide, a recent booking ran from $4,035 for two adults and a child (mid-range). Message Ombeni with your party for an exact quote.",
      },
    ],
    bestMonths: ["Dec", "Jan", "Feb", "Mar"],
    oldUrl:
      "/booking/4-day-private-safari-itinerary-tarangire-ngorongoro-crater-and-southern-serengeti-ndutu-area/",
  },

  {
    slug: "5-day-northern-safari",
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "5-Day Tanzania Safari – Tarangire, Ngorongoro & Serengeti",
    shortName: "5-Day Safari",
    days: 5,
    priceFromUSD: 2125,
    priceNote:
      "Per person, sharing. From $2,125 midrange / $2,855 luxury lodges.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/safari-leopard.jpg",
    gallery: [
      "/images/gallery/safari/safari-2023-01-07-1.jpg",
      "/images/gallery/safari/safari-fb-img-1443719006917.jpg",
      "/images/gallery/safari/safari-fb-img-1453366840089.jpg",
      "/images/gallery/safari/safari-2023-01-07-28.jpg",
      "/images/gallery/safari/safari-2023-01-07-12.jpg",
      "/images/gallery/safari/safari-2023-01-07-5.jpg",
    ],
    summary:
      "Five days across northern Tanzania's headline parks — Tarangire, the Ngorongoro Crater and two full days in the Serengeti — round-trip from Kilimanjaro Airport. A well-paced safari with sunrise and sunset game drives, sundowners and a real chance at the Great Migration in season.",
    highlights: [
      "Two full days in the Serengeti, the heart of the migration",
      "Game drive on the floor of the Ngorongoro Crater",
      "Tarangire's elephants and baobabs to start",
      "Sunrise and sunset drives plus scenic sundowners",
      "Private 4x4 with pop-up roof, round-trip from the airport",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Transfer to Tarangire",
        description:
          "Met at Kilimanjaro International Airport and driven to Tarangire National Park. Picnic lunch, then an afternoon game drive among elephant herds, baobabs and the park's lions, leopards and cheetahs. Dinner under the stars at camp.",
        meals: "Lunch, dinner",
        accommodation: "Midrange lodge or tented camp near Tarangire",
      },
      {
        day: 2,
        title: "Tarangire to Ngorongoro Crater Rim",
        description:
          "An early morning game drive in Tarangire while wildlife is active, then drive through the Great Rift Valley to Ngorongoro. Descend for an afternoon game drive among the Big Five, then up to a lodge on the crater rim for dinner with a view.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange lodge on the Ngorongoro crater rim",
      },
      {
        day: 3,
        title: "Ngorongoro Crater to the Serengeti",
        description:
          "A second descent into the crater at dawn for predators and grazing herds, picnic lunch on the floor, then the scenic drive into the central Serengeti (Seronera) for an evening game drive in big-cat country.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange lodge or tented camp, central Serengeti",
      },
      {
        day: 4,
        title: "Full Day in the Serengeti",
        description:
          "A sunrise game drive in golden light, brunch and rest, then an afternoon drive following the wildlife — the Great Migration if in season, or resident herds of elephant and antelope. Sundowner at a scenic spot and dinner by the campfire.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange lodge or tented camp, central Serengeti",
      },
      {
        day: 5,
        title: "Serengeti to Kilimanjaro Airport",
        description:
          "A final morning game drive, then the journey back toward Kilimanjaro Airport — with time for lunch or shopping in Arusha depending on your flight — and departure.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All airport transfers and transport between parks in a private 4x4",
      "Four nights in midrange lodges and tented camps (full board)",
      "Daily game drives including sunrise, sunset and a full Serengeti day",
      "All national park, Ngorongoro Crater and conservation fees",
      "Professional, English-speaking safari guide and bottled water",
      "Sundowners at scenic locations",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional hot air balloon safari and other activities not listed",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "How is this different from the 3-day safari?",
        answer:
          "The 5-day safari adds two full days in the Serengeti, which is where the Great Migration and the biggest predator action happen. The 3-day stays on the Tarangire–Manyara–Ngorongoro loop closer to Arusha.",
      },
      {
        question: "Will I see the Great Migration?",
        answer:
          "If you travel in season (roughly July–October for the northern crossings, or the southern calving grounds January–March), yes. The Serengeti has abundant resident wildlife year-round even outside migration peaks.",
      },
      {
        question: "Can I add Zanzibar or a Kilimanjaro climb?",
        answer:
          "Absolutely — this safari combines easily with a beach stay or a climb. Ombeni arranges the connections and books it as one trip.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
  },

  {
    slug: "5-day-arusha-serengeti-cultural",
    destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "5-Day Safari & Culture – Arusha Park, Tarangire, Ngorongoro & Serengeti",
    shortName: "5-Day Safari & Culture",
    days: 5,
    priceFromUSD: 1955,
    priceNote:
      "Per person, sharing, mid-range lodges, group of 2+. Great value for a five-day, four-park safari.",
    tier: ["mid-range"],
    heroImage: "/images/packages/5-day-arusha-serengeti-cultural.jpg",
    gallery: [],
    summary:
      "A five-day safari that mixes wildlife with culture: a walking safari in Arusha National Park, the elephants and baobabs of Tarangire, the Big Five in the Ngorongoro Crater, a full day in the Serengeti, and a Maasai village visit to finish. Four parks plus a cultural encounter, all round-trip from Arusha — exceptional value for the breadth it covers.",
    highlights: [
      "Walking safari and Momella Lakes in Arusha National Park",
      "Tarangire's elephant herds, baobabs and the Silale Swamp birdlife",
      "Big Five game drive on the floor of the Ngorongoro Crater",
      "A full day on the Serengeti plains, big-cat country",
      "Maasai village visit — dance, crafts and village life",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha National Park",
        description:
          "A short drive to Arusha National Park for a guided walking safari with a ranger — approaching giraffe, zebra and buffalo on foot — plus the flamingo-dotted Momella Lakes and views toward Mount Meru. Continue by vehicle for colobus monkeys, warthog and bushbuck before returning to a mid-range lodge near Arusha for dinner.",
        meals: "Lunch, dinner",
        accommodation: "Mid-range lodge near Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park — Land of Giants",
        description:
          "An early drive to Tarangire, famous for its massive elephant herds. Game drives along the Tarangire River — a dry-season magnet for wildlife — with lions, cheetahs, zebra and wildebeest, plus the bird-rich Silale Swamp. Picnic lunch among the baobabs, then dinner and overnight at a lodge near the park.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge near Tarangire",
      },
      {
        day: 3,
        title: "Ngorongoro Crater to the Serengeti",
        description:
          "Descend into the Ngorongoro Crater for a morning among the Big Five — including the rare black rhino — with a picnic lunch by the hippo pool. In the afternoon, drive on through the Ngorongoro highlands into the Serengeti, arriving at your lodge for a warm welcome and dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge or tented camp, Serengeti",
      },
      {
        day: 4,
        title: "Full Day in the Serengeti",
        description:
          "A full day of game drives across the Serengeti's endless plains and kopjes — in season, the Great Migration of wildebeest and zebra, and always the predators that follow them. A sundowner in the park and a farewell dinner under the starry sky.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge or tented camp, Serengeti",
      },
      {
        day: 5,
        title: "Serengeti, Maasai Village & Return to Arusha",
        description:
          "A final sunrise game drive, then a visit to a Maasai village for a traditional dance and a window into Maasai life and crafts. Begin the journey back to Arusha with a scenic picnic lunch en route, arriving for your departure or an optional overnight.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Full-board mid-range lodge accommodation throughout the safari",
      "All park entrance fees, crater and concession services, plus government taxes",
      "Walking safari in Arusha National Park and a Maasai village tour",
      "Game drives in a 4x4 with pop-up roof and an English-speaking driver-guide",
      "Unlimited drinking water, fruit daily, medical kit and binoculars",
      "All transfers and helicopter rescue coordination",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Alcoholic and bottled drinks, laundry and personal items",
      "Tips and gratuities for guide and lodge staff",
    ],
    faqs: [
      {
        question: "What makes this safari different?",
        answer:
          "It opens with a walking safari in Arusha National Park and closes with a Maasai village visit, so you get culture and on-foot wildlife alongside the classic Tarangire–Ngorongoro–Serengeti circuit — four parks in five days, and great value.",
      },
      {
        question: "Will I see the Great Migration?",
        answer:
          "If you travel in season — roughly July–October for the northern crossings or December–March for the calving plains. The Serengeti and Ngorongoro hold abundant resident wildlife year-round regardless.",
      },
      {
        question: "Is this good for families and solo travellers?",
        answer:
          "Yes — it suits couples, families, solo travellers and honeymooners. Tell Ombeni your group on WhatsApp and he'll tailor the pace and lodges.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"],
  },

  {
    slug: "5-day-luxury-fly-safari",
    heroImage: "/images/luxury-fly-safari.jpg",
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "5-Day Luxury Safari – Tarangire, Ngorongoro & Serengeti (fly-out)",
    shortName: "5-Day Luxury Safari",
    days: 5,
    priceFromUSD: 2499,
    priceNote:
      "Per person, sharing. From $2,499 mid-range / $3,666 luxury. Includes the scenic return flight from the Serengeti.",
    tier: ["mid-range", "comfort"],
    gallery: [],
    summary:
      "A private, upmarket take on the classic northern circuit — Tarangire, the Ngorongoro Crater and the Serengeti — staying at hand-picked lodges and finishing with a scenic flight back from the Serengeti rather than the long drive. Available in mid-range or luxury, it's an easy, comfortable way to see Tanzania's headline parks in five days.",
    highlights: [
      "Private 4x4 Land Cruiser with pop-up roof and a driver-guide",
      "Tarangire's baobabs and elephant herds",
      "Full day inside the Ngorongoro Crater — 'Africa's Eden'",
      "Serengeti plains with a sunrise game drive",
      "Scenic return flight from the Serengeti to Arusha",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival — Transfer to Arusha",
        description:
          "Met at Kilimanjaro International Airport by your private driver-guide and transferred to your lodge in Arusha, with views of Mount Meru along the way. Unwind in the lodge gardens and enjoy a dinner of fresh local cuisine, ready for the safari ahead.",
        meals: "Dinner",
        accommodation: "Mid-range or luxury lodge, Arusha",
      },
      {
        day: 2,
        title: "Arusha to Tarangire National Park",
        description:
          "After breakfast, drive to Tarangire, a reserve of sweeping savannah and ancient baobabs alive with elephant, zebra and giraffe. A full day exploring its riverine forests and plains, with a picnic lunch by the Tarangire River, then a sunset arrival at your lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury lodge near Tarangire",
      },
      {
        day: 3,
        title: "Tarangire to the Ngorongoro Crater",
        description:
          "Continue to the Ngorongoro Conservation Area and descend 600 m into the crater — lions in the grasslands, hippos in the pools and flamingos on the soda lakes — with a picnic lunch near the hippo pool. Ascend to a lodge on the crater rim with panoramic views for the evening.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury lodge on the crater rim",
      },
      {
        day: 4,
        title: "Ngorongoro to the Serengeti",
        description:
          "Drive across the Ngorongoro highlands to the Serengeti, with a stop at a Maasai village en route. As the golden plains open up, an afternoon game drive introduces the park's wildebeest, gazelle, elephant and predators before you settle into a tented camp under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range or luxury tented camp, Serengeti",
      },
      {
        day: 5,
        title: "Serengeti — Flight to Arusha & Departure",
        description:
          "A sunrise game drive for predators in golden light, then to the Seronera airstrip for a scenic flight back to Arusha with aerial views of the plains. Lunch and a short rest on arrival, then your transfer to Kilimanjaro International Airport for departure.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Exclusive use of a private 4x4 Land Cruiser with pop-up roof",
      "Professional, English-speaking safari driver-guide",
      "All national park, crater and concession fees plus government taxes",
      "Four nights' mid-range or luxury accommodation, full board",
      "Scenic return flight from the Serengeti (Seronera) to Arusha",
      "Bottled water on game drives and airport transfers",
    ],
    excluded: [
      "International flights and Tanzania visa fees ($50 per person)",
      "Travel and medical insurance",
      "Optional activities (hot air balloon $550, Maasai village $80)",
      "Tips and gratuities, plus personal expenses",
    ],
    faqs: [
      {
        question: "Is the return flight from the Serengeti included?",
        answer:
          "Yes — instead of the long drive back, you fly from the Seronera airstrip to Arusha on the final day, with aerial views of the plains. It's included in the package price.",
      },
      {
        question: "What's the difference between mid-range and luxury?",
        answer:
          "The route, private vehicle and guiding are the same; the difference is the lodges and level of service. Mid-range is from $2,499pp and luxury from $3,666pp at premium lodges and camps.",
      },
      {
        question: "Can I add Zanzibar or a balloon flight?",
        answer:
          "Yes — a sunrise hot air balloon over the Serengeti is $550pp, and we can add a Zanzibar beach stay afterwards as one trip. Just ask Ombeni on WhatsApp.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"],
  },

  {
    slug: "5-day-ndutu-migration-safari",
    heroImage: "/images/safari-elephant.jpg",
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "5-Day Calving-Season Safari – Tarangire, Ngorongoro & Ndutu",
    shortName: "5-Day Ndutu Migration",
    days: 5,
    priceFromUSD: 3760,
    priceNote:
      "Per person, all-inclusive. From $3,760 standard / $4,599 luxury lodges. Reduced rate for kids 14–16 (from $2,795).",
    tier: ["mid-range", "comfort"],
    gallery: [],
    summary:
      "Five days built around the Great Migration's calving season on the Ndutu plains. From Tarangire's elephant herds and a full day inside the Ngorongoro Crater, you head into the southern Serengeti for two days at Ndutu, where thousands of wildebeest and zebra give birth and the predators gather. Morning, afternoon and full-day drives in a 4x4 with pop-up roof.",
    highlights: [
      "Two full days at Ndutu in peak calving season (Dec–Apr)",
      "Newborn herds and intense predator action — lion, cheetah, hyena",
      "Full day inside the Ngorongoro Crater and the Big Five",
      "Tarangire's baobabs and large elephant herds to open",
      "Morning, afternoon and full-day game drives; family rates available",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Tarangire Afternoon Game Drive",
        description:
          "Met at Kilimanjaro International Airport (or from your Arusha hotel) and driven to Tarangire National Park. After lunch, an afternoon game drive among the park's ancient baobabs and big elephant herds, with giraffe, zebra, buffalo and abundant birdlife drawn to the Tarangire River. Dinner and overnight at a mid-range lodge.",
        meals: "Lunch, dinner",
        accommodation: "Mid-range lodge near Tarangire",
      },
      {
        day: 2,
        title: "Tarangire Morning Drive & Transfer to Ngorongoro",
        description:
          "An early game drive in Tarangire — prime time for lion and leopard, and elephants along the river — then a scenic drive to the Ngorongoro Conservation Area past Maasai villages and Rift Valley views. Afternoon at leisure at your lodge near the crater rim with dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge near the Ngorongoro crater rim",
      },
      {
        day: 3,
        title: "Ngorongoro Crater Full Day & Transfer to Ndutu",
        description:
          "Descend into the crater for a full-day game drive among the Big Five plus hippo, wildebeest and flamingos, with a picnic lunch at the hippo pool. In the afternoon ascend the crater walls and continue into the Ndutu region of the southern Serengeti — the migration's calving grounds — for dinner at your lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp, Ndutu area",
      },
      {
        day: 4,
        title: "Full Day at Ndutu — Heart of the Migration",
        description:
          "A full day tracking the calving herds across the Ndutu plains. Thousands of wildebeest and zebra gather to give birth, drawing lions, cheetahs and hyenas — your guide reads the herds for the best sightings and photography. Picnic lunch among the action, with game viewing into the late afternoon before returning to camp.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or tented camp, Ndutu area",
      },
      {
        day: 5,
        title: "Ndutu Morning Drive & Departure",
        description:
          "A final early game drive in the cool morning light — a prime time for predators finishing the night's hunt — then back to the lodge to pack before the transfer to Arusha or Kilimanjaro International Airport for departure.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "All park, conservation and crater fees (Tarangire, Ngorongoro, Ndutu/Serengeti)",
      "Full-board mid-range lodges plus picnic lunches on game-drive days",
      "Daily morning, afternoon and full-day game drives in a 4x4 with pop-up roof",
      "All internal transfers plus airport transfers",
      "Professional, English-speaking guide experienced in the migration regions",
      "Bottled water and refreshments in the vehicle",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional hot air balloon safari ($550 per person) and Zanzibar add-ons",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "When is the Ndutu calving season?",
        answer:
          "Roughly December to April, peaking around late January and February, when the migration herds mass on the southern Serengeti and Ndutu plains to give birth. It's one of the best times of year for predator sightings.",
      },
      {
        question: "How is this different from the 4-Day Ndutu private safari?",
        answer:
          "This is a scheduled 5-day trip with two full days at Ndutu and a choice of standard or luxury lodges. The 4-day version is a private, family-paced trip quoted per group. Both centre on the calving season.",
      },
      {
        question: "Is there a reduced rate for children?",
        answer:
          "Yes — children aged 14–16 are from $2,795 per person sharing. Message Ombeni with your group's ages for an exact quote.",
      },
    ],
    bestMonths: ["Dec", "Jan", "Feb", "Mar", "Apr"],
    oldUrl: "/booking/5-day-mid-range-tarangire-ngorongoro-crater-and-ndutu-migration-safari/",
  },

  {
    slug: "6-day-northern-safari",
    destinations: ["Tarangire", "Serengeti", "Ngorongoro", "Lake Manyara"],
    category: "safari",
    title: "6-Day Northern Tanzania Safari – Tarangire, Serengeti, Ngorongoro & Manyara",
    shortName: "6-Day Northern Safari",
    days: 6,
    priceFromUSD: 2625,
    priceNote:
      "Per person, sharing. From $2,625 mid-range / $3,855 luxury. Available year-round.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/packages/6-day-northern-safari.jpg",
    gallery: [],
    summary:
      "A well-paced six-day loop through four of northern Tanzania's headline parks — Tarangire, two full days in the Serengeti, the Ngorongoro Crater and a tranquil Lake Manyara finale. Available year-round, it catches the migration river crossings (July–October) or the calving season (December–March), with resident wildlife in every season.",
    highlights: [
      "Two full days in the Serengeti, heart of the Great Migration",
      "Full game drive on the floor of the Ngorongoro Crater",
      "Tarangire's elephant herds and ancient baobabs",
      "Lake Manyara's tree-climbing lions and flamingos to finish",
      "Year-round availability with a private 4x4 and pop-up roof",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Arrive at Kilimanjaro International Airport, where you're met and transferred to a comfortable lodge in Arusha. Relax after your journey and meet your guide in the evening for a detailed briefing on the days ahead.",
        meals: "Dinner",
        accommodation: "Mid-range lodge, Arusha",
      },
      {
        day: 2,
        title: "Tarangire National Park",
        description:
          "Drive to Tarangire, famous for its massive elephant herds and iconic baobabs. Spend the day exploring the park's swamps and savannah, looking for lions, leopards and a rich variety of birds, with a picnic lunch in the park. Overnight at a mid-range lodge or tented camp.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge or tented camp near Tarangire",
      },
      {
        day: 3,
        title: "Into the Serengeti — The Endless Plains",
        description:
          "Journey into the world-famous Serengeti, game-viewing as you go. The afternoon is spent tracking lions, cheetahs and elephants across the plains — in season you may catch the migration's river crossings or, later in the year, the calving herds. Overnight in a Serengeti tented camp.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp, Serengeti",
      },
      {
        day: 4,
        title: "Full Day in the Serengeti",
        description:
          "A full day exploring the Serengeti's vast plains — sunrise and afternoon drives following the wildlife, with your guide tailoring the route to predators, the migration or photography. Sundowner and dinner under the wide Serengeti sky.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range tented camp, Serengeti",
      },
      {
        day: 5,
        title: "Ngorongoro Crater",
        description:
          "Drive from the Serengeti to the Ngorongoro Crater and descend onto the floor — a UNESCO World Heritage Site and one of the most biodiverse places on Earth — for game viewing among the Big Five, with a picnic lunch by a hippo pool. Overnight at a lodge on the crater rim with panoramic views.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Mid-range lodge on the Ngorongoro crater rim",
      },
      {
        day: 6,
        title: "Lake Manyara & Departure",
        description:
          "Conclude with a visit to Lake Manyara National Park — famous for its tree-climbing lions and flamingo-lined shore — before the drive back to Arusha and a transfer to Kilimanjaro International Airport for departure, or an extension of your stay.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "All park fees, permits and taxes",
      "Comfortable mid-range accommodation in lodges and tented camps",
      "Daily meals and bottled water",
      "Professional safari guide and private 4x4 vehicle",
      "Airport transfers and all ground transportation",
      "Game drives as per the itinerary",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional hot air balloon safari and activities not listed",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "Can I do this safari at any time of year?",
        answer:
          "Yes — it's a year-round itinerary. The migration's Mara River crossings are typically July–October and the calving season December–March, but the Serengeti and Ngorongoro hold abundant resident wildlife in every season.",
      },
      {
        question: "How is this different from the 5-day and 7-day safaris?",
        answer:
          "The 6-day adds two full days in the Serengeti and finishes with Lake Manyara, giving more big-cat and migration time than the 5-day while staying shorter than the 7-day migration safari.",
      },
      {
        question: "Can I upgrade to luxury lodges?",
        answer:
          "Yes — the mid-range package is from $2,625pp and luxury from $3,855pp. Tell Ombeni your preference on WhatsApp and he'll tailor it.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"],
    oldUrl:
      "/booking/6-day-safari-in-northern-tanzania-explore-tarangire-ngorongoro-crater-and-serengeti-a-year-round-adventure/",
  },

  {
    slug: "4-day-balloon-safari-serengeti-ngorongoro",
    destinations: ["Serengeti", "Ngorongoro"],
    category: "safari",
    tags: ["honeymoon"],
    title: "4-Day Balloon Safari – Serengeti & Ngorongoro Crater",
    shortName: "4-Day Balloon Safari",
    days: 4,
    priceFromUSD: 2218,
    priceNote:
      "Per person, sharing, midrange. Includes a sunrise hot air balloon flight.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/balloon-safari.jpg",
    gallery: [
      "/images/gallery/safari/safari-2023-01-07-5.jpg",
      "/images/gallery/safari/safari-2023-01-07-1.jpg",
      "/images/gallery/safari/safari-2023-01-07-25.jpg",
      "/images/gallery/safari/safari-fb-img-1443719006917.jpg",
    ],
    summary:
      "A four-day signature safari built around a sunrise hot air balloon flight over the Serengeti, followed by a champagne bush breakfast. Pair the balloon with private game drives in the Serengeti and a full day in the Ngorongoro Crater — a romantic, special-occasion trip with luxurious touches throughout.",
    highlights: [
      "Sunrise hot air balloon flight over the Serengeti plains",
      "Champagne breakfast in the bush after landing",
      "Private game drives in the Serengeti with an expert guide",
      "Full day in the Ngorongoro Crater, the 'Eighth Wonder of the World'",
      "Romantic touches — candlelit dinners and crater-rim sundowners",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to the Serengeti",
        description:
          "Met at Kilimanjaro International Airport and transferred to a local airstrip for a scenic flight over the plains to the Serengeti. A game drive en route to your lodge, an afternoon drive among elephant, lion and cheetah, and a romantic dinner under the stars.",
        meals: "Lunch, dinner",
        accommodation: "Midrange or luxury lodge / tented camp, Serengeti",
      },
      {
        day: 2,
        title: "Hot Air Balloon Safari & Full-Day Game Drive",
        description:
          "Lift off at dawn for a hot air balloon flight over the Serengeti, spotting wildlife from the air in serene silence, then a champagne breakfast in the bush. A full-day game drive follows, exploring predator-rich areas, watering holes and riverbanks.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange or luxury lodge / tented camp, Serengeti",
      },
      {
        day: 3,
        title: "Serengeti to Ngorongoro",
        description:
          "A morning game drive for last Serengeti sightings, then the drive to the Ngorongoro Conservation Area. Check in to a lodge on the crater rim, with an optional Maasai-guided rim walk and a sundowner overlooking the crater at sunset.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange or luxury lodge on the crater rim",
      },
      {
        day: 4,
        title: "Ngorongoro Crater & Departure",
        description:
          "Descend into the crater for a morning among the Big Five and a picnic lunch on the floor, then begin the journey back to Kilimanjaro International Airport for your departure.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Round-trip Kilimanjaro Airport transfers and internal park transfers",
      "Scenic flight to the Serengeti",
      "Three nights in midrange or luxury lodges / tented camps",
      "Sunrise hot air balloon safari with champagne bush breakfast",
      "Private game drives in a 4x4 with an experienced guide",
      "All meals from lunch on Day 1, plus park and crater fees",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Tips, souvenirs and items of a personal nature",
      "Activities not mentioned in the itinerary",
    ],
    faqs: [
      {
        question: "Is the hot air balloon flight guaranteed?",
        answer:
          "The sunrise balloon flight is included and pre-booked. Flights are weather-dependent for safety — if conditions force a cancellation, the balloon operator refunds that portion. Your guide will confirm timings on the ground.",
      },
      {
        question: "Is this a good honeymoon safari?",
        answer:
          "Yes — it's designed as a romantic, special-occasion trip with candlelit dinners, private sundowners and luxury lodge options. Let Ombeni know it's a honeymoon and he'll arrange extra touches.",
      },
      {
        question: "When is the best time for the balloon safari?",
        answer:
          "June to October offers the most stable weather and the migration in the northern Serengeti. The balloon flies year-round, weather permitting.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
  },

  {
    slug: "8-day-zanzibar-tour",
    destinations: ["Zanzibar"],
    category: "zanzibar",
    title: "8-Day Zanzibar Tour – Stone Town, Villages & Beaches",
    shortName: "8-Day Zanzibar",
    days: 8,
    priceFromUSD: 2500,
    priceNote:
      "Per person, sharing. From $2,500 midrange / $4,500 luxury, full board.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
    gallery: [],
    summary:
      "Eight days to see the whole of the Spice Island: historic Stone Town, Jozani Forest's red colobus monkeys, a Swahili cooking class, the Safari Blue sailing excursion, and days on the white sands of Nungwi, Paje and Kendwa. A full-board blend of culture, village life and beach time.",
    highlights: [
      "Stone Town, Jozani Forest and a spice farm with a cooking class",
      "Safari Blue full-day sailing, snorkelling and sandbank BBQ",
      "Village tours — Makunduchi, Nungwi, Jambiani seaweed farms",
      "Beach time at Nungwi, Paje and Kendwa with a sunset dhow cruise",
      "Full-board, with all-inclusive for the final three nights",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Stone Town",
        description:
          "Arrive at Zanzibar International Airport and transfer to your Stone Town hotel. An evening walking tour of the historic centre — the Old Fort, Forodhani Gardens and the House of Wonders.",
        meals: "Lunch, dinner",
        accommodation: "Midrange or luxury hotel, Stone Town",
      },
      {
        day: 2,
        title: "Jozani Forest & Swahili Cooking Class",
        description:
          "A morning in Jozani Forest among the rare red colobus monkeys and mangrove boardwalks, then a spice farm tour in the afternoon and a hands-on Swahili cooking class to prepare local dishes.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange or luxury hotel, Stone Town",
      },
      {
        day: 3,
        title: "Safari Blue & Makunduchi Village",
        description:
          "The full-day Safari Blue excursion along the southern coast — snorkelling over coral reefs and a seafood BBQ on a sandbank — followed by a visit to the traditional village of Makunduchi.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange or luxury hotel, Stone Town",
      },
      {
        day: 4,
        title: "Transfer to Nungwi Beach",
        description:
          "Transfer north to Nungwi, renowned for white sand and turquoise water. An afternoon village tour explores Nungwi's dhow-building and fishing heritage.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange or luxury beach resort, Nungwi",
      },
      {
        day: 5,
        title: "Nungwi Beach & Jambiani Village",
        description:
          "A relaxed morning at Nungwi — snorkelling, kayaking or lounging — then a visit to Jambiani on the southeast coast to meet the women who run its seaweed farms and learn about village life.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange or luxury beach resort, Nungwi",
      },
      {
        day: 6,
        title: "Paje Beach & Kendwa Sunset Cruise",
        description:
          "Time at Paje, one of Zanzibar's best kite-surfing beaches, then a sunset dhow cruise off Kendwa with drinks on board as the sun sets over the northern coast.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange or luxury beach resort, Nungwi area",
      },
      {
        day: 7,
        title: "Kendwa Beach",
        description:
          "A final full beach day at Kendwa — paddleboarding, diving or simply relaxing — capped with a special beach BBQ dinner under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Midrange or luxury beach resort, Nungwi area",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "A last walk or swim on the beach before your transfer to Zanzibar International Airport for departure.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Seven nights in midrange or luxury hotels and beach resorts",
      "Full board, with all-inclusive for the final three nights",
      "Safari Blue, Jozani Forest, spice tour and Swahili cooking class",
      "Village tours in Makunduchi, Nungwi and Jambiani; sunset dhow cruise",
      "Private airport transfers and transport between all activities",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Optional activities not mentioned in the itinerary",
      "Tips, souvenirs and items of a personal nature",
    ],
    faqs: [
      {
        question: "Is the 8-day Zanzibar tour more than just beaches?",
        answer:
          "Yes — it balances beach time with culture and nature: Stone Town's history, Jozani Forest's red colobus monkeys, a Swahili cooking class, the Safari Blue sailing trip and three village visits.",
      },
      {
        question: "What's the difference between midrange and luxury?",
        answer:
          "The itinerary is the same; the difference is the hotels and level of service. Midrange is from $2,500pp; luxury (Park Hyatt, Zuri, Essque Zalu and similar) is from $4,500pp with private tours and spa treatments.",
      },
      {
        question: "Can I combine Zanzibar with a safari?",
        answer:
          "Yes. Many travellers pair the island with a northern-circuit safari or a Kilimanjaro climb. Ombeni arranges the connecting flights and books it as a single trip.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "3-day-mount-meru-momela",
    category: "trekking",
    destinations: ["Mount Meru", "Arusha"],
    title: "3-Day Mount Meru Climb – Momela Route",
    shortName: "3-Day Mount Meru",
    days: 3,
    priceFromUSD: 645,
    priceNote:
      "From $645 pp for groups of 4–8; $895 pp for 1–3. All-inclusive, sharing. Includes the armed park ranger required in Arusha National Park.",
    tier: ["budget", "mid-range"],
    heroImage: "/images/meru-montane-forest.jpg",
    gallery: [
      "/images/gallery/meru/meru-summit-sign.jpg",
      "/images/gallery/meru/meru-pxl-20250817-135926369.jpg",
      "/images/gallery/meru/meru-pxl-20250817-091809553.jpg",
      "/images/gallery/meru/meru-pxl-20250818-105052548.jpg",
      "/images/gallery/meru/meru-pxl-20250818-134023267.jpg",
      "/images/gallery/meru/meru-pxl-20250819-032743057.jpg",
    ],
    summary:
      "Mount Meru (4,566 m) is Tanzania's second-highest peak and the perfect Kilimanjaro warm-up — a hut-to-hut trek through Arusha National Park where you walk past buffalo and giraffe with an armed ranger, climb a dramatic crater-rim ridgeline, and summit Socialist Peak at sunrise with Kilimanjaro floating on the horizon.",
    highlights: [
      "Ideal high-altitude acclimatization before Kilimanjaro",
      "Wildlife on the lower slopes — buffalo, giraffe, colobus monkeys",
      "Dramatic ridge walk between the crater's outer wall and inner cliffs",
      "Sunrise on Socialist Peak (4,566 m) facing Kilimanjaro",
    ],
    itinerary: [
      {
        day: 1,
        title: "Momela Gate to Miriakamba Hut",
        description:
          "From Momela Gate the trail crosses open grassland with cape buffalo and warthogs — with luck, giraffe and elephant too — then climbs steadily through montane forest (lunch at the famous Fig Tree). The forest thins to birdlife and black-and-white colobus monkeys, and by mid-afternoon you reach Miriakamba Hut in a grassy glade with views across the plains toward Kilimanjaro.",
        altitudeStart: 1500,
        altitudeEnd: 2514,
        hours: "3–5 hours",
        meals: "Lunch, dinner",
        accommodation: "Miriakamba Hut",
      },
      {
        day: 2,
        title: "Miriakamba Hut to Saddle Hut + Little Meru",
        description:
          "A steep, sustained climb through lush montane forest, over the Elephant Back Ridge and up through giant heather and moorland to Saddle Hut, reached in time for lunch. In the afternoon, an optional 1-hour climb to the nearby summit of Little Meru (3,820 m) rewards you with superb views before an early night ahead of the summit push.",
        altitudeStart: 2514,
        altitudeEnd: 3570,
        hours: "3–5 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Saddle Hut",
      },
      {
        day: 3,
        title: "Summit Socialist Peak, descend to Momela Gate",
        description:
          "An early start (~midnight) with a steep hour to Rhino Point (3,800 m), then along a ridge of ash and rock to Cobra Point (4,350 m) and on to Socialist Peak (4,566 m) for sunrise — the crater cliffs, the Ash Cone, and Kilimanjaro above the clouds. Retrace the dramatic ridge to Saddle Hut for brunch, then descend through forest and grassland (more wildlife) to Miriakamba and on to Momela Gate by afternoon.",
        altitudeStart: 3570,
        altitudeEnd: 4566,
        hours: "10+ hours",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "All Arusha National Park fees (non-resident) and rescue fee",
      "Armed park ranger (required in Arusha NP) and professional driver/guide",
      "Porterage and all hut accommodation on the mountain",
      "All meals as specified in the day-by-day itinerary",
      "Camping/trekking equipment (sleeping bag excluded)",
      "All transportation, activities and taxes/VAT",
    ],
    excluded: [
      "International flights and roundtrip airport transfer",
      "Personal climbing gear, sleeping bag and bath towels",
      "Accommodation before and after the trek",
      "Tips (guideline ~$30 per person per day)",
    ],
    faqs: [
      {
        question: "Is 3 days enough to climb Mount Meru?",
        answer:
          "Yes — the Momela route is regularly done in 3 days, though it is not an easy summit. Expect a long summit day (10+ hours) with some scrambling on rock in the dark at altitude. A 4-day version adds an extra acclimatization day if you'd prefer a gentler pace — just ask.",
      },
      {
        question: "Why is an armed ranger required?",
        answer:
          "Mount Meru sits inside Arusha National Park, which is home to buffalo, elephant and giraffe on the lower slopes. Park rules require every group to be accompanied by an armed ranger employed by the park, in addition to your own Trust Tours mountain guide.",
      },
      {
        question: "Is Mount Meru good preparation for Kilimanjaro?",
        answer:
          "It's the best warm-up there is. The altitude profile and hiking distances acclimatize you well, and climbing Meru a few days before Kilimanjaro measurably improves your summit chances — many of our climbers do both back-to-back.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl: "/booking/3-days-mount-meru-climb-2/",
  },

  // ─────────────────────────────────────────────────────────────────
  // OL DOINYO LENGAI — "Mountain of God" active volcano treks (Wave 4).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "2-day-ol-doinyo-lengai-climb",
    heroImage: "/images/ol-doinyo-lengai-2day.jpg",
    destinations: ["Arusha", "Lake Natron", "Ol Doinyo Lengai"],
    category: "trekking",
    difficulty: "Challenging",
    title: "2-Day Ol Doinyo Lengai Climb – Mountain of God",
    shortName: "2-Day Lengai Climb",
    days: 2,
    priceFromUSD: 450,
    priceNote:
      "Per person. From $450 budget / $750–1,050 mid-range / $1,200–1,800 luxury. Plus local climbing fee (~$70–100pp) and TAWA fee (~$20pp).",
    tier: ["budget", "mid-range", "comfort"],
    gallery: [],
    summary:
      "A short, intense adventure to the summit of Ol Doinyo Lengai (2,962 m), the only active carbonatite volcano on Earth and sacred to the Maasai as the 'Mountain of God'. Drive into the Great Rift Valley to Lake Natron, then climb beneath the stars from midnight to reach the crater rim at sunrise — panoramas across Lake Natron, the Rift Valley, Mount Meru and even Kilimanjaro on clear mornings.",
    highlights: [
      "Summit the world's only active carbonatite volcano",
      "Midnight ascent beneath the stars to a sunrise summit",
      "Views over Lake Natron, the Great Rift Valley and Mount Meru",
      "Maasai mountain guides who know the volcano intimately",
      "Dramatic Rift Valley drive past volcanic landscapes",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Lake Natron — Summit Preparation",
        description:
          "Depart Arusha early and travel 5–6 hours north through the Great Rift Valley, past Maasai villages and volcanic scenery, to Lake Natron with Ol Doinyo Lengai rising from the valley floor. Lunch at the lodge, an afternoon to relax, explore the lakeshore or visit a Maasai community, then an early dinner and a few hours' rest before waking around 11 PM for the climb.",
        meals: "Lunch, dinner",
        accommodation: "Lodge or camp, Lake Natron",
      },
      {
        day: 2,
        title: "Summit Ol Doinyo Lengai, Return to Arusha",
        description:
          "Around midnight, begin the steep 4–7 hour ascent with experienced Maasai guides, reaching the summit at dawn for one of East Africa's most spectacular sunrises over Lake Natron, the Rift Valley escarpment, Mount Meru and the active volcanic craters. Descend to the base, transfer to the lodge for a shower and brunch, then drive back to Arusha, arriving in the late afternoon.",
        altitudeStart: 1000,
        altitudeEnd: 2962,
        hours: "4–7 hours up",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Private transport and a professional driver-guide",
      "Local Maasai mountain guide and climbing support",
      "One night's accommodation (budget, mid-range or luxury)",
      "Meals as per the itinerary and drinking water",
      "Government taxes",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Local village climbing fee (~$70–100pp) and TAWA fee (~$20pp)",
      "Travel insurance (trekking cover advised)",
      "Tips for guides and staff, plus personal expenses",
    ],
    faqs: [
      {
        question: "How difficult is the climb?",
        answer:
          "Challenging — a steep ascent of roughly 1,600 m over a short distance to 2,962 m, taking 4–7 hours up, started around midnight without much sleep. No technical skills are needed, but good fitness and a no-quit mindset help. Guides set a manageable pace.",
      },
      {
        question: "Why does the climb start at midnight?",
        answer:
          "To summit for sunrise and to avoid the extreme daytime heat of the Lake Natron basin, which can soar. You're usually back at the lodge by early afternoon.",
      },
      {
        question: "Can I add a safari or the waterfalls?",
        answer:
          "Yes — the 3-day version adds the Ngare Sero waterfalls and a flamingo walk, and our 5-day combo pairs the climb with a Serengeti and Ngorongoro safari. Ask Ombeni on WhatsApp.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "3-day-ol-doinyo-lengai-hike",
    destinations: ["Arusha", "Lake Natron", "Ol Doinyo Lengai"],
    category: "trekking",
    difficulty: "Challenging",
    title: "3-Day Ol Doinyo Lengai Volcano Hike – Mountain of God",
    shortName: "3-Day Lengai Hike",
    days: 3,
    priceFromUSD: 650,
    priceNote:
      "Per person. From $650 budget / $950–1,350 mid-range / $1,500–2,200 luxury. Plus local climbing fee (~$70–100pp) and TAWA fee (~$20pp).",
    tier: ["budget", "mid-range", "comfort"],
    heroImage: "",
    gallery: [],
    summary:
      "The fuller Ol Doinyo Lengai experience: the Ngare Sero waterfalls, the flamingo-filled shores of Lake Natron, Maasai culture and a thrilling overnight summit climb of the 'Mountain of God' (2,962 m). Three days in one of Tanzania's wildest, most remote corners, far from the safari crowds.",
    highlights: [
      "Midnight summit of Ol Doinyo Lengai for a sunrise over the Rift Valley",
      "Ngare Sero Waterfalls — swim beneath cascades in a hidden canyon",
      "Lake Natron flamingo walk and Maasai cultural encounters",
      "The only active carbonatite volcano on Earth",
      "Remote, off-the-beaten-path adventure with Maasai guides",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arusha to Lake Natron & Ngare Sero Waterfalls",
        description:
          "Drive 5–6 hours north from Arusha through the Great Rift Valley, with views of Mount Meru, the Ngorongoro Highlands and Maasai settlements, to Lake Natron. After lunch overlooking Ol Doinyo Lengai, walk to the hidden Ngare Sero Waterfalls — wading through a narrow canyon to swim beneath the falls — then a sunset over the lake and dinner at the lodge.",
        meals: "Lunch, dinner",
        accommodation: "Lodge or camp, Lake Natron",
      },
      {
        day: 2,
        title: "Midnight Summit Climb of Ol Doinyo Lengai",
        description:
          "Wake around 11 PM for tea and snacks, then transfer to the base and begin the steep climb shortly after midnight. With Maasai guides, ascend 4–7 hours to reach the summit at dawn for panoramas over Lake Natron, the Rift Valley, Mount Meru and Kilimanjaro on clear mornings. Descend to the lodge for a hot lunch, a shower and an afternoon to recover by the pool.",
        altitudeStart: 1000,
        altitudeEnd: 2962,
        hours: "4–7 hours up",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge or camp, Lake Natron",
      },
      {
        day: 3,
        title: "Lake Natron Flamingo Walk, Return to Arusha",
        description:
          "After a leisurely breakfast, a guided walk along the shores of Lake Natron — one of East Africa's most important breeding grounds for Lesser Flamingos, its waters glowing red and pink — with an optional Maasai village visit. After lunch, the scenic drive back to Arusha, arriving in the late afternoon.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Private transport and a professional driver-guide",
      "Local Maasai mountain guide and climbing permits",
      "Two nights' accommodation (budget, mid-range or luxury)",
      "All meals on the trip, the Ngare Sero waterfall excursion and flamingo walk",
      "Lake Natron activities, drinking water and government taxes",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Local village climbing fee (~$70–100pp) and TAWA fee (~$20pp)",
      "Travel insurance (trekking cover advised)",
      "Tips for guides and staff, plus personal expenses",
    ],
    faqs: [
      {
        question: "How is this different from the 2-day climb?",
        answer:
          "The 3-day adds the Ngare Sero waterfalls on arrival and a Lake Natron flamingo walk on the final day, plus a more relaxed recovery afternoon after the summit — a fuller experience of the region, not just the climb.",
      },
      {
        question: "How hard is the summit climb?",
        answer:
          "Challenging — about 1,600 m of ascent over a short, steep distance to 2,962 m, taking 4–7 hours up from a midnight start. No technical climbing, but it's a real physical and mental test; the guides pace it to your group.",
      },
      {
        question: "When is the best time to go?",
        answer:
          "June–October and December–March are best for clearer, cooler conditions. The basin is extremely hot, which is why the climb is done overnight year-round.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "7-day-ol-doinyo-lengai-expedition",
    heroImage: "/images/ol-doinyo-lengai-expedition.jpg",
    destinations: ["Arusha", "Lake Natron", "Ol Doinyo Lengai"],
    category: "trekking",
    difficulty: "Challenging",
    title: "7-Day Ol Doinyo Lengai Expedition – Mountain of God",
    shortName: "7-Day Lengai Expedition",
    days: 7,
    priceFromUSD: 1250,
    priceNote:
      "Per person (2026 rates). From $1,250 budget / $1,750–2,350 mid-range / $2,800–4,200 luxury. Plus local climbing fee (~$70–100pp) and TAWA fee (~$20pp).",
    tier: ["budget", "mid-range", "comfort"],
    gallery: [],
    summary:
      "The ultimate 'Mountain of God' expedition: a week in the remote Lake Natron wilderness with Ngare Sero waterfalls, flamingo flats, deep Maasai cultural immersion, a Rift Valley acclimatization hike and a midnight summit of Ol Doinyo Lengai — followed by a relaxed recovery day. An off-the-beaten-path journey few travellers ever take.",
    highlights: [
      "A properly paced expedition with an acclimatization hike before the summit",
      "Midnight summit of Ol Doinyo Lengai (2,962 m) for sunrise",
      "Ngare Sero Waterfalls and the flamingo shores of Lake Natron",
      "Deep Maasai cultural encounters and a recovery day",
      "The only active carbonatite volcano on Earth, far from the crowds",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport and transferred to your Arusha hotel. Depending on arrival time, relax or attend a detailed briefing on the expedition ahead.",
        meals: "Dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 2,
        title: "Arusha to Lake Natron",
        description:
          "After breakfast, travel through the scenic Great Rift Valley to the remote wilderness of Lake Natron, with views of volcanic mountains, Maasai settlements and endless savannah. Arrive in the afternoon for leisure as Ol Doinyo Lengai glows against the sunset.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Camp or lodge, Lake Natron",
      },
      {
        day: 3,
        title: "Ngare Sero Waterfalls & Lake Natron",
        description:
          "A guided walk to the Ngare Sero Waterfalls, hidden in a spectacular canyon of cool streams and towering rock walls, then the flamingo-filled shores of Lake Natron in the afternoon and a cultural visit to a traditional Maasai village.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Camp or lodge, Lake Natron",
      },
      {
        day: 4,
        title: "Acclimatization Hike & Rift Valley",
        description:
          "A scenic acclimatization hike along the Rift Valley escarpment, with panoramic views over Lake Natron and the volcanic formations toward the Kenyan border. The afternoon is free to rest, hydrate and prepare gear, with a special early dinner before the summit night.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Camp or lodge, Lake Natron",
      },
      {
        day: 5,
        title: "Midnight Summit Climb of Ol Doinyo Lengai",
        description:
          "Transfer to the base around 11 PM and start the climb after midnight. A steep 5–7 hour ascent under the stars with local guides reaches the summit for sunrise — views over Lake Natron, the Rift Valley, the Ngorongoro Highlands, Mount Meru and distant Kilimanjaro. Explore the volcanic crater, then descend to the lodge for a shower, a hot meal and rest.",
        altitudeStart: 1000,
        altitudeEnd: 2962,
        hours: "5–7 hours up",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Camp or lodge, Lake Natron",
      },
      {
        day: 6,
        title: "Recovery & Cultural Day",
        description:
          "A relaxed recovery day after the summit: choose from Maasai cultural tours, a Lake Natron flamingo walk, photography excursions, nature walks or traditional Maasai dance. A farewell dinner in the evening.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Camp or lodge, Lake Natron",
      },
      {
        day: 7,
        title: "Lake Natron to Arusha — Departure",
        description:
          "After breakfast, drive back to Arusha through the spectacular Rift Valley, arriving in the afternoon for airport transfers or onward safari arrangements.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Airport transfers and private transport",
      "Professional driver-guide and local Maasai mountain guides",
      "Six nights' accommodation (budget, mid-range or luxury)",
      "All meals as per the itinerary and drinking water",
      "Lake Natron activities, Ngare Sero waterfalls and Maasai cultural experiences",
      "Government taxes",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Local village climbing fee (~$70–100pp) and TAWA fee (~$20pp)",
      "Travel insurance (trekking cover advised)",
      "Tips for guides and staff, plus personal expenses",
    ],
    faqs: [
      {
        question: "Why is this expedition seven days?",
        answer:
          "It builds in time to acclimatize and explore — waterfalls, flamingos, Maasai culture and a Rift Valley acclimatization hike before the summit, plus a recovery day after. It's the most comfortable, immersive way to experience Ol Doinyo Lengai and Lake Natron.",
      },
      {
        question: "How hard is the summit night?",
        answer:
          "Challenging — a steep 5–7 hour climb from midnight to 2,962 m. The earlier acclimatization hike and rest day help; no technical skills are needed, just fitness and determination.",
      },
      {
        question: "Can it be combined with a safari?",
        answer:
          "Yes — add a northern-circuit safari before or after, or see our 5-day Safari & Lengai combo. Ombeni can build it as one trip on WhatsApp.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  // ─────────────────────────────────────────────────────────────────
  // MOUNT MERU & KILIMANJARO DAY HIKE — more trekking options (Wave 5).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "4-day-mount-meru",
    destinations: ["Mount Meru", "Arusha"],
    category: "trekking",
    difficulty: "Challenging",
    title: "4-Day Mount Meru Climb – Momela Route",
    shortName: "4-Day Mount Meru",
    days: 4,
    priceFromUSD: 725,
    priceNote:
      "From $725 per person, all-inclusive. Includes the armed park ranger required in Arusha National Park.",
    tier: ["budget", "mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "A four-day climb of Mount Meru (4,566 m), Tanzania's second-highest peak and the ideal Kilimanjaro warm-up. The extra night over the three-day version means a more relaxed pace and better acclimatization — hut-to-hut through Arusha National Park with an armed ranger, past buffalo and giraffe, up the dramatic crater-rim ridge to a sunrise on Socialist Peak facing Kilimanjaro.",
    highlights: [
      "Better acclimatization than the 3-day, with an extra night high on the mountain",
      "Wildlife on the lower slopes — buffalo, giraffe, colobus monkeys",
      "Dramatic ridge walk along the crater rim",
      "Sunrise on Socialist Peak (4,566 m) facing Kilimanjaro",
      "Ideal high-altitude prep before a Kilimanjaro climb",
    ],
    itinerary: [
      {
        day: 1,
        title: "Momela Gate to Miriakamba Hut",
        description:
          "Drive to Arusha National Park and register at Momela Gate, then hike about 10 km with an armed ranger through open grassland — cape buffalo, giraffe and warthog — and montane forest (lunch near the Fig Tree Arch) to Miriakamba Hut, with views into the U-shaped Meru crater.",
        altitudeStart: 1500,
        altitudeEnd: 2514,
        hours: "4–7 hours",
        meals: "Lunch, dinner",
        accommodation: "Miriakamba Hut",
      },
      {
        day: 2,
        title: "Miriakamba to Saddle Hut + Little Meru",
        description:
          "A steeper climb through montane forest over Elephant Ridge to Saddle Hut, reached by lunch. In the afternoon, an optional 1–2 hour walk up Little Meru (3,820 m) for superb views and acclimatization before an early night.",
        altitudeStart: 2514,
        altitudeEnd: 3570,
        hours: "3–5 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Saddle Hut",
      },
      {
        day: 3,
        title: "Summit Socialist Peak, return to Saddle Hut",
        description:
          "A pre-dawn start (~1:30 am) up to Rhino Point and along the ash-and-rock crater rim — some scrambling — to Socialist Peak (4,566 m) for sunrise, with the crater cliffs, ash cone and Kilimanjaro above the clouds. Descend to Saddle Hut for brunch and a restful afternoon.",
        altitudeStart: 3570,
        altitudeEnd: 4566,
        hours: "8–10 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Saddle Hut",
      },
      {
        day: 4,
        title: "Saddle Hut to Momela Gate, return to Arusha",
        description:
          "Descend through forest and grassland — more wildlife along the way — to Miriakamba and on to Momela Gate, where you receive your summit certificate. Transfer back to your Arusha hotel.",
        altitudeStart: 3570,
        altitudeEnd: 1500,
        hours: "4–6 hours",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "All Arusha National Park fees (non-resident) and rescue fee",
      "Armed park ranger (required) and a professional mountain guide",
      "Porterage and hut accommodation on the mountain",
      "All meals on the trek and 2 litres of drinking water per day",
      "Trekking equipment (sleeping bag excluded) and all transfers",
      "Flying Doctors evacuation cover and government taxes",
    ],
    excluded: [
      "International flights and roundtrip airport transfer",
      "Personal climbing gear, sleeping bag and bath towels",
      "Accommodation before and after the trek",
      "Tips for guide and crew (guideline ~$30 per day)",
    ],
    faqs: [
      {
        question: "How is the 4-day different from the 3-day Mount Meru?",
        answer:
          "The 4-day adds a night so you summit on day 3 and descend on day 4, rather than summiting and descending on the same final day. The gentler pace aids acclimatization — a great choice before Kilimanjaro.",
      },
      {
        question: "Why is an armed ranger required?",
        answer:
          "Mount Meru is inside Arusha National Park, home to buffalo, elephant and giraffe on the lower slopes. Park rules require an armed ranger with every group, alongside your Trust Tours mountain guide.",
      },
      {
        question: "Is Mount Meru good preparation for Kilimanjaro?",
        answer:
          "It's the best warm-up there is — the altitude profile and distances acclimatize you well, and climbing Meru a few days before Kilimanjaro measurably improves your summit chances.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "5-day-mount-meru",
    destinations: ["Mount Meru", "Arusha"],
    category: "trekking",
    difficulty: "Challenging",
    title: "5-Day Mount Meru Climb – Comfort, with Rivertrees Lodge",
    shortName: "5-Day Mount Meru",
    days: 5,
    priceFromUSD: 0,
    priceNote:
      "Comfort climb with Rivertrees Country Inn lodge nights — per-person pricing on request.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
    gallery: [],
    summary:
      "The most relaxed way to climb Mount Meru (4,566 m): bookended by nights at the historic Rivertrees Country Inn in the foothills, with a gentle hut-to-hut ascent of the Momela Route through Arusha National Park. Wildlife on the lower slopes, the dramatic crater-rim ridge and a sunrise summit facing Kilimanjaro — at a comfortable pace, ideal as a Kilimanjaro warm-up.",
    highlights: [
      "Lodge nights at the historic Rivertrees Country Inn before and after",
      "Relaxed, well-acclimatized pace over five days",
      "Wildlife with an armed ranger on the lower slopes",
      "Optional Little Meru (3,820 m) acclimatization hike",
      "Sunrise on Socialist Peak (4,566 m) facing Kilimanjaro",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival — Rivertrees Country Inn",
        description:
          "Met at Kilimanjaro International Airport and transferred (~45 min) to Rivertrees Country Inn, a former coffee farm in the foothills of Mount Meru with gardens, a stream and a pool. Relax and prepare for the climb.",
        meals: "Dinner",
        accommodation: "Rivertrees Country Inn, Arusha",
      },
      {
        day: 2,
        title: "Momela Gate to Miriakamba Hut",
        description:
          "Register at Momela Gate and hike with an armed ranger through open grassland and montane forest — buffalo, giraffe and warthog, past the Fig Tree Arch — to Miriakamba Hut, with views into the Meru crater.",
        altitudeStart: 1500,
        altitudeEnd: 2515,
        hours: "4–7 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Miriakamba Hut",
      },
      {
        day: 3,
        title: "Miriakamba to Saddle Hut + Little Meru",
        description:
          "A shorter, steeper climb through glades and Elephant Ridge to Saddle Hut by lunch, with good views into the crater. An optional afternoon hike up Little Meru (3,820 m) aids acclimatization.",
        altitudeStart: 2515,
        altitudeEnd: 3570,
        hours: "3–4 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Saddle Hut",
      },
      {
        day: 4,
        title: "Summit Socialist Peak, return to Saddle Hut",
        description:
          "An early start (~2 am) up through bushes to bare rock and ash, via Rhino Point along the crater rim to Socialist Peak (4,566 m) for sunrise — typically 5–6 hours up and 2–3 down. Hot lunch and overnight back at Saddle Hut.",
        altitudeStart: 3570,
        altitudeEnd: 4566,
        hours: "7–9 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Saddle Hut",
      },
      {
        day: 5,
        title: "Descend to Momela Gate, return to Rivertrees",
        description:
          "Descend from Saddle Hut via Miriakamba (hot lunch) to Momela Gate to collect your summit certificate, then transfer back to Rivertrees Country Inn for a shower and a relaxing final evening.",
        altitudeStart: 3570,
        altitudeEnd: 1500,
        hours: "4–6 hours",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Rivertrees Country Inn, Arusha",
      },
    ],
    included: [
      "All Arusha National Park fees (non-resident) and rescue fee",
      "Armed park ranger and a professional mountain guide",
      "Lodge nights at Rivertrees Country Inn before and after the climb",
      "Porterage, hut accommodation and all meals on the mountain",
      "Trekking equipment (sleeping bag excluded) and all transfers",
      "Flying Doctors evacuation cover and government taxes",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Personal climbing gear and sleeping bag",
      "Tips for guide and crew (guideline ~$30 per day)",
      "Alcoholic drinks and items of a personal nature",
    ],
    faqs: [
      {
        question: "Why choose the 5-day over the 4-day Meru?",
        answer:
          "The 5-day adds comfortable lodge nights at Rivertrees Country Inn before and after, plus a gentler overall pace — the most relaxed and best-acclimatized way to climb Meru, especially as Kilimanjaro prep.",
      },
      {
        question: "How hard is the summit?",
        answer:
          "Challenging — a pre-dawn climb with some rock scrambling along the crater rim to 4,566 m, roughly 5–6 hours up. No technical skills are needed, but good fitness helps.",
      },
      {
        question: "Can I combine it with Kilimanjaro or a safari?",
        answer:
          "Yes — many climbers do Meru a few days before Kilimanjaro, or add a northern-circuit safari. Ombeni arranges it as one trip.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },

  {
    slug: "kilimanjaro-day-trip-marangu",
    destinations: ["Kilimanjaro"],
    category: "trekking",
    difficulty: "Moderate",
    title: "Kilimanjaro Day Trip – Marangu Route Rainforest Hike",
    shortName: "Kilimanjaro Day Trip",
    days: 1,
    priceFromUSD: 385,
    priceNote: "Per person. A day hike to Mandara Hut and back — no overnight or summit.",
    tier: ["budget"],
    heroImage: "",
    gallery: [],
    summary:
      "A taste of Kilimanjaro in a single day: hike the lower Marangu Route ('Coca-Cola Route') through the mountain's lush rainforest to Mandara Hut (2,700 m) and back. Perfect if you're short on time or want a Kilimanjaro experience without a multi-day climb — blue and colobus monkeys, exotic birds, and a glimpse of the snow-capped peak on a clear day.",
    highlights: [
      "Hike Kilimanjaro's UNESCO-listed rainforest in a day",
      "Reach Mandara Hut (2,700 m), the first climbers' camp",
      "Blue and colobus monkeys and Hartlaub's turaco",
      "Optional short hike to the Maundi Crater for views",
      "Certificate of participation — and inspiration to return for the summit",
    ],
    itinerary: [
      {
        day: 1,
        title: "Marangu Gate to Mandara Hut & back",
        description:
          "Early pick-up from your Moshi or Arusha hotel (~6 am) and a scenic drive to Marangu Gate (1,870 m). Register, meet your guide and hike up through dense rainforest to Mandara Hut (2,700 m) by late morning — monkeys, birds and forest views, with a packed lunch and an optional walk to the Maundi Crater. Descend to the gate for your certificate, then return to your hotel by late afternoon.",
        altitudeStart: 1870,
        altitudeEnd: 2700,
        hours: "5–6 hours hiking",
        meals: "Lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Hotel pick-up and drop-off in Moshi or Arusha",
      "Kilimanjaro National Park entry fees and permits",
      "Professional English-speaking guide",
      "Packed lunch and bottled water",
      "Certificate of participation",
    ],
    excluded: [
      "Accommodation and meals outside the day trip",
      "Tanzania visa and travel insurance",
      "Tips for your guide",
      "Personal hiking gear",
    ],
    faqs: [
      {
        question: "Do we summit Kilimanjaro on this trip?",
        answer:
          "No — this is a one-day rainforest hike to Mandara Hut and back, a taste of the mountain rather than a summit climb. For Uhuru Peak, see our 6–9 day Kilimanjaro routes.",
      },
      {
        question: "How fit do I need to be?",
        answer:
          "It's a moderate day hike on a well-maintained trail with a gentle gradient, suitable for most fitness levels — great for families and casual hikers.",
      },
      {
        question: "What should I bring?",
        answer:
          "Comfortable hiking shoes, layered clothing for changing temperatures, a small backpack, sunscreen, a hat, water and a camera.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"],
  },

  // ─────────────────────────────────────────────────────────────────
  // CULTURAL TOURS — community & heritage journeys (Wave 6).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "5-day-cultural-tour",
    destinations: ["Arusha", "Lake Manyara", "Ngorongoro"],
    category: "cultural",
    title: "5-Day Tanzania Cultural Tour – Maasai, Hadzabe & Coffee",
    shortName: "5-Day Cultural Tour",
    days: 5,
    priceFromUSD: 0,
    priceNote: "Private cultural tour — per-person pricing on request.",
    tier: ["mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "Five days meeting the people of northern Tanzania: the multicultural village of Mto wa Mbu, a Maasai boma, the Hadzabe hunter-gatherers and Datoga blacksmiths of Lake Eyasi, and the coffee farms of Karatu. Cooking classes, traditional dances, a hunt with bow and arrow and a bean-to-cup coffee tour — an immersive, respectful journey beyond the safari.",
    highlights: [
      "Mto wa Mbu village walk and a Tanzanian cooking class",
      "Maasai boma — cattle herding, beadwork and the adumu dance",
      "Hadzabe hunter-gatherers and Datoga blacksmiths at Lake Eyasi",
      "Karatu coffee plantation tour, from bean to cup",
      "Authentic community visits with an expert local guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport and transferred to Arusha, gateway to the northern circuit. An afternoon at the local market and Cultural Heritage Centre, then a traditional Tanzanian dinner — nyama choma, ugali and tropical fruits.",
        meals: "Dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 2,
        title: "Mto wa Mbu Village",
        description:
          "A guided walking tour of Mto wa Mbu, a village of over 120 ethnic groups near Lake Manyara — banana and rice farms and bustling markets — then a hands-on cooking class preparing local dishes with a host family, followed by the communal meal.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge near Lake Manyara",
      },
      {
        day: 3,
        title: "Maasai Cultural Experience",
        description:
          "A day with the Maasai: welcomed into a boma to learn about cattle herding and intricate beadwork, the deep significance of livestock, and a vibrant adumu (jumping dance) performance, with a discussion of Maasai history and modern life.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge near the Maasai lands",
      },
      {
        day: 4,
        title: "Hadzabe & Datoga at Lake Eyasi",
        description:
          "An early start to join the Hadzabe — one of Africa's last hunter-gatherer tribes — on a bow-and-arrow hunt and foraging walk, then the Datoga blacksmiths to watch tools and jewellery forged by hand. A traditional barbecue back at the lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge near Lake Eyasi",
      },
      {
        day: 5,
        title: "Karatu Coffee & Departure",
        description:
          "A morning coffee-plantation tour in Karatu — roasting and grinding your own cup — and a visit to a local school or community project, then transfer back to Arusha for your departure.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "All transfers and transport in a 4x4 with a professional guide",
      "Full-board accommodation throughout (breakfast, lunch, dinner)",
      "Entry fees to all cultural sites and villages",
      "Guided village tours, cooking class, Hadzabe and Datoga visits",
      "Coffee plantation tour and traditional dance performances",
      "Drinking water and government taxes",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Tips, souvenirs and items of a personal nature",
      "Optional activities not mentioned",
    ],
    faqs: [
      {
        question: "Is this respectful to the communities visited?",
        answer:
          "Yes — visits are arranged with the communities, entry fees support them directly, and your guide provides context so the experience is genuine and respectful rather than a performance.",
      },
      {
        question: "Can I combine it with a safari?",
        answer:
          "Absolutely — the route passes the gateways to the northern parks, so it pairs naturally with Tarangire, the Serengeti or Ngorongoro. Ombeni will build it as one trip.",
      },
      {
        question: "When is the best time to go?",
        answer:
          "Year-round. The dry months (June–October) make village travel easiest, but the cultural experiences run in every season.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"],
    oldUrl: "/booking/cultural-tours/",
  },

  {
    slug: "8-day-cultural-tour",
    destinations: ["Arusha", "Mount Meru", "Kilimanjaro"],
    category: "cultural",
    title: "8-Day Cultural Heritage Tour – Mulala, Maasai, Chagga & Hot Springs",
    shortName: "8-Day Cultural Tour",
    days: 8,
    priceFromUSD: 0,
    priceNote: "Private cultural tour — per-person pricing on request.",
    tier: ["mid-range"],
    heroImage: "",
    gallery: [],
    summary:
      "An eight-day immersion in northern Tanzania's living cultures and natural wonders: the women-run farms of Mulala village, the Kikuletwa hot springs, a full Maasai cultural day, the Materuni waterfalls and Chagga coffee on Kilimanjaro's slopes, the Maasai Steppe livestock markets, and a walking safari in Arusha National Park.",
    highlights: [
      "Mulala village — women-led farming, dairy and crafts",
      "Kikuletwa Hot Springs swim beneath Kilimanjaro",
      "Full Maasai cultural day — dance, beadwork and boma life",
      "Materuni Waterfalls and a Chagga coffee tour",
      "Walking safari in Arusha National Park",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at the airport and transferred to Arusha for an orientation on the journey ahead, an afternoon walking tour of the markets and Cultural Heritage Centre, and a traditional Tanzanian dinner.",
        meals: "Dinner",
        accommodation: "Lodge, Arusha",
      },
      {
        day: 2,
        title: "Mulala Village — Farming & Craft",
        description:
          "A day with the women-run Mulala community in the foothills of Mount Meru: traditional farming, milking and butter-making, then a craft workshop weaving baskets and beaded jewellery, supporting women's empowerment.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Arusha",
      },
      {
        day: 3,
        title: "Kikuletwa Hot Springs",
        description:
          "Drive past views of Kilimanjaro to the Kikuletwa Hot Springs, a palm-fringed oasis of crystal-clear, naturally heated water — a morning swim and a relaxed picnic lunch in the savannah.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Arusha",
      },
      {
        day: 4,
        title: "Maasai Cultural Day",
        description:
          "A full day in a Maasai village — a warriors' welcome dance, cattle-herding traditions, a beadwork session and a traditional lunch — ending with campfire storytelling under the stars.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge near the Maasai lands",
      },
      {
        day: 5,
        title: "Materuni Waterfalls & Chagga Coffee",
        description:
          "To the Chagga villages on Kilimanjaro's slopes: a hike through banana and coffee plantations to the Materuni Waterfall for a swim, then a traditional Chagga coffee experience from picking to roasting over an open fire.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Moshi",
      },
      {
        day: 6,
        title: "Maasai Steppe & Local Markets",
        description:
          "Visit the Maasai Steppe and a lively livestock market where herders trade cattle and goods, then a Maasai boma to learn about manyatta homes, family life and traditions.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Arusha",
      },
      {
        day: 7,
        title: "Arusha National Park & Community Project",
        description:
          "A walking safari in Arusha National Park — giraffe, zebra and buffalo on foot with a ranger — then a visit to a community project (school or women's group) to see how tourism supports local development. A farewell dinner.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Arusha",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "A leisurely morning and, time permitting, a final stroll for souvenirs before your transfer to the airport.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "7 nights' full-board mid-range lodge accommodation",
      "Private 4x4 with pop-up roof and a professional English-speaking guide",
      "All park, village entry fees and community-project contributions",
      "Cultural visits — Maasai, Chagga, Mulala — with hands-on activities",
      "Materuni waterfalls, coffee tour, hot springs and a walking safari",
      "Drinking water throughout",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel insurance (recommended for all travellers)",
      "Tips, souvenirs and items of a personal nature",
      "Optional activities not mentioned",
    ],
    faqs: [
      {
        question: "How is this different from the 5-day cultural tour?",
        answer:
          "The 8-day adds Mulala village, the Kikuletwa hot springs, the Materuni waterfalls and Chagga coffee, the Maasai Steppe markets and an Arusha NP walking safari — a broader, more relaxed cultural and nature immersion.",
      },
      {
        question: "Is it physically demanding?",
        answer:
          "Mostly gentle — village walks, a waterfall hike and an easy walking safari. Suitable for most fitness levels; tell us of any needs and we'll adjust.",
      },
      {
        question: "Does it support local communities?",
        answer:
          "Yes — visits, entry fees and community-project contributions go directly to the villages and initiatives you experience.",
      },
    ],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"],
  },

  // ─────────────────────────────────────────────────────────────────
  // PARAMOTORING — aerial adventures over Tanzania (Wave 6).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "3-day-paramotoring-arusha-kilimanjaro",
    destinations: ["Arusha", "Mount Meru", "Kilimanjaro"],
    category: "paramotoring",
    title: "3-Day Paramotoring Adventure – Arusha & Mount Kilimanjaro",
    shortName: "3-Day Paramotoring",
    days: 3,
    priceFromUSD: 0,
    priceNote:
      "Per person — pricing on request. Flights are weather-dependent and flown at dawn and dusk.",
    tier: ["comfort"],
    heroImage: "",
    gallery: [],
    summary:
      "Three days soaring over northern Tanzania on a paramotor: glide above Arusha's coffee farms and the volcanic ridges of Mount Meru, over the Momella Lakes and Ngurdoto Crater, and toward the snow-capped crown of Kilimanjaro. Flown in the calm, golden hours of dawn and dusk, with a luxury base at the Sheraton Arusha — for first-time flyers and seasoned adventurers alike.",
    highlights: [
      "Paramotor flights over Mount Meru, Momella Lakes and Ngurdoto Crater",
      "A morning flight toward Kilimanjaro and the Amboseli plains",
      "Sunset flights over the Moshi region and Kilimanjaro",
      "Calm dawn and dusk flying for the best light and conditions",
      "Luxury base at the Sheraton Arusha",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Introductory Flight",
        description:
          "Arrive at Kilimanjaro International Airport, met by your guide and transferred to the Sheraton Arusha. Settle in with an introductory flight and briefing, then dinner — Arusha's 1,400 m elevation gives a refreshing climate for your first evening.",
        meals: "Lunch, dinner",
        accommodation: "Sheraton Hotel, Arusha",
      },
      {
        day: 2,
        title: "Arusha National Park & Mount Meru",
        description:
          "A dawn transfer for a ~6 am flight over Arusha National Park and Mount Meru — lush forests, volcanic craters and the Momella Lakes with their flamingos. An evening flight over the serene Ngurdoto Crater, the 'Crater of Life', as the sun sets over Meru.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Sheraton Hotel, Arusha",
      },
      {
        day: 3,
        title: "Mount Kilimanjaro & Surrounding Plains",
        description:
          "A morning flight toward Kilimanjaro's southern slopes and the vast plains toward Amboseli — the snow-capped peak (when visible) and wildlife grazing below. A final sunset flight over the Moshi region with Kilimanjaro silhouetted against the sky.",
        meals: "Breakfast, lunch",
        accommodation: "—",
      },
    ],
    included: [
      "Paramotoring flights as per the itinerary with experienced pilots",
      "Accommodation at the Sheraton Arusha",
      "All transfers to and from launch sites and the airport",
      "Meals as specified and drinking water",
      "Safety briefing and equipment",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel and adventure-sports insurance",
      "Tips and personal expenses",
      "Flights missed due to weather (rescheduled where possible)",
    ],
    faqs: [
      {
        question: "Do I need experience to fly?",
        answer:
          "No — flights are flown in tandem with experienced pilots, so first-timers are welcome. Seasoned flyers can discuss solo options with the team.",
      },
      {
        question: "What if the weather is bad?",
        answer:
          "Paramotoring is weather-dependent and flown only in safe, calm conditions (dawn and dusk). If a flight can't go ahead it's rescheduled where possible.",
      },
      {
        question: "Can it be extended with a safari?",
        answer:
          "Yes — see our 12-day paramotoring safari, which adds Tarangire, Ngorongoro, Lake Natron and the Serengeti, or we can add game drives to this trip.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb", "Mar"],
  },

  {
    slug: "12-day-paramotoring-safari",
    heroImage: "/images/aerial-balloon.jpg",
    destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Ol Doinyo Lengai", "Lake Natron"],
    category: "paramotoring",
    title: "12-Day Paramotoring Safari & Location Discovery",
    shortName: "12-Day Paramotoring Safari",
    days: 12,
    priceFromUSD: 0,
    priceNote:
      "Per person — pricing on request. Aerial flights are weather-dependent; game drives run regardless.",
    tier: ["comfort"],
    gallery: [],
    summary:
      "The ultimate aerial safari: twelve days combining paramotor flights and 4x4 game drives across northern Tanzania — Mount Meru and Kilimanjaro, Tarangire, the Ngorongoro Crater, the active Ol Doinyo Lengai volcano and Lake Natron, and the Serengeti's endless plains. See the Great Migration, baobabs and calderas from the sky, then meet the wildlife on the ground.",
    highlights: [
      "Paramotor flights over Meru, Kilimanjaro, Ngorongoro and the Serengeti",
      "Sunrise flight over Ol Doinyo Lengai and the pink flats of Lake Natron",
      "Big Five game drives in Tarangire, Ngorongoro and the Serengeti",
      "The Great Migration from the air and the ground (in season)",
      "Handpicked lodges and a balanced mix of adventure and rest",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Met at Kilimanjaro International Airport with an introductory paramotor flight, then transferred to your Arusha hotel to relax and recharge ahead of the adventure.",
        meals: "Dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 2,
        title: "Mount Meru & Kilimanjaro Zone Flights",
        description:
          "Dawn and dusk flights over Mount Meru, the Momella Lakes and toward Kilimanjaro, taking in the volcanic ridges, forests and waterfalls of the region from the air.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 3,
        title: "Tarangire National Park",
        description:
          "Explore Tarangire by 4x4 and, from the surrounding ridges, by paramotor — elephant herds, baobabs and the silver thread of the Tarangire River from above. Overnight near Karatu.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Karatu",
      },
      {
        day: 4,
        title: "Ngorongoro Crater & Highlands",
        description:
          "A scenic flight near the Ngorongoro rim for surreal views over the caldera, then a game drive on the crater floor among lions, rhinos, elephants and buffalo.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Karatu",
      },
      {
        day: 5,
        title: "Ol Doinyo Lengai & Lake Natron",
        description:
          "A bucket-list sunrise flight near the active Ol Doinyo Lengai volcano and the pink salt flats of Lake Natron, with flamingos and hidden waterfalls below, plus time to explore Natron on the ground.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Camp near Lake Natron",
      },
      {
        day: 6,
        title: "Journey to the Serengeti",
        description:
          "Travel into the legendary Serengeti, home of the Great Migration, with an afternoon game drive as an introduction to the endless plains.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
      },
      {
        day: 7,
        title: "Serengeti — Full-Day Safari & Dawn Flight",
        description:
          "A dawn paramotor flight over the Seronera plains as the wilderness awakens, then a full day of game viewing — lions, cheetahs and the migration herds.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
      },
      {
        day: 8,
        title: "Serengeti — Grumeti & Seronera",
        description:
          "Morning and evening flights tracing the Grumeti River and the Seronera grasslands — riverine forest, hippos and golden plains — between game drives.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
      },
      {
        day: 9,
        title: "Serengeti Farewell to Karatu",
        description:
          "A final Serengeti morning drive, then the journey back toward Karatu for a relaxed evening in a cosy lodge.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Lodge, Karatu",
      },
      {
        day: 10,
        title: "Return to Arusha",
        description:
          "A leisurely drive back to Arusha with optional stops at local markets or cultural sites for souvenirs and reflection.",
        meals: "Breakfast, lunch, dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 11,
        title: "Free Day in Arusha",
        description:
          "A rest day — relax at the hotel, arrange a spa treatment, or explore Arusha's cafes and craft shops before your journey home.",
        meals: "Breakfast, dinner",
        accommodation: "Hotel, Arusha",
      },
      {
        day: 12,
        title: "Departure",
        description:
          "Breakfast at the hotel and, depending on your flight, free time before your private transfer to Kilimanjaro International Airport.",
        meals: "Breakfast",
        accommodation: "—",
      },
    ],
    included: [
      "Paramotoring flights as per the itinerary with experienced pilots",
      "Private 4x4 game drives with a professional guide",
      "Handpicked lodge and camp accommodation",
      "All park, crater and conservation fees",
      "Meals as specified, drinking water and all transfers",
      "Safety briefings and flight equipment",
    ],
    excluded: [
      "International flights and Tanzania visa fees",
      "Travel and adventure-sports insurance",
      "Tips, souvenirs and personal expenses",
      "Flights missed due to weather (rescheduled where possible)",
    ],
    faqs: [
      {
        question: "Are the flights guaranteed every day?",
        answer:
          "Flights are weather-dependent and flown only in safe, calm conditions at dawn and dusk; the ground safari runs regardless, so you always have a full programme.",
      },
      {
        question: "Do I need flying experience?",
        answer:
          "No — flights are tandem with experienced pilots, suitable for beginners. The game drives need no special fitness.",
      },
      {
        question: "When is the best time for this trip?",
        answer:
          "June–October for stable flying and the northern migration; December–March for the Ndutu calving and greener landscapes. Mornings offer the calmest air and best light.",
      },
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  },
];

export const getPackage = (slug: string) =>
  packages.find((p) => p.slug === slug);

export const byCategory = (c: TripPackage["category"]) =>
  packages.filter((p) => p.category === c);

// ─────────────────────────────────────────────────────────────────
// SAFARIS UMBRELLA — the five public-facing safari categories.
// Every safari-type itinerary lives in exactly ONE of these buckets.
// This is a pure classification layer over `packages`; it never changes
// a trip's `category` or its detail URL (those drive routing/SEO).
//
// Assignment rules (first match wins, so each trip lands in one bucket):
//   1. honeymoon  — any trip tagged "honeymoon" (romance wins over theme)
//   2. cultural   — category "cultural"
//   3. paramotoring — category "paramotoring"
//   4. migration  — safari trips built around the Great Migration / calving
//                    season (slug listed in MIGRATION_SAFARI_SLUGS)
//   5. big-five   — every other safari trip (general game-drive circuits)
// ─────────────────────────────────────────────────────────────────
export type SafariCategoryId =
  | "big-five"
  | "migration"
  | "honeymoon"
  | "cultural"
  | "paramotoring";

// Safari-category trips centred on the migration or calving season.
// Honeymoon-tagged trips are intentionally excluded (they go to Honeymoon).
const MIGRATION_SAFARI_SLUGS = new Set<string>([
  "7-day-great-migration-safari",
  "8-day-great-migration-safari",
  "7-day-photography-cultural-safari",
  "11-day-bird-photography-safari",
  "10-day-serengeti-calving-safari",
  "6-day-calving-safari",
  "4-day-private-ndutu-calving-safari",
  "5-day-ndutu-migration-safari",
  // NOTE: 10-day-kenya-safari (broad Kenya parks circuit) and
  // 3-day-serengeti-balloon-zanzibar (Zanzibar add-on, no migration focus)
  // intentionally live in Big Five, not Migration.
]);

// Returns the single safari-umbrella bucket a trip belongs to, or null
// for trips that don't belong under Safaris at all (kilimanjaro, trekking,
// pure zanzibar beach trips without a honeymoon tag).
export const safariCategoryOf = (p: TripPackage): SafariCategoryId | null => {
  if (p.tags?.includes("honeymoon")) return "honeymoon";
  if (p.category === "cultural") return "cultural";
  if (p.category === "paramotoring") return "paramotoring";
  if (p.category === "safari") {
    return MIGRATION_SAFARI_SLUGS.has(p.slug) ? "migration" : "big-five";
  }
  return null;
};

export const bySafariCategory = (id: SafariCategoryId) =>
  packages
    .filter((p) => safariCategoryOf(p) === id)
    .sort((a, b) => a.days - b.days);

// Display metadata for each bucket — consumed by the nav dropdown and the
// /safaris landing page so labels/order/copy stay in one place.
export interface SafariCategoryMeta {
  id: SafariCategoryId;
  label: string;
  href: string; // landing anchor or dedicated page
  tagline: string;
  blurb: string;
}

export const SAFARI_CATEGORIES: SafariCategoryMeta[] = [
  {
    id: "big-five",
    label: "Big Five Safari",
    href: "/safaris#big-five",
    tagline: "Lion · Leopard · Elephant · Buffalo · Rhino",
    blurb:
      "Classic private game drives across Tarangire, Lake Manyara, the Ngorongoro Crater and the Serengeti — the surest way to see Africa's Big Five.",
  },
  {
    id: "migration",
    label: "Migration Safari",
    href: "/safaris#migration",
    tagline: "River crossings · Calving season · Endless herds",
    blurb:
      "Timed to the Great Migration and the Ndutu calving season — follow the wildebeest and zebra across the Serengeti plains and into the Maasai Mara.",
  },
  {
    id: "honeymoon",
    label: "Honeymoon",
    href: "/honeymoon",
    tagline: "Romance · Safari · Indian Ocean",
    blurb:
      "Private safaris paired with the white sands of Zanzibar — candlelit bush dinners, sunrise balloon flights and sundowners for two.",
  },
  {
    id: "cultural",
    label: "Cultural",
    href: "/cultural",
    tagline: "Maasai · Hadzabe · Chagga · Datoga",
    blurb:
      "Meet the people of Tanzania — herd with the Maasai, hunt with the Hadzabe at Lake Eyasi and roast coffee with the Chagga on Kilimanjaro's slopes.",
  },
  {
    id: "paramotoring",
    label: "Paramotoring",
    href: "/paramotoring",
    tagline: "Kilimanjaro · Rift Valley · Serengeti — from the air",
    blurb:
      "See Tanzania as almost no one does — glide on a paramotor over Kilimanjaro, the Great Rift Valley and the wildlife-dotted Serengeti plains.",
  },
];
