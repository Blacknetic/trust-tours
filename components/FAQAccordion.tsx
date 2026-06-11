"use client";

import { useState } from "react";
import type { FAQ } from "@/data/packages";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl>
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderBottom: "1px solid rgba(28,36,25,0.1)" }}>
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
                className="pb-5 text-sm leading-relaxed"
                style={{ color: "var(--ink)", opacity: 0.72, maxWidth: "65ch" }}
              >
                {faq.answer}
              </p>
            </div>
          </dd>
        </div>
      ))}
    </dl>
  );
}
