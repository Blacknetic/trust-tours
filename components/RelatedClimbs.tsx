import Link from "next/link";
import type { TripPackage } from "@/data/packages";
import { byCategory, packagePath } from "@/data/packages";
import { routeKey } from "@/data/kilimanjaro/links";
import { lowestPrice } from "@/lib/pricing";
import PackageCard from "@/components/PackageCard";

const usd = (n: number) => `$${n.toLocaleString()}`;
const cell = "px-3 py-3 text-left align-middle whitespace-nowrap";

/**
 * Bottom-of-page links on a climb: the same route at other lengths as cards,
 * then every Kilimanjaro climb in one comparison table.
 */
export default function RelatedClimbs({ pkg, border }: { pkg: TripPackage; border: string }) {
  const climbs = byCategory("kilimanjaro").sort((a, b) => a.days - b.days || a.priceFromUSD - b.priceFromUSD);
  const siblings = climbs.filter((c) => c.slug !== pkg.slug && routeKey(c.slug) === routeKey(pkg.slug));

  return (
    <section id="compare" className="py-10 border-b scroll-mt-24" style={{ borderColor: border }}>
      {siblings.length > 0 && (
        <div className="mb-12">
          <h2
            className="text-2xl md:text-3xl font-extrabold mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            The same route, another length
          </h2>
          <p className="text-base mb-6" style={{ color: "var(--ink)" }}>
            More days on the mountain mean more time to acclimatise and a better chance of reaching the
            summit; fewer days suit fit climbers with less time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {siblings.map((s) => (
              <PackageCard key={s.slug} pkg={s} />
            ))}
          </div>
        </div>
      )}

      <h2
        className="text-2xl md:text-3xl font-extrabold mb-2"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        Compare every Kilimanjaro climb
      </h2>
      <p className="text-base mb-5" style={{ color: "var(--ink)" }}>
        Prices per person in US dollars. Open any climb for its full itinerary and price table, or see{" "}
        <Link href="/kilimanjaro" className="underline underline-offset-2" style={{ color: "var(--forest)" }}>
          all routes side by side
        </Link>
        .
      </p>
      <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
        <table className="w-full border-collapse text-sm md:text-base min-w-[34rem]">
          <thead>
            <tr style={{ borderBottom: "2px solid rgba(26,26,22,0.15)", color: "var(--ink)" }}>
              <th className={cell}>Climb</th>
              <th className={cell}>On the mountain</th>
              <th className={cell}>Difficulty</th>
              <th className={`${cell} text-right`}>1 person</th>
              <th className={`${cell} text-right`}>Groups from</th>
            </tr>
          </thead>
          <tbody>
            {climbs.map((c) => {
              const here = c.slug === pkg.slug;
              return (
                <tr
                  key={c.slug}
                  style={{
                    borderBottom: "1px solid rgba(26,26,22,0.08)",
                    background: here ? "var(--snow)" : undefined,
                    color: "var(--ink)",
                  }}
                >
                  <td className={`${cell} font-semibold`}>
                    {here ? (
                      <span>
                        {c.shortName}{" "}
                        <span className="text-xs font-normal" style={{ color: "var(--gold)" }}>
                          (this climb)
                        </span>
                      </span>
                    ) : (
                      <Link href={packagePath(c)} className="underline underline-offset-2 hover:opacity-80" style={{ color: "var(--forest)" }}>
                        {c.shortName}
                      </Link>
                    )}
                  </td>
                  <td className={cell}>{c.days} days</td>
                  <td className={cell}>{c.difficulty ?? "—"}</td>
                  <td className={`${cell} text-right tabular-nums font-semibold`}>{usd(c.priceFromUSD)}</td>
                  <td className={`${cell} text-right tabular-nums`}>
                    {c.groupPricing ? usd(lowestPrice(c.groupPricing)) : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
