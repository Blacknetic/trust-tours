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
import PriceLadder from "@/components/PriceLadder";
import type { GroupPricing } from "@/lib/pricing";
import { headlineParty, isAskSize, lowestPrice, lowestPriceFrom, partySizes, priceForGroup, tierLabel } from "@/lib/pricing";
import { ADD_ONS } from "@/data/addons";
import { staysFor } from "@/data/accommodations";
import { AtAGlance, ContentFigure, Prose, RichList, SectionBlock } from "@/components/LongForm";
import { guidesForCategory } from "@/data/guides";
import SectionNav from "@/components/SectionNav";
import ReadNext from "@/components/ReadNext";
import RelatedClimbs from "@/components/RelatedClimbs";
import StayCards from "@/components/StayCards";
import ComfortLevels from "@/components/ComfortLevels";
import { climbLinks } from "@/data/kilimanjaro/links";

const SITE_URL = "https://www.trusttourstz.com";

// Category-specific wording so one template serves climbs, safaris and treks.
const LEXICON: Record<
  TripPackage["category"],
  {
    noun: string;
    crumb: string;
    basePath: string;
    readyLine: string;
    reviewsTitle: string;
    verb: string;
    // Price-ladder wording: card title ("7-day climbing") and the row label
    // ("Machame route 7 days"). Kept here so one template serves every category.
    gerund: string;
    routeWord: string;
  }
> = {
  kilimanjaro: {
    noun: "Climb",
    crumb: "Kilimanjaro",
    basePath: "/kilimanjaro",
    readyLine: "Ready to climb?",
    reviewsTitle: "What past climbers say",
    verb: "climb",
    gerund: "climbing",
    routeWord: "route",
  },
  safari: {
    noun: "Safari",
    crumb: "Safaris",
    basePath: "/safaris",
    readyLine: "Ready to go?",
    reviewsTitle: "What past travellers say",
    verb: "travel",
    gerund: "safari",
    routeWord: "itinerary",
  },
  trekking: {
    noun: "Trek",
    crumb: "Trekking",
    basePath: "/trekking",
    readyLine: "Ready to trek?",
    reviewsTitle: "What past trekkers say",
    verb: "trek",
    gerund: "trekking",
    routeWord: "route",
  },
  zanzibar: {
    noun: "Trip",
    crumb: "Zanzibar",
    basePath: "/zanzibar",
    readyLine: "Ready to go?",
    reviewsTitle: "What past travellers say",
    verb: "travel",
    gerund: "trip",
    routeWord: "itinerary",
  },
  cultural: {
    noun: "Tour",
    crumb: "Cultural Tours",
    basePath: "/cultural",
    readyLine: "Ready to explore?",
    reviewsTitle: "What past travellers say",
    verb: "travel",
    gerund: "tour",
    routeWord: "itinerary",
  },
  paramotoring: {
    noun: "Adventure",
    crumb: "Paramotoring",
    basePath: "/paramotoring",
    readyLine: "Ready to fly?",
    reviewsTitle: "What past flyers say",
    verb: "fly",
    gerund: "flying",
    routeWord: "itinerary",
  },
};

const BORDER = "rgba(26, 26, 22,0.08)";

