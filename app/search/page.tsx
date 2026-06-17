import type { Metadata } from "next";
import Link from "next/link";
import { packages, type Destination } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import TripFinder from "@/components/TripFinder";

export const metadata: Metadata = {
  title: "Find Your Trip",
  alternates: { canonical: "/search" },
  description:
    "Find your Tanzania trip with Trust Tours & Safaris — filter Kilimanjaro climbs, safaris, Mount Meru treks and Zanzibar escapes by destination, type and travel month.",
  robots: { index: false }, // results pages shouldn't be indexed
};

const WA = "255785938860";

const TYPE_LABELS: Record<string, string> = {
  kilimanjaro: "Kilimanjaro climb",
  safari: "Safari",
  trekking: "Trekking",
  zanzibar: "Beach / Zanzibar",
};

type SearchParams = Promise<{
  destination?: string;
  type?: string;
  month?: string;
  group?: string;
}>;

function str(v: string | undefined): string {
  return typeof v === "string" ? v : "";
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const destination = str(sp.destination);
  const type = str(sp.type);
  const month = str(sp.month);
  const group = str(sp.group);

  const hasQuery = Boolean(destination || type || month || group);

  // Filter on real data only. Group size is informational (every trip runs for
  // any group), so it's forwarded to WhatsApp but never narrows results.
  const results = packages.filter(
    (p) =>
      (!destination || (p.destinations as readonly string[]).includes(destination)) &&
      (!type || p.category === type) &&
      (!month || p.bestMonths.includes(month)),
  );

  // Human-readable summary of what was searched.
  const criteria: string[] = [];
  if (destination) criteria.push(destination);
  if (type) criteria.push(TYPE_LABELS[type] ?? type);
  if (month) criteria.push(`best in ${month}`);
  if (group) criteria.push(`${group} travellers`);

  // Pre-filled WhatsApp message for the no-match fallback (and as a CTA).
  const waBits = [
    destination && `to ${destination}`,
    type && `(${TYPE_LABELS[type] ?? type})`,
    month && `around ${month}`,
    group && `for ${group} travellers`,
  ].filter(Boolean);
  const waMsg = `Hi Ombeni! I'm looking for a Tanzania trip${
    waBits.length ? " " + waBits.join(" ") : ""
  }. Can you put something together for me?`;
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(waMsg)}`;

  return (
    <>
      {/* ── Header + finder ───────────────────────────────────── */}
      <section className="py-14 md:py-16" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1
            className="text-3xl md:text-5xl font-extrabold mb-3"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Find your trip
          </h1>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "rgba(251,248,241,0.7)", maxWidth: "55ch" }}
          >
            Pick what matters to you. Don&apos;t see the exact trip? Every Trust
            Tours itinerary is private and custom-built — message Ombeni and
            we&apos;ll shape one around you.
          </p>
          <TripFinder initial={{ destination, type, month, group }} />
        </div>
      </section>

      {/* ── Results ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8">
          <h2
            className="text-xl font-extrabold"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            {results.length > 0
              ? `${results.length} trip${results.length === 1 ? "" : "s"} ${
                  hasQuery ? "match your search" : "available"
                }`
              : "No exact match — let's build one"}
          </h2>
          {criteria.length > 0 && (
            <p className="text-sm" style={{ color: "var(--ink)", opacity: 0.6 }}>
              {criteria.join(" · ")} ·{" "}
              <Link href="/search" className="underline" style={{ color: "var(--forest)" }}>
                clear
              </Link>
            </p>
          )}
        </div>

        {results.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
            {/* Soft nudge to WhatsApp even when there are matches */}
            <div
              className="mt-12 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between"
              style={{ background: "var(--snow)", border: "1px solid rgba(26,26,22,0.08)" }}
            >
              <p className="text-base" style={{ color: "var(--ink)" }}>
                Want any of these tailored to your exact dates, budget or group?
                We customise everything.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm whitespace-nowrap transition-opacity hover:opacity-90 flex-shrink-0"
                style={{ background: "var(--forest)", color: "var(--paper)" }}
              >
                Plan on WhatsApp
              </a>
            </div>
          </>
        ) : (
          /* ── No-match fallback → WhatsApp ─────────────────────── */
          <div
            className="rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto"
            style={{ background: "var(--snow)", border: "1px solid rgba(26,26,22,0.08)" }}
          >
            <p
              className="text-2xl font-extrabold mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--forest)" }}
            >
              We don&apos;t have that one off-the-shelf — yet.
            </p>
            <p className="text-base mb-7" style={{ color: "var(--ink)", opacity: 0.75 }}>
              No fixed package matches{criteria.length ? ` “${criteria.join(", ")}”` : " that"},
              but that&apos;s exactly what we do best. Send Ombeni your idea on
              WhatsApp and we&apos;ll build a private itinerary and quote around it,
              usually within a day.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
              style={{ background: "var(--forest)", color: "var(--paper)" }}
            >
              Plan this trip on WhatsApp
            </a>
            <p className="mt-6 text-sm">
              <Link href="/search" className="underline" style={{ color: "var(--forest)" }}>
                Clear filters
              </Link>{" "}
              or{" "}
              <Link href="/safaris" className="underline" style={{ color: "var(--forest)" }}>
                browse all trips
              </Link>
              .
            </p>
          </div>
        )}
      </section>
    </>
  );
}
