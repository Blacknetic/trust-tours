import type { ComfortLevel } from "@/lib/pricing";

const usd = (n: number) => `$${n.toLocaleString()}`;

/** "Choose your comfort level": what each level costs and what it includes. */
export default function ComfortLevels({ levels, days }: { levels: ComfortLevel[]; days: number }) {
  return (
    <div>
      <h2
        className="text-2xl md:text-3xl font-extrabold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        Choose your comfort level
      </h2>
      <p className="text-base leading-relaxed mb-5" style={{ color: "var(--ink)" }}>
        The route stays the same at every level. What changes is where you sleep, how you
        travel and how much is arranged for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {levels.map((level) => (
          <article
            key={level.id}
            id={`level-${level.id}`}
            className="rounded-2xl p-5 scroll-mt-28"
            style={{ border: "1px solid rgba(74,41,18,0.15)", background: "#fff" }}
          >
            <h3
              className="text-lg font-extrabold mb-1"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              {level.label}
            </h3>
            <p className="text-xl font-extrabold tabular-nums" style={{ color: "var(--sunset)" }}>
              From {usd(level.perDay.min * days)}
              <span className="text-xs font-normal ml-1" style={{ color: "var(--ink)" }}>
                per person
              </span>
            </p>
            <p className="text-xs mt-1 mb-3" style={{ color: "var(--ink)", opacity: 0.75 }}>
              {usd(level.perDay.min)}–{usd(level.perDay.max)} per day ·{" "}
              {usd(level.perDay.min * days)}–{usd(level.perDay.max * days)} for {days} days
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--ink)" }}>
              {level.summary}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm" style={{ color: "var(--ink)" }}>
              {level.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