const priceRow = (gp: GroupPricing) =>
  partySizes(gp).map((n) => (isAskSize(gp, n) ? null : priceForGroup(gp, n)));

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
  const gp = pkg.groupPricing ?? null;
  const levels = pkg.comfortLevels ?? null;
  const totalDays = pkg.days + (pkg.hotelNights ?? 0);
  const booking = {
    packageTitle: pkg.title,
    priceFromUSD: pkg.priceFromUSD,
    priceNote: pkg.priceNote,
    tripType: quoteTripType,
    groupPricing: gp,
    levels: pkg.comfortLevels,
    addOns: (pkg.addOns ?? []).map((id) => ADD_ONS[id]).filter(Boolean),
    person: pkg.category === "kilimanjaro" || pkg.category === "trekking" ? "climber" : "traveller",
  };
  const isClimb = pkg.category === "kilimanjaro";
  const links = isClimb ? climbLinks(pkg.slug) : (pkg.links ?? null);
  const stays = staysFor(pkg.stays);
  const hasInclusions = pkg.included.length > 0 || pkg.excluded.length > 0;
  const navItems = [
    { id: "overview", label: "Overview" },
    (gp || levels) && { id: "prices", label: "Prices" },
    { id: "itinerary", label: "Itinerary" },
    stays.length > 0 && { id: "stays", label: "Where you'll stay" },
    hasInclusions && { id: "included", label: "What's included" },
    pkg.sections?.length && { id: "details", label: "Good to know" },
    pkg.faqs.length > 0 && { id: "faq", label: "FAQ" },
    isClimb && { id: "compare", label: "Other climbs" },
  ].filter((i): i is { id: string; label: string } => !!i);

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
                style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
              >
                {pkg.days}-Day {lex.noun} · {levels ? `${levels.length} comfort levels` : pkg.tier.join(" / ")}
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
              {pkg.hotelNights ? (
                <p className="text-sm md:text-base mt-4" style={{ color: "rgba(255,255,255,0.95)" }}>
                  {totalDays} days in total · {pkg.days} on the mountain · {pkg.hotelNights} hotel nights
                </p>
              ) : null}
            </div>

            {/* Price block */}
            <div className="md:text-right flex-shrink-0">
              {pkg.priceFromUSD > 0 ? (
                <>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.95)" }}>
                    {gp ? `Price for ${headlineParty(gp)}` : "From"}
                  </p>
                  <p
                    className="text-5xl font-extrabold leading-none"
                    style={{ fontFamily: "var(--font-display)", color: "var(--paper)", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                  >
                    ${pkg.priceFromUSD.toLocaleString()}
                  </p>
                  <p className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.95)" }}>
                    per person
                  </p>
                  {gp && gp.tiers.length > 1 ? (
                    <p
                      className="text-xs mt-1 mb-5 md:ml-auto"
                      style={{ color: "rgba(255,255,255,0.95)", maxWidth: "30ch" }}
                    >
                      Less in a group: ${lowestPrice(gp).toLocaleString()} each for{" "}
                      {tierLabel(gp, lowestPriceFrom(gp))} climbers.{" "}
                      <a href="#prices" className="underline underline-offset-2 hover:opacity-80">
                        See every group size
                      </a>
                    </p>
                  ) : (
                    <p
                      className="text-xs mt-1 mb-5 md:ml-auto"
                      style={{ color: "rgba(255,255,255,0.95)", maxWidth: "30ch" }}
                    >
                      {pkg.priceNote}
                    </p>
                  )}
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

      <SectionNav items={navItems} />

      {/* ── Body: main content + sticky booking card ──────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 lg:py-14">
        <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-12 xl:gap-16">
          {/* MAIN COLUMN */}
          <div className="min-w-0">
            {/* Summary + Best months */}
            <section id="overview" className="pb-9 border-b scroll-mt-24" style={{ borderColor: BORDER }}>
              <p className="text-lg md:text-xl leading-relaxed mb-5" style={{ color: "var(--ink)" }}>
                {pkg.summary}
              </p>
              {pkg.overviewImage && <ContentFigure image={pkg.overviewImage} className="mb-6" />}
              {pkg.overview && <Prose paragraphs={pkg.overview} />}
              {pkg.atAGlance && <AtAGlance items={pkg.atAGlance} />}
              {pkg.highlights.length > 0 && (
                <div className="mt-6">
                  <h2
                    className="text-2xl font-extrabold mb-4"
                    style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                  >
                    Highlights
                  </h2>
                  <RichList items={pkg.highlights} mark="★" />
                </div>
              )}
              <p className="text-base font-medium mt-6" style={{ color: "var(--gold)" }}>
                Best months to {lex.verb}: {pkg.bestMonths.join(" · ")}
              </p>
              {links && <ReadNext links={links.overview} title={isClimb ? "Help choosing a route" : "Help planning your safari"} />}
            </section>

            {/* Group-size pricing */}
            {(gp || levels) && (
              <section id="prices" className="py-10 border-b scroll-mt-24" style={{ borderColor: BORDER }}>
                {gp && <PriceLadder
                  title={`${pkg.days}-day ${lex.gerund}`}
                  subtitle={
                    pkg.hotelNights
                      ? `Price per person · includes ${pkg.hotelNights} hotel nights (${totalDays} days in total)`
                      : "Price per person"
                  }
                  columns={partySizes(gp).map((n) => tierLabel(gp, n))}
                  rows={[
                    {
                      label: `${pkg.shortName.replace(/^\d+-Day /, "")} ${lex.routeWord} ${pkg.days} days`,
                      prices: priceRow(gp),
                    },
                  ]}
                  note={gp.note}
                />}
                {levels && <ComfortLevels levels={levels} days={pkg.days} />}
                {pkg.pricingImage && <ContentFigure image={pkg.pricingImage} className="mt-8" />}
                {pkg.pricingDetails && (
                  <div className="mt-8">
                    <h3
                      className="text-xl md:text-2xl font-extrabold mb-4"
                      style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                    >
                      How the prices work
                    </h3>
                    <Prose paragraphs={pkg.pricingDetails} />
                  </div>
                )}
                <p className="text-base mt-4" style={{ color: "var(--ink)" }}>
                  {isClimb || pkg.category === "trekking"
                    ? "Guides, crew and transport are shared by the whole party, so the more of you there are, the less each person pays."
                    : "Your private vehicle and guide are shared only by your own party, so the more of you there are, the less each person pays."}
                  {pkg.category === "kilimanjaro" && (
                    <>
                      {" "}Travelling alone? You can also{" "}
                      <Link href="/kilimanjaro/groups" className="underline underline-offset-2" style={{ color: "var(--forest)" }}>
                        join a group departure
                      </Link>
                      .
                    </>
                  )}
                </p>
                {links && <ReadNext links={links.prices} title="More on prices" />}
              </section>
            )}

            {/* Itinerary + Elevation Journey */}
            <section id="itinerary" className="py-10 border-b scroll-mt-24" style={{ borderColor: BORDER }}>
              <h2
                className="text-2xl md:text-3xl font-extrabold mb-8"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
              >
                Day-by-Day Itinerary
              </h2>
              <ElevationJourney itinerary={pkg.itinerary} />
              {links && <ReadNext links={links.itinerary} title={isClimb ? "Prepare for the climb" : "Explore the places on this route"} />}
            </section>

            {stays.length > 0 && <StayCards stays={stays} border={BORDER} />}

            {/* Included / Excluded */}
            {hasInclusions && (
              <section id="included" className="py-10 border-b space-y-10 scroll-mt-24" style={{ borderColor: BORDER }}>
                {pkg.included.length > 0 && (
                  <div className="rounded-2xl p-6 md:p-8" style={{ background: "var(--snow)" }}>
                    <h2
                      className="text-2xl md:text-3xl font-extrabold mb-5"
                      style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                    >
                      What&apos;s included in the price
                    </h2>
                    <RichList items={pkg.included} mark="✓" color="var(--forest)" />
                  </div>
                )}
                {pkg.excluded.length > 0 && (
                  <div className="rounded-2xl p-6 md:p-8" style={{ background: "var(--snow)" }}>
                    <h2
                      className="text-2xl md:text-3xl font-extrabold mb-5"
                      style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                    >
                      What&apos;s not included
                    </h2>
                    <RichList items={pkg.excluded} mark="✕" color="var(--sunset)" />
                  </div>
                )}
                {links && <ReadNext links={links.inclusions} title="Before you pack" />}
              </section>
            )}

            {pkg.sections && pkg.sections.length > 0 && (
              <div id="details" className="scroll-mt-24">
                {pkg.sections.map((s) => (
                  <SectionBlock key={s.heading} section={s} border={BORDER} />
                ))}
              </div>
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
              <section id="faq" className="py-10 border-b scroll-mt-24" style={{ borderColor: BORDER }}>
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

            {isClimb && <RelatedClimbs pkg={pkg} border={BORDER} />}
            {links && <ReadNext links={links.planning} title="Plan the rest of your trip" />}

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
            <div
              className="sticky top-[5.5rem] max-h-[calc(100vh-6.5rem)] overflow-y-auto rounded-2xl px-6 pt-6"
              style={{
                background: "#fff",
                border: "1px solid rgba(26, 26, 22,0.1)",
                boxShadow: "0 18px 44px -22px rgba(26, 26, 22,0.4)",
              }}
            >
              <BookingCard {...booking} />
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
      <MobileCTABar {...booking} />
    </>
  );
}
