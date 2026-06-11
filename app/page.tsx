import Link from "next/link";
import type { Metadata } from "next";
import { getPackage } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Kilimanjaro Climbs & Tanzania Safaris",
  description:
    "Climb Kilimanjaro or track the Great Migration with Trust Tours & Safaris — a Moshi-based operator led by Ombeni. From $1,799. Plan your trip on WhatsApp.",
};

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris."
)}`;

const TOP_PICKS = [
  "7-day-machame-route",
  "7-day-great-migration-safari",
  "4-day-mount-meru-trek",
];

const STEPS = [
  {
    title: "Message us on WhatsApp",
    body: "Tell Ombeni your dates, group size and what you want from the trip — climbing, wildlife, beach, or all three.",
  },
  {
    title: "Get a free itinerary",
    body: "We send a day-by-day plan priced for your group, and adjust it until it fits. No deposit needed to start planning.",
  },
  {
    title: "Land in Tanzania — we handle the rest",
    body: "Airport pickup, park fees, crew, meals and transfers are arranged before you arrive. You just show up ready.",
  },
];

export default function HomePage() {
  const topPicks = TOP_PICKS.map(getPackage).filter((p) => p !== undefined);
  const review = getPackage("7-day-machame-route")?.reviewSnippets?.[0];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative flex items-center min-h-[85vh] overflow-hidden">
        {/* Ken Burns layer — TODO: swap gradient for next/image hero photo (priority) when it arrives */}
        <div
          className="absolute inset-0 hero-ken-burns"
          style={{
            background:
              "linear-gradient(155deg, #3a5a45 0%, #2E4B3C 30%, #1C2419 65%, #2a1f0e 100%)",
          }}
          aria-hidden="true"
        />
        {/* 8s gradient shift overlay */}
        <div
          className="absolute inset-0 hero-gradient-shift"
          style={{
            background:
              "linear-gradient(120deg, rgba(201,155,63,0.12), rgba(28,36,25,0) 40%, rgba(217,110,48,0.10) 80%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-24">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-5"
            style={{ color: "var(--gold)" }}
          >
            Kilimanjaro climbs · Tanzania safaris
          </p>
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "14ch",
            }}
          >
            The roof of Africa, with people you trust.
          </h1>
          <p
            className="text-lg mb-10"
            style={{ color: "rgba(251,248,241,0.75)", maxWidth: "52ch", lineHeight: 1.6 }}
          >
            We&apos;re a small Moshi-based crew led by Ombeni. We drive, we cook, we
            guide — from your airport pickup to the summit certificate or the
            last game drive.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-8 py-4 rounded-full text-white font-semibold text-base transition-opacity hover:opacity-90"
              style={{ background: "var(--sunset)" }}
            >
              Plan my trip on WhatsApp
            </a>
            <Link
              href="/kilimanjaro"
              className="text-center px-8 py-4 rounded-full font-semibold text-base transition-colors hover:bg-white/10"
              style={{ border: "2px solid rgba(251,248,241,0.4)", color: "var(--paper)" }}
            >
              View Kilimanjaro routes
            </Link>
          </div>
        </div>
      </section>

      {/* ── Top packages ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Most requested
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
            >
              Three trips, three ways in
            </h2>
          </div>
          <Link
            href="/safaris"
            className="hidden sm:block text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-70"
            style={{ color: "var(--forest)" }}
          >
            All safaris →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPicks.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* ── Ombeni founder note ───────────────────────────────── */}
      <section style={{ background: "var(--snow)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-center">
          {/* TODO: replace with next/image — Ombeni portrait (pending from client) */}
          <div
            className="aspect-square rounded-2xl flex items-center justify-center mx-auto w-56 md:w-full"
            style={{ background: "linear-gradient(150deg, #2E4B3C, #1C2419)" }}
            aria-hidden="true"
          >
            <span
              className="text-6xl font-extrabold"
              style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
            >
              O
            </span>
          </div>

          <div>
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              From the founder
            </p>
            <blockquote
              className="text-xl md:text-2xl font-semibold mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ink)",
                lineHeight: 1.35,
                maxWidth: "30ch",
              }}
            >
              &ldquo;When you message Trust Tours, you talk to me — not a call
              center. We keep the company small so every trip gets our full
              attention.&rdquo;
            </blockquote>
            <p className="text-sm font-bold" style={{ color: "var(--ink)" }}>
              Ombeni
            </p>
            <p className="text-sm" style={{ color: "var(--ink)", opacity: 0.55 }}>
              Founder &amp; lead guide, Trust Tours &amp; Safaris — Moshi, Tanzania
            </p>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: "var(--gold)" }}
        >
          How it works
        </p>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-12"
          style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
        >
          From first message to first game drive
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {STEPS.map((step, i) => (
            <li key={i}>
              <span
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-base font-extrabold mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "var(--forest)",
                  color: "var(--gold)",
                }}
              >
                {i + 1}
              </span>
              <h3
                className="text-lg font-extrabold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--ink)", opacity: 0.65 }}>
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Review ────────────────────────────────────────────── */}
      {review && (
        <section style={{ background: "var(--snow)" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 text-center">
            <div className="flex justify-center gap-1 mb-5" aria-label="5 stars">
              {[...Array(5)].map((_, s) => (
                <span key={s} className="text-xl" style={{ color: "var(--gold)" }} aria-hidden="true">
                  ★
                </span>
              ))}
            </div>
            <blockquote
              className="text-xl md:text-2xl font-semibold mx-auto mb-5"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ink)",
                lineHeight: 1.35,
                maxWidth: "36ch",
              }}
            >
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <p className="text-sm" style={{ color: "var(--ink)", opacity: 0.55 }}>
              <span className="font-semibold">{review.author}</span> — {review.source}
            </p>
          </div>
        </section>
      )}

      {/* ── CTA band ──────────────────────────────────────────── */}
      <CTABand
        eyebrow="Start planning"
        title="Tell us where you want to wake up"
        subtitle="Serengeti sunrise, crater rim, or 5,895 m above Africa — message Ombeni and get a free itinerary."
        ctaLabel="Plan my trip on WhatsApp"
        waMessage="Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris."
      />
    </>
  );
}
