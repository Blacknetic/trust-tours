import type { Metadata } from "next";
import Photo from "@/components/Photo";
import CTABand from "@/components/CTABand";
import WhyTrustUs from "@/components/WhyTrustUs";

export const metadata: Metadata = {
  title: "About Us — Meet Ombeni & the Team",
  alternates: { canonical: "/about" },
  description:
    "Trust Tours & Safaris is a small, licensed tour operator based in Arusha, Tanzania, led by founder Ombeni. We drive, we cook, we guide — every trip, our own crew.",
};

// Confirmed company facts (from Trust Tours' own site + Ombeni).
const CREDENTIALS = [
  { stat: "Est. 2008", label: "Founded in Arusha, Tanzania" },
  { stat: "Nominee", label: "World Travel Awards, 2023 & 2024" },
  { stat: "Zanzibar · Nairobi", label: "Offices across East Africa" },
  { stat: "TALA 014216", label: "Licensed Class A operator" },
];

const VALUES = [
  {
    title: "You talk to the owner",
    body: "Message us and Ombeni answers — the same person who plans your route, books your camps and briefs your crew. Nothing is outsourced to a call center.",
  },
  {
    title: "Our own crew, every trip",
    body: "Guides, porters and cooks who work with us trip after trip. On the mountain your health is checked twice daily with a pulse oximeter, and emergency oxygen is always packed.",
  },
  {
    title: "Licensed and accountable",
    body: "We operate as a licensed Tanzanian Tourism Agent (Class A, TALA License No. 014216) and follow Kilimanjaro National Park crew welfare requirements.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Arusha, Tanzania
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
            The people behind the trips
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "60ch" }}
          >
            Since 2008, Trust Tours &amp; Safaris has guided travellers to the
            roof of Africa and across the plains of Tanzania — always from our
            home in Arusha, always with our own crew. We stay deliberately small,
            so the person who plans your journey is the one who sees it through.
          </p>

          {/* Confirmed credentials */}
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-10">
            {CREDENTIALS.map((c) => (
              <div key={c.stat}>
                <dt
                  className="text-xl md:text-2xl font-extrabold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
                >
                  {c.stat}
                </dt>
                <dd
                  className="text-xs md:text-sm mt-1 leading-snug"
                  style={{ color: "rgba(255,255,255,0.95)" }}
                >
                  {c.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Ombeni ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10 md:gap-16 items-start">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden w-64 md:w-full mx-auto">
          <Photo
            src="/images/ombeni-portrait.jpg"
            alt="Ombeni, founder and lead guide of Trust Tours & Safaris"
            fill
            sizes="(max-width: 768px) 256px, 320px"
            className="object-cover"
          />
        </div>

        <div>
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Founder &amp; lead guide
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
          >
            Ombeni Kiware
          </h2>
          {/* TODO: replace with Ombeni's real story in his own words — interview him.
              Do not pad this with invented biography. */}
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--ink)" }}>
            <p style={{ maxWidth: "60ch" }}>
              Ombeni Kiware grew up in the shadow of Kilimanjaro and founded Trust
              Tours in 2008. He still leads from the front — shaping each route,
              meeting the travellers who book it, and standing on the summit
              beside them.
            </p>
            <p style={{ maxWidth: "60ch" }}>
              Around him is a close team of Tanzanian guides, drivers and cooks who
              return season after season. It&apos;s why a Trust Tours trip feels
              the same whether it&apos;s your first or your fifth — and why so much
              of our work comes by word of mouth.
            </p>
          </div>
        </div>
      </section>

      {/* ── How we work ───────────────────────────────────────── */}
      <section style={{ background: "var(--snow)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <h2
            className="text-3xl md:text-4xl font-extrabold mb-12"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
          >
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {VALUES.map((v, i) => (
              <div key={i}>
                <div className="w-10 h-1 mb-5 rounded-full" style={{ background: "var(--gold)" }} />
                <h3
                  className="text-lg font-extrabold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>

          {/* Moments from the trips */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-14">
            {[
              { src: "/images/gallery/safari/safari-2023-01-07-15.jpg", alt: "Ombeni with travellers on a Trust Tours trip" },
              { src: "/images/meru-summit-sign.jpg", alt: "Trust Tours climbers at the summit sign" },
              { src: "/images/gallery/safari/safari-fb-img-1453367302817.jpg", alt: "Maasai village cultural visit" },
              { src: "/images/safari-leopard.jpg", alt: "Leopard on a Tanzania safari" },
              { src: "/images/kilimanjaro-kibo-from-trail.jpg", alt: "Kilimanjaro seen from the trail" },
              { src: "/images/gallery/safari/safari-2023-01-07-5.jpg", alt: "Acacia sunset on the savanna" },
            ].map((p, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden"
                style={{ background: "var(--snow)" }}
              >
                <Photo
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why travellers trust us ───────────────────────────── */}
      <WhyTrustUs background="var(--paper)" />

      <CTABand
        eyebrow="Say hello"
        title="Ask Ombeni anything"
        subtitle="Route advice, training tips, honest answers about costs — no obligation."
        ctaLabel="Message us on WhatsApp"
        waMessage="Hi Ombeni! I found Trust Tours online and have a few questions."
      />
    </>
  );
}
