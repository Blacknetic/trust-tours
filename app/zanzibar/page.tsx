import type { Metadata } from "next";
import { byCategory } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";
import GuideStrip from "@/components/GuideStrip";
import { guidesForCategory } from "@/data/guides";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";

// A small alternating gallery of the island — a wide whale-shark feature next to
// the dhow, pool and sandbar. Tiles vary in span/aspect so the grid stays lively.
const GALLERY: { src: string; alt: string; caption: string; ratio: string; span?: boolean }[] = [
  {
    src: "/images/zanzibar/whale-shark.jpg",
    alt: "A diver alongside a whale shark in the clear water off Zanzibar",
    caption: "Snorkel & dive Mnemba's reefs",
    ratio: "aspect-[16/9]",
    span: true,
  },
  {
    src: "/images/zanzibar/snorkeling.jpg",
    alt: "Aerial view of snorkellers over a turquoise coral reef",
    caption: "Crystal water over the coral",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/zanzibar/pool.jpg",
    alt: "A beachfront pool fringed with palms at a Zanzibar resort",
    caption: "Palm-fringed beach resorts",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/images/zanzibar/sandbar.jpg",
    alt: "A white sandbar curving through the turquoise shallows off Zanzibar",
    caption: "Sandbars in the shallows",
    ratio: "aspect-[4/3]",
  },
];

export const metadata: Metadata = {
  title: "Zanzibar Beach Holidays & Tours",
  alternates: { canonical: "/zanzibar" },
  description:
    "Zanzibar beach holidays with Trust Tours: Stone Town, spice farms, Mnemba snorkelling and the white sands of Nungwi, Paje and Kendwa — standalone or paired with a safari.",
};

export default function ZanzibarListingPage() {
  const escapes = byCategory("zanzibar");

  return (
    <>
      {/* ── Page header — turquoise dhow hero ─────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--forest)" }}>
        <div className="hero-ken-burns absolute inset-0">
          <Photo
            src="/images/zanzibar/hero.jpg"
            alt="Traditional dhow sailing off a turquoise Zanzibar beach"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(150deg, rgba(20,40,38,0.82) 0%, rgba(20,40,38,0.5) 50%, rgba(13,30,28,0.8) 100%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--gold)" }}
          >
            Stone Town · Spice Island · Indian Ocean
          </p>
          <h1
            className="text-4xl md:text-6xl font-extrabold mb-5"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--paper)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Zanzibar Beach Escapes
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(255,255,255,0.95)", maxWidth: "60ch" }}
          >
            White sand, turquoise water and the history of the Spice Island —
            UNESCO-listed Stone Town, spice farms, Mnemba&apos;s coral reefs and the
            beaches of Nungwi, Paje and Kendwa. Perfect on its own or as the
            beach finish to a Tanzania safari or Kilimanjaro climb.
          </p>
        </div>
      </section>

      {/* ── Zanzibar cards ────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {escapes.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* ── Island gallery — alternating tiles ────────────────── */}
      <section style={{ background: "var(--paper)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
          <Reveal className="max-w-2xl mb-10 md:mb-12">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--gold)" }}
            >
              The Spice Island
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.1 }}
            >
              Turquoise water, white sand and the reefs of Mnemba
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {GALLERY.map((tile, i) => (
              <Reveal
                key={tile.src}
                delay={(i % 3) * 90}
                className={tile.span ? "col-span-2" : ""}
              >
                <figure
                  className={`card-lift photo-zoom group relative overflow-hidden rounded-xl md:rounded-2xl ${tile.ratio}`}
                >
                  <div className="wipe absolute inset-0">
                    <Photo
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      loading="lazy"
                      quality={72}
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-white text-xs md:text-sm font-medium translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(26,26,22,0.82) 0%, rgba(26,26,22,0) 100%)",
                    }}
                  >
                    {tile.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GuideStrip
        guides={guidesForCategory("zanzibar")}
        title="Read before you go"
        subtitle="Beaches, Stone Town and the best time to visit — the island, explained."
        className="pb-16 md:pb-24"
      />

      <CTABand
        eyebrow="Safari + beach welcome"
        title="Add Zanzibar to your Tanzania trip"
        subtitle="Finish a safari or Kilimanjaro climb on the beach — tell us your dates and we'll arrange the flights and book it as one trip."
        tripType="zanzibar"
      />
    </>
  );
}
