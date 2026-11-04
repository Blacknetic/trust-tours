// Shared pieces for the rebuilt Zanzibar holidays (data/zanzibar/*.ts).
// Content comes from Ombeni's "Zanzibar packages" folder (D:\mpya, Oct 2026).
// Prices are draft until he reviews the live pages.

import { ZANZIBAR_ADDONS } from "@/data/addons";
import { CONTACT_BULLETS } from "@/data/kilimanjaro/shared";
import type { ClimbLinks, LinkItem } from "@/data/kilimanjaro/links";
import type { ContentSection, FAQ, TripPackage } from "@/data/packages";
import type { StayChoice } from "@/data/accommodations";
import type { ComfortLevel } from "@/lib/pricing";

// Per person, per day, for 2 adults sharing a room, from his 2026 "10-Day
// Zanzibar Island Holiday" document. A change here reprices every holiday.
export const ZANZIBAR_RATES = {
  midRange: { min: 399, max: 550 },
  luxury: { min: 599, max: 799 },
  highEnd: { min: 850, max: 1200 },
  ultra: { min: 2560, max: 5550 },
};

function perPerson(days: number, min: number) {
  return { tiers: [{ pax: 2, usd: min * days }], askSizes: [1, 3, 4, 5, 6] };
}

/** The four comfort levels for a Zanzibar holiday of this length. */
export function zanzibarLevels(days: number): ComfortLevel[] {
  const r = ZANZIBAR_RATES;
  return [
    {
      id: "mid-range",
      label: "Mid-range",
      perDay: r.midRange,
      groupPricing: perPerson(days, r.midRange.min),
      summary:
        "Comfortable, well-rated hotels and the island's best-known excursions at a sensible price, with plenty of free time on the beach.",
      includes: [
        "Comfortable 3–4-star hotels in town and on the beach",
        "Private airport and hotel transfers",
        "The guided excursions in the itinerary",
        "Meals as listed in the itinerary",
        "Entrance fees for the listed tours",
      ],
    },
    {
      id: "luxury",
      label: "Luxury",
      perDay: r.luxury,
      groupPricing: perPerson(days, r.luxury.min),
      summary:
        "Upgraded hotels and beach resorts with better rooms, attractive beach access and more refined dining.",
      includes: [
        "4–5-star hotels and beach resorts",
        "A sea-view or upgraded room where available",
        "Private transfers",
        "The guided excursions in the itinerary",
        "More meals included, or all-inclusive where the resort offers it",
      ],
    },
    {
      id: "high-end",
      label: "High-end luxury",
      perDay: r.highEnd,
      groupPricing: perPerson(days, r.highEnd.min),
      summary:
        "Premium beachfront resorts and boutique hotels, a higher room category and a more personal approach to every day.",
      includes: [
        "Premium beachfront resorts or boutique luxury hotels",
        "Higher room categories, subject to availability",
        "Private guiding on excursions",
        "Private boat options where available",
        "Half board, full board or all-inclusive, depending on the property",
      ],
    },
    {
      id: "ultra-premium",
      label: "Ultra-premium",
      perDay: r.ultra,
      groupPricing: perPerson(days, r.ultra.min),
      summary:
        "Exceptional villas and suites for special celebrations. The price depends heavily on the property and dates, so we quote it individually.",
      includes: [
        "Exceptional suites or villas, often with a private pool",
        "Dedicated private transfers",
        "Private dhow or boat charters where appropriate",
        "Fine dining and spa experiences by arrangement",
        "Concierge-style personal service",
      ],
    },
  ];
}

// Stays offered at each comfort level, by part of the island. Ombeni's level
// lists come first where he names them.
export const STAYS_STONE_TOWN = {
  "mid-range": ["tembo-house", "maru-maru-hotel", "jafferji-house"],
  luxury: ["park-hyatt-zanzibar", "emerson-spice", "zanzibar-serena"],
  "high-end": ["park-hyatt-zanzibar", "emerson-spice"],
  "ultra-premium": ["park-hyatt-zanzibar"],
};

export const STAYS_NORTH_COAST = {
  "mid-range": ["z-hotel-nungwi", "amaan-bungalows", "kendwa-rocks"],
  luxury: ["essque-zalu", "zuri-zanzibar", "riu-palace-zanzibar", "royal-zanzibar"],
  "high-end": ["zuri-zanzibar", "essque-zalu"],
  "ultra-premium": ["zuri-zanzibar", "essque-zalu"],
};

