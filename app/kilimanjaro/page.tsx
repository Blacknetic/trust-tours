import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { byCategory } from "@/data/packages";
import KilimanjaroFilter from "@/components/KilimanjaroFilter";
import CTABand from "@/components/CTABand";
import GuideStrip from "@/components/GuideStrip";
import ItemListJsonLd from "@/components/ItemListJsonLd";
import { guidesForCategory } from "@/data/guides";
import ClimbPriceTable from "@/components/ClimbPriceTable";
import ReadNext from "@/components/ReadNext";
import { Prose } from "@/components/LongForm";

export const metadata: Metadata = {
  title: "Kilimanjaro Climbing Routes & Prices",
  alternates: { canonical: "/kilimanjaro" },
  description:
    "Compare 10 Kilimanjaro climbs on 6 routes — Machame, Lemosho, Marangu, Rongai, Umbwe, Northern Circuit. TALA-licensed, owner-led. From $2,627 per person.",
  openGraph: {
    title: "Kilimanjaro Climbing Routes & Prices | Trust Tours & Safaris",
    description:
      "Compare 10 Kilimanjaro climbs on 6 routes — Machame, Lemosho, Marangu, Rongai, Umbwe, Northern Circuit. TALA-licensed, owner-led. From $2,627 per person.",
    type: "website",
    url: "/kilimanjaro",
  },
};

export default function KilimanjaroListingPage() {
  const climbs = byCategory("kilimanjaro");

  return (
    <>
      <ItemListJsonLd packages={climbs} name="Kilimanjaro Climbing Routes" />
      {/* ── Page header — INTERIM camp photo (swap for a hi-res hero) ── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--forest)" }}>
        <Photo
          src="/images/kilimanjaro-page-hero.jpg"
          alt="Climbers at a high-altitude camp on Mount Kilimanjaro, Tanzania"
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
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "60ch" }}
          >
            Six routes to the roof of Africa — Marangu, Machame, Lemosho, Rongai,
            Umbwe and the Northern Circuit — each with licensed guides and a full
            porter and cook crew. These are private climbs: your own party, your
            own dates. Longer itineraries give your body more time to acclimatise,
            and we&apos;ll help you pick the right one for your fitness and budget.
          </p>
          <Link
            href="/kilimanjaro/groups"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "var(--gold)", color: "var(--ink)" }}
          >
            Travelling solo or on a budget? Join a group departure →
          </Link>
        </div>
      </section>

      {/* ── Route cards + difficulty filter ───────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <KilimanjaroFilter climbs={climbs} />
      </section>

      {/* ── Prices by group size; the full explanation is /kilimanjaro/guide ── */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-5"
          style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
        >
          Private climb prices by group size
        </h2>
        <Prose
          paragraphs={[
            "Prices in US dollars per person. The rates vary by group size: larger groups share some transport and crew costs. Open any climb for its full price table, itinerary and inclusions.",
          ]}
        />
        <ClimbPriceTable />
        <ReadNext
          title="Before you compare quotes"
          links={[{ href: "/kilimanjaro/guide", label: "Read the Kilimanjaro guide 2026–2028" }]}
        />
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
        tripType="kilimanjaro"
      />
    </>
  );
}
