import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "Contact Us — Plan Your Trip",
  alternates: { canonical: "/contact" },
  description:
    "Message Trust Tours & Safaris on WhatsApp (+255 785 938 860) or send an inquiry — tell us your dates and group size and get a free day-by-day itinerary.",
};

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris."
)}`;

export default function ContactPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: "var(--forest)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Replies within a day — usually faster
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
            Let&apos;s plan your trip
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)", maxWidth: "60ch" }}
          >
            WhatsApp is fastest — you&apos;ll chat with Ombeni directly. Prefer
            email? Use the form and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">
        {/* ── Direct contact panel ────────────────────────────── */}
        <div className="space-y-6">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl p-6 transition-shadow hover:shadow-lg"
            style={{ background: "var(--forest)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--gold)" }}
            >
              Fastest — WhatsApp
            </p>
            <p
              className="text-2xl font-extrabold mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}
            >
              +255 785 938 860
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Tap to open a chat with Ombeni →
            </p>
          </a>

          <div
            className="rounded-2xl p-6"
            style={{ background: "var(--snow)", border: "1px solid rgba(26, 26, 22,0.07)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--forest)", opacity: 0.6 }}
            >
              Email
            </p>
            <a
              href="mailto:info@trusttourstz.com"
              className="text-base font-semibold hover:underline"
              style={{ color: "var(--ink)" }}
            >
              info@trusttourstz.com
            </a>
          </div>

          <div
            className="rounded-2xl p-6"
            style={{ background: "var(--snow)", border: "1px solid rgba(26, 26, 22,0.07)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--forest)", opacity: 0.6 }}
            >
              Office
            </p>
            <p className="text-base font-semibold" style={{ color: "var(--ink)" }}>
              Arusha, Tanzania
            </p>
            <p className="text-sm" style={{ color: "var(--ink)", opacity: 0.55 }}>
              Tanzania
            </p>
            {/* TODO: street address + Google Maps embed once confirmed with Ombeni */}
          </div>

          <div
            className="rounded-2xl p-6"
            style={{ background: "var(--snow)", border: "1px solid rgba(26, 26, 22,0.07)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--forest)", opacity: 0.6 }}
            >
              Follow along
            </p>
            <SocialLinks className="-ml-2" linkClassName="text-forest/80 hover:text-gold" />
          </div>
        </div>

        {/* ── Inquiry form ────────────────────────────────────── */}
        <div>
          <h2
            className="text-2xl font-extrabold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            Send an inquiry
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--ink)", opacity: 0.6 }}>
            Tell us what you&apos;re dreaming about and we&apos;ll send a free
            day-by-day itinerary priced for your group.
          </p>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
