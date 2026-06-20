import Link from "next/link";

/**
 * Compact credibility band for guide articles. Mirrors the trust signals the
 * big operators repeat throughout their content, but uses only confirmed Trust
 * Tours facts — licence number, own crew, direct-to-founder. No invented stats.
 */

const PILLARS = [
  {
    head: "Licensed Class A",
    sub: "TALA License No. 014216 — a registered Tanzanian Tourism Agent.",
  },
  {
    head: "Our own crew",
    sub: "We drive, cook and guide every trip ourselves — no subcontracting.",
  },
  {
    head: "Straight to the founder",
    sub: "You plan with Ombeni directly, not a call centre.",
  },
];

export default function TrustStrip() {
  return (
    <aside
      className="my-9 rounded-2xl p-5 md:p-6"
      style={{ background: "var(--forest)" }}
      aria-label="Why travellers trust Trust Tours"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {PILLARS.map((p) => (
          <div key={p.head}>
            <p
              className="text-sm font-extrabold mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}
            >
              {p.head}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              {p.sub}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/about"
        className="inline-block mt-4 text-xs font-semibold transition-opacity hover:opacity-80"
        style={{ color: "var(--gold)" }}
      >
        More about who runs your trip →
      </Link>
    </aside>
  );
}
