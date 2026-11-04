// data/packages.ts — SINGLE SOURCE OF TRUTH for all trips.
// Pages, JSON-LD schema, WhatsApp messages, and the elevation animation all read from here.

import type { ComfortLevel, GroupPricing } from "@/lib/pricing";
import { KILIMANJARO_PACKAGES } from "@/data/kilimanjaro";
import type { StayChoice } from "@/data/accommodations";
import type { ClimbLinks } from "@/data/kilimanjaro/links";
import { SAFARI_PACKAGES } from "@/data/safaris";
import { DAY_TRIP_PACKAGES } from "@/data/day-trips";
import { ZANZIBAR_PACKAGES } from "@/data/zanzibar";
import { FLY_IN_PACKAGES } from "@/data/fly-in";
import { MERU_PACKAGES } from "@/data/meru";
import { COMBO_PACKAGES } from "@/data/combo";
import { travelTimeOf } from "@/lib/safari-filter";
import type { SafariTypeId, TripFacets, ZanzibarAreaId, ZanzibarTypeId } from "@/lib/safari-filter";

export type Tier = "budget" | "mid-range" | "comfort";

// Kilimanjaro route difficulty bucket — drives the difficulty filter pills.
export type Difficulty = "Moderate" | "Challenging" | "Tough";

export interface ContentImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ContentTable {
  caption?: string;
  headers: string[];
  rows: string[][];
  // Optional page per row; the row's first cell links to it.
  rowLinks?: (string | undefined)[];
}

// A free-form block of long-form page content ("Is this route right for you?",
// "Accommodation on the mountain", "Safety and acclimatisation", …).
// Bullets written as "Label: detail" render the label in bold.
export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: ContentTable;
  images?: ContentImage[];
  // Highlighted note shown after the section body.
  note?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  // Paragraphs separated by a blank line ("\n\n").
  description: string;
  image?: ContentImage;
  // One-line summary of the day ("Day 1 experience: …").
  experience?: string;
  // Highlighted safety or practical notes for the day.
  notes?: string[];
  // What is and isn't covered on this particular day.
  dayIncluded?: string[];
  dayExcluded?: string[];
  altitudeStart?: number;
  altitudeEnd?: number;
  // Highest point reached during the day when it differs from where you sleep
  // (e.g. Lava Tower on a climb-high, sleep-low day).
  altitudeMax?: number;
  // A number, or a range as Ombeni writes it ("10–11").
  distanceKm?: number | string;
  hours?: string;
  // Clock time shown in place of "Day N" on one-day trips, e.g. "6:00 am".
  time?: string;
  meals: string;
  accommodation: string;
  // A `stayChoices` id; links the overnight to that stop's choices on the page.
  stayId?: string;
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
  "Nyerere",
  "Mafia Island",
] as const;
export type Destination = (typeof DESTINATIONS)[number];

export interface TripPackage {
  slug: string;
  category: "kilimanjaro" | "safari" | "trekking" | "zanzibar" | "cultural" | "paramotoring";
  // Places this trip visits — drives the finder's Destination filter.
  destinations: Destination[];
  title: string;
  shortName: string;
  // Days on the mountain / of touring. Hotel nights wrapped around a climb are
  // counted separately in `hotelNights`.
  days: number;
  hotelNights?: number;
  priceFromUSD: number;
  priceNote: string;
  // Group-size rate card. When set, the page renders the price table and the
  // booking box's group selector, and `priceFromUSD` must equal the 1-person
  // tier: the headline price shown on cards and in the hero is the solo rate,
  // with the cheaper group rates shown alongside. See lib/pricing.ts.
  groupPricing?: GroupPricing;
  // The same trip at several levels, each with its own rates. Used instead of
  // `groupPricing`; `priceFromUSD` must equal the lowest level's headline rate.
  comfortLevels?: ComfortLevel[];
  // Ids from data/addons.ts offered in the booking box.
  addOns?: string[];
  // Where visitors choose their stays, stop by stop (data/accommodations.ts).
  stayChoices?: StayChoice[];
  // Guides and related trips linked from each section of the page.
  links?: ClimbLinks;
  tier: Tier[];
  heroImage: string;
  gallery: string[];
  summary: string;
  // Long-form introduction shown under the summary on the trip page.
  overview?: string[];
  overviewImage?: ContentImage;
  // Key facts box, e.g. { label: "Highest point", value: "Uhuru Peak, 5,895 m" }.
  atAGlance?: { label: string; value: string }[];
  highlights: string[];
  // Long-form explanation shown with the price table ("How the prices work").
  pricingDetails?: string[];
  pricingImage?: ContentImage;
  itinerary: ItineraryDay[];
  // Inclusions/exclusions; "Label: detail" renders the label in bold.
  included: string[];
  excluded: string[];
  // Long-form sections rendered after inclusions and before the FAQs.
  sections?: ContentSection[];
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
  // Kilimanjaro climbs live in data/kilimanjaro.ts (rebuilt from Ombeni's 2027–2028 docs).
  ...KILIMANJARO_PACKAGES,
  // Safaris rebuilt from Ombeni's documents live in data/safaris.
  ...SAFARI_PACKAGES,
  // Day trips and short safaris rebuilt from Ombeni's documents live in data/day-trips.
  ...DAY_TRIP_PACKAGES,
  // Zanzibar holidays rebuilt from Ombeni's documents live in data/zanzibar.
  ...ZANZIBAR_PACKAGES,
  ...FLY_IN_PACKAGES,
  ...MERU_PACKAGES,
  ...COMBO_PACKAGES,

