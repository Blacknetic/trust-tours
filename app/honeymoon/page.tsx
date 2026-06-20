import type { Metadata } from "next";
import { packages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";
import GuideStrip from "@/components/GuideStrip";
import { getGuide } from "@/data/guides";

export const metadata: Metadata = {
  title: "Tanzania Honeymoon Safaris & Zanzibar Romance",
  alternates: { canonical: "/honeymoon" },
  description:
    "Romantic Tanzania honeymoons with Trust Tours: private safaris, balloon flights and candlelit bush dinners, paired with Zanzibar beaches — from short escapes to a 20-day adventure.",
};

export default function HoneymoonListingPage() {
  // All trips tagged "honeymoon", shortest first. They keep their safari/zanzibar
  // detail routes; this page just gathers the romantic ones in one place.
  const trips = packages
    .filter((p) => p.tags?.includes("honeymoon"))
    .sort((a, b) => a.days - b.days);

  const honeymoonGuides = ["tanzania-honeymoon-guide", "zanzibar-travel-guide", "best-time-to-visit-tanzania"]
    .map(getGuide)
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      {/* ── Page header ───────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Romance · Safari · Indian Ocean
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
            Honeymoons in Tanzania &amp; Zanzibar
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "62ch" }}
          >
            Celebrate your love with a private safari and the white sands of
            Zanzibar — candlelit bush dinners, sunrise balloon flights, couples&apos;
            spa days and sundowners for two. Pick a ready-made honeymoon below, or
            tell Ombeni your dream and he&apos;ll tailor every romantic detail.
          </p>
        </div>
      </section>

      {/* ── Honeymoon cards ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      <GuideStrip
        guides={honeymoonGuides}
        title="Read before you go"
        subtitle="Planning a romantic safari-and-beach trip in Tanzania."
        className="pb-16 md:pb-24"
      />

      <CTABand
        eyebrow="Your love story, our home"
        title="Plan your dream honeymoon with Ombeni"
        subtitle="Every honeymoon is private and tailored — tell us your dates, budget and the romance you have in mind, and we'll craft it around you."
        ctaLabel="Plan my honeymoon on WhatsApp"
        waMessage="Hi Ombeni! We're planning our honeymoon in Tanzania/Zanzibar. Can you share options?"
      />
    </>
  );
}