// Paje and Bwejuu in the south-east, Pongwe and Matemwe further north.
export const STAYS_EAST_COAST = {
  "mid-range": ["dhow-inn", "zula-zanzibar", "zanziblue"],
  luxury: ["baraza-resort", "tulia-zanzibar"],
  "high-end": ["baraza-resort", "tulia-zanzibar"],
  "ultra-premium": ["baraza-resort"],
};

/** The same stays for a trip that is only priced at some levels. */
export const onlyLevels = (options: Record<string, string[]>, ...ids: string[]) =>
  Object.fromEntries(ids.map((id) => [id, options[id]]));

export const stop = (
  id: string,
  nights: string,
  place: string,
  options: StayChoice["options"],
): StayChoice => ({ id, nights, place, options });

// Island photos already on the site. Ombeni's documents use pictures from
// other operators, so none of theirs are used.
export const ZIMG = {
  beach: { src: "/images/zanzibar-beach.jpg", alt: "A white sandbar curving into turquoise water off Zanzibar" },
  dhowSunset: { src: "/images/zanzibar-2.jpg", alt: "A dhow sailing past a red sunset on the Indian Ocean" },
  dhowBeach: { src: "/images/zanzibar-dhow.jpg", alt: "A traditional dhow lit up on the beach at dusk" },
  snorkel: { src: "/images/zanzibar/snorkeling.jpg", alt: "Snorkellers floating over a coral reef in clear turquoise water" },
  pool: { src: "/images/zanzibar-pool.jpg", alt: "A beach resort pool fringed with palm trees" },
  coast: { src: "/images/zanzibar/hero.jpg", alt: "A dhow sailing off a white-sand Zanzibar beach" },
};

export const ZANZIBAR_TRIPS: LinkItem[] = [
  { href: "/zanzibar/4-day-zanzibar-escape", label: "4-Day Zanzibar Escape" },
  { href: "/zanzibar/5-day-zanzibar-escape", label: "5-Day Zanzibar Holiday" },
  { href: "/zanzibar/6-day-zanzibar-holiday", label: "6-Day Zanzibar Holiday" },
  { href: "/zanzibar/7-day-zanzibar-holiday", label: "7-Day Zanzibar Holiday" },
  { href: "/zanzibar/7-day-zanzibar-honeymoon", label: "7-Day Zanzibar Honeymoon" },
  { href: "/zanzibar/8-day-zanzibar-tour", label: "8-Day Zanzibar Tour" },
  { href: "/zanzibar/10-day-zanzibar-island-holiday", label: "10-Day Zanzibar Island Holiday" },
];

export const SAFARI_AND_BEACH_TRIPS: LinkItem[] = [
  { href: "/safaris/6-day-safari-zanzibar", label: "6-Day Safari & Zanzibar" },
  { href: "/safaris/7-day-tanzania-zanzibar", label: "7-Day Safari & Zanzibar" },
  { href: "/safaris/10-day-safari-zanzibar-adventure", label: "10-Day Safari & Zanzibar" },
  { href: "/safaris/20-day-honeymoon-tanzania-zanzibar", label: "20-Day Safari & Zanzibar Honeymoon" },
];

const guide = (slug: string, label: string): LinkItem => ({ href: `/guides/${slug}`, label });

export function zanzibarLinks(slug: string): ClimbLinks {
  return {
    overview: [
      guide("zanzibar-travel-guide", "Zanzibar travel guide"),
      guide("best-time-to-visit-zanzibar", "Best time to visit Zanzibar"),
    ],
    prices: [
      { href: "/zanzibar", label: "All Zanzibar holidays" },
      guide("combine-kilimanjaro-safari-zanzibar", "Combining a safari and Zanzibar"),
    ],
    itinerary: [
      guide("things-to-do-zanzibar", "Things to do in Zanzibar"),
      guide("best-beaches-zanzibar", "The best beaches"),
    ],
    inclusions: [
      guide("travel-insurance-tanzania", "Travel insurance"),
      guide("tipping-in-tanzania", "Tipping"),
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
    ],
    planning: [
      ...ZANZIBAR_TRIPS.filter((t) => !t.href.endsWith(`/${slug}`)),
      { href: "/safaris?type=zanzibar#safari-results", label: "Safari and Zanzibar trips" },
      guide("tanzania-honeymoon-guide", "Honeymoon in Tanzania"),
    ],
  };
}

