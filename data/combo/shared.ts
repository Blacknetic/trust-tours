// Shared pieces for the trips rebuilt from Ombeni's "Combo" folder (D:\mpya,
// Oct 2026): safari-and-Zanzibar holidays, honeymoons, a Lake Natron safari and a
// family safari. They use the standard daily comfort-level rates, except the
// Nyerere and Mafia honeymoon, which keeps its own. Prices are draft until he
// reviews the live pages.

import { SAFARI_ADDONS, ZANZIBAR_ADDONS } from "@/data/addons";
import { CONTACT_BULLETS } from "@/data/kilimanjaro/shared";
import type { ClimbLinks, LinkItem } from "@/data/kilimanjaro/links";
import type { ContentSection, FAQ, TripPackage } from "@/data/packages";
import { SAFARI_EXCLUDED, SAFARI_INCLUDED, comfortLevels } from "@/data/safaris/shared";
import {
  GOOD_TO_KNOW,
  SAFARI_AND_BEACH_TRIPS,
  SAFARI_BEACH_EXCLUDED,
  SAFARI_BEACH_FAQS,
  SAFARI_BEACH_INCLUDED,
} from "@/data/zanzibar/shared";
import type { ComfortLevel } from "@/lib/pricing";

const guide = (slug: string, label: string): LinkItem => ({ href: `/guides/${slug}`, label });

export const HONEYMOON_TRIPS: LinkItem[] = [
  { href: "/safaris/7-day-nyerere-mafia-honeymoon", label: "7-Day Nyerere & Mafia Honeymoon" },
  { href: "/safaris/8-day-honeymoon-safari-zanzibar", label: "8-Day Honeymoon Safari & Zanzibar" },
  { href: "/safaris/9-day-honeymoon-northern", label: "9-Day Honeymoon Safari & Zanzibar" },
  { href: "/safaris/10-day-honeymoon-safari-zanzibar", label: "10-Day Honeymoon Safari & Zanzibar" },
  { href: "/safaris/12-day-honeymoon-safari-zanzibar", label: "12-Day Honeymoon Safari & Zanzibar" },
  { href: "/safaris/20-day-honeymoon-tanzania-zanzibar", label: "20-Day Safari & Zanzibar Honeymoon" },
];

export const FAMILY_TRIPS: LinkItem[] = [
  { href: "/safaris/9-day-family-safari", label: "9-Day Family Safari" },
  { href: "/safaris/4-day-private-ndutu-calving-safari", label: "4-Day Calving Safari" },
  { href: "/safaris/5-day-ndutu-migration-safari", label: "5-Day Calving Safari" },
  { href: "/safaris/6-day-calving-safari", label: "6-Day Calving Safari" },
];

type ComboKind = "beach" | "honeymoon" | "safari" | "family";

export function comboLinks(slug: string, kind: ComboKind): ClimbLinks {
  const related =
    kind === "honeymoon" ? HONEYMOON_TRIPS : kind === "family" ? FAMILY_TRIPS : kind === "beach" ? SAFARI_AND_BEACH_TRIPS : [];
  const beach = kind === "beach" || kind === "honeymoon";
  return {
    overview: [
      kind === "honeymoon" ? guide("tanzania-honeymoon-guide", "Honeymoon in Tanzania") : guide("tanzania-safari-guide", "Tanzania safari guide"),
      guide("best-time-to-visit-tanzania", "Best time to visit Tanzania"),
    ],
    prices: [
      guide("how-much-tanzania-safari-cost", "What a safari really costs"),
      beach ? { href: "/zanzibar", label: "Zanzibar beach holidays" } : guide("best-tanzania-safari-company", "How to choose a safari company"),
    ],
    itinerary: [
      guide("serengeti-guide", "Serengeti guide"),
      beach ? guide("things-to-do-zanzibar", "Things to do in Zanzibar") : guide("ngorongoro-crater-guide", "Ngorongoro Crater guide"),
    ],
    inclusions: [
      guide("tanzania-safari-packing-list", "What to pack"),
      guide("tipping-in-tanzania", "Tipping"),
      guide("travel-insurance-tanzania", "Travel insurance"),
    ],
    planning: [
      ...related.filter((t) => !t.href.endsWith(`/${slug}`)),
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
    ],
  };
}

