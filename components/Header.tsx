"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = { href: string; label: string };
type NavGroup = { label: string; match: string[]; children: NavLink[] };
type NavItem = NavLink | NavGroup;

const NAV: NavItem[] = [
  {
    label: "Trekking",
    match: ["/kilimanjaro", "/trekking"],
    children: [
      { href: "/kilimanjaro", label: "Climb Kilimanjaro" },
      { href: "/trekking/3-day-mount-meru-momela", label: "Mount Meru" },
    ],
  },
  { href: "/safaris", label: "Safaris" },
  { href: "/zanzibar", label: "Zanzibar" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const isGroup = (item: NavItem): item is NavGroup => "children" in item;

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris."
)}`;

export default function Header() {
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
                        className="absolute left-0 top-full pt-2 z-50"
                      >
                        <div
                          className="min-w-[200px] rounded-xl overflow-hidden shadow-lg py-1"
                          style={{ background: "var(--paper)", border: "1px solid rgba(74,41,18,0.14)" }}
                        >
                          {item.children.map((c) => (
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
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-full text-ink text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "var(--gold)" }}
          >
            Plan on WhatsApp
          </a>
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
                  {item.children.map((c) => (
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
                  ))}
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
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block mt-4 text-center px-4 py-3 rounded-full text-ink text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "var(--gold)" }}
            >
              Plan on WhatsApp
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
