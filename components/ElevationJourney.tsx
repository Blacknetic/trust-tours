"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import type { ItineraryDay } from "@/data/packages";

interface Props {
  itinerary: ItineraryDay[];
}

const W = 400;
const H = 110;
const PAD = 14;

interface Point {
  x: number;
  y: number;
  alt: number;
  label: string;
  day: number;
}

function buildPoints(days: ItineraryDay[]): Point[] {
  const withAlt = days.filter((d) => d.altitudeEnd != null);
  if (withAlt.length < 2) return [];

  const alts = withAlt.map((d) => d.altitudeEnd!);
  const minAlt = Math.min(...alts, ...withAlt.map((d) => d.altitudeStart ?? d.altitudeEnd!));
  const maxAlt = Math.max(...alts);
  const range = maxAlt - minAlt || 1;

  return withAlt.map((day, i) => ({
    x: PAD + (i / (withAlt.length - 1)) * (W - PAD * 2),
    y: H - PAD - ((day.altitudeEnd! - minAlt) / range) * (H - PAD * 2),
    alt: day.altitudeEnd!,
    label: day.accommodation.split("(")[0].trim(),
    day: day.day,
  }));
}

function buildPath(pts: Point[]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i - 1];
    const c = pts[i];
    const cp1x = (p.x + (c.x - p.x) * 0.55).toFixed(1);
    const cp2x = (c.x - (c.x - p.x) * 0.55).toFixed(1);
    d += ` C ${cp1x} ${p.y.toFixed(1)} ${cp2x} ${c.y.toFixed(1)} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`;
  }
  return d;
}

export default function ElevationJourney({ itinerary }: Props) {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [totalLength, setTotalLength] = useState(9999);
  const [activeIdx, setActiveIdx] = useState(0);

  const points = buildPoints(itinerary);
  const pathD = buildPath(points);
  const areaD =
    points.length >= 2
      ? `${pathD} L ${points[points.length - 1].x.toFixed(1)} ${H} L ${points[0].x.toFixed(1)} ${H} Z`
      : "";

  useEffect(() => {
    if (pathRef.current) setTotalLength(pathRef.current.getTotalLength());
  }, [pathD]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.25"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.round(v * (points.length - 1));
    setActiveIdx(Math.max(0, Math.min(idx, points.length - 1)));
  });

  const strokeOffset = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [totalLength, 0]
  );

  const activePoint = points[activeIdx];

  if (itinerary.length === 0) {
    return (
      <p className="text-sm py-8 italic" style={{ color: "var(--ink)", opacity: 0.5 }}>
        {/* TODO: pull full itinerary from old site before it goes offline */}
        Full day-by-day itinerary coming soon. Contact us on WhatsApp for the complete plan.
      </p>
    );
  }

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 items-start"
    >
      {/* ── Elevation SVG panel ────────────────────────────── */}
      {points.length >= 2 && (
        <div
          className="lg:sticky lg:top-24 rounded-2xl p-5"
          style={{ background: "var(--snow)" }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--forest)", opacity: 0.55 }}
          >
            Elevation profile
          </p>

          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full h-auto"
            aria-label="Route elevation profile chart"
            role="img"
          >
            <defs>
              <linearGradient id="elevFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2E4B3C" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#2E4B3C" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Area under the path */}
            <path d={areaD} fill="url(#elevFill)" />

            {/* Elevation line — draws itself on scroll */}
            <motion.path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="var(--forest)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={totalLength}
              style={{ strokeDashoffset: strokeOffset }}
            />

            {/* Static day dots */}
            {points.map((pt, i) => (
              <circle
                key={i}
                cx={pt.x}
                cy={pt.y}
                r={3}
                fill="var(--forest)"
                opacity={0.3}
              />
            ))}

            {/* Animated active-day marker */}
            {activePoint && (
              <motion.g
                animate={{ x: activePoint.x, y: activePoint.y }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 180, damping: 22 }
                }
              >
                <circle r="9" fill="var(--gold)" opacity="0.2" />
                <circle r="4.5" fill="var(--gold)" />
              </motion.g>
            )}
          </svg>

          {/* Active day readout */}
          {activePoint && itinerary[activeIdx] && (
            <div
              className="flex items-center justify-between mt-3 pt-3"
              style={{ borderTop: "1px solid rgba(28,36,25,0.1)" }}
            >
              <span className="text-xs" style={{ color: "var(--forest)", opacity: 0.7 }}>
                Day {itinerary[activeIdx].day} · {activePoint.label}
              </span>
              <span
                className="text-base font-extrabold"
                style={{ fontFamily: "var(--font-display)", color: "var(--forest)" }}
              >
                {activePoint.alt.toLocaleString()} m
              </span>
            </div>
          )}
        </div>
      )}

      {/* ── Itinerary day list ─────────────────────────────── */}
      <ol className="relative">
        {itinerary.map((day, idx) => (
          <li key={day.day} className="relative flex gap-5 pb-10 last:pb-0">
            {/* Timeline connector */}
            {idx < itinerary.length - 1 && (
              <div
                className="absolute left-3.5 top-7 bottom-0 w-px"
                style={{ background: "var(--gold)", opacity: 0.2 }}
              />
            )}

            {/* Day badge */}
            <div
              className="relative z-10 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: "var(--forest)", color: "var(--paper)" }}
            >
              {day.day}
            </div>

            {/* Day content */}
            <div className="flex-1 min-w-0">
              <h3
                className="font-semibold text-base mb-1 leading-snug"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
              >
                {day.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--ink)", opacity: 0.7, maxWidth: "58ch" }}
              >
                {day.description}
              </p>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-1.5 mb-2">
                {day.altitudeEnd && (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: "var(--snow)", color: "var(--forest)" }}
                  >
                    {day.altitudeEnd.toLocaleString()} m
                  </span>
                )}
                {day.hours && (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{ background: "var(--snow)", color: "var(--ink)" }}
                  >
                    {day.hours}
                  </span>
                )}
                {day.distanceKm && (
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{ background: "var(--snow)", color: "var(--ink)" }}
                  >
                    {day.distanceKm} km
                  </span>
                )}
              </div>

              <p className="text-xs" style={{ color: "var(--ink)", opacity: 0.42 }}>
                {day.meals} · {day.accommodation}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
