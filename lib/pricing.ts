// lib/pricing.ts — group-size price ladders.
//
// A climb carries real fixed costs (guide, cook, porters, rescue fee, transfer
// vehicle) that the whole party shares, plus a genuinely per-head cost (park
// fees, food, gear). So the per-person price is an amortisation curve:
//
//     price(n) = perHead + fixed / n
//
// A solo climber carries the entire crew; by eight people the fixed share has
// almost flattened, which is why the ladder stops at an "8+" column.
//
// `paxLadder` fits that curve to two anchors Ombeni can reason about without
// touching code — what a pair pays today, and the floor quoted to big groups —
// and derives every column in between. Change an anchor, the whole row moves.

/** Columns rendered by the ladder. The last one is the "8+" bucket. */
export const PAX_COLUMNS = [1, 2, 3, 4, 5, 6, 7, 8] as const;

export const MAX_PAX = 8;

export interface GroupPricing {
  /** Per-person price for a party of two. Anchors the top of the curve. */
  atTwo: number;
  /** Per-person price at 8+. The floor — the price stops falling here. */
  atEight: number;
  /** Optional line under the table, e.g. what the price includes. */
  note?: string;
}

/**
 * Expand two anchors into one price per column (index 0 = 1 pax … 7 = 8+ pax).
 * Values are whole dollars; the curve is monotonically decreasing by
 * construction as long as `atTwo` > `atEight`.
 */
export function paxLadder({ atTwo, atEight }: GroupPricing): number[] {
  const fixed = (atTwo - atEight) / (1 / 2 - 1 / MAX_PAX);
  const perHead = atTwo - fixed / 2;
  return PAX_COLUMNS.map((n) => Math.round(perHead + fixed / n));
}

/** Price for a party of `group`, clamped into the 1…8+ range of the ladder. */
export function priceForGroup(prices: number[], group: number): number {
  const i = Math.min(Math.max(Math.round(group), 1), MAX_PAX) - 1;
  return prices[i];
}

/** Cheapest cell — what "From $X" means on cards, in schema and in the hero. */
export const ladderLow = (prices: number[]) => Math.min(...prices);

/** Solo price — the top of the ladder. */
export const ladderHigh = (prices: number[]) => Math.max(...prices);
