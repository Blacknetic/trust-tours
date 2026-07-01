import type { Metadata } from "next";
import Link from "next/link";

// Any URL that survives the redirect rules in next.config.ts lands here instead
// of Next's bare default 404. A branded soft-landing keeps users (and crawlers)
// moving into the site rather than bouncing. Kept intentionally lightweight.
export const metadata: Metadata = {
  title: "Page not found",
  // Don't let stray 404 URLs get indexed or accumulate authority.
  robots: { index: false, follow: true },
};

// The main sections a lost visitor most likely wanted. Mirrors the primary nav.
const DESTINATIONS: { href: string; label: string; note: string }[] = [
  { href: "/kilimanjaro", label: "Climb Kilimanjaro", note: "All routes & durations" },
  { href: "/safaris", label: "Tanzania Safaris", note: "Serengeti, Ngorongoro & more" },
  { href: "/zanzibar", label: "Zanzibar", note: "Beaches & Stone Town" },
  { href: "/trekking", label: "Trekking", note: "Mount Meru & Ol Doinyo Lengai" },
  { href: "/honeymoon", label: "Honeymoon", note: "Bush & beach, made romantic" },
  { href: "/guides", label: "Travel Guides", note: "Plan like a local" },
];

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I was looking for something on the Trust Tours site and hit a dead end — can you help?",
)}`;

export default function NotFound() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
            404 · Page not found
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            This trail doesn&rsquo;t lead anywhere
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.95)", maxWidth: "60ch" }}>
            The page you were looking for may have moved when we rebuilt the site. It happens on the
            mountain too — let&rsquo;s get you back on the right path. Pick a destination below, or use
            the trip finder.
          </p>

          <Link
            href="/search"
            className="inline-block rounded-xl px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90"
            style={{ background: "var(--gold)", color: "var(--forest)" }}
          >
            Open the trip finder →
          </Link>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            Popular places to go
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATIONS.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="group rounded-2xl p-6 transition-colors"
                style={{ background: "var(--snow)", border: "1px solid rgba(74,41,18,0.12)" }}
              >
                <p
                  className="text-lg font-extrabold mb-1 transition-colors"
                  style={{ fontFamily: "var(--font-display)", color: "var(--forest)" }}
                >
                  {d.label} →
                </p>
                <p className="text-sm" style={{ color: "var(--ink)" }}>
                  {d.note}
                </p>
              </Link>
            ))}
          </div>

          <div
            className="mt-12 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            style={{ background: "var(--snow)", border: "1px solid rgba(74,41,18,0.12)" }}
          >
            <div>
              <p className="text-lg font-extrabold mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
                Still can&rsquo;t find it?
              </p>
              <p className="text-sm" style={{ color: "var(--ink)" }}>
                Message Ombeni directly — he&rsquo;ll point you to the right trip in minutes.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-5 py-3 text-base font-semibold transition-opacity hover:opacity-90"
                style={{ background: "var(--forest)", color: "var(--paper)" }}
              >
                WhatsApp us
              </a>
              <Link
                href="/contact"
                className="rounded-xl px-5 py-3 text-base font-semibold transition-opacity hover:opacity-90"
                style={{ background: "var(--gold)", color: "var(--forest)" }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
