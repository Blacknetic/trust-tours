"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ADD_ONS, addOnPriceLabel } from "@/data/addons";
import { COUNTRIES } from "@/data/countries";
import { RATES } from "@/data/safaris/shared";
import type { QuoteContext } from "@/components/QuoteModal";
import { trackEvent } from "@/lib/gtag";
import { waSummary, WA_FALLBACK } from "@/lib/quote-message";

// The "Request a quote" journey. It asks only what the page it opened from
// doesn't already know, so a visitor on a trip page skips the trip questions,
// and answers from the booking box arrive already filled in.

type TripType = "safari" | "kilimanjaro" | "zanzibar" | "other";
type StepId = "tailor" | "type" | "who" | "when" | "duration" | "comfort" | "experience" | "budget" | "extras" | "contact";

const TRIP_TYPES: { id: TripType; label: string; image: string; alt: string }[] = [
  { id: "safari", label: "Safari", image: "/images/safaris/tarangire-elephants-vehicle.jpg", alt: "Guests watching elephants from a safari vehicle" },
  { id: "kilimanjaro", label: "Kilimanjaro", image: "/images/kilimanjaro-summit-sign.jpg", alt: "Climbers at the Kilimanjaro summit sign" },
  { id: "zanzibar", label: "Zanzibar", image: "/images/zanzibar-beach.jpg", alt: "A white sand beach in Zanzibar" },
  { id: "other", label: "Other tours", image: "/images/lengai-sunrise.jpg", alt: "Sunrise over Ol Doinyo Lengai" },
];

// Ways to extend a trip: offered first on trip pages, with the visitor's own
// kind of trip left out. These replace the same add-ons in the extras step.
const TAILOR = [
  { id: "safari", label: "Add a safari", image: "/images/safaris/tarangire-elephants-vehicle.jpg", alt: "Guests watching elephants from a safari vehicle", addOn: "safari-extension" },
  { id: "kilimanjaro", label: "Add Kilimanjaro", image: "/images/kilimanjaro-summit-sign.jpg", alt: "Climbers at the Kilimanjaro summit sign", addOn: "kilimanjaro-extension" },
  { id: "zanzibar", label: "Add Zanzibar", image: "/images/zanzibar-beach.jpg", alt: "A white sand beach in Zanzibar", addOn: "zanzibar-extension" },
  { id: "cultural", label: "Add a cultural experience", image: "/images/maasai-dance.jpg", alt: "Two guests in traditional red Maasai cloth", addOn: "cultural-visit" },
];

// Extras for a visitor who hasn't picked a trip yet, by the kind they chose.
const generalExtra = (id: string, label?: string) => ({
  id,
  label: label ?? ADD_ONS[id].label,
  price: addOnPriceLabel(ADD_ONS[id]),
});

const GENERAL_EXTRAS: Partial<Record<TripType, { id: string; label: string; price: string }[]>> = {
  safari: [
    generalExtra("balloon-safari"),
    generalExtra("zanzibar-extension"),
    generalExtra("kilimanjaro-extension"),
    generalExtra("cultural-visit"),
  ],
  kilimanjaro: [
    generalExtra("safari-extension"),
    generalExtra("zanzibar-extension"),
    generalExtra("gear-rental"),
    generalExtra("extra-hotel-night"),
  ],
  zanzibar: [generalExtra("safari-extension", "Add a safari"), generalExtra("cultural-visit")],
};

