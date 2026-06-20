"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { DiagramKind } from "@/data/guides";

/**
 * Animated SVG explainers embedded inside guide articles. Each diagram draws or
 * fades itself in on scroll (respecting prefers-reduced-motion) to make a
 * concept easier to grasp than prose alone. Everything here is evergreen
 * geography (zones, route shapes, summit-night timing) — never invented stats.
 */

const GOLD = "var(--gold)";
const FOREST = "var(--forest)";
const INK = "var(--ink)";

function Frame({
  eyebrow,
  caption,
  children,
}: {
  eyebrow: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure
      className="my-9 rounded-2xl p-5 md:p-6"
      style={{ background: "var(--snow)", border: "1px solid rgb(26 26 22 / 0.08)" }}
    >
      <figcaption
        className="text-xs font-bold uppercase tracking-widest mb-4"
        style={{ color: GOLD }}
      >
        {eyebrow}
      </figcaption>
      {children}
      {caption && (
        <p className="text-xs mt-4 leading-relaxed" style={{ color: INK }}>
          {caption}
        </p>
      )}
    </figure>
  );
}

/* ── 1. Climb high, sleep low ─────────────────────────────────────────── */
function Acclimatization({ reduced }: { reduced: boolean }) {
  const W = 360;
  const H = 150;
  // Hand-authored sawtooth: each day climbs to a high point then drops to a
  // lower sleeping altitude — yet the trend rises overall.
  const climb = "M 12 130 L 60 70 L 96 100 L 150 48 L 188 84 L 244 34 L 280 70 L 348 16";
  const sleeps = [
    { x: 96, y: 100, label: "sleep" },
    { x: 188, y: 84, label: "sleep" },
    { x: 280, y: 70, label: "sleep" },
  ];
  return (
    <Frame
      eyebrow="Climb high, sleep low"
      caption="The trail repeatedly climbs to a high point, then drops to a lower camp to sleep. Each peak nudges your body to adapt; each lower night lets it recover — so the overall trend rises while you acclimatize."
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Climb high, sleep low acclimatization profile">
        <line x1="12" y1="132" x2="348" y2="132" stroke={INK} strokeOpacity="0.15" strokeWidth="1" />
        <motion.path
          d={climb}
          fill="none"
          stroke={GOLD}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {sleeps.map((s, i) => (
          <motion.g
            key={i}
            initial={reduced ? false : { opacity: 0, scale: 0.6 }}
            whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.25, type: "spring", stiffness: 200, damping: 18 }}
          >
            <circle cx={s.x} cy={s.y} r="4" fill={FOREST} />
            <text x={s.x} y={s.y + 18} textAnchor="middle" fontSize="9" fill={INK} fillOpacity="0.55">
              {s.label}
            </text>
          </motion.g>
        ))}
        <text x="348" y="12" textAnchor="end" fontSize="10" fontWeight="700" fill={FOREST}>
          summit
        </text>
        <text x="12" y="146" fontSize="9" fill={INK} fillOpacity="0.5">start</text>
      </svg>
    </Frame>
  );
}

