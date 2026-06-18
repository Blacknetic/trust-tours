/**
 * SoaringBirds — a distant flock drifting across the hero sky.
 *
 * Deliberately restrained: low-opacity ink silhouettes, a slow glide and a
 * faint wingbeat — birds seen from far off, felt more than noticed. No swarm,
 * no cartoon flapping. Pure CSS (keyframes live in globals.css under
 * `.bird-flight`), deterministic markup so SSR/CSR match, and fully neutralised
 * by the prefers-reduced-motion block. Sits above the hero photo washes but
 * below the copy (z-index in CSS), and is aria-hidden — purely atmospheric.
 *
 * Birds carry per-instance CSS vars: --top (start height), --dur (glide time),
 * --delay (stagger), --scale (apparent distance), --flap (wingbeat speed).
 */

interface Bird {
  top: string;
  dur: string;
  delay: string;
  scale: number;
  flap: string;
  opacity: number;
}

// A loose lead-and-trail flock + one lone straggler. Tuned by hand so they
// read as a group catching a thermal, not a random scatter.
const FLOCK: Bird[] = [
  { top: "18%", dur: "30s", delay: "0s", scale: 1.0, flap: "2.6s", opacity: 0.85 },
  { top: "23%", dur: "30s", delay: "0.6s", scale: 0.82, flap: "2.9s", opacity: 0.72 },
  { top: "14%", dur: "30s", delay: "1.1s", scale: 0.74, flap: "3.2s", opacity: 0.64 },
  { top: "29%", dur: "40s", delay: "4s", scale: 0.6, flap: "3.6s", opacity: 0.5 },
];

function BirdGlyph() {
  // A distant gull silhouette: two soft wing-curves meeting at the body. The
  // wings scale subtly on their own timeline for a far-off wingbeat.
  return (
    <svg width="52" height="18" viewBox="0 0 40 14" fill="none" aria-hidden="true">
      <path
        className="bird-wing"
        d="M2 9C8 9 15 2 20 7C25 2 32 9 38 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SoaringBirds() {
  return (
    <div className="bird-flight" aria-hidden="true">
      {FLOCK.map((b, i) => (
        <span
          key={i}
          className="bird"
          style={
            {
              top: b.top,
              "--dur": b.dur,
              "--delay": b.delay,
              "--scale": b.scale,
              "--flap": b.flap,
              "--bird-opacity": b.opacity,
            } as React.CSSProperties
          }
        >
          <BirdGlyph />
        </span>
      ))}
    </div>
  );
}
