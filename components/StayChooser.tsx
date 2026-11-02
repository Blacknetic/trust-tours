"use client";

import { useState } from "react";
import StayGallery from "@/components/StayGallery";
import { useTripChoices, type ResolvedStayChoice } from "@/components/TripChoices";
import type { ComfortLevel } from "@/lib/pricing";

// Long lists start short, so the section stays easy to scan on a phone.
const FIRST_SHOWN = 6;

function Stop({ choice }: { choice: ResolvedStayChoice }) {
  const { levelId, pickedStay, pickStay } = useTripChoices();
  const [showAll, setShowAll] = useState(false);
  const offered = (levelId && choice.options[levelId]) || [];
  const picked = pickedStay(choice);
  const shown = showAll ? offered : offered.slice(0, FIRST_SHOWN);

  return (
    <div id={`stay-${choice.id}`} className="scroll-mt-28">
      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--gold)" }}>
        {choice.nights}
      </p>
      <h3
        className="text-xl md:text-2xl font-extrabold mb-4"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        {choice.place}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4" role="radiogroup" aria-label={`Stay for ${choice.nights}`}>
        {shown.map((id) => {
          const stay = choice.stays.find((s) => s.id === id);
          if (!stay) return null;
          const on = stay.id === picked?.id;
          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => pickStay(choice.id, id)}
              className="rounded-xl px-3.5 py-3 text-left transition-colors"
              style={
                on
                  ? { background: "var(--forest)", color: "var(--paper)", border: "1px solid var(--forest)" }
                  : { background: "#fff", color: "var(--ink)", border: "1px solid rgba(74,41,18,0.2)" }
              }
            >
              <span className="block text-sm font-bold leading-snug">{stay.name}</span>
              <span className="block text-xs mt-0.5 leading-snug">{stay.area}</span>
            </button>
          );
        })}
      </div>

      {offered.length > FIRST_SHOWN && (
        <button
          type="button"
          onClick={() => setShowAll((s) => !s)}
          aria-expanded={showAll}
          className="text-sm font-semibold underline underline-offset-2 mb-4"
          style={{ color: "var(--forest)" }}
        >
          {showAll ? "Show fewer stays" : `Show all ${offered.length} stays`}
        </button>
      )}

      {/* Every stay stays in the HTML, so search engines see all of them. */}
      {choice.stays.map((stay) => {
        const photos = stay.photos ?? [];
        return (
          <article
            key={stay.id}
            hidden={stay.id !== picked?.id}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(74,41,18,0.15)", background: "#fff" }}
          >
            {photos.length > 0 && <StayGallery name={stay.name} photos={photos} />}
            <div className="p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--gold)" }}>
                {stay.type}
              </p>
              <h4
                className="text-xl font-extrabold mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
              >
                {stay.name}
              </h4>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--forest)" }}>
                {stay.area}
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--ink)" }}>
                {stay.about}
              </p>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--ink)" }}>
                What you can do here
              </p>
              <ul className="list-disc pl-5 space-y-1 text-base" style={{ color: "var(--ink)" }}>
                {stay.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/** "Choose where you sleep": lodges for each stop, offered by comfort level. */
export default function StayChooser({ levels, border }: { levels: ComfortLevel[]; border: string }) {
  const { levelId, setLevelId, choices } = useTripChoices();

  return (
    <section id="stays" className="py-10 border-b scroll-mt-24" style={{ borderColor: border }}>
      <h2
        className="text-2xl md:text-3xl font-extrabold mb-3"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        Choose where you&apos;ll sleep
      </h2>
      <p className="text-base leading-relaxed mb-5" style={{ color: "var(--ink)" }}>
        Pick your comfort level, then choose a stay for each part of the route. Your choices go
        with your booking request. Ombeni confirms availability and your final price, and
        suggests a similar stay if one is full.
      </p>

      <div className="flex flex-wrap gap-2 mb-8" role="radiogroup" aria-label="Comfort level for stays">
        {levels.map((l) => {
          const on = l.id === levelId;
          return (
            <button
              key={l.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => setLevelId(l.id)}
              className="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
              style={
                on
                  ? { background: "var(--forest)", color: "var(--paper)" }
                  : { background: "var(--snow)", color: "var(--ink)" }
              }
            >
              {l.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-10">
        {choices.map((choice) => (
          <Stop key={choice.id} choice={choice} />
        ))}
      </div>
    </section>
  );
}
