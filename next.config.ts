import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve modern formats and cache optimized images longer. Combined with the
  // one-off compression pass (_source/optimize-images.mjs), this keeps payloads small.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
  },
  async redirects() {
    return [
      // Kilimanjaro-specific old booking pages (exact match rules first)
      {
        source:
          "/booking/:slug(.*kilimanjaro.*|.*machame.*|.*lemosho.*|.*marangu.*|.*rongai.*|.*umbwe.*|.*northern-circuit.*)",
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
      { source: "/booking/9-day-wildlife-and-culture-safari-in-tanzania", destination: "/safaris/9-day-northern-tanzania-safari", permanent: true },
      { source: "/booking/10-day-serengeti-great-migration-safari-itinerary-with-trust-tours-and-safaris-calving-season-focus-december-to-march", destination: "/safaris/10-day-serengeti-calving-safari", permanent: true },
      { source: "/booking/12-day-itinerary-customized-tracking-the-great-migration-crossing-with-trust-tours-and-safaris", destination: "/safaris/12-day-kilimanjaro-safari-culture", permanent: true },
      { source: "/booking/11-day-adventure-is-perfect-a-perfect-combination-for-an-unforgettable-adventure-with-trust-tours-and-safaris-stay-at-5-star-or-4-star-hotels-and-lodges", destination: "/safaris/10-day-safari-zanzibar-adventure", permanent: true },
      { source: "/booking/7-days-in-paradise-with-trust-tours-and-safaris-company-your-ultimate-honeymoon-haven", destination: "/safaris/7-day-ultimate-honeymoon", permanent: true },
      { source: "/booking/tanzania-honeymoon-safari-tracking-the-great-migration", destination: "/safaris/10-day-honeymoon-migration", permanent: true },
      { source: "/booking/20-day-tanzania-zanzibar-honeymoon-safari-adventure", destination: "/safaris/20-day-honeymoon-tanzania-zanzibar", permanent: true },
      { source: "/booking/7-day-safari-adventure-marangu-route-hike-northern-circuit-safari-maasai-cultural-experience-northern-circuit", destination: "/safaris/7-day-kilimanjaro-hike-safari", permanent: true },
      { source: "/booking/cultural-tours", destination: "/cultural", permanent: true },
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
