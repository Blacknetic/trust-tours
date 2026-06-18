import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Kilimanjaro-specific old booking pages (exact match rules first)
      {
        source:
          "/booking/:slug(.*kilimanjaro.*|.*machame.*|.*lemosho.*|.*marangu.*|.*rongai.*|.*northern-circuit.*)",
        destination: "/kilimanjaro",
        permanent: true,
      },
      // Old Mount Meru booking page → its new trek page (before the catch-all)
      { source: "/booking/3-days-mount-meru-climb-2", destination: "/trekking/3-day-mount-meru-momela", permanent: true },
      // Exact old-URL → new-page redirects (preserve page-level Google authority).
      // Sources harvested from the old WP sitemap; see _source/old-urls-to_book.txt.
      { source: "/booking/2-days-tarangire-and-ngorongoro-crater", destination: "/safaris/2-day-tarangire-ngorongoro", permanent: true },
      { source: "/booking/4-day-safari-itinerary-arusha-national-park-tarangire-lake-manyara-and-ngorongoro-crater", destination: "/safaris/4-day-arusha-tarangire-manyara-ngorongoro", permanent: true },
      { source: "/booking/4-day-private-safari-itinerary-tarangire-ngorongoro-crater-and-southern-serengeti-ndutu-area", destination: "/safaris/4-day-private-ndutu-calving-safari", permanent: true },
      { source: "/booking/5-day-mid-range-tarangire-ngorongoro-crater-and-ndutu-migration-safari", destination: "/safaris/5-day-ndutu-migration-safari", permanent: true },
      { source: "/booking/5-day-mid-range-tarangire-ngorongoro-crater-and-ndutu-migration-safari-december-april", destination: "/safaris/5-day-ndutu-migration-safari", permanent: true },
      { source: "/booking/6-day-safari-in-northern-tanzania-explore-tarangire-ngorongoro-crater-and-serengeti-a-year-round-adventure", destination: "/safaris/6-day-northern-safari", permanent: true },
      { source: "/booking/6-day-safari-in-northern-tanzania-explore-tarangire-ngorongoro-crater-and-serengeti-a-year-round-adventure-2", destination: "/safaris/6-day-northern-safari", permanent: true },
      { source: "/booking/8-day-7-night-mid-range-safari-tracking-the-great-migration-crossing-with-trust-tours-and-safaris", destination: "/safaris/8-day-great-migration-safari", permanent: true },
      { source: "/booking/9-day-adventure-is-perfect-a-perfect-combination-for-an-unforgettable-adventure-with-trust-tours-and-safaris", destination: "/safaris/9-day-beach-city-bush", permanent: true },
      // All other old booking/tour pages → safaris listing
      {
        source: "/booking/:slug*",
        destination: "/safaris",
        permanent: true,
      },
      // Old category/taxonomy pages
      { source: "/kilimanjaro-mountain", destination: "/kilimanjaro", permanent: true },
      { source: "/tanzania-safaris", destination: "/safaris", permanent: true },
      { source: "/mount-meru-trekking", destination: "/trekking/3-day-mount-meru-momela", permanent: true },
      { source: "/destinations", destination: "/safaris", permanent: true },
      { source: "/ba_type/:slug*", destination: "/safaris", permanent: true },
      { source: "/accommodation", destination: "/safaris", permanent: true },
      // NOTE: /zanzibar is now a real listing page — no redirect (its old Google
      // authority now lands on the dedicated section).
    ];
  },
};

export default nextConfig;
