import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { packageImage } from "@/data/images";
import {
  getDeparture,
  departurePackage,
  upcomingDepartures,
  formatDateRange,
  formatLongDate,
  STATUS_LABEL,
  DEPOSIT_USD,
  BALANCE_DUE_DAYS,
} from "@/data/departures";
import ElevationJourney from "@/components/ElevationJourney";
import FAQAccordion from "@/components/FAQAccordion";
import InquiryForm from "@/components/InquiryForm";
import CTABand from "@/components/CTABand";

const WA = "255785938860";
const BORDER = "rgba(26, 26, 22,0.08)";

interface Props {
  params: Promise<{ departure: string }>;
}

export function generateStaticParams() {
  return upcomingDepartures().map((d) => ({ departure: d.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { departure } = await params;
  const dep = getDeparture(departure);
  if (!dep) return {};
  const title = `Kilimanjaro via ${dep.route.name} from ${formatLongDate(dep.startISO)}`;
  const canonical = `/kilimanjaro/groups/${dep.id}`;
  return {
    title,
    description: `Join our guaranteed ${dep.days}-day Kilimanjaro group climb on the ${dep.route.name}, departing ${formatLongDate(dep.startISO)}. From $${dep.priceUSD.toLocaleString()} per person — reserve with a $${DEPOSIT_USD} deposit.`,
    alternates: { canonical },
    openGraph: { title, type: "website", url: canonical },
  };
}

export default async function JoinDeparturePage({ params }: Props) {
  const { departure } = await params;
  const dep = getDeparture(departure);
  if (!dep) notFound();

  const pkg = departurePackage(dep);
  if (!pkg) notFound();

  const full = dep.status === "full";
  const heroImg = packageImage(pkg);
  const waMsg =
    `Hi Ombeni! I'd like to ${full ? "join the waitlist for" : "join"} the ${dep.route.name} ` +
    `group departure on ${formatDateRange(dep)} (ref ${dep.id}). ` +
    `Please confirm availability and send deposit details.`;
  const waUrl = `https://wa.me/${WA}?text=${encodeURIComponent(waMsg)}`;
  const formMsg =
    `I'd like to ${full ? "join the waitlist for" : "join"} the ${dep.route.name} group departure ` +
    `on ${formatDateRange(dep)} (ref ${dep.id}).\n\nA little about me: `;

  return (
    <>
      {/* ── Header ────────────────────────────────────────────── */}
      <section
        className="relative flex items-end min-h-[52vh] overflow-hidden"
        style={{ background: "linear-gradient(160deg, #6e3b1f 0%, #4a2912 35%, #2a1f0e 70%, #1a1206 100%)" }}
      >
        {heroImg && (
          <Photo src={heroImg} alt={pkg.title} fill priority sizes="100vw" className="object-cover hero-ken-burns" />
        )}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: "linear-gradient(to top, rgba(10,16,9,0.84) 0%, rgba(10,16,9,0.5) 45%, rgba(10,16,9,0.3) 100%)" }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pb-12 pt-20">
          <nav aria-label="Breadcrumb" className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.95)" }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/kilimanjaro" className="hover:opacity-80">Kilimanjaro</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/kilimanjaro/groups" className="hover:opacity-80">Group departures</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span>{dep.route.name}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            {dep.guaranteed && (
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--gold)", color: "var(--ink)" }}
              >
                ✓ Guaranteed departure
              </span>
            )}
            {dep.special && (
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{ background: "var(--paper)", color: "var(--ink)" }}
              >
                🌕 {dep.special}
              </span>
            )}
          </div>

          <h1
            className="text-3xl md:text-5xl font-extrabold mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.06, letterSpacing: "-0.02em", maxWidth: "20ch" }}
          >
            Kilimanjaro via {dep.route.name}
          </h1>
          <p className="text-lg font-semibold" style={{ color: "var(--gold)" }}>
            Departing {formatLongDate(dep.startISO)} · {dep.days} days
          </p>
        </div>
      </section>

      {/* ── Departure facts strip ─────────────────────────────── */}
      <section className="border-b" style={{ background: "#fff", borderColor: BORDER }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Fact label="Dates">{formatDateRange(dep)}</Fact>
          <Fact label="Duration">{dep.days} days / {dep.days - 1} nights</Fact>
          <Fact label="Group size">Max {dep.maxSpots} climbers</Fact>
          <Fact label="Availability">{STATUS_LABEL[dep.status]}</Fact>
          <div className="ml-auto flex items-center gap-5">
            <div className="text-right">
              <p className="text-2xl font-extrabold leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--sunset)" }}>
                ${dep.priceUSD.toLocaleString()}
                <span className="text-xs font-normal ml-1" style={{ color: "var(--ink)" }}>/person</span>
              </p>
              <p className="text-[0.7rem] mt-1" style={{ color: "rgba(10,10,10,0.6)" }}>
                Reserve with ${DEPOSIT_USD} deposit
              </p>
            </div>
            <a
              href="#reserve"
              className="px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-90"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
            >
              {full ? "Join waitlist" : "Reserve your spot"}
            </a>
          </div>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 py-10 lg:py-14">
        {/* Overview */}
        <section className="pb-9 border-b" style={{ borderColor: BORDER }}>
          <p className="text-lg leading-relaxed mb-5" style={{ color: "var(--ink)" }}>
            {pkg.summary}
          </p>
          {pkg.highlights.length > 0 && (
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {pkg.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--ink)" }}>
                  <span className="mt-0.5 flex-shrink-0 font-bold" style={{ color: "var(--forest)" }}>✓</span>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Itinerary */}
        <section className="py-10 border-b" style={{ borderColor: BORDER }}>
          <h2 className="text-2xl font-extrabold mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
            Day-by-Day Itinerary
          </h2>
          <ElevationJourney itinerary={pkg.itinerary} />
        </section>

        {/* Included / Excluded */}
        {(pkg.included.length > 0 || pkg.excluded.length > 0) && (
          <section className="py-10 border-b" style={{ borderColor: BORDER }}>
            <div className="rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-10" style={{ background: "var(--snow)" }}>
              {pkg.included.length > 0 && (
                <div>
                  <h2 className="text-xl font-extrabold mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
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
                  <h2 className="text-xl font-extrabold mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
                    Not included
                  </h2>
                  <ul className="space-y-2.5">
                    {pkg.excluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--ink)" }}>
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

        {/* Reserve / join form */}
        <section id="reserve" className="py-10 border-b scroll-mt-24" style={{ borderColor: BORDER }}>
          <h2 className="text-2xl font-extrabold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
            {full ? "Join the waitlist" : "Reserve your spot"}
          </h2>
          <p className="text-sm mb-5" style={{ color: "var(--ink)", maxWidth: "60ch" }}>
            {dep.route.name} · {formatDateRange(dep)} · ${dep.priceUSD.toLocaleString()} per person.
          </p>
          <div
            className="rounded-xl px-4 py-3 text-sm mb-6"
            style={{ background: "var(--snow)", borderLeft: "3px solid var(--gold)", color: "var(--ink)" }}
          >
            🔒 Your place is held with a <strong>${DEPOSIT_USD} deposit</strong>. Full balance due{" "}
            {BALANCE_DUE_DAYS} days before departure. We&apos;ll confirm availability and send payment
            details within a day.
          </div>
          <InquiryForm
            defaultTripType="kilimanjaro"
            tripName={`${dep.route.name} · ${formatDateRange(dep)}`}
            defaultMessage={formMsg}
            submitLabel={full ? "Join the waitlist" : "Request my spot"}
          />
          <p className="text-sm mt-5" style={{ color: "var(--ink)" }}>
            Prefer to chat?{" "}
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "var(--forest)" }}>
              Message Ombeni on WhatsApp
            </a>
            .
          </p>
        </section>

        {/* FAQ */}
        {pkg.faqs.length > 0 && (
          <section className="py-10">
            <h2 className="text-2xl font-extrabold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={pkg.faqs} />
          </section>
        )}
      </div>

      <CTABand
        eyebrow="Not the right date?"
        title="See all Kilimanjaro group departures"
        subtitle="Browse every upcoming guaranteed departure, or ask us to set one up for your dates."
        tripType="kilimanjaro"
      />
    </>
  );
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="block text-[0.65rem] font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(10,10,10,0.5)" }}>
        {label}
      </span>
      <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>{children}</span>
    </div>
  );
}
