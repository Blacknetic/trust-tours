"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { DESTINATIONS } from "@/data/packages";

// The homepage trip finder. Mirrors the old site's Location / Type / Date /
// Guests bar, but every field maps to data we actually hold in packages.ts so
// results are always real (no fake availability search):
//   Destination  → package.destinations
//   Trip type    → package.category
//   Best month   → package.bestMonths
//   Group size   → informational only (forwarded to WhatsApp, never filters)
// Submitting navigates to /search, which does the filtering and shows a
// WhatsApp "we'll custom-build it" fallback when nothing matches.

export const TYPE_OPTIONS = [
  { value: "kilimanjaro", label: "Kilimanjaro climb" },
  { value: "safari", label: "Safari" },
  { value: "trekking", label: "Trekking" },
  { value: "zanzibar", label: "Beach / Zanzibar" },
] as const;

export const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

export const GROUP_SIZES = ["1", "2", "3–4", "5–8", "9+"] as const;

type Props = {
  initial?: {
    destination?: string;
    type?: string;
    month?: string;
    group?: string;
  };
};

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function CompassIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
    </svg>
  );
}

function Field({
  id,
  label,
  icon,
  value,
  onChange,
  anyLabel,
  options,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  anyLabel: string;
  options: readonly { value: string; label: string }[];
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 flex-1 min-w-0">
      <span className="flex-shrink-0" style={{ color: "var(--forest)" }} aria-hidden="true">
        {icon}
      </span>
      <span className="flex flex-col min-w-0 flex-1">
        <label
          htmlFor={id}
          className="text-[11px] font-semibold uppercase tracking-wide"
          style={{ color: "var(--ink)" }}
        >
          {label}
        </label>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent text-sm font-semibold -ml-0.5 cursor-pointer focus:outline-none truncate"
          style={{ color: "var(--ink)" }}
        >
          <option value="">{anyLabel}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
}

export default function TripFinder({ initial }: Props) {
  const router = useRouter();
  const [destination, setDestination] = useState(initial?.destination ?? "");
  const [type, setType] = useState(initial?.type ?? "");
  const [month, setMonth] = useState(initial?.month ?? "");
  const [group, setGroup] = useState(initial?.group ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (type) params.set("type", type);
    if (month) params.set("month", month);
    if (group) params.set("group", group);
    const qs = params.toString();
    router.push(qs ? `/search?${qs}` : "/search");
  }

  const divider = (
    <span className="hidden lg:block w-px self-stretch my-2" style={{ background: "rgba(26,26,22,0.12)" }} aria-hidden="true" />
  );

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Find your trip"
      className="w-full rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-stretch"
      style={{ background: "#fff", boxShadow: "0 22px 50px -20px rgba(26,26,22,0.45)" }}
    >
      <Field
        id="finder-destination"
        label="Destination"
        icon={<PinIcon />}
        value={destination}
        onChange={setDestination}
        anyLabel="Anywhere"
        options={DESTINATIONS.map((d) => ({ value: d, label: d }))}
      />
      {divider}
      <Field
        id="finder-type"
        label="Trip type"
        icon={<CompassIcon />}
        value={type}
        onChange={setType}
        anyLabel="Any type"
        options={TYPE_OPTIONS.map((t) => ({ value: t.value, label: t.label }))}
      />
      {divider}
      <Field
        id="finder-month"
        label="Best month"
        icon={<CalendarIcon />}
        value={month}
        onChange={setMonth}
        anyLabel="Any month"
        options={MONTHS.map((m) => ({ value: m, label: m }))}
      />
      {divider}
      <Field
        id="finder-group"
        label="Group size"
        icon={<UsersIcon />}
        value={group}
        onChange={setGroup}
        anyLabel="Any size"
        options={GROUP_SIZES.map((g) => ({ value: g, label: g }))}
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-7 py-4 font-semibold text-sm transition-opacity hover:opacity-90 sm:col-span-2 lg:col-span-1"
        style={{ background: "var(--forest)", color: "var(--paper)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        Search
      </button>
    </form>
  );
}
