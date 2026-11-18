// Comfort levels and stay choices for the older safaris in data/packages.ts,
// so every safari page has the same layout: four level cards, "Your stays"
// and the booking box. Agreed with the user on 2026-11-16; added to Trust Tours on 2026-11-18.
//
// Prices: the standard daily rates (RATES, × days), except where Ombeni's
// documents give his own price for a level, which is kept as it is.

import type { StayChoice } from "@/data/accommodations";
import type { TripPackage } from "@/data/packages";
import type { ComfortLevel } from "@/lib/pricing";
import {
  comfortLevels,
  stop,
  STAYS_ARUSHA,
  STAYS_CENTRAL_SERENGETI,
  STAYS_HIGHLANDS,
  STAYS_MANYARA,
  STAYS_NDUTU,
  STAYS_NORTH_SERENGETI,
  STAYS_TARANGIRE,
} from "./shared";
import { STAYS_STONE_TOWN, STAYS_ZANZIBAR_BEACH } from "@/data/zanzibar/shared";

type LevelId = "budget" | "mid-range" | "luxury" | "high-end" | "ultra-premium";
type Price = number | [number, number];

const NATRON = {
  budget: ["lake-natron-tented-camp"],
  "mid-range": ["lake-natron-tented-camp"],
  luxury: ["lake-natron-tented-camp"],
  "high-end": ["lake-natron-tented-camp"],
  "ultra-premium": ["lake-natron-tented-camp"],
};

const AREAS: Record<string, { place: string; options: StayChoice["options"] }> = {
  arusha: { place: "Arusha", options: STAYS_ARUSHA },
  tarangire: { place: "Tarangire", options: STAYS_TARANGIRE },
  manyara: { place: "Lake Manyara", options: STAYS_MANYARA },
  highlands: { place: "Karatu and the Ngorongoro Highlands", options: STAYS_HIGHLANDS },
  central: { place: "Central Serengeti", options: STAYS_CENTRAL_SERENGETI },
  north: { place: "Northern Serengeti and the Mara River", options: STAYS_NORTH_SERENGETI },
  ndutu: { place: "Ndutu and the southern Serengeti", options: STAYS_NDUTU },
  natron: { place: "Lake Natron", options: NATRON },
  stonetown: { place: "Stone Town", options: STAYS_STONE_TOWN },
  beach: { place: "Zanzibar's beaches", options: STAYS_ZANZIBAR_BEACH },
};
type Area = keyof typeof AREAS | null;

interface Setup {
  /** Ombeni's own price for a level: a "from" figure, or a from–to range. */
  set?: Partial<Record<LevelId, Price>>;
  /** Group size the prices are for (default 2). */
  pax?: number;
  /** Where each night is spent, night 1 first; null for nights with no lodge list. */
  nights?: Area[];
  /** No Serengeti on the route: drop the Serengeti flights and balloon from the levels. */
  noSerengeti?: boolean;
  /** Not a game-drive trip: drop "Game drives" from the levels. */
  noGameDrives?: boolean;
  /** Level inclusions that don't apply on this trip. */
  strip?: RegExp;
  /** Add-ons every level already includes on this trip. */
  includedAtEveryLevel?: string[];
}

const BUDGET: Omit<ComfortLevel, "perDay" | "groupPricing"> = {
  id: "budget",
  label: "Budget",
  summary: "Simple, clean lodges and camps, for travellers who want the experience without paying for extras.",
  includes: [
    "Simple lodges, camps or campsites",
    "Private 4×4 vehicle",
    "An experienced local guide",
    "Meals as listed in the itinerary",
  ],
};

