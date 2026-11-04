"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useQuote } from "@/components/QuoteModal";
import MegaMenu, { type MegaPanel } from "@/components/MegaMenu";

type NavLink = { href: string; label: string };
type NavSection = { label: string; children: NavLink[] };
// A group renders as a hover/tap dropdown. It lists either a flat set of
// `children` (Trekking) or topic `sections` (Guides) — same panel.
type NavGroup = {
  label: string;
  match: string[];
  align?: "left" | "right"; // which edge the dropdown panel anchors to
  children?: NavLink[];
  sections?: NavSection[];
  panels?: MegaPanel[]; // full-width topic menu (Kilimanjaro, Safaris)
  footer?: NavLink; // optional "see all" link under a sectioned panel
};
type NavItem = NavLink | NavGroup;

const KILIMANJARO_PANELS: MegaPanel[] = [
  {
    href: "/kilimanjaro/groups",
    label: "Group Departures",
    badge: "$200 deposit",
    teaser: "No team? Join ours for a $200 deposit.",
    heading: "No team? Join ours.",
    body: [
      "Pick a date, put down $200 and you're on the climb. Most of our group spots are booked by people travelling alone, so you can arrive knowing nobody and still reach the summit as part of a team.",
      "The same expert guides and quality kit as our private climbs, in groups of up to 12, at a lower price per person.",
    ],
    cta: "See open dates",
    image: {
      src: "/images/kilimanjaro/team-group-photo.jpg",
      alt: "A Trust Tours & Safaris team of climbers and crew with the company banner on Kilimanjaro",
    },
  },
  {
    href: "/kilimanjaro/guide",
    label: "Kilimanjaro Guide 2026–2028",
    badge: "Prices inside",
    teaser: "Every route, every group size, every line of the bill.",
    heading: "Know the real cost before you pay a deposit",
    body: [
      "Every route, every group size and every line of the bill, in one place. See what your price should cover, what you'll pay on top, and how to choose between six routes.",
      "Read it first and you'll be able to compare any Kilimanjaro quote, ours included.",
    ],
    cta: "Read the guide",
    image: {
      src: "/images/kilimanjaro-camp.jpg",
      alt: "Climbers beside a Kilimanjaro signpost, with tents and a rock tower behind them",
    },
  },
  {
    href: "/kilimanjaro",
    label: "Private Tours & Pricing",
    badge: "From $2,627",
    teaser: "Your dates, your people, with prices for every group size.",
    heading: "Your dates. Your people. Your pace.",
    body: [
      "Climb with only the people you choose, on six routes and ten itineraries. Every price is published per person for every group size, so you know the number before you write to us.",
      "Not sure which route fits? Tell Ombeni your dates and hiking experience and he'll recommend one.",
    ],
    cta: "Compare private climbs",
    links: [
      { href: "/kilimanjaro/7-day-machame-route", label: "7-Day Machame" },
      { href: "/kilimanjaro/8-day-lemosho-route", label: "8-Day Lemosho" },
      { href: "/kilimanjaro/6-day-marangu-route", label: "6-Day Marangu" },
      { href: "/kilimanjaro/9-day-northern-circuit", label: "9-Day Northern Circuit" },
    ],
    image: {
      src: "/images/kilimanjaro-summit-sign.jpg",
      alt: "Three climbers with the Tanzanian flag on Kilimanjaro at sunrise",
    },
  },
  {
    href: "/guides",
    label: "Helpful Articles",
    badge: "Free",
    teaser: "Honest answers on training, altitude and packing.",
    heading: "Ask the questions before the mountain does",
    body: [
      "How hard is it really? How do you train? What does altitude feel like? Free, honest guides from the people who run these climbs, so nothing on the mountain takes you by surprise.",
    ],
    cta: "Browse all guides",
    links: [
      { href: "/guides/best-kilimanjaro-route", label: "Best route" },
      { href: "/guides/kilimanjaro-training-and-fitness", label: "Training" },
      { href: "/guides/altitude-sickness-on-kilimanjaro", label: "Altitude sickness" },
      { href: "/guides/kilimanjaro-packing-list", label: "Packing list" },
    ],
    image: {
      src: "/images/about-ombeni-guest.jpg",
      alt: "Ombeni and a guest smiling with thumbs up on the mountain",
    },
  },
];

