// Gem and mineral tours. Ombeni asked for a minerals section with tours only:
// nothing is sold on the site, and no gemstone prices are shown. His gem
// company's price lists stay off the website. Tour prices are on request until
// he sends them.

import { CONTACT_BULLETS } from "@/data/kilimanjaro/shared";
import type { ClimbLinks, LinkItem } from "@/data/kilimanjaro/links";
import type { ContentSection, FAQ, TripPackage } from "@/data/packages";

export const GEM_TAG = "gem-tour";

const guide = (slug: string, label: string): LinkItem => ({ href: `/guides/${slug}`, label });

export const GEM_TRIPS: LinkItem[] = [
  { href: "/safaris/tanzanite-experience-arusha", label: "Tanzanite Experience, Arusha" },
  { href: "/safaris/mererani-tanzanite-mine-tour", label: "Mererani Tanzanite Mine Tour" },
];

export function gemLinks(slug: string): ClimbLinks {
  return {
    overview: [
      guide("tanzania-gemstones-guide", "Tanzania's gemstones"),
      guide("tanzania-cultural-tours-guide", "Cultural tours in Tanzania"),
    ],
    prices: [guide("how-to-choose-tour-operator", "How to choose a tour operator")],
    itinerary: [guide("tanzania-travel-guide", "Tanzania travel guide")],
    inclusions: [guide("tipping-in-tanzania", "Tipping"), guide("travel-insurance-tanzania", "Travel insurance")],
    planning: [
      ...GEM_TRIPS.filter((t) => !t.href.endsWith(`/${slug}`)),
      { href: "/safaris?type=day-trips#safari-results", label: "Day trips from Arusha" },
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
    ],
  };
}

export const BUYING_SECTION: ContentSection = {
  heading: "If you decide to buy a stone",
  paragraphs: [
    "There is never any obligation to buy on our tours. If you do, buy from a licensed dealer and take your time: compare stones in daylight, ask about treatment and ask for a written receipt.",
  ],
  bullets: [
    "Paperwork: Keep the receipt, any certificate and the export or tax paperwork the dealer provides. You may be asked for them when you leave Tanzania.",
    "Street sellers: Don't buy from people offering stones on the street or outside the mining area. Fake and glass stones are common.",
    "Rules: Rules on selling and exporting gemstones are set by Tanzania's Ministry of Minerals and can change, so a licensed dealer should explain what applies to you.",
  ],
};

const BOOK: ContentSection = {
  heading: "Book a gem tour",
  paragraphs: [
    "Tell us your date, the number of people, where you're staying and whether you'd like to combine the tour with a safari or a climb. We confirm the plan, the pickup time and the price in writing before you pay.",
  ],
  bullets: CONTACT_BULLETS,
};

const FAQS: FAQ[] = [
  {
    question: "Do I have to buy anything?",
    answer: "No. The tours are about how tanzanite is found, mined and cut. Any shop visit is optional, and there is no pressure to buy.",
  },
  {
    question: "Can I combine a gem tour with a safari or Kilimanjaro?",
    answer:
      "Yes. Mererani is close to Kilimanjaro Airport and Arusha, so a gem tour fits easily on the day before or after a safari or climb. Tick the tanzanite tour add-on when you book, or ask us.",
  },
];

type GemTrip = Pick<
  TripPackage,
  | "slug" | "seoTitle" | "metaDescription" | "destinations" | "title" | "shortName" | "days"
  | "heroImage" | "summary" | "overview" | "atAGlance" | "highlights" | "itinerary"
  | "included" | "excluded" | "difficulty"
> & { sections: ContentSection[]; faqs: FAQ[] };

/** A gem or mineral tour: price on request, the same buying advice and booking box on every page. */
export function gemTrip({ sections, faqs, ...trip }: GemTrip): TripPackage {
  return {
    ...trip,
    category: "safari",
    tags: [GEM_TAG],
    priceFromUSD: 0,
    priceNote: "Price on request. Tell us your date and group size and we'll quote you directly.",
    tier: ["mid-range"],
    gallery: [],
    addOns: [],
    links: gemLinks(trip.slug),
    pricingDetails: [
      "We confirm the price for your date and group size in writing before you pay. It covers the items listed under What's included.",
      "Gemstones you choose to buy are never part of the tour price.",
    ],
    sections: [...sections, BUYING_SECTION, BOOK],
    faqs: [...faqs, ...FAQS],
    bestMonths: ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  };
}
