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
  "zanzibar-extension": {
    id: "zanzibar-extension",
    label: "Add Zanzibar beach days",
    description: "Recover on the beach: flights, transfers and hotel arranged for you.",
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

// Marangu sleeps in huts with shared toilets, so no private toilet tent.
export const KILIMANJARO_HUT_ADDONS = KILIMANJARO_CAMPING_ADDONS.filter((id) => id !== "private-toilet");