export const HONEYMOON_TOUCHES: ContentSection = {
  heading: "Honeymoon touches we can arrange",
  paragraphs: [
    "Tell us it's your honeymoon when you book. We'll ask each lodge and hotel for the touches below. Some properties offer a few of them free, others charge, so we confirm what's included and what each extra costs in your written quote.",
  ],
  bullets: [
    "Room setup: Flower petals, a towel decoration and a welcome note on arrival.",
    "Private dinner: A candlelit table for two at camp or on the beach, weather permitting.",
    "Sundowners: Drinks for two at a scenic spot after a game drive, where the park allows.",
    "Celebration cake: A small cake or a personal message on a special day.",
    "Couples' spa: A massage for two where the property has a spa or a therapist.",
    "Sunset cruise: A dhow trip on the Indian Ocean as the sun goes down.",
    "Room upgrade: An ocean-view room, a private veranda or a villa, if available.",
  ],
  note: "Honeymoon touches are requests, not automatic inclusions, until your booking confirmation lists them.",
};

const BEACH_BEST_TIME: ContentSection = {
  heading: "Best time for a safari and Zanzibar",
  table: {
    headers: ["Months", "What to expect"],
    rows: [
      ["June to October", "The main dry season: excellent game viewing in all the northern parks, with the migration in the north of the Serengeti, and sunny, dry days on Zanzibar."],
      ["December to February", "Green landscapes and the calving season in the southern Serengeti, with hot, mostly dry beach weather and calm seas."],
      ["November and March", "Changeable, with some showers. Wildlife is still good and the parks are quieter."],
      ["April and May", "The long rains. Some camps close and boat trips can be affected, but prices are often lower."],
    ],
  },
  note: "The herds follow the rain, so tell us your travel month and we'll choose the Serengeti camp to match. No sighting can be guaranteed.",
};

const SAFARI_BEST_TIME: ContentSection = {
  heading: "Best time for this safari",
  table: {
    headers: ["Months", "What to expect"],
    rows: [
      ["June to October", "The dry season: animals gather near water, the bush is thinner and game viewing is at its most reliable."],
      ["December to February", "Green season, with the calving herds in the southern Serengeti and excellent birdlife."],
      ["November and March", "Short rains or the start of the long rains: changeable weather, fewer vehicles and still good wildlife."],
      ["April and May", "The long rains. Some camps close and some roads are harder, but the landscapes are lush."],
    ],
  },
};

const BOOK: Record<ComboKind, ContentSection> = {
  beach: {
    heading: "Book your safari and Zanzibar holiday",
    paragraphs: [
      "Tell us your travel dates, the number of travellers, your preferred comfort level and your arrival and departure flights. We confirm the lodges, the beach hotel, the domestic flight and the final price in writing before you pay.",
    ],
    bullets: CONTACT_BULLETS,
  },
  honeymoon: {
    heading: "Plan your honeymoon",
    paragraphs: [
      "Tell us your travel dates, your preferred comfort level and the honeymoon touches that matter most to you. We'll prepare a proposal with the lodges and hotels available, the flights and a clear price, before you pay anything.",
    ],
    bullets: CONTACT_BULLETS,
  },
  safari: {
    heading: "Book your safari",
    paragraphs: [
      "Tell us your travel dates, the number of travellers, your preferred comfort level and whether you'd like to return by road or by air. We confirm the lodges and final price in writing before you pay.",
    ],
    bullets: CONTACT_BULLETS,
  },
  family: {
    heading: "Plan your family safari",
    paragraphs: [
      "Tell us your travel dates, the number of adults and children and each child's age, your preferred comfort level and any activities your family would love. We'll confirm family rooms, children's rates and the final price in writing before you pay.",
    ],
    bullets: CONTACT_BULLETS,
  },
};

const HONEYMOON_FAQS: FAQ[] = [
  {
    question: "Is the safari private?",
    answer:
      "Yes. You have your own 4×4 vehicle and driver-guide for the whole safari, so you can stay as long as you like at a sighting and go at your own pace.",
  },
  {
    question: "Are honeymoon decorations and private dinners included?",
    answer:
      "Not automatically. We ask each property for the touches you'd like. Some offer a few for free, and others charge, so your quote lists exactly what's included.",
  },
];

