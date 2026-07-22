import Link from "next/link";
import Photo from "@/components/Photo";
import type { Metadata } from "next";
import { getPackage } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import RotatingWords from "@/components/RotatingWords";
import Parallax from "@/components/Parallax";
import ScrollProgressSpine from "@/components/ScrollProgressSpine";
import WaypointEyebrow from "@/components/WaypointEyebrow";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import WhyTrustUs from "@/components/WhyTrustUs";
import SummitWall from "@/components/SummitWall";
import TripFinder from "@/components/TripFinder";
import PillLink from "@/components/PillLink";
import SoaringBirds from "@/components/SoaringBirds";
import GuideStrip from "@/components/GuideStrip";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import { getGuide } from "@/data/guides";

// Flagship pillar guides featured on the homepage.
const HOME_GUIDES = ["climbing-kilimanjaro-guide", "tanzania-safari-guide", "best-time-to-visit-tanzania"]
  .map(getGuide)
  .filter((g): g is NonNullable<typeof g> => Boolean(g));

export const metadata: Metadata = {
  title: "Kilimanjaro Climbs & Tanzania Safaris",
  description:
    "Climb Kilimanjaro or track the Great Migration with Trust Tours & Safaris — an Arusha-based operator led by Ombeni. Trips from $385. Plan yours on WhatsApp.",
};

