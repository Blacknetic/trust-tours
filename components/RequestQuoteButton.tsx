"use client";

import { useQuote, type QuoteContext } from "@/components/QuoteModal";

type Variant = "gold" | "outline" | "outline-dark";

interface Props {
  label?: string;
  variant?: Variant;
  className?: string;
  context?: QuoteContext;
}

// Visual variants reuse the same pill shape used across the site's CTAs.
const VARIANT_CLASS: Record<Variant, string> = {
  gold: "text-ink",
  outline: "btn-fill text-paper hover:text-white",
  "outline-dark": "btn-fill hover:text-white",
};

const VARIANT_STYLE: Record<Variant, React.CSSProperties> = {
  gold: { background: "var(--gold)" },
  outline: { border: "2px solid rgba(255,255,255,0.45)", color: "var(--paper)" },
  "outline-dark": { border: "1.5px solid rgba(74,41,18,0.3)", color: "var(--forest)" },
};

export default function RequestQuoteButton({
  label = "Request a quote",
  variant = "gold",
  className = "",
  context,
}: Props) {
  const { openQuote } = useQuote();
  return (
    <button
      type="button"
      onClick={() => openQuote(context)}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-transform duration-200 hover:-translate-y-0.5 ${VARIANT_CLASS[variant]} ${className}`}
      style={VARIANT_STYLE[variant]}
    >
      {label}
    </button>
  );
}
