// Shared pieces for the day trips and short safaris, from Ombeni's "Day Trip"
// folder (D:\mpya, Oct 2026). His rates: $455 per person per day for 2 sharing,
// and $500 for the Ngorongoro Crater day trip. Other group sizes are quoted.

import { CONTACT_BULLETS } from "@/data/kilimanjaro/shared";
import type { ClimbLinks, LinkItem } from "@/data/kilimanjaro/links";
import type { ContentSection, TripPackage } from "@/data/packages";
import type { ComfortLevel, GroupPricing } from "@/lib/pricing";
import { comfortLevels } from "@/data/safaris/shared";

export const DAY_TRIP_TAG = "day-trip";

/** Priced for two people sharing; other group sizes show "Ask for price". */
export const sharingPrice = (usd: number): GroupPricing => ({
  tiers: [{ pax: 2, usd }],
  askSizes: [1, 3, 4, 5, 6],
});

// The standard levels promise Serengeti flights and balloons, which a short
// trip doesn't have, so the same rates come with their own inclusions here.
const SHORT_INCLUDES: Record<string, string[]> = {
  "mid-range": [
    "A comfortable lodge or tented camp",
    "Private 4×4 safari vehicle",
    "Professional safari guide",
    "Meals as listed in the itinerary",
    "Park and crater fees",
    "Game drives",
    "Pickup and drop-off",
  ],
  luxury: [
    "An upgraded lodge with refined rooms and dining",
    "Private 4×4 safari vehicle",
    "Highly experienced guide",
    "Meals as listed in the itinerary",
    "Park and crater fees",
    "Private transfers",
    "More flexibility around the daily schedule",
  ],
  "high-end": [
    "A high-end lodge chosen for its setting",
    "Private luxury safari vehicle",
    "Highly experienced private guide",
    "Premium meals and service",
    "Flexible game-drive schedule",
    "Private transfers",
  ],
  "ultra-premium": [
    "Exceptional private suites",
    "The highest level of personal hospitality",
    "Premium dining",
    "Bespoke arrangements, including for celebrations",
  ],
};

/** The four comfort levels, with inclusions that fit a short safari. */
export const shortSafariLevels = (days: number): ComfortLevel[] =>
  comfortLevels(days).map((level) => ({
    ...level,
    includes: SHORT_INCLUDES[level.id],
    includedAddOns: undefined,
  }));

const guide = (slug: string, label: string): LinkItem => ({ href: `/guides/${slug}`, label });

export const DAY_TRIPS: LinkItem[] = [
  { href: "/safaris/tarangire-day-trip", label: "Tarangire Day Trip" },
  { href: "/safaris/ngorongoro-crater-day-trip", label: "Ngorongoro Crater Day Trip" },
  { href: "/safaris/arusha-national-park-day-trip", label: "Arusha National Park Day Trip" },
  { href: "/safaris/chemka-hot-springs-day-trip", label: "Chemka Hot Springs Day Trip" },
  { href: "/trekking/kilimanjaro-day-trip-marangu", label: "Kilimanjaro Day Hike" },
  { href: "/safaris/2-day-tarangire-ngorongoro", label: "2-Day Tarangire & Ngorongoro" },
  { href: "/trekking/2-day-ol-doinyo-lengai-climb", label: "2-Day Ol Doinyo Lengai Climb" },
];

export function dayTripLinks(slug: string, itinerary: LinkItem[]): ClimbLinks {
  return {
    overview: [
      guide("tanzania-safari-guide", "Tanzania safari guide"),
      guide("best-time-to-visit-tanzania", "Best time to visit Tanzania"),
    ],
    prices: [
      guide("how-much-tanzania-safari-cost", "What a safari really costs"),
      guide("best-tanzania-safari-company", "How to choose a safari company"),
    ],
    itinerary,
    inclusions: [
      guide("tanzania-safari-packing-list", "What to pack"),
      guide("tipping-in-tanzania", "Tipping your guide"),
      guide("travel-insurance-tanzania", "Travel insurance for Tanzania"),
    ],
    planning: [
      ...DAY_TRIPS.filter((t) => !t.href.endsWith(`/${slug}`)),
      { href: "/safaris?type=big-five#safari-results", label: "Longer safaris" },
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
    ],
  };
}

export const BOOK_DAY_TRIP: ContentSection = {
  heading: "Book your day trip",
  paragraphs: [
    "Tell us your date, the number of travellers, where you are staying and any onward plans that day, such as a flight or a climb briefing. We confirm the pickup time, inclusions and final price in writing before you pay.",
  ],
  bullets: CONTACT_BULLETS,
};

type DayTrip = Pick<
  TripPackage,
  | "slug" | "seoTitle" | "metaDescription" | "destinations" | "title" | "shortName" | "days"
  | "heroImage" | "summary" | "overview" | "atAGlance" | "highlights" | "itinerary"
  | "included" | "excluded" | "sections" | "faqs" | "stayChoices" | "reviewSnippets"
  | "oldUrl" | "difficulty"
> & {
  category: TripPackage["category"];
  links: ClimbLinks;
  addOns?: string[];
  bestMonths?: string[];
  tier?: TripPackage["tier"];
} & (
    | { price: number; groupPricing?: never; comfortLevels?: never }
    | { price?: never; groupPricing: GroupPricing; comfortLevels?: never }
    | { price?: never; groupPricing?: never; comfortLevels: ComfortLevel[] }
  );

/** A day trip or short safari: the same price wording and filters on every page. */
export function dayTrip({ price, groupPricing, comfortLevels: levels, sections = [], ...trip }: DayTrip): TripPackage {
  const gp = levels ? undefined : groupPricing ?? sharingPrice(price!);
  const from = levels ? levels[0].groupPricing.tiers[0].usd : gp!.tiers[0].usd;
  const sharing = gp ? gp.tiers[0].pax === 2 : true;
  return {
    bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
    tier: ["mid-range"],
    addOns: [],
    ...trip,
    tags: [DAY_TRIP_TAG],
    priceFromUSD: from,
    priceNote: sharing
      ? "Per person for 2 people sharing. Your written quote confirms the final price."
      : "Per person, by group size. Your written quote confirms the final price.",
    groupPricing: gp,
    comfortLevels: levels,
    gallery: [],
    pricingDetails: sharing
      ? [
          "The price is per person for 2 people sharing a private vehicle and guide, with the park fees listed in the inclusions.",
          "For one traveller or a group of three or more, choose your group size in the booking box and Ombeni will quote you directly.",
          "Your written quote confirms the final price before you pay a deposit.",
        ]
      : [
          "The price per person falls as your group grows, because you share the guide, transport and fees.",
          "Your written quote confirms the final price before you pay a deposit.",
        ],
    sections: [...sections, BOOK_DAY_TRIP],
  };
}
