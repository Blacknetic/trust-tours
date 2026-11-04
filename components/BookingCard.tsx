"use client";

import { useState } from "react";
import { useQuote, type QuoteTrip } from "@/components/QuoteModal";
import { useTripChoices } from "@/components/TripChoices";
import type { ComfortLevel, GroupPricing } from "@/lib/pricing";
import { isAskSize, isQuotedSize, largestSize, perDayLabel, priceForGroup, tierForGroup } from "@/lib/pricing";
import type { AddOn } from "@/data/addons";
import { addOnPriceLabel, addOnTotal } from "@/data/addons";

const MONTHS = [
  "Flexible", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const STEPPER_MAX = 12;

const fieldStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(26, 26, 22,0.15)",
  color: "var(--ink)",
};

const labelCls = "block text-xs font-semibold mb-2 uppercase tracking-wide";

const usd = (n: number) => `$${n.toLocaleString()}`;

export interface BookingCardProps {
  packageTitle: string;
  priceFromUSD: number;
  priceNote: string;
  tripType?: "kilimanjaro" | "safari" | "zanzibar";
  groupPricing?: GroupPricing | null;
  /** The same trip at several levels. The box then prices by the chosen level. */
  levels?: ComfortLevel[];
  addOns?: AddOn[];
  /** "climber" on climbs, "traveller" elsewhere. */
  person?: string;
  /** Background of the scrolling container, so the pinned total stays opaque. */
  surface?: string;
  /** This trip, for the quote journey. */
  trip?: QuoteTrip;
}

/**
 * The booking box: pick a group size and month, tick add-ons, see the price
 * per person and for the whole group, then send it all as a booking request.
 * Rendered sticky beside the itinerary on desktop and inside a bottom sheet on
 * mobile (MobileCTABar), so both share one implementation.
 */