const SAFARI_PANELS: MegaPanel[] = [
  {
    href: "/safaris",
    label: "All Safaris & Prices",
    badge: "From $455",
    teaser: "Every private safari, sorted by type and length.",
    heading: "Your safari, your dates, your pace",
    body: [
      "Every safari we run is private, with your own vehicle and guide. Start with a sample itinerary, filter by type and length, then tell us what to change.",
    ],
    cta: "See all safaris",
    links: [
      { href: "/safaris?days=1-5#safari-results", label: "1 to 5 days" },
      { href: "/safaris?days=6-11#safari-results", label: "6 to 11 days" },
      { href: "/safaris?days=12-plus#safari-results", label: "12+ days" },
    ],
    image: {
      src: "/images/safari-lion-pride.jpg",
      alt: "A male lion roaring above another lion in the grass",
    },
  },
  {
    href: "/safaris?type=big-five#safari-results",
    label: "Big Five Safaris",
    teaser: "Game drives across the northern parks.",
    heading: "Lion, leopard, elephant, buffalo and rhino",
    body: [
      "Classic private game drives across Tarangire, Lake Manyara, the Ngorongoro Crater and the Serengeti, the surest way to see all five.",
    ],
    cta: "View Big Five safaris",
    links: [
      { href: "/safaris?type=zanzibar#safari-results", label: "Add Zanzibar" },
      { href: "/guides/what-to-expect-on-safari", label: "What to expect" },
    ],
    image: {
      src: "/images/ngorongoro-rhino.jpg",
      alt: "Two rhinos grazing on the floor of the Ngorongoro Crater",
    },
  },
  {
    href: "/safaris?type=cross-migration#safari-results",
    label: "Cross Migration Safaris",
    badge: "July to October",
    teaser: "Follow the herds to the Mara River.",
    heading: "Be there when the herds reach the Mara",
    body: [
      "From July to October, the Great Migration gathers in the Northern Serengeti. These safaris put you in the north, with time to wait by the river. No one can guarantee a crossing, but the right camp and an experienced guide give you the best chance.",
    ],
    cta: "View cross migration safaris",
    links: [
      { href: "/safaris/4-day-cross-migration-safari", label: "4-Day Cross Migration" },
      { href: "/safaris/5-day-cross-migration-safari", label: "5-Day via Central Serengeti" },
      { href: "/safaris/5-day-great-migration-safari", label: "5-Day via Tarangire" },
      { href: "/safaris/6-day-cross-migration-safari", label: "6-Day Cross Migration" },
      { href: "/safaris/7-day-great-migration-safari", label: "7-Day Cross Migration" },
      { href: "/safaris/7-day-manyara-serengeti-migration-safari", label: "7-Day via Lake Manyara" },
      { href: "/safaris/8-day-great-migration-safari", label: "8-Day Central and Northern" },
      { href: "/safaris/8-day-mara-river-crossing-safari", label: "8-Day, Four Nights North" },
      { href: "/safaris/9-day-great-migration-safari", label: "9-Day Cross Migration" },
      { href: "/guides/best-time-great-migration", label: "Migration by month" },
    ],
    image: {
      src: "/images/safaris/mara-crossing-zebra-wildebeest.jpg",
      alt: "Zebra and wildebeest crossing the Mara River through churning water",
    },
  },
  {
    href: "/safaris?type=day-trips#safari-results",
    label: "Day Trips",
    badge: "1 to 2 days",
    teaser: "Short trips from Arusha and Moshi.",
    heading: "A real taste of Tanzania in a day or two",
    body: [
      "Short on time? Spend a day with Tarangire's elephants or in the Ngorongoro Crater, walk with a ranger in Arusha National Park, swim at Chemka or hike Kilimanjaro's rainforest, and be back at your hotel by evening.",
    ],
    cta: "View day trips",
    links: [
      { href: "/safaris/tarangire-day-trip", label: "Tarangire Day Trip" },
      { href: "/safaris/ngorongoro-crater-day-trip", label: "Ngorongoro Crater Day Trip" },
      { href: "/safaris/arusha-national-park-day-trip", label: "Arusha National Park" },
      { href: "/safaris/chemka-hot-springs-day-trip", label: "Chemka Hot Springs" },
      { href: "/trekking/kilimanjaro-day-trip-marangu", label: "Kilimanjaro Day Hike" },
      { href: "/safaris/2-day-tarangire-ngorongoro", label: "2-Day Tarangire & Ngorongoro" },
      { href: "/trekking/2-day-ol-doinyo-lengai-climb", label: "2-Day Ol Doinyo Lengai Climb" },
    ],
    image: {
      src: "/images/safaris/tarangire-elephants.jpg",
      alt: "A herd of elephants beneath a flat-topped acacia tree in Tarangire National Park",
    },
  },
  {
    href: "/safaris?type=fly-in#safari-results",
    label: "Fly-in Safaris",
    badge: "Flights included",
    teaser: "Fly in from Zanzibar, or fly out to the beach.",
    heading: "Less time on the road, more time on safari",
    body: [
      "Fly from Zanzibar straight into the Serengeti for a balloon safari and two nights of game drives, or take a private northern safari that ends with a flight to the beach.",
    ],
    cta: "View fly-in safaris",
    links: [
      { href: "/safaris/3-day-serengeti-balloon-zanzibar", label: "3-Day Zanzibar to Serengeti" },
      { href: "/safaris/5-day-premium-safari-fly-to-zanzibar", label: "5-Day Premium Safari, Fly to Zanzibar" },
      { href: "/guides/paramotor-flying-regulations-tanzania", label: "Paramotor rules in Tanzania" },
    ],
    image: {
      src: "/images/safaris/serengeti-balloon-sunrise.jpg",
      alt: "A hot-air balloon drifting over the Serengeti plains at sunrise",
    },
  },
  {
    href: "/safaris?type=calving#safari-results",
    label: "Calving Season",
    badge: "December to March",
    teaser: "Newborn calves and predators at Ndutu.",
    heading: "Thousands of calves, and the predators that follow",
    body: [
      "Early each year, the herds gather on the Ndutu plains to give birth. These safaris give you time on the calving grounds, with camps close to the wildlife.",
    ],
    cta: "View calving safaris",
    links: [
      { href: "/safaris/3-day-ndutu-calving-safari", label: "3-Day Ndutu Safari" },
      { href: "/safaris/5-day-ndutu-migration-safari", label: "5-Day Ndutu Safari" },
      { href: "/safaris/7-day-ndutu-calving-safari", label: "7-Day Ndutu Safari" },
      { href: "/guides/calving-season-guide", label: "Calving season guide" },
    ],
    image: {
      src: "/images/safaris/ndutu-calf-nursing.jpg",
      alt: "A wildebeest calf feeding from its mother on the plains",
    },
  },
  {
    href: "/safaris?type=zanzibar#safari-results",
    label: "Safari & Zanzibar",
    badge: "Flight included",
    teaser: "The bush, then the beach, in one trip.",
    heading: "Game drives first, then the Indian Ocean",
    body: [
      "Start with the northern parks or the Serengeti, then fly to Zanzibar for Stone Town, the reefs and the beach. The domestic flight is included.",
    ],
    cta: "View safari and beach trips",
    links: [
      { href: "/safaris/6-day-safari-zanzibar", label: "6-Day Safari & Zanzibar" },
      { href: "/safaris/7-day-tanzania-zanzibar", label: "7-Day Safari & Zanzibar" },
      { href: "/safaris/10-day-safari-zanzibar-adventure", label: "10-Day Safari & Zanzibar" },
      { href: "/safaris/20-day-honeymoon-tanzania-zanzibar", label: "20-Day Honeymoon" },
    ],
    image: {
      src: "/images/zanzibar-dhow.jpg",
      alt: "A traditional dhow lit up on a Zanzibar beach at dusk",
    },
  },
  {
    href: "/honeymoon",
    label: "Honeymoon",
    teaser: "Safari and Zanzibar for two.",
    heading: "The bush, then the beach",
    body: [
      "Private safaris paired with the white sands of Zanzibar, with bush dinners, sunrise balloon flights and sundowners for two.",
    ],
    cta: "View honeymoons",
    links: [
      { href: "/safaris?type=zanzibar#safari-results", label: "Safari + Zanzibar trips" },
      { href: "/guides/tanzania-honeymoon-guide", label: "Honeymoon guide" },
    ],
    image: {
      src: "/images/honeymoon.jpg",
      alt: "A lodge bed decorated with rose petals and towel swans for honeymooners",
    },
  },
  {
    href: "/cultural",
    label: "Cultural & Paramotoring",
    teaser: "Meet local communities, or see it all from the air.",
    heading: "A different side of Tanzania",
    body: [
      "Spend time with the Maasai, Hadzabe and Chagga, or glide on a paramotor over Kilimanjaro and the Great Rift Valley.",
    ],
    cta: "View cultural tours",
    links: [
      { href: "/paramotoring", label: "Paramotoring trips" },
      { href: "/guides/tanzania-cultural-tours-guide", label: "Cultural tours guide" },
    ],
    image: {
      src: "/images/maasai-dance.jpg",
      alt: "Two guests dressed in traditional red Maasai cloth outside a gallery in Arusha",
    },
  },
  {
    href: "/guides/tanzania-safari-guide",
    label: "National Parks",
    teaser: "Where each park fits in your trip.",
    heading: "Which parks belong on your trip?",
    body: [
      "Each park shines at a different time of year. Our guides explain what you'll see in each one and how many days it deserves.",
    ],
    cta: "Read the safari guide",
    links: [
      { href: "/guides/serengeti-guide", label: "Serengeti", tag: "UNESCO Heritage Site" },
      { href: "/guides/ngorongoro-crater-guide", label: "Ngorongoro", tag: "UNESCO Heritage Site" },
      { href: "/guides/tarangire-guide", label: "Tarangire" },
      { href: "/guides/lake-manyara-guide", label: "Lake Manyara" },
    ],
    image: {
      src: "/images/tarangire-giraffes.jpg",
      alt: "Giraffes in Tarangire National Park",
    },
  },
  {
    href: "/guides",
    label: "Plan Your Safari",
    badge: "Free",
    teaser: "Costs, timing and packing, answered honestly.",
    heading: "Honest answers before you book",
    body: [
      "What a safari really costs, when to go and what to pack. Free guides from the people who run these trips.",
    ],
    cta: "Browse all guides",
    links: [
      { href: "/guides/how-much-tanzania-safari-cost", label: "What it costs" },
      { href: "/guides/best-time-to-visit-tanzania", label: "Best time" },
      { href: "/guides/tanzania-safari-packing-list", label: "Packing list" },
      { href: "/guides/tanzania-vs-kenya-safari", label: "Tanzania vs Kenya" },
    ],
    image: {
      src: "/images/safari-acacia-sunset.jpg",
      alt: "The sun setting behind acacia trees on the Tanzanian savannah",
    },
  },
];

