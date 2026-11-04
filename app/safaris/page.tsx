import type { Metadata } from "next";
import Link from "next/link";
import { SAFARI_CATEGORIES, bySafariCategory, safariFacets } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import SampleItineraryNotice from "@/components/SampleItineraryNotice";
import {
  FilteredSection,
  FilteredTrip,
  SafariFilterPanel,
  SafariFilterProvider,
  SafariResults,
} from "@/components/SafariFilter";
import { SAFARI_FILTER_GROUPS } from "@/lib/safari-filter";
import GuideStrip from "@/components/GuideStrip";
import ItemListJsonLd from "@/components/ItemListJsonLd";
import { guidesForCategory } from "@/data/guides";

export const metadata: Metadata = {
  title: "Tanzania Safari Packages & Tours",
  alternates: { canonical: "/safaris" },
  description:
    "Private Tanzania safaris — Big Five, the Great Migration, calving season and safari-beach combos. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $576 pp.",
  openGraph: {
    title: "Tanzania Safari Packages & Tours | Trust Tours & Safaris",
    description:
      "Private Tanzania safaris — Big Five, the Great Migration, calving season and safari-beach combos. TALA-licensed, owner-led, 5.0★ TripAdvisor. From $576 pp.",
    type: "website",
    url: "/safaris",
  },
};

export default function SafarisListingPage() {
  const allSafaris = SAFARI_CATEGORIES.flatMap((c) => bySafariCategory(c.id));

  return (
    <>
      <ItemListJsonLd packages={allSafaris} name="Tanzania Safari Packages" />
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
            className="text-base leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "62ch" }}
          >
            Every safari we run, sorted into five clear journeys. Whether you&apos;re
            chasing the Big Five, following the Great Migration, celebrating a
            honeymoon, meeting Tanzania&apos;s communities or flying over it all on a
            paramotor — start with the category that fits, then make it yours.
          </p>

          {/* Category jump pills */}
          <div className="flex flex-wrap gap-2.5">
            {SAFARI_CATEGORIES.map((c) => (
              <Link
                key={c.id}
                href={c.href}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: "var(--gold)", color: "var(--ink)" }}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter panel beside one section per safari category ── */}
      <SafariFilterProvider trips={allSafaris.map(safariFacets)} groups={SAFARI_FILTER_GROUPS}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:py-14 pb-14 md:pb-20 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
          <SafariFilterPanel />

          <div>
            <SampleItineraryNotice className="mb-6" />
            <SafariResults
              noMatch={
                <div className="text-center py-10">
                  <p className="text-base mb-6" style={{ color: "var(--ink)" }}>
                    No sample trip matches those filters, but we can build one that does.
                  </p>
                  <RequestQuoteButton
                    label="Request a quote"
                    context={{ tripType: "safari" }}
                  />
                </div>
              }
            >
              <div className="flex flex-col gap-14 md:gap-20">
                {SAFARI_CATEGORIES.map((cat) => {
                  const trips = bySafariCategory(cat.id);
                  if (trips.length === 0) return null;
                  return (
                    <FilteredSection
                      key={cat.id}
                      id={cat.id}
                      slugs={trips.map((t) => t.slug)}
                      className="scroll-mt-36 lg:scroll-mt-24"
                    >
                      <div className="mb-8 md:mb-10 max-w-3xl">
                        <p
                          className="text-xs font-semibold tracking-widest uppercase mb-2"
                          style={{ color: "var(--gold)" }}
                        >
                          {cat.tagline}
                        </p>
                        <h2
                          className="text-3xl md:text-4xl font-extrabold mb-3"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--forest)",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {cat.label}
                        </h2>
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: "rgba(74,41,18,0.75)" }}
                        >
                          {cat.blurb}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {trips.map((pkg) => (
                          <FilteredTrip key={pkg.slug} slug={pkg.slug}>
                            <PackageCard pkg={pkg} />
                          </FilteredTrip>
                        ))}
                      </div>
                    </FilteredSection>
                  );
                })}
              </div>
            </SafariResults>
          </div>
        </div>
      </SafariFilterProvider>

      <GuideStrip
        guides={guidesForCategory("safari")}
        title="Read before you go"
        subtitle="Migration timing, the parks, costs and what a safari day is really like."
        className="pb-16 md:pb-24"
      />

      <CTABand
        eyebrow="Custom trips welcome"
        title="Build your own safari with Ombeni"
        subtitle="Every safari is private — tell us your dates, budget and must-sees and we'll shape the trip around them."
        tripType="safari"
      />
    </>
  );
}
