"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { packages } from "@/data/packages";

const WA_NUMBER = "255785938860";

// Page-aware opening line — used as the fallback message when the visitor
// sends without typing anything.
function defaultMessage(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length >= 2) {
    const slug = segments[segments.length - 1];
    const pkg = packages.find((p) => p.slug === slug);
    if (pkg) {
      return `Hi Ombeni! I'm interested in the ${pkg.title}. Can you send me the itinerary and pricing?`;
    }
  }
  if (segments[0] === "kilimanjaro") {
    return "Hi Ombeni! I'm interested in climbing Kilimanjaro with Trust Tours. What routes do you recommend?";
  }
  if (segments[0] === "safaris") {
    return "Hi Ombeni! I'm interested in a Tanzania safari with Trust Tours. Can you share options?";
  }
  if (segments[0] === "trekking") {
    return "Hi Ombeni! I'm interested in trekking in Tanzania with Trust Tours.";
  }
  return "Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris.";
}

export default function WhatsAppButton() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Client-only timestamp for the greeting bubble (avoids SSR hydration drift).
  useEffect(() => {
    setTime(
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    );
  }, []);

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Esc to close + click-outside to close.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  function send() {
    const message = text.trim() || defaultMessage(pathname);
    const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", "whatsapp_click", { page_slug: pathname });
    }
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setText("");
    setOpen(false);
  }

  return (
    <div
      ref={rootRef}
      className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* ── Chat panel ─────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            role="dialog"
            aria-label="Chat with Trust Tours & Safaris on WhatsApp"
            className="w-[320px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#e9e3dc", transformOrigin: "bottom right" }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3"
              style={{ background: "var(--wa-green)" }}
            >
              <Image
                src="/Logo.jpeg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-white/40"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white leading-tight">
                  Trust Tours &amp; Safaris
                </p>
                <p className="text-[0.7rem] text-white/85 flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-300" />
                  Typically replies in minutes
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white/90 hover:text-white p-1 -mr-1"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Greeting bubble */}
            <div
              className="px-4 py-5"
              style={{
                minHeight: 150,
                backgroundImage:
                  "radial-gradient(rgba(74,41,18,0.05) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            >
              <div
                className="relative inline-block max-w-[85%] rounded-xl rounded-tl-sm px-3.5 py-2.5 shadow-sm"
                style={{ background: "#fff" }}
              >
                <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--wa-green)" }}>
                  Trust Tours &amp; Safaris
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
                  Hi 👋 Welcome to Trust Tours &amp; Safaris! How can we help you
                  plan your trip?
                </p>
                {time && (
                  <span className="block text-[0.65rem] text-right mt-1" style={{ color: "rgba(10,10,10,0.4)" }}>
                    {time}
                  </span>
                )}
              </div>
            </div>

            {/* Input row */}
            <div className="flex items-center gap-2 p-2.5" style={{ background: "#f6f1ea" }}>
              <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    send();
                  }
                }}
                placeholder="Write your message…"
                aria-label="Your message"
                className="flex-1 rounded-full px-4 py-2.5 text-sm bg-white outline-none"
                style={{ border: "1px solid rgba(26,26,22,0.12)", color: "var(--ink)" }}
              />
              <button
                type="button"
                onClick={send}
                aria-label="Send message on WhatsApp"
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-90"
                style={{ background: "var(--wa-green)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating button ────────────────────────────────────── */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        aria-expanded={open}
        className="wa-halo relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-200 hover:scale-105"
        style={{ background: "var(--wa-green)" }}
      >
        {open ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        ) : (
          /* WhatsApp official logo SVG */
          <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true" focusable="false">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
