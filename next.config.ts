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
      { source: "/zanzibar", destination: "/safaris/5-day-zanzibar-escape", permanent: true },
    ];
  },
};

export default nextConfig;
