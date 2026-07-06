import Link from "next/link";
import Photo from "@/components/Photo";
import type { TripPackage } from "@/data/packages";
import { packageImage } from "@/data/images";
import TripJsonLd from "@/components/TripJsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import MobileCTABar from "@/components/MobileCTABar";
import ElevationJourney from "@/components/ElevationJourney";
import BookingCard from "@/components/BookingCard";
import CTABand from "@/components/CTABand";
import GuideStrip from "@/components/GuideStrip";
import RequestQuoteButton from "@/components/RequestQuoteButton";
import { guidesForCategory } from "@/data/guides";

const SITE_URL = "https://www.trusttourstz.com";

// Category-specific wording so one template serves climbs, safaris and treks.
const LEXICON: Record<
  TripPackage["category"],
  { noun: string; crumb: string; basePath: string; readyLine: string; reviewsTitle: string; verb: string }
> = {
  kilimanjaro: {
    noun: "Climb",
    crumb: "Kilimanjaro",
    basePath: "/kilimanjaro",
    readyLine: "Ready to climb?",
    reviewsTitle: "What past climbers say",
    verb: "climb",
  },
  safari: {
    noun: "Safari",
    crumb: "Safaris",
    basePath: "/safaris",
    readyLine: "Ready to go?",
    reviewsTitle: "What past travellers say",
    verb: "travel",
  },
  trekking: {
    noun: "Trek",
    crumb: "Trekking",
    basePath: "/trekking",
    readyLine: "Ready to trek?",
    reviewsTitle: "What past trekkers say",
    verb: "trek",
  },
  zanzibar: {
    noun: "Trip",
    crumb: "Zanzibar",
    basePath: "/zanzibar",
    readyLine: "Ready to go?",
    reviewsTitle: "What past travellers say",
    verb: "travel",
  },
  cultural: {
    noun: "Tour",
    crumb: "Cultural Tours",
    basePath: "/cultural",
    readyLine: "Ready to explore?",
    reviewsTitle: "What past travellers say",
    verb: "travel",
  },
  paramotoring: {
    noun: "Adventure",
    crumb: "Paramotoring",
    basePath: "/paramotoring",
    readyLine: "Ready to fly?",
    reviewsTitle: "What past flyers say",
    verb: "fly",
  },
};

const BORDER = "rgba(26, 26, 22,0.08)";

