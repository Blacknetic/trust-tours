import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kilimanjaro Climbs & Tanzania Safaris",
  description:
    "Climb Kilimanjaro or track the Great Migration with Trust Tours & Safaris — a Moshi-based operator led by Ombeni. From $1,799. Plan your trip on WhatsApp today.",
};

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris."
)}`;

export default function HomePage() {
  return (
    <section className="flex items-center justify-center min-h-[80vh] px-4 py-24">
      <div className="text-center mx-auto" style={{ maxWidth: "42rem" }}>
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-6"
          style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
        >
          Tanzania&apos;s trusted operator
        </p>

        <h1
          className="text-5xl md:text-7xl font-extrabold mb-6"
          style={{
            fontFamily: "var(--font-display)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}
        >
          Kilimanjaro.<br />
          Safaris.<br />
          Done right.
        </h1>

        <p
          className="text-lg mb-10 mx-auto"
          style={{
            color: "var(--ink)",
            opacity: 0.7,
            maxWidth: "48ch",
            lineHeight: 1.6,
          }}
        >
          Climb Africa&apos;s highest peak or track the Great Migration — led by
          Ombeni and a handpicked crew based in Moshi, Tanzania.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-semibold text-base transition-opacity hover:opacity-90"
            style={{ background: "var(--sunset)", fontFamily: "var(--font-body)" }}
          >
            Plan my trip on WhatsApp
          </a>
          <Link
            href="/kilimanjaro"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-80"
            style={{
              border: "2px solid var(--forest)",
              color: "var(--forest)",
              fontFamily: "var(--font-body)",
            }}
          >
            View Kilimanjaro routes
          </Link>
        </div>
      </div>
    </section>
  );
}
