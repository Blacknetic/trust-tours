import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import ClimbPriceTable from "@/components/ClimbPriceTable";
import CTABand from "@/components/CTABand";
import GuideStrip from "@/components/GuideStrip";
import ReadNext from "@/components/ReadNext";
import { Prose, SectionBlock } from "@/components/LongForm";
import { guidesForCategory } from "@/data/guides";
import { PRICING_INTRO, PRICING_SECTIONS, ROUTE_CHOICES } from "@/data/kilimanjaro/pricing-guide";

const BORDER = "rgba(26, 26, 22,0.08)";

export const metadata: Metadata = {
  title: "Kilimanjaro Climbing Guide & Prices 2026–2028",
  alternates: { canonical: "/kilimanjaro/guide" },
  description:
    "What a Kilimanjaro climb costs in 2026–2028: every route, every group size, what the price should include and what to budget for on top.",
  openGraph: {
    title: "Kilimanjaro Climbing Guide & Prices 2026–2028 | Trust Tours & Safaris",
    description:
      "What a Kilimanjaro climb costs in 2026–2028: every route, every group size, what the price should include and what to budget for on top.",
    type: "article",
    url: "/kilimanjaro/guide",
  },
};

export default function KilimanjaroGuidePage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--forest)" }}>
        <Photo
          src="/images/kilimanjaro-summit-snow.jpg"
          alt="Trust Tours & Safaris climbers holding the company banner at the Stella Point sign on Kilimanjaro"
          fill
          priority
          sizes="100vw"
          className="object-cover"
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
          <nav aria-label="Breadcrumb" className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.95)" }}>
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/kilimanjaro" className="hover:opacity-80 transition-opacity">Kilimanjaro</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span>Guide 2026–2028</span>
          </nav>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
            Routes · Prices · What&apos;s included
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "18ch",
            }}
          >
            Kilimanjaro climbing guide 2026–2028
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.95)", maxWidth: "60ch" }}>
            Every route, every group size and every line of the bill in one place, so you can compare
            climbs properly before you pay a deposit to anyone.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <Prose paragraphs={PRICING_INTRO} />
        <SectionBlock section={ROUTE_CHOICES} border={BORDER} />
        <section className="py-10 border-b" style={{ borderColor: BORDER }}>
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            Price guide by route and group size
          </h2>
          <Prose
            paragraphs={[
              "Prices in US dollars per person. The rates vary by group size: larger groups share some transport and crew costs. Open any climb for its full price table, itinerary and inclusions.",
            ]}
          />
          <ClimbPriceTable />
        </section>
        {PRICING_SECTIONS.map((s) => (
          <SectionBlock key={s.heading} section={s} border={BORDER} />
        ))}
        <ReadNext
          title="Ready to choose?"
          links={[
            { href: "/kilimanjaro", label: "Compare private climbs" },
            { href: "/kilimanjaro/groups", label: "Join a group departure" },
            { href: "/guides/best-kilimanjaro-route", label: "Which route is best for you?" },
          ]}
        />
      </div>

      <GuideStrip
        guides={guidesForCategory("kilimanjaro")}
        title="Read before you climb"
        subtitle="Free, honest guides on routes, training, altitude and cost."
        className="pb-16 md:pb-24"
      />

      <CTABand
        eyebrow="Want a price for your dates?"
        title="Ask Ombeni for a written quote"
        subtitle="Tell us your route, month and group size. Your quote lists the total, the fees and exactly what's included."
        tripType="kilimanjaro"
      />
    </>
  );
}
