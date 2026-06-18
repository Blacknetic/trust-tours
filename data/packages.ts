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
] as const;
export type Destination = (typeof DESTINATIONS)[number];

export interface TripPackage {
  slug: string;
  category: "kilimanjaro" | "safari" | "trekking" | "zanzibar";
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
}

export const packages: TripPackage[] = [
  // ─────────────────────────────────────────────────────────────────
  // FLAGSHIP — fully written. Template for all others.
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "7-day-machame-route",
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
          "Industry data puts 7-day Machame success around 85–90%, well above the 5-day routes. The extra day at altitude is the single biggest factor. (Confirm Trust Tours' own number with Ombeni.)",
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
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    summitSuccessRate: "ASK_OMBENI",
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
    heroImage: "/Kilimanjaro/FB_IMG_1453367302817.jpg",
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
    // INTERIM low-res photo from Ombeni's archive — replace with a hi-res shot.
    heroImage: "/Kilimanjaro/FB_IMG_1482843312910.jpg",
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
    // INTERIM low-res photo from Ombeni's archive — replace with a hi-res shot.
    heroImage: "/Kilimanjaro/Kilimanjaro-kibo.jpg",
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
    slug: "7-day-great-migration-safari",
    destinations: ["Tarangire", "Serengeti", "Ngorongoro"],
    category: "safari",
    title: "7-Day Great Migration Safari – Tarangire, Serengeti & Ngorongoro",
    shortName: "7-Day Migration Safari",
    days: 7,
    priceFromUSD: 2200,
    priceNote:
      "Per person, sharing, group of 2+. From $2,200 budget / $2,800 mid-range camps and lodges.",
    tier: ["budget", "mid-range"],
    heroImage: "/images/safari-acacia-sunset.jpg",
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
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "8-Day Great Migration Safari – Tarangire, Ngorongoro & Serengeti",
    shortName: "8-Day Migration Safari",
    days: 8,
    priceFromUSD: 3250,
    priceNote:
      "Per person, sharing. From $3,250 (3-star) / $3,950 (4-star lodges & camps). Best July–October for the Mara crossings.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
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
    heroImage: "",
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
    destinations: ["Kenya"],
    category: "safari",
    title: "10-Day Kenya Safari – Amboseli, Lake Naivasha & the Maasai Mara",
    shortName: "10-Day Kenya Safari",
    days: 10,
    priceFromUSD: 0,
    priceNote: "Private Kenya safari — per-person pricing on request.",
    tier: ["mid-range"],
    heroImage: "",
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

  // ─────────────────────────────────────────────────────────────────
  // ZANZIBAR — standalone beach escapes (Wave 2, from Ombeni's PDFs).
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "4-day-zanzibar-escape",
    destinations: ["Zanzibar"],
    category: "zanzibar",
    title: "4-Day Zanzibar Escape – Stone Town, Mnemba & Sea Turtles",
    shortName: "4-Day Zanzibar",
    days: 4,
    priceFromUSD: 1708,
    priceNote:
      "Per person, sharing. From $1,708 mid-range / $2,204 luxury beachfront. Includes a one-way flight to Zanzibar.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
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
    title: "5-Day Zanzibar Beach & Culture Escape",
    shortName: "5-Day Zanzibar",
    days: 5,
    priceFromUSD: 1708,
    priceNote:
      "Per person, sharing. From $1,708 mid-range / $2,804 luxury beachfront.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
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
    heroImage: "",
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
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "5-Day Luxury Safari – Tarangire, Ngorongoro & Serengeti (fly-out)",
    shortName: "5-Day Luxury Safari",
    days: 5,
    priceFromUSD: 2499,
    priceNote:
      "Per person, sharing. From $2,499 mid-range / $3,666 luxury. Includes the scenic return flight from the Serengeti.",
    tier: ["mid-range", "comfort"],
    heroImage: "",
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
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    category: "safari",
    title: "5-Day Calving-Season Safari – Tarangire, Ngorongoro & Ndutu",
    shortName: "5-Day Ndutu Migration",
    days: 5,
    priceFromUSD: 3760,
    priceNote:
      "Per person, all-inclusive. From $3,760 standard / $4,599 luxury lodges. Reduced rate for kids 14–16 (from $2,795).",
    tier: ["mid-range", "comfort"],
    heroImage: "",
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
    heroImage: "",
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
    title: "4-Day Balloon Safari – Serengeti & Ngorongoro Crater",
    shortName: "4-Day Balloon Safari",
    days: 4,
    priceFromUSD: 2218,
    priceNote:
      "Per person, sharing, midrange. Includes a sunrise hot air balloon flight.",
    tier: ["mid-range", "comfort"],
    heroImage: "/images/safari-sunset-acacia.jpg",
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
];

export const getPackage = (slug: string) =>
  packages.find((p) => p.slug === slug);

export const byCategory = (c: TripPackage["category"]) =>
  packages.filter((p) => p.category === c);
