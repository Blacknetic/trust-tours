import type { Metadata } from "next";
import type { TripPackage } from "@/data/packages";
import { CATEGORY_PATH } from "@/data/packages";

// Default title suffix per category — preserves the pre-Day-12 wording so the
// ~40 non-money pages keep their existing titles unchanged.
const CATEGORY_TITLE_LABEL: Record<TripPackage["category"], string> = {
  kilimanjaro: "Kilimanjaro Climb",
  safari: "Tanzania Safari",
  trekking: "Tanzania Trek",
  zanzibar: "Zanzibar Beach Holiday",
  cultural: "Tanzania Cultural Tour",
  paramotoring: "Tanzania Paramotoring",
};

// Single source of truth for a tour page's <title>/description/OG. Money pages
// (Day 12) set pkg.seoTitle / pkg.metaDescription; everything else falls back to
// the original shortName-based title and a summary excerpt.
export function packageMetadata(pkg: TripPackage): Metadata {
  const canonical = `/${CATEGORY_PATH[pkg.category]}/${pkg.slug}`;
  const description = pkg.metaDescription ?? pkg.summary.slice(0, 155);

  // A bespoke seoTitle is treated as absolute (no "| Trust Tours & Safaris"
  // template) so it always fits ≤60 chars with the price hook intact. Default
  // titles keep flowing through the root template.
  const title: Metadata["title"] = pkg.seoTitle
    ? { absolute: pkg.seoTitle }
    : `${pkg.shortName} – ${CATEGORY_TITLE_LABEL[pkg.category]}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: pkg.seoTitle ?? `${pkg.shortName} – ${CATEGORY_TITLE_LABEL[pkg.category]}`,
      description,
      type: "website",
      url: canonical,
    },
  };
}
