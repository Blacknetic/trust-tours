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
  // ZANZIBAR — standalone beach escapes (Wave 2, from Ombeni's PDFs).
  // ─────────────────────────────────────────────────────────────────
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
