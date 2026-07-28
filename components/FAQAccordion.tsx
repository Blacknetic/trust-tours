"use client";

import { useState } from "react";
import Link from "next/link";
import type { FAQ } from "@/data/packages";

// An FAQ may optionally carry a link to its full guide (used by /faq). Existing
// callers pass plain FAQ[] and render exactly as before.
type FAQItem = FAQ & { href?: string; hrefLabel?: string };

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: "1px solid rgba(26, 26, 22,0.1)" }}>
          <dt>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-${i}`}
              className="w-full text-left py-5 flex items-start justify-between gap-4"
            >
              <h3
                className="text-base font-semibold leading-snug"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
              >
                {faq.question}
              </h3>
              <span
                className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-200"
                style={{
                  background: "var(--gold)",
                  color: "var(--paper)",
                  transform: open === i ? "rotate(45deg)" : "none",
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
          </dt>
          <dd
            id={`faq-${i}`}
            style={{
              display: "grid",
              gridTemplateRows: open === i ? "1fr" : "0fr",
              transition: "grid-template-rows 0.25s ease-out",
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ink)", maxWidth: "65ch" }}
              >
                {faq.answer}
              </p>
              {faq.href && (
                <Link
                  href={faq.href}
                  className="inline-block mt-2 text-sm font-semibold hover:opacity-80"
                  style={{ color: "var(--gold)" }}
                >
                  {faq.hrefLabel ?? "Read the full guide"} →
                </Link>
              )}
              <div className="pb-5" aria-hidden="true" />
            </div>
          </dd>
        </div>
      ))}
    </dl>
  );
}
