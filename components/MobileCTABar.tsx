"use client";

interface Props {
  priceFromUSD: number;
  packageTitle: string;
}

const WA = "255785938860";

export default function MobileCTABar({ priceFromUSD, packageTitle }: Props) {
  const msg = `Hi Ombeni! I'm interested in the ${packageTitle}. Can you send me the itinerary and pricing?`;
  const url = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-30 md:hidden px-4 pt-3"
      style={{
        background: "var(--paper)",
        borderTop: "1px solid rgba(28,36,25,0.1)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
        paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <div className="flex items-center gap-4 max-w-sm mx-auto">
        <div className="flex-shrink-0">
          {priceFromUSD > 0 ? (
            <>
              <p className="text-xs leading-none mb-0.5" style={{ color: "var(--ink)", opacity: 0.5 }}>
                From
              </p>
              <p
                className="text-2xl font-extrabold leading-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--sunset)" }}
              >
                ${priceFromUSD.toLocaleString()}
              </p>
              <p className="text-xs leading-none mt-0.5" style={{ color: "var(--ink)", opacity: 0.45 }}>
                per person
              </p>
            </>
          ) : (
            <p className="text-sm font-medium" style={{ color: "var(--ink)", opacity: 0.6 }}>
              Price on request
            </p>
          )}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-3.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
          style={{ background: "var(--sunset)" }}
        >
          Plan on WhatsApp
        </a>
      </div>
    </div>
  );
}