export default function BookingCard({
  packageTitle,
  priceFromUSD,
  priceNote,
  tripType,
  groupPricing,
  levels,
  addOns = [],
  person = "traveller",
  surface = "#fff",
  trip,
}: BookingCardProps) {
  const { openQuote } = useQuote();
  const [month, setMonth] = useState("Flexible");
  // Rate cards open on their first tier, matching the headline price on the page.
  const [group, setGroup] = useState(groupPricing ? groupPricing.tiers[0].pax : 2);
  const [picked, setPicked] = useState<string[]>([]);
  // Safaris have a lot to choose, so add-ons start folded to keep the box short.
  const [showAddOns, setShowAddOns] = useState(!levels);
  const { levelId, setLevelId, choices, pickedStay } = useTripChoices();
  const stays = choices.flatMap((c) => {
    const stay = pickedStay(c);
    return stay ? [{ nights: c.nights, name: stay.name }] : [];
  });

  const level = levels?.find((l) => l.id === levelId);
  const gp = level?.groupPricing ?? groupPricing ?? null;
  const offered = addOns.filter((a) => !level?.includedAddOns?.includes(a.id));
  const top = gp ? largestSize(gp) : STEPPER_MAX;
  const isTop = group >= top;
  const groupText = `${group}${gp && isTop && gp.tiers.length > 1 ? "+" : ""}`;
  const people = (n: number) => `${n} ${n === 1 ? person : `${person}s`}`;

  const askPrice = gp ? isAskSize(gp, group) : false;
  const perPerson = gp ? (askPrice ? 0 : priceForGroup(gp, group)) : priceFromUSD;
  const hasPrice = perPerson > 0;
  const tripTotal = perPerson * group;

  const chosen = offered.filter((a) => picked.includes(a.id));
  const pricedExtras = chosen
    .map((a) => addOnTotal(a, group))
    .filter((v): v is number => v != null)
    .reduce((s, v) => s + v, 0);
  const onRequest = chosen.filter((a) => a.priceUSD == null);
  const grandTotal = tripTotal + pricedExtras;

  const quoted = !gp || isQuotedSize(gp, group);
  const fallbackTier = gp ? tierForGroup(gp, group) : null;

  function toggle(id: string) {
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  }

  // Priced by party size, because the group can still change in the booking steps.
  function describe(party: number) {
    const rate = gp ? (isAskSize(gp, party) ? 0 : priceForGroup(gp, party)) : priceFromUSD;
    const extras = chosen
      .map((a) => addOnTotal(a, party))
      .filter((v): v is number => v != null)
      .reduce((s, v) => s + v, 0);
    const total = rate > 0 ? rate * party + extras : null;
    const lines = [
      `Booking request — ${packageTitle}`,
      level && `Comfort level: ${level.label}`,
      stays.length > 0 && `Accommodation: ${stays.map((s) => `${s.nights}: ${s.name}`).join("; ")}`,
      rate > 0 ? `Price shown: ${usd(rate)} per person · ${usd(rate * party)} for the group` : "Price: please quote for this group size",
      chosen.length > 0 && `Add-ons: ${chosen.map((a) => `${a.label} (${addOnPriceLabel(a)})`).join(", ")}`,
      total != null && chosen.length > 0 &&
        `Estimated total: ${usd(total)}${onRequest.length ? " plus add-ons priced on request" : ""}`,
    ].filter((line): line is string => Boolean(line));
    return { lines, total };
  }

  function request() {
    openQuote({
      tripType,
      tripName: packageTitle,
      trip,
      known: {
        level: level?.label,
        travellers: group,
        month: month === "Flexible" ? undefined : month,
        stays,
        addOns: chosen.map((a) => a.label),
        describe,
      },
    });
  }

  return (
    <div>
      {/* Price headline */}
      {hasPrice ? (
        <div className="mb-5">
          <p className="text-xs" style={{ color: "var(--ink)" }}>{gp && !level ? "Your price" : "From"}</p>
          <p
            className="text-4xl font-extrabold leading-none tabular-nums"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            aria-live="polite"
          >
            {usd(perPerson)}
          </p>
          <p className="text-xs mt-1.5" style={{ color: "var(--ink)" }}>
            per person{gp ? `, group of ${groupText}` : ""}
            {level && ` · ${perDayLabel(level)} a day`}
          </p>
        </div>
      ) : (
        <div className="mb-5">
          <p className="text-xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
            {askPrice ? "Ask for price" : "Price on request"}
          </p>
          {askPrice && (
            <p className="text-xs mt-1.5" style={{ color: "var(--ink)" }} aria-live="polite">
              Ombeni will quote {group === 1 ? "one traveller" : `your group of ${groupText}`}.
            </p>
          )}
        </div>
      )}

      <div className={`${levels ? "space-y-3.5 mb-3" : "space-y-5 mb-5"}`}>
        {/* Comfort level */}
        {levels && (
          <div>
            <span className={labelCls} style={{ color: "var(--ink)" }}>
              Comfort level
            </span>
            <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Comfort level">
              {levels.map((l) => {
                const active = l.id === levelId;
                return (
                  <button
                    key={l.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setLevelId(l.id)}
                    className="rounded-lg px-2 py-2 text-sm font-semibold leading-tight transition-colors"
                    style={
                      active
                        ? { background: "var(--forest)", color: "var(--paper)", border: "1px solid var(--forest)" }
                        : fieldStyle
                    }
                  >
                    {l.label}
                    <span className="block text-xs font-normal tabular-nums mt-0.5">
                      From {usd(l.groupPricing.tiers[0].usd)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Chosen stays */}
        {stays.length > 0 && (
          <div className="text-xs" style={{ color: "var(--ink)" }}>
            <p className="mb-1">
              <span className="font-semibold uppercase tracking-wide">Your stays</span>
              <a href="#stays" className="hidden lg:inline underline ml-2">
                Change
              </a>
            </p>
            <ul className="space-y-0.5">
              {stays.map((s) => (
                <li key={s.nights}>
                  <span className="font-semibold">{s.nights}:</span> {s.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Group size */}
        <div>
          <span className={labelCls} style={{ color: "var(--ink)" }}>
            How many {person}s?
          </span>
          {gp ? (
            <div className={`grid gap-1.5 ${top <= 6 ? "grid-cols-6" : "grid-cols-4"}`} role="radiogroup" aria-label="Group size">
              {Array.from({ length: top }, (_, i) => i + 1).map((n) => {
                const active = n === Math.min(group, top);
                const label = n === top && gp.tiers.length > 1 ? `${n}+` : String(n);
                return (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setGroup(n)}
                    className="rounded-lg py-2 text-sm font-semibold tabular-nums transition-colors"
                    style={
                      active
                        ? { background: "var(--forest)", color: "var(--paper)", border: "1px solid var(--forest)" }
                        : fieldStyle
                    }
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-xl px-1.5 py-1.5" style={fieldStyle}>
              <button
                type="button"
                onClick={() => setGroup((g) => Math.max(1, g - 1))}
                disabled={group <= 1}
                aria-label="Fewer travellers"
                className="w-8 h-8 rounded-lg text-xl font-bold flex items-center justify-center disabled:opacity-25"
                style={{ color: "var(--ink)" }}
              >
                −
              </button>
              <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                {group}
                {group === STEPPER_MAX ? "+" : ""} {group === 1 ? person : `${person}s`}
              </span>
              <button
                type="button"
                onClick={() => setGroup((g) => Math.min(STEPPER_MAX, g + 1))}
                disabled={group >= STEPPER_MAX}
                aria-label="More travellers"
                className="w-8 h-8 rounded-lg text-xl font-bold flex items-center justify-center disabled:opacity-25"
                style={{ color: "var(--ink)" }}
              >
                +
              </button>
            </div>
          )}
          {gp && !quoted && fallbackTier && (
            <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--ink)", opacity: 0.75 }}>
              Showing the {people(fallbackTier.pax)} rate. Your exact price for {group} is confirmed in your quote.
            </p>
          )}
          {gp && isTop && gp.tiers.length > 1 && (
            <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--ink)", opacity: 0.75 }}>
              Bigger group? This is the starting rate — we quote larger parties individually.
            </p>
          )}
        </div>

        {/* Month */}
        <div className="flex items-center gap-3">
          <label htmlFor="bc-month" className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--ink)" }}>
            When?
          </label>
          <select
            id="bc-month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="flex-1 min-w-0 rounded-xl px-3.5 py-2 text-sm"
            style={fieldStyle}
          >
            {MONTHS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Add-ons */}
        {offered.length > 0 && (
          <fieldset>
            <legend className={levels ? "sr-only" : labelCls} style={{ color: "var(--ink)" }}>
              Add-ons
            </legend>
            {levels && (
              <button
                type="button"
                onClick={() => setShowAddOns((s) => !s)}
                aria-expanded={showAddOns}
                className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wide rounded-xl px-3.5 py-2.5"
                style={fieldStyle}
              >
                <span>Add-ons{chosen.length > 0 ? ` (${chosen.length} chosen)` : ""}</span>
                <span aria-hidden="true">{showAddOns ? "▲" : "▼"}</span>
              </button>
            )}
            <ul className={`space-y-1 ${levels ? "mt-1" : ""}`} hidden={!showAddOns}>
              {offered.map((a) => {
                const on = picked.includes(a.id);
                return (
                  <li key={a.id}>
                    <label
                      className="flex items-start gap-2.5 rounded-lg px-2 py-2 cursor-pointer transition-colors hover:bg-[rgba(26,26,22,0.04)]"
                      style={on ? { background: "rgba(74,41,18,0.06)" } : undefined}
                    >
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => toggle(a.id)}
                        className="mt-0.5 h-4 w-4 flex-shrink-0"
                        style={{ accentColor: "var(--forest)" }}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline justify-between gap-2">
                          <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                            {a.label}
                          </span>
                          <span
                            className="text-xs whitespace-nowrap tabular-nums"
                            style={{ color: a.priceUSD != null ? "var(--forest)" : "var(--ink)", opacity: a.priceUSD != null ? 1 : 0.6 }}
                          >
                            {addOnPriceLabel(a)}
                          </span>
                        </span>
                        {on && (
                          <span className="block text-xs leading-snug mt-0.5" style={{ color: "var(--ink)", opacity: 0.7 }}>
                            {a.description}
                          </span>
                        )}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </fieldset>
        )}
      </div>

      {/* On desktop the total + CTA stay pinned to the bottom of the sidebar, so
          they remain visible however many add-ons are listed. The phone sheet
          is too short to pin them: they would cover the add-ons. */}
      <div className="lg:sticky bottom-0 pt-3 pb-1 -mb-1" style={{ background: surface }}>
      {hasPrice && (
        <div className="rounded-xl px-4 py-3 mb-3 text-sm" style={{ background: "var(--snow)", color: "var(--ink)" }}>
          <div className="flex justify-between gap-3">
            <span>
              {usd(perPerson)} × {group}
            </span>
            <span className="tabular-nums">{usd(tripTotal)}</span>
          </div>
          {chosen
            .filter((a) => a.priceUSD != null)
            .map((a) => (
              <div key={a.id} className="flex justify-between gap-3 mt-1">
                <span>{a.label}</span>
                <span className="tabular-nums">{usd(addOnTotal(a, group)!)}</span>
              </div>
            ))}
          <div
            className="flex justify-between gap-3 mt-2 pt-2 font-bold"
            style={{ borderTop: "1px solid rgba(26,26,22,0.12)" }}
          >
            <span>{level ? "Estimated total from" : "Estimated total"}</span>
            <span className="tabular-nums" aria-live="polite">{usd(grandTotal)}</span>
          </div>
          {onRequest.length > 0 && (
            <p className="text-xs mt-1.5" style={{ opacity: 0.7 }}>
              + {onRequest.map((a) => a.label).join(", ")}, priced in your quote
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={request}
        className="block w-full text-center px-6 py-3.5 rounded-full text-ink font-semibold text-sm transition-opacity hover:opacity-90"
        style={{ background: "var(--gold)" }}
      >
        Request to book
      </button>
      <p className="text-xs mt-2 text-center" style={{ color: "var(--ink)", opacity: 0.7 }}>
        No payment now — Ombeni confirms availability first.
      </p>
      </div>

      {priceNote && (
        <p className="text-xs mt-3 pb-6 leading-relaxed" style={{ color: "var(--ink)" }}>
          {priceNote}
        </p>
      )}
    </div>
  );
}
