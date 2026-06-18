import type { Metadata } from "next";
import { byCategory } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Zanzibar Beach Holidays & Tours",
  alternates: { canonical: "/zanzibar" },
  description:
    "Zanzibar beach holidays with Trust Tours: Stone Town, spice farms, Mnemba snorkelling and the white sands of Nungwi, Paje and Kendwa — standalone or paired with a safari.",
};

export default function ZanzibarListingPage() {
  const escapes = byCategory("zanzibar");

  return (
    <>
      {/* ── Page header ───────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Stone Town · Spice Island · Indian Ocean
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
            Zanzibar Beach Escapes
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "60ch" }}
          >
            White sand, turquoise water and the history of the Spice Island —
            UNESCO-listed Stone Town, spice farms, Mnemba&apos;s coral reefs and the
            beaches of Nungwi, Paje and Kendwa. Perfect on its own or as the
            beach finish to a Tanzania safari or Kilimanjaro climb.
          </p>
        </div>
      </section>

      {/* ── Zanzibar cards ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {escapes.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Safari + beach welcome"
        title="Add Zanzibar to your Tanzania trip"
        subtitle="Finish a safari or Kilimanjaro climb on the beach — tell us your dates and we'll arrange the flights and book it as one trip."
        ctaLabel="Plan my Zanzibar trip on WhatsApp"
        waMessage="Hi Ombeni! I'm interested in a Zanzibar beach holiday. Can you share options?"
      />
    </>
  );
}
