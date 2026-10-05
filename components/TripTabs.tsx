"use client";

import { useEffect, useRef, useState } from "react";
import PillLink from "@/components/PillLink";

export interface TripTab {
  id: string;
  label: string;
  // Optional one-liner shown above the cards for this tab.
  blurb?: React.ReactNode;
  href: string;
  linkLabel: string;
  // Server-rendered cards — passed in as nodes so PackageCard stays a server component.
  content: React.ReactNode;
}

/**
 * Homepage trip switcher. Every panel is rendered (inactive ones are `hidden`)
 * so all cards stay in the server HTML for crawlers and no-JS visitors.
 * A matching URL hash (e.g. /#honeymoon) opens that tab directly, so the
 * honeymoon set can be linked to from ads, WhatsApp or social posts.
 */
export default function TripTabs({ tabs }: { tabs: TripTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const fromHash = () => {
      const hash = window.location.hash.slice(1);
      if (tabs.some((t) => t.id === hash)) setActive(hash);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [tabs]);

  // Arrow-key navigation per the WAI-ARIA tabs pattern.
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Trip types"
        className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center"
      >
        {tabs.map((tab, i) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className="shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors duration-200"
              style={
                selected
                  ? { background: "var(--ink)", color: "var(--paper)", border: "1.5px solid var(--ink)" }
                  : { background: "transparent", color: "var(--ink)", border: "1.5px solid rgba(26,26,22,0.25)" }
              }
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`panel-${tab.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== active}
        >
          {tab.blurb && (
            <p className="text-sm font-semibold mb-6 max-w-2xl mx-auto text-center" style={{ color: "var(--forest)" }}>
              {tab.blurb}
            </p>
          )}
          {tab.content}
          <div className="mt-10 flex justify-center">
            <PillLink href={tab.href}>{tab.linkLabel}</PillLink>
          </div>
        </div>
      ))}
    </div>
  );
}