// Featured trios for the homepage — a deliberate spread (popular / scenic /
// classic) so visitors see range, not three near-identical options.
const KILI_PICKS = [
  "7-day-machame-route",
  "8-day-lemosho-route",
  "6-day-marangu-route",
];
const SAFARI_PICKS = [
  "7-day-great-migration-safari",
  "3-day-safari-tarangire-manyara-ngorongoro",
  "5-day-northern-safari",
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

// Pre-computed drifting light-dust motes (deterministic so SSR/CSR match).
const DUST = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 6.1 + 3) % 100}%`,
  duration: `${9 + ((i * 7) % 11)}s`,
  delay: `${(i * 1.3) % 9}s`,
  scale: 0.6 + ((i * 3) % 7) / 6,
}));

export default function HomePage() {
  const kiliPicks = KILI_PICKS.map(getPackage).filter((p) => p !== undefined);
  const safariPicks = SAFARI_PICKS.map(getPackage).filter((p) => p !== undefined);

  return (
    <>
      <ScrollProgressSpine />

      {/* ── Hero — sunrise on the mountain ────────────────────────── */}
      <section className="relative flex items-center min-h-[90vh] overflow-hidden">
        {/* Parallax photo layer (oversized so the drift never reveals an edge) */}
        <Parallax speed={0.18} className="absolute inset-0">
          <div
            className="hero-ken-burns absolute left-0 right-0"
            style={{ top: "-9%", height: "118%" }}
          >
            <Photo
              src="/Kilimanjaro/FB_IMG_1443037536150.jpg"
              alt="Sunrise over the snow-capped summit of Mount Kilimanjaro in Tanzania"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Parallax>

        {/* Sunrise warm wash */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(243,226,196,0.18) 0%, rgba(110,59,31,0.10) 35%, rgba(26,26,22,0) 70%)",
          }}
        />
        {/* Dark wash — heavier at the base where copy sits */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(150deg, rgba(26,26,22,0.74) 0%, rgba(26,26,22,0.46) 42%, rgba(13,19,13,0.66) 100%)",
          }}
        />
        {/* 8s gold sheen drift */}
        <div
          className="absolute inset-0 hero-gradient-shift"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(120deg, rgba(138,90,50,0.14), rgba(26,26,22,0) 40%, rgba(110,59,31,0.12) 80%)",
          }}
        />
        {/* Drifting gold light-dust */}
        <div className="light-dust" aria-hidden="true">
          {DUST.map((d, i) => (
            <span
              key={i}
              style={{
                left: d.left,
                animationDuration: d.duration,
                animationDelay: d.delay,
                transform: `scale(${d.scale})`,
              }}
            />
          ))}
        </div>

        {/* Distant flock soaring across the sky */}
        <SoaringBirds />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-24">
          <p
            className="fade-up text-sm font-semibold tracking-[0.22em] uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            Kilimanjaro climbs · Tanzania safaris
          </p>
          <h1
            className="fade-up fade-up-2 text-5xl md:text-7xl font-semibold mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              lineHeight: 1.04,
              letterSpacing: "-0.015em",
              maxWidth: "16ch",
            }}
          >
            The roof of Africa, with people you trust.
          </h1>
          <p
            className="fade-up fade-up-3 text-2xl md:text-3xl mb-7"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              fontStyle: "italic",
              lineHeight: 1.25,
            }}
          >
            We guide you to{" "}
            <RotatingWords
              words={[
                "the summit.",
                "the Serengeti.",
                "the crater rim.",
                "the Great Migration.",
                "Zanzibar.",
              ]}
              className="not-italic font-semibold text-gold"
            />
          </p>
          <p
            className="fade-up fade-up-4 text-base mb-10"
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "50ch", lineHeight: 1.6 }}
          >
            A small Arusha-based crew, led by Ombeni. We drive, we cook, we
            guide — from the moment you land to your summit certificate or your
            last game drive.
          </p>

          <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-4">
            <RequestQuoteButton
              label="Request a free quote"
              context={{ heading: "Plan your Tanzania trip" }}
            />
            <Link
              href="/kilimanjaro"
              className="btn-fill text-center px-8 py-4 rounded-full font-semibold text-base transition-colors hover:text-white"
              style={{ border: "2px solid rgba(255,255,255,0.45)", color: "var(--paper)" }}
            >
              View Kilimanjaro routes
            </Link>
            <Link
              href="/kilimanjaro/groups"
              className="btn-fill text-center px-8 py-4 rounded-full font-semibold text-base transition-colors hover:text-white"
              style={{ border: "2px solid rgba(255,255,255,0.45)", color: "var(--paper)" }}
            >
              Join a group
            </Link>
          </div>

          {/* Trip finder — find your trip without browsing every page */}
          <div className="fade-up fade-up-4 mt-10 max-w-4xl">
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              Or find your trip
            </p>
            <TripFinder />
          </div>
        </div>

        {/* Begin-the-journey scroll cue */}
        <div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 scroll-cue"
          aria-hidden="true"
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.95)" }}
          >
            Begin the journey
          </span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── About — meet the person behind the company first ──────── */}
      <section style={{ background: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 md:gap-14 items-center">
          <Reveal className="mx-auto w-56 md:w-full">
            <div className="wipe relative aspect-square rounded-2xl overflow-hidden">
              <Photo
                src="/images/founder-ombeni.jpg"
                alt="Ombeni, founder and lead guide of Trust Tours & Safaris"
                fill
                loading="eager"
                sizes="(max-width: 768px) 224px, 300px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <WaypointEyebrow
              className="text-sm font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              From the founder
            </WaypointEyebrow>
            <blockquote
              className="text-2xl md:text-3xl font-medium mb-6"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--ink)",
                lineHeight: 1.35,
                fontStyle: "italic",
                maxWidth: "32ch",
              }}
            >
              &ldquo;When you message Trust Tours, you talk to me — not a call
              center. We keep the company small so every trip gets our full
              attention.&rdquo;
            </blockquote>
            <p className="text-sm font-bold" style={{ color: "var(--ink)" }}>
              Ombeni
            </p>
            <p className="text-sm" style={{ color: "var(--ink)" }}>
              Founder &amp; lead guide, Trust Tours &amp; Safaris — Arusha, Tanzania
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-semibold text-sm transition-colors hover:bg-gold hover:text-ink"
              style={{ border: "1.5px solid rgba(74,41,18,0.3)", color: "var(--forest)" }}
            >
              More about Trust Tours &amp; Ombeni →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Why travellers trust us — back the person with proof ───── */}
      <WhyTrustUs background="var(--snow)" />

      {/* ── Wall of Summits — authentic proof, real guests & summits ─ */}
      <SummitWall />

      {/* ── Kilimanjaro picks — morning light ─────────────────────── */}
      <section className="contour-bg" style={{ background: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <WaypointEyebrow
                className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                Climb Kilimanjaro
              </WaypointEyebrow>
              <h2
                className="text-3xl md:text-5xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.08 }}
              >
                Choose your way to the summit
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                Every route up Kilimanjaro trades one thing for another — scenery
                for solitude, an extra day for better odds at the top. Whichever
                you choose, you climb with a guide who has stood on Uhuru Peak
                hundreds of times and will pace you slowly so your body has time
                to adjust. These three are the ones our climbers ask for most.
              </p>
            </div>
            <div className="hidden md:block">
              <PillLink href="/kilimanjaro">All Kilimanjaro routes</PillLink>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kiliPicks.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={i * 110} className="h-full">
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          <div className="md:hidden mt-8">
            <PillLink href="/kilimanjaro">All Kilimanjaro routes</PillLink>
          </div>
        </div>
      </section>

      {/* ── Safari picks — late morning on the plains ─────────────── */}
      <section style={{ background: "var(--snow)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <WaypointEyebrow
                className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                Go on safari
              </WaypointEyebrow>
              <h2
                className="text-3xl md:text-5xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.08 }}
              >
                Meet Tanzania&rsquo;s wild north
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
                From the elephants of Tarangire to a million wildebeest thundering
                across the Serengeti, your days on safari are spent in a 4x4 with
                a guide who knows where the animals move and when. Tell us how
                many days you have and we&rsquo;ll shape the route around it —
                here&rsquo;s where most travellers start.
              </p>
            </div>
            <div className="hidden md:block">
              <PillLink href="/safaris">All safaris</PillLink>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safariPicks.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={i * 110} className="h-full">
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          <div className="md:hidden mt-8">
            <PillLink href="/safaris">All safaris</PillLink>
          </div>
        </div>
      </section>

      {/* ── Testimonials — social proof, right after the trips ─────── */}
      <section className="relative" style={{ background: "var(--canopy)" }}>
        {/* Ridge rising out of the light safari section above */}
        <svg
          className="ridge-top"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 56 L0 30 C220 4 360 50 560 34 C760 18 880 -6 1080 20 C1240 40 1360 30 1440 22 L1440 56 Z"
            fill="var(--canopy)"
          />
        </svg>

        <Reveal className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 text-center">
          <p
            className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Loved by travellers
          </p>
          <h2
            className="text-3xl md:text-5xl font-semibold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.08 }}
          >
            In their own words
          </h2>
          <p className="text-sm mb-12" style={{ color: "rgba(255,255,255,0.95)" }}>
            Independent five-star reviews from TripAdvisor.
          </p>
        </Reveal>

        <div className="pb-12 md:pb-16">
          <TestimonialsMarquee />
        </div>

        <div className="text-center pb-16 md:pb-24">
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g297913-d13170128-Reviews-Trust_Tours_And_Safaris_Company_Tanzania-Arusha_Arusha_Region.html"
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw text-sm font-semibold"
            style={{ color: "var(--gold)" }}
          >
            Read all reviews on TripAdvisor →
          </a>
        </div>
      </section>

      {/* ── How it works — clear the path right before the ask ────── */}
      <section style={{ background: "var(--dusk)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <WaypointEyebrow
            className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            How it works
          </WaypointEyebrow>
          <h2
            className="text-3xl md:text-5xl font-semibold mb-14"
            style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.08 }}
          >
            From first message to first game drive
          </h2>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 130}>
                <li>
                  <span
                    className="step-badge inline-flex items-center justify-center w-12 h-12 rounded-full text-lg font-semibold mb-5"
                    style={{
                      fontFamily: "var(--font-display)",
                      background: "rgba(138,90,50,0.14)",
                      border: "1.5px solid var(--gold)",
                      color: "var(--gold)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="text-xl font-semibold mb-2.5"
                    style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.95)" }}>
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Plan with confidence: featured guides ─────────────────── */}
      <section className="py-16 md:py-24" style={{ background: "var(--snow)" }}>
        <GuideStrip
          guides={HOME_GUIDES}
          title="Plan with confidence"
          subtitle="Free, no-fluff travel guides from the people who run the trips."
        />
      </section>

      {/* ── CTA band ──────────────────────────────────────────────── */}
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
