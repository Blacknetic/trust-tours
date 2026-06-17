"use client";

import { useEffect, useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Positive = drifts slower than scroll (recedes). Try 0.08–0.3. */
  speed?: number;
}

/**
 * Translates its children vertically as the element passes through the
 * viewport, creating depth. rAF-throttled, transform-only. Disabled for
 * reduced-motion users.
 */
export default function Parallax({ children, className = "", speed = 0.15 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const fromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translate3d(0, ${(-fromCenter * speed).toFixed(1)}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
