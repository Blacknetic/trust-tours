import type { MetadataRoute } from "next";
import { packages, packagePath } from "@/data/packages";
import { guides } from "@/data/guides";
import { upcomingDepartures } from "@/data/departures";

const BASE = "https://www.trusttourstz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/kilimanjaro`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/kilimanjaro/groups`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
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
    { url: `${BASE}/cancellation-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const packageRoutes: MetadataRoute.Sitemap = packages.map((pkg) => ({
    url: `${BASE}${packagePath(pkg)}`,
    lastModified: now,
    changeFrequency: "monthly",
    // Fully-priced products rank above "coming soon" stubs (priceFromUSD 0).
    priority: pkg.priceFromUSD > 0 ? 0.8 : 0.4,
  }));

  const guideRoutes: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE}/guides/${g.slug}`,
    // Real content date is a stronger freshness signal than build time.
    lastModified: new Date(g.updated),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const departureRoutes: MetadataRoute.Sitemap = upcomingDepartures().map((d) => ({
    url: `${BASE}/kilimanjaro/groups/${d.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...packageRoutes, ...guideRoutes, ...departureRoutes];
}
