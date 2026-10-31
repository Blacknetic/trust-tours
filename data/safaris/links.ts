// Internal links on the rebuilt calving-season safari pages: which guides and
// sister trips each section of the page points to.

import type { ClimbLinks, LinkItem } from "@/data/kilimanjaro/links";

const guide = (slug: string, label: string): LinkItem => ({ href: `/guides/${slug}`, label });

const CALVING_TRIPS: LinkItem[] = [
  { href: "/safaris/4-day-private-ndutu-calving-safari", label: "4-Day Ndutu Calving Safari" },
  { href: "/safaris/5-day-ndutu-migration-safari", label: "5-Day Ndutu Calving Safari" },
  { href: "/safaris/6-day-calving-safari", label: "6-Day Calving Safari" },
  { href: "/safaris/10-day-serengeti-calving-safari", label: "10-Day Calving Safari" },
];

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
