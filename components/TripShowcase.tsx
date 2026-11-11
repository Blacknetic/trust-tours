import Link from "next/link";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import TripCarousel from "@/components/TripCarousel";
import { packagePath, type TripPackage } from "@/data/packages";
import { packageImage } from "@/data/images";

interface TripShowcaseProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  // Word after the day count on each card, e.g. "7 days climb".
  tripNoun: string;
  href: string;
  ctaLabel: string;
  trips: TripPackage[];
  background: string;
}

// Full-bleed photo card: title over the top of the photo, price + a
// "View trip" pill over the bottom. The whole card is the link.
function PhotoTripCard({ pkg, tripNoun }: { pkg: TripPackage; tripNoun: string }) {
  const img = packageImage(pkg);
  return (
    <Link
      href={packagePath(pkg)}
      className="group relative flex flex-col justify-between snap-start shrink-0 w-[78vw] max-w-[300px] sm:w-[280px] aspect-[5/7] rounded-2xl overflow-hidden p-5 shadow-md hover:shadow-xl transition-shadow duration-300"
      style={{ background: "var(--forest)" }}
    >
      {img && (
        <Photo
          src={img}
          alt=""
          fill
          sizes="300px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      {/* Darken top and bottom so the white text always reads */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.15) 32%, rgba(10,10,10,0.1) 58%, rgba(16,10,5,0.85) 100%)",
        }}
      />

      <div className="relative">
        <h3
          className="text-xl font-semibold leading-snug"
          style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}
        >
          {pkg.shortName}
        </h3>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.9)" }}>
          {pkg.days} {pkg.days === 1 ? "day" : "days"} {tripNoun}
        </p>
      </div>

      <div className="relative flex items-end justify-between gap-3">
        {pkg.priceFromUSD > 0 ? (
          <div style={{ color: "var(--paper)" }}>
            <p className="text-xs font-semibold">Starts from</p>
            <p className="text-2xl font-semibold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              ${pkg.priceFromUSD.toLocaleString("en-US")}
            </p>
            <p className="text-xs">per person</p>
          </div>
        ) : (
          <p className="text-sm font-semibold" style={{ color: "var(--paper)" }}>
            Price on request
          </p>
        )}
        <span
          className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 group-hover:bg-white group-hover:text-[var(--ink)]"
          style={{ borderColor: "rgba(255,255,255,0.85)", color: "var(--paper)" }}
        >
          View trip
        </span>
      </div>
    </Link>
  );
}

/**
 * Homepage trip section: centred heading, a swipeable row of photo cards and
 * a "view all" button. Used once for Kilimanjaro and once for safaris.
 */
export default function TripShowcase({
  id,
  eyebrow,
  title,
  subtitle,
  tripNoun,
  href,
  ctaLabel,
  trips,
  background,
}: TripShowcaseProps) {
  return (
    <section id={id} className="scroll-mt-20" style={{ background }}>
      <div className="max-w-[1680px] mx-auto px-4 md:px-8 py-14 md:py-20">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <p
            className="text-sm font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            {eyebrow}
          </p>
          <h2
            className="text-3xl md:text-5xl font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.08 }}
          >
            {title}
          </h2>
          <span
            className="block w-16 h-0.5 mx-auto my-5 rounded-full"
            style={{ background: "var(--gold)" }}
            aria-hidden="true"
          />
          {subtitle && (
            <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>
              {subtitle}
            </p>
          )}
        </Reveal>

        <TripCarousel label={title}>
          {trips.map((pkg) => (
            <PhotoTripCard key={pkg.slug} pkg={pkg} tripNoun={tripNoun} />
          ))}
        </TripCarousel>

        <div className="mt-10 flex justify-center">
          <Link
            href={href}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:gap-5"
            style={{ background: "var(--forest)", color: "var(--paper)" }}
          >
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
