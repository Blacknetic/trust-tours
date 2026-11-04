// Filter options for the sidebars on /safaris and /zanzibar. Kept free of
// data/packages.ts so the client filter never pulls the full trip data into the
// browser bundle.

export interface FilterOption {
  id: string;
  label: string;
}

// One block of checkboxes. `param` is its key in the URL (?type=…&days=…).
export interface FilterGroup {
  param: string;
  title: string;
  options: readonly FilterOption[];
}

export const SAFARI_TYPES = [
  { id: "big-five", label: "Big Five safari" },
  { id: "migration", label: "Great Migration" },
  { id: "cross-migration", label: "Cross migration" },
  { id: "calving", label: "Calving season" },
  { id: "day-trips", label: "Day trips" },
  { id: "fly-in", label: "Fly-in safari" },
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

export const travelTimeOf = (days: number): TravelTimeId =>
  TRAVEL_TIMES.find((t) => days >= t.min && days <= t.max)?.id ?? "12-plus";

const TRAVEL_TIME_GROUP: FilterGroup = {
  param: "days",
  title: "Travel time",
  options: TRAVEL_TIMES.map(({ id, label }) => ({ id, label })),
};

export const SAFARI_FILTER_GROUPS: FilterGroup[] = [
  { param: "type", title: "Type", options: SAFARI_TYPES },
  TRAVEL_TIME_GROUP,
];

export const ZANZIBAR_TYPES = [
  { id: "island", label: "Beach holiday" },
  { id: "safari", label: "Safari + Zanzibar" },
  { id: "honeymoon", label: "Honeymoon" },
] as const;
export type ZanzibarTypeId = (typeof ZANZIBAR_TYPES)[number]["id"];

export const ZANZIBAR_AREAS = [
  { id: "stone-town", label: "Stone Town" },
  { id: "north-coast", label: "North coast (Nungwi, Kendwa)" },
  { id: "east-coast", label: "East coast (Paje, Matemwe)" },
] as const;
export type ZanzibarAreaId = (typeof ZANZIBAR_AREAS)[number]["id"];

export const ZANZIBAR_FILTER_GROUPS: FilterGroup[] = [
  { param: "type", title: "Type", options: ZANZIBAR_TYPES },
  { param: "stay", title: "Where you stay", options: ZANZIBAR_AREAS },
  TRAVEL_TIME_GROUP,
];

// The little the client needs to know about a trip to filter it: for each
// group's URL param, the option ids the trip carries.
export interface TripFacets {
  slug: string;
  values: Record<string, string[]>;
}

export type FilterSelection = Record<string, string[]>;

// Ticking more boxes in one group widens the results; a tick in another group
// narrows them. An empty group places no limit.
export const matchesGroup = (trip: TripFacets, param: string, ids: string[] = []) =>
  ids.length === 0 || ids.some((id) => trip.values[param]?.includes(id));

/** Matches every group of the selection, optionally ignoring one of them. */
export const matchesSelection = (trip: TripFacets, selection: FilterSelection, except?: string) =>
  Object.entries(selection).every(
    ([param, ids]) => param === except || matchesGroup(trip, param, ids),
  );

// The selection lives in the URL (?type=migration,honeymoon&days=6-11) so a
// filtered list can be shared and survives the back button from a trip page.
export function parseSelection(search: string, groups: FilterGroup[]): FilterSelection {
  const params = new URLSearchParams(search);
  return Object.fromEntries(
    groups.map((g) => [
      g.param,
      (params.get(g.param)?.split(",") ?? []).filter((v) => g.options.some((o) => o.id === v)),
    ]),
  );
}

export function serializeSelection(selection: FilterSelection, groups: FilterGroup[]): string {
  const params = new URLSearchParams();
  for (const g of groups) {
    const ids = selection[g.param] ?? [];
    if (ids.length) params.set(g.param, ids.join(","));
  }
  return params.toString();
}
