import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { byCategory } from "@/data/packages";
import KilimanjaroFilter from "@/components/KilimanjaroFilter";
import CTABand from "@/components/CTABand";
import GuideStrip from "@/components/GuideStrip";
import { guidesForCategory } from "@/data/guides";

export const metadata: Metadata = {
  title: "Kilimanjaro Climbing Routes & Prices",
  alternates: { canonical: "/kilimanjaro" },
  description:
    "Compare Kilimanjaro routes with Trust Tours: Machame, Lemosho, Marangu and Northern Circuit. From $1,580 per person with licensed guides and full crew.",
};

export default function KilimanjaroListingPage() {
  const climbs = byCategory("kilimanjaro");

  return (
    <>
      {/* ── Page header — INTERIM camp photo (swap for a hi-res hero) ── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--forest)" }}>
        <Photo
          src="/images/kilimanjaro-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-ken-burns"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(120deg, rgba(20,20,18,0.86) 0%, rgba(20,20,18,0.62) 52%, rgba(20,20,18,0.8) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Mount Kilimanjaro · 5,895 m
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
            Climb Kilimanjaro
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "60ch" }}
          >
            Four routes to the roof of Africa, each with licensed guides, a full
            porter and cook crew, and twice-daily health checks. Longer routes
            mean better acclimatization and higher summit success — we&apos;ll help
            you pick the right one for your fitness and budget.
          </p>
        </div>
      </section>

      {/* ── Route cards + difficulty filter ───────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <KilimanjaroFilter climbs={climbs} />
      </section>

      <GuideStrip
        guides={guidesForCategory("kilimanjaro")}
        title="Read before you climb"
        subtitle="Free, honest guides on routes, training, altitude and cost."
        className="pb-16 md:pb-24"
      />

      <CTABand
        eyebrow="Not sure which route?"
        title="Ask Ombeni which route fits you"
        subtitle="Tell us your dates, group size and hiking experience — we'll recommend a route and send a day-by-day plan."
        ctaLabel="Get route advice on WhatsApp"
        waMessage="Hi Ombeni! I want to climb Kilimanjaro but I'm not sure which route to pick. Can you help?"
      />
    </>
  );
}
