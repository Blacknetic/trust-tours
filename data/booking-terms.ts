// The booking and cancellation summary shown on every trip page, so travellers
// see the terms before they enquire. It summarises the full policy at
// /cancellation-policy; keep the two in step. (Added 2026-11-18, approved by Ombeni.)
//
// Deposit percentages and balance due dates aren't listed yet: they come from
// Ombeni's official terms, not his private documents. The USD 200 Kilimanjaro
// deposit is already public on the policy page.

import type { ContentSection, TripPackage } from "@/data/packages";

type TermsKind = "climb" | "safari" | "beach" | "safari-beach" | "day";

export function termsKind(pkg: TripPackage): TermsKind {
  if (pkg.category === "kilimanjaro" || pkg.category === "trekking") return pkg.days <= 1 ? "day" : "climb";
  if (pkg.days <= 1) return "day";
  if (pkg.category === "zanzibar") return "beach";
  const zanzibar =
    pkg.destinations.some((d) => /zanzibar|mafia|fanjove/i.test(d)) ||
    (pkg.stayChoices ?? []).some((c) => /zanzibar|stone town|mafia|fanjove/i.test(c.place));
  return zanzibar ? "safari-beach" : "safari";
}

const HOW_TO_BOOK: ContentSection = {
  heading: "From enquiry to confirmed booking",
  bullets: [
    "Request a quote: it's free and there's no commitment.",
    "We confirm availability and send your written quotation: the itinerary, the price, the inclusions and exclusions, and the payment schedule.",
    "Accept the quotation and pay the deposit shown on it, and your trip is confirmed.",
  ],
};

const CLIMB_SCHEDULE: ContentSection = {
  heading: "Cancelling a Kilimanjaro climb",
  paragraphs: [
    "Your climb is secured with a USD 200 booking deposit. The deposit is non-refundable, but it never expires and can be used for any future climb or Tanzania trip with us. Kilimanjaro park fees paid on your behalf are refundable up to 24 hours before your climb begins.",
  ],
  table: {
    headers: ["Notice given", "Amount retained"],
    rows: [
      ["Over 60 days before departure", "25% of the climb cost"],
      ["30 to 60 days", "50%"],
      ["14 to 30 days", "75%"],
      ["Under 14 days", "100% (non-refundable)"],
    ],
  },
  note: "Pre- and post-climb hotel nights follow each property's own cancellation rules, which we confirm at the time of booking.",
};

const SAFARI_SCHEDULE: ContentSection = {
  heading: "Cancelling a safari",
  paragraphs: [
    "Our planning, coordination and guiding fees are non-refundable once a safari is confirmed and paid; cancel well in advance and we hold them as credit towards a future trip, with no expiry. National park fees paid on your behalf are refundable up to 24 hours before the safari starts.",
    "Lodges and camps apply their own cancellation terms, which we have to pass on. The usual industry schedule:",
  ],
  table: {
    headers: ["Notice given", "Typically retained by lodges"],
    rows: [
      ["Over 90 days before arrival", "Around 10% of accommodation"],
      ["60 to 90 days", "Around 30%"],
      ["30 to 60 days", "Around 60%"],
      ["8 to 30 days", "Around 80%"],
      ["7 days or fewer", "Usually 100%"],
    ],
  },
  note: "Luxury and ultra-premium properties often apply stricter terms, and light-aircraft and internal flights are generally non-refundable once issued. You receive the exact terms for your chosen lodges and flights before you confirm.",
};

const BEACH_SCHEDULE: ContentSection = {
  heading: "Cancelling a Zanzibar stay",
  paragraphs: [
    "Each Zanzibar resort sets its own cancellation policy, which varies by property and season and is stricter over Christmas, New Year and the July–August peak. We give you your resort's policy in writing before you book. As a general guide:",
  ],
  table: {
    headers: ["Notice given", "What resorts typically do"],
    rows: [
      ["Over 60 days before arrival", "Partial or full refund at most properties"],
      ["30 to 60 days", "Partial refund, often 40–60%"],
      ["Under 30 days", "Most retain the full amount"],
    ],
  },
};

const DAY_SCHEDULE: ContentSection = {
  heading: "Cancelling a day tour",
  paragraphs: [
    "Park and entry fees paid on your behalf are refundable up to 24 hours before the tour. Any other charges depend on how much notice you give, and your written quotation sets them out before you pay.",
  ],
};

const AFTER: ContentSection = {
  heading: "Postponing, refunds and insurance",
  bullets: [
    "Postpone rather than cancel where you can: climb payments stay as credit with no expiry date, and for safaris and beach stays we ask every partner to move your dates, often at no cost.",
    "Contact us as early as possible: every extra day of notice improves what we can transfer or recover.",
    "If we have to cancel for reasons beyond anyone's control, such as park closures or natural disasters, you can choose a full refund or full credit for a future trip.",
    "Refunds go back to your original payment method, normally within 14 to 30 business days, minus any bank transfer fees.",
    "We strongly recommend travel insurance covering trip cancellation, medical evacuation and, for climbs, high altitude.",
  ],
};

export function bookingTerms(pkg: TripPackage): ContentSection[] {
  const kind = termsKind(pkg);
  const schedules: Record<TermsKind, ContentSection[]> = {
    climb: [CLIMB_SCHEDULE],
    safari: [SAFARI_SCHEDULE],
    beach: [BEACH_SCHEDULE],
    "safari-beach": [SAFARI_SCHEDULE, BEACH_SCHEDULE],
    day: [DAY_SCHEDULE],
  };
  return [HOW_TO_BOOK, ...schedules[kind], AFTER];
}
