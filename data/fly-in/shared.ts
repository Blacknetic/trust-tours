// Fly-in safaris, from Ombeni's "fly safari" folder (D:\mpya, Oct 2026). Both
// documents are quotes for past clients, so the names, dates, payment plans and
// bank details stay off the site; only the routes and package prices are used.

import { CONTACT_BULLETS } from "@/data/kilimanjaro/shared";
import type { ClimbLinks, LinkItem } from "@/data/kilimanjaro/links";
import type { ContentSection, FAQ, TripPackage } from "@/data/packages";
import type { ComfortLevel } from "@/lib/pricing";

export const FLY_IN_TAG = "fly-in";

const guide = (slug: string, label: string): LinkItem => ({ href: `/guides/${slug}`, label });

export const FLY_IN_TRIPS: LinkItem[] = [
  { href: "/safaris/3-day-serengeti-balloon-zanzibar", label: "3-Day Zanzibar to Serengeti Fly-in" },
  { href: "/safaris/5-day-premium-safari-fly-to-zanzibar", label: "5-Day Premium Safari, Fly to Zanzibar" },
];

export function flyInLinks(slug: string): ClimbLinks {
  return {
    overview: [
      guide("serengeti-guide", "Serengeti guide"),
      guide("tanzania-safari-guide", "Tanzania safari guide"),
    ],
    prices: [
      guide("how-much-tanzania-safari-cost", "What a safari really costs"),
      guide("best-tanzania-safari-company", "How to choose a safari company"),
    ],
    itinerary: [
      guide("what-to-expect-on-safari", "What a safari day is like"),
      guide("best-time-great-migration", "Where the herds are each month"),
    ],
    inclusions: [
      guide("tanzania-safari-packing-list", "What to pack"),
      guide("tipping-in-tanzania", "Tipping your guide"),
      guide("travel-insurance-tanzania", "Travel insurance for Tanzania"),
    ],
    planning: [
      ...FLY_IN_TRIPS.filter((t) => !t.href.endsWith(`/${slug}`)),
      { href: "/zanzibar", label: "Zanzibar beach holidays" },
      guide("combine-kilimanjaro-safari-zanzibar", "Combining safari and Zanzibar"),
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
    ],
  };
}

export const FLIGHTS: ContentSection = {
  heading: "How the flights work",
  paragraphs: [
    "Flights between Zanzibar, Arusha and the Serengeti are scheduled services on small aircraft, landing at airstrips close to the game-drive areas. Your guide meets you on the airstrip, so the safari starts as soon as you land.",
    "Schedules and fares are set by the airlines and change with the season, so we confirm your flight times before your booking is final and plan the game drives around them.",
  ],
  bullets: [
    "Baggage: The limit is usually about 15 kg per person, including hand luggage, in a soft bag without wheels. Hotels can store extra luggage for you.",
    "Timing: Flights often stop at more than one airstrip, so allow for the aircraft landing on the way.",
    "Weather: Flights rarely change, but if one is delayed we adjust the day so you lose as little time as possible.",
  ],
};

const BOOK: ContentSection = {
  heading: "Book your fly-in safari",
  paragraphs: [
    "Tell us your travel dates, the number of travellers and where you're staying before and after the safari. We check the flights and camp availability for your dates and confirm the final price in writing before you pay.",
  ],
  bullets: CONTACT_BULLETS,
};

const EXCLUDED = [
  "International flights to and from Tanzania.",
  "Tanzania visa fees.",
  "Travel insurance.",
  "Alcoholic and soft drinks, unless listed as included.",
  "Laundry and personal expenses.",
  "Tips for your guide and lodge staff.",
  "Optional activities not listed in the itinerary.",
  "Accommodation before and after the safari.",
];

const FAQS: FAQ[] = [
  {
    question: "Why fly instead of drive?",
    answer:
      "The Serengeti is a long day's drive from Arusha and out of reach by road from Zanzibar. Flying turns travel days into time on safari and lets you add a few days in the bush to a beach holiday.",
  },
  {
    question: "Can I change the route or add nights?",
    answer:
      "Yes. Every trip is private and can be changed. You can add nights in the Serengeti, the Ngorongoro Crater or on Zanzibar, and we'll rebook the flights to match.",
  },
];

/** One package price from Ombeni's document, for 2 adults sharing. */
export interface FlyInPrice {
  id: string;
  label: string;
  usd: number;
  summary: string;
  includes: string[];
}

type FlyInTrip = Pick<
  TripPackage,
  | "slug" | "seoTitle" | "metaDescription" | "destinations" | "title" | "shortName" | "days"
  | "heroImage" | "summary" | "overview" | "atAGlance" | "highlights" | "itinerary"
  | "stayChoices" | "oldUrl" | "reviewSnippets"
> & {
  bestMonths?: string[];
  price: FlyInPrice;
  included: string[];
  excluded?: string[];
  sections: ContentSection[];
  faqs: FAQ[];
  addOns: string[];
  tags?: string[];
};

/** A fly-in safari, priced at the set package price in Ombeni's document. */
export function flyInTrip({ price, tags = [], excluded = [], ...trip }: FlyInTrip): TripPackage {
  const level: ComfortLevel = {
    id: price.id,
    label: price.label,
    perDay: { min: price.usd / trip.days, max: price.usd / trip.days },
    groupPricing: { tiers: [{ pax: 2, usd: price.usd }], askSizes: [1, 3, 4, 5, 6] },
    summary: price.summary,
    includes: price.includes,
  };
  return {
    bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
    ...trip,
    category: "safari",
    tags: [FLY_IN_TAG, ...tags],
    priceFromUSD: price.usd,
    priceNote: "Package price per person for 2 adults sharing, flights included. Your written quote confirms the final price.",
    comfortLevels: [level],
    links: flyInLinks(trip.slug),
    tier: ["mid-range", "comfort"],
    gallery: [],
    pricingDetails: [
      "This is Ombeni's package price per person, based on 2 adults sharing a room and a private safari vehicle. It includes the flights listed in the itinerary.",
      "Flight fares and camp rates change with the season, so we confirm the price for your dates in writing before you pay a deposit.",
      "For one traveller or a group of three to six, select your group size in the booking box and Ombeni will quote you directly.",
    ],
    excluded: [...excluded, ...EXCLUDED],
    sections: [...trip.sections, FLIGHTS, BOOK],
    faqs: [
      {
        question: "How much does this fly-in safari cost?",
        answer: `It costs $${price.usd.toLocaleString()} per person, based on 2 adults sharing, with the flights in the itinerary included. Your written quote confirms the final figure for your dates.`,
      },
      ...trip.faqs,
      ...FAQS,
    ],
  };
}
