import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import { jsonLd } from "@/lib/json-ld";

const BASE = "https://www.trusttourstz.com";

export const metadata: Metadata = {
  title: "Tanzania Safari & Kilimanjaro FAQs",
  alternates: { canonical: "/faq" },
  description:
    "Answers to common questions about Tanzania safaris and Kilimanjaro climbs — visa, cost, vaccinations, best time, safety, tipping, booking and cancellation.",
  openGraph: {
    title: "Tanzania Safari & Kilimanjaro FAQs | Trust Tours & Safaris",
    description:
      "Common questions about Tanzania safaris and Kilimanjaro climbs — visa, cost, best time, safety, booking and more, answered by a TALA-licensed operator.",
    type: "website",
    url: "/faq",
  },
};

// One FAQ item; `href` links the answer out to its full guide.
type Item = { question: string; answer: string; href?: string };
type Group = { heading: string; items: Item[] };

const FAQ_GROUPS: Group[] = [
  {
    heading: "Entry & health",
    items: [
      {
        question: "Do I need a visa to visit Tanzania?",
        answer:
          "Most nationalities do. Most travellers get an e-visa online before arrival or a visa on arrival at the airport — around $50 for most countries and $100 for US passport holders. We send full guidance once you book.",
        href: "/guides/tanzania-visa-and-passport-requirements",
      },
      {
        question: "What vaccinations do I need for Tanzania?",
        answer:
          "A yellow-fever certificate is required if you're arriving from a country with risk of transmission, and routine vaccinations should be up to date. See a travel clinic six to eight weeks before you fly for personal advice.",
        href: "/guides/tanzania-vaccinations",
      },
      {
        question: "Is there malaria in Tanzania?",
        answer:
          "Yes, malaria is present, especially in lower-lying and coastal areas. Take antimalarial medication and use repellent. The high-altitude summit of Kilimanjaro itself is malaria-free.",
        href: "/guides/malaria-in-tanzania",
      },
      {
        question: "Is Tanzania safe for tourists?",
        answer:
          "Yes — Tanzania is one of Africa's most popular and welcoming destinations, and the safari and mountain regions are well set up for visitors. Use normal travel sense and, above all, a licensed operator.",
        href: "/guides/is-tanzania-safe",
      },
    ],
  },
  {
    heading: "Planning & cost",
    items: [
      {
        question: "How much does it cost to climb Kilimanjaro?",
        answer:
          "Our private climbs start from $1,950 per person, all-inclusive of park fees, licensed guides, the full crew, meals and airport transfers. The exact price depends on the route, the number of days and your group size — every route page shows the price for each party size from one climber to eight.",
        href: "/guides/how-much-to-climb-kilimanjaro",
      },
      {
        question: "How much does a Tanzania safari cost?",
        answer:
          "Our safaris start from $576 for a short two-day trip; multi-day safaris typically run from around $2,100 to $3,400 per person depending on the parks, length and comfort level. Park fees are a large, fixed part of the cost.",
        href: "/guides/how-much-tanzania-safari-cost",
      },
      {
        question: "Is it cheaper to book direct or through Viator/GetYourGuide?",
        answer:
          "Usually direct. OTAs add a commission of roughly 15–25% for the introduction, while the same local operator runs the trip either way. Booking direct removes that markup — the same trip for less, or a better trip for the same budget.",
        href: "/guides/book-direct-vs-ota",
      },
      {
        question: "How do I know a Tanzania tour operator is licensed?",
        answer:
          "Ask for their TALA licence number and category — Class A is the full tour-operator licence — and check the company name matches. A real operator gives the number instantly. We're TALA Class A, No. 014216.",
        href: "/guides/how-to-choose-tour-operator",
      },
    ],
  },
  {
    heading: "Climbing Kilimanjaro",
    items: [
      {
        question: "Can a beginner climb Kilimanjaro?",
        answer:
          "Yes. It's a non-technical walk-up, and most reasonably fit first-timers reach the summit if they choose a longer route for acclimatisation and walk slowly. Patience matters far more than experience.",
        href: "/guides/climbing-kilimanjaro-for-beginners",
      },
      {
        question: "Which Kilimanjaro route is best?",
        answer:
          "For most first-timers we lean toward the 8-day Lemosho (best acclimatisation and scenery) or the 7-day Machame (the classic, slightly cheaper route). The 9-day Northern Circuit has the highest success rate of all.",
        href: "/guides/best-kilimanjaro-route",
      },
      {
        question: "When is the best time to climb Kilimanjaro?",
        answer:
          "The two dry seasons — January to mid-March and June to October — with September the single most reliable month. You can climb year-round, but the rainy months are wetter and quieter.",
        href: "/guides/best-time-to-climb-kilimanjaro",
      },
      {
        question: "What are the Kilimanjaro summit success rates?",
        answer:
          "Success depends mostly on route length: longer routes summit far more often because they allow better acclimatisation. Our estimates run from around 85% on shorter routes to roughly 90% or more on the 8–9 day routes.",
        href: "/guides/kilimanjaro-success-rate",
      },
      {
        question: "What is altitude sickness, and how is it managed?",
        answer:
          "It's your body reacting to thin air, and the causes are ascending too fast — not lack of fitness. The remedy is a slow, gradual climb and, if needed, descent. Our guides run twice-daily health checks and carry emergency oxygen on every climb.",
        href: "/guides/altitude-sickness-on-kilimanjaro",
      },
    ],
  },
  {
    heading: "On safari",
    items: [
      {
        question: "When is the best time to see the Great Migration?",
        answer:
          "The migration is in the Serengeti year-round. The dramatic river crossings are usually July to October, and the calving season — with predators in close attendance — runs January to March in the Ndutu area.",
        href: "/guides/best-time-great-migration",
      },
      {
        question: "What is the best time to visit Tanzania?",
        answer:
          "The dry season (June to October) is best for general wildlife viewing and Kilimanjaro. January to March is excellent for calving-season safaris and clear, warmer climbs.",
        href: "/guides/best-time-to-visit-tanzania",
      },
      {
        question: "Can I combine Kilimanjaro, a safari and Zanzibar?",
        answer:
          "Yes — many travellers do all three in one trip. We arrange it as a single itinerary with one price and all internal transfers handled, so the mountain, the bush and the beach flow together seamlessly.",
        href: "/guides/combine-kilimanjaro-safari-zanzibar",
      },
    ],
  },
  {
    heading: "Booking, payment & cancellation",
    items: [
      {
        question: "How do I book and pay?",
        answer:
          "Tell us your dates and group size and we'll send a tailored day-by-day itinerary and price. A deposit secures your trip and the balance is due before you travel. There's no online checkout — every trip is private and tailored to you.",
        href: "/contact",
      },
      {
        question: "How much deposit is required?",
        answer:
          "For our scheduled Kilimanjaro group departures, a $200 deposit holds your place, with the balance due 60 days before departure. Private trips are confirmed with a deposit too — we'll confirm the exact terms with your quote.",
        href: "/kilimanjaro/groups",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "Our deposit, balance and cancellation terms are set out in full on our cancellation policy page. We also strongly recommend comprehensive travel insurance that covers trip cancellation.",
        href: "/cancellation-policy",
      },
      {
        question: "How much should I tip guides and crew?",
        answer:
          "Tipping is expected in Tanzania and is a genuine part of your budget, not an optional extra. We give clear per-day guidance for mountain guides, porters and safari crews so you can plan for it in advance.",
        href: "/guides/tipping-in-tanzania",
      },
      {
        question: "Do I need travel insurance?",
        answer:
          "Yes. We require comprehensive travel insurance covering trip cancellation and medical care — and, for Kilimanjaro, high-altitude trekking and emergency evacuation. It's a condition of climbing with us, for your own protection.",
        href: "/guides/travel-insurance-tanzania",
      },
    ],
  },
];

