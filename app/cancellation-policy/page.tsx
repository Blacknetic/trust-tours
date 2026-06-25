import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  alternates: { canonical: "/cancellation-policy" },
  description:
    "How cancellations and refunds work at Trust Tours & Safaris — safari, Kilimanjaro and Zanzibar terms explained honestly, plus how to postpone instead of cancel.",
};

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I need to change or cancel a Trust Tours booking.",
)}`;

// Small styled building blocks so the long policy stays readable and consistent.
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl md:text-3xl font-semibold mt-12 mb-4 scroll-mt-24"
      style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.15 }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-lg font-extrabold mt-7 mb-2"
      style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base leading-relaxed mb-4" style={{ color: "var(--ink)", maxWidth: "68ch" }}>
      {children}
    </p>
  );
}

function Schedule({ rows }: { rows: [string, string][] }) {
  return (
    <ul className="my-5 space-y-2" style={{ maxWidth: "68ch" }}>
      {rows.map(([when, what]) => (
        <li
          key={when}
          className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 rounded-xl px-4 py-3"
          style={{ background: "var(--snow)", border: "1px solid rgba(74,41,18,0.1)" }}
        >
          <span className="text-sm font-semibold shrink-0" style={{ color: "var(--forest)", minWidth: "16rem" }}>
            {when}
          </span>
          <span className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
            {what}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function CancellationPolicyPage() {
  return (
    <>
      {/* ── Header ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--gold)" }}>
            Transparent · Fair · Always on your side
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Cancellation &amp; Refund Policy
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.95)", maxWidth: "62ch" }}>
            Planning a Tanzania safari, a Kilimanjaro climb, or a Zanzibar beach holiday takes time,
            excitement, and real investment. We know how much you look forward to it — and that life
            doesn&rsquo;t always follow the plan. When that happens, your first call should be to us.
          </p>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--paper)" }}>
        <div className="max-w-3xl mx-auto px-4 md:px-6 py-14 md:py-20">
          <P>
            When something changes — an unexpected illness, a family emergency, a flight disruption
            outside your control — your first call should be to us. Not to read a long list of
            penalties, but to have a real conversation about what we can do together.
          </P>
          <P>
            This page explains clearly and honestly how cancellations and refunds work at Trust Tours
            &amp; Safaris, what we can recover for you, and where our hands are tied by third-party
            partners who operate under their own rules.
          </P>

          <H2>What we believe</H2>
          <P>
            At Trust Tours &amp; Safaris, we treat every guest the way we would want to be treated
            ourselves. When you contact us about a change in plans, you are speaking to real people —
            Tanzanians who care deeply about your experience and your peace of mind. We do not hide
            behind automated systems or rigid scripts. We listen, we look at the situation, and we find
            the best possible solution for you.
          </P>
          <P>
            That said, delivering your safari or climb involves many partners — national parks, lodges,
            camps, airlines, and ground teams — who have already been paid well in advance of your
            arrival date. We will always be honest with you about what we can recover and what we cannot.
          </P>
          <p
            className="my-6 pl-5 text-lg md:text-xl font-medium"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--forest)",
              fontStyle: "italic",
              lineHeight: 1.4,
              borderLeft: "3px solid var(--gold)",
              maxWidth: "52ch",
            }}
          >
            Our promise: we will work harder for your refund than any policy requires us to.
          </p>

          <H2>Safari cancellations</H2>
          <P>
            Safaris involve a combination of our own services and those of our carefully selected lodge
            and camp partners. Each element has its own rules, and we want you to understand them fully
            before you book.
          </P>

          <H3>Our Trust Tours &amp; Safaris service fees</H3>
          <P>
            Our planning, coordination, and guiding fees are non-refundable once a safari has been fully
            confirmed and paid. However, if you cancel well in advance, we will apply a credit toward a
            future trip with no expiry date.
          </P>

          <H3>Lodge &amp; camp accommodation</H3>
          <P>
            Accommodation typically represents the largest portion of your safari cost. Our lodge and
            camp partners operate independently and apply their own cancellation terms, which we are
            obliged to pass on. The general industry schedule is as follows:
          </P>
          <Schedule
            rows={[
              ["More than 90 days before arrival", "Approximately 10% of the accommodation cost is retained."],
              ["60–90 days before arrival", "Approximately 30% is retained."],
              ["30–60 days before arrival", "Approximately 60% is retained."],
              ["8–30 days before arrival", "Approximately 80% is retained."],
              ["7 days or fewer before arrival", "The full accommodation cost is typically non-refundable."],
            ]}
          />
          <P>
            Please note: luxury and ultra-premium lodges and private camps often apply stricter terms
            than the above, due to the exclusivity of their limited rooms and peak-season demand. We
            always inform you of the specific cancellation policy for your chosen properties before you
            confirm your booking — no surprises.
          </P>

          <H3>Park entry fees</H3>
          <P>
            Tanzania National Park fees paid on your behalf are fully refundable up to 24 hours before
            your safari begins. We coordinate these refunds directly with the park authorities on your
            behalf.
          </P>

          <H3>Internal flights &amp; light aircraft transfers</H3>
          <P>
            Light aircraft charters and scheduled internal flights between parks and destinations are
            generally non-refundable once issued, as most aviation partners in Tanzania operate on tight
            margins with no resale of seats. We will always attempt to recover what we can, but we want
            to be honest that this is the most difficult cost to reclaim.
          </P>

          <H2>Kilimanjaro climb cancellations</H2>
          <P>
            As a Kilimanjaro specialist operating our own teams, vehicles, and partner lodges, we have
            significantly more flexibility here than we do with safari lodge partners.
          </P>

          <H3>Booking deposit</H3>
          <P>
            A booking deposit of USD 200 is required to confirm your Kilimanjaro climb. This deposit is
            non-refundable — but it never expires. It can be applied to any future Kilimanjaro climb or
            Tanzania travel experience you book with us, with no time limit whatsoever.
          </P>

          <H3>Kilimanjaro park fees</H3>
          <P>
            Park fees paid to the Tanzania National Parks Authority on your behalf are refundable up to
            24 hours before your climb start date. We handle this process completely on your behalf.
          </P>

          <H3>Accommodation (pre- and post-climb)</H3>
          <P>
            For accommodation at our partner lodges in Moshi, Arusha, or elsewhere in Tanzania,
            cancellation terms vary by property. We will always confirm the specific policy at the time
            of booking. In many cases, with sufficient notice, we can reschedule rather than cancel at
            no additional cost.
          </P>

          <H3>Full climb cost</H3>
          <Schedule
            rows={[
              ["More than 60 days before departure", "25% of the total climb cost is retained."],
              ["30–60 days before departure", "50% is retained."],
              ["14–30 days before departure", "75% is retained."],
              ["Fewer than 14 days before departure", "The full cost is non-refundable."],
            ]}
          />
          <P>
            Postponing your climb is almost always the smarter option. Your payment credit does not
            expire with us — move to any future date that works for you.
          </P>

          <H2>Zanzibar &amp; beach holiday cancellations</H2>
          <P>
            Zanzibar resorts and boutique hotels operate their own cancellation policies, which vary
            significantly between properties and by season. Peak-season bookings — particularly over
            Christmas, New Year, and the July–August period — carry stricter terms than low-season stays.
          </P>
          <P>
            At the time of booking, we will provide you with the exact cancellation policy for your
            specific hotel or resort in writing, so you know precisely where you stand before you commit.
            As a general guide:
          </P>
          <Schedule
            rows={[
              ["More than 60 days before arrival", "Most properties offer a partial or full refund."],
              ["30–60 days before arrival", "Partial refund, typically 40–60%."],
              ["Fewer than 30 days before arrival", "Most Zanzibar properties retain the full amount."],
            ]}
          />
          <P>
            We always contact the property on your behalf to negotiate the best possible outcome, and our
            established relationships often work in your favour.
          </P>

          <H2>Postponing instead of cancelling</H2>
          <P>
            If your dates change but your dream of Tanzania has not, postponing is almost always the
            better option — and we strongly encourage it.
          </P>
          <P>
            For Kilimanjaro climbs: your full payment sits as credit with us, valid for any future
            expedition, with absolutely no expiry date. Choose your new dates whenever you are ready.
          </P>
          <P>
            For safaris and beach holidays: we contact every partner immediately and request a transfer
            of your booking to new dates. Many lodges — particularly outside peak season — allow this
            with no penalty at all. The sooner you let us know, the greater our chances of moving
            everything without cost.
          </P>
          <P>
            The key is to contact us as early as possible. Every day of notice increases what we can
            recover or transfer for you.
          </P>

          <H2>How to request a cancellation or change</H2>
          <P>
            Contact your Trust Tours &amp; Safaris travel consultant directly — by WhatsApp, email, or
            phone. We respond within 24 hours, and usually much faster. Once we receive your request:
          </P>
          <ol className="my-5 space-y-3 list-decimal pl-6" style={{ color: "var(--ink)", maxWidth: "68ch" }}>
            <li className="text-base leading-relaxed">We confirm your cancellation or change in writing.</li>
            <li className="text-base leading-relaxed">
              We immediately contact all relevant partners — lodges, parks, airlines — to calculate
              recoverable amounts.
            </li>
            <li className="text-base leading-relaxed">
              We provide you with a full written breakdown of what is being retained and what is being
              refunded.
            </li>
          </ol>
          <P>
            Refunds are processed within 14 to 30 business days of confirmation, depending on your
            original payment method. International bank transfers may take slightly longer due to
            processing times outside our control. Any refunds are returned via the same payment method
            used for booking, minus any bank transfer fees incurred.
          </P>

          <H2>We strongly recommend travel insurance</H2>
          <P>
            We make no exceptions for circumstances we cannot control — but a good travel insurance
            policy can cover many situations that our cancellation terms cannot, including:
          </P>
          <ul className="my-5 space-y-2 list-disc pl-6" style={{ color: "var(--ink)", maxWidth: "68ch" }}>
            <li className="text-base leading-relaxed">Medical illness or injury before or during travel</li>
            <li className="text-base leading-relaxed">Emergency evacuation from remote parks or the mountain</li>
            <li className="text-base leading-relaxed">International flight cancellation or delay</li>
            <li className="text-base leading-relaxed">Lost luggage or equipment</li>
          </ul>
          <P>
            We recommend choosing a policy that specifically includes trip cancellation, medical
            evacuation, and — if you are climbing — high-altitude coverage. We will gladly provide all
            supporting documentation you need to file a claim with your insurer.
          </P>

          <H2>Cancellations by Trust Tours &amp; Safaris</H2>
          <P>
            In the rare event that we must cancel your trip due to circumstances on our side — political
            instability, natural disaster, park closures, or force majeure events beyond anyone&rsquo;s
            control — we will offer you a full credit toward a future trip or a full refund, depending on
            your preference. We will notify you as soon as possible and work immediately on finding an
            alternative solution.
          </P>
          <P>We have never left a client without a path forward, and we never will.</P>

          <H2>Our final word on this</H2>
          <P>
            We wrote this policy to be honest, not to protect ourselves at your expense. We would rather
            lose a little money on a genuine cancellation than lose your trust forever. If something goes
            wrong with your plans, please come to us first — before you worry, before you assume, before
            you write anything off.
          </P>
          <P>
            Tanzania will still be here when you are ready. And so will we. We look forward to showing you
            one of the most extraordinary places on earth — on whatever date works best for you.
          </P>

          {/* Contact card */}
          <div
            className="mt-12 rounded-2xl p-6 md:p-8"
            style={{ background: "var(--snow)", border: "1px solid rgba(74,41,18,0.12)" }}
          >
            <p className="text-lg font-extrabold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
              Need to change or cancel a booking?
            </p>
            <ul className="space-y-2 text-base" style={{ color: "var(--ink)" }}>
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:info@trusttourstz.com" className="underline" style={{ color: "var(--forest)" }}>
                  info@trusttourstz.com
                </a>
              </li>
              <li>
                <span className="font-semibold">WhatsApp:</span>{" "}
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--forest)" }}>
                  +255 763 473 832 / +255 785 938 860
                </a>
              </li>
              <li><span className="font-semibold">Location:</span> Arusha, Tanzania</li>
              <li><span className="font-semibold">Response time:</span> Within 24 hours — usually much faster.</li>
            </ul>
            <p className="mt-5 text-sm" style={{ color: "var(--ink)" }}>
              Trust Tours &amp; Safaris Tanzania — transparent, fair, and always on your side.{" "}
              <Link href="/contact" className="underline font-semibold" style={{ color: "var(--forest)" }}>
                Get in touch →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