const TREKKING_PANELS: MegaPanel[] = [
  {
    href: "/trekking/4-day-mount-meru",
    label: "Mount Meru",
    badge: "From $895",
    teaser: "Tanzania's second-highest peak, 4,566 m.",
    heading: "Wildlife, forest and a sunrise over Kilimanjaro",
    body: [
      "Climb through Arusha National Park with an armed ranger, sleep in mountain huts and reach Socialist Peak before dawn. A rewarding climb on its own and the best warm-up for Kilimanjaro.",
    ],
    cta: "View the 4-day climb",
    links: [
      { href: "/trekking/3-day-mount-meru-momela", label: "3-Day Mount Meru Climb" },
      { href: "/trekking/4-day-mount-meru", label: "4-Day Mount Meru Climb" },
      { href: "/trekking/5-day-mount-meru", label: "5-Day Meru & Tarangire Safari" },
      { href: "/guides/mount-meru-climb-guide", label: "Mount Meru guide" },
      { href: "/guides/kilimanjaro-and-mount-meru", label: "Meru before Kilimanjaro" },
    ],
    image: {
      src: "/images/meru-montane-forest.jpg",
      alt: "Trekkers walking through misty, moss-draped forest on Mount Meru",
    },
  },
  {
    href: "/ol-doinyo-lengai",
    label: "Ol Doinyo Lengai",
    teaser: "The Maasai's Mountain of God, an active volcano.",
    heading: "A night climb up an active volcano",
    body: [
      "Climb Ol Doinyo Lengai by night to watch the sun rise over the Rift Valley and Lake Natron, with time for the flamingos and waterfalls below.",
    ],
    cta: "View the Lengai climbs",
    links: [
      { href: "/trekking/2-day-ol-doinyo-lengai-climb", label: "2-Day Ol Doinyo Lengai Climb" },
      { href: "/guides/ol-doinyo-lengai-guide", label: "Ol Doinyo Lengai guide" },
    ],
    image: {
      src: "/images/ol-doinyo-lengai-2day.jpg",
      alt: "Ol Doinyo Lengai rising above dry grassland and lava flats",
    },
  },
  {
    href: "/trekking/kilimanjaro-day-trip-marangu",
    label: "Kilimanjaro Day Hike",
    teaser: "A day on Africa's highest mountain.",
    heading: "Kilimanjaro's rainforest in a day",
    body: [
      "Walk the Marangu Route through the rainforest to Mandara Hut at about 2,700 metres, then back to the gate, without committing to a full climb.",
    ],
    cta: "View the day hike",
    links: [
      { href: "/kilimanjaro", label: "Climb to the summit" },
      { href: "/trekking", label: "All treks" },
    ],
    image: {
      src: "/images/kilimanjaro/marangu-rainforest-trail.jpg",
      alt: "Climbers walking through the rainforest on the Marangu Route",
    },
  },
];