function safariBeachLinks(slug: string): ClimbLinks {
  return {
    overview: [
      guide("combine-kilimanjaro-safari-zanzibar", "Combining a safari and Zanzibar"),
      guide("best-time-to-visit-tanzania", "Best time to visit Tanzania"),
    ],
    prices: [
      guide("how-much-tanzania-safari-cost", "What a safari really costs"),
      { href: "/zanzibar", label: "Zanzibar beach holidays" },
    ],
    itinerary: [
      guide("tanzania-safari-guide", "Tanzania safari guide"),
      guide("things-to-do-zanzibar", "Things to do in Zanzibar"),
    ],
    inclusions: [
      guide("tanzania-safari-packing-list", "What to pack"),
      guide("tipping-in-tanzania", "Tipping"),
      guide("travel-insurance-tanzania", "Travel insurance"),
    ],
    planning: [
      ...SAFARI_AND_BEACH_TRIPS.filter((t) => !t.href.endsWith(`/${slug}`)),
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
    ],
  };
}

const INCLUDED_COMMON = [
  "Transfers: Private transfers from and to Zanzibar International Airport, and between your hotels.",
  "Accommodation: In your selected comfort level, based on two people sharing a double or twin room.",
  "Guides: English-speaking local guides on the listed excursions.",
  "Fees: Entrance fees for the excursions in the itinerary.",
  "Drinking water: On excursions.",
];

const EXCLUDED = [
  "International flights, and domestic flights between the mainland and Zanzibar unless listed.",
  "Tanzania visa fees.",
  "Zanzibar's mandatory inbound travel insurance for foreign visitors, and your own travel insurance.",
  "Drinks and meals not covered by your meal plan.",
  "Optional excursions, spa treatments, diving and water sports.",
  "Tips, souvenirs, laundry and personal expenses.",
  "Single-room supplements for guests who don't share.",
  "Any hotel or government levies paid locally, which your quote will list.",
];

const BEST_TIME: ContentSection = {
  heading: "Best time to visit Zanzibar",
  table: {
    headers: ["Months", "What to expect"],
    rows: [
      ["June to October", "Generally dry, sunny and comfortably warm. The most popular time for beach holidays and boat trips."],
      ["December to February", "Hot and mostly dry, with calm seas that suit swimming and snorkelling."],
      ["March and November", "More changeable, with some showers. Plans may need a little flexibility."],
      ["April and May", "The long rains. Some excursions can be affected, but the island is quieter and some hotels offer better rates."],
    ],
  },
  note: "Boat trips and snorkelling always depend on the weather, the tides and the state of the sea on the day.",
};

const GOOD_TO_KNOW: ContentSection = {
  heading: "Good to know before you go",
  bullets: [
    "Tides: On the east coast, the sea can go out a long way at low tide, revealing lagoons and seaweed farms. The north, around Nungwi and Kendwa, is better for swimming at most tides.",
    "Dress: Zanzibar is a mainly Muslim island. Cover your shoulders and knees in Stone Town and the villages, and keep swimwear for the beach and the hotel.",
    "Ramadan: Some restaurants open later during Ramadan, and it's polite not to eat or drink in the street during the day.",
    "Mnemba: Snorkelling trips visit the reefs around the atoll. The island itself is private, so trips don't land on it.",
    "Money: US dollars are widely accepted, but small Tanzanian shilling notes are useful for markets and tips.",
  ],
};

const BOOK: ContentSection = {
  heading: "Book your Zanzibar holiday",
  paragraphs: [
    "Tell us your travel dates, the number of travellers, your preferred comfort level and whether you are arriving from abroad or after a safari or climb. We confirm your hotels, excursions and final price in writing before you pay.",
  ],
  bullets: CONTACT_BULLETS,
};

