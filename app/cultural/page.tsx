import type { Metadata } from "next";
import { byCategory } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";
import GuideStrip from "@/components/GuideStrip";
import { guidesForCategory } from "@/data/guides";

export const metadata: Metadata = {
  title: "Tanzania Cultural Tours – Maasai, Hadzabe, Chagga & More",
  alternates: { canonical: "/cultural" },
  description:
    "Immersive Tanzania cultural tours with Trust Tours: Maasai villages, the Hadzabe and Datoga of Lake Eyasi, Mto wa Mbu, Chagga coffee farms, waterfalls and hot springs.",
};

export default function CulturalListingPage() {
  const tours = byCategory("cultural");

  return (
    <>
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Maasai · Hadzabe · Chagga · Datoga
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
            Tanzania Cultural Tours
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "62ch" }}
          >
            Go beyond the safari and meet the people of Tanzania — herd cattle with
            the Maasai, hunt with the Hadzabe and watch the Datoga blacksmiths at
            Lake Eyasi, cook with the villages of Mto wa Mbu, and roast coffee with
            the Chagga on the slopes of Kilimanjaro.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      <GuideStrip
        guides={guidesForCategory("cultural")}
        title="Read before you go"
        subtitle="Meet the Maasai, Hadzabe and Chagga — what cultural tours are really like."
        className="pb-16 md:pb-24"
      />

      <CTABand
        eyebrow="Travel with meaning"
        title="Plan a cultural journey with Ombeni"
        subtitle="Tell us which communities and experiences interest you and we'll craft a respectful, immersive itinerary — on its own or alongside a safari."
        ctaLabel="Plan my cultural tour on WhatsApp"
        waMessage="Hi Ombeni! I'm interested in a Tanzania cultural tour. Can you share options?"
      />
    </>
  );
}
