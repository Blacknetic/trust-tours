import type { Metadata } from "next";
import { byCategory } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Paramotoring in Tanzania – Fly over Kilimanjaro & the Serengeti",
  alternates: { canonical: "/paramotoring" },
  description:
    "Paramotoring adventures with Trust Tours: soar over Mount Meru, Kilimanjaro, the Great Rift Valley, Ol Doinyo Lengai, Lake Natron and the Serengeti — a bird's-eye view of Tanzania.",
};

export default function ParamotoringListingPage() {
  const trips = byCategory("paramotoring");

  return (
    <>
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Kilimanjaro · Rift Valley · Serengeti — from the air
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
            Paramotoring over Tanzania
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "62ch" }}
          >
            See Tanzania as almost no one does — from the air. Glide on a paramotor
            over Mount Meru and Kilimanjaro, the Great Rift Valley, the active Ol
            Doinyo Lengai volcano and Lake Natron, and the wildlife-dotted plains of
            the Serengeti. For first-time flyers and seasoned adventurers alike.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="A whole new perspective"
        title="Plan your paramotoring adventure with Ombeni"
        subtitle="Tell us your dates and experience level — flights are weather-dependent and timed for the calm, golden hours of dawn and dusk. We'll tailor the route."
        ctaLabel="Plan my paramotor flight on WhatsApp"
        waMessage="Hi Ombeni! I'm interested in a paramotoring adventure in Tanzania. Can you share options?"
      />
    </>
  );
}
