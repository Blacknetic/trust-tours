"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InquiryForm from "@/components/InquiryForm";

// Context passed when opening the quote modal so the form can pre-fill itself
// with whatever the visitor was looking at (a trip, a category, a date).
export interface QuoteContext {
  tripType?: "kilimanjaro" | "safari" | "zanzibar";
  tripName?: string; // e.g. "7-Day Machame Route" — shown in the heading + message
  defaultMessage?: string;
  travelMonth?: string;
  groupSize?: string;
  heading?: string;
  subheading?: string;
}

interface QuoteModalApi {
  openQuote: (ctx?: QuoteContext) => void;
  closeQuote: () => void;
}

const QuoteModalCtx = createContext<QuoteModalApi | null>(null);

export function useQuote(): QuoteModalApi {
  const ctx = useContext(QuoteModalCtx);
  if (!ctx) throw new Error("useQuote must be used within <QuoteModalProvider>");
  return ctx;
}

export default function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [ctx, setCtx] = useState<QuoteContext>({});

  const openQuote = useCallback((next?: QuoteContext) => {
    setCtx(next ?? {});
    setOpen(true);
  }, []);
  const closeQuote = useCallback(() => setOpen(false), []);

  // Esc to close + lock body scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <QuoteModalCtx.Provider value={{ openQuote, closeQuote }}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 sm:p-6"
            style={{ background: "rgba(20,20,18,0.66)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onMouseDown={(e) => {
              // Close when clicking the dimmed backdrop (not the dialog).
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Request a free quote"
              className="relative w-full max-w-2xl my-4 rounded-2xl overflow-hidden"
              style={{ background: "var(--paper)", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.6)" }}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {/* Header band */}
              <div className="px-6 sm:px-8 pt-7 pb-6" style={{ background: "var(--forest)" }}>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </button>
                <p
                  className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                  style={{ color: "var(--gold)" }}
                >
                  Free, no-obligation quote
                </p>
                <h2
                  className="text-2xl sm:text-3xl font-extrabold"
                  style={{ fontFamily: "var(--font-display)", color: "var(--paper)", lineHeight: 1.1 }}
                >
                  {ctx.heading ?? "Planning a trip to Tanzania?"}
                </h2>
                <p className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.92)" }}>
                  {ctx.subheading ??
                    "Tell us a little about your trip and Ombeni will send a tailored quote — usually within a day."}
                </p>
              </div>

              {/* Form body (scrolls if tall) */}
              <div className="px-6 sm:px-8 py-7 max-h-[calc(100vh-13rem)] overflow-y-auto">
                <InquiryForm
                  variant="modal"
                  defaultTripType={ctx.tripType}
                  tripName={ctx.tripName}
                  defaultMessage={ctx.defaultMessage}
                  defaultTravelMonth={ctx.travelMonth}
                  defaultGroupSize={ctx.groupSize}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuoteModalCtx.Provider>
  );
}
