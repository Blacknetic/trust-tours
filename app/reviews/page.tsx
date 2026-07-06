import type { Metadata } from "next";
import Link from "next/link";
import { packages } from "@/data/packages";
import { REVIEW_LINKS } from "@/data/social";
import { AGGREGATE_RATING } from "@/data/reviews-meta";
import { jsonLd } from "@/lib/json-ld";
import CTABand from "@/components/CTABand";

// AggregateRating attached to the site-wide organisation (shared @id) so answer
// engines and search read a single, verifiable trust signal. The same numbers
// are shown on-page below, which is what keeps this markup within Google's
// "rating must be visible on the page" guidance.
const RATING_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://www.trusttourstz.com/#organization",
  name: "Trust Tours & Safaris",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: AGGREGATE_RATING.ratingValue,
    reviewCount: AGGREGATE_RATING.reviewCount,
    bestRating: AGGREGATE_RATING.bestRating,
  },
};

export const metadata: Metadata = {
  title: "Reviews — What Our Travellers Say",
  alternates: { canonical: "/reviews" },
  description:
    "Read what climbers and safari-goers say about travelling with Trust Tours & Safaris — independent reviews from TripAdvisor and Google.",
};

const BASE_PATH: Record<string, string> = {
  kilimanjaro: "/kilimanjaro",
  safari: "/safaris",
  trekking: "/trekking",
  zanzibar: "/safaris",
};

export default function ReviewsPage() {
  // Aggregate every review snippet across all packages, keeping its trip context.
  const reviews = packages.flatMap((pkg) =>
    (pkg.reviewSnippets ?? []).map((r) => ({
      ...r,
      tripName: pkg.shortName,
      tripHref: `${BASE_PATH[pkg.category]}/${pkg.slug}`,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(RATING_JSON_LD) }}
      />
      {/* ── Page header ───────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Independent reviews
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            In their own words
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "60ch" }}
          >
            Every review here was written by a real traveller on an independent
            platform. We link the trip each one took so you can read it in
            context.
          </p>

          {/* Visible aggregate — the on-page anchor for the AggregateRating
              structured data (keeps the markup within Google's guidelines). */}
          <a
            href={AGGREGATE_RATING.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-full px-5 py-2.5 transition-colors"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            <span
              className="flex gap-0.5 text-lg leading-none"
              style={{ color: "var(--gold)" }}
              aria-hidden="true"
            >
              {[...Array(AGGREGATE_RATING.bestRating)].map((_, s) => (
                <span key={s}>★</span>
              ))}
            </span>
            <span className="text-sm font-semibold" style={{ color: "var(--paper)" }}>
              {AGGREGATE_RATING.ratingValue.toFixed(1)} from{" "}
              {AGGREGATE_RATING.reviewCount} reviews on {AGGREGATE_RATING.source}
            </span>
          </a>
        </div>
      </section>

      {/* ── Review grid ───────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* TODO: collect more reviews from Ombeni's TripAdvisor/Google profiles
            and add them to reviewSnippets in packages.ts — this page grows automatically. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <blockquote
              key={i}
              className="flex flex-col rounded-2xl p-6"
              style={{ background: "var(--snow)", border: "1px solid rgba(26, 26, 22,0.07)" }}
            >
              <div className="flex gap-0.5 mb-3" aria-label="5 stars">
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: "var(--gold)" }} aria-hidden="true">★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--ink)" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <footer className="text-xs" style={{ color: "var(--ink)" }}>
                <cite className="not-italic font-semibold">{r.author}</cite>
                {" — "}{r.source}
                <br />
                <Link
                  href={r.tripHref}
                  className="font-semibold hover:underline"
                  style={{ color: "var(--forest)" }}
                >
                  Trip: {r.tripName} →
                </Link>
              </footer>
            </blockquote>
          ))}
        </div>

        {reviews.length < 3 && (
          <p className="text-sm mt-10" style={{ color: "var(--ink)", maxWidth: "60ch" }}>
            More reviews are being added as we collect them from TripAdvisor and
            Google. Want a reference? Ask Ombeni on WhatsApp — he&apos;ll connect
            you with past climbers happy to share their experience.
          </p>
        )}
      </section>

      {/* ── Read & leave a review ─────────────────────────────── */}
      <section style={{ background: "var(--snow)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 text-center">
          <p
            className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Find us everywhere
          </p>
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
          >
            Read our reviews — or leave your own
          </h2>
          <p className="text-sm mb-8 mx-auto" style={{ color: "var(--ink)", maxWidth: "52ch" }}>
            Travelled with us? A few words on any of these platforms helps the
            next traveller plan with confidence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {REVIEW_LINKS.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-colors hover:text-paper hover:bg-forest"
                style={{ border: "1.5px solid rgba(74,41,18,0.25)", color: "var(--forest)" }}
              >
                {r.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Be the next story"
        title="Your summit photo belongs here"
        subtitle="Tell us your dates and we'll start planning — free itinerary, no deposit to begin."
        ctaLabel="Plan my trip on WhatsApp"
        waMessage="Hi Ombeni! I read the reviews and I'd like to plan a trip."
      />
    </>
  );
}
