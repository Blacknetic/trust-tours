// Shared pieces for the rebuilt calving-season safaris (data/safaris/*.ts).
// Content comes from Ombeni's documents (flash drive D:\mpya\calvining season,
// Oct 2026). Prices are draft until he reviews the live pages.

import type { StayChoice } from "@/data/accommodations";
import { SAFARI_ADDONS } from "@/data/addons";
import { CONTACT_BULLETS } from "@/data/kilimanjaro/shared";
import type { ContentSection, FAQ, ItineraryDay, TripPackage } from "@/data/packages";
import type { ComfortLevel } from "@/lib/pricing";
import { calvingLinks } from "./links";

// Ombeni's per-person, per-day ranges for 2 adults sharing a private vehicle.
// A change here reprices every trip built with comfortLevels().
export const RATES = {
  midRange: { min: 455, max: 555 },
  luxury: { min: 755, max: 1200 },
  highEnd: { min: 1300, max: 2200 },
  ultra: { min: 2300, max: 5000 },
};

/** Priced for two adults only: other group sizes show "Ask" until Ombeni sends them. */
function perPerson(days: number, min: number) {
  return { tiers: [{ pax: 2, usd: min * days }], askSizes: [1, 3, 4, 5, 6] };
}

/** The four comfort levels for a trip of this length. */
export function comfortLevels(days: number, rates: typeof RATES = RATES): ComfortLevel[] {
  return [
    {
      id: "mid-range",
      label: "Mid-range",
      perDay: rates.midRange,
      groupPricing: perPerson(days, rates.midRange.min),
      summary:
        "A comfortable, well-organised safari with excellent wildlife viewing and good value, without paying for extensive luxury services.",
      includes: [
        "Comfortable 2–3-star lodges",
        "Quality tented accommodation where appropriate",
        "Private 4×4 safari vehicle",
        "Professional safari guide",
        "Full board",
        "Park and conservation fees",
        "Game drives",
        "Airport transfers",
      ],
    },
    {
      id: "luxury",
      label: "Luxury",
      perDay: rates.luxury,
      groupPricing: perPerson(days, rates.luxury.min),
      summary:
        "Upgraded lodges and premium tented camps with stylish interiors, excellent dining and attentive hospitality, while the safari stays focused on wildlife.",
      includes: [
        "Premium 4–5-star lodges and camps",
        "Prime-location accommodation where available",
        "Private 4×4 safari vehicle",
        "One-way flight from the Serengeti to Arusha or Zanzibar",
        "Highly experienced guide",
        "Swimming pool at the lodge",
        "Full board",
        "Park and conservation fees",
        "Private airport transfers",
        "More flexibility around the daily schedule",
      ],
      includedAddOns: ["serengeti-flight"],
    },
    {
      id: "high-end",
      label: "High-end luxury",
      perDay: rates.highEnd,
      groupPricing: perPerson(days, rates.highEnd.min),
      summary:
        "Exceptional camps and lodges with premium suites, refined cuisine and personal service, chosen for location and exclusivity.",
      includes: [
        "High-end luxury lodges and camps",
        "Private luxury safari vehicle",
        "Flights between the Serengeti and Arusha or Zanzibar, both ways",
        "Highly experienced private guide",
        "All-inclusive premium meals and service",
        "Flexible game-drive schedule",
        "Private airport transfers",
        "Private swimming pool",
        "Hot-air balloon safari",
        "Emergency assistance during the safari, including helicopter evacuation",
        "Priority accommodation selection where available",
      ],
      includedAddOns: ["serengeti-flight", "balloon-safari"],
    },
    {
      id: "ultra-premium",
      label: "Ultra-premium",
      perDay: rates.ultra,
      groupPricing: perPerson(days, rates.ultra.min),
      summary:
        "Created for special celebrations and discerning travellers. Inclusions are tailored to the property and flights you choose, because not every camp offers every service.",
      includes: [
        "Exceptional private suites or villas",
        "The highest level of personal hospitality",
        "Premium dining",
        "Bespoke guiding arrangements",
        "Private or charter-flight options",
      ],
      includedAddOns: ["serengeti-flight"],
    },
  ];
}

// Stays offered at each comfort level, by part of the route. Ombeni's level
// lists come first where he names them; a change here reaches every trip.
export const STAYS_ARUSHA = {
  "mid-range": [
    "parrot-hotel", "rivertrees-country-inn", "moivaro-coffee-lodge", "kibo-palace", "four-points-arusha",
    "mount-meru-hotel", "arumeru-river-lodge", "ngare-sero-mountain-lodge", "kia-lodge", "airport-planet-lodge",
  ],
  luxury: ["arusha-coffee-lodge", "legendary-lodge", "gran-melia-arusha", "arusha-serena", "african-tulip", "kili-villas"],
  "high-end": ["arusha-coffee-lodge", "legendary-lodge", "siringit-villa"],
  "ultra-premium": ["siringit-villa", "arusha-coffee-lodge", "legendary-lodge"],
};

