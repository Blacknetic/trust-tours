import Reveal from "@/components/Reveal";

// Ombeni's welcome message ("Welcome to Trust Tours & Safaris Tanzania —
// You're in Safe Hands!"), reworked from a plain letter into a short signed
// note + the three promises it makes. Sits directly under the homepage hero.
const PROMISES = [
  {
    title: "Transparent prices",
    body: "Mid-range, luxury or high-end — you see what you pay for, with no surprises later.",
  },
  {
    title: "Flexible itineraries",
    body: "Pick a ready-made trip or let us tailor one around your dreams, interests and budget.",
  },
  {
    title: "Honest advice, no pressure",
    body: "Ask anything — nothing is too small. We help you plan with confidence, at your pace.",
  },
];

export default function WelcomeNote() {
  return (
    <section style={{ background: "var(--snow)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
        {/* The note */}
        <Reveal>
          <p
            className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            You&rsquo;re in safe hands
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
          >
            Dear traveller, <em style={{ color: "var(--gold)" }}>karibu</em> Tanzania.
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
            Your adventure begins with trust. Honeymooners and adventurers,
            families and solo explorers, anniversaries and once-in-a-lifetime
            celebrations — every nationality, every background, every walk of
            life is welcome here. Whatever brings you to Tanzania, we&rsquo;re
            the local team who&rsquo;ll make it special.
          </p>
          <p
            className="text-xl md:text-2xl mb-5"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--ink)", lineHeight: 1.3 }}
          >
            Your adventure, our way. Our local knowledge, your peace of mind.
          </p>
          <p className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
            — Ombeni &amp; the Trust Tours &amp; Safaris team
          </p>
        </Reveal>

        {/* The promises */}
        <div className="grid gap-4">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <div
                className="flex gap-4 rounded-2xl p-5 md:p-6"
                style={{ background: "var(--paper)", border: "1px solid var(--sand)" }}
              >
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full"
                  style={{ background: "rgba(138,90,50,0.12)", color: "var(--gold)" }}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
