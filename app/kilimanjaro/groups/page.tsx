import type { Metadata } from "next";
import Photo from "@/components/Photo";
import type { FAQ } from "@/data/packages";
import {
  upcomingDepartures,
  departureMonths,
  formatDateRange,
  STATUS_LABEL,
  ROUTES,
  ROUTE_ORDER,
} from "@/data/departures";
import DepartureCalendar, { type DepartureVM } from "@/components/DepartureCalendar";
import WhyTrustUs from "@/components/WhyTrustUs";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Kilimanjaro Group Departures 2026–2027 — Join a Scheduled Climb",
  alternates: { canonical: "/kilimanjaro/groups" },
  description:
    "Join a scheduled Kilimanjaro group climb with Trust Tours: guaranteed departures on Lemosho, Machame, Marangu and the Northern Circuit. Reserve your spot with a $200 deposit.",
};

const WHY_JOIN = [
  {
    title: "Meet the world on the mountain",
    body: "Every departure brings together travellers from across the globe — united by one goal and one summit.",
  },
  {
    title: "Best value on Kilimanjaro",
    body: "Group departures share the logistics cost, so you get the same expert guides and quality kit at a lower price per person.",
  },
  {
    title: "Owner-led, expert guides",
    body: "Licensed senior guides with hundreds of ascents, twice-daily health checks and emergency oxygen on every climb.",
  },
  {
    title: "Nobody climbs alone",
    body: "On summit night your group carries you as much as your legs do. The friendships formed up here last a lifetime.",
  },
];

// Group-departure FAQs (deposit terms differ from private climbs).
const GROUP_FAQS: FAQ[] = [
  {
    question: "How does a group departure work?",
    answer:
      "You join a scheduled climb on a fixed route and date alongside other individual travellers and small groups. Trust Tours provides all guides, porters, cook, tents, meals and transfers — you bring your gear and your determination. By day two, your group of strangers is already a team.",
  },
  {
    question: "How many people will be in my group?",
    answer:
      "Our group departures run with a small minimum and a maximum of 8–12 climbers depending on the route. Larger groups are split into separate guide teams so the quality of leadership, health monitoring and personal attention never drops.",
  },
  {
    question: "What is included in the price?",
    answer:
      "All park and rescue fees, a licensed senior guide and assistant guides, a mountain chef, the porter team, quality tents and dining tent, all meals on the mountain, hot drinks, emergency oxygen, daily health monitoring and your summit certificate. Full details are on each departure page.",
  },
  {
    question: "How do I reserve a spot, and what about the deposit?",
    answer:
      "Pick a departure and send your details — we confirm availability and email payment instructions within a day. Your place is held with a $200 deposit, with the balance due 60 days before departure.",
  },
  {
    question: "What if I'm travelling alone?",
    answer:
      "Group departures are ideal for solo travellers — most spots are booked by people travelling on their own. You can request a private tent for single occupancy (a small supplement applies on tented routes).",
  },
  {
    question: "Which route is best for a first-timer joining a group?",
    answer:
      "We usually recommend the 8-day Lemosho for first-time climbers: the best acclimatisation profile, the highest success rate and plenty of time for the group to bond before summit night. The 7-day Machame is an excellent second choice. Message us and we'll match the route to your fitness and dates.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer:
      "Your deposit can be transferred to another departure with enough notice. We strongly recommend comprehensive travel insurance that covers trip cancellation and high-altitude trekking. Contact us to discuss any change to your booking.",
  },
];

const STATS = [
  { num: "90–95%", label: "Summit success rate" },
  { num: "$200", label: "Deposit to reserve your spot" },
  { num: "Up to 12", label: "Climbers per group" },
  { num: "Year-round", label: "Guaranteed departures" },
];

export default function GroupDeparturesPage() {
  const deps = upcomingDepartures();

  const departures: DepartureVM[] = deps.map((d) => ({
    id: d.id,
    routeKey: d.routeKey,
    routeName: d.route.name,
    accent: d.route.accent,
    dateRange: formatDateRange(d),
    monthKey: d.startISO.slice(0, 7),
    days: d.days,
    priceUSD: d.priceUSD,
    maxSpots: d.maxSpots,
    status: d.status,
    statusLabel: STATUS_LABEL[d.status],
    guaranteed: d.guaranteed,
    special: d.special,
  }));

  const routes = ROUTE_ORDER.filter((k) => deps.some((d) => d.routeKey === k)).map((k) => ({
    key: k,
    name: ROUTES[k].name,
  }));
  const months = departureMonths(deps);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--forest)" }}>
        <Photo
          src="/images/kilimanjaro-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover hero-ken-burns"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(120deg, rgba(20,20,18,0.88) 0%, rgba(20,20,18,0.66) 52%, rgba(20,20,18,0.82) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
            Kilimanjaro Group Departures · 2026–2027
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Climb Kilimanjaro with your global team
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.95)", maxWidth: "60ch" }}>
            Scheduled, guaranteed departures throughout the year. Join climbers from
            around the world and reach the roof of Africa together — led by our licensed,
            owner-led mountain crew.
          </p>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <span
                  className="block text-2xl md:text-3xl font-extrabold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}
                >
                  {s.num}
                </span>
                <span className="block text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deposit banner ────────────────────────────────────── */}
      <div className="text-center py-3.5 px-4 text-sm font-semibold" style={{ background: "var(--gold)", color: "var(--ink)" }}>
        🔒 Secure your place with a $200 deposit —{" "}
        <span className="font-normal">full balance due 60 days before departure</span>
      </div>

      {/* ── Why join ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-14 md:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ background: "rgba(26,26,22,0.1)" }}>
          {WHY_JOIN.map((w) => (
            <div key={w.title} className="p-6" style={{ background: "#fff" }}>
              <h3 className="text-base font-extrabold mb-1.5" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
                {w.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.7)" }}>
                {w.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Departure calendar ────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
          Upcoming departures
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(10,10,10,0.7)", maxWidth: "60ch" }}>
          Pick a route and date below, then reserve your spot with a $200 deposit. Prefer
          your own private climb on your own dates?{" "}
          <a href="/kilimanjaro" className="font-semibold underline" style={{ color: "var(--forest)" }}>
            See private climbs
          </a>
          .
        </p>
        <DepartureCalendar departures={departures} routes={routes} months={months} />
      </section>

      <WhyTrustUs background="var(--snow)" />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
          Group departures — your questions
        </h2>
        <p className="text-sm mb-8" style={{ color: "rgba(10,10,10,0.7)" }}>
          Still unsure? Message Ombeni directly on WhatsApp.
        </p>
        <FAQAccordion faqs={GROUP_FAQS} />
      </section>

      <CTABand
        eyebrow="Ready to join your group?"
        title="The roof of Africa is waiting"
        subtitle="Tell us which departure suits you — we'll confirm availability and send deposit details within a day."
        ctaLabel="Ask about group departures on WhatsApp"
        waMessage="Hi Ombeni! I'd like to join a Kilimanjaro group departure. Can you help me pick a date and route?"
      />
    </>
  );
}
