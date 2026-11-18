import { GEM_PRICES, GEM_PRICE_NOTES } from "@/data/gem-prices";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

// A buyer's reference of gemstone prices, on the gem tour pages and the
// gemstones guide (data/gem-prices.ts). Indicative ranges, never a shop.
export default function GemPriceGuide({ border, compact = false }: { border?: string; compact?: boolean }) {
  return (
    <section
      id="gem-prices"
      className={compact ? "my-9 scroll-mt-24" : "py-10 border-b scroll-mt-24"}
      style={border ? { borderColor: border } : undefined}
    >
      <div className="rounded-3xl p-6 md:p-9" style={{ background: "var(--forest)" }}>
        <p className="text-xs font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "var(--sand)" }}>
          Buy with confidence
        </p>
        <h2
          className="text-2xl md:text-3xl font-extrabold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}
        >
          Gemstone price guide
        </h2>
        <p className="text-base leading-relaxed mb-7 max-w-2xl" style={{ color: "var(--paper)", opacity: 0.88 }}>
          Typical prices for the Tanzanian gemstones you&apos;ll see on our gem tours, per carat and per gram, so you
          know what&apos;s fair before you visit a dealer.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {GEM_PRICES.map((g) => (
            <li key={g.name} className="flex items-center gap-4 rounded-2xl p-4" style={{ background: "var(--paper)" }}>
              <span
                aria-hidden="true"
                className="shrink-0 w-11 h-11 rotate-45 rounded-lg"
                style={{
                  background: `linear-gradient(135deg, #ffffff66 0%, ${g.swatch} 45%, ${g.swatch} 70%, #00000033 100%)`,
                  boxShadow: `0 0 0 2px ${g.swatch}33`,
                }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <p className="font-bold text-base" style={{ color: "var(--ink)" }}>
                    {g.name}
                    {g.variety && (
                      <span className="font-normal text-sm" style={{ color: "var(--ink)", opacity: 0.7 }}>
                        {" "}· {g.variety}
                      </span>
                    )}
                  </p>
                  <p className="font-extrabold text-base whitespace-nowrap" style={{ color: "var(--gold)" }}>
                    {usd(g.carat[0])}–{usd(g.carat[1])}
                    {g.plus ? "+" : ""}
                    <span className="font-semibold text-xs" style={{ color: "var(--ink)", opacity: 0.7 }}> /ct</span>
                  </p>
                </div>
                <div className="flex items-baseline justify-between gap-3 flex-wrap mt-0.5">
                  <p className="text-sm" style={{ color: "var(--ink)", opacity: 0.75 }}>
                    {g.note}
                  </p>
                  <p className="text-xs whitespace-nowrap" style={{ color: "var(--ink)", opacity: 0.7 }}>
                    {usd(g.carat[0] * 5)}–{usd(g.carat[1] * 5)}
                    {g.plus ? "+" : ""} per gram
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="mt-6 space-y-1.5 text-sm leading-relaxed" style={{ color: "var(--paper)", opacity: 0.85 }}>
          {GEM_PRICE_NOTES.map((n) => (
            <li key={n}>· {n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
