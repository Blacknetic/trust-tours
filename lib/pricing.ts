// lib/pricing.ts — group-size rate cards, exactly as Ombeni quotes them.
//
// Each trip lists a per-person price for the party sizes Ombeni prices
// (e.g. 1, 2, 4, 6+). The last listed size also covers every bigger group.
// A party size he hasn't listed pays the rate of the nearest listed size
// below it, so the site never quotes under his card.

export interface PriceTier {
  /** Party size this rate is quoted for. */
  pax: number;
  /** Per-person price in USD. */
  usd: number;
}

export interface GroupPricing {
  /** Ascending by `pax`. The last tier is the "N+" bucket. */
  tiers: PriceTier[];
  /** Optional line under the price table, e.g. what the price includes. */
  note?: string;
  /**
   * Party sizes offered but not priced yet: the box and table say "Ask" instead
   * of quoting a rate Ombeni hasn't given. Safaris use this until his group
   * rates arrive; remove a size once it has a tier.
   */
  askSizes?: number[];
}

/** Largest listed party size — the "N+" bucket. */
export const topPax = (gp: GroupPricing): number => gp.tiers[gp.tiers.length - 1].pax;

/** Largest party size the booking box offers, priced or not. */
export const largestSize = (gp: GroupPricing): number =>
  Math.max(topPax(gp), ...(gp.askSizes ?? []));

/** Every party size to show, ascending. */
export const partySizes = (gp: GroupPricing): number[] =>
  [...new Set([...gp.tiers.map((t) => t.pax), ...(gp.askSizes ?? [])])].sort((a, b) => a - b);

/** True when this party size is shown as "Ask" rather than priced. */
export const isAskSize = (gp: GroupPricing, group: number): boolean =>
  gp.askSizes?.includes(group) ?? false;

/** "1 person" / "2 people": who the headline price is for. */
export const headlineParty = (gp: GroupPricing): string => {
  const { pax } = gp.tiers[0];
  return pax === 1 ? "1 person" : `${pax} people`;
};

/** "1", "2", … with the last tier shown as "6+". */
export const tierLabel = (gp: GroupPricing, pax: number): string =>
  pax >= topPax(gp) && gp.tiers.length > 1 ? `${topPax(gp)}+` : String(pax);

/** Per-person price for a party of `group`. */
export function priceForGroup(gp: GroupPricing, group: number): number {
  let price = gp.tiers[0].usd;
  for (const t of gp.tiers) if (t.pax <= group) price = t.usd;
  return price;
}

/** The tier whose rate a party of `group` pays. */
export function tierForGroup(gp: GroupPricing, group: number): PriceTier {
  let tier = gp.tiers[0];
  for (const t of gp.tiers) if (t.pax <= group) tier = t;
  return tier;
}

/** True when Ombeni's card quotes this exact party size (or it falls in the "N+" bucket). */
export const isQuotedSize = (gp: GroupPricing, group: number): boolean =>
  group >= topPax(gp) || gp.tiers.some((t) => t.pax === group);

/** Cheapest per-person rate — the "groups from $X" line and schema `lowPrice`. */
export const lowestPrice = (gp: GroupPricing): number => Math.min(...gp.tiers.map((t) => t.usd));

/** Most expensive per-person rate (normally the solo price). */
export const highestPrice = (gp: GroupPricing): number => Math.max(...gp.tiers.map((t) => t.usd));

/** Party size at which the cheapest rate starts. */
export const lowestPriceFrom = (gp: GroupPricing): number =>
  gp.tiers.find((t) => t.usd === lowestPrice(gp))!.pax;
