"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Horizontal, swipeable row of trip cards with prev/next arrows on desktop.
 * Cards are server-rendered children; this only handles scrolling. When all
 * cards fit, the row centres itself and the arrows hide.
 */
export default function TripCarousel({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = scroller.current;
    el?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  // Move by roughly one viewport of cards, snapping takes care of alignment.
  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  const arrow = (dir: 1 | -1, enabled: boolean) => (
    <button
      type="button"
      onClick={() => scrollBy(dir)}
      disabled={!enabled}
      aria-label={dir === 1 ? "Next trips" : "Previous trips"}
      className={`hidden md:inline-flex absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full shadow-lg transition-opacity duration-200 disabled:opacity-0 disabled:pointer-events-none ${
        dir === 1 ? "right-2 lg:-right-2" : "left-2 lg:-left-2"
      }`}
      style={{ background: "var(--paper)", color: "var(--ink)", border: "1px solid var(--sand)" }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path
          d={dir === 1 ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <div className="relative">
      {arrow(-1, canPrev)}
      <div
        ref={scroller}
        role="region"
        aria-label={label}
        className="overflow-x-auto snap-x snap-mandatory scroll-px-4 md:scroll-px-0 -mx-4 px-4 md:mx-0 md:px-0 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* w-max + mx-auto: centred when the cards fit, scrollable when not */}
        <div className="flex gap-5 w-max mx-auto">{children}</div>
      </div>
      {arrow(1, canNext)}
    </div>
  );
}