const ZANZIBAR_FAQS: FAQ[] = [
  {
    question: "Can I choose where I stay?",
    answer:
      "Yes. Pick your comfort level, then choose a hotel for each part of the trip. Your choices go with your booking request, and Ombeni confirms availability. If a hotel is full, he will suggest a similar one.",
  },
  {
    question: "Can I add a safari?",
    answer:
      "Yes. Many travellers fly to the Serengeti from Zanzibar, or start with a safari in the northern parks and finish on the beach. We arrange the flights and book it all as one trip.",
  },
];

type ZanzibarTrip = Pick<
  TripPackage,
  | "slug" | "seoTitle" | "metaDescription" | "title" | "shortName" | "days"
  | "heroImage" | "summary" | "overview" | "atAGlance" | "highlights" | "itinerary"
  | "stayChoices" | "tags" | "oldUrl" | "reviewSnippets"
> & {
  /** What this trip includes on top of the transfers, hotels and fees. */
  included: string[];
  sections: ContentSection[];
  faqs: FAQ[];
  /** Add-on ids the itinerary already includes, so the box doesn't offer them. */
  excursionsIncluded?: string[];
};

/** A rebuilt Zanzibar holiday: everything that is the same on every page, around its own story. */
export function zanzibarTrip({ excursionsIncluded = [], ...trip }: ZanzibarTrip): TripPackage {
  const levels = zanzibarLevels(trip.days);
  const from = levels[0].groupPricing.tiers[0].usd;
  const at = (i: number) => levels[i].groupPricing.tiers[0].usd.toLocaleString();
  return {
    ...trip,
    category: "zanzibar",
    destinations: ["Zanzibar"],
    priceFromUSD: from,
    priceNote:
      "Indicative prices per person for 2 adults sharing a room. Your written quote confirms the final price.",
    comfortLevels: levels,
    addOns: ZANZIBAR_ADDONS.filter((id) => !excursionsIncluded.includes(id)),
    links: zanzibarLinks(trip.slug),
    tier: ["mid-range", "comfort"],
    gallery: [],
    pricingDetails: [
      "These are indicative planning prices per person, based on 2 adults sharing a room. They are not confirmed quotations.",
      "Your final cost depends on your travel dates, the hotels and room types you choose, the meal plan and whether excursions are shared or private. We confirm your price and hotels in writing before you pay a deposit.",
      "To request a price for one traveller or a group of three to six, select your group size in the booking box and Ombeni will quote you directly.",
    ],
    included: [...INCLUDED_COMMON, ...trip.included],
    excluded: EXCLUDED,
    sections: [...trip.sections, BEST_TIME, GOOD_TO_KNOW, BOOK],
    faqs: [
      {
        question: "How much does this holiday cost?",
        answer: `It starts from $${from.toLocaleString()} per person at Mid-range level, based on 2 adults sharing. Luxury starts from $${at(1)}, High-end luxury from $${at(2)} and Ultra-premium from $${at(3)}. These are indicative prices, and your written quote confirms the final figure.`,
      },
      ...trip.faqs,
      ...ZANZIBAR_FAQS,
    ],
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  };
}

// ── Safari and beach: a safari on the mainland, then Zanzibar ──────────────

const LEVEL_LABEL: Record<string, string> = {
  "mid-range": "Mid-range",
  luxury: "Luxury",
  "high-end": "High-end luxury",
};

/** A level priced at a set package price from Ombeni's document. */
export interface SetPrice {
  id: "mid-range" | "luxury" | "high-end";
  usd: number;
  summary: string;
  includes: string[];
}

const SAFARI_BEACH_INCLUDED = [
  "Pickup: From Kilimanjaro International Airport (JRO) or your Arusha hotel.",
  "Safari: Private 4×4 safari vehicle with a pop-up roof and a professional English-speaking driver-guide.",
  "Park fees: All park entry, conservation, crater and vehicle fees for the confirmed itinerary.",
  "Flight: The domestic flight to Zanzibar listed in the itinerary.",
  "Transfers: Private transfers in Zanzibar, from the airport to your hotels and back.",
  "Accommodation: In your selected comfort level, based on two people sharing.",
  "Meals: As listed in the day-by-day itinerary.",
  "Drinking water: In the safari vehicle and on excursions.",
];