export const STAYS_HIGHLANDS = {
  "mid-range": [
    "kudu-lodge", "ngorongoro-farm-house", "ngorongoro-serena", "ngorongoro-sopa", "rhino-lodge",
    "ngorongoro-kuhama", "farm-house-valley", "acacia-farm-lodge", "bougainvillea-lodge", "karatu-simba-lodge",
    "country-lodge-karatu", "tloma-lodge",
  ],
  luxury: [
    "marera-valley-lodge", "the-manor-ngorongoro", "neptune-ngorongoro", "gibbs-farm", "the-retreat-ngorongoro",
    "plantation-lodge", "oldeani-mountain-lodge", "ngorongoro-coffee-lodge", "kitela-lodge", "melia-ngorongoro",
  ],
  "high-end": ["the-highlands", "gibbs-farm", "melia-ngorongoro", "the-retreat-ngorongoro", "ngorongoro-crater-lodge"],
  "ultra-premium": ["the-highlands", "the-retreat-ngorongoro", "ngorongoro-crater-lodge"],
};

export const STAYS_NDUTU = {
  "mid-range": ["ndutu-serengeti-heritage", "ndutu-safari-lodge", "ndutu-wilderness-camp", "ndutu-kati-kati"],
  luxury: ["lake-masek", "lemala-ndutu", "lake-ndutu-luxury", "sanctuary-kusini"],
  "high-end": ["olakira-camp", "nomad-serengeti-camp", "serengeti-under-canvas"],
  "ultra-premium": ["olakira-camp", "nomad-serengeti-camp", "serengeti-under-canvas"],
};

export const STAYS_CENTRAL_SERENGETI = {
  "mid-range": [
    "serengeti-heritage-tented-camp", "serengeti-kati-kati", "kubu-kubu", "serengeti-serena",
    "seronera-wildlife-lodge", "kimarishe-serengeti", "serengeti-kuhama",
  ],
  luxury: ["lemala-nanyukie", "lemala-ewanjan", "serengeti-explorer", "melia-serengeti", "dunia-camp", "serengeti-pioneer-camp"],
  "high-end": ["lemala-nanyukie", "four-seasons-serengeti", "dunia-camp", "serengeti-pioneer-camp"],
  "ultra-premium": ["four-seasons-serengeti"],
};

export const stop = (
  id: string,
  nights: string,
  place: string,
  options: StayChoice["options"],
): StayChoice => ({ id, nights, place, options });

// Wildlife photos supplied in Ombeni's calving documents.
export const IMG = {
  tarangire: {
    src: "/images/safaris/tarangire-elephants.jpg",
    alt: "A herd of elephants beneath a flat-topped acacia tree in Tarangire National Park",
  },
  baobabs: {
    src: "/images/safaris/tarangire-baobabs.jpg",
    alt: "A safari vehicle on a track between huge baobab trees in Tarangire National Park",
  },
  elephantsVehicle: {
    src: "/images/safaris/tarangire-elephants-vehicle.jpg",
    alt: "Guests in a safari vehicle watching elephants beside the track in Tarangire",
  },
  crater: {
    src: "/images/safaris/ngorongoro-crater-floor.jpg",
    alt: "A safari vehicle among zebra and wildebeest on the Ngorongoro Crater floor, with the crater walls behind",
  },
  craterRhino: {
    src: "/images/safaris/ngorongoro-black-rhino.jpg",
    alt: "A safari vehicle stopped near a black rhino and its calf",
  },
  craterZebra: {
    src: "/images/safaris/ngorongoro-zebra-vehicles.jpg",
    alt: "Safari vehicles beside zebras among yellow flowers on the crater floor",
  },
  calf: {
    src: "/images/safaris/ndutu-newborn-calf.jpg",
    alt: "A young wildebeest calf feeding from its mother",
  },
  calves: {
    src: "/images/safaris/ndutu-wildebeest-calves.jpg",
    alt: "Wildebeest mothers with their young calves on the green Ndutu plains",
  },
  cheetahChase: {
    src: "/images/safaris/ndutu-cheetah-chase.jpg",
    alt: "A cheetah chasing a wildebeest calf across the short-grass plains",
  },
  cheetahHerd: {
    src: "/images/safaris/ndutu-cheetah-herd.jpg",
    alt: "A cheetah walking past a herd of wildebeest on the plains",
  },
  plainsHerds: {
    src: "/images/safaris/ndutu-plains-herds.jpg",
    alt: "Herds of wildebeest scattered across green plains beneath a hazy sky",
  },
  sunsetHerd: {
    src: "/images/safaris/ndutu-sunset-herd.jpg",
    alt: "Wildebeest walking in single file through golden evening light",
  },
  duskHerd: {
    src: "/images/safaris/ndutu-dusk-herd.jpg",
    alt: "Wildebeest crossing the plains at dusk under a pink sky",
  },
  serengetiLions: {
    src: "/images/safaris/serengeti-lions.jpg",
    alt: "A lioness and her cubs resting at the base of a tree in the Serengeti",
  },
  serengetiLion: {
    src: "/images/safaris/serengeti-lion-waterhole.jpg",
    alt: "A male lion beside a shallow pool on the open plains",
  },
  plains: {
    src: "/images/serengeti-plains.jpg",
    alt: "Wildebeest and zebra herds grazing on green plains in the Southern Serengeti",
  },
};