function levelsFor(days: number, s: Setup): ComfortLevel[] {
  const pax = s.pax ?? 2;
  const ask = [1, 2, 3, 4, 5, 6].filter((n) => n !== pax);
  const ids = Object.keys(s.set ?? {}) as LevelId[];
  const onlySet = s.set?.budget !== undefined;
  const base: ComfortLevel[] = comfortLevels(days);
  if (s.set?.budget !== undefined) {
    base.unshift({ ...BUDGET, perDay: { min: 0, max: 0 }, groupPricing: { tiers: [{ pax, usd: 0 }], askSizes: ask } });
  }
  const levels = base
    .filter((l) => !onlySet || ids.includes(l.id as LevelId))
    .map((l) => {
      const price = s.set?.[l.id as LevelId];
      let lvl = l;
      if (price !== undefined) {
        const [from, to] = Array.isArray(price) ? price : [price, undefined];
        const min = Math.floor(from / days);
        const max = to ? Math.round(to / days) : Math.max(l.perDay.max, min);
        lvl = { ...l, perDay: { min, max }, groupPricing: { tiers: [{ pax, usd: from }], askSizes: ask } };
      } else if (pax !== 2) {
        lvl = { ...l, groupPricing: { tiers: [{ pax, usd: l.groupPricing.tiers[0].usd }], askSizes: ask } };
      }
      let includes = lvl.includes;
      let addOns = lvl.includedAddOns ?? [];
      if (s.noSerengeti) {
        includes = includes.filter((i) => !/serengeti|balloon/i.test(i));
        addOns = addOns.filter((a) => a !== "serengeti-flight" && a !== "balloon-safari");
      }
      if (s.noGameDrives) includes = includes.filter((i) => !/game drive/i.test(i));
      if (s.strip) includes = includes.filter((i) => !s.strip!.test(i));
      if (s.includedAtEveryLevel) addOns = [...new Set([...addOns, ...s.includedAtEveryLevel])];
      return { ...lvl, includes, includedAddOns: addOns.length ? addOns : undefined };
    });
  return levels;
}

function nightsLabel(n: number[]): string {
  if (n.length === 1) return `Night ${n[0]}`;
  return `Nights ${n.slice(0, -1).join(", ")} and ${n[n.length - 1]}`;
}

function staysFor(nights: Area[]): { choices: StayChoice[]; stayIdOfNight: (string | undefined)[] } {
  const choices: StayChoice[] = [];
  const stayIdOfNight: (string | undefined)[] = [];
  let i = 0;
  while (i < nights.length) {
    const area = nights[i];
    if (!area) { stayIdOfNight.push(undefined); i++; continue; }
    const run: number[] = [];
    while (i < nights.length && nights[i] === area) { run.push(i + 1); i++; }
    const id = `${area}-${run[0]}`;
    const opts = AREAS[area].options as Record<string, string[]>;
    choices.push(stop(id, nightsLabel(run), AREAS[area].place, { budget: opts.budget ?? opts["mid-range"], ...opts }));
    run.forEach(() => stayIdOfNight.push(id));
  }
  return { choices, stayIdOfNight };
}

