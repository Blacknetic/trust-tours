"use client";

import { useState } from "react";
import Link from "next/link";
import type { RouteKey, DepartureStatus } from "@/data/departures";

// View-model — fully serialisable & pre-formatted by the server page so this
// client bundle never imports the (large) packages/departures data modules.
export interface DepartureVM {
  id: string;
  routeKey: RouteKey;
  routeName: string;
  accent: string;
  dateRange: string;
  monthKey: string; // "2026-07"
  days: number;
  priceUSD: number;
  maxSpots: number;
  status: DepartureStatus;
  statusLabel: string;
  guaranteed: boolean;
  special?: string; // optional badge, e.g. "Full Moon climb"
}

interface Props {
  departures: DepartureVM[];
  routes: { key: RouteKey; name: string }[];
  months: { key: string; label: string }[];
}

const STATUS_STYLE: Record<DepartureStatus, React.CSSProperties> = {
  open: { background: "rgba(138,90,50,0.12)", color: "var(--forest)" },
  filling: { background: "rgba(110,59,31,0.16)", color: "var(--sunset)" },
  full: { background: "var(--sand)", color: "rgba(10,10,10,0.55)" },
};

export default function DepartureCalendar({ departures, routes, months }: Props) {
  const [route, setRoute] = useState<RouteKey | "all">("all");
  const [month, setMonth] = useState<string>("all");

  const filtered = departures.filter(
    (d) => (route === "all" || d.routeKey === route) && (month === "all" || d.monthKey === month),
  );

  return (
    <div>
      {/* Filters */}
      <div className="mb-6">
        <span className="block text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "rgba(10,10,10,0.55)" }}>
          Filter by route
        </span>
        <div className="flex flex-wrap gap-2 mb-5">
          <Pill active={route === "all"} onClick={() => setRoute("all")}>All routes</Pill>
          {routes.map((r) => (
            <Pill key={r.key} active={route === r.key} onClick={() => setRoute(r.key)}>
              {r.name}
            </Pill>
          ))}
        </div>

        <span className="block text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "rgba(10,10,10,0.55)" }}>
          Filter by month
        </span>
        <div className="flex flex-wrap gap-2">
          <Pill small active={month === "all"} onClick={() => setMonth("all")}>All months</Pill>
          {months.map((m) => (
            <Pill key={m.key} small active={month === m.key} onClick={() => setMonth(m.key)}>
              {m.label}
            </Pill>
          ))}
        </div>
      </div>

      {/* Results bar */}
      <div
        className="flex items-center justify-between py-3 mb-5"
        style={{ borderBottom: "1px solid rgba(26,26,22,0.1)" }}
      >
        <span className="text-sm" style={{ color: "rgba(10,10,10,0.7)" }}>
          Showing <strong style={{ color: "var(--ink)" }}>{filtered.length}</strong>{" "}
          {filtered.length === 1 ? "departure" : "departures"}
        </span>
        <span className="text-xs" style={{ color: "rgba(10,10,10,0.55)" }}>
          Per person · guides & meals included
        </span>
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-lg font-extrabold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
            No departures found
          </p>
          <p className="text-sm" style={{ color: "rgba(10,10,10,0.6)" }}>
            Try a different route or month.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((d) => (
            <DepartureRow key={d.id} d={d} />
          ))}
        </div>
      )}
    </div>
  );
}

function DepartureRow({ d }: { d: DepartureVM }) {
  const full = d.status === "full";
  return (
    <div
      className="card-lift grid grid-cols-1 md:grid-cols-[6px_1fr_auto] rounded-2xl overflow-hidden"
      style={{ background: "#fff", border: "1px solid rgba(26,26,22,0.1)" }}
    >
      <div className="hidden md:block" style={{ background: d.accent }} />

      {/* Details */}
      <div className="p-5 md:p-6 flex flex-wrap items-center gap-x-8 gap-y-4">
        <div className="min-w-[150px]">
          <p className="text-lg font-extrabold leading-tight" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
            {d.dateRange}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "rgba(10,10,10,0.6)" }}>
            {d.days} days · {d.days - 1} nights
          </p>
          {d.special && (
            <span
              className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
            >
              🌕 {d.special}
            </span>
          )}
        </div>

        <Meta label="Route">
          <span
            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
            style={{ background: "rgba(138,90,50,0.1)", color: "var(--forest)" }}
          >
            {d.routeName}
          </span>
        </Meta>

        <Meta label="Group size">
          <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>Max {d.maxSpots}</span>
        </Meta>

        <Meta label="Availability">
          <span
            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
            style={STATUS_STYLE[d.status]}
          >
            {d.statusLabel}
          </span>
        </Meta>

        {d.guaranteed && (
          <Meta label="Status">
            <span className="text-sm font-semibold" style={{ color: "var(--forest)" }}>✓ Guaranteed</span>
          </Meta>
        )}
      </div>

      {/* Price + CTA */}
      <div
        className="p-5 md:p-6 flex md:flex-col items-center md:items-end justify-between gap-3 md:min-w-[190px]"
        style={{ borderTop: "1px solid rgba(26,26,22,0.08)" }}
      >
        <div className="md:text-right">
          <p className="text-2xl font-extrabold leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--sunset)" }}>
            ${d.priceUSD.toLocaleString()}
            <span className="text-xs font-normal ml-1" style={{ color: "var(--ink)" }}>/person</span>
          </p>
          <p className="text-[0.7rem] mt-1" style={{ color: "rgba(10,10,10,0.6)" }}>
            Reserve with a $200 deposit
          </p>
        </div>
        <Link
          href={`/kilimanjaro/groups/${d.id}`}
          className="text-center px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-90"
          style={
            full
              ? { background: "transparent", color: "var(--forest)", border: "1px solid rgba(26,26,22,0.2)" }
              : { background: "var(--gold)", color: "var(--ink)" }
          }
        >
          {full ? "Join waitlist" : "Join this group"}
        </Link>
      </div>
    </div>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="block text-[0.65rem] font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(10,10,10,0.5)" }}>
        {label}
      </span>
      {children}
    </div>
  );
}

function Pill({
  active,
  small,
  onClick,
  children,
}: {
  active: boolean;
  small?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full font-semibold transition-colors ${small ? "px-3 py-1 text-xs" : "px-4 py-1.5 text-sm"}`}
      style={
        active
          ? { background: "var(--forest)", color: "var(--paper)", border: "1px solid var(--forest)" }
          : { background: "#fff", color: "rgba(10,10,10,0.65)", border: "1px solid rgba(26,26,22,0.15)" }
      }
    >
      {children}
    </button>
  );
}