const SAFARI_BEACH_EXCLUDED = [
  "International flights to and from Tanzania.",
  "Tanzania visa fees.",
  "Travel insurance, including Zanzibar's mandatory inbound insurance for foreign visitors.",
  "Drinks and meals not listed as included.",
  "Optional activities, such as balloon safaris ($600 per person) and extra Zanzibar excursions.",
  "Tips for your guide, drivers and hotel staff.",
  "Single-room supplements for guests who don't share.",
  "Laundry, souvenirs and personal expenses.",
];

const SAFARI_BEACH_BOOK: ContentSection = {
  heading: "Book your safari and beach holiday",
  paragraphs: [
    "Tell us your travel dates, the number of travellers, your preferred comfort level and your arrival and departure flights. We confirm the lodges, beach hotels, domestic flight and final price in writing before you pay.",
  ],
  bullets: CONTACT_BULLETS,
};

const SAFARI_BEACH_FAQS: FAQ[] = [
  {
    question: "How do I get from the safari to Zanzibar?",
    answer:
      "By a short scheduled flight, which is included. Domestic flights have tight baggage limits, often around 15 kg in a soft bag, so pack light. We confirm the flight and its allowance with your booking.",
  },
  {
    question: "Can I choose where I stay?",
    answer:
      "Yes. Pick your comfort level, then choose a lodge or hotel for each part of the trip. Your choices go with your booking request, and Ombeni confirms availability. If a place is full, he will suggest a similar one.",
  },
];

type SafariBeachTrip = Pick<
  TripPackage,
  | "slug" | "seoTitle" | "metaDescription" | "destinations" | "title" | "shortName" | "days"
  | "heroImage" | "summary" | "overview" | "atAGlance" | "highlights" | "itinerary"
  | "stayChoices" | "tags" | "oldUrl" | "reviewSnippets" | "bestMonths"
> & {
  prices: SetPrice[];
  included: string[];
  sections: ContentSection[];
  faqs: FAQ[];
  excursionsIncluded?: string[];
};

/** A safari followed by Zanzibar, priced at the set package prices in Ombeni's document. */
export function safariBeachTrip({ prices, excursionsIncluded = [], ...trip }: SafariBeachTrip): TripPackage {
  const levels: ComfortLevel[] = prices.map((p) => ({
    id: p.id,
    label: LEVEL_LABEL[p.id],
    perDay: { min: p.usd / trip.days, max: p.usd / trip.days },
    groupPricing: { tiers: [{ pax: 2, usd: p.usd }], askSizes: [1, 3, 4, 5, 6] },
    summary: p.summary,
    includes: p.includes,
  }));
  const from = prices[0].usd;
  const serengeti = trip.destinations.includes("Serengeti");
  const list = prices.map((p) => `${LEVEL_LABEL[p.id]} from $${p.usd.toLocaleString()}`).join(" and ");
  return {
    ...trip,
    category: "safari",
    priceFromUSD: from,
    priceNote: "Package price per person for 2 adults sharing. Your written quote confirms the final price.",
    comfortLevels: levels,
    addOns: [
      ...(serengeti ? ["balloon-safari"] : []),
      "cultural-visit",
      ...ZANZIBAR_ADDONS.filter((id) => !excursionsIncluded.includes(id) && id !== "zanzibar-safari"),
    ],
    links: safariBeachLinks(trip.slug),
    tier: ["mid-range", "comfort"],
    gallery: [],
    pricingDetails: [
      "These are Ombeni's package prices per person, based on 2 adults sharing a room and a private safari vehicle. They include the domestic flight to Zanzibar.",
      "Your final cost depends on your travel dates, lodge and hotel availability, and flight fares, so we confirm the price in writing before you pay a deposit.",
      "To request a price for one traveller or a group of three to six, select your group size in the booking box and Ombeni will quote you directly.",
    ],
    included: [...SAFARI_BEACH_INCLUDED, ...trip.included],
    excluded: SAFARI_BEACH_EXCLUDED,
    sections: [...trip.sections, GOOD_TO_KNOW, SAFARI_BEACH_BOOK],
    faqs: [
      {
        question: "How much does this trip cost?",
        answer: `It costs ${list} per person, based on 2 adults sharing. Your written quote confirms the final figure.`,
      },
      ...trip.faqs,
      ...SAFARI_BEACH_FAQS,
    ],
  };
}
