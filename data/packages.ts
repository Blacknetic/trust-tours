// data/packages.ts — SINGLE SOURCE OF TRUTH for all trips.
// Pages, JSON-LD schema, WhatsApp messages, and the elevation animation all read from here.

export type Tier = "budget" | "mid-range" | "comfort";

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

export interface TripPackage {
  slug: string;
  category: "kilimanjaro" | "safari" | "trekking" | "zanzibar";
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
  reviewSnippets?: { author: string; text: string; source: string }[];
  oldUrl?: string;
}

export const packages: TripPackage[] = [
  // ─────────────────────────────────────────────────────────────────
  // FLAGSHIP — fully written. Template for all others.
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "7-day-machame-route",
    category: "kilimanjaro",
    title: "7-Day Kilimanjaro Climb – Machame Route",
    shortName: "7-Day Machame",
    days: 7,
    priceFromUSD: 2380,
    priceNote:
      "Per person, sharing, group of 2+. Final price depends on group size and season.",
    tier: ["mid-range"],
    heroImage: "/images/kilimanjaro-machame-summit-sunrise.webp",
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
    category: "kilimanjaro",
    title: "9-Day Kilimanjaro Climb – Northern Circuit Route",
    shortName: "9-Day Northern Circuit",
    days: 9,
    priceFromUSD: 2497,
    priceNote: "Per person, sharing, group of 2+.",
    tier: ["mid-range"],
    heroImage: "/images/kilimanjaro-northern-circuit.webp",
    gallery: [],
    summary:
      "The Northern Circuit is Kilimanjaro's longest and quietest route, circling the mountain's remote northern slopes with the highest summit success rate of any route thanks to nine days of acclimatization.",
    highlights: [
      "Highest success rate of all routes",
      "Quietest trails on the mountain",
      "360° circuit of Kibo",
    ],
    itinerary: [],
    included: [],
    excluded: [],
    faqs: [],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl:
      "/booking/9-days-climb-mount-kilimanjaro-with-the-best-northern-circuit-route-trust-tours-and-safaris/",
  },

  {
    slug: "8-day-lemosho-route",
    category: "kilimanjaro",
    title: "8-Day Kilimanjaro Climb – Lemosho Route",
    shortName: "8-Day Lemosho",
    days: 8,
    priceFromUSD: 0, // ASK_OMBENI
    priceNote: "Per person, sharing.",
    tier: ["mid-range"],
    heroImage: "/images/kilimanjaro-lemosho-shira-plateau.webp",
    gallery: [],
    summary:
      "Lemosho approaches from the west across the wild Shira Plateau, combining superb scenery with an 8-day profile that delivers one of the best success rates on Kilimanjaro.",
    highlights: [
      "Most scenic western approach",
      "Excellent acclimatization",
      "Low traffic on early days",
    ],
    itinerary: [],
    included: [],
    excluded: [],
    faqs: [],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl: "/booking/CONFIRM/",
  },

  {
    slug: "5-day-marangu-route",
    category: "kilimanjaro",
    title: "5-Day Kilimanjaro Climb – Marangu Route",
    shortName: "5-Day Marangu",
    days: 5,
    priceFromUSD: 1799,
    priceNote: "Per person, sharing. Hut accommodation, not tents.",
    tier: ["budget"],
    heroImage: "/images/kilimanjaro-marangu-huts.webp",
    gallery: [],
    summary:
      "Marangu — the 'Coca-Cola route' — is the only Kilimanjaro route with hut accommodation and the most affordable way to attempt the summit. Best for confident hikers on a budget; consider adding a 6th day to improve success odds.",
    highlights: [
      "Sleep in huts, not tents",
      "Lowest cost route",
      "Gentlest gradients",
    ],
    itinerary: [],
    included: [],
    excluded: [],
    faqs: [],
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl: "/booking/CONFIRM/",
  },

  {
    slug: "7-day-great-migration-safari",
    category: "safari",
    title: "7-Day Great Migration Safari – Tarangire, Serengeti & Ngorongoro",
    shortName: "7-Day Migration Safari",
    days: 7,
    priceFromUSD: 0, // ASK_OMBENI
    priceNote: "Per person, sharing, group of 2+. Budget & mid-range camps.",
    tier: ["budget", "mid-range"],
    heroImage: "/images/serengeti-migration-river-crossing.webp",
    gallery: [],
    summary:
      "Track the Great Wildebeest Migration across the Serengeti with game drives in Tarangire and a full day inside the Ngorongoro Crater — seven days covering northern Tanzania's big three parks in a private 4x4 with pop-up roof.",
    highlights: [
      "Timed to migration river crossings (Jul–Sep)",
      "Full-day Ngorongoro Crater descent",
      "Private 4x4 with pop-up roof",
    ],
    itinerary: [],
    included: [],
    excluded: [],
    faqs: [],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    oldUrl:
      "/booking/7-day-6-night-lower-budget-and-mid-range-safari-tracking-the-great-migration-crossing-with-trust-tours-and-safaris/",
  },

  {
    slug: "10-day-safari-zanzibar",
    category: "safari",
    title: "10-Day Tanzania Safari & Zanzibar Beach Escape",
    shortName: "10-Day Safari + Zanzibar",
    days: 10,
    priceFromUSD: 0, // ASK_OMBENI
    priceNote: "Per person, sharing.",
    tier: ["mid-range"],
    heroImage: "/images/zanzibar-beach-dhow-sunset.webp",
    gallery: [],
    summary:
      "The complete Tanzania trip: Tarangire and Ngorongoro game drives followed by flights to Zanzibar for Stone Town and white-sand beaches — safari adrenaline and Indian Ocean recovery in one seamless itinerary.",
    highlights: [
      "Safari + beach in one booking",
      "Stone Town cultural tour",
      "Internal flights arranged",
    ],
    itinerary: [],
    included: [],
    excluded: [],
    faqs: [],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Jan", "Feb"],
    oldUrl: "/booking/CONFIRM/",
  },

  {
    slug: "4-day-mount-meru-trek",
    category: "trekking",
    title: "4-Day Mount Meru Climb – Socialist Peak",
    shortName: "4-Day Mount Meru",
    days: 4,
    priceFromUSD: 0, // ASK_OMBENI
    priceNote:
      "Per person, sharing. Includes armed ranger (required in Arusha NP).",
    tier: ["budget", "mid-range"],
    heroImage: "/images/mount-meru-summit-kilimanjaro-view.webp",
    gallery: [],
    summary:
      "Mount Meru (4,566 m) is Tanzania's second-highest peak and the perfect Kilimanjaro warm-up — a 4-day hut-to-hut trek through Arusha National Park with giraffes on the trail and a summit sunrise facing Kilimanjaro.",
    highlights: [
      "Ideal Kilimanjaro acclimatization",
      "Wildlife on the trail with armed ranger",
      "Sunrise summit view of Kilimanjaro",
    ],
    itinerary: [],
    included: [],
    excluded: [],
    faqs: [],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    oldUrl: "/booking/CONFIRM/",
  },
];

export const getPackage = (slug: string) =>
  packages.find((p) => p.slug === slug);

export const byCategory = (c: TripPackage["category"]) =>
  packages.filter((p) => p.category === c);
