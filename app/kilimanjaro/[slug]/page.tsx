import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { byCategory, getPackage } from "@/data/packages";
import TripJsonLd from "@/components/TripJsonLd";
import FAQAccordion from "@/components/FAQAccordion";
import MobileCTABar from "@/components/MobileCTABar";
import ElevationJourney from "@/components/ElevationJourney";

interface Props {
  params: Promise<{ slug: string }>;
}

const SITE_URL = "https://trusttourstz.com";
const WA = "255785938860";

export async function generateStaticParams() {
  return byCategory("kilimanjaro").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return {};

  const title = `${pkg.shortName} – Kilimanjaro Climb`;
  const description = pkg.summary.slice(0, 155);

  return {
    title,
    description,
    openGraph: { title, description, type: "website" },
  };
}

export default async function KiliPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackage(slug);

  if (!pkg || pkg.category !== "kilimanjaro") notFound();

  const waMsg = `Hi Ombeni! I'm interested in the ${pkg.title}. Can you send me the itinerary and pricing?`;
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(waMsg)}`;
  const pageUrl = `${SITE_URL}/kilimanjaro/${pkg.slug}`;

  return (
    <>
      <TripJsonLd pkg={pkg} pageUrl={pageUrl} />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative flex items-end min-h-[58vh]"
        style={{
          /* TODO: replace with next/image once hero photos arrive from Ombeni */
          background:
            "linear-gradient(160deg, #3a5a45 0%, #2E4B3C 35%, #1C2419 70%, #2a1f0e 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,16,9,0.3)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pb-12 pt-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs mb-5" style={{ color: "rgba(251,248,241,0.5)" }}>
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/kilimanjaro" className="hover:opacity-80 transition-opacity">Kilimanjaro</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span style={{ color: "rgba(251,248,241,0.8)" }}>{pkg.shortName}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                {pkg.days}-Day Climb · {pkg.tier.join(" / ")}
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
                  <p className="text-sm" style={{ color: "rgba(251,248,241,0.55)" }}>From</p>
                  <p
                    className="text-5xl font-extrabold leading-none"
                    style={{ fontFamily: "var(--font-display)", color: "var(--sunset)" }}
                  >
                    ${pkg.priceFromUSD.toLocaleString()}
                  </p>
                  <p className="text-xs mt-1.5 mb-5" style={{ color: "rgba(251,248,241,0.5)" }}>
                    per person
                  </p>
                </>
              ) : (
                <p className="text-sm mb-5" style={{ color: "rgba(251,248,241,0.55)" }}>
                  Price on request
                </p>
              )}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
                style={{ background: "var(--sunset)" }}
              >
                Plan on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Summary + Best months ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 border-b" style={{ borderColor: "rgba(28,36,25,0.08)" }}>
        <p
          className="text-lg leading-relaxed mb-4"
          style={{ color: "var(--ink)", maxWidth: "65ch" }}
        >
          {pkg.summary}
        </p>
        <p className="text-sm font-medium" style={{ color: "var(--gold)" }}>
          Best months to climb: {pkg.bestMonths.join(" · ")}
        </p>
      </section>

      {/* ── Highlights ────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 border-b" style={{ borderColor: "rgba(28,36,25,0.08)" }}>
        <h2
          className="text-2xl font-extrabold mb-7"
          style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
        >
          Highlights
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
          {pkg.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "var(--gold)" }}>
                ✓
              </span>
              <span className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                {h}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Itinerary + Elevation Journey ─────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 border-b" style={{ borderColor: "rgba(28,36,25,0.08)" }}>
        <h2
          className="text-2xl font-extrabold mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
        >
          Day-by-Day Itinerary
        </h2>
        <ElevationJourney itinerary={pkg.itinerary} />
      </section>

      {/* ── Included / Excluded ───────────────────────────────── */}
      {(pkg.included.length > 0 || pkg.excluded.length > 0) && (
        <section
          className="py-12 border-b"
          style={{ background: "var(--snow)", borderColor: "rgba(28,36,25,0.08)" }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
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
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--ink)", opacity: 0.72 }}>
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

      {/* ── FAQ ───────────────────────────────────────────────── */}
      {pkg.faqs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 border-b" style={{ borderColor: "rgba(28,36,25,0.08)" }}>
          <h2
            className="text-2xl font-extrabold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--ink)", opacity: 0.5 }}>
            Still have questions? Ask Ombeni directly on WhatsApp.
          </p>
          <FAQAccordion faqs={pkg.faqs} />
        </section>
      )}

      {/* ── Reviews ───────────────────────────────────────────── */}
      {pkg.reviewSnippets && pkg.reviewSnippets.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 border-b" style={{ borderColor: "rgba(28,36,25,0.08)" }}>
          <h2
            className="text-2xl font-extrabold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            What past climbers say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pkg.reviewSnippets.map((r, i) => (
              <blockquote
                key={i}
                className="rounded-2xl p-6"
                style={{ background: "var(--snow)", border: "1px solid rgba(28,36,25,0.07)" }}
              >
                <div className="flex gap-0.5 mb-3" aria-label="5 stars">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} style={{ color: "var(--gold)" }} aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-xs" style={{ color: "var(--ink)", opacity: 0.5 }}>
                  <cite className="not-italic font-semibold">{r.author}</cite>
                  {" — "}{r.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* ── Bottom CTA band ───────────────────────────────────── */}
      <section
        className="py-16 text-center px-4"
        style={{ background: "var(--forest)" }}
      >
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-4"
          style={{ color: "var(--gold)" }}
        >
          Ready to climb?
        </p>
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.1 }}
        >
          Plan your {pkg.shortName} with Ombeni
        </h2>
        <p
          className="text-sm mb-8 mx-auto"
          style={{ color: "rgba(251,248,241,0.65)", maxWidth: "44ch" }}
        >
          {pkg.priceNote}
        </p>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base transition-opacity hover:opacity-90"
          style={{ background: "var(--sunset)" }}
        >
          Get a free itinerary on WhatsApp
        </a>
      </section>

      {/* Mobile sticky CTA — sits above the global WhatsApp button */}
      <MobileCTABar priceFromUSD={pkg.priceFromUSD} packageTitle={pkg.title} />
    </>
  );
}