const ZANZIBAR_PANELS: MegaPanel[] = [
  {
    href: "/zanzibar",
    label: "Zanzibar Beach Holidays",
    badge: "From $1,596",
    teaser: "Four to ten days on the Spice Island.",
    heading: "Stone Town, the reefs and the beach",
    body: [
      "Private island holidays with the excursions built in: Stone Town, spice farms, Mnemba's reefs, Safari Blue and Jozani Forest. Choose your hotel for each part of the trip.",
    ],
    cta: "See all Zanzibar holidays",
    links: [
      { href: "/zanzibar/4-day-zanzibar-escape", label: "4-Day Zanzibar Escape" },
      { href: "/zanzibar/5-day-zanzibar-escape", label: "5-Day Zanzibar Holiday" },
      { href: "/zanzibar/6-day-zanzibar-holiday", label: "6-Day Zanzibar Holiday" },
      { href: "/zanzibar/7-day-zanzibar-holiday", label: "7-Day Zanzibar Holiday" },
      { href: "/zanzibar/8-day-zanzibar-tour", label: "8-Day Zanzibar Tour" },
      { href: "/zanzibar/10-day-zanzibar-island-holiday", label: "10-Day Island Holiday" },
    ],
    image: {
      src: "/images/zanzibar-beach.jpg",
      alt: "A white sandbar curving into turquoise water off Zanzibar",
    },
  },
  {
    href: "/zanzibar?type=safari#zanzibar-results",
    label: "Safari & Zanzibar",
    badge: "Flight included",
    teaser: "The bush, then the beach, in one trip.",
    heading: "Game drives first, then the Indian Ocean",
    body: [
      "Start with the northern parks or the Serengeti, then fly to Zanzibar to unwind. We book the safari, the flight and the island as one trip.",
    ],
    cta: "View safari and beach trips",
    links: [
      { href: "/safaris/6-day-safari-zanzibar", label: "6-Day Safari & Zanzibar" },
      { href: "/safaris/7-day-tanzania-zanzibar", label: "7-Day Safari & Zanzibar" },
      { href: "/safaris/10-day-safari-zanzibar-adventure", label: "10-Day Safari & Zanzibar" },
      { href: "/safaris/20-day-honeymoon-tanzania-zanzibar", label: "20-Day Honeymoon" },
    ],
    image: {
      src: "/images/zanzibar-dhow.jpg",
      alt: "A traditional dhow lit up on a Zanzibar beach at dusk",
    },
  },
  {
    href: "/zanzibar/7-day-zanzibar-honeymoon",
    label: "Zanzibar Honeymoon",
    teaser: "Beach dinners, a couples' spa and the reefs.",
    heading: "A week on the island, for two",
    body: [
      "Six nights at a romantic east-coast resort, with a couples' spa treatment, candlelit dinners on the sand, dhow trips and Mnemba's reefs.",
    ],
    cta: "View the honeymoon",
    links: [
      { href: "/zanzibar?type=honeymoon#zanzibar-results", label: "Zanzibar honeymoons" },
      { href: "/honeymoon", label: "All honeymoons" },
      { href: "/guides/tanzania-honeymoon-guide", label: "Honeymoon guide" },
    ],
    image: {
      src: "/images/zanzibar-2.jpg",
      alt: "A dhow sailing past a red sunset on the Indian Ocean",
    },
  },
  {
    href: "/guides/zanzibar-travel-guide",
    label: "Plan Your Zanzibar Trip",
    badge: "Free",
    teaser: "Beaches, tides and the best time to go.",
    heading: "Which beach, which month?",
    body: [
      "The north is best for swimming at any tide, the east for quiet lagoons. Our guides explain the beaches, the seasons and what to do.",
    ],
    cta: "Read the Zanzibar guide",
    links: [
      { href: "/zanzibar?stay=north-coast#zanzibar-results", label: "Trips on the north coast" },
      { href: "/zanzibar?stay=east-coast#zanzibar-results", label: "Trips on the east coast" },
      { href: "/guides/best-beaches-zanzibar", label: "Best beaches" },
      { href: "/guides/best-time-to-visit-zanzibar", label: "Best time" },
      { href: "/guides/things-to-do-zanzibar", label: "Things to do" },
    ],
    image: {
      src: "/images/zanzibar/snorkeling.jpg",
      alt: "Snorkellers floating over a coral reef in clear turquoise water",
    },
  },
];