const WHO = [
  { id: "solo", label: "Solo", people: 1 },
  { id: "partner", label: "Partner", people: 2 },
  { id: "family", label: "Family", people: 3 },
  { id: "group", label: "Group", people: 4 },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DURATIONS: Record<TripType, { id: string; note: string; recommended?: boolean }[]> = {
  safari: [
    { id: "2 to 3 days", note: "A short safari getaway" },
    { id: "4 to 6 days", note: "Tanzania's safari highlights" },
    { id: "7 to 9 days", note: "The classic safari experience", recommended: true },
    { id: "10+ days", note: "The ultimate safari adventure" },
  ],
  kilimanjaro: [
    { id: "5 to 6 days", note: "Shorter routes for fit hikers" },
    { id: "7 days", note: "A balanced climb" },
    { id: "8 to 9 days", note: "More time to acclimatise", recommended: true },
    { id: "Climb + safari", note: "Add wildlife after the summit" },
  ],
  zanzibar: [
    { id: "3 to 4 days", note: "A short beach escape" },
    { id: "5 to 7 days", note: "Time to really unwind", recommended: true },
    { id: "8+ days", note: "A long island holiday" },
    { id: "Safari + beach", note: "Combine the bush and the beach" },
  ],
  other: [
    { id: "1 to 3 days", note: "A short adventure" },
    { id: "4 to 6 days", note: "Time to explore" },
    { id: "7+ days", note: "A longer journey" },
    { id: "Not sure yet", note: "We'll help you decide" },
  ],
};

const BUDGETS: Record<TripType, string[]> = {
  safari: ["Under $2,500", "$2,500–$4,000", "$4,000–$6,000", "$6,000+"],
  kilimanjaro: ["Under $3,000", "$3,000–$4,000", "$4,000–$6,000", "$6,000+"],
  zanzibar: ["Under $1,500", "$1,500–$3,000", "$3,000–$5,000", "$5,000+"],
  other: ["Under $1,000", "$1,000–$2,500", "$2,500–$5,000", "$5,000+"],
};

const EXPERIENCE = [
  { id: "First time at altitude", note: "We'll suggest a longer, gentler route" },
  { id: "Some hiking experience", note: "Day hikes and a few mountains" },
  { id: "Experienced at altitude", note: "You've trekked above 3,000 m" },
];

const COMFORT = [
  { label: "Mid-range", stars: 3, perDay: RATES.midRange },
  { label: "Luxury", stars: 4, perDay: RATES.luxury },
  { label: "High-end luxury", stars: 5, perDay: RATES.highEnd },
  { label: "Ultra-premium", stars: 5, perDay: RATES.ultra },
];

const HIGH_SEASON: Record<TripType, number[]> = {
  safari: [0, 1, 5, 6, 7, 8, 9],
  kilimanjaro: [0, 1, 2, 5, 6, 7, 8, 9],
  zanzibar: [0, 1, 5, 6, 7, 8, 9, 11],
  other: [0, 1, 5, 6, 7, 8, 9],
};

const usd = (n: number) => `$${n.toLocaleString()}`;

const inputCls = "w-full rounded-xl px-4 py-3 text-sm";
const inputStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(26, 26, 22,0.15)",
  color: "var(--ink)",
};

