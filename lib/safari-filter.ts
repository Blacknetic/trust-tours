// Filter options for the /safaris sidebar. Kept free of data/packages.ts so the
// client filter never pulls the full trip data into the browser bundle.

export const SAFARI_TYPES = [
  { id: "big-five", label: "Big Five safari" },
  { id: "migration", label: "Great Migration" },
  { id: "zanzibar", label: "Safari + Zanzibar" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "Family-friendly" },
  { id: "cultural", label: "Cultural" },
  { id: "paramotoring", label: "Paramotoring" },
] as const;
export type SafariTypeId = (typeof SAFARI_TYPES)[number]["id"];

export const TRAVEL_TIMES = [
  { id: "1-5", label: "1 to 5 days", min: 1, max: 5 },
  { id: "6-11", label: "6 to 11 days", min: 6, max: 11 },
  { id: "12-plus", label: "12+ days", min: 12, max: Infinity },
] as const;
export type TravelTimeId = (typeof TRAVEL_TIMES)[number]["id"];

// The little the client needs to know about a trip to filter it.
export interface SafariFacets {
  slug: string;
  days: number;
  types: SafariTypeId[];
}

export const TRIPS_PER_PAGE = 9;

export interface SafariSelection {
  types: SafariTypeId[];
  times: TravelTimeId[];
}

// Ticking more boxes in one group widens the results; a tick in the other group
// narrows them. An empty group places no limit.
export const matchesType = (trip: SafariFacets, types: SafariTypeId[]) =>
  types.length === 0 || types.some((t) => trip.types.includes(t));

export const matchesTime = (trip: SafariFacets, times: TravelTimeId[]) =>
  times.length === 0 ||
  TRAVEL_TIMES.some(
    (t) => times.includes(t.id) && trip.days >= t.min && trip.days <= t.max,
  );

const isType = (v: string): v is SafariTypeId => SAFARI_TYPES.some((t) => t.id === v);
const isTime = (v: string): v is TravelTimeId => TRAVEL_TIMES.some((t) => t.id === v);

// The selection lives in the URL (?type=migration,honeymoon&days=6-11&page=2) so
// a filtered list can be shared and survives the back button from a trip page.
export function parseSelection(search: string): SafariSelection {
  const params = new URLSearchParams(search);
  return {
    types: (params.get("type")?.split(",") ?? []).filter(isType),
    times: (params.get("days")?.split(",") ?? []).filter(isTime),
  };
}

export function parsePage(search: string): number {
  const page = Number(new URLSearchParams(search).get("page"));
  return Number.isInteger(page) && page > 1 ? page : 1;
}

export function serializeSelection({ types, times }: SafariSelection, page = 1): string {
  const params = new URLSearchParams();
  if (types.length) params.set("type", types.join(","));
  if (times.length) params.set("days", times.join(","));
  if (page > 1) params.set("page", String(page));
  return params.toString();
}
