import Link from "next/link";
import Photo from "@/components/Photo";
import type { Metadata } from "next";
import { getPackage, packages, type TripPackage } from "@/data/packages";
import CTABand from "@/components/CTABand";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import ScrollProgressSpine from "@/components/ScrollProgressSpine";
import WaypointEyebrow from "@/components/WaypointEyebrow";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import SummitWall from "@/components/SummitWall";
import TripShowcase from "@/components/TripShowcase";
import RotatingWords from "@/components/RotatingWords";
import WelcomeNote from "@/components/WelcomeNote";
import SoaringBirds from "@/components/SoaringBirds";
import GuideStrip from "@/components/GuideStrip";
import HeroWhatsAppCTA from "@/components/HeroWhatsAppCTA";
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

// Homepage carousels: hand-picked favourites first — a deliberate spread
// (popular / scenic / classic) — then the rest of the category, shortest
// first, up to 10 cards. Day trips and gem tours are filed under these
// categories but aren't climbs/safaris, so they're left out (own pages).
const EXCLUDED_TAGS = ["day-trip", "gem-tour"];
const showcase = (featured: string[], category: TripPackage["category"]) => {
  const first = featured.map(getPackage).filter((p): p is TripPackage => p !== undefined);
  const rest = packages
    .filter(
      (p) =>
        p.category === category &&
        !p.tags?.some((t) => EXCLUDED_TAGS.includes(t)) &&
        !featured.includes(p.slug),
    )
    .sort((a, b) => a.days - b.days);
  return [...first, ...rest].slice(0, 10);
};

const KILI_TRIPS = showcase(
  ["7-day-machame-route", "8-day-lemosho-route", "6-day-marangu-route", "9-day-northern-circuit"],
  "kilimanjaro",
);
const SAFARI_TRIPS = showcase(
  [
    "7-day-great-migration-safari",
    "3-day-safari-tarangire-manyara-ngorongoro",
    "5-day-northern-safari",
    "4-day-balloon-safari-serengeti-ngorongoro",
  ],
  "safari",
);

// Traveller types from Ombeni's welcome note, cycled in the hero.
const HERO_TRAVELLERS = [
  "on your honeymoon",
  "chasing adventure",
  "celebrating an anniversary",
  "travelling with family",
  "exploring solo",
  "after pure luxury",
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
            className="fade-up fade-up-2 text-4xl md:text-6xl font-semibold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              maxWidth: "18ch",
            }}
          >
            What you have in mind, we bring to life.
          </h1>
          {/* Ombeni's "You're in safe hands" welcome, condensed for the hero —
              the full note sits in <WelcomeNote /> right below. */}
          <p
            className="fade-up fade-up-2 text-lg md:text-xl mb-7"
            style={{ color: "var(--paper)", maxWidth: "40ch", lineHeight: 1.45 }}
          >
            <span className="font-semibold" style={{ color: "var(--dawn)" }}>Karibu Tanzania!</span>{" "}
            Whether you&rsquo;re{" "}
            <span className="sr-only">
              on your honeymoon, chasing adventure, celebrating an anniversary,
              travelling with family, exploring solo or after pure luxury
            </span>
            <span aria-hidden="true">
              <RotatingWords
                words={HERO_TRAVELLERS}
                className="font-semibold"
              />
            </span>{" "}
            — you&rsquo;re in safe hands.
          </p>
          {/* Credential strip — pulled up from the old "Recognised, licensed,
              and answerable to you" section further down the page. */}
          <p
            className="fade-up fade-up-3 text-sm font-semibold mb-6 flex flex-wrap items-center gap-x-2 gap-y-1"
            style={{ color: "rgba(255,255,255,0.92)" }}
          >
            <span>TALA Licensed (Class A)</span>
            <span aria-hidden="true" style={{ color: "var(--gold)" }}>·</span>
            <span>Owner-led, never outsourced</span>
            <span aria-hidden="true" style={{ color: "var(--gold)" }}>·</span>
            <span>Message Ombeni directly — not a call center</span>
          </p>

          <Link
            href="/about"
            className="fade-up fade-up-3 link-draw inline-block text-sm font-semibold mb-8"
            style={{ color: "var(--gold)" }}
          >
            More about Ombeni →
          </Link>

          <div className="fade-up fade-up-4 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <HeroWhatsAppCTA
              className="text-center px-8 py-4 rounded-full font-semibold text-base transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
            />
            <a
              href="#how-it-works"
              className="link-draw text-sm font-semibold"
              style={{ color: "var(--paper)" }}
            >
              See how it works →
            </a>
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

      {/* ── Wall of Summits — authentic proof, real guests & summits.
          Moved to sit directly after the hero: Clarity showed 38% average
          scroll depth, so this now lands inside the zone visitors actually
          reach. The founder quote and "Recognised, licensed" trust points
          that used to live here have moved into the hero itself (credential
          strip + About Ombeni link) — see above. ─────────────────────── */}
      <WelcomeNote />

      <SummitWall />

      {/* ── Kilimanjaro trips ────────────────────────────────────── */}
      {/* Western Breach line sourced from Robin Van Rompaey's Google review
          (full text in the testimonial wall below). */}
      <TripShowcase
        id="kilimanjaro-trips"
        eyebrow="Climb Kilimanjaro"
        title="Our popular climbs"
        subtitle="Stand on the roof of Africa at 5,895 m. We’re one of the few operators who’ll run the Western Breach route on request."
        tripNoun="climb"
        href="/kilimanjaro"
        ctaLabel="View all climbs"
        trips={KILI_TRIPS}
        background="var(--snow)"
      />

      {/* ── Safari trips ──────────────────────────────────────────── */}
      <TripShowcase
        id="safari-trips"
        eyebrow="Go on safari"
        title="Our popular safaris"
        subtitle="Lions in the Serengeti, rhino in the crater and the Great Migration on the move — with a guide who knows where the animals are."
        tripNoun="safari"
        href="/safaris"
        ctaLabel="View all safaris"
        trips={SAFARI_TRIPS}
        background="var(--paper)"
      />

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
      <section id="how-it-works" className="scroll-mt-24" style={{ background: "var(--dusk)" }}>
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