// Flatten to one consolidated FAQPage graph (question + answer only — the
// visible "full guide" links are UI, not part of the answer text).
const allFaqs = FAQ_GROUPS.flatMap((g) => g.items);

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${BASE}/faq` },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(FAQ_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(BREADCRUMB_JSON_LD) }} />

      {/* ── Header ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <nav aria-label="Breadcrumb" className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span style={{ color: "rgba(255,255,255,0.95)" }}>FAQ</span>
          </nav>
          <h1
            className="text-3xl md:text-5xl font-extrabold mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.08, letterSpacing: "-0.02em" }}
          >
            Frequently asked questions
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.95)", maxWidth: "60ch" }}>
            The questions travellers ask us most, about Tanzania safaris and Kilimanjaro climbs — answered honestly. Each one links to the full guide if you want the detail.
          </p>
        </div>
      </section>

      {/* ── FAQ groups ────────────────────────────────────────── */}
      <article className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {FAQ_GROUPS.map((group) => (
          <section key={group.heading} className="mb-10">
            <h2
              className="text-2xl font-extrabold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              {group.heading}
            </h2>
            <FAQAccordion faqs={group.items} />
          </section>
        ))}

        <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--ink)" }}>
          Still have a question? Message Ombeni directly on WhatsApp or{" "}
          <Link href="/contact" className="font-semibold underline" style={{ color: "var(--gold)" }}>
            request a free quote
          </Link>
          {" "}— he answers personally, usually within a few hours.
        </p>
      </article>

      <CTABand
        eyebrow="Didn't find your answer?"
        title="Ask Ombeni directly"
        subtitle="No call centre — you talk to the founder. Ask anything about routes, timing, health, cost or logistics and we'll help you plan."
        ctaLabel="Ask on WhatsApp"
        waMessage="Hi Ombeni! I have a question about planning a trip to Tanzania."
      />
    </>
  );
}
