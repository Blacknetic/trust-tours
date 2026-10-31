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
    badge: "From $576",
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
    href: "/safaris?type=migration#safari-results",
    label: "Great Migration",
    teaser: "Timed to the herds and the calving season.",
    heading: "Be where the herds are",
    body: [
      "The migration moves all year, so the right trip depends on your month. We time every safari to the river crossings or the Ndutu calving season.",
    ],
    cta: "View migration safaris",
    links: [
      { href: "/guides/best-time-great-migration", label: "Migration by month" },
      { href: "/guides/calving-season-guide", label: "Calving season" },
    ],
    image: {
      src: "/images/serengeti-plains.jpg",
      alt: "Wildebeest herds on the Serengeti plains during the Great Migration",
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

const NAV: NavItem[] = [
  {
    label: "Kilimanjaro",
    match: ["/kilimanjaro"],
    panels: KILIMANJARO_PANELS,
  },
  {
    label: "Trekking",
    match: ["/trekking", "/ol-doinyo-lengai"],
    children: [
      { href: "/trekking/3-day-mount-meru-momela", label: "Mount Meru" },
      { href: "/ol-doinyo-lengai", label: "Ol Doinyo Lengai" },
      { href: "/trekking", label: "All treks →" },
    ],
  },
  {
    label: "Safaris",
    match: ["/safaris", "/honeymoon", "/cultural", "/paramotoring"],
    panels: SAFARI_PANELS,
  },
  { href: "/zanzibar", label: "Zanzibar" },
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
