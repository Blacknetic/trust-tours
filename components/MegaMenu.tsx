"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface MegaPanel {
  href: string;
  label: string;
  badge?: string;
  // One line under the label in the phone menu.
  teaser: string;
  heading: string;
  body: string[];
  cta: string;
  links?: { href: string; label: string }[];
  // Only real trip photos here: Trust Tours banners, guests and crew.
  image: { src: string; alt: string; position?: string };
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="flex-shrink-0">
      <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Two-part header menu: hover or focus a topic on the left and its pitch and
 * photo appear on the right. Each topic is also a link in its own right.
 */
export default function MegaMenu({ panels, onNavigate }: { panels: MegaPanel[]; onNavigate: () => void }) {
  const [activeHref, setActiveHref] = useState(panels[0].href);
  const active = panels.find((p) => p.href === activeHref) ?? panels[0];

  return (
    <div className="grid grid-cols-[20rem_1fr_17rem] min-h-[26rem]">
      <ul className="p-3 space-y-1" style={{ borderRight: "1px solid rgba(74,41,18,0.12)" }}>
        {panels.map((p) => {
          const on = p === active;
          return (
            <li key={p.href}>
              <Link
                href={p.href}
                onClick={onNavigate}
                onMouseEnter={() => setActiveHref(p.href)}
                onFocus={() => setActiveHref(p.href)}
                className="flex items-center justify-between gap-2 rounded-xl px-4 py-3 transition-colors"
                style={{ background: on ? "rgba(74,41,18,0.09)" : "transparent", color: "var(--forest)" }}
              >
                <span className="min-w-0">
                  <span className="block text-base font-bold leading-snug">{p.label}</span>
                  {p.badge && (
                    <span
                      className="inline-block mt-1 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{ background: on ? "var(--forest)" : "var(--gold)", color: on ? "var(--paper)" : "var(--ink)" }}
                    >
                      {p.badge}
                    </span>
                  )}
                </span>
                <Chevron />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="p-7 flex flex-col">
        <h3
          className="text-2xl font-extrabold leading-tight mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
        >
          {active.heading}
        </h3>
        {active.body.map((p) => (
          <p key={p} className="text-[0.95rem] leading-relaxed mb-3" style={{ color: "var(--ink)" }}>
            {p}
          </p>
        ))}
        {active.links && (
          <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
            {active.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={onNavigate}
                  className="text-sm font-semibold underline underline-offset-2 hover:opacity-80"
                  style={{ color: "var(--forest)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link
          href={active.href}
          onClick={onNavigate}
          className="mt-auto self-start inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90"
          style={{ background: "var(--gold)", color: "var(--ink)" }}
        >
          {active.cta}
          <Chevron />
        </Link>
      </div>

      {/* All photos stay mounted so switching topics never flashes blank. */}
      {/* Sized for the cover crop: wide photos fill a tall frame, so they load wider than it. */}
      <div className="relative m-3 rounded-2xl overflow-hidden" style={{ background: "var(--snow)" }}>
        {panels.map((p) => (
          <Image
            key={p.href}
            src={p.image.src}
            alt={p === active ? p.image.alt : ""}
            fill
            sizes="560px"
            loading="eager"
            className="object-cover transition-opacity duration-200"
            style={{ opacity: p === active ? 1 : 0, objectPosition: p.image.position }}
          />
        ))}
      </div>
    </div>
  );
}