export default function PackagePageView({ pkg }: { pkg: TripPackage }) {
  const lex = LEXICON[pkg.category];
  // Map the package category onto the quote form's three trip-type buckets.
  const quoteTripType: "kilimanjaro" | "safari" | "zanzibar" =
    pkg.category === "zanzibar"
      ? "zanzibar"
      : pkg.category === "kilimanjaro" || pkg.category === "trekking"
        ? "kilimanjaro"
        : "safari";
  const pageUrl = `${SITE_URL}${lex.basePath}/${pkg.slug}`;
  const heroImg = packageImage(pkg);
  const planningGuides = guidesForCategory(pkg.category);

  return (
    <>
      <TripJsonLd pkg={pkg} pageUrl={pageUrl} />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative flex items-end min-h-[58vh] overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #6e3b1f 0%, #4a2912 35%, #2a1f0e 70%, #1a1206 100%)",
        }}
      >
        {heroImg && (
          <Photo
            src={heroImg}
            alt={pkg.title}
            fill
            priority
            sizes="100vw"
            className="object-cover hero-ken-burns"
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,16,9,0.80) 0%, rgba(10,16,9,0.45) 45%, rgba(10,16,9,0.25) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pb-12 pt-20">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs mb-5"
            style={{ color: "rgba(255,255,255,0.95)" }}
          >
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href={lex.basePath} className="hover:opacity-80 transition-opacity">
              {lex.crumb}
            </Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span style={{ color: "rgba(255,255,255,0.95)" }}>{pkg.shortName}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                {pkg.days}-Day {lex.noun} · {pkg.tier.join(" / ")}
              </p>
              <h1
                className="text-4xl md:text-6xl font-extrabold"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--paper)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  maxWidth: "16ch",
                }}
              >
                {pkg.title}
              </h1>
            </div>

            {/* Price block */}
            <div className="md:text-right flex-shrink-0">
              {pkg.priceFromUSD > 0 ? (
                <>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.95)" }}>From</p>
                  <p
                    className="text-5xl font-extrabold leading-none"
                    style={{ fontFamily: "var(--font-display)", color: "var(--sunset)" }}
                  >
                    ${pkg.priceFromUSD.toLocaleString()}
                  </p>
                  <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.95)" }}>
                    per person
                  </p>
                  <p
                    className="text-xs mt-1 mb-5 md:ml-auto"
                    style={{ color: "rgba(255,255,255,0.95)", maxWidth: "30ch" }}
                  >
                    {pkg.priceNote}
                  </p>
                </>
              ) : (
                <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.95)" }}>
                  Price on request
                </p>
              )}
              <RequestQuoteButton
                label="Request a quote"
                variant="gold"
                className="hidden md:inline-flex"
                context={{ tripType: quoteTripType, tripName: pkg.title }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Body: main content + sticky booking card ──────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 lg:py-14">
        <div className="lg:grid lg:grid-cols-[1fr_330px] lg:gap-12 xl:gap-16">
          {/* MAIN COLUMN */}
          <div className="min-w-0">
            {/* Summary + Best months */}
            <section className="pb-9 border-b" style={{ borderColor: BORDER }}>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--ink)", maxWidth: "65ch" }}>
                {pkg.summary}
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--gold)" }}>
                Best months to {lex.verb}: {pkg.bestMonths.join(" · ")}
              </p>
            </section>

            {/* Itinerary + Elevation Journey */}
            <section className="py-10 border-b" style={{ borderColor: BORDER }}>
              <h2
                className="text-2xl font-extrabold mb-8"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
              >
                Day-by-Day Itinerary
              </h2>
              <ElevationJourney itinerary={pkg.itinerary} />
            </section>

            {/* Included / Excluded */}
            {(pkg.included.length > 0 || pkg.excluded.length > 0) && (
              <section className="py-10 border-b" style={{ borderColor: BORDER }}>
                <div
                  className="rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-10"
                  style={{ background: "var(--snow)" }}
                >
                  {pkg.included.length > 0 && (
                    <div>
                      <h2
                        className="text-xl font-extrabold mb-5"
                        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                      >
                        What&apos;s included
                      </h2>
                      <ul className="space-y-2.5">
                        {pkg.included.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--ink)" }}>
                            <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "var(--forest)" }}>✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {pkg.excluded.length > 0 && (
                    <div>
                      <h2
                        className="text-xl font-extrabold mb-5"
                        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                      >
                        Not included
                      </h2>
                      <ul className="space-y-2.5">
                        {pkg.excluded.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm"
                            style={{ color: "var(--ink)" }}
                          >
                            <span className="mt-0.5 flex-shrink-0" style={{ color: "var(--sunset)" }}>✕</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Gallery */}
            {pkg.gallery.length > 0 && (
              <section className="py-10 border-b" style={{ borderColor: BORDER }}>
                <h2
                  className="text-2xl font-extrabold mb-7"
                  style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                >
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {pkg.gallery.map((src, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden"
                      style={{ background: "var(--snow)" }}
                    >
                      <Photo
                        src={src}
                        alt={`${pkg.shortName} — photo ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            {pkg.faqs.length > 0 && (
              <section className="py-10 border-b" style={{ borderColor: BORDER }}>
                <h2
                  className="text-2xl font-extrabold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-sm mb-8" style={{ color: "var(--ink)" }}>
                  Still have questions? Ask Ombeni directly on WhatsApp.
                </p>
                <FAQAccordion faqs={pkg.faqs} />
              </section>
            )}

            {/* Reviews */}
            {pkg.reviewSnippets && pkg.reviewSnippets.length > 0 && (
              <section className="pt-10">
                <h2
                  className="text-2xl font-extrabold mb-8"
                  style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                >
                  {lex.reviewsTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pkg.reviewSnippets.map((r, i) => (
                    <blockquote
                      key={i}
                      className="rounded-2xl p-6"
                      style={{ background: "var(--snow)", border: "1px solid rgba(26, 26, 22,0.07)" }}
                    >
                      <div className="flex gap-0.5 mb-3" aria-label="5 stars">
                        {[...Array(5)].map((_, s) => (
                          <span key={s} style={{ color: "var(--gold)" }} aria-hidden="true">★</span>
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
                        &ldquo;{r.text}&rdquo;
                      </p>
                      <footer className="text-xs" style={{ color: "var(--ink)" }}>
                        <cite className="not-italic font-semibold">{r.author}</cite>
                        {" — "}{r.source}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* STICKY BOOKING CARD (desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <BookingCard
                packageTitle={pkg.title}
                priceFromUSD={pkg.priceFromUSD}
                priceNote={pkg.priceNote}
                tripType={quoteTripType}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* ── Plan-with-confidence: relevant travel guides ──────── */}
      <GuideStrip
        guides={planningGuides}
        title="Read before you go"
        subtitle="Free, no-fluff guides from the people who run the trips."
        className="pb-16 md:pb-20"
      />

      {/* ── Bottom CTA band ───────────────────────────────────── */}
      <CTABand
        eyebrow={lex.readyLine}
        title={`Plan your ${pkg.shortName} with Ombeni`}
        subtitle={pkg.priceNote}
        quoteLabel="Get a free quote"
        tripType={quoteTripType}
        tripName={pkg.title}
      />

      {/* Mobile sticky CTA — sits above the global WhatsApp button */}
      <MobileCTABar priceFromUSD={pkg.priceFromUSD} packageTitle={pkg.title} tripType={quoteTripType} />
    </>
  );
}
