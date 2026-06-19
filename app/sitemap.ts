import type { MetadataRoute } from "next";
import { packages, type TripPackage } from "@/data/packages";
import { guides } from "@/data/guides";

const BASE = "https://trusttourstz.com";

// Category → URL segment for package detail pages.
const categoryPath: Record<TripPackage["category"], string> = {
  kilimanjaro: "kilimanjaro",
  safari: "safaris",
  zanzibar: "zanzibar",
  trekking: "trekking",
  cultural: "cultural",
  paramotoring: "paramotoring",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/kilimanjaro`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/safaris`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/zanzibar`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/trekking`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/ol-doinyo-lengai`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/honeymoon`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/cultural`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/paramotoring`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  const packageRoutes: MetadataRoute.Sitemap = packages.map((pkg) => ({
    url: `${BASE}/${categoryPath[pkg.category]}/${pkg.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    // Fully-priced products rank above "coming soon" stubs (priceFromUSD 0).
    priority: pkg.priceFromUSD > 0 ? 0.8 : 0.4,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...packageRoutes, ...guideRoutes];
}
