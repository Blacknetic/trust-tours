import Link from "next/link";
import type { Guide } from "@/data/guides";
import { getGuide } from "@/data/guides";
import { getPackage } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import GuideJsonLd from "@/components/GuideJsonLd";
import GuideDiagram from "@/components/GuideDiagram";
import TrustStrip from "@/components/TrustStrip";
import type { GuideTable, GuideCallout } from "@/data/guides";

const BORDER = "rgba(26, 26, 22,0.08)";

const CALLOUT_TONES: Record<NonNullable<GuideCallout["tone"]>, { bar: string; label: string }> = {
  tip: { bar: "var(--forest)", label: "Tip" },
  warning: { bar: "var(--sunset)", label: "Important" },
  info: { bar: "var(--gold)", label: "Good to know" },
};

function Callout({ callout }: { callout: GuideCallout }) {
  const tone = CALLOUT_TONES[callout.tone ?? "tip"];
  return (
    <div
      className="rounded-xl p-4 md:p-5 my-6"
      style={{ background: "var(--snow)", borderLeft: `4px solid ${tone.bar}` }}
    >
      <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: tone.bar }}>
        {callout.label ?? tone.label}
      </p>
      <p className="text-base leading-relaxed" style={{ color: "var(--ink)", opacity: 0.9 }}>
        {callout.text}
      </p>
    </div>
  );
}

function ComparisonTable({ table }: { table: GuideTable }) {
  return (
    <figure className="my-7 -mx-4 md:mx-0 overflow-x-auto">
      <table className="w-full border-collapse text-sm min-w-[34rem]">
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="text-left font-bold px-3 py-2.5 align-bottom"
                style={{
                  color: i === table.highlightCol ? "var(--paper)" : "var(--ink)",
                  background: i === table.highlightCol ? "var(--forest)" : "transparent",
                  borderBottom: "2px solid rgba(26,26,22,0.12)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td
                  key={c}
                  className="px-3 py-2.5 align-top leading-relaxed"
                  style={{
                    color: "var(--ink)",
                    opacity: c === 0 ? 1 : 0.82,
                    fontWeight: c === 0 ? 600 : 400,
                    background: c === table.highlightCol ? "rgba(74,41,18,0.05)" : "transparent",
                    borderBottom: "1px solid rgba(26,26,22,0.07)",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {table.caption && (
        <figcaption className="text-xs mt-2 px-4 md:px-0" style={{ color: "var(--ink)", opacity: 0.5 }}>
          {table.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function GuideView({ guide }: { guide: Guide }) {
  const related = (guide.relatedPackages ?? [])
    .map((slug) => getPackage(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const relatedGuides = (guide.relatedGuides ?? [])
    .map((slug) => getGuide(slug))
    .filter((g): g is Guide => Boolean(g));

  const updated = new Date(guide.updated).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });

  return (
    <>
      <GuideJsonLd guide={guide} />

      {/* ── Header ────────────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="text-xs mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/guides" className="hover:opacity-80 transition-opacity">Guides</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span style={{ color: "rgba(255,255,255,0.8)" }}>{guide.topic}</span>
          </nav>

          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
            {guide.topic}
          </p>
          <h1
            className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {guide.title}
          </h1>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            {guide.readMinutes} min read · Updated {updated}
          </p>
        </div>
      </section>

      {/* ── Article body ──────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-14">
        {/* Direct-answer box (AEO snippet) */}
        <div
          className="rounded-2xl p-5 md:p-6 mb-8"
          style={{ background: "var(--snow)", borderLeft: "4px solid var(--gold)" }}
        >
          <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--gold)" }}>
            The short answer
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--ink)" }}>
            {guide.keyTakeaway}
          </p>
        </div>

        <p className="text-lg leading-relaxed mb-7" style={{ color: "var(--ink)" }}>
          {guide.intro}
        </p>

        {/* Primary CTA — funnel to the matching booking page */}
        <Link
          href={guide.primaryCta.href}
          className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: "var(--gold)", color: "var(--ink)" }}
        >
          {guide.primaryCta.label} →
        </Link>

        {/* Credibility strip (money guides) */}
        {guide.trustStrip && <TrustStrip />}

        {guide.sections.map((s, i) => (
          <div key={i}>
            <section className="mb-9">
              {s.heading && (
                <h2
                  className="text-2xl font-extrabold mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                >
                  {s.heading}
                </h2>
              )}
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="text-base leading-relaxed mb-4" style={{ color: "var(--ink)", opacity: 0.85 }}>
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="space-y-2.5 mt-2">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-1 flex-shrink-0 font-bold" style={{ color: "var(--gold)" }}>›</span>
                      <span className="text-base leading-relaxed" style={{ color: "var(--ink)", opacity: 0.85 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.table && <ComparisonTable table={s.table} />}
              {s.diagram && <GuideDiagram kind={s.diagram} />}
              {s.callout && <Callout callout={s.callout} />}
            </section>

            {/* Inline mid-article CTA */}
            {guide.inlineCtaAfter === i && (
              <div
                className="rounded-2xl p-5 md:p-6 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                style={{ background: "var(--snow)", border: "1px solid var(--border, rgba(26,26,22,0.08))" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink)", opacity: 0.85, maxWidth: "42ch" }}>
                  Got a question while you read? Ombeni answers personally — usually within a few hours.
                </p>
                <Link
                  href={guide.primaryCta.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-90"
                  style={{ background: "var(--gold)", color: "var(--ink)" }}
                >
                  {guide.primaryCta.label} →
                </Link>
              </div>
            )}
          </div>
        ))}

        {/* FAQs */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="pt-6 mt-4 border-t" style={{ borderColor: BORDER }}>
            <h2
              className="text-2xl font-extrabold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={guide.faqs} />
          </section>
        )}

        {/* Bottom inline CTA */}
        <div
          className="rounded-2xl p-6 md:p-7 mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          style={{ background: "var(--snow)" }}
        >
          <p className="text-base font-semibold" style={{ color: "var(--ink)" }}>
            Ready to take the next step?
          </p>
          <Link
            href={guide.primaryCta.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-opacity hover:opacity-90"
            style={{ background: "var(--gold)", color: "var(--ink)" }}
          >
            {guide.primaryCta.label} →
          </Link>
        </div>
      </article>

      {/* ── Keep reading (lateral interlinking) ───────────────── */}
      {relatedGuides.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 md:px-6 pb-12">
          <h2
            className="text-xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            Keep reading
          </h2>
          <ul className="space-y-3">
            {relatedGuides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="group flex items-baseline justify-between gap-4 rounded-xl p-4 transition-colors"
                  style={{ border: "1px solid rgb(26 26 22 / 0.08)" }}
                >
                  <span className="text-base font-semibold" style={{ color: "var(--ink)" }}>{g.title}</span>
                  <span
                    className="text-sm font-semibold whitespace-nowrap transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: "var(--forest)" }}
                  >
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Related trips (link down to bookable products) ────── */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-20">
          <h2
            className="text-2xl font-extrabold mb-7"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            Related trips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </section>
      )}

      <CTABand
        eyebrow="Questions about your trip?"
        title="Plan it with Ombeni directly"
        subtitle="No call centre — you talk to the founder. Ask anything about routes, timing, health or logistics and we'll help you plan."
        ctaLabel="Ask on WhatsApp"
        waMessage="Hi Ombeni! I've been reading your travel guides and have a few questions about planning a trip."
      />
    </>
  );
}
