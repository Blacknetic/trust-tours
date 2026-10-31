"use client";

import { useState } from "react";
import { useQuote } from "@/components/QuoteModal";
import type { GroupPricing } from "@/lib/pricing";
import { isAskSize, isQuotedSize, largestSize, priceForGroup, tierForGroup } from "@/lib/pricing";
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

// The inquiry form's group-size dropdown uses buckets, not exact counts.
function formGroupBucket(n: number): string {
  if (n <= 2) return String(n);
  if (n <= 4) return "3–4";
  if (n <= 8) return "5–8";
  return "9+";
}

const usd = (n: number) => `$${n.toLocaleString()}`;

export interface BookingCardProps {
  packageTitle: string;
  priceFromUSD: number;
  priceNote: string;
  tripType?: "kilimanjaro" | "safari" | "zanzibar";
  groupPricing?: GroupPricing | null;
  addOns?: AddOn[];
  /** "climber" on climbs, "traveller" elsewhere. */
  person?: string;
  /** Background of the scrolling container, so the pinned total stays opaque. */
  surface?: string;
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
  addOns = [],
  person = "traveller",
  surface = "#fff",
}: BookingCardProps) {
  const { openQuote } = useQuote();
  const [month, setMonth] = useState("Flexible");
  // Rate cards open on their first tier, matching the headline price on the page.
  const [group, setGroup] = useState(groupPricing ? groupPricing.tiers[0].pax : 2);
  const [picked, setPicked] = useState<string[]>([]);

  const gp = groupPricing ?? null;
  const top = gp ? largestSize(gp) : STEPPER_MAX;
  const isTop = group >= top;
  const groupText = `${group}${gp && isTop && gp.tiers.length > 1 ? "+" : ""}`;
  const people = (n: number) => `${n} ${n === 1 ? person : `${person}s`}`;

  const askPrice = gp ? isAskSize(gp, group) : false;
  const perPerson = gp ? (askPrice ? 0 : priceForGroup(gp, group)) : priceFromUSD;
  const hasPrice = perPerson > 0;
  const tripTotal = perPerson * group;

  const chosen = addOns.filter((a) => picked.includes(a.id));
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

  function request() {
    const lines = [
      `Booking request — ${packageTitle}`,
      `Group: ${people(group)}${isTop && gp ? " (or more)" : ""}`,
      hasPrice && `Price shown: ${usd(perPerson)} per person · ${usd(tripTotal)} for the group`,
      askPrice && "Price: please quote for this group size",
      chosen.length > 0 && `Add-ons: ${chosen.map((a) => `${a.label} (${addOnPriceLabel(a)})`).join(", ")}`,
      hasPrice && chosen.length > 0 &&
        `Estimated total: ${usd(grandTotal)}${onRequest.length ? " plus add-ons priced on request" : ""}`,
    ].filter(Boolean);
    openQuote({
      tripType,
      tripName: packageTitle,
      travelMonth: month,
      groupSize: formGroupBucket(group),
      defaultMessage: lines.join("\n"),
      heading: "Request to book",
      subheading: "Nothing is charged now. Ombeni confirms availability and your final price first.",
    });
  }

  return (
    <div>
      {/* Price headline */}
      {hasPrice ? (
        <div className="mb-5">
          <p className="text-xs" style={{ color: "var(--ink)" }}>{gp ? "Your price" : "From"}</p>
          <p
            className="text-4xl font-extrabold leading-none tabular-nums"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            aria-live="polite"
          >
            {usd(perPerson)}
          </p>
          <p className="text-xs mt-1.5" style={{ color: "var(--ink)" }}>
            per person{gp ? `, group of ${groupText}` : ""}
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

      <div className="space-y-5 mb-5">
        {/* Group size */}
        <div>
          <span className={labelCls} style={{ color: "var(--ink)" }}>
            How many {person}s?
          </span>
          {gp ? (
            <div className="grid grid-cols-4 gap-1.5" role="radiogroup" aria-label="Group size">
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
        <div>
          <label htmlFor="bc-month" className={labelCls} style={{ color: "var(--ink)" }}>
            When?
          </label>
          <select
            id="bc-month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full rounded-xl px-3.5 py-2.5 text-sm"
            style={fieldStyle}
          >
            {MONTHS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Add-ons */}
        {addOns.length > 0 && (
          <fieldset>
            <legend className={labelCls} style={{ color: "var(--ink)" }}>
              Add-ons
            </legend>
            <ul className="space-y-1">
              {addOns.map((a) => {
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
            <span>Estimated total</span>
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
