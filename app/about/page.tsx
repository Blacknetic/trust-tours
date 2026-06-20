import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import CTABand from "@/components/CTABand";
import WhyTrustUs from "@/components/WhyTrustUs";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import WaypointEyebrow from "@/components/WaypointEyebrow";
import ScrollProgressSpine from "@/components/ScrollProgressSpine";

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

// What we do — the four things every Trust Tours trip is built from. Qualitative
// by design: no invented head-counts or fleet numbers (those are competitors').
const WHAT_WE_DO = [
  {
    title: "We plan it with you",
    body: "Every itinerary starts as a conversation, not a catalogue. Tell us your dates, your pace and your budget, and we shape a day-by-day plan around them — then keep adjusting until it fits.",
  },
  {
    title: "We drive you ourselves",
    body: "Airport pickup, park transfers and every kilometre between camps are handled by our own team — so the person at the wheel already knows your trip.",
  },
  {
    title: "We cook for you on the trail",
    body: "Hot, fresh meals cooked by our own camp crew, every day on the mountain — with dietary needs catered for. Eating well is half of how you reach the summit.",
  },
  {
    title: "We guide you to the top",
    body: "Guides who have stood on Uhuru Peak and the crater rim hundreds of times, pacing you pole pole so your body has time to adjust to the altitude.",
  },
];

// On the mountain — confirmed safety & comfort practices only.
const MOUNTAIN = [
  {
    title: "Twice-daily health checks",
    body: "On Kilimanjaro and Meru we check your oxygen saturation and pulse morning and evening with a pulse oximeter, so the first signs of altitude sickness are caught early.",
  },
  {
    title: "Emergency oxygen, always packed",
    body: "Bottled oxygen travels with every climb as a precaution — standard kit on the mountain, never an upsell.",
  },
  {
    title: "Paced for the summit",
    body: "Our guides climb pole pole — slowly — giving your body the days it needs to acclimatise. Reaching the top is about patience, not speed.",
  },
  {
    title: "Crew who return season after season",
    body: "The same guides, cooks and porters work with us trip after trip — not day-labour hired at the park gate the morning you arrive.",
  },
];

// Where we operate — confirmed from the company's own offices.
const OFFICES = [
  {
    city: "Arusha, Tanzania",
    role: "Home base",
    body: "Our headquarters, at the foot of Mount Meru — the safari capital of Tanzania and the gateway to the northern circuit and Kilimanjaro.",
  },
  {
    city: "Zanzibar",
    role: "Island office",
    body: "On the coast for the beach end of your trip — so a Serengeti-to-Zanzibar journey stays in the same trusted hands from start to finish.",
  },
  {
    city: "Nairobi, Kenya",
    role: "Regional office",
    body: "Across the border for travellers flying via Kenya, and for cross-border journeys that link the Masai Mara with the Serengeti.",
  },
];