  // ─────────────────────────────────────────────────────────────────
  // SAFARIS — longer migration trips & multi-region combos (Wave 3).
  // ─────────────────────────────────────────────────────────────────
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
    tags: ["calving"],
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
    tags: ["family"],
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

  // ─────────────────────────────────────────────────────────────────
  // OL DOINYO LENGAI — "Mountain of God" active volcano treks (Wave 4).
  // ─────────────────────────────────────────────────────────────────
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
  | "day-trips"
  | "fly-in"
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
  "3-day-ndutu-calving-safari",
  "4-day-cross-migration-safari",
  "5-day-cross-migration-safari",
  "5-day-great-migration-safari",
  "6-day-cross-migration-safari",
  "7-day-manyara-serengeti-migration-safari",
  "8-day-mara-river-crossing-safari",
  "9-day-great-migration-safari",
  "4-day-tarangire-ndutu-ngorongoro-safari",
  "6-day-ndutu-great-migration-safari",
  "7-day-ndutu-calving-safari",
  "8-day-ndutu-calving-safari",
  "9-day-calving-migration-safari",
  // NOTE: 10-day-kenya-safari (broad Kenya parks circuit) and
  // 3-day-serengeti-balloon-zanzibar (Zanzibar add-on, no migration focus)
  // intentionally live in Big Five, not Migration.
]);

// Returns the single safari-umbrella bucket a trip belongs to, or null
// for trips that don't belong under Safaris at all (kilimanjaro, trekking,
// pure zanzibar beach trips without a honeymoon tag).
export const safariCategoryOf = (p: TripPackage): SafariCategoryId | null => {
  if (p.tags?.includes("honeymoon")) return "honeymoon";
  // Day trips include a Kilimanjaro hike and a volcano climb, which keep
  // their /trekking pages but are listed with the other day trips.
  if (p.tags?.includes("day-trip")) return "day-trips";
  if (p.tags?.includes("fly-in")) return "fly-in";
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

// Everything the /safaris sidebar filters on. Unlike the single bucket above, a
// trip can carry several types: a Zanzibar add-on doesn't stop it being Big Five.
export const safariFacets = (p: TripPackage): TripFacets => {
  const bucket = safariCategoryOf(p);
  const types: SafariTypeId[] = bucket ? [bucket] : [];
  if (p.destinations.includes("Zanzibar")) types.push("zanzibar");
  if (p.tags?.includes("family")) types.push("family");
  if (p.tags?.includes("cross-migration")) types.push("cross-migration");
  if (p.tags?.includes("calving")) types.push("calving");
  if (p.tags?.includes("fly-in") && bucket !== "fly-in") types.push("fly-in");
  return { slug: p.slug, values: { type: types, days: [travelTimeOf(p.days)] } };
};

// Zanzibar stop ids in `stayChoices` and the part of the island each covers.
const ZANZIBAR_STOP_AREAS: Record<string, ZanzibarAreaId[]> = {
  "stone-town": ["stone-town"],
  "north-coast": ["north-coast"],
  "east-coast": ["east-coast"],
  zanzibar: ["east-coast"], // the 20-day honeymoon's single island stop
  "zanzibar-beach": ["north-coast", "east-coast"], // guests choose the coast
};

// Everything the /zanzibar sidebar filters on. Older combos without a stay
// chooser carry no area, so they drop out once an area is ticked.
export const zanzibarFacets = (p: TripPackage): TripFacets => {
  const types: ZanzibarTypeId[] = [p.category === "zanzibar" ? "island" : "safari"];
  if (p.tags?.includes("honeymoon")) types.push("honeymoon");
  const areas = [
    ...new Set(
      (p.stayChoices ?? []).flatMap((s) => ZANZIBAR_STOP_AREAS[s.id] ?? []),
    ),
  ];
  return { slug: p.slug, values: { type: types, stay: areas, days: [travelTimeOf(p.days)] } };
};

// Island holidays, then the safaris that finish on Zanzibar, shortest first.
export const zanzibarIslandTrips = () =>
  packages.filter((p) => p.category === "zanzibar").sort((a, b) => a.days - b.days);
export const zanzibarSafariTrips = () =>
  packages
    .filter((p) => p.category !== "zanzibar" && p.destinations.includes("Zanzibar"))
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
    href: "/safaris?type=big-five#safari-results",
    tagline: "Lion · Leopard · Elephant · Buffalo · Rhino",
    blurb:
      "Classic private game drives across Tarangire, Lake Manyara, the Ngorongoro Crater and the Serengeti — the surest way to see Africa's Big Five.",
  },
  {
    id: "migration",
    label: "Migration Safari",
    href: "/safaris?type=migration#safari-results",
    tagline: "River crossings · Calving season · Endless herds",
    blurb:
      "Timed to the Great Migration and the Ndutu calving season — follow the wildebeest and zebra across the Serengeti plains and into the Maasai Mara.",
  },
  {
    id: "day-trips",
    label: "Day Trips",
    href: "/safaris?type=day-trips#safari-results",
    tagline: "Tarangire · Ngorongoro · Arusha National Park · Kilimanjaro",
    blurb:
      "One and two-day trips from Arusha and Moshi: a day with Tarangire's elephants or in the Ngorongoro Crater, a walking safari, a swim at Chemka or a hike on Kilimanjaro.",
  },
  {
    id: "fly-in",
    label: "Fly-in Safaris",
    href: "/safaris?type=fly-in#safari-results",
    tagline: "Zanzibar · Serengeti · Ngorongoro",
    blurb:
      "Fly over the long road journeys and spend the time on safari: from Zanzibar straight into the Serengeti and back, or a private northern safari that ends with a flight to the beach.",
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
