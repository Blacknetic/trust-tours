import type { Metadata } from "next";
import { byCategory } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Tanzania Safari Packages & Prices",
  alternates: { canonical: "/safaris" },
  description:
    "Private Tanzania safaris with Trust Tours: Serengeti, Ngorongoro Crater, Tarangire and the Great Migration — plus safari & Zanzibar beach combinations.",
};

export default function SafarisListingPage() {
  const safaris = [...byCategory("safari"), ...byCategory("zanzibar")];

  return (
    <>
      {/* ── Page header ───────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Serengeti · Ngorongoro · Tarangire
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
            Tanzania Safaris
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "60ch" }}
          >
            Private game drives in a 4x4 with pop-up roof across northern
            Tanzania&apos;s big three parks — timed to the Great Migration when you
            travel July to September. Add Zanzibar to finish on the beach.
          </p>
        </div>
      </section>

      {/* ── Safari cards ──────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {safaris.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Custom trips welcome"
        title="Build your own safari with Ombeni"
        subtitle="Every safari is private — tell us your dates, budget and must-sees and we'll shape the trip around them."
        ctaLabel="Plan my safari on WhatsApp"
        waMessage="Hi Ombeni! I'm interested in a Tanzania safari. Can you share options?"
      />
    </>
  );
}
