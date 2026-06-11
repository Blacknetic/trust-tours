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
      // All other old booking/tour pages → safaris listing
      {
        source: "/booking/:slug*",
        destination: "/safaris",
        permanent: true,
      },
      // Old category/taxonomy pages
      { source: "/kilimanjaro-mountain", destination: "/kilimanjaro", permanent: true },
      { source: "/tanzania-safaris", destination: "/safaris", permanent: true },
      { source: "/mount-meru-trekking", destination: "/trekking/4-day-mount-meru-trek", permanent: true },
      { source: "/destinations", destination: "/safaris", permanent: true },
      { source: "/ba_type/:slug*", destination: "/safaris", permanent: true },
      { source: "/accommodation", destination: "/safaris", permanent: true },
      { source: "/zanzibar", destination: "/safaris/10-day-safari-zanzibar", permanent: true },
    ];
  },
};

export default nextConfig;
