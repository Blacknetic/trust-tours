"use client";

import { useState } from "react";

const WA = "255785938860";

const MONTHS = [
  "Flexible", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const GROUP_MIN = 1;
const GROUP_MAX = 12;

const fieldStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(26, 26, 22,0.15)",
  color: "var(--ink)",
};

interface Props {
  packageTitle: string;
  priceFromUSD: number;
  priceNote: string;
}

/**
 * Desktop sticky booking card. Quick inquiry fields (travel month + group
 * size) prefill a WhatsApp message — no backend. Mobile uses MobileCTABar
 * instead, so this is rendered inside a `hidden lg:block` aside.
 */
export default function BookingCard({ packageTitle, priceFromUSD, priceNote }: Props) {
  const [month, setMonth] = useState("Flexible");
  const [group, setGroup] = useState(2);

  const groupLabel = `${group}${group === GROUP_MAX ? "+" : ""}`;
  const msg =
    `Hi Ombeni! I'm interested in the ${packageTitle}. ` +
    `Travel month: ${month === "Flexible" ? "flexible" : month} · ` +
    `Group size: ${groupLabel}. ` +
    `Can you send me the itinerary and pricing?`;
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "#fff",
        border: "1px solid rgba(26, 26, 22,0.1)",
        boxShadow: "0 18px 44px -22px rgba(26, 26, 22,0.4)",
      }}
    >
      {priceFromUSD > 0 ? (
        <div className="mb-6">
          <p className="text-xs" style={{ color: "var(--ink)", opacity: 0.5 }}>From</p>
          <p
            className="text-4xl font-extrabold leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            ${priceFromUSD.toLocaleString()}
          </p>
          <p className="text-xs mt-1.5" style={{ color: "var(--ink)", opacity: 0.5 }}>per person</p>
        </div>
      ) : (
        <p className="text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
          Price on request
        </p>
      )}

      <div className="space-y-4 mb-6">
        <div>
          <label
            htmlFor="bc-month"
            className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
            style={{ color: "var(--ink)", opacity: 0.6 }}
          >
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

        <div>
          <span
            className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
            style={{ color: "var(--ink)", opacity: 0.6 }}
          >
            Group size
          </span>
          <div className="flex items-center justify-between rounded-xl px-1.5 py-1.5" style={fieldStyle}>
            <button
              type="button"
              onClick={() => setGroup((g) => Math.max(GROUP_MIN, g - 1))}
              disabled={group <= GROUP_MIN}
              aria-label="Decrease group size"
              className="w-8 h-8 rounded-lg text-xl font-bold flex items-center justify-center transition-colors hover:bg-[rgba(26, 26, 22,0.06)] disabled:opacity-25"
              style={{ color: "var(--ink)" }}
            >
              −
            </button>
            <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
              {groupLabel} {group === 1 ? "traveller" : "travellers"}
            </span>
            <button
              type="button"
              onClick={() => setGroup((g) => Math.min(GROUP_MAX, g + 1))}
              disabled={group >= GROUP_MAX}
              aria-label="Increase group size"
              className="w-8 h-8 rounded-lg text-xl font-bold flex items-center justify-center transition-colors hover:bg-[rgba(26, 26, 22,0.06)] disabled:opacity-25"
              style={{ color: "var(--ink)" }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center px-6 py-3.5 rounded-full text-ink font-semibold text-sm transition-opacity hover:opacity-90"
        style={{ background: "var(--gold)" }}
      >
        Plan on WhatsApp
      </a>

      {priceNote && (
        <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--ink)", opacity: 0.45 }}>
          {priceNote}
        </p>
      )}
    </div>
  );
}