// Pre-computed drifting light-dust motes (deterministic so SSR/CSR match).
const DUST = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 8.3 + 4) % 100}%`,
  duration: `${10 + ((i * 7) % 9)}s`,
  delay: `${(i * 1.7) % 8}s`,
  scale: 0.6 + ((i * 3) % 7) / 6,
}));

export default function AboutPage() {
  return (
    <>
      <ScrollProgressSpine />

      {/* ── Page header — parallax mountain, fading copy ──────────── */}
      <section className="relative flex items-center min-h-[80vh] overflow-hidden">
        <Parallax speed={0.16} className="absolute inset-0">
          <div
            className="hero-ken-burns absolute left-0 right-0"
            style={{ top: "-9%", height: "118%" }}
          >
            <Photo
              src="/images/kilimanjaro-hero.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Parallax>

        {/* Dark wash so the copy stays legible over the photo */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(150deg, rgba(26,26,22,0.82) 0%, rgba(26,26,22,0.55) 45%, rgba(13,19,13,0.74) 100%)",
          }}
        />
        {/* Slow gold sheen drift */}
        <div
          className="absolute inset-0 hero-gradient-shift"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(120deg, rgba(138,90,50,0.16), rgba(26,26,22,0) 40%, rgba(110,59,31,0.12) 80%)",
          }}
        />
        {/* Drifting gold light-dust */}
        <div className="light-dust" aria-hidden="true">
          {DUST.map((d, i) => (
            <span
              key={i}
              style={{
                left: d.left,
                animationDuration: d.duration,
                animationDelay: d.delay,
                transform: `scale(${d.scale})`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-24">
          <p
            className="fade-up text-sm font-semibold tracking-[0.22em] uppercase mb-5"
            style={{ color: "var(--gold)" }}
          >
            Arusha, Tanzania · Since 2008
          </p>
          <h1
            className="fade-up fade-up-2 text-4xl md:text-6xl font-semibold mb-6"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "18ch",
            }}
          >
            The people behind the trips
          </h1>
          <p
            className="fade-up fade-up-3 text-base md:text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "58ch" }}
          >
            Since 2008, Trust Tours &amp; Safaris has guided travellers to the
            roof of Africa and across the plains of Tanzania — always from our
            home in Arusha, always with our own crew. We stay deliberately small,
            so the person who plans your journey is the one who sees it through.
          </p>

          {/* Confirmed credentials — stagger in beneath the intro */}
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7 mt-12">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c.stat} delay={i * 90}>
                <div>
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
              </Reveal>
            ))}
          </dl>
        </div>

        {/* Scroll cue */}
        <div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 scroll-cue"
          aria-hidden="true"
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase"
            style={{ color: "rgba(255,255,255,0.95)" }}
          >
            Meet the team
          </span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── Who we are — the lead statement ───────────────────────── */}
      <section className="contour-bg" style={{ background: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <WaypointEyebrow
              className="text-sm font-semibold tracking-[0.22em] uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Who we are
            </WaypointEyebrow>
            <h2
              className="text-3xl md:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.12 }}
            >
              A small Tanzanian crew that runs its own trips — start to finish.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--ink)" }}>
              <p>
                Trust Tours &amp; Safaris is a licensed tour operator based in
                Arusha, Tanzania — not a reseller forwarding your booking to
                someone else. The crew that meets you at the airport is our crew.
                The guide on the summit push is our guide. The cook at camp is on
                our team.
              </p>
              <p>
                We&rsquo;ve kept the company deliberately small since 2008. It
                means we can&rsquo;t take everyone — but the travellers we do take
                get our full attention, and so much of our work still comes by
                word of mouth from people we&rsquo;ve guided before.
              </p>
              <p>
                Whether it&rsquo;s your first time at altitude or your fifth
                safari, you&rsquo;re dealing with the same people from the first
                WhatsApp message to your summit certificate or last game drive.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ombeni — founder & lead guide ─────────────────────────── */}
      <section style={{ background: "var(--snow)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-[340px_1fr] gap-10 md:gap-16 items-center">
          <Reveal className="mx-auto w-64 md:w-full">
            <div className="wipe relative aspect-[4/5] rounded-2xl overflow-hidden photo-zoom">
              <Photo
                src="/images/ombeni-portrait.jpg"
                alt="Ombeni, founder and lead guide of Trust Tours & Safaris"
                fill
                sizes="(max-width: 768px) 256px, 340px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <WaypointEyebrow
              className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Founder &amp; lead guide
            </WaypointEyebrow>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
            >
              Ombeni Kiware
            </h2>
            {/* TODO: replace with Ombeni's real story in his own words — interview him.
                Do not pad this with invented biography. */}
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--ink)" }}>
              <p style={{ maxWidth: "60ch" }}>
                Ombeni Kiware grew up in the shadow of Kilimanjaro and founded
                Trust Tours in 2008. He still leads from the front — shaping each
                route, meeting the travellers who book it, and standing on the
                summit beside them.
              </p>
              <p style={{ maxWidth: "60ch" }}>
                Around him is a close team of Tanzanian guides, drivers and cooks
                who return season after season. It&apos;s why a Trust Tours trip
                feels the same whether it&apos;s your first or your fifth — and why
                so much of our work comes by word of mouth.
              </p>
            </div>

            <blockquote
              className="mt-8 pl-5 text-xl md:text-2xl font-medium"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--forest)",
                fontStyle: "italic",
                lineHeight: 1.4,
                borderLeft: "3px solid var(--gold)",
                maxWidth: "40ch",
              }}
            >
              &ldquo;When you message Trust Tours, you talk to me — not a call
              center. We keep the company small so every trip gets our full
              attention.&rdquo;
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── What we do — alternating image, numbered list ─────────── */}
      <section style={{ background: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Parallax speed={0.1} className="order-2 md:order-1">
            <Reveal>
              <div className="wipe relative aspect-[4/5] rounded-2xl overflow-hidden photo-zoom card-lift">
                <Photo
                  src="/images/kilimanjaro-trekkers.jpg"
                  alt="Trust Tours guides and climbers on the trail up Kilimanjaro"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </Parallax>

          <div className="order-1 md:order-2">
            <Reveal>
              <WaypointEyebrow
                className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                What we do
              </WaypointEyebrow>
              <h2
                className="text-3xl md:text-4xl font-semibold mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
              >
                We don&rsquo;t hand your trip off — we run it
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: "var(--ink)" }}>
                Many operators sell the trip and subcontract the actual climb or
                safari to whoever&rsquo;s cheapest that week. We don&rsquo;t. From
                the plan to the plate at camp, it&rsquo;s our own team — and that
                control is exactly why we can stand behind every day of it.
              </p>
            </Reveal>

            <ol className="space-y-7">
              {WHAT_WE_DO.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <li className="flex gap-5">
                    <span
                      className="step-badge inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-full text-base font-semibold"
                      style={{
                        fontFamily: "var(--font-display)",
                        background: "rgba(138,90,50,0.12)",
                        border: "1.5px solid var(--gold)",
                        color: "var(--gold)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3
                        className="text-lg font-extrabold mb-1.5"
                        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                        {item.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── How we work — values grid ─────────────────────────────── */}
      <section style={{ background: "var(--snow)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <Reveal>
            <WaypointEyebrow
              className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              How we work
            </WaypointEyebrow>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-12"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
            >
              Three things that never change
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 110}>
                <div
                  className="card-hover-soft h-full rounded-2xl p-7"
                  style={{ background: "var(--paper)", border: "1px solid rgba(74,41,18,0.1)" }}
                >
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── On the mountain — safety & comfort (dark beat) ────────── */}
      <section className="relative overflow-hidden" style={{ background: "var(--dusk)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <Reveal>
              <WaypointEyebrow
                className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                On the mountain
              </WaypointEyebrow>
              <h2
                className="text-3xl md:text-4xl font-semibold mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.1 }}
              >
                Safety and comfort, built into every climb
              </h2>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: "rgba(255,255,255,0.95)", maxWidth: "52ch" }}
              >
                Altitude is the real challenge on Kilimanjaro and Meru — not the
                terrain. The way we climb is designed around getting you up safely
                and bringing you down well.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
              {MOUNTAIN.map((m, i) => (
                <Reveal key={m.title} delay={i * 90}>
                  <div>
                    <div className="w-9 h-1 mb-3 rounded-full" style={{ background: "var(--gold)" }} />
                    <h3
                      className="text-base font-extrabold mb-1.5"
                      style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}
                    >
                      {m.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.95)" }}>
                      {m.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Parallax speed={0.12}>
            <Reveal delay={120}>
              <div className="wipe relative aspect-[4/5] rounded-2xl overflow-hidden photo-zoom">
                <Photo
                  src="/images/wall/kilimanjaro-summit-night.jpg"
                  alt="A Trust Tours line of climbers on the Kilimanjaro summit push at night"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </Parallax>
        </div>
      </section>

      {/* ── Our crew & their welfare ──────────────────────────────── */}
      <section style={{ background: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Parallax speed={0.1}>
            <Reveal>
              <div className="wipe relative aspect-[5/4] rounded-2xl overflow-hidden photo-zoom card-lift">
                <Photo
                  src="/images/wall/team-with-clients.jpg"
                  alt="The Trust Tours crew celebrating with a group of climbers"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </Parallax>

          <Reveal delay={120}>
            <WaypointEyebrow
              className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Our crew
            </WaypointEyebrow>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-5"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
            >
              Looked after, so they can look after you
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--ink)" }}>
              <p>
                A climb is only as good as the people carrying it. Our guides,
                cooks and porters are the heart of Trust Tours — most of them have
                worked with us for years, and they come back season after season
                because the work is fair.
              </p>
              <p>
                We follow Kilimanjaro National Park&rsquo;s crew-welfare
                requirements on every expedition: fair pay, sensible load limits,
                proper meals and shelter for the porters who get you up the
                mountain. Treating the crew well isn&rsquo;t a marketing line for
                us — it&rsquo;s why the same faces are still here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Moments — wipe + zoom gallery ─────────────────────────── */}
      <section style={{ background: "var(--snow)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <Reveal className="max-w-2xl mb-10 md:mb-12">
            <WaypointEyebrow
              className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Moments from the trips
            </WaypointEyebrow>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
            >
              Real people, real summits, real plains
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
              Not stock photos — our own guests, guides and crew, on the mountain
              and in the bush.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: "/images/gallery/safari/safari-2023-01-07-15.jpg", alt: "Ombeni with travellers on a Trust Tours safari" },
              { src: "/images/wall/meru-summit-sign.jpg", alt: "Trust Tours climbers at the Mount Meru summit sign" },
              { src: "/images/gallery/safari/safari-fb-img-1453367302817.jpg", alt: "Maasai village cultural visit" },
              { src: "/images/safari-leopard.jpg", alt: "Leopard on a Tanzania safari" },
              { src: "/images/kilimanjaro-kibo-from-trail.jpg", alt: "Kilimanjaro seen from the trail" },
              { src: "/images/gallery/safari/safari-2023-01-07-5.jpg", alt: "Acacia sunset on the savanna" },
            ].map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 90}>
                <figure className="card-lift photo-zoom relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden">
                  <div className="wipe absolute inset-0">
                    <Photo
                      src={p.src}
                      alt={p.alt}
                      fill
                      loading="lazy"
                      quality={70}
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where we operate ──────────────────────────────────────── */}
      <section className="contour-bg" style={{ background: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <Reveal className="max-w-2xl mb-10 md:mb-12">
            <WaypointEyebrow
              className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              Where we operate
            </WaypointEyebrow>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
            >
              Three offices, one team across East Africa
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
              From the foot of Mount Meru to the Zanzibar coast and across the
              border into Kenya — so a single journey can run mountain, plains and
              beach without ever leaving our hands.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {OFFICES.map((o, i) => (
              <Reveal key={o.city} delay={i * 110}>
                <div
                  className="card-hover-soft h-full rounded-2xl p-7"
                  style={{ background: "var(--paper)", border: "1px solid rgba(74,41,18,0.1)" }}
                >
                  <p
                    className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                    style={{ color: "var(--gold)" }}
                  >
                    {o.role}
                  </p>
                  <h3
                    className="text-xl font-extrabold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                  >
                    {o.city}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                    {o.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why travellers trust us ───────────────────────────────── */}
      <WhyTrustUs background="var(--snow)" />

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
