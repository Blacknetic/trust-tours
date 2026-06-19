import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";

/* Why-you-should-trust-us band. Light-themed because the award badge is a
   white-background image — it only sits cleanly on a light surface (same
   constraint as the logo). `background` lets the host page alternate the
   tone so it never doubles up against an adjacent light section. */

const POINTS = [
  {
    title: "Internationally recognised",
    body: "Nominated at the World Travel Awards 2023 as Tanzania's Leading Safari Company.",
  },
  {
    title: "Licensed & accountable",
    body: "Registered Tanzanian Tourism Agent (Class A) — TALA License No. 014216.",
  },
  {
    title: "Owner-led, never outsourced",
    body: "You plan directly with founder Ombeni — the same person responsible for your trip.",
  },
  {
    title: "Five-star reviewed",
    body: "Consistently rated five stars by independent travellers on TripAdvisor.",
  },
];

export default function WhyTrustUs({
  background = "var(--snow)",
}: {
  background?: string;
}) {
  return (
    <section style={{ background }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 md:gap-16 items-center">
        {/* Framed award certificate */}
        <Reveal className="mx-auto">
          <figure
            className="rounded-2xl px-7 py-6 flex flex-col items-center text-center"
            style={{
              background: "var(--paper)",
              border: "1px solid rgba(74,41,18,0.12)",
              boxShadow: "0 18px 40px -22px rgba(74,41,18,0.4)",
            }}
          >
            <Photo
              src="/Nominee-of-the-year.jpeg"
              alt="World Travel Awards 2023 nominee — Tanzania's Leading Safari Company"
              width={96}
              height={118}
              className="w-24 h-auto rounded-sm"
            />
            <figcaption
              className="mt-3 text-xs font-semibold tracking-wide"
              style={{ color: "var(--forest)" }}
            >
              World Travel Awards · 2023 Nominee
            </figcaption>
          </figure>
        </Reveal>

        {/* Copy + trust points */}
        <div>
          <p
            className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Why travellers trust us
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-8"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
          >
            Recognised, licensed, and answerable to you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {POINTS.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <div>
                  <div className="w-10 h-1 mb-4 rounded-full" style={{ background: "var(--gold)" }} />
                  <h3
                    className="text-lg font-extrabold mb-1.5"
                    style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink)", opacity: 0.65 }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
