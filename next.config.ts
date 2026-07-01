import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve modern formats and cache optimized images longer. Combined with the
  // one-off compression pass (_source/optimize-images.mjs), this keeps payloads small.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2678400, // 31 days
    // Our widest image is a 100vw hero; nothing needs the 2048/3840 variants
    // Next generates by default. Trimming the ladder means fewer (and faster)
    // on-demand transforms and a smaller optimizer cache.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Allowed `quality` values — gallery tiles ship at 70, everything else 75.
    qualities: [70, 75],
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

      // ─── Legacy /tours/* custom-post-type. WordPress served every trip under
      // both /booking/… and /tours/…; the /tours sitemap was never harvested, so
      // none of it was redirected and every /tours/* URL currently 404s.
      //
      // Exact 1:1 upgrades for the high-value Kilimanjaro route pages so they land
      // on the precise detail page instead of the /kilimanjaro listing. Old slugs
      // used the plural "N-days-<route>" form; any slug we guess wrong simply falls
      // through to the keyword catch-all below (→ /kilimanjaro), so these are pure
      // upside with no risk. Confirmed-from-index slugs plus likely plural variants.
      { source: "/tours/9-days-northern-circuit", destination: "/kilimanjaro/9-day-northern-circuit", permanent: true },
      { source: "/tours/8-days-lemosho-route", destination: "/kilimanjaro/8-day-lemosho-route", permanent: true },
      { source: "/tours/7-days-machame-route", destination: "/kilimanjaro/7-day-machame-route", permanent: true },
      { source: "/tours/6-days-machame-route", destination: "/kilimanjaro/7-day-machame-route", permanent: true },
      { source: "/tours/6-days-marangu-route", destination: "/kilimanjaro/6-day-marangu-route", permanent: true },
      { source: "/tours/5-days-marangu-route", destination: "/kilimanjaro/6-day-marangu-route", permanent: true },
      { source: "/tours/6-days-umbwe-route", destination: "/kilimanjaro/6-day-umbwe-route", permanent: true },
      { source: "/tours/6-days-rongai-route", destination: "/kilimanjaro/6-day-rongai-route", permanent: true },
      //
      // Keyword catch-alls guarantee no /tours/* URL 404s even where we can't map
      // it precisely. Order matters — first match wins, so route most specific first.
      { source: "/tours/:slug(.*meru.*)", destination: "/trekking/3-day-mount-meru-momela", permanent: true },
      { source: "/tours/:slug(.*ol-doinyo.*|.*lengai.*)", destination: "/trekking/2-day-ol-doinyo-lengai-climb", permanent: true },
      { source: "/tours/:slug(.*paramotor.*|.*paraglid.*|.*flying.*)", destination: "/paramotoring", permanent: true },
      {
        source:
          "/tours/:slug(.*kilimanjaro.*|.*machame.*|.*lemosho.*|.*marangu.*|.*rongai.*|.*umbwe.*|.*northern-circuit.*)",
        destination: "/kilimanjaro",
        permanent: true,
      },
      { source: "/tours/:slug(.*honeymoon.*)", destination: "/honeymoon", permanent: true },
      { source: "/tours/:slug(.*zanzibar.*)", destination: "/zanzibar", permanent: true },
      { source: "/tours/:slug(.*cultural.*|.*maasai.*)", destination: "/cultural", permanent: true },
      // Everything else under /tours/* → best-match fallback (safaris listing).
      { source: "/tours/:slug*", destination: "/safaris", permanent: true },

      // Old category/taxonomy pages
      { source: "/kilimanjaro-mountain", destination: "/kilimanjaro", permanent: true },
      { source: "/tanzania-safaris", destination: "/safaris", permanent: true },
      { source: "/mount-meru-trekking", destination: "/trekking/3-day-mount-meru-momela", permanent: true },
      { source: "/destinations", destination: "/safaris", permanent: true },
      { source: "/ba_type/:slug*", destination: "/safaris", permanent: true },
      { source: "/accommodation", destination: "/safaris", permanent: true },
      // Bare WordPress taxonomy/page slugs still in Google's index (the /booking/
      // variants are handled above; these bare ones 404'd until now).
      { source: "/cultural-tours", destination: "/cultural", permanent: true },
      { source: "/trust-tours-and-safaris-company", destination: "/about", permanent: true },
      // Root-level legacy blog/itinerary posts (WP served some itineraries as
      // top-level posts). Scoped to EXACT slugs only — a root wildcard would
      // shadow real routes like /about or /contact. Add more here as GSC surfaces
      // them; best-match category per the redirect policy.
      { source: "/7-day-northern-tanzania-midrange-safari-itinerary", destination: "/safaris", permanent: true },
      { source: "/7-days-safaris-and-zanzibar-holiday", destination: "/safaris", permanent: true },
      // NOTE: /zanzibar is now a real listing page — no redirect (its old Google
      // authority now lands on the dedicated section).
    ];
  },
};

export default nextConfig;
