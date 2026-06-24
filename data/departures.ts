// data/departures.ts — scheduled Kilimanjaro GROUP departures.
//
// A departure NEVER duplicates itinerary content. It references an existing
// route package (data/packages.ts) by slug — the join page reads the day-by-day
// itinerary, inclusions and FAQs straight from that package.
//
// MAINTENANCE (manual, by design — no backend):
//   • To add a departure: add a row to SEED below.
//   • To change availability: edit its `status` ("open" | "filling" | "full").
//     We show COARSE status only — never a fake "2 spots left" count.
//   • Past departures (endISO before today) auto-hide via upcomingDepartures().
//
// Only routes that have a matching package are scheduled, so every "Join" page
// has a real itinerary to show: Lemosho, Machame, Marangu, Rongai, Northern Circuit.

import { getPackage, type TripPackage } from "@/data/packages";

export type RouteKey = "lemosho" | "machame" | "marangu" | "rongai" | "northern";
export type DepartureStatus = "open" | "filling" | "full";

export interface RouteMeta {
  key: RouteKey;
  name: string;
  packageSlug: string;
  // Brown-family accent (brand is strictly brown & white) used for the route bar.
  accent: string;
}

export const ROUTES: Record<RouteKey, RouteMeta> = {
  lemosho: { key: "lemosho", name: "Lemosho Route", packageSlug: "8-day-lemosho-route", accent: "#4a2912" },
  machame: { key: "machame", name: "Machame Route", packageSlug: "7-day-machame-route", accent: "#6e3b1f" },
  marangu: { key: "marangu", name: "Marangu Route", packageSlug: "6-day-marangu-route", accent: "#8a5a32" },
  rongai: { key: "rongai", name: "Rongai Route", packageSlug: "6-day-rongai-route", accent: "#7a4a28" },
  northern: { key: "northern", name: "Northern Circuit", packageSlug: "9-day-northern-circuit", accent: "#2a1f0e" },
};

export const ROUTE_ORDER: RouteKey[] = ["lemosho", "machame", "marangu", "rongai", "northern"];

// Reservation terms (from the group-departures brief).
export const DEPOSIT_USD = 200;
export const BALANCE_DUE_DAYS = 60;

export interface Departure {
  id: string; // URL slug, e.g. "join-lemosho-04-jul-2026"
  route: RouteMeta;
  routeKey: RouteKey;
  startISO: string;
  endISO: string;
  days: number;
  priceUSD: number;
  maxSpots: number;
  status: DepartureStatus;
  guaranteed: boolean;
  special?: string; // optional badge, e.g. "Full Moon climb"
}

// ── Raw schedule ──────────────────────────────────────────────────────────
// [routeKey, startISO, endISO, priceUSD, maxSpots, status, special?]
type Seed = [RouteKey, string, string, number, number, DepartureStatus, string?];

const SEED: Seed[] = [
  // LEMOSHO — 8 days
  ["lemosho", "2026-07-04", "2026-07-11", 2650, 12, "open"],
  ["lemosho", "2026-07-18", "2026-07-25", 2650, 12, "filling"],
  ["lemosho", "2026-07-23", "2026-07-30", 2650, 12, "open", "Full Moon climb"],
  ["lemosho", "2026-08-01", "2026-08-08", 2750, 12, "open"],
  ["lemosho", "2026-08-15", "2026-08-22", 2750, 12, "full"],
  ["lemosho", "2026-09-05", "2026-09-12", 2650, 12, "open"],
  ["lemosho", "2026-09-19", "2026-09-26", 2650, 12, "filling"],
  ["lemosho", "2026-10-03", "2026-10-10", 2400, 12, "open"],
  ["lemosho", "2026-10-17", "2026-10-24", 2400, 12, "open"],
  ["lemosho", "2026-11-07", "2026-11-14", 2200, 12, "open"],
  ["lemosho", "2026-12-19", "2026-12-26", 2650, 12, "filling"],
  ["lemosho", "2027-01-09", "2027-01-16", 2400, 12, "open"],
  ["lemosho", "2027-02-06", "2027-02-13", 2400, 12, "open"],
  ["lemosho", "2027-03-06", "2027-03-13", 2200, 12, "open"],
  ["lemosho", "2027-06-05", "2027-06-12", 2650, 12, "open"],
  // MACHAME — 7 days
  ["machame", "2026-07-07", "2026-07-13", 2100, 12, "filling"],
  ["machame", "2026-07-21", "2026-07-27", 2100, 12, "full"],
  ["machame", "2026-08-04", "2026-08-10", 2200, 12, "open"],
  ["machame", "2026-08-18", "2026-08-24", 2200, 12, "filling"],
  ["machame", "2026-09-08", "2026-09-14", 2100, 12, "open"],
  ["machame", "2026-09-22", "2026-09-28", 2100, 12, "open"],
  ["machame", "2026-10-06", "2026-10-12", 1950, 12, "open"],
  ["machame", "2026-11-03", "2026-11-09", 1800, 12, "open"],
  ["machame", "2026-12-22", "2026-12-28", 2100, 12, "open"],
  ["machame", "2027-01-12", "2027-01-18", 1950, 12, "open"],
  ["machame", "2027-02-09", "2027-02-15", 1950, 12, "open"],
  ["machame", "2027-06-08", "2027-06-14", 2100, 12, "open"],
  // MARANGU — 6 days
  ["marangu", "2026-07-05", "2026-07-10", 1600, 12, "open"],
  ["marangu", "2026-08-02", "2026-08-07", 1650, 12, "open"],
  ["marangu", "2026-09-06", "2026-09-11", 1600, 12, "open"],
  ["marangu", "2026-10-04", "2026-10-09", 1450, 12, "open"],
  ["marangu", "2026-12-20", "2026-12-25", 1600, 12, "open"],
  ["marangu", "2027-01-10", "2027-01-15", 1450, 12, "open"],
  ["marangu", "2027-02-07", "2027-02-12", 1450, 12, "open"],
  // RONGAI — 6 days (quiet northern approach; also runs in the long rains)
  ["rongai", "2026-07-06", "2026-07-11", 1850, 12, "open"],
  ["rongai", "2026-08-03", "2026-08-08", 1900, 12, "filling"],
  ["rongai", "2026-09-07", "2026-09-12", 1850, 12, "open"],
  ["rongai", "2026-10-05", "2026-10-10", 1750, 12, "open"],
  ["rongai", "2027-01-11", "2027-01-16", 1750, 12, "open"],
  ["rongai", "2027-02-08", "2027-02-13", 1750, 12, "open"],
  // NORTHERN CIRCUIT — 9 days
  ["northern", "2026-07-03", "2026-07-11", 3400, 8, "filling"],
  ["northern", "2026-08-01", "2026-08-09", 3500, 8, "filling"],
  ["northern", "2026-09-04", "2026-09-12", 3400, 8, "open"],
  ["northern", "2026-10-02", "2026-10-10", 3200, 8, "open"],
  ["northern", "2027-01-08", "2027-01-16", 3200, 8, "open"],
  ["northern", "2027-02-05", "2027-02-13", 3200, 8, "open"],
  ["northern", "2027-06-04", "2027-06-12", 3400, 8, "open"],
];

