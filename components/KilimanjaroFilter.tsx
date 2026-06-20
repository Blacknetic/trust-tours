"use client";

import { useState } from "react";
import type { TripPackage, Difficulty } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

const LEVELS: Difficulty[] = ["Moderate", "Challenging", "Tough"];

/**
 * Lets visitors filter the Kilimanjaro routes by difficulty. Server passes the
 * (plain, serializable) climbs in; filtering happens client-side.
 */
export default function KilimanjaroFilter({ climbs }: { climbs: TripPackage[] }) {
  const [active, setActive] = useState<"All" | Difficulty>("All");

  // Only offer pills for difficulty levels that actually exist in the data.
  const present = LEVELS.filter((l) => climbs.some((c) => c.difficulty === l));
  const options: ("All" | Difficulty)[] = ["All", ...present];

  const filtered = active === "All" ? climbs : climbs.filter((c) => c.difficulty === active);

  return (
    <>
      {/* Filter controls */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-sm font-semibold mr-1" style={{ color: "var(--ink)" }}>
          Choose by difficulty:
        </span>
        {options.map((lvl) => {
          const on = active === lvl;
          return (
            <button
              key={lvl}
              type="button"
              onClick={() => setActive(lvl)}
              aria-pressed={on}
              className="px-4 py-1.5 rounded-full text-sm font-semibold transition-colors"
              style={
                on
                  ? { background: "var(--gold)", color: "var(--ink)" }
                  : { background: "var(--snow)", color: "var(--ink)" }
              }
            >
              {lvl}
            </button>
          );
        })}
      </div>

      {/* Legend for the card ratings */}
      <p className="text-xs mb-8" style={{ color: "var(--ink)" }}>
        <span style={{ color: "var(--gold)" }}>▲▲▲</span> Effort = physical difficulty ·{" "}
        Summit = likelihood of reaching the top. Longer routes are gentler day-to-day and
        summit more often.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </>
  );
}
