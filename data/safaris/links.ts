// Internal links on the rebuilt safari pages: which guides and
// sister trips each section of the page points to.

import type { ClimbLinks, LinkItem } from "@/data/kilimanjaro/links";

const guide = (slug: string, label: string): LinkItem => ({ href: `/guides/${slug}`, label });

const CALVING_TRIPS: LinkItem[] = [
  { href: "/safaris/3-day-ndutu-calving-safari", label: "3-Day Ndutu Safari" },
  { href: "/safaris/4-day-private-ndutu-calving-safari", label: "4-Day Ndutu Safari" },
  { href: "/safaris/4-day-tarangire-ndutu-ngorongoro-safari", label: "4-Day Tarangire, Ndutu & Crater" },
  { href: "/safaris/5-day-ndutu-migration-safari", label: "5-Day Ndutu Safari" },
  { href: "/safaris/6-day-calving-safari", label: "6-Day Calving Safari" },
  { href: "/safaris/6-day-ndutu-great-migration-safari", label: "6-Day Ndutu Migration Safari" },
  { href: "/safaris/7-day-ndutu-calving-safari", label: "7-Day Ndutu Safari" },
  { href: "/safaris/8-day-ndutu-calving-safari", label: "8-Day Ndutu Safari" },
  { href: "/safaris/9-day-calving-migration-safari", label: "9-Day Calving Safari" },
  { href: "/safaris/10-day-serengeti-calving-safari", label: "10-Day Calving Safari" },
];

const CROSSING_TRIPS: LinkItem[] = [
  { href: "/safaris/4-day-cross-migration-safari", label: "4-Day Cross Migration Safari" },
  { href: "/safaris/5-day-cross-migration-safari", label: "5-Day Safari via Central Serengeti" },
  { href: "/safaris/5-day-great-migration-safari", label: "5-Day Safari via Tarangire" },
  { href: "/safaris/6-day-cross-migration-safari", label: "6-Day Cross Migration Safari" },
  { href: "/safaris/7-day-great-migration-safari", label: "7-Day Cross Migration Safari" },
  { href: "/safaris/7-day-manyara-serengeti-migration-safari", label: "7-Day Safari via Lake Manyara" },
  { href: "/safaris/8-day-great-migration-safari", label: "8-Day Central and Northern Safari" },
  { href: "/safaris/8-day-mara-river-crossing-safari", label: "8-Day Safari, Four Nights in the North" },
  { href: "/safaris/9-day-great-migration-safari", label: "9-Day Cross Migration Safari" },
];

export function crossingLinks(slug: string): ClimbLinks {
  return {
    overview: [
      guide("best-time-great-migration", "Where the migration is each month"),
      guide("serengeti-guide", "Serengeti National Park"),
      guide("tanzania-safari-guide", "Tanzania safari guide"),
    ],
    prices: [
      guide("how-much-tanzania-safari-cost", "What a safari really costs"),
      guide("best-tanzania-safari-company", "How to choose a safari company"),
    ],
    itinerary: [
      guide("ngorongoro-crater-guide", "Ngorongoro Crater"),
      guide("serengeti-guide", "Serengeti National Park"),
      guide("what-to-expect-on-safari", "What a safari day is like"),
    ],
    inclusions: [
      guide("tanzania-safari-packing-list", "Safari packing list"),
      guide("travel-insurance-tanzania", "Travel insurance for Tanzania"),
      guide("tipping-in-tanzania", "Tipping your guide"),
    ],
    planning: [
      ...CROSSING_TRIPS.filter((t) => !t.href.endsWith(`/${slug}`)),
      { href: "/safaris/5-day-ndutu-migration-safari", label: "January to March? Try a calving safari" },
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
      guide("malaria-in-tanzania", "Malaria advice"),
      guide("combine-kilimanjaro-safari-zanzibar", "Add Zanzibar or Kilimanjaro"),
    ],
  };
}

export function calvingLinks(slug: string): ClimbLinks {
  return {
    overview: [
      guide("calving-season-guide", "Calving season explained"),
      guide("best-time-great-migration", "Where the migration is each month"),
      guide("tanzania-safari-guide", "Tanzania safari guide"),
    ],
    prices: [
      guide("how-much-tanzania-safari-cost", "What a safari really costs"),
      guide("best-tanzania-safari-company", "How to choose a safari company"),
    ],
    itinerary: [
      guide("tarangire-guide", "Tarangire National Park"),
      guide("ngorongoro-crater-guide", "Ngorongoro Crater"),
      guide("serengeti-guide", "Serengeti National Park"),
      guide("what-to-expect-on-safari", "What a safari day is like"),
    ],
    inclusions: [
      guide("tanzania-safari-packing-list", "Safari packing list"),
      guide("travel-insurance-tanzania", "Travel insurance for Tanzania"),
      guide("tipping-in-tanzania", "Tipping your guide"),
    ],
    planning: [
      ...CALVING_TRIPS.filter((t) => !t.href.endsWith(`/${slug}`)),
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
      guide("malaria-in-tanzania", "Malaria advice"),
      guide("combine-kilimanjaro-safari-zanzibar", "Add Zanzibar or Kilimanjaro"),
    ],
  };
}
