import Link from "next/link";
import Image from "next/image";
import type { TripPackage } from "@/data/packages";
import { packageImage } from "@/data/images";

const BASE_PATH: Record<TripPackage["category"], string> = {
  kilimanjaro: "/kilimanjaro",
  safari: "/safaris",
  trekking: "/trekking",
  zanzibar: "/zanzibar",
  cultural: "/cultural",
  paramotoring: "/paramotoring",
};

// Brand-token gradients per category — used as a fallback when a package has
// no real photo yet (pkg.heroImage === ""), and as the tint behind every image.
// Brown-only brand gradients (no green/gold/orange — strictly brown & white).
const PLACEHOLDER: Record<TripPackage["category"], string> = {
  kilimanjaro: "linear-gradient(150deg, #6e3b1f 0%, #4a2912 45%, #2a1f0e 100%)",
  safari: "linear-gradient(150deg, #a5732a 0%, #6e3b1f 45%, #2a1f0e 100%)",
  trekking: "linear-gradient(150deg, #4a2912 0%, #2a1f0e 55%, #1a1206 100%)",
  zanzibar: "linear-gradient(150deg, #6e3b1f 0%, #a5732a 60%, #4a2912 100%)",
  cultural: "linear-gradient(150deg, #8a5a2b 0%, #4a2912 55%, #2a1f0e 100%)",
  paramotoring: "linear-gradient(150deg, #a5732a 0%, #6e3b1f 50%, #2a1f0e 100%)",
};

const CATEGORY_LABEL: Record<TripPackage["category"], string> = {
  kilimanjaro: "Kilimanjaro",
  safari: "Safari",
  trekking: "Trekking",
  zanzibar: "Safari + Beach",
  cultural: "Cultural",
  paramotoring: "Paramotoring",
};

function MountainRating({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-12 flex-shrink-0" style={{ color: "var(--ink)", opacity: 0.5 }}>
        {label}
      </span>
      <span aria-label={`${label}: ${value} out of 5`} className="leading-none tracking-tight">
        {[1, 2, 3, 4, 5].map((n) => (
          <span
            key={n}
            aria-hidden="true"
            style={{ color: n <= value ? "var(--gold)" : "rgba(26, 26, 22,0.16)" }}
          >
            ▲
          </span>
        ))}
      </span>
    </div>
  );
}

export default function PackageCard({ pkg }: { pkg: TripPackage }) {
  const href = `${BASE_PATH[pkg.category]}/${pkg.slug}`;
  const img = packageImage(pkg);

  return (
    <Link
      href={href}
      className="card-lift group flex flex-col h-full rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgb(26 26 22 / 0.08)", background: "#fff" }}
    >
      {/* Image area — real photo when available, brand gradient otherwise */}
      <div
        className="relative aspect-[4/3] flex items-end p-4 overflow-hidden"
        style={{ background: PLACEHOLDER[pkg.category] }}
      >
        {img && (
          <Image
            src={img}
            alt={pkg.shortName}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span
          className="relative z-10 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: "rgba(255,255,255,0.92)", color: "var(--forest)" }}
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

        {pkg.effort != null && pkg.summitChance != null && (
          <div className="flex flex-col gap-1.5 mb-4">
            <MountainRating label="Effort" value={pkg.effort} />
            <MountainRating label="Summit" value={pkg.summitChance} />
          </div>
        )}

        <div
          className="flex items-end justify-between gap-3 pt-4"
          style={{ borderTop: "1px solid rgba(26, 26, 22,0.08)" }}
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
