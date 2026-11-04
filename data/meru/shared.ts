// Mount Meru climbs, from Ombeni's "Meru" folder (D:\mpya, Oct 2026). Two of
// the three documents are quotes for one client, so their dates and personal
// details stay off the site. Prices are draft until he reviews the live pages.

import { CONTACT_BULLETS } from "@/data/kilimanjaro/shared";
import type { ClimbLinks, LinkItem } from "@/data/kilimanjaro/links";
import type { ContentImage, ContentSection, FAQ, TripPackage } from "@/data/packages";
import type { GroupPricing } from "@/lib/pricing";

const img = (src: string, alt: string): ContentImage => ({ src, alt });

// Photos from Trust Tours' own Meru climbs.
export const MIMG = {
  airport: img("/images/kilimanjaro/kilimanjaro-airport.jpg", "Kilimanjaro International Airport, where your Trust Tours driver meets you"),
  forest: img("/images/meru-montane-forest.jpg", "Trekkers walking through misty, moss-draped forest on Mount Meru's lower slopes"),
  forestTrail: img("/images/gallery/meru/meru-pxl-20250817-135926369.jpg", "Two trekkers on a narrow path through mossy forest on Mount Meru"),
  heather: img("/images/gallery/meru/meru-pxl-20250818-083345232.jpg", "An old buffalo skull among giant heather and tussock grass on Mount Meru"),
  ridge: img("/images/meru-side-view.jpg", "The rocky, frost-dusted slope of Mount Meru's summit ridge above the clouds"),
  summit: img("/images/gallery/meru/meru-pxl-20250819-032743057.jpg", "Climbers in warm jackets among frost-covered rocks at Mount Meru's summit"),
  frost: img("/images/meru-hero.jpg", "Feathery frost on volcanic rock along Mount Meru's summit ridge"),
  tarangire: img("/images/safaris/tarangire-elephants.jpg", "A herd of elephants beneath a flat-topped acacia tree in Tarangire National Park"),
};

export const MERU_GALLERY = [
  "/images/gallery/meru/meru-summit-sign.jpg",
  "/images/gallery/meru/meru-pxl-20250817-135926369.jpg",
  "/images/gallery/meru/meru-pxl-20250817-091809553.jpg",
  "/images/gallery/meru/meru-pxl-20250818-105052548.jpg",
  "/images/gallery/meru/meru-pxl-20250818-134023267.jpg",
  "/images/gallery/meru/meru-pxl-20250819-032743057.jpg",
];

/** Ombeni's group prices for the Meru climbs: per person, by group size. */
export const MERU_GROUP_PRICES: GroupPricing = {
  tiers: [
    { pax: 1, usd: 1350 },
    { pax: 2, usd: 1190 },
    { pax: 3, usd: 1055 },
    { pax: 4, usd: 895 },
  ],
};

const guide = (slug: string, label: string): LinkItem => ({ href: `/guides/${slug}`, label });

export const MERU_TRIPS: LinkItem[] = [
  { href: "/trekking/3-day-mount-meru-momela", label: "3-Day Mount Meru Climb" },
  { href: "/trekking/4-day-mount-meru", label: "4-Day Mount Meru Climb" },
  { href: "/trekking/5-day-mount-meru", label: "5-Day Mount Meru & Tarangire" },
];

export function meruLinks(slug: string): ClimbLinks {
  return {
    overview: [
      guide("mount-meru-climb-guide", "Climbing Mount Meru"),
      guide("kilimanjaro-and-mount-meru", "Meru before Kilimanjaro"),
    ],
    prices: [
      guide("how-to-choose-tour-operator", "How to choose a tour operator"),
      guide("book-direct-vs-ota", "Booking direct"),
    ],
    itinerary: [
      guide("altitude-sickness-on-kilimanjaro", "Altitude sickness"),
      guide("kilimanjaro-training-and-fitness", "Training for a climb"),
    ],
    inclusions: [
      guide("kilimanjaro-packing-list", "What to pack"),
      guide("tipping-in-tanzania", "Tipping your crew"),
      guide("travel-insurance-tanzania", "Travel insurance for Tanzania"),
    ],
    planning: [
      ...MERU_TRIPS.filter((t) => !t.href.endsWith(`/${slug}`)),
      { href: "/kilimanjaro", label: "Climb Kilimanjaro next" },
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
    ],
  };
}

export const MERU_BEST_MONTHS = ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"];

export const BEST_TIME: ContentSection = {
  heading: "Best time to climb Mount Meru",
  paragraphs: [
    "Meru can be climbed all year, but the dry months from June to October and January to February give the best balance of trail conditions and clear summit views. Whenever you go, summit night is cold and windy, so warm layers and rainwear are essential.",
  ],
  table: {
    headers: ["Month", "Typical conditions", "For climbing"],
    rows: [
      ["January", "Generally dry, often clear views of Kilimanjaro", "Excellent"],
      ["February", "Often dry, good visibility", "Excellent"],
      ["March", "Rain increasing, muddier trails", "Variable"],
      ["April", "The long rains: wet trails, limited views", "Challenging"],
      ["May", "Wet, improving late in the month", "Variable"],
      ["June", "The dry season begins; cold nights", "Very good"],
      ["July", "Generally dry, cold summit night", "Excellent"],
      ["August", "Usually dry, good visibility", "Excellent"],
      ["September", "Generally dry, cold nights", "Excellent"],
      ["October", "Usually dry; more cloud late in the month", "Very good"],
      ["November", "The short rains: showers and mist", "Variable"],
      ["December", "Variable early, often drier later", "Good"],
    ],
  },
  note: "These are typical patterns, not forecasts. Weather on Meru changes quickly with altitude and time of day.",
};

