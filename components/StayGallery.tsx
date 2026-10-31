"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { ContentImage } from "@/data/packages";

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

function Lightbox({
  name,
  photos,
  index,
  onChange,
  onClose,
}: {
  name: string;
  photos: ContentImage[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const many = photos.length > 1;
  const step = (by: number) => onChange((index + by + photos.length) % photos.length);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChange((index - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onChange((index + 1) % photos.length);
      // Only the three buttons can take focus, so Tab simply cycles them.
      if (e.key === "Tab") {
        const buttons = [...document.querySelectorAll<HTMLElement>("[data-stay-lightbox] button")];
        const at = buttons.indexOf(document.activeElement as HTMLElement);
        e.preventDefault();
        buttons[(at + (e.shiftKey ? -1 : 1) + buttons.length) % buttons.length]?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index, photos.length, onChange, onClose]);

  const photo = photos[index];
  const control = "w-12 h-12 rounded-full flex items-center justify-center transition-colors hover:bg-[rgba(255,255,255,0.22)]";
  const controlStyle = { background: "rgba(255,255,255,0.12)", color: "#fff" };

  return createPortal(
    <div
      data-stay-lightbox
      role="dialog"
      aria-modal="true"
      aria-label={`${name} photos`}
      className="fixed inset-0 z-[70] flex flex-col"
      style={{ background: "#0a0a08" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between gap-4 px-4 md:px-8 py-4" style={{ color: "#fff" }}>
        <p className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>
          {name}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photos"
          className={control}
          style={controlStyle}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div
        className="relative flex-1 min-h-0 mx-4 md:mx-24"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null || !many) return;
          const moved = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(moved) > 40) step(moved < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <Image key={photo.src} src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-contain" />
      </div>

      {many && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous photo"
            className={`${control} hidden md:flex absolute left-6 top-1/2 -translate-y-1/2`}
            style={controlStyle}
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next photo"
            className={`${control} hidden md:flex absolute right-6 top-1/2 -translate-y-1/2`}
            style={controlStyle}
          >
            <Arrow direction="right" />
          </button>
        </>
      )}

      <div className="px-4 md:px-8 py-5 text-center" style={{ color: "#fff" }}>
        <p className="text-sm mx-auto" aria-live="polite">
          {photo.alt}
        </p>
        {many && (
          <p className="text-xs mt-1 mx-auto tabular-nums" style={{ opacity: 0.7 }}>
            {index + 1} / {photos.length}
          </p>
        )}
      </div>
    </div>,
    document.body,
  );
}

/** A lodge's photos: one large and two beside it, each opening full screen. */
export default function StayGallery({ name, photos }: { name: string; photos: ContentImage[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const shown = photos.slice(0, 3);

  return (
    <>
      <div
        className={`grid gap-1 ${
          shown.length > 2
            ? "grid-cols-3 grid-rows-2 aspect-[16/10] sm:aspect-[2/1]"
            : shown.length === 2
              ? "grid-cols-2 aspect-[2/1]"
              : "aspect-[2/1]"
        }`}
      >
        {shown.map((photo, i) => {
          const lead = i === 0 && shown.length > 2;
          return (
            <button
              key={photo.src}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View photo ${i + 1} of ${photos.length}: ${photo.alt}`}
              className={`group relative overflow-hidden ${lead ? "col-span-2 row-span-2" : ""}`}
              style={{ background: "var(--snow)" }}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                sizes={lead || shown.length === 1 ? "(max-width: 1024px) 100vw, 800px" : "(max-width: 1024px) 50vw, 400px"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {i === shown.length - 1 && (
                <span
                  className="absolute bottom-2.5 right-2.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: "rgba(10,10,8,0.65)", color: "#fff" }}
                >
                  {photos.length === 1 ? "View photo" : `View all ${photos.length}`}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {open !== null && (
        <Lightbox name={name} photos={photos} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      )}
    </>
  );
}
