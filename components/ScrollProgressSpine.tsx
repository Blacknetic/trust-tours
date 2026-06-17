"use client";

import { useEffect, useRef } from "react";

/**
 * The guided trail: a thin gold line fixed to the left margin that "draws
 * ahead" as the visitor scrolls (fill height = page scroll progress).
 * Desktop only; decorative, so aria-hidden.
 */
export default function ScrollProgressSpine() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        el.style.setProperty("--trail", p.toFixed(4));
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
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="trail-spine hidden lg:block"
      style={{ position: "fixed", left: "30px", top: "104px", bottom: "104px", zIndex: 20 }}
    />
  );
}