const MONTH_ABBR = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

function daysBetween(startISO: string, endISO: string): number {
  const ms = Date.parse(endISO) - Date.parse(startISO);
  return Math.round(ms / 86_400_000) + 1; // inclusive of arrival day
}

function buildId(routeKey: RouteKey, startISO: string): string {
  const d = new Date(`${startISO}T00:00:00Z`);
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const mmm = MONTH_ABBR[d.getUTCMonth()];
  return `join-${routeKey}-${dd}-${mmm}-${d.getUTCFullYear()}`;
}

export const DEPARTURES: Departure[] = SEED.map(
  ([routeKey, startISO, endISO, priceUSD, maxSpots, status, special]) => ({
    id: buildId(routeKey, startISO),
    route: ROUTES[routeKey],
    routeKey,
    startISO,
    endISO,
    days: daysBetween(startISO, endISO),
    priceUSD,
    maxSpots,
    status,
    guaranteed: true,
    special,
  }),
).sort((a, b) => a.startISO.localeCompare(b.startISO));

// ── Queries ───────────────────────────────────────────────────────────────

/** Future departures only (endISO today-or-later), soonest first. */
export function upcomingDepartures(now: Date = new Date()): Departure[] {
  const today = now.toISOString().slice(0, 10);
  return DEPARTURES.filter((d) => d.endISO >= today);
}

export function getDeparture(id: string): Departure | undefined {
  return DEPARTURES.find((d) => d.id === id);
}

export function departurePackage(d: Departure): TripPackage | undefined {
  return getPackage(d.route.packageSlug);
}

export interface MonthOption {
  key: string; // "2026-07"
  label: string; // "Jul 2026"
}

/** Distinct months that have an upcoming departure, in chronological order. */
export function departureMonths(deps: Departure[]): MonthOption[] {
  const seen = new Map<string, MonthOption>();
  for (const d of deps) {
    const key = d.startISO.slice(0, 7);
    if (!seen.has(key)) {
      const dt = new Date(`${d.startISO}T00:00:00Z`);
      const label = `${MONTH_ABBR[dt.getUTCMonth()].replace(/^\w/, (c) => c.toUpperCase())} ${dt.getUTCFullYear()}`;
      seen.set(key, { key, label });
    }
  }
  return [...seen.values()].sort((a, b) => a.key.localeCompare(b.key));
}

const FMT = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });
const FMT_FULL = new Intl.DateTimeFormat("en-GB", {
  day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
});

/** "4 – 11 Jul 2026" */
export function formatDateRange(d: Departure): string {
  const start = FMT.format(new Date(`${d.startISO}T00:00:00Z`));
  const end = FMT.format(new Date(`${d.endISO}T00:00:00Z`));
  const year = d.startISO.slice(0, 4);
  return `${start} – ${end} ${year}`;
}

/** "4 July 2026" */
export function formatLongDate(iso: string): string {
  return FMT_FULL.format(new Date(`${iso}T00:00:00Z`));
}

export const STATUS_LABEL: Record<DepartureStatus, string> = {
  open: "Spots open",
  filling: "Filling fast",
  full: "Full — join waitlist",
};
