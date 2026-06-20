import type { Metadata } from "next";
import Link from "next/link";
import { byCategory } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";
import GuideStrip from "@/components/GuideStrip";
import { guidesForCategory } from "@/data/guides";

export const metadata: Metadata = {
  title: "Tanzania Trekking – Kilimanjaro, Mount Meru & Ol Doinyo Lengai",
  alternates: { canonical: "/trekking" },
  description:
    "Trek Tanzania with Trust Tours: climb Kilimanjaro, acclimatise on Mount Meru, or summit the active Ol Doinyo Lengai volcano (Mountain of God) above Lake Natron.",
};

export default function TrekkingListingPage() {
  const treks = byCategory("trekking");

  return (
    <>
      {/* ── Page header ───────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Mount Meru · Ol Doinyo Lengai · Kilimanjaro
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
            Tanzania Trekking
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "62ch" }}
          >
            Beyond Kilimanjaro, Tanzania has some of Africa&apos;s most rewarding
            climbs — the wildlife-rich slopes of Mount Meru and the sacred,
            still-active Ol Doinyo Lengai volcano above Lake Natron. Pick a trek
            below, or head to the dedicated Kilimanjaro section for the roof of
            Africa.
          </p>

          {/* Kilimanjaro callout */}
          <Link
            href="/kilimanjaro"
            className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "var(--gold)", color: "var(--ink)" }}
          >
            Climb Kilimanjaro — see all routes →
          </Link>
        </div>
      </section>

      {/* ── Trek cards ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treks.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      <GuideStrip
        guides={guidesForCategory("trekking")}
        title="Read before you go"
        subtitle="Mount Meru, Ol Doinyo Lengai, and how trekking pairs with Kilimanjaro."
        className="pb-16 md:pb-24"
      />

      <CTABand
        eyebrow="Not sure which trek?"
        title="Plan your Tanzania trek with Ombeni"
        subtitle="Tell us your dates, fitness and whether you want to pair a trek with a safari — we'll recommend the right mountain and send a day-by-day plan."
        ctaLabel="Get trek advice on WhatsApp"
        waMessage="Hi Ombeni! I'm interested in trekking in Tanzania (Mount Meru / Ol Doinyo Lengai / Kilimanjaro). Can you help?"
      />
    </>
  );
}
