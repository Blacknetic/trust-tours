"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import BookingCard, { type BookingCardProps } from "@/components/BookingCard";
import { headlineParty } from "@/lib/pricing";

/**
 * Phone/tablet booking bar. Shows the starting price; tapping it slides up the
 * same booking box the desktop sidebar uses (group size, month, add-ons, total).
 */
export default function MobileCTABar(props: BookingCardProps) {
  const [open, setOpen] = useState(false);
  const { priceFromUSD } = props;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <div
        className="fixed bottom-0 inset-x-0 z-30 lg:hidden px-4 pt-3"
        style={{
          background: "var(--paper)",
          borderTop: "1px solid rgba(26, 26, 22,0.1)",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
      >
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <div className="flex-shrink-0">
            {priceFromUSD > 0 ? (
              <>
                <p className="text-xs leading-none mb-0.5" style={{ color: "var(--ink)" }}>
                  {props.groupPricing ? headlineParty(props.groupPricing) : "From"}
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
            onClick={() => setOpen(true)}
            className="flex-1 text-center py-3.5 rounded-full text-ink font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: "var(--gold)" }}
          >
            Prices &amp; booking
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            // Above the floating WhatsApp button (z-50), below the quote modal (z-60).
            className="fixed inset-0 z-[55] lg:hidden flex items-end"
            style={{ background: "rgba(20,20,18,0.55)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Prices and booking"
              className="w-full max-h-[88vh] overflow-y-auto rounded-t-2xl px-5 pt-3"
              style={{
                background: "var(--paper)",
                paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))",
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="mx-auto h-1 w-10 rounded-full" style={{ background: "rgba(26,26,22,0.2)" }} />
              </div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="text-base font-extrabold" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
                  {props.packageTitle}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="p-1 -mr-1 flex-shrink-0"
                  style={{ color: "var(--ink)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <BookingCard {...props} surface="var(--paper)" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