type ComboTrip = Pick<
  TripPackage,
  | "slug" | "seoTitle" | "metaDescription" | "destinations" | "title" | "shortName" | "days"
  | "heroImage" | "summary" | "overview" | "atAGlance" | "highlights" | "itinerary"
  | "stayChoices" | "oldUrl" | "reviewSnippets"
> & {
  kind: ComboKind;
  /** Defaults to the four standard comfort levels for the trip's length. */
  levels?: ComfortLevel[];
  /** Extra lines for this trip's "included" list, such as its flights. */
  included?: string[];
  /** Replaces the shared "included" list when the trip doesn't fit it. */
  includedOverride?: string[];
  excludedOverride?: string[];
  addOns?: string[];
  bestMonths?: string[];
  tags?: string[];
  /** Southern Tanzania: leaves out the Zanzibar and northern-park sections. */
  south?: boolean;
  sections: ContentSection[];
  faqs: FAQ[];
};

/** A trip from the Combo folder, with the parts every page shares. */
export function comboTrip({
  kind,
  levels,
  included = [],
  includedOverride,
  excludedOverride,
  addOns,
  bestMonths,
  tags = [],
  south = false,
  sections,
  faqs,
  ...trip
}: ComboTrip): TripPackage {
  const lv = levels ?? comfortLevels(trip.days);
  const from = lv[0].groupPricing.tiers[0].usd;
  const beach = kind === "beach" || kind === "honeymoon";
  const serengeti = trip.destinations.includes("Serengeti");
  const list = lv.map((l) => `${l.label} from $${l.groupPricing.tiers[0].usd.toLocaleString()}`).join(", ");

  const defaultAddOns = [
    ...SAFARI_ADDONS.filter(
      (id) =>
        id !== "serengeti-flight" &&
        !(beach && id === "zanzibar-extension") &&
        (serengeti || (id !== "balloon-safari" && id !== "extra-serengeti-night")),
    ),
    ...(beach ? ZANZIBAR_ADDONS.filter((id) => id !== "zanzibar-safari") : []),
  ];

  return {
    ...trip,
    category: "safari",
    tags: [...(kind === "honeymoon" ? ["honeymoon"] : kind === "family" ? ["family"] : []), ...tags],
    priceFromUSD: from,
    priceNote: "Indicative prices per person for 2 adults sharing. Your written quote confirms the final price.",
    comfortLevels: lv,
    addOns: [...new Set(addOns ?? defaultAddOns)],
    links: comboLinks(trip.slug, kind),
    tier: ["mid-range", "comfort"],
    gallery: [],
    pricingDetails: [
      "These are indicative planning prices per person, based on 2 adults sharing a room and a private safari vehicle. They are not confirmed quotations.",
      "Your final cost depends on your travel dates, lodge and hotel availability, flight fares and the services you choose, so we confirm the price in writing before you pay a deposit.",
      kind === "family"
        ? "Children's rates depend on each lodge and on the children's ages, so select your group size in the booking box and Ombeni will quote your family directly."
        : "To request a price for one traveller or a group of three to six, select your group size in the booking box and Ombeni will quote you directly.",
    ],
    included: includedOverride ?? [...(beach ? SAFARI_BEACH_INCLUDED : SAFARI_INCLUDED), ...included],
    excluded: excludedOverride ?? (beach ? SAFARI_BEACH_EXCLUDED : SAFARI_EXCLUDED),
    sections: [
      ...sections,
      ...(kind === "honeymoon" ? [HONEYMOON_TOUCHES] : []),
      ...(south ? [] : [beach ? BEACH_BEST_TIME : SAFARI_BEST_TIME]),
      ...(beach && !south ? [GOOD_TO_KNOW] : []),
      BOOK[kind],
    ],
    faqs: [
      {
        question: "How much does this trip cost?",
        answer: `${list} per person, based on 2 adults sharing. These are indicative prices, and your written quote confirms the final figure.`,
      },
      ...faqs,
      ...(kind === "honeymoon" ? HONEYMOON_FAQS : []),
      ...(beach && !south ? SAFARI_BEACH_FAQS : []),
    ],
    bestMonths: bestMonths ?? ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  };
}
