// Internal links on the Kilimanjaro climb pages: which guides each section
// points to, and which climbs count as the same route at another length.

export interface LinkItem {
  href: string;
  label: string;
}

const guide = (slug: string, label: string): LinkItem => ({ href: `/guides/${slug}`, label });

const ROUTES = ["machame", "lemosho", "marangu", "rongai", "umbwe", "northern-circuit"] as const;

/** "8-day-lemosho-route" → "lemosho". Climbs sharing a key are one route at different lengths. */
export const routeKey = (slug: string): string => ROUTES.find((r) => slug.includes(r)) ?? slug;

const ROUTE_GUIDES: Record<string, LinkItem[]> = {
  machame: [guide("machame-route", "Machame Route guide"), guide("machame-vs-lemosho", "Machame vs Lemosho")],
  lemosho: [guide("lemosho-route", "Lemosho Route guide"), guide("machame-vs-lemosho", "Machame vs Lemosho")],
  marangu: [guide("marangu-route", "Marangu Route guide")],
  "northern-circuit": [guide("northern-circuit-route", "Northern Circuit guide")],
};

export interface ClimbLinks {
  overview: LinkItem[];
  prices: LinkItem[];
  itinerary: LinkItem[];
  inclusions: LinkItem[];
  planning: LinkItem[];
}

export function climbLinks(slug: string): ClimbLinks {
  return {
    overview: [
      ...(ROUTE_GUIDES[routeKey(slug)] ?? []),
      guide("best-kilimanjaro-route", "Which route is best for you?"),
      guide("how-long-to-climb-kilimanjaro", "How many days do you need?"),
    ],
    prices: [
      { href: "/kilimanjaro/guide", label: "Kilimanjaro guide 2026–2028" },
      guide("how-much-to-climb-kilimanjaro", "What a Kilimanjaro climb really costs"),
      guide("kilimanjaro-group-vs-private", "Group or private climb?"),
      { href: "/kilimanjaro/groups", label: "Join a group departure" },
    ],
    itinerary: [
      guide("altitude-sickness-on-kilimanjaro", "Altitude sickness explained"),
      guide("kilimanjaro-success-rate", "Summit success rates"),
      guide("kilimanjaro-training-and-fitness", "How to train for the climb"),
    ],
    inclusions: [
      guide("kilimanjaro-packing-list", "Kilimanjaro packing list"),
      guide("travel-insurance-tanzania", "Travel insurance for Tanzania"),
      guide("tipping-in-tanzania", "Tipping your mountain crew"),
    ],
    planning: [
      guide("best-time-to-climb-kilimanjaro", "Best time to climb"),
      guide("tanzania-visa-and-passport-requirements", "Visa and passport"),
      guide("combine-kilimanjaro-safari-zanzibar", "Add a safari or Zanzibar"),
      guide("climbing-kilimanjaro-for-beginners", "First time at altitude?"),
    ],
  };
}
