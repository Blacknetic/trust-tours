// data/addons.ts — optional extras a visitor can tick in the booking box.
// Trips list the ids they offer in `TripPackage.addOns`. Leave `priceUSD`
// unset until Ombeni confirms a price; the box then shows "Price on request"
// and the extra still travels with the booking request.

export type AddOnUnit = "trip" | "person" | "night";

export interface AddOn {
  id: string;
  label: string;
  description: string;
  priceUSD?: number;
  unit: AddOnUnit;
}

export const ADD_ONS: Record<string, AddOn> = {
  "private-toilet": {
    id: "private-toilet",
    label: "Private toilet",
    description: "A portable toilet in its own tent, carried and cleaned by a dedicated porter at every camp.",
    priceUSD: 200,
    unit: "trip",
  },
  "extra-hotel-night": {
    id: "extra-hotel-night",
    label: "Extra hotel night",
    description: "Another night before or after the climb — useful for jet lag or a rest day.",
    unit: "night",
  },
  "single-supplement": {
    id: "single-supplement",
    label: "Single room supplement",
    description: "Your own hotel room (and your own tent on camping routes) instead of sharing.",
    unit: "person",
  },
  "bottled-oxygen": {
    id: "bottled-oxygen",
    label: "Supplementary bottled oxygen",
    description: "Oxygen for comfort use on the mountain, on top of the emergency supply.",
    unit: "trip",
  },
  "gear-rental": {
    id: "gear-rental",
    label: "Climbing gear rental",
    description: "Sleeping bag, down jacket, poles and other kit, fitted before the climb.",
    unit: "person",
  },
  "safari-extension": {
    id: "safari-extension",
    label: "Add a safari after the climb",
    description: "Serengeti, Ngorongoro or Tarangire — we plan it around your descent date.",
    unit: "trip",
  },
  "balloon-safari": {
    id: "balloon-safari",
    label: "Hot-air balloon safari",
    description: "A sunrise flight over the Serengeti with a bush breakfast after landing. Subject to weather and availability.",
    priceUSD: 600,
    unit: "person",
  },
  "cultural-visit": {
    id: "cultural-visit",
    label: "Maasai cultural visit",
    description: "Time with a Maasai community to learn about daily life and traditions.",
    priceUSD: 80,
    unit: "person",
  },
  "walking-safari": {
    id: "walking-safari",
    label: "Guided walking activity",
    description: "Leave the vehicle and explore on foot with a guide, where the park allows it.",
    priceUSD: 85,
    unit: "person",
  },
  "bush-breakfast": {
    id: "bush-breakfast",
    label: "Private bush breakfast",
    description: "Breakfast set up for your party out on the plains.",
    unit: "trip",
  },
  "serengeti-flight": {
    id: "serengeti-flight",
    label: "Flight to Arusha",
    description: "Fly from the Serengeti to Arusha instead of the long road journey back.",
    unit: "person",
  },
  "tanzanite-tour": {
    id: "tanzanite-tour",
    label: "Tanzanite tour",
    description: "A half-day in Arusha learning how tanzanite is mined, graded and cut, or a full day at the Mererani mines. Price on request.",
    unit: "person",
  },
  "extra-serengeti-night": {
    id: "extra-serengeti-night",
    label: "Extra Serengeti night",
    description: "One more night and another full day in the Serengeti.",
    unit: "night",
  },
  "kilimanjaro-extension": {
    id: "kilimanjaro-extension",
    label: "Add a Kilimanjaro climb",
    description: "Climb before or after your safari. We plan the dates so the two fit together.",
    unit: "trip",
  },
  "zanzibar-extension": {
    id: "zanzibar-extension",
    label: "Add Zanzibar beach days",
    description: "Recover on the beach: flights, transfers and hotel arranged for you.",
    unit: "trip",
  },

  // Zanzibar excursions. Ombeni's 2026 list gives typical ranges, not fixed
  // prices, so each is quoted with the trip and the range shown as a guide.
  "safari-blue": {
    id: "safari-blue",
    label: "Safari Blue excursion",
    description: "A full day by dhow in Menai Bay: snorkelling, sandbanks and a seafood lunch. Typically $70–$100 per person.",
    unit: "person",
  },
  "mnemba-snorkelling": {
    id: "mnemba-snorkelling",
    label: "Mnemba snorkelling trip",
    description: "A half-day boat trip from Matemwe to snorkel the reefs around Mnemba Atoll, with a chance of dolphins. Typically $40–$80 per person.",
    unit: "person",
  },
  "prison-island-nakupenda": {
    id: "prison-island-nakupenda",
    label: "Prison Island and Nakupenda sandbank",
    description: "Giant tortoises on Changuu Island, then swimming and a seafood lunch on the sandbank. Typically $60–$90 per person.",
    unit: "person",
  },
  "sunset-dhow-cruise": {
    id: "sunset-dhow-cruise",
    label: "Sunset dhow cruise",
    description: "Two hours under sail as the sun goes down, with drinks and snacks. Typically $25–$40 per person.",
    unit: "person",
  },
  "kizimkazi-dolphins": {
    id: "kizimkazi-dolphins",
    label: "Kizimkazi dolphin trip",
    description: "An early boat trip off the south coast to look for dolphins. Typically $25–$45 per person.",
    unit: "person",
  },
  "scuba-dive": {
    id: "scuba-dive",
    label: "Scuba dive",
    description: "A guided dive with equipment, from Nungwi or Matemwe. Typically $60–$90 per person, per dive.",
    unit: "person",
  },
  "rock-restaurant": {
    id: "rock-restaurant",
    label: "Transfer to The Rock restaurant",
    description: "Return transport to the famous restaurant on a rock in the sea at Michamvi. Typically $30–$60, with the meal paid there.",
    unit: "trip",
  },
  "zanzibar-safari": {
    id: "zanzibar-safari",
    label: "Add a safari",
    description: "Fly to the Serengeti or drive the northern parks before or after the beach. We plan the flights so the two fit together.",
    unit: "trip",
  },
};

