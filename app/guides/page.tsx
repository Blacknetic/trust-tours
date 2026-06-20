import type { Metadata } from "next";
import { guides, GUIDE_TOPICS } from "@/data/guides";
import CTABand from "@/components/CTABand";
import GuideCard from "@/components/GuideCard";

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
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "62ch" }}
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
            <div key={topic} className="mb-12 last:mb-0">
              <h2
                className="text-sm font-semibold tracking-widest uppercase mb-5"
                style={{ color: "var(--gold)" }}
              >
                {topic}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((g) => (
                  <GuideCard key={g.slug} guide={g} />
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
