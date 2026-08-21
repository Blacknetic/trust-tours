import { PAX_COLUMNS, MAX_PAX } from "@/lib/pricing";

interface Row {
  label: string;
  prices: number[];
}

interface Props {
  /** Card heading, e.g. "7-DAY CLIMBING". */
  title: string;
  subtitle?: string;
  rows: Row[];
  note?: string;
}

const BORDER = "1px solid var(--sand)";

/**
 * Group-size price table: one column per party size, so a visitor can see the
 * per-person price fall as they add people. Rendered on the server — the
 * numbers are crawlable text, which is the point (they used to be buried in a
 * prose `priceNote`).
 *
 * On narrow screens the table scrolls sideways with the route label pinned
 * left, which keeps the left-to-right "watch it drop" reading intact; stacking
 * the rows would lose it.
 */
export default function PriceLadder({ title, subtitle, rows, note }: Props) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--paper)",
        border: BORDER,
        boxShadow: "0 18px 44px -30px rgba(10,10,10,0.45)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3.5 px-5 py-4 md:px-7 md:py-5"
        style={{ borderBottom: BORDER }}
      >
        <span
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: "var(--forest)" }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M3 19h18L14.5 6.5 11 13l-2-3L3 19Z"
              fill="var(--paper)"
            />
          </svg>
        </span>
        <div className="min-w-0">
          <h2
            className="text-base md:text-lg font-extrabold uppercase leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--ink)",
              letterSpacing: "0.01em",
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs mt-0.5" style={{ color: "var(--ink)", opacity: 0.6 }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">
            {title} — price per person by group size
          </caption>
          <thead>
            <tr style={{ borderBottom: BORDER }}>
              <th
                scope="col"
                className="sticky left-0 z-10 text-left font-medium px-5 md:px-7 py-3 min-w-[9.5rem] md:min-w-[12rem]"
                style={{ background: "var(--paper)" }}
              >
                <span className="sr-only">Route</span>
              </th>
              {PAX_COLUMNS.map((n) => (
                <th
                  key={n}
                  scope="col"
                  className="text-right font-medium px-3 py-3 whitespace-nowrap"
                  style={{ color: "var(--ink)", opacity: 0.6, fontSize: "var(--text-xs)" }}
                >
                  {n === MAX_PAX ? `${n}+` : n} pax
                </th>
              ))}
              {/* Trailing spacer so the last price is not flush to the edge. */}
              <th className="w-5 md:w-7" aria-hidden="true" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={row.label} style={r < rows.length - 1 ? { borderBottom: BORDER } : undefined}>
                <th
                  scope="row"
                  className="sticky left-0 z-10 text-left px-5 md:px-7 py-4"
                  style={{ background: "var(--paper)", borderRight: BORDER }}
                >
                  {/* inline-block keeps the underline as one rule when the
                      label wraps on narrow screens, rather than one per line. */}
                  <span
                    className="font-semibold inline-block"
                    style={{
                      color: "var(--ink)",
                      paddingBottom: "2px",
                      borderBottom: "2px solid var(--gold)",
                    }}
                  >
                    {row.label}
                  </span>
                </th>
                {row.prices.map((price, i) => (
                  <td
                    key={PAX_COLUMNS[i]}
                    className="text-right px-3 py-4 font-semibold tabular-nums whitespace-nowrap"
                    style={{ color: "var(--ink)" }}
                  >
                    ${price.toLocaleString()}
                  </td>
                ))}
                <td aria-hidden="true" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The rule lives on the wrapper, not the <p> — globals.css caps every
          paragraph at 65ch, which would clip a border drawn on the text itself. */}
      {note && (
        <div className="px-5 md:px-7 py-3.5" style={{ borderTop: BORDER }}>
          <p className="text-xs leading-relaxed" style={{ color: "var(--ink)", opacity: 0.7 }}>
            {note}
          </p>
        </div>
      )}
    </div>
  );
}
