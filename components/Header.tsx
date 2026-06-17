"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "/kilimanjaro", label: "Kilimanjaro" },
  { href: "/safaris", label: "Safaris" },
  { href: "/trekking/3-day-mount-meru-momela", label: "Mount Meru" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris."
)}`;

export default function Header() {
  const [open, setOpen] = useState(false);
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
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{
                color: pathname.startsWith(href)
                  ? "var(--gold)"
                  : "rgba(74,41,18,0.78)",
              }}
            >
              {label}
            </Link>
          ))}
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
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium transition-colors"
                style={{
                  borderBottom: "1px solid rgba(74,41,18,0.1)",
                  color: pathname.startsWith(href)
                    ? "var(--gold)"
                    : "rgba(74,41,18,0.78)",
                }}
              >
                {label}
              </Link>
            ))}
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