function Check() {
  return (
    <span
      className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center"
      style={{ background: "var(--forest)", color: "var(--paper)" }}
      aria-hidden="true"
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

/** A selectable card: every choice in the journey is one of these. */
function Choice({
  selected,
  onClick,
  disabled,
  pill,
  className = "",
  children,
}: {
  selected: boolean;
  onClick: () => void;
  disabled?: boolean;
  /** Small text-only choices: filled when selected, as a tick would cover the text. */
  pill?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl text-center transition-all hover:shadow-md disabled:opacity-40 disabled:hover:shadow-none ${className}`}
      style={{
        background: selected ? (pill ? "var(--forest)" : "rgba(74,41,18,0.06)") : "#fff",
        border: `2px solid ${selected ? "var(--forest)" : "rgba(74,41,18,0.14)"}`,
        color: selected && pill ? "var(--paper)" : "var(--ink)",
      }}
    >
      {selected && !pill && <Check />}
      {children}
    </button>
  );
}

/** Simple figures for the travel party: one for Solo up to four for Group. */
function People({ count }: { count: number }) {
  return (
    <span className="flex justify-center items-end gap-0.5 h-14 mb-2" style={{ color: "var(--forest)" }} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="26" height={i === 2 && count === 3 ? 34 : 44} viewBox="0 0 24 44" fill="currentColor">
          <circle cx="12" cy="7" r="6" />
          <path d="M3 44V21a9 8 0 0 1 18 0v23z" />
        </svg>
      ))}
    </span>
  );
}

function Stepper({
  label,
  value,
  min,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  onChange: (n: number) => void;
}) {
  const buttonCls = "w-9 h-9 rounded-full text-xl font-bold flex items-center justify-center disabled:opacity-30";
  const buttonStyle = { border: "1px solid rgba(74,41,18,0.3)", color: "var(--forest)" };
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>{label}</span>
      <button type="button" onClick={() => onChange(value - 1)} disabled={value <= min} aria-label={`Fewer ${label.toLowerCase()}`} className={buttonCls} style={buttonStyle}>−</button>
      <span className="w-6 text-center font-semibold tabular-nums" style={{ color: "var(--ink)" }} aria-live="polite">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} aria-label={`More ${label.toLowerCase()}`} className={buttonCls} style={buttonStyle}>+</button>
    </div>
  );
}

// With no `onClose`, the journey sits in the page rather than in the pop-up.
export default function QuoteWizard({ ctx, onClose }: { ctx: QuoteContext; onClose?: () => void }) {
  const { trip, known } = ctx;
  const [now] = useState(() => new Date());
  const [renderedAt] = useState(() => Date.now());
  const years = [now.getFullYear(), now.getFullYear() + 1, now.getFullYear() + 2];

  // A month picked in the booking box means its next occurrence.
  const knownMonth = known?.month ? MONTHS.indexOf(known.month) : -1;
  const travellers = known?.travellers;

  const [type, setType] = useState<TripType | "">(ctx.tripType ?? "");
  const [who, setWho] = useState(
    travellers === 1 ? "solo" : travellers === 2 ? "partner" : travellers ? "group" : "",
  );
  const [adults, setAdults] = useState(travellers && travellers > 2 ? travellers : 2);
  const [children, setChildren] = useState(0);
  const [when, setWhen] = useState(
    knownMonth >= 0 ? String(knownMonth >= now.getMonth() ? years[0] : years[1]) : "",
  );
  const [month, setMonth] = useState(knownMonth);
  const [exactDate, setExactDate] = useState("");
  const [duration, setDuration] = useState("");
  const [comfort, setComfort] = useState(known?.level ?? "");
  const [experience, setExperience] = useState("");
  const [budget, setBudget] = useState("");
  const [extras, setExtras] = useState<string[]>([]);
  const [combine, setCombine] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [preferred, setPreferred] = useState("WhatsApp");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const tailorOptions = TAILOR.filter((o) => o.id !== (ctx.tripType ?? type));
  const extraOptions = useMemo(
    () =>
      trip
        ? (trip.addOns ?? []).filter((a) => !TAILOR.some((o) => o.addOn === a.id))
        : (GENERAL_EXTRAS[type as TripType] ?? []),
    [trip, type],
  );

  const steps = useMemo(() => {
    // A booking has already been chosen in the box, so it only confirms the rest.
    if (known) return (known.date ? ["who", "contact"] : ["who", "when", "contact"]) as StepId[];
    const list: StepId[] = [];
    if (trip) list.push("tailor");
    if (!ctx.tripType) list.push("type");
    list.push("who", "when");
    if (!trip) list.push("duration");
    list.push(type === "kilimanjaro" ? "experience" : "comfort");
    if (!trip) list.push("budget");
    if (extraOptions.length > 0) list.push("extras");
    list.push("contact");
    return list;
  }, [ctx.tripType, trip, type, known, extraOptions]);

  const [index, setIndex] = useState(0);
  const step = steps[Math.min(index, steps.length - 1)];
  const position = steps.indexOf(step) + 1;
  const tripLabel = trip?.shortName ?? ctx.tripName;
  const kind = type || "safari";

  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstStep = useRef(true);
  useEffect(() => {
    // On a page, focusing the first step would jump the visitor down to it.
    if (firstStep.current && !onClose) {
      firstStep.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step, onClose]);

  const hasWhen =
    when === "flexible" || (when === "dates" ? exactDate !== "" : when !== "" && month >= 0);
  const canContinue = {
    tailor: true,
    type: type !== "",
    who: who !== "",
    when: hasWhen,
    duration: duration !== "",
    comfort: comfort !== "",
    experience: experience !== "",
    budget: budget !== "",
    extras: true,
    contact: true,
  }[step];

  function chooseWho(id: string) {
    setWho(id);
    if (id === "family") {
      setAdults(2);
      setChildren((c) => c || 1);
    } else if (id === "group") {
      setAdults((a) => (a > 2 ? a : 4));
      setChildren(0);
    } else {
      setChildren(0);
    }
  }

  const party =
    who === "solo"
      ? "1 adult"
      : who === "partner"
        ? "2 adults"
        : [`${adults} adults`, children > 0 && `${children} ${children === 1 ? "child" : "children"}`]
            .filter(Boolean)
            .join(", ");

  const travelTime = known?.date
    ? known.date
    : when === "flexible"
      ? "Flexible"
      : when === "dates"
        ? exactDate
        : month >= 0
          ? `${MONTHS[month]} ${when}`
          : "";

  const typeLabel = TRIP_TYPES.find((t) => t.id === type)?.label ?? "";
  const extraLabels = extraOptions.filter((a) => extras.includes(a.id)).map((a) => a.label);
  const combineLabels = tailorOptions.filter((o) => combine.includes(o.id)).map((o) => o.label.replace(/^Add (a |an )?/, ""));

  const partySize = who === "solo" ? 1 : who === "partner" ? 2 : adults + children;
  const booking = known?.describe(partySize);

  const summary = [
    { step: "type" as StepId, label: "Trip", value: tripLabel ?? typeLabel },
    { step: "tailor" as StepId, label: "Combine with", value: combineLabels.join(", ") },
    { step: "who" as StepId, label: "Travellers", value: party },
    { step: "when" as StepId, label: "When", value: travelTime },
    { step: "duration" as StepId, label: "Length", value: trip ? `${trip.days} days` : duration },
    { step: "comfort" as StepId, label: "Comfort", value: comfort },
    { step: "experience" as StepId, label: "Experience", value: experience },
    { step: "budget" as StepId, label: "Budget", value: budget === "Not sure yet" ? budget : budget && `${budget} per person` },
    { step: "extras" as StepId, label: "Extras", value: extraLabels.join(", ") },
    ...(known?.stays ?? []).map((s) => ({ step: "comfort" as StepId, label: s.nights, value: s.name })),
    { step: "extras" as StepId, label: "Add-ons", value: known?.addOns?.join(", ") ?? "" },
  ].filter((row) => row.value);

  function monthNote(m: number) {
    if (m < 0) return null;
    const short = MONTHS[m].slice(0, 3);
    if (trip?.bestMonths?.length) {
      return trip.bestMonths.includes(short)
        ? { text: "Best time for this trip", good: true }
        : { text: `Best from ${trip.bestMonths[0]} to ${trip.bestMonths[trip.bestMonths.length - 1]}`, good: false };
    }
    if (m === 3 || m === 4) return { text: "Rainy season, with fewer visitors", good: false };
    return HIGH_SEASON[kind].includes(m)
      ? { text: "High season", good: true }
      : { text: "Quieter season", good: false };
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    const lines = [
      ...(booking?.lines ?? []),
      `Travellers: ${party}`,
      `When: ${travelTime}`,
      combineLabels.length > 0 && `Combine with: ${combineLabels.join(", ")}`,
      duration && `Length: ${duration}`,
      experience && `Hiking experience: ${experience}`,
      budget && `Budget per person: ${budget}`,
      extraLabels.length > 0 && `Extras: ${extraLabels.join(", ")}`,
      notes.trim() && `Notes: ${notes.trim()}`,
    ].filter(Boolean);
    const data: Record<string, string> = {
      ...form,
      preferred,
      tripType: type || "other",
      ...(ctx.tripName ? { tripName: ctx.tripName } : {}),
      priority: comfort,
      travelMonth: travelTime,
      groupSize: party,
      message: lines.join("\n"),
      ts: String(renderedAt),
    };

    // Opened inside the click: browsers block window.open() after an await.
    let waWindow: Window | null = null;
    if (preferred === "WhatsApp") {
      waWindow = window.open("about:blank", "_blank");
      if (waWindow) waWindow.document.write("Connecting you to WhatsApp…");
    }

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      trackEvent("inquiry_submit", { trip_type: data.tripType, preferred_contact: preferred, trip_name: ctx.tripName });
      if (preferred === "WhatsApp") {
        const url = waSummary(data);
        if (waWindow) waWindow.location.href = url;
        else window.open(url, "_blank", "noopener,noreferrer");
      }
    } catch {
      setStatus("error");
      waWindow?.close();
    }
  }

  if (status === "sent") {
    return (
      <div className="px-6 sm:px-10 py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--forest)" }}>
          Asante! Your request is on its way.
        </h2>
        <p className="text-base mx-auto mb-7" style={{ color: "var(--ink)" }}>
          Ombeni will get back to you with a tailored quote, usually within a day.
        </p>
        {onClose && (
          <button type="button" onClick={onClose} className="px-8 py-3 rounded-full font-semibold" style={{ background: "var(--gold)", color: "var(--ink)" }}>
            Close
          </button>
        )}
      </div>
    );
  }

  const question: Record<StepId, string> = {
    type: "What kind of trip are you dreaming of?",
    tailor: `Let's tailor your ${trip?.noun ?? "trip"}`,
    who: "Who will you be travelling with?",
    when: "When would you like to travel?",
    duration: kind === "kilimanjaro" ? "How long would you like to climb?" : "How long would you like to travel?",
    comfort: "What is your preferred comfort level?",
    experience: "Have you hiked at altitude before?",
    budget: "What's your budget per person?",
    extras: "Would you like to add anything?",
    contact: known ? "Review your booking" : "Just a few more details",
  };
  const note = monthNote(month);

  return (
    <div className="@container px-5 sm:px-10 pt-7 pb-7">
      {/* Progress */}
      <div className={`flex items-center justify-between gap-4 mb-2 text-sm ${onClose ? "pr-8" : ""}`} style={{ color: "var(--ink)" }}>
        <p className="mb-0">
          <strong>Step {position}</strong> <span style={{ opacity: 0.65 }}>out of {steps.length}</span>
        </p>
        <p className="hidden sm:block mb-0 text-xs font-semibold" style={{ color: "var(--gold)" }}>
          Takes about 2 minutes
        </p>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden mb-6"
        style={{ background: "var(--sand)" }}
        role="progressbar"
        aria-label="Quote progress"
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuenow={position}
      >
        <div className="h-full rounded-full transition-all duration-300" style={{ width: `${(position / steps.length) * 100}%`, background: "var(--forest)" }} />
      </div>

      {tripLabel && (
        <p className="w-fit mx-auto mb-3 rounded-lg px-3 py-1.5 text-center text-xs" style={{ background: "var(--snow)", color: "var(--ink)" }}>
          Your trip: <strong>{tripLabel}</strong>
        </p>
      )}
      <h2
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl sm:text-3xl font-extrabold text-center mb-7 outline-none"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)", lineHeight: 1.15 }}
      >
        {question[step]}
      </h2>

      {step === "tailor" && (
        <>
          <p className="text-center text-sm mx-auto -mt-4 mb-6" style={{ color: "var(--ink)" }}>
            Would you like to make your trip even more memorable? Choose as many as you like.
          </p>
          <div className="grid grid-cols-2 @xl:grid-cols-4 gap-3">
            <Choice selected={combine.length === 0} onClick={() => setCombine([])}>
              <span className="relative block aspect-[4/3] sm:aspect-square" style={{ background: "var(--snow)" }}>
                <Image src="/images/serengeti-plains.jpg" alt="Herds grazing on green plains" fill sizes="(max-width: 640px) 45vw, 170px" className="object-cover" />
              </span>
              <span className="block px-2 py-3 text-sm font-bold">Just this {trip?.noun ?? "trip"}</span>
            </Choice>
            {tailorOptions.map((o) => (
              <Choice
                key={o.id}
                selected={combine.includes(o.id)}
                onClick={() => setCombine((c) => (c.includes(o.id) ? c.filter((i) => i !== o.id) : [...c, o.id]))}
              >
                <span className="relative block aspect-[4/3] sm:aspect-square" style={{ background: "var(--snow)" }}>
                  <Image src={o.image} alt={o.alt} fill sizes="(max-width: 640px) 45vw, 170px" className="object-cover" />
                </span>
                <span className="block px-2 py-3 text-sm font-bold">{o.label}</span>
              </Choice>
            ))}
          </div>
        </>
      )}

      {step === "type" && (
        <div className="grid grid-cols-2 @xl:grid-cols-4 gap-3">
          {TRIP_TYPES.map((t) => (
            <Choice key={t.id} selected={type === t.id} onClick={() => setType(t.id)}>
              <span className="relative block aspect-[4/3] sm:aspect-square" style={{ background: "var(--snow)" }}>
                <Image src={t.image} alt={t.alt} fill sizes="(max-width: 640px) 45vw, 170px" className="object-cover" />
              </span>
              <span className="block py-3 text-sm font-bold uppercase tracking-wide">{t.label}</span>
            </Choice>
          ))}
        </div>
      )}

      {step === "who" && (
        <>
          <div className="grid grid-cols-2 @xl:grid-cols-4 gap-3">
            {WHO.map((w) => (
              <Choice key={w.id} selected={who === w.id} onClick={() => chooseWho(w.id)} className="pt-5 pb-3">
                <People count={w.people} />
                <span className="block text-sm font-bold uppercase tracking-wide">{w.label}</span>
              </Choice>
            ))}
          </div>
          {(who === "family" || who === "group") && (
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-6">
              <Stepper label="Adults" value={adults} min={1} onChange={setAdults} />
              <Stepper label="Children" value={children} min={0} onChange={setChildren} />
            </div>
          )}
        </>
      )}

      {step === "when" && (
        <>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              { id: "dates", label: "Specific dates" },
              ...years.map((y) => ({ id: String(y), label: String(y) })),
              { id: "flexible", label: "I'm flexible" },
            ].map((o) => (
              <Choice key={o.id} pill selected={when === o.id} onClick={() => setWhen(o.id)} className="px-5 py-3 text-sm font-semibold">
                {o.label}
              </Choice>
            ))}
          </div>
          {when === "dates" && (
            <div className="max-w-xs mx-auto mt-6">
              <label htmlFor="quote-date" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ink)" }}>
                Your start date
              </label>
              <input
                id="quote-date"
                type="date"
                value={exactDate}
                min={now.toISOString().slice(0, 10)}
                onChange={(e) => setExactDate(e.target.value)}
                className={inputCls}
                style={inputStyle}
              />
            </div>
          )}
          {years.map(String).includes(when) && (
            <div className="mt-6">
              <p className="text-center text-sm font-semibold mx-auto mb-3" style={{ color: "var(--ink)" }}>
                Select a month
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {MONTHS.map((m, i) => (
                  <Choice
                    key={m}
                    pill
                    selected={month === i}
                    disabled={when === String(now.getFullYear()) && i < now.getMonth()}
                    onClick={() => setMonth(i)}
                    className="px-4 py-2 text-sm font-semibold"
                  >
                    {m}
                  </Choice>
                ))}
              </div>
              {note && (
                <p className="text-center text-sm mx-auto mt-4" aria-live="polite" style={{ color: "var(--ink)" }}>
                  <span className="font-semibold">{MONTHS[month]}</span>{" "}
                  <span
                    className="inline-block ml-1 rounded-full px-3 py-1 text-xs font-semibold"
                    style={note.good ? { background: "var(--forest)", color: "var(--paper)" } : { background: "var(--sand)", color: "var(--ink)" }}
                  >
                    {note.text}
                  </span>
                </p>
              )}
            </div>
          )}
        </>
      )}

      {step === "duration" && (
        <div className="grid grid-cols-2 @xl:grid-cols-4 gap-3 pt-2">
          {DURATIONS[kind].map((d) => (
            <Choice key={d.id} selected={duration === d.id} onClick={() => setDuration(d.id)} className="px-3 pt-6 pb-4 !overflow-visible">
              {d.recommended && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded px-2 py-0.5 text-xs font-semibold whitespace-nowrap" style={{ background: "var(--forest)", color: "var(--paper)" }}>
                  Recommended
                </span>
              )}
              <span className="block text-base font-bold mb-1">{d.id}</span>
              <span className="block text-xs leading-snug">{d.note}</span>
            </Choice>
          ))}
        </div>
      )}

      {step === "comfort" && (
        <div className="grid grid-cols-2 @xl:grid-cols-4 gap-3">
          {COMFORT.map((c) => {
            const level = trip?.levels?.find((l) => l.label === c.label);
            const price = level
              ? `From ${usd(level.fromUSD)} per person`
              : !trip && kind === "safari"
                ? `${usd(c.perDay.min)}–${usd(c.perDay.max)} per day`
                : null;
            return (
              <Choice key={c.label} selected={comfort === c.label} onClick={() => setComfort(c.label)} className="px-3 py-5">
                <span className="block text-sm tracking-wide mb-2" style={{ color: "var(--gold)" }} aria-hidden="true">
                  {"★".repeat(c.stars)}
                </span>
                <span className="block text-sm font-bold uppercase tracking-wide">{c.label}</span>
                {price && <span className="block text-xs mt-1.5 leading-snug">{price}</span>}
              </Choice>
            );
          })}
        </div>
      )}

      {step === "experience" && (
        <div className="grid grid-cols-1 @xl:grid-cols-3 gap-3">
          {EXPERIENCE.map((x) => (
            <Choice key={x.id} selected={experience === x.id} onClick={() => setExperience(x.id)} className="px-4 py-5">
              <span className="block text-sm font-bold mb-1">{x.id}</span>
              <span className="block text-xs leading-snug">{x.note}</span>
            </Choice>
          ))}
        </div>
      )}

      {step === "budget" && (
        <>
          <p className="text-center text-sm mx-auto -mt-4 mb-6" style={{ color: "var(--ink)" }}>
            A rough estimate is fine. Please exclude international flights.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {BUDGETS[kind].map((b) => (
              <Choice key={b} pill selected={budget === b} onClick={() => setBudget(b)} className="px-5 py-3 text-sm font-semibold">
                {b}
              </Choice>
            ))}
          </div>
          <div className="text-center mt-4">
            <button type="button" onClick={() => setBudget("Not sure yet")} className="text-sm font-semibold underline underline-offset-2" style={{ color: "var(--forest)" }}>
              Not sure yet
            </button>
          </div>
        </>
      )}

      {step === "extras" && (
        <>
          <p className="text-center text-sm mx-auto -mt-4 mb-6" style={{ color: "var(--ink)" }}>
            Optional. Tick anything you&apos;d like us to include in your quote.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {extraOptions.map((a) => (
              <Choice
                key={a.id}
                pill
                selected={extras.includes(a.id)}
                onClick={() => setExtras((x) => (x.includes(a.id) ? x.filter((i) => i !== a.id) : [...x, a.id]))}
                className="px-5 py-3 text-sm font-semibold"
              >
                {a.label}
                <span className="block text-xs font-normal mt-0.5">{a.price}</span>
              </Choice>
            ))}
          </div>
        </>
      )}

      {step === "contact" && (
        <form id="quote-contact" onSubmit={submit} className="space-y-4">
          <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
            <label>
              Leave this field empty
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="rounded-2xl px-5 py-4" style={{ background: "var(--snow)" }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--forest)" }}>
              {known ? "Your booking" : "Your trip summary"}
            </p>
            <ul className="space-y-1">
              {summary.map((row) => (
                <li key={row.label} className="flex items-baseline gap-3 text-sm" style={{ color: "var(--ink)" }}>
                  <span className="w-24 flex-shrink-0" style={{ opacity: 0.7 }}>{row.label}</span>
                  <span className="flex-1 min-w-0 font-semibold">{row.value}</span>
                  {(steps.includes(row.step) || (known && onClose)) && row.label !== "Trip" && row.label !== "Length" && (
                    <button
                      type="button"
                      // Stays, level and add-ons are chosen on the page, so go back there.
                      onClick={() => (steps.includes(row.step) ? setIndex(steps.indexOf(row.step)) : onClose?.())}
                      className="text-xs underline"
                      style={{ color: "var(--forest)" }}
                    >
                      Edit<span className="sr-only"> {row.label.toLowerCase()}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
            {known && (
              <p className="flex items-baseline justify-between gap-3 mx-0 max-w-none mt-3 pt-3 text-sm font-bold" style={{ borderTop: "1px solid rgba(26,26,22,0.12)", color: "var(--ink)" }}>
                {booking?.total != null ? (
                  <>
                    <span>Estimated total from</span>
                    <span className="tabular-nums">{usd(booking.total)}</span>
                  </>
                ) : (
                  <span>Ombeni will quote your group</span>
                )}
              </p>
            )}
          </div>

          {known && (
            <div>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--ink)" }}>What happens next</p>
              <ol className="grid grid-cols-1 @xl:grid-cols-3 gap-2 text-sm" style={{ color: "var(--ink)" }}>
                <li className="rounded-xl px-3.5 py-3" style={{ border: "1px solid rgba(74,41,18,0.15)" }}>
                  <strong className="block">1. No payment now</strong>
                  Sending this request costs nothing.
                </li>
                <li className="rounded-xl px-3.5 py-3" style={{ border: "1px solid rgba(74,41,18,0.15)" }}>
                  <strong className="block">2. Written quote</strong>
                  Ombeni confirms availability and your final price.
                </li>
                <li className="rounded-xl px-3.5 py-3" style={{ border: "1px solid rgba(74,41,18,0.15)" }}>
                  <strong className="block">3. Secure your dates</strong>
                  You pay a deposit to confirm your booking.
                </li>
              </ol>
            </div>
          )}

          <div>
            <label htmlFor="quote-notes" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ink)" }}>
              {known ? "Anything Ombeni should know?" : "Tell us about your ideal trip"} <span className="font-normal" style={{ opacity: 0.7 }}>(optional)</span>
            </label>
            <textarea
              id="quote-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={known ? "Dietary needs, a special occasion or flight times." : "Ideas, interests or a special occasion. The more we know, the better we can tailor your journey."}
              className={`${inputCls} resize-y`}
              style={inputStyle}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="firstName" required aria-label="First name" placeholder="First name" autoComplete="given-name" className={inputCls} style={inputStyle} />
            <input name="lastName" required aria-label="Last name" placeholder="Last name" autoComplete="family-name" className={inputCls} style={inputStyle} />
            <input name="email" type="email" required aria-label="Email" placeholder="Email" autoComplete="email" className={inputCls} style={inputStyle} />
            <input name="phone" type="tel" required aria-label="Phone with country code" placeholder="Phone, e.g. +1 555 000 0000" autoComplete="tel" className={inputCls} style={inputStyle} />
          </div>
          <select name="nationality" required defaultValue="" aria-label="Nationality" className={inputCls} style={inputStyle}>
            <option value="" disabled>Select your nationality</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <fieldset>
            <legend className="block text-sm font-semibold mx-auto mb-2 text-center" style={{ color: "var(--ink)" }}>
              How would you prefer us to contact you?
            </legend>
            <div className="flex flex-wrap justify-center gap-2">
              {["WhatsApp", "Email", "Phone call"].map((p) => (
                <Choice key={p} pill selected={preferred === p} onClick={() => setPreferred(p)} className="px-5 py-2 text-sm font-semibold">
                  {p}
                </Choice>
              ))}
            </div>
          </fieldset>

          {status === "error" && (
            <p className="text-sm rounded-xl px-4 py-3" style={{ background: "rgba(110, 59, 31, 0.1)", color: "var(--sunset)" }} role="alert">
              Something went wrong sending your request. Please{" "}
              <a href={WA_FALLBACK} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                message us on WhatsApp
              </a>{" "}
              instead. We reply fast there.
            </p>
          )}
        </form>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-end gap-3 mt-8">
        {position > 1 && (
          <button
            type="button"
            onClick={() => setIndex(position - 2)}
            aria-label="Previous step"
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ border: "1px solid rgba(74,41,18,0.35)", color: "var(--forest)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
        )}
        {step === "contact" ? (
          // The keys keep these two apart: reusing one element would let the click
          // on Next carry through and submit the form the moment it appears.
          <button
            key="submit"
            type="submit"
            form="quote-contact"
            disabled={status === "sending"}
            className="px-7 py-3 rounded-full font-semibold transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ background: "var(--forest)", color: "var(--paper)" }}
          >
            {status === "sending" ? "Sending…" : (ctx.submitLabel ?? (known ? "Send my booking request →" : "Get my free trip plan →"))}
          </button>
        ) : (
          <button
            key="next"
            type="button"
            onClick={() => setIndex(position)}
            disabled={!canContinue}
            className="px-8 py-3 rounded-full font-semibold transition-opacity hover:opacity-90 disabled:opacity-40"
            style={{ background: "var(--forest)", color: "var(--paper)" }}
          >
            Next
          </button>
        )}
      </div>

      {step === "contact" && (
        <p className="text-xs text-right mx-0 ml-auto mt-3" style={{ color: "var(--ink)", opacity: 0.7 }}>
          {known ? "No payment now." : "Free, with no obligation."} Ombeni usually replies within a day.
        </p>
      )}
    </div>
  );
}
