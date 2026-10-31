import type { ItineraryDay } from "@/data/packages";
import { ContentFigure, RichList } from "@/components/LongForm";

interface Props {
  itinerary: ItineraryDay[];
}

const W = 1000;
const H = 250;
const PAD_X = 46;
const TOP = 46;
const BOTTOM = 44;

// The profile plots each day's highest point, so the summit and climb-high
// days (Lava Tower) show as peaks even though you sleep lower.
const peakOf = (d: ItineraryDay) => d.altitudeMax ?? d.altitudeEnd!;

// "10–11" → 10.5, so ranges still add up to a sensible route total.
function km(d: number | string | undefined): number {
  if (d == null) return 0;
  if (typeof d === "number") return d;
  const nums = d.match(/\d+(\.\d+)?/g)?.map(Number) ?? [];
  return nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
}

const paragraphs = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

function RouteProfile({ itinerary }: Props) {
  const days = itinerary.filter((d) => d.altitudeEnd != null);
  if (days.length < 2) return null;

  const peaks = days.map(peakOf);
  const lows = days.map((d) => d.altitudeStart ?? d.altitudeEnd!);
  const minAlt = Math.min(...peaks, ...lows);
  const maxAlt = Math.max(...peaks);
  const range = maxAlt - minAlt || 1;
  const x = (i: number) => PAD_X + (i / (days.length - 1)) * (W - PAD_X * 2);
  const y = (alt: number) => TOP + (1 - (alt - minAlt) / range) * (H - TOP - BOTTOM);

  const pts = days.map((d, i) => ({ x: x(i), y: y(peakOf(d)), d }));
  let line = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const p = pts[i - 1];
    const c = pts[i];
    const mid = (p.x + c.x) / 2;
    line += ` C ${mid} ${p.y} ${mid} ${c.y} ${c.x} ${c.y}`;
  }
  const area = `${line} L ${pts[pts.length - 1].x} ${H - BOTTOM} L ${pts[0].x} ${H - BOTTOM} Z`;
  const totalKm = Math.round(itinerary.reduce((s, d) => s + km(d.distanceKm), 0));

  return (
    <div className="rounded-2xl p-5 md:p-6 mb-10" style={{ background: "var(--ink)" }}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
        <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
          Route profile
        </p>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>
          {days.length} days on the mountain · highest point {maxAlt.toLocaleString()} m
          {totalKm > 0 ? ` · about ${totalKm} km` : ""}
        </p>
      </div>
      <p className="text-xs mb-2 sm:hidden" style={{ color: "rgba(255,255,255,0.7)" }}>
        Swipe sideways to see every day →
      </p>
      <div className="overflow-x-auto -mx-2 px-2">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto min-w-[640px]"
          role="img"
          aria-label={`Elevation profile: ${days.map((d) => `day ${d.day} ${peakOf(d)} metres`).join(", ")}`}
        >
          <defs>
            <linearGradient id="profileFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1={PAD_X} x2={W - PAD_X} y1={H - BOTTOM} y2={H - BOTTOM} stroke="rgba(255,255,255,0.15)" />
          <path d={area} fill="url(#profileFill)" />
          <path d={line} fill="none" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
          {pts.map(({ x: px, y: py, d }) => {
            const summit = peakOf(d) === maxAlt;
            return (
              <g key={d.day}>
                <circle cx={px} cy={py} r={summit ? 7 : 5} fill={summit ? "var(--paper)" : "var(--gold)"} />
                <text
                  x={px}
                  y={py - 14}
                  textAnchor="middle"
                  fontSize="17"
                  fontWeight={summit ? 700 : 500}
                  fill="var(--paper)"
                >
                  {peakOf(d).toLocaleString()} m
                </text>
                <text x={px} y={H - BOTTOM + 26} textAnchor="middle" fontSize="16" fill="rgba(255,255,255,0.75)">
                  Day {d.day}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function Chip({ children, strong }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${strong ? "font-semibold" : ""}`}
      style={{ background: "var(--snow)", color: strong ? "var(--forest)" : "var(--ink)" }}
    >
      {children}
    </span>
  );
}

export default function ElevationJourney({ itinerary }: Props) {
  if (itinerary.length === 0) {
    return (
      <p className="text-base py-8 italic" style={{ color: "var(--ink)" }}>
        Full day-by-day itinerary coming soon. Contact us on WhatsApp for the complete plan.
      </p>
    );
  }

  return (
    <div>
      <RouteProfile itinerary={itinerary} />

      <ol className="relative">
        {itinerary.map((day, idx) => (
          <li key={day.day} className="relative flex gap-4 md:gap-6 pb-12 last:pb-0">
            {idx < itinerary.length - 1 && (
              <div
                className="absolute left-5 top-11 bottom-0 w-px"
                style={{ background: "var(--gold)", opacity: 0.3 }}
                aria-hidden="true"
              />
            )}
            <div
              className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base font-bold"
              style={{ background: "var(--forest)", color: "var(--paper)" }}
            >
              {day.day}
            </div>

            <div className="flex-1 min-w-0 pt-1">
              <p className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--gold)" }}>
                Day {day.day}
              </p>
              <h3
                className="font-bold text-xl md:text-2xl mb-4 leading-snug"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
              >
                {day.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-5">
                {day.altitudeEnd != null && (
                  <Chip strong>
                    {day.altitudeStart != null && day.altitudeStart !== day.altitudeEnd
                      ? `${day.altitudeStart.toLocaleString()} m → ${day.altitudeEnd.toLocaleString()} m`
                      : `${day.altitudeEnd.toLocaleString()} m`}
                  </Chip>
                )}
                {day.altitudeMax != null && <Chip>Highest point {day.altitudeMax.toLocaleString()} m</Chip>}
                {day.distanceKm != null && <Chip>{day.distanceKm} km</Chip>}
                {day.hours && <Chip>{day.hours}</Chip>}
              </div>

              {day.image && <ContentFigure image={day.image} className="mb-5" />}

              {paragraphs(day.description).map((p, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
                  {p}
                </p>
              ))}

              {day.experience && (
                <p className="text-base md:text-lg leading-relaxed mb-4 italic" style={{ color: "var(--forest)" }}>
                  {day.experience}
                </p>
              )}

              {day.notes?.map((n, i) => (
                <div
                  key={i}
                  className="rounded-xl px-4 py-3 mb-4 text-base leading-relaxed"
                  style={{ background: "var(--snow)", borderLeft: "4px solid var(--sunset)", color: "var(--ink)" }}
                >
                  {n}
                </div>
              ))}

              <dl
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-base mb-2"
                style={{ color: "var(--ink)" }}
              >
                {day.accommodation && day.accommodation !== "—" && (
                  <div className="flex gap-1.5">
                    <dt className="font-semibold">Overnight:</dt>
                    <dd>
                      {day.stayId ? (
                        <a href={`#stay-${day.stayId}`} className="underline underline-offset-2" style={{ color: "var(--forest)" }}>
                          {day.accommodation}
                        </a>
                      ) : (
                        day.accommodation
                      )}
                    </dd>
                  </div>
                )}
                {day.meals && (
                  <div className="flex gap-1.5">
                    <dt className="font-semibold">Meals:</dt>
                    <dd>{day.meals}</dd>
                  </div>
                )}
              </dl>

              {(day.dayIncluded?.length || day.dayExcluded?.length) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 rounded-xl p-4" style={{ background: "var(--snow)" }}>
                  {day.dayIncluded && day.dayIncluded.length > 0 && (
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: "var(--forest)" }}>
                        Included today
                      </p>
                      <RichList items={day.dayIncluded} mark="✓" color="var(--forest)" size="sm" />
                    </div>
                  )}
                  {day.dayExcluded && day.dayExcluded.length > 0 && (
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: "var(--sunset)" }}>
                        Not included today
                      </p>
                      <RichList items={day.dayExcluded} mark="✕" color="var(--sunset)" size="sm" />
                    </div>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
