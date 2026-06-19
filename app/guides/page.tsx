import type { Metadata } from "next";
import Link from "next/link";
import { guides, GUIDE_TOPICS } from "@/data/guides";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Tanzania Travel Guides – Kilimanjaro, Safari & Zanzibar Tips",
  alternates: { canonical: "/guides" },
  description:
    "Practical Tanzania travel guides from Trust Tours: when to visit, how long to climb Kilimanjaro, altitude sickness, visas, vaccinations and what to pack.",
};

export default function GuidesListingPage() {
  return (
    <>
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Plan with confidence
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
            Tanzania Travel Guides
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "62ch" }}
          >
            Straight answers from people who run the trips — when to come, how long
            to climb Kilimanjaro, staying healthy at altitude, visas, vaccinations
            and what to pack. No fluff, just what you need to plan well.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
        {GUIDE_TOPICS.map((topic) => {
          const items = guides.filter((g) => g.topic === topic);
          if (items.length === 0) return null;
          return (
            <div key={topic} className="mb-12">
              <h2
                className="text-sm font-semibold tracking-widest uppercase mb-5"
                style={{ color: "var(--gold)" }}
              >
                {topic}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/guides/${g.slug}`}
                    className="card-lift group flex flex-col h-full rounded-2xl p-6 transition-colors"
                    style={{ border: "1px solid rgb(26 26 22 / 0.08)", background: "#fff" }}
                  >
                    <span
                      className="text-xs font-semibold mb-3"
                      style={{ color: "var(--ink)", opacity: 0.45 }}
                    >
                      {g.readMinutes} min read
                    </span>
                    <h3
                      className="text-lg font-extrabold mb-2 leading-snug"
                      style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                    >
                      {g.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4 flex-1"
                      style={{ color: "var(--ink)", opacity: 0.65 }}
                    >
                      {g.excerpt}
                    </p>
                    <span
                      className="text-sm font-semibold whitespace-nowrap transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: "var(--forest)" }}
                    >
                      Read guide →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <CTABand
        eyebrow="Still have questions?"
        title="Ask Ombeni anything"
        subtitle="If a guide doesn't cover it, message us directly — you'll talk to the founder, not a call centre."
        ctaLabel="Ask on WhatsApp"
        waMessage="Hi Ombeni! I have a question about planning my Tanzania trip."
      />
    </>
  );
}
