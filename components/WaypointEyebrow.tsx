"use client";

import { useEffect, useRef, useState } from "react";

interface WaypointEyebrowProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A section eyebrow that carries a trail "waypoint" dot which ignites (gold +
 * glow) the moment the label scrolls into view — reinforcing the guided-path
 * feeling. The dot is hidden on small screens (see globals .waypoint).
 */
export default function WaypointEyebrow({ children, className = "", style }: WaypointEyebrowProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [lit, setLit] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLit(true);
          io.disconnect();
        }
      },
      { threshold: 1, rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p ref={ref} className={`waypoint ${lit ? "is-visible" : ""} ${className}`.trim()} style={style}>
      {children}
    </p>
  );
}