/** The arrival day most calving trips open with. */
export const arrivalDay = (stayId: string): ItineraryDay => ({
  day: 1,
  title: "Kilimanjaro Airport to Arusha: arrival and safari briefing",
  description:
    "Your Tanzanian adventure begins at Kilimanjaro International Airport (JRO), where your Trust Tours & Safaris representative welcomes you and helps with your luggage. You then transfer privately to Arusha, the safari capital of northern Tanzania. The drive is about 50 km and takes around an hour, depending on traffic.\n\nDepending on your arrival time, the rest of the day is yours. Relax, recover from your journey and prepare for the days ahead. Your safari guide will brief you on the route, the wildlife you can expect and what the next day holds.",
  experience: "A warm welcome and a comfortable first evening in Arusha.",
  notes: [
    "Why this night matters: Instead of starting a long safari drive straight after an international flight, you rest first and begin the safari refreshed.",
  ],
  distanceKm: 50,
  hours: "About 1 hour",
  meals: "Dinner",
  accommodation: "Your chosen stay in Arusha",
  stayId,
});

/** Standard calving FAQs that follow each trip's own questions. */
const CALVING_FAQS: FAQ[] = [
  {
    question: "When is the Ndutu calving season?",
    answer:
      "The Ndutu season runs from about December to March. January and February are the prime calving window, with February usually the peak. The exact timing and location change with the rain.",
  },
  {
    question: "Will I definitely see newborn calves?",
    answer:
      "We can't guarantee it, because wildlife sightings are natural events. Travelling in January or February gives you a strong chance, and your guide adapts the route each day to follow the herds.",
  },
  {
    question: "Can I choose where I sleep?",
    answer:
      "Yes. Pick your comfort level, then choose a stay for each part of the route. Your choices go with your booking request, and Ombeni confirms availability. If a stay is full, he will suggest a similar one.",
  },
  {
    question: "Can I add a hot-air balloon safari?",
    answer:
      "Yes. A balloon safari costs $600 per person and is subject to weather and availability. Tick it in the booking box. It is already included at High-end luxury level.",
  },
];

const SEASON_SECTION: ContentSection = {
  heading: "Best time to book a calving safari",
  paragraphs: [
    "December to March is the overall Ndutu season, with January and February the prime calving window. Here is what normally happens in each month.",
  ],
  table: {
    headers: ["Month", "What to expect"],
    rows: [
      ["December", "The migration begins gathering. The herds generally start concentrating in the south as the short rains bring fresh grass."],
      ["January", "Calving begins. More wildebeest arrive and the first births take place."],
      ["February", "Peak calving. Normally the core month, with huge concentrations of wildebeest, newborn calves and strong predator activity."],
      ["March", "Late calving and transition. Newborn and predator sightings can still be excellent, especially early in the month, but the herds may begin moving north and west."],
    ],
  },
  note: "The exact location of the herds varies with rainfall and conditions, and no wildlife sighting can ever be guaranteed.",
};

const BOOK_SECTION: ContentSection = {
  heading: "Book your calving safari",
  paragraphs: [
    "Ndutu camps can fill early in the calving season, so we recommend confirming as early as you can. To receive an accurate quotation, tell us your travel dates, number of travellers, preferred comfort level, room-sharing arrangements and whether you will arrive at JRO, ARK or an Arusha hotel.",
  ],
  bullets: CONTACT_BULLETS,
};

