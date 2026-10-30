"use client";

import { useEffect, useRef, useState } from "react";

export interface SectionNavItem {
  id: string;
  label: string;
}

// A section is current once its top has scrolled up to here: just below where
// the menu links land it (scroll-mt-24, 96px).
const CURRENT_LINE = 106;

/**
 * "On this page" bar under the trip hero. Replaces the site header once scrolled (see globals.css) and
 * fills a pill behind the section being read, so long itineraries stay easy to
 * move around. Scrolls sideways on phones, keeping the current pill in view.
 */
export default function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = items[0]?.id;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= CURRENT_LINE) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [items]);

  useEffect(() => {
    const list = listRef.current;
    const pill = list?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!list || !pill) return;
    list.scrollTo({ left: pill.offsetLeft - (list.clientWidth - pill.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="On this page"
      data-section-nav
      className="sticky top-0 z-30"
      style={{ background: "var(--paper)", borderBottom: "1px solid rgba(74,41,18,0.12)" }}
    >
      <ul
        ref={listRef}
        className="relative max-w-7xl mx-auto px-4 md:px-6 py-2.5 md:py-3 flex gap-1.5 lg:justify-between overflow-x-auto [scrollbar-width:none]"
      >
        {items.map((i) => {
          const on = i.id === active;
          return (
            <li key={i.id} className="flex-shrink-0">
              <a
                href={`#${i.id}`}
                aria-current={on ? "location" : undefined}
                className="block rounded-full px-4 md:px-6 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wide whitespace-nowrap transition-colors hover:bg-[rgba(74,41,18,0.08)]"
                style={on ? { background: "var(--forest)", color: "var(--paper)" } : { color: "var(--ink)" }}
              >
                {i.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