export const SUMMIT_SAFETY: ContentSection = {
  heading: "How hard is Mount Meru?",
  paragraphs: [
    "Meru isn't an easy walk. The summit ridge is steep, rocky and exposed, with some scrambling, and summit night is cold and often windy. Reasonable fitness and some hiking experience are needed, so train with regular walks, uphill exercise and long hikes before you come.",
    "At 4,566 metres, altitude sickness is possible. Tell your guide straight away about a headache, nausea, dizziness or unusual tiredness. The guide and ranger can turn the group back if the weather is unsafe or a climber is unwell, so the summit can never be guaranteed.",
  ],
  note: "Climbing Meru is good preparation for Kilimanjaro, but it doesn't guarantee you'll avoid altitude sickness there.",
};

export const PACKING: ContentSection = {
  heading: "What to bring",
  bullets: [
    "Waterproof hiking boots: Support and grip on forest paths and rocky ground.",
    "Warm layers: Base layers and a fleece or insulated jacket for cold mornings and summit night.",
    "Rainwear: A waterproof jacket and trousers.",
    "Warm hat and gloves: Essential on the summit ridge.",
    "Headlamp and spare batteries: For the climb before dawn.",
    "Daypack and water bottles: For water, snacks and rainwear.",
    "Sunglasses and sunscreen: The sun is strong at altitude.",
    "Trekking poles: Helpful for balance and on the descents.",
    "Sleeping bag: For the huts. You can rent one, with other kit, before the climb.",
  ],
};

export const TIPS: ContentSection = {
  heading: "Tipping your crew",
  paragraphs: [
    "Tips aren't included and are given at the end of the climb. As a guide, budget about $30 a day for your guide, $20 a day for the cook and $10 a day for each porter, shared among your group.",
  ],
};

const BOOK: ContentSection = {
  heading: "Book your Mount Meru climb",
  paragraphs: [
    "Tell us your climbing dates, the number of climbers, whether you need airport transfers or hotel nights in Arusha, any equipment you'd like to rent, and whether you'd like to add a safari or Kilimanjaro. We'll confirm the price, inclusions and exclusions in writing before you pay a deposit.",
  ],
  bullets: CONTACT_BULLETS,
};

const FAQS: FAQ[] = [
  {
    question: "Why does an armed ranger come with us?",
    answer:
      "Mount Meru is inside Arusha National Park, where buffaloes, giraffes and other animals live on the lower slopes. Park rules require an armed ranger with every group, as well as your mountain guide.",
  },
  {
    question: "Where do we sleep on the mountain?",
    answer:
      "In shared mountain huts at Miriakamba (about 2,514 m) and Saddle Hut (about 3,570 m). They're simple bunkhouses, not lodges, so bring a warm sleeping bag.",
  },
  {
    question: "Will I see Kilimanjaro from the summit?",
    answer:
      "On a clear morning, yes: Kilimanjaro often rises above the clouds at sunrise. Views depend on the weather and can't be guaranteed.",
  },
];

type MeruTrip = Pick<
  TripPackage,
  | "slug" | "seoTitle" | "metaDescription" | "title" | "shortName" | "days" | "hotelNights"
  | "heroImage" | "summary" | "overview" | "atAGlance" | "highlights" | "itinerary"
  | "included" | "excluded" | "reviewSnippets" | "oldUrl"
> & {
  groupPricing: GroupPricing;
  sections: ContentSection[];
  faqs: FAQ[];
  addOns?: string[];
  destinations?: TripPackage["destinations"];
  pricingDetails: string[];
};

/** A Mount Meru climb: the same structure and shared sections on every page. */
export function meruTrip({ sections, faqs, addOns, destinations, ...trip }: MeruTrip): TripPackage {
  const solo = trip.groupPricing.tiers[0].pax === 1;
  return {
    ...trip,
    category: "trekking",
    difficulty: "Challenging",
    destinations: destinations ?? ["Mount Meru", "Arusha"],
    priceFromUSD: trip.groupPricing.tiers[0].usd,
    priceNote: solo
      ? "Per person in US dollars, by group size. The 2-person rate assumes two climbers sharing a room. Your written quote confirms the final price."
      : "Per person for 2 people sharing. Your written quote confirms the final price.",
    tier: ["mid-range"],
    gallery: MERU_GALLERY,
    addOns: addOns ?? ["extra-hotel-night", "single-supplement", "gear-rental", "safari-extension", "kilimanjaro-extension"],
    links: meruLinks(trip.slug),
    bestMonths: MERU_BEST_MONTHS,
    sections: [...sections, SUMMIT_SAFETY, BEST_TIME, PACKING, TIPS, BOOK],
    faqs: [...faqs, ...FAQS],
  };
}