const UNIT_LABEL: Record<AddOnUnit, string> = {
  trip: "per group",
  person: "per person",
  night: "per night",
};

export function addOnPriceLabel(a: AddOn): string {
  return a.priceUSD != null ? `$${a.priceUSD.toLocaleString()} ${UNIT_LABEL[a.unit]}` : "Price on request";
}

/** Cost of an add-on for the whole party; null when it is priced on request. */
export function addOnTotal(a: AddOn, group: number): number | null {
  if (a.priceUSD == null) return null;
  return a.unit === "person" ? a.priceUSD * group : a.priceUSD;
}

export const KILIMANJARO_CAMPING_ADDONS = [
  "private-toilet",
  "extra-hotel-night",
  "single-supplement",
  "bottled-oxygen",
  "gear-rental",
  "safari-extension",
  "zanzibar-extension",
];

export const SAFARI_ADDONS = [
  "balloon-safari",
  "cultural-visit",
  "walking-safari",
  "bush-breakfast",
  "serengeti-flight",
  "extra-serengeti-night",
  "single-supplement",
  "zanzibar-extension",
  "kilimanjaro-extension",
  "tanzanite-tour",
];

export const ZANZIBAR_ADDONS = [
  "safari-blue",
  "mnemba-snorkelling",
  "prison-island-nakupenda",
  "sunset-dhow-cruise",
  "kizimkazi-dolphins",
  "scuba-dive",
  "rock-restaurant",
  "single-supplement",
  "zanzibar-safari",
];

// Marangu sleeps in huts with shared toilets, so no private toilet tent.
export const KILIMANJARO_HUT_ADDONS = KILIMANJARO_CAMPING_ADDONS.filter((id) => id !== "private-toilet");