/* ── 2. The five climate zones ────────────────────────────────────────── */
const ZONES = [
  { name: "Arctic / Summit", range: "5,000–5,895 m", c: "#e9eef2" },
  { name: "Alpine Desert", range: "4,000–5,000 m", c: "#cdb89a" },
  { name: "Heath & Moorland", range: "2,800–4,000 m", c: "#a98a5e" },
  { name: "Rainforest", range: "1,800–2,800 m", c: "#6e5a32" },
  { name: "Cultivation", range: "800–1,800 m", c: "#4a2912" },
];
function ClimateZones({ reduced }: { reduced: boolean }) {
  return (
    <Frame
      eyebrow="Five worlds in one climb"
      caption="Over a few days you walk from farmland and rainforest, through alpine moorland and high-altitude desert, to an arctic summit — climates that would take a continent's worth of latitude to cross at sea level."
    >
      <div className="space-y-1.5">
        {ZONES.map((z, i) => (
          <motion.div
            key={z.name}
            className="flex items-center justify-between rounded-lg px-3 py-2.5"
            style={{ background: z.c, color: i < 2 ? INK : "#fff" }}
            initial={reduced ? false : { opacity: 0, x: -24 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold">{z.name}</span>
            <span className="text-xs font-mono" style={{ opacity: 0.85 }}>{z.range}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* ── 3. Route profiles, side by side ──────────────────────────────────── */
const ROUTES = [
  { name: "Marangu", days: "6 days", d: "M 6 44 L 24 34 L 40 30 L 52 12 L 64 38", note: "Hut route · there-and-back" },
  { name: "Machame", days: "7 days", d: "M 6 46 L 18 30 L 30 36 L 42 24 L 52 12 L 66 40", note: "Scenic · climb-high-sleep-low" },
  { name: "Lemosho", days: "8 days", d: "M 6 47 L 16 34 L 26 30 L 36 33 L 46 22 L 54 12 L 66 38", note: "Excellent acclimatization" },
  { name: "Northern Circuit", days: "9 days", d: "M 6 48 L 14 36 L 22 32 L 30 35 L 38 28 L 46 31 L 54 12 L 66 38", note: "Longest · highest success" },
];
function RouteProfiles({ reduced }: { reduced: boolean }) {
  return (
    <Frame
      eyebrow="The classic routes at a glance"
      caption="More days on the mountain means a gentler, more gradual ascent profile — the single biggest driver of acclimatization and summit success."
    >
      <div className="grid grid-cols-2 gap-4">
        {ROUTES.map((r, i) => (
          <motion.div
            key={r.name}
            className="rounded-xl p-3"
            style={{ background: "#fff", border: "1px solid rgb(26 26 22 / 0.07)" }}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-sm font-extrabold" style={{ color: INK }}>{r.name}</span>
              <span className="text-xs font-semibold" style={{ color: GOLD }}>{r.days}</span>
            </div>
            <svg viewBox="0 0 72 54" className="w-full h-auto">
              <line x1="6" y1="50" x2="66" y2="50" stroke={INK} strokeOpacity="0.12" strokeWidth="1" />
              <motion.path
                d={r.d}
                fill="none"
                stroke={GOLD}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduced ? false : { pathLength: 0 }}
                whileInView={reduced ? undefined : { pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 1.1, ease: "easeInOut" }}
              />
            </svg>
            <p className="text-xs mt-1" style={{ color: INK }}>{r.note}</p>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* ── 4. More days → better odds (conceptual, no percentages) ──────────── */
const BARS = [
  { label: "5 days", h: 30 },
  { label: "6 days", h: 48 },
  { label: "7 days", h: 70 },
  { label: "8 days", h: 86 },
  { label: "9 days", h: 96 },
];
function DaysVsSuccess({ reduced }: { reduced: boolean }) {
  return (
    <Frame
      eyebrow="Why more days win"
      caption="Conceptual, not a quoted statistic: every extra day of gradual ascent gives your body more time to adapt to thin air — which is why longer itineraries reach the summit far more often."
    >
      <div className="flex items-end justify-between gap-3 h-32 px-1">
        {BARS.map((b, i) => (
          <div key={b.label} className="flex-1 flex flex-col items-center justify-end h-full">
            <motion.div
              className="w-full rounded-t-md"
              style={{ background: GOLD, opacity: 0.35 + i * 0.14 }}
              initial={reduced ? false : { height: 0 }}
              whileInView={reduced ? { height: `${b.h}%` } : { height: `${b.h}%` }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
            />
            <span className="text-xs mt-2 font-semibold" style={{ color: INK }}>
              {b.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs mt-1" style={{ color: INK }}>
        <span>lower summit chance</span>
        <span>higher summit chance →</span>
      </div>
    </Frame>
  );
}

/* ── 5. Summit night timeline ─────────────────────────────────────────── */
const SUMMIT = [
  { t: "≈ 23:30", place: "Leave Barafu Camp", alt: "4,673 m" },
  { t: "Pre-dawn", place: "Switchbacks by headtorch", alt: "5,000+ m" },
  { t: "Sunrise", place: "Stella Point on the crater rim", alt: "5,756 m" },
  { t: "Morning", place: "Uhuru Peak — the summit", alt: "5,895 m" },
  { t: "Midday", place: "Long descent to a lower camp", alt: "↓ 3,100 m" },
];
function SummitNight({ reduced }: { reduced: boolean }) {
  return (
    <Frame
      eyebrow="Anatomy of summit night"
      caption="You set off around midnight so you reach the crater rim for sunrise. It's the hardest stretch of the whole climb — cold, dark and slow — which is exactly why the extra acclimatization days matter."
    >
      <ol className="relative ml-1">
        {SUMMIT.map((s, i) => (
          <motion.li
            key={i}
            className="relative flex gap-4 pb-5 last:pb-0"
            initial={reduced ? false : { opacity: 0, x: -16 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            {i < SUMMIT.length - 1 && (
              <span
                className="absolute left-[5px] top-3 bottom-0 w-px"
                style={{ background: GOLD, opacity: 0.3 }}
              />
            )}
            <span
              className="relative z-10 mt-1 flex-shrink-0 w-[11px] h-[11px] rounded-full"
              style={{ background: i === 3 ? GOLD : FOREST }}
            />
            <div className="flex-1 flex items-baseline justify-between gap-3">
              <span className="text-sm" style={{ color: INK }}>
                <span className="font-semibold" style={{ color: GOLD }}>{s.t}</span>
                {" — "}
                {s.place}
              </span>
              <span className="text-xs font-mono whitespace-nowrap" style={{ color: INK }}>
                {s.alt}
              </span>
            </div>
          </motion.li>
        ))}
      </ol>
    </Frame>
  );
}

/* ── 6. The Great Migration's yearly loop ─────────────────────────────── */
const MIG_CX = 110;
const MIG_CY = 112;
const MIG_R = 72;
function ringPoint(i: number, n: number) {
  const a = ((-90 + (360 * i) / n) * Math.PI) / 180;
  return { x: MIG_CX + MIG_R * Math.cos(a), y: MIG_CY + MIG_R * Math.sin(a) };
}
const MIG_PTS = Array.from({ length: 12 }, (_, i) => ringPoint(i, 12));
const MIG_XS = [...MIG_PTS.map((p) => p.x), MIG_PTS[0].x];
const MIG_YS = [...MIG_PTS.map((p) => p.y), MIG_PTS[0].y];
const MIG_SEASONS = [
  { i: 0, dy: -10, anchor: "middle", l1: "Calving", l2: "Jan–Mar · south" },
  { i: 3, dy: 4, anchor: "start", l1: "Heading north", l2: "Apr–Jun · west" },
  { i: 6, dy: 18, anchor: "middle", l1: "Mara crossings", l2: "Jul–Sep · north" },
  { i: 9, dy: 4, anchor: "end", l1: "Returning south", l2: "Oct–Dec" },
] as const;
function MigrationMap({ reduced }: { reduced: boolean }) {
  return (
    <Frame
      eyebrow="The migration is a year-round loop"
      caption="Roughly two million wildebeest and zebra circle the Serengeti–Mara ecosystem every year, chasing the rains and fresh grass. There's no single 'migration season' — only a question of where the herds are in the cycle when you travel."
    >
      <svg viewBox="0 0 220 224" className="w-full h-auto max-w-sm mx-auto" role="img" aria-label="The Great Migration's clockwise yearly loop">
        {/* The loop path */}
        <motion.circle
          cx={MIG_CX}
          cy={MIG_CY}
          r={MIG_R}
          fill="none"
          stroke={GOLD}
          strokeWidth="2"
          strokeDasharray="3 4"
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        {/* Month ticks */}
        {MIG_PTS.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={i % 3 === 0 ? 0 : 1.6} fill={INK} fillOpacity="0.25" />
        ))}
        {/* Season nodes + labels */}
        {MIG_SEASONS.map((s) => {
          const p = MIG_PTS[s.i];
          return (
            <motion.g
              key={s.i}
              initial={reduced ? false : { opacity: 0, scale: 0.6 }}
              whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + s.i * 0.06, type: "spring", stiffness: 200, damping: 16 }}
            >
              <circle cx={p.x} cy={p.y} r="4" fill={FOREST} />
              <text x={p.x} y={p.y + s.dy} textAnchor={s.anchor} fontSize="9" fontWeight="700" fill={INK}>
                {s.l1}
              </text>
              <text x={p.x} y={p.y + s.dy + 10} textAnchor={s.anchor} fontSize="8" fill={INK} fillOpacity="0.55">
                {s.l2}
              </text>
            </motion.g>
          );
        })}
        {/* Centre label */}
        <text x={MIG_CX} y={MIG_CY - 4} textAnchor="middle" fontSize="10" fontWeight="800" fill={FOREST} style={{ fontFamily: "var(--font-display)" }}>
          THE
        </text>
        <text x={MIG_CX} y={MIG_CY + 8} textAnchor="middle" fontSize="10" fontWeight="800" fill={FOREST} style={{ fontFamily: "var(--font-display)" }}>
          MIGRATION
        </text>
        {/* Orbiting herd marker */}
        <motion.g
          initial={false}
          animate={reduced ? { x: MIG_XS[0], y: MIG_YS[0] } : { x: MIG_XS, y: MIG_YS }}
          transition={reduced ? { duration: 0 } : { duration: 22, ease: "linear", repeat: Infinity }}
        >
          <circle r="7" fill={GOLD} opacity="0.25" />
          <circle r="3.5" fill={GOLD} />
        </motion.g>
      </svg>
    </Frame>
  );
}

/* ── 7. A day on safari ───────────────────────────────────────────────── */
const SAFARI_DAY = [
  { t: "05:30", place: "Wake to coffee at camp", tag: "before dawn" },
  { t: "06:00", place: "Morning game drive — predators on the move", tag: "best light" },
  { t: "10:00", place: "Brunch back at camp", tag: "" },
  { t: "Midday", place: "Rest through the heat as the bush goes quiet", tag: "siesta" },
  { t: "16:00", place: "Afternoon drive into golden light", tag: "best light" },
  { t: "18:30", place: "Sundowner as the sky turns", tag: "" },
  { t: "Evening", place: "Dinner under an enormous sky", tag: "stars" },
];
function SafariDay({ reduced }: { reduced: boolean }) {
  return (
    <Frame
      eyebrow="The rhythm of a safari day"
      caption="Game drives are built around dawn and dusk, when animals are most active and the light is best. The hot middle of the day is for resting — yours and theirs."
    >
      <ol className="relative ml-1">
        {SAFARI_DAY.map((s, i) => (
          <motion.li
            key={i}
            className="relative flex gap-4 pb-5 last:pb-0"
            initial={reduced ? false : { opacity: 0, x: -16 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            {i < SAFARI_DAY.length - 1 && (
              <span className="absolute left-[5px] top-3 bottom-0 w-px" style={{ background: GOLD, opacity: 0.3 }} />
            )}
            <span
              className="relative z-10 mt-1 flex-shrink-0 w-[11px] h-[11px] rounded-full"
              style={{ background: i === 1 || i === 4 ? GOLD : FOREST }}
            />
            <div className="flex-1 flex items-baseline justify-between gap-3">
              <span className="text-sm" style={{ color: INK }}>
                <span className="font-semibold" style={{ color: GOLD }}>{s.t}</span>
                {" — "}
                {s.place}
              </span>
              {s.tag && (
                <span className="text-xs whitespace-nowrap" style={{ color: INK }}>
                  {s.tag}
                </span>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </Frame>
  );
}

/* ── 8. Zanzibar orientation map ──────────────────────────────────────── */
// Stylised leaf-shape of Unguja (the main island), north at the top.
const ZNZ_ISLAND =
  "M 96 14 C 70 30 58 60 56 96 C 54 132 60 170 78 200 C 88 216 104 222 112 208 C 130 178 142 140 142 104 C 142 70 132 38 112 18 C 106 12 100 11 96 14 Z";
const ZNZ_SPOTS = [
  { x: 92, y: 26, anchor: "middle", dy: -8, l1: "Nungwi & Kendwa", l2: "best beaches · north" },
  { x: 138, y: 58, anchor: "start", dy: 3, l1: "Mnemba Atoll", l2: "snorkelling" },
  { x: 56, y: 110, anchor: "end", dy: 3, l1: "Stone Town", l2: "history · ferries" },
  { x: 142, y: 150, anchor: "start", dy: 3, l1: "Paje & Jambiani", l2: "kitesurf · lagoon" },
  { x: 104, y: 178, anchor: "middle", dy: 16, l1: "Jozani Forest", l2: "red colobus" },
] as const;
function ZanzibarMap({ reduced }: { reduced: boolean }) {
  return (
    <Frame
      eyebrow="Getting your bearings on Zanzibar"
      caption="Zanzibar's main island packs a lot into a short drive: powder-white beaches in the north, a kitesurfing lagoon coast in the east, historic Stone Town on the west, and reefs and forest in between. Where you base yourself shapes your whole trip."
    >
      <svg viewBox="0 0 220 232" className="w-full h-auto max-w-sm mx-auto" role="img" aria-label="Map of Zanzibar's main island with key beaches and highlights">
        {/* sea */}
        <rect x="0" y="0" width="220" height="232" rx="14" fill="#dfeaf0" />
        {/* island */}
        <motion.path
          d={ZNZ_ISLAND}
          fill="#cdb89a"
          stroke={FOREST}
          strokeWidth="1.5"
          initial={reduced ? false : { opacity: 0, scale: 0.92 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "100px 116px" }}
        />
        {/* spots */}
        {ZNZ_SPOTS.map((s, i) => (
          <motion.g
            key={s.l1}
            initial={reduced ? false : { opacity: 0, scale: 0.5 }}
            whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.14, type: "spring", stiffness: 220, damping: 16 }}
          >
            <circle cx={s.x} cy={s.y} r="3.5" fill={GOLD} stroke="#fff" strokeWidth="1.2" />
            <text x={s.x} y={s.y + s.dy} textAnchor={s.anchor} fontSize="9" fontWeight="700" fill={INK}>
              {s.l1}
            </text>
            <text x={s.x} y={s.y + s.dy + 10} textAnchor={s.anchor} fontSize="8" fill={INK} fillOpacity="0.55">
              {s.l2}
            </text>
          </motion.g>
        ))}
        {/* compass N */}
        <text x="200" y="22" textAnchor="middle" fontSize="10" fontWeight="800" fill={FOREST}>N</text>
        <path d="M 200 26 L 200 36" stroke={FOREST} strokeWidth="1.5" markerEnd="" />
      </svg>
    </Frame>
  );
}

export default function GuideDiagram({ kind }: { kind: DiagramKind }) {
  const reduced = useReducedMotion() ?? false;
  switch (kind) {
    case "acclimatization":
      return <Acclimatization reduced={reduced} />;
    case "climate-zones":
      return <ClimateZones reduced={reduced} />;
    case "route-profiles":
      return <RouteProfiles reduced={reduced} />;
    case "days-vs-success":
      return <DaysVsSuccess reduced={reduced} />;
    case "summit-night":
      return <SummitNight reduced={reduced} />;
    case "migration-map":
      return <MigrationMap reduced={reduced} />;
    case "safari-day":
      return <SafariDay reduced={reduced} />;
    case "zanzibar-map":
      return <ZanzibarMap reduced={reduced} />;
    default:
      return null;
  }
}
