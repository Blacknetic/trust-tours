import type { Metadata } from "next";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Ol Doinyo Lengai Climbs – Mountain of God, Tanzania",
  alternates: { canonical: "/ol-doinyo-lengai" },
  description:
    "Climb Ol Doinyo Lengai, the 'Mountain of God' — the only active carbonatite volcano on Earth. 2-, 3- and 7-day treks above Lake Natron, plus a 5-day safari & volcano combo.",
};

export default function OlDoinyoLengaiListingPage() {
  // All trips that visit Ol Doinyo Lengai, shortest first — they live across
  // the trekking and safari categories, so filter by destination.
  const trips = packages
    .filter((p) => p.destinations.includes("Ol Doinyo Lengai"))
    .sort((a, b) => a.days - b.days);

  return (
    <>
      {/* ── Page header ───────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Lake Natron · Great Rift Valley · 2,962 m
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
            Ol Doinyo Lengai — Mountain of God
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "62ch" }}
          >
            Sacred to the Maasai and the only active carbonatite volcano on
            Earth, Ol Doinyo Lengai rises above Lake Natron in the Great Rift
            Valley. Climb it beneath the stars for a sunrise summit — choose a
            quick 2-day ascent, a 3-day hike with the Ngare Sero waterfalls, a
            full 7-day expedition, or a 5-day safari-and-volcano combo.
          </p>
        </div>
      </section>

      {/* ── Trip cards ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Plan your climb"
        title="Summit the Mountain of God with Ombeni"
        subtitle="Tell us your dates, fitness and whether you'd like to add Lake Natron, the waterfalls or a safari — we'll tailor the trip and send a day-by-day plan."
        ctaLabel="Plan my Lengai climb on WhatsApp"
        waMessage="Hi Ombeni! I'm interested in climbing Ol Doinyo Lengai. Can you share the options?"
      />
    </>
  );
}
