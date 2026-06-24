"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useQuote } from "@/components/QuoteModal";

type NavLink = { href: string; label: string };
type NavSection = { label: string; children: NavLink[] };
// A group renders as a hover/tap dropdown. It lists either a flat set of
// `children` (Trekking, Safaris) or topic `sections` (Guides) — same panel.
type NavGroup = {
  label: string;
  match: string[];
  align?: "left" | "right"; // which edge the dropdown panel anchors to
  children?: NavLink[];
  sections?: NavSection[];
  footer?: NavLink; // optional "see all" link under a sectioned panel
};
type NavItem = NavLink | NavGroup;

const NAV: NavItem[] = [
  {
    label: "Kilimanjaro",
    match: ["/kilimanjaro"],
    align: "left",
    sections: [
      {
        label: "Private climbs",
        children: [
          { href: "/kilimanjaro/7-day-machame-route", label: "7-Day Machame" },
          { href: "/kilimanjaro/8-day-lemosho-route", label: "8-Day Lemosho" },
          { href: "/kilimanjaro/6-day-marangu-route", label: "6-Day Marangu" },
          { href: "/kilimanjaro/6-day-umbwe-route", label: "6-Day Umbwe" },
          { href: "/kilimanjaro/6-day-rongai-route", label: "6-Day Rongai" },
          { href: "/kilimanjaro/9-day-northern-circuit", label: "9-Day Northern Circuit" },
        ],
      },
      {
        label: "Group departures",
        children: [
          { href: "/kilimanjaro/groups", label: "Browse all departures" },
          { href: "/kilimanjaro/groups", label: "Join a team · $200 deposit" },
        ],
      },
      {
        label: "Plan your climb",
        children: [
          { href: "/guides/climbing-kilimanjaro-guide", label: "Climbing guide" },
          { href: "/guides/best-kilimanjaro-route", label: "Best route" },
          { href: "/guides/kilimanjaro-packing-list", label: "Packing list" },
        ],
      },
    ],
    footer: { href: "/kilimanjaro", label: "All Kilimanjaro climbs →" },
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
    children: [
      { href: "/safaris#big-five", label: "Big Five Safari" },
      { href: "/safaris#migration", label: "Migration Safari" },
      { href: "/honeymoon", label: "Honeymoon" },
      { href: "/cultural", label: "Cultural" },
      { href: "/paramotoring", label: "Paramotoring" },
      { href: "/safaris", label: "All safaris →" },
    ],
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
      className="sticky top-0 z-40 shadow-sm"
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
            className="font-extrabold text-lg tracking-tight hidden sm:inline"
            style={{ fontFamily: "var(--font-display)", color: "var(--forest)" }}
          >
            Trust Tours &amp; Safaris
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6" aria-label="Main navigation">
          {NAV.map((item) => {
            if (isGroup(item)) {
              const active = item.match.some((m) => pathname.startsWith(m));
              return (
                <div
                  key={item.label}
                  className="relative"
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
                    {menu === item.label && (
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
                                      key={c.href}
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
                            // Flat menu (Trekking, Safaris) — unchanged.
                            <div className="min-w-[200px] py-1">
                              {item.children?.map((c) => (
                                <Link
                                  key={c.href}
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
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded"
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
            className="md:hidden px-4 pb-4"
            style={{ background: "var(--paper)", borderTop: "1px solid rgba(74,41,18,0.12)" }}
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
                  {item.sections ? (
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
                              key={c.href}
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
                        key={c.href}
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
