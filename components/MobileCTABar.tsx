"use client";

import { useQuote } from "@/components/QuoteModal";

interface Props {
  priceFromUSD: number;
  packageTitle: string;
  tripType?: "kilimanjaro" | "safari" | "zanzibar";
}

export default function MobileCTABar({ priceFromUSD, packageTitle, tripType }: Props) {
  const { openQuote } = useQuote();

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 md:hidden px-4 pt-3"
      style={{
        background: "var(--paper)",
        borderTop: "1px solid rgba(26, 26, 22,0.1)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="flex items-center gap-4 max-w-sm mx-auto">
        <div className="flex-shrink-0">
          {priceFromUSD > 0 ? (
            <>
              <p className="text-xs leading-none mb-0.5" style={{ color: "var(--ink)" }}>
                From
              </p>
              <p
                className="text-2xl font-extrabold leading-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--sunset)" }}
              >
                ${priceFromUSD.toLocaleString()}
              </p>
              <p className="text-xs leading-none mt-0.5" style={{ color: "var(--ink)" }}>
                per person
              </p>
            </>
          ) : (
            <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
              Price on request
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => openQuote({ tripType, tripName: packageTitle })}
          className="flex-1 text-center py-3.5 rounded-full text-ink font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ background: "var(--gold)" }}
        >
          Request a quote
        </button>
      </div>
    </div>
  );
}