const INCLUDED = [
  "Pickup: From an agreed location in Arusha, Kilimanjaro International Airport (JRO) or Arusha Airport (ARK).",
  "Vehicle: Private 4×4 safari vehicle with a pop-up roof for wildlife viewing and photography.",
  "Guide: A professional English-speaking driver-guide. Other languages may be available by arrangement.",
  "Accommodation: In your selected comfort level, based on two people sharing a double or twin room.",
  "Meals: As listed in the day-by-day itinerary, including picnic lunches.",
  "Drinks: Soft drinks, plus drinking water in the safari vehicle.",
  "Game drives: As set out in the itinerary.",
  "Park fees: All park entry, conservation, crater and vehicle fees for the confirmed itinerary.",
  "Insurance: Emergency evacuation insurance.",
  "Transfers: Road transfers between destinations and to the agreed Arusha or airport drop-off point.",
  "Taxes: Government fees and taxes, and applicable statutory charges listed in your written quotation.",
];

const EXCLUDED = [
  "International flights to and from Tanzania.",
  "Tanzania visa fees and any passport or travel-document costs.",
  "Travel and medical insurance.",
  "Single-room supplements for guests who do not share.",
  "Meals, drinks or services not listed as included in the itinerary.",
  "Alcoholic drinks, laundry, telephone charges and personal expenses.",
  "Tips for your driver-guide and accommodation staff.",
  "Optional activities, including hot-air balloon safaris ($600 per person), cultural visits ($80 per person) and guided walking activities ($85 per person).",
  "Additional nights or itinerary changes beyond the confirmed arrangements.",
  "Unscheduled transfers, extra safari days or changes requested after confirmation.",
  "Medical expenses or costs arising from personal emergencies.",
  "New government fees or charges introduced after your quotation, where the contract allows them to be passed on.",
];

type CalvingTrip = Pick<
  TripPackage,
  | "slug" | "seoTitle" | "metaDescription" | "destinations" | "title" | "shortName" | "days"
  | "heroImage" | "summary" | "overview" | "atAGlance" | "highlights" | "itinerary"
  | "stayChoices" | "tags" | "oldUrl"
> & {
  sections: ContentSection[];
  faqs: FAQ[];
  rates?: typeof RATES;
  /** Set when the flight back is part of the itinerary at every level. */
  flightIncluded?: boolean;
};

/** A calving safari: everything that is the same on every page, around its own story. */
export function calvingTrip({ rates = RATES, flightIncluded, ...trip }: CalvingTrip): TripPackage {
  const from = rates.midRange.min * trip.days;
  const levels = comfortLevels(trip.days, rates);
  return {
    ...trip,
    category: "safari",
    priceFromUSD: from,
    priceNote:
      "Indicative price per person for 2 adults sharing a private vehicle, at Mid-range level. Your written quote confirms the final price.",
    comfortLevels: levels,
    addOns: flightIncluded ? SAFARI_ADDONS.filter((id) => id !== "serengeti-flight") : SAFARI_ADDONS,
    links: calvingLinks(trip.slug),
    tier: ["mid-range", "comfort"],
    gallery: [],
    pricingDetails: [
      "These are indicative private-safari planning ranges per person, based on 2 adults sharing one private safari vehicle and a room. They are not confirmed quotations.",
      "Your final cost depends on your travel dates, the number of guests, camp availability, flight fares and the exact services you choose. Ndutu camps can fill early in the calving season, so we confirm your price and accommodation in writing before you pay a deposit.",
      "To request a price for one traveller or a group of three to six, select your group size in the booking box and Ombeni will quote you directly.",
    ],
    included: flightIncluded
      ? [...INCLUDED, "Flight: Scheduled flight from the Serengeti to Arusha, subject to availability."]
      : INCLUDED,
    excluded: EXCLUDED,
    sections: [...trip.sections, SEASON_SECTION, BOOK_SECTION],
    faqs: [
      {
        question: "How much does this safari cost?",
        answer: `It starts from $${from.toLocaleString()} per person at Mid-range level, based on 2 adults sharing. Luxury starts from $${levels[1].groupPricing.tiers[0].usd.toLocaleString()}, High-end luxury from $${levels[2].groupPricing.tiers[0].usd.toLocaleString()} and Ultra-premium from $${levels[3].groupPricing.tiers[0].usd.toLocaleString()}. These are indicative prices, and your written quote confirms the final figure.`,
      },
      ...trip.faqs,
      ...CALVING_FAQS,
    ],
    bestMonths: ["Dec", "Jan", "Feb", "Mar"],
  };
}
