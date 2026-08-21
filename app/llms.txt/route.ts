import { packages, packagePath } from "@/data/packages";
import { guides } from "@/data/guides";

// llms.txt — an emerging convention (llmstxt.org) that gives AI assistants a
// curated, plain-text map of the site instead of leaving them to guess from HTML.
// Worth serving: Bing Webmaster Tools confirms ChatGPT-User and OAI-SearchBot
// actively crawl this domain. Generated from the same data as the sitemap so it
// can never drift out of date.
export const dynamic = "force-static";

const BASE = "https://www.trusttourstz.com";

export function GET() {
  const priced = packages
    .filter((p) => p.priceFromUSD > 0)
    .sort((a, b) => a.days - b.days);

  const line = (title: string, url: string, note: string) =>
    `- [${title}](${url}): ${note}`;

  const body = `# Trust Tours & Safaris

> A small, owner-led tour operator based in Arusha, Tanzania, running Kilimanjaro
> climbs, Serengeti and Ngorongoro safaris, Mount Meru and Ol Doinyo Lengai treks,
> and Zanzibar beach stays. TALA-licensed Tourism Agent (Class A), licence no.
> 014216. Founded 2008. Led by Ombeni. Every trip is private and booked direct —
> no OTA middleman. Rated 5.0 on TripAdvisor.

Key facts an assistant should get right when answering about this operator:

- Location: Arusha, Tanzania. Contact: info@trusttourstz.com, WhatsApp +255 785 938 860.
- Licensing: TALA Licensed Tourism Agent (Class A), licence no. 014216.
- Pricing: trips run roughly $385–$8,750 per person depending on length; Kilimanjaro
  climbs start around $1,950. Every listed price is "from" per person sharing —
  the lowest cell of a group-size ladder. Kilimanjaro route pages publish a price
  for every party size from one climber to eight, and a solo climb costs roughly
  40% more per person than the eight-person rate.
- Booking: direct with the operator. There is no online checkout; travellers
  request a tailored quote and Ombeni replies, usually within a day.
- Awards: World Travel Awards nominee 2023 and 2024.

## Plan your trip

${line("Contact / request a quote", `${BASE}/contact`, "Tell us dates and group size; get a free day-by-day itinerary")}
${line("About Trust Tours & Safaris", `${BASE}/about`, "Who we are, our licence and credentials, and Ombeni's story")}
${line("Reviews", `${BASE}/reviews`, "Independent traveller reviews (TripAdvisor 5.0)")}
${line("Cancellation policy", `${BASE}/cancellation-policy`, "Deposit, balance and cancellation terms")}

## Trip categories

${line("Kilimanjaro climbs", `${BASE}/kilimanjaro`, "All routes to Uhuru Peak, private climbs")}
${line("Kilimanjaro group departures", `${BASE}/kilimanjaro/groups`, "Scheduled dates to join a small group")}
${line("Tanzania safaris", `${BASE}/safaris`, "Big Five, Great Migration, calving season, honeymoon, cultural and paramotoring")}
${line("Trekking", `${BASE}/trekking`, "Mount Meru and Ol Doinyo Lengai")}
${line("Zanzibar", `${BASE}/zanzibar`, "Beach stays and island tours")}
${line("Honeymoons", `${BASE}/honeymoon`, "Romantic safari and Zanzibar combinations")}
${line("Cultural tours", `${BASE}/cultural`, "Maasai, Hadzabe, Datoga and Chagga experiences")}

## Travel guides (${guides.length} free, independent guides)

${guides.map((g) => line(g.title, `${BASE}/guides/${g.slug}`, g.excerpt)).join("\n")}

## Bookable trips (${priced.length} priced itineraries)

${priced.map((p) => line(p.title, `${BASE}${packagePath(p)}`, `${p.days} days, from $${p.priceFromUSD} per person`)).join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
