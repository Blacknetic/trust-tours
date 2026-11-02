"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QuoteWizard from "@/components/QuoteWizard";

/** What the quote journey needs to know about the trip it opened from. */
export interface QuoteTrip {
  shortName: string;
  /** What this trip is called: "safari", "climb", "trek"… */
  noun: string;
  days: number;
  bestMonths?: string[];
  levels?: { id: string; label: string; fromUSD: number }[];
  addOns?: { id: string; label: string; price: string }[];
}

// Context passed when opening the quote journey, so it can skip what the page
// already knows (a trip, a category) and start from the visitor's choices.
export interface QuoteContext {
  /** The trip page it opened from. Trip questions are skipped when set. */
  trip?: QuoteTrip;
  /** Everything chosen in the booking box. Its presence makes this a booking. */
  known?: {
    level?: string;
    travellers?: number;
    month?: string;
    /** A fixed departure date: the journey then skips "when". */
    date?: string;
    stays?: { nights: string; name: string }[];
    addOns?: string[];
    /** Recalculates the request for a party size, as it can change in the journey. */
    describe: (people: number) => { lines: string[]; total: number | null };
  };
  tripType?: "kilimanjaro" | "safari" | "zanzibar";
  tripName?: string; // e.g. "7-Day Machame Route" — shown on each step and in the message
  submitLabel?: string;
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
  // Bumped on each open, so the journey always starts fresh.
  const [session, setSession] = useState(0);

  const openQuote = useCallback((next?: QuoteContext) => {
    setCtx(next ?? {});
    setSession((s) => s + 1);
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
              className="relative w-full max-w-3xl my-4 rounded-2xl overflow-hidden"
              style={{ background: "var(--paper)", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.6)" }}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 p-1.5"
                style={{ color: "var(--ink)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
              <QuoteWizard key={session} ctx={ctx} onClose={() => setOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuoteModalCtx.Provider>
  );
}
