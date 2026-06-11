import Link from "next/link";
import type { TripPackage } from "@/data/packages";

const BASE_PATH: Record<TripPackage["category"], string> = {
  kilimanjaro: "/kilimanjaro",
  safari: "/safaris",
  trekking: "/trekking",
  zanzibar: "/safaris",
};

// Brand-token gradients per category until real photos arrive.
// TODO: replace with next/image using pkg.heroImage once photos are in public/images/.
const PLACEHOLDER: Record<TripPackage["category"], string> = {
  kilimanjaro: "linear-gradient(150deg, #3a5a45 0%, #2E4B3C 45%, #1C2419 100%)",
  safari: "linear-gradient(150deg, #C99B3F 0%, #a5732a 45%, #2a1f0e 100%)",
  trekking: "linear-gradient(150deg, #2E4B3C 0%, #1C2419 55%, #2a1f0e 100%)",
  zanzibar: "linear-gradient(150deg, #2E4B3C 0%, #C99B3F 60%, #D96E30 100%)",
};

const CATEGORY_LABEL: Record<TripPackage["category"], string> = {
  kilimanjaro: "Kilimanjaro",
  safari: "Safari",
  trekking: "Trekking",
  zanzibar: "Safari + Beach",
};

export default function PackageCard({ pkg }: { pkg: TripPackage }) {
  const href = `${BASE_PATH[pkg.category]}/${pkg.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-xl"
      style={{ border: "1px solid rgb(28 36 25 / 0.08)", background: "#fff" }}
    >
      {/* Image area — placeholder gradient until photos arrive */}
      <div
        className="relative aspect-[4/3] flex items-end p-4"
        style={{ background: PLACEHOLDER[pkg.category] }}
      >
        <span
          className="px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: "rgba(251,248,241,0.92)", color: "var(--forest)" }}
        >
          {pkg.days} days · {CATEGORY_LABEL[pkg.category]}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="text-lg font-extrabold mb-2 leading-snug"
          style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
        >
          {pkg.shortName}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{
            color: "var(--ink)",
            opacity: 0.65,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {pkg.summary}
        </p>

        <div
          className="flex items-end justify-between gap-3 pt-4"
          style={{ borderTop: "1px solid rgba(28,36,25,0.08)" }}
        >
          <div>
            {pkg.priceFromUSD > 0 ? (
              <>
                <p className="text-xs leading-none mb-1" style={{ color: "var(--ink)", opacity: 0.45 }}>
                  From
                </p>
                <p
                  className="text-xl font-extrabold leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--sunset)" }}
                >
                  ${pkg.priceFromUSD.toLocaleString()}
                  <span
                    className="text-xs font-normal ml-1"
                    style={{ color: "var(--ink)", opacity: 0.45 }}
                  >
                    /person
                  </span>
                </p>
              </>
            ) : (
              <p className="text-sm font-medium" style={{ color: "var(--ink)", opacity: 0.55 }}>
                Price on request
              </p>
            )}
          </div>
          <span
            className="text-sm font-semibold whitespace-nowrap transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: "var(--forest)" }}
          >
            View itinerary →
          </span>
        </div>
      </div>
    </Link>
  );
}