const NAV: NavItem[] = [
  {
    label: "Kilimanjaro",
    match: ["/kilimanjaro"],
    panels: KILIMANJARO_PANELS,
  },
  {
    label: "Trekking",
    match: ["/trekking", "/ol-doinyo-lengai"],
    panels: TREKKING_PANELS,
  },
  {
    label: "Safaris",
    match: ["/safaris", "/honeymoon", "/cultural", "/paramotoring"],
    panels: SAFARI_PANELS,
  },
  {
    label: "Zanzibar",
    match: ["/zanzibar"],
    panels: ZANZIBAR_PANELS,
  },
  {
    label: "Guides",
    match: ["/guides"],
    align: "right",
    footer: { href: "/guides", label: "All guides →" },
    sections: [
      {
        label: "Kilimanjaro",
        children: [
          { href: "/guides/climbing-kilimanjaro-guide", label: "Climbing Kilimanjaro" },
          { href: "/guides/best-kilimanjaro-route", label: "Best route" },
          { href: "/guides/kilimanjaro-packing-list", label: "Packing list" },
        ],
      },
      {
        label: "Safari",
        children: [
          { href: "/guides/tanzania-safari-guide", label: "Safari guide" },
          { href: "/guides/best-time-great-migration", label: "Great Migration timing" },
          { href: "/guides/serengeti-guide", label: "Serengeti" },
        ],
      },
      {
        label: "Zanzibar",
        children: [
          { href: "/guides/zanzibar-travel-guide", label: "Zanzibar guide" },
          { href: "/guides/best-beaches-zanzibar", label: "Best beaches" },
          { href: "/guides/stone-town-guide", label: "Stone Town" },
        ],
      },
      {
        label: "Trekking",
        children: [
          { href: "/guides/mount-meru-climb-guide", label: "Mount Meru" },
          { href: "/guides/ol-doinyo-lengai-guide", label: "Ol Doinyo Lengai" },
        ],
      },
      {
        label: "Planning",
        children: [
          { href: "/guides/tanzania-travel-guide", label: "Tanzania travel guide" },
          { href: "/guides/best-time-to-visit-tanzania", label: "Best time to visit" },
          { href: "/guides/how-to-choose-tour-operator", label: "Choosing an operator" },
        ],
      },
      {
        label: "Health & Safety",
        children: [
          { href: "/guides/altitude-sickness-on-kilimanjaro", label: "Altitude sickness" },
          { href: "/guides/tanzania-vaccinations", label: "Vaccinations" },
          { href: "/guides/is-tanzania-safe", label: "Is Tanzania safe?" },
          { href: "/guides/travel-insurance-tanzania", label: "Travel insurance" },
        ],
      },
      {
        label: "Culture & Adventure",
        children: [
          { href: "/guides/tanzania-cultural-tours-guide", label: "Cultural tours" },
          { href: "/guides/paramotoring-tanzania-guide", label: "Paramotoring" },
        ],
      },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const isGroup = (item: NavItem): item is NavGroup => "match" in item;

export default function Header() {
  const { openQuote } = useQuote();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header
      className="site-header sticky top-0 z-40 shadow-sm"
      style={{ background: "var(--paper)", borderBottom: "1px solid rgba(74,41,18,0.12)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          aria-label="Trust Tours & Safaris — home"
        >
          <Image
            src="/Logo.jpeg"
            alt="Trust Tours & Safaris"
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full"
          />
          <span
            className="font-extrabold text-lg tracking-tight whitespace-nowrap hidden sm:inline lg:hidden min-[1140px]:inline"
            style={{ fontFamily: "var(--font-display)", color: "var(--forest)" }}
          >
            Trust Tours &amp; Safaris
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 lg:gap-6" aria-label="Main navigation">
          {NAV.map((item) => {
            if (isGroup(item)) {
              const active = item.match.some((m) => pathname.startsWith(m));
              return (
                <div
                  key={item.label}
                  // A mega menu anchors to the header, so its hover area runs
                  // down to the header's edge with no gap before the panel.
                  className={item.panels ? "h-16 flex items-center" : "relative"}
                  onMouseEnter={() => setMenu(item.label)}
                  onMouseLeave={() => setMenu(null)}
                >
                  <button
                    type="button"
                    className="text-base font-semibold tracking-tight transition-colors whitespace-nowrap inline-flex items-center gap-1"
                    style={{ color: active ? "var(--gold)" : "var(--forest)" }}
                    aria-haspopup="true"
                    aria-expanded={menu === item.label}
                    onClick={() => setMenu(menu === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={{
                        transform: menu === item.label ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {menu === item.label && item.panels && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute inset-x-0 top-full z-50 px-4 md:px-6 pointer-events-none"
                      >
                        <div
                          className="pointer-events-auto max-w-[1040px] mx-auto rounded-b-2xl overflow-hidden shadow-xl"
                          style={{ background: "#fff", border: "1px solid rgba(74,41,18,0.14)", borderTop: "none" }}
                        >
                          <MegaMenu panels={item.panels} onNavigate={() => setMenu(null)} />
                        </div>
                      </motion.div>
                    )}
                    {menu === item.label && !item.panels && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={`absolute top-full pt-2 z-50 ${
                          item.align === "right" ? "right-0" : "left-0"
                        }`}
                      >
                        <div
                          className="rounded-xl overflow-hidden shadow-lg"
                          style={{ background: "var(--paper)", border: "1px solid rgba(74,41,18,0.14)" }}
                        >
                          {item.sections ? (
                            // Grouped-by-topic menu (Guides) — same panel, two columns.
                            <div className="grid grid-cols-2 gap-x-6 gap-y-4 p-4 w-[480px] max-w-[92vw]">
                              {item.sections.map((sec) => (
                                <div key={sec.label}>
                                  <p
                                    className="px-2 pb-1 text-[0.7rem] font-bold uppercase tracking-wider"
                                    style={{ color: "rgba(74,41,18,0.5)" }}
                                  >
                                    {sec.label}
                                  </p>
                                  {sec.children.map((c) => (
                                    <Link
                                      key={`${c.href}|${c.label}`}
                                      href={c.href}
                                      onClick={() => setMenu(null)}
                                      className="block px-2 py-1.5 text-sm font-semibold rounded-md transition-colors hover:bg-[rgba(74,41,18,0.06)]"
                                      style={{
                                        color: pathname.startsWith(c.href) ? "var(--gold)" : "var(--forest)",
                                      }}
                                    >
                                      {c.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                              {item.footer && (
                                <div
                                  className="col-span-2 pt-3 mt-1"
                                  style={{ borderTop: "1px solid rgba(74,41,18,0.12)" }}
                                >
                                  <Link
                                    href={item.footer.href}
                                    onClick={() => setMenu(null)}
                                    className="block px-2 text-sm font-bold transition-opacity hover:opacity-80"
                                    style={{ color: "var(--gold)" }}
                                  >
                                    {item.footer.label}
                                  </Link>
                                </div>
                              )}
                            </div>
                          ) : (
                            // Flat menu (Trekking) — unchanged.
                            <div className="min-w-[200px] py-1">
                              {item.children?.map((c) => (
                                <Link
                                  key={`${c.href}|${c.label}`}
                                  href={c.href}
                                  onClick={() => setMenu(null)}
                                  className="block px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[rgba(74,41,18,0.06)]"
                                  style={{
                                    color: pathname.startsWith(c.href) ? "var(--gold)" : "var(--forest)",
                                  }}
                                >
                                  {c.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold tracking-tight transition-colors whitespace-nowrap"
                style={{
                  color: pathname.startsWith(item.href) ? "var(--gold)" : "var(--forest)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => openQuote()}
            className="ml-2 px-4 py-2 rounded-full text-ink text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "var(--gold)" }}
          >
            Request a quote
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2 rounded"
        >
          <span
            className="block w-6 h-0.5 origin-center transition-transform duration-200"
            style={{
              background: "var(--forest)",
              transform: open ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-opacity duration-200"
            style={{
              background: "var(--forest)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 origin-center transition-transform duration-200"
            style={{
              background: "var(--forest)",
              transform: open ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Mobile navigation"
            className="lg:hidden px-4 pb-4 overflow-y-auto"
            style={{
              background: "var(--paper)",
              borderTop: "1px solid rgba(74,41,18,0.12)",
              maxHeight: "calc(100vh - 4rem)",
            }}
          >
            {NAV.map((item) =>
              isGroup(item) ? (
                <div key={item.label}>
                  <p
                    className="pt-3 pb-1 text-xs font-bold uppercase tracking-wider"
                    style={{ color: "rgba(74,41,18,0.5)" }}
                  >
                    {item.label}
                  </p>
                  {item.panels ? (
                    item.panels.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setOpen(false)}
                        className="block py-3 pl-3"
                        style={{ borderBottom: "1px solid rgba(74,41,18,0.1)" }}
                      >
                        <span className="block text-base font-semibold" style={{ color: "var(--forest)" }}>
                          {p.label}
                        </span>
                        <span className="block text-sm mt-0.5" style={{ color: "var(--ink)" }}>
                          {p.teaser}
                        </span>
                      </Link>
                    ))
                  ) : item.sections ? (
                    // Grouped-by-topic (Guides): topic sub-labels + links, then All guides.
                    <>
                      {item.sections.map((sec) => (
                        <div key={sec.label}>
                          <p
                            className="pt-2 pb-0.5 pl-3 text-[0.7rem] font-semibold uppercase tracking-wider"
                            style={{ color: "rgba(74,41,18,0.4)" }}
                          >
                            {sec.label}
                          </p>
                          {sec.children.map((c) => (
                            <Link
                              key={`${c.href}|${c.label}`}
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className="block py-2.5 pl-5 text-base font-semibold transition-colors"
                              style={{
                                borderBottom: "1px solid rgba(74,41,18,0.1)",
                                color: pathname.startsWith(c.href) ? "var(--gold)" : "var(--forest)",
                              }}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      {item.footer && (
                        <Link
                          href={item.footer.href}
                          onClick={() => setOpen(false)}
                          className="block py-3 pl-3 text-base font-bold"
                          style={{ color: "var(--gold)" }}
                        >
                          {item.footer.label}
                        </Link>
                      )}
                    </>
                  ) : (
                    item.children?.map((c) => (
                      <Link
                        key={`${c.href}|${c.label}`}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block py-3 pl-3 text-base font-semibold transition-colors"
                        style={{
                          borderBottom: "1px solid rgba(74,41,18,0.1)",
                          color: pathname.startsWith(c.href) ? "var(--gold)" : "var(--forest)",
                        }}
                      >
                        {c.label}
                      </Link>
                    ))
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold transition-colors"
                  style={{
                    borderBottom: "1px solid rgba(74,41,18,0.1)",
                    color: pathname.startsWith(item.href) ? "var(--gold)" : "var(--forest)",
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openQuote();
              }}
              className="block w-full mt-4 text-center px-4 py-3 rounded-full text-ink text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "var(--gold)" }}
            >
              Request a quote
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