const SETUPS: Record<string, Setup> = {
  "9-day-beach-city-bush": { set: { "mid-range": 2890, luxury: 3999 }, noSerengeti: true, nights: ["stonetown", "stonetown", null, "arusha", null, null, null, null] },
  "10-day-kenya-safari": { noSerengeti: true },
  "9-day-northern-tanzania-safari": { set: { "mid-range": 3410, luxury: 4106 }, pax: 3, nights: ["arusha", "tarangire", "manyara", "highlands", "central", "central", "north", "highlands"] },
  "10-day-serengeti-calving-safari": { nights: ["arusha", "tarangire", "manyara", "highlands", "ndutu", "ndutu", "ndutu", "central", "highlands"] },
  "12-day-kilimanjaro-safari-culture": { set: { "mid-range": 3799 }, nights: ["arusha", null, null, "arusha", "arusha", "tarangire", "manyara", "central", "central", "central", "natron"] },
  "7-day-northern-circuit-safari": { set: { "mid-range": 3210 }, nights: ["arusha", "tarangire", "central", "central", "highlands", "arusha"] },
  "7-day-photography-cultural-safari": { set: { "mid-range": 3100, luxury: 4750 }, nights: ["arusha", "tarangire", null, "central", "central", "highlands"] },
  "11-day-bird-photography-safari": { set: { "mid-range": 4314, luxury: 5939 }, nights: ["arusha", "tarangire", "manyara", "highlands", "highlands", "central", "central", "central", "north", "north"] },
  "5-day-safari-lengai": { set: { budget: 1450, "mid-range": 2350, luxury: 3800 }, nights: ["tarangire", "central", "natron", "highlands"] },
  "7-day-kilimanjaro-hike-safari": { set: { "mid-range": 2210 }, nights: ["arusha", null, "arusha", "tarangire", "central", "highlands"] },
  "7-day-ultimate-honeymoon": { nights: ["arusha", "tarangire", "highlands", "central", "central", "beach"] },
  "13-day-romance-honeymoon": { set: { "mid-range": 5646, luxury: 6599 }, nights: ["arusha", "arusha", "tarangire", "highlands", "highlands", "central", "central", "central", "beach", "beach", "beach", "beach"] },
  "3-day-safari-tarangire-manyara-ngorongoro": { set: { "mid-range": 1460, luxury: 1906 }, noSerengeti: true, nights: ["tarangire", "highlands"] },
  "4-day-arusha-tarangire-manyara-ngorongoro": { set: { "mid-range": 2218 }, noSerengeti: true, nights: ["arusha", "tarangire", "highlands"] },
  "5-day-northern-safari": { set: { "mid-range": 2125, luxury: 2855 }, nights: ["tarangire", "highlands", "central", "central"] },
  "5-day-arusha-serengeti-cultural": { set: { "mid-range": 1955 }, nights: ["arusha", "tarangire", "central", "central"] },
  "5-day-luxury-fly-safari": { set: { "mid-range": 2499, luxury: 3666 }, includedAtEveryLevel: ["serengeti-flight"], nights: ["arusha", "tarangire", "highlands", "central"] },
  "6-day-northern-safari": { set: { "mid-range": 2625, luxury: 3855 }, nights: ["arusha", "tarangire", "central", "central", "highlands"] },
  "4-day-balloon-safari-serengeti-ngorongoro": { set: { "mid-range": 2218 }, includedAtEveryLevel: ["balloon-safari"], nights: ["central", "central", "highlands"] },
  "3-day-ol-doinyo-lengai-hike": { set: { budget: 650, "mid-range": [950, 1350], luxury: [1500, 2200] }, noSerengeti: true, noGameDrives: true, strip: /pool|park and conservation/i, nights: ["natron", "natron"] },
  "7-day-ol-doinyo-lengai-expedition": { set: { budget: 1250, "mid-range": [1750, 2350], luxury: [2800, 4200] }, noSerengeti: true, noGameDrives: true, strip: /pool|park and conservation/i, nights: ["arusha", "natron", "natron", "natron", "natron", "natron"] },
  "5-day-cultural-tour": { noSerengeti: true, noGameDrives: true, nights: ["arusha", "manyara", null, null] },
  "8-day-cultural-tour": { noSerengeti: true, noGameDrives: true, nights: ["arusha", "arusha", "arusha", null, null, "arusha", "arusha"] },
};

/** Gives the older safaris the same comfort levels and stay choices as the rest. */
export function withComfortLevels(list: TripPackage[]): TripPackage[] {
  return list.map((pkg) => {
    const s = SETUPS[pkg.slug];
    if (!s || pkg.comfortLevels?.length) return pkg;
    const levels = levelsFor(pkg.days, s);
    const { choices, stayIdOfNight } = staysFor(s.nights ?? []);
    const pax = s.pax ?? 2;
    return {
      ...pkg,
      comfortLevels: levels,
      priceFromUSD: Math.min(...levels.map((l) => l.groupPricing.tiers[0].usd)),
      priceNote: `Guide prices per person, for ${pax} adults sharing. Your written quote confirms the final price.`,
      stayChoices: choices.length ? choices : undefined,
      itinerary: pkg.itinerary.map((d, i) => {
        const id = stayIdOfNight[i];
        if (!id) return d;
        const area = choices.find((c) => c.id === id)!;
        return { ...d, stayId: id, accommodation: `Your chosen stay in ${area.place}` };
      }),
      included: pkg.included?.map((x) => x.replace(/\b(mid-?range|midrange)\s+/gi, "")),
    };
  });
}
