"use client";

import { useState } from "react";
import { COUNTRIES } from "@/data/countries";
import { trackEvent } from "@/lib/gtag";

const WA = "255785938860";

const MONTHS = [
  "Flexible", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const GROUP_SIZES = ["1", "2", "3–4", "5–8", "9+"];

const TRIP_TYPES = [
  { value: "kilimanjaro", label: "Hiking Kilimanjaro / Meru" },
  { value: "safari", label: "Safari" },
  { value: "zanzibar", label: "Zanzibar" },
] as const;

const PRIORITIES = [
  "Mid-range services",
  "Luxury services",
  "High-end / Ultra-premium services",
];

const PLANNING_PHASES = [
  "I'm at the beginning of the planning process",
  "We have dates — but nothing else is confirmed",
  "We have flights booked, but that's it",
  "We have flights and hotels booked",
];

const SOURCES = [
  "Search engine (Google, Yahoo, etc.)",
  "Advertisement",
  "Relative / friend",
  "Other",
];

const PREFERRED = ["WhatsApp", "Email", "Phone call"];

const TRIP_LABEL: Record<string, string> = {
  kilimanjaro: "Hiking Kilimanjaro / Meru",
  safari: "Safari",
  zanzibar: "Zanzibar",
};

const WA_FALLBACK = `https://wa.me/${WA}?text=${encodeURIComponent(
  "Hi Ombeni! I tried the inquiry form but I'd rather chat here."
)}`;

type Status = "idle" | "sending" | "sent" | "error";

const inputStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(26, 26, 22,0.15)",
  color: "var(--ink)",
};

interface InquiryFormProps {
  variant?: "page" | "modal";
  defaultMessage?: string;
  submitLabel?: string;
  defaultTripType?: "kilimanjaro" | "safari" | "zanzibar";
  tripName?: string;
  defaultTravelMonth?: string;
  defaultGroupSize?: string;
}

const labelCls = "block text-sm font-semibold mb-1.5";
const groupLabelCls = "block text-sm font-semibold mb-2";

export default function InquiryForm({
  variant = "page",
  defaultMessage,
  submitLabel,
  defaultTripType,
  tripName,
  defaultTravelMonth,
  defaultGroupSize,
}: InquiryFormProps = {}) {
  const [status, setStatus] = useState<Status>("idle");

  // When this form instance was rendered — the server rejects submissions that
  // arrive implausibly fast (a tell-tale sign of an automated bot).
  const [renderedAt] = useState(() => Date.now());

  // Controlled state for the pill/radio groups (drives both styling + value).
  const [tripType, setTripType] = useState<string>(defaultTripType ?? "");
  const [priority, setPriority] = useState("");
  const [phase, setPhase] = useState("");
  const [source, setSource] = useState("");
  const [preferred, setPreferred] = useState("Email");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // If they want to continue on WhatsApp, open the tab *now*, inside the
    // click gesture. Browsers block window.open() called later (after the
    // await), so we open a blank tab synchronously and redirect it to the
    // wa.me link once the send succeeds.
    let waWindow: Window | null = null;
    if (data.preferred === "WhatsApp") {
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
      trackEvent("inquiry_submit", {
        trip_type: data.tripType,
        preferred_contact: data.preferred,
        trip_name: data.tripName,
      });
      form.reset();

      // Hand the pre-opened tab the WhatsApp summary (or fall back to a fresh
      // window if the synchronous open was still blocked).
      if (data.preferred === "WhatsApp") {
        const url = waSummary(data);
        if (waWindow) waWindow.location.href = url;
        else window.open(url, "_blank", "noopener,noreferrer");
      }
    } catch {
      setStatus("error");
      waWindow?.close(); // nothing was sent — don't leave a stray blank tab
    }
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-2xl p-8 text-center"
        style={{ background: "var(--snow)", border: "1px solid rgba(26, 26, 22,0.08)" }}
      >
        <p
          className="text-xl font-extrabold mb-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--forest)" }}
        >
          Asante! Your request is on its way.
        </p>
        <p className="text-sm" style={{ color: "var(--ink)" }}>
          Ombeni will get back to you with a tailored quote — usually within a
          day. For a faster answer, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot — hidden from humans, bots fill it */}
      <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {tripName && <input type="hidden" name="tripName" value={tripName} />}
      <input type="hidden" name="ts" value={renderedAt} />

      {/* ── Name ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelCls} style={{ color: "var(--ink)" }}>
            First name
          </label>
          <input id="firstName" name="firstName" type="text" required autoComplete="given-name"
            className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelCls} style={{ color: "var(--ink)" }}>
            Last name
          </label>
          <input id="lastName" name="lastName" type="text" required autoComplete="family-name"
            className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle} />
        </div>
      </div>

      {/* ── Email + phone ────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelCls} style={{ color: "var(--ink)" }}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email"
            className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls} style={{ color: "var(--ink)" }}>
            Phone (international format)
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel"
            placeholder="+1 555 000 0000"
            className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle} />
        </div>
      </div>

      {/* ── Nationality ──────────────────────────────────────── */}
      <div>
        <label htmlFor="nationality" className={labelCls} style={{ color: "var(--ink)" }}>
          Nationality
        </label>
        <select id="nationality" name="nationality" required defaultValue=""
          className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle}>
          <option value="" disabled>Select your nationality</option>
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* ── Trip type (required) ─────────────────────────────── */}
      <fieldset>
        <legend className={groupLabelCls} style={{ color: "var(--ink)" }}>
          Is this booking for…
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TRIP_TYPES.map((t) => (
            <PillOption
              key={t.value}
              name="tripType"
              value={t.value}
              label={t.label}
              checked={tripType === t.value}
              onChange={setTripType}
              required
            />
          ))}
        </div>
      </fieldset>

      {/* ── Travel priorities (optional) ─────────────────────── */}
      <fieldset>
        <legend className={groupLabelCls} style={{ color: "var(--ink)" }}>
          What best describes your travel priorities?
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PRIORITIES.map((p) => (
            <PillOption
              key={p}
              name="priority"
              value={p}
              label={p}
              checked={priority === p}
              onChange={setPriority}
            />
          ))}
        </div>
      </fieldset>

      {/* ── When + group size ────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="travelMonth" className={labelCls} style={{ color: "var(--ink)" }}>
            When do you want to travel?
          </label>
          <select id="travelMonth" name="travelMonth" defaultValue={defaultTravelMonth ?? "Flexible"}
            className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle}>
            {MONTHS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="groupSize" className={labelCls} style={{ color: "var(--ink)" }}>
            Group size
          </label>
          <select id="groupSize" name="groupSize" defaultValue={defaultGroupSize ?? "2"}
            className="w-full rounded-xl px-4 py-3 text-sm" style={inputStyle}>
            {GROUP_SIZES.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Planning phase (optional) ────────────────────────── */}
      <fieldset>
        <legend className={groupLabelCls} style={{ color: "var(--ink)" }}>
          Where are you in the planning process?
        </legend>
        <div className="space-y-2.5">
          {PLANNING_PHASES.map((p) => (
            <PillOption
              key={p}
              name="planningPhase"
              value={p}
              label={p}
              checked={phase === p}
              onChange={setPhase}
              block
            />
          ))}
        </div>
      </fieldset>

      {/* ── How did you find us? (optional) ──────────────────── */}
      <fieldset>
        <legend className={groupLabelCls} style={{ color: "var(--ink)" }}>
          How did you find us?
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SOURCES.map((s) => (
            <PillOption
              key={s}
              name="source"
              value={s}
              label={s}
              checked={source === s}
              onChange={setSource}
            />
          ))}
        </div>
        {source === "Other" && (
          <input
            name="sourceOther"
            type="text"
            placeholder="Please specify"
            className="mt-3 w-full rounded-xl px-4 py-3 text-sm"
            style={inputStyle}
          />
        )}
      </fieldset>

      {/* ── Message (optional) ───────────────────────────────── */}
      <div>
        <label htmlFor="message" className={labelCls} style={{ color: "var(--ink)" }}>
          Anything else? <span className="font-normal opacity-70">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} defaultValue={defaultMessage}
          placeholder="Let us know if you have any questions or special requests."
          className="w-full rounded-xl px-4 py-3 text-sm resize-y" style={inputStyle} />
      </div>

      {/* ── Preferred contact (required) ─────────────────────── */}
      <fieldset>
        <legend className={groupLabelCls} style={{ color: "var(--ink)" }}>
          How would you prefer we reply?
        </legend>
        <div className="grid grid-cols-3 gap-3">
          {PREFERRED.map((p) => (
            <PillOption
              key={p}
              name="preferred"
              value={p}
              label={p}
              checked={preferred === p}
              onChange={setPreferred}
              required
            />
          ))}
        </div>
      </fieldset>

      {status === "error" && (
        <p
          className="text-sm rounded-xl px-4 py-3"
          style={{ background: "rgba(110, 59, 31, 0.1)", color: "var(--sunset)" }}
          role="alert"
        >
          Something went wrong sending your request. Please{" "}
          <a href={WA_FALLBACK} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            message us on WhatsApp
          </a>{" "}
          instead — we reply fast there.
        </p>
      )}

      <p className="text-xs" style={{ color: "var(--ink)", opacity: 0.7 }}>
        By sending, you agree to be contacted about your trip. No spam, ever.
        You&rsquo;re also booking direct with the operator, not a reseller —{" "}
        <a
          href="/guides/book-direct-vs-ota"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          here&rsquo;s why that matters
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`${variant === "modal" ? "w-full" : "w-full sm:w-auto"} px-8 py-4 rounded-full text-ink font-semibold text-base transition-opacity hover:opacity-90 disabled:opacity-50`}
        style={{ background: "var(--gold)" }}
      >
        {status === "sending" ? "Sending…" : (submitLabel ?? "Request my free quote")}
      </button>
    </form>
  );
}

// Builds a WhatsApp deep-link summarising the answers, for visitors who pick
// "WhatsApp" as their preferred reply channel.
function waSummary(d: Record<string, string>): string {
  const name = [d.firstName, d.lastName].filter(Boolean).join(" ").trim();
  const trip = d.tripName
    ? `${TRIP_LABEL[d.tripType] ?? d.tripType} — ${d.tripName}`
    : TRIP_LABEL[d.tripType] ?? d.tripType;
  const lines = [
    "Hi Ombeni! I just requested a quote on your website:",
    name && `• Name: ${name}`,
    trip && `• Interested in: ${trip}`,
    (d.travelMonth || d.groupSize) &&
      `• When: ${d.travelMonth || "flexible"} · Group: ${d.groupSize || "—"}`,
    d.priority && `• Priorities: ${d.priority}`,
    d.nationality && `• Nationality: ${d.nationality}`,
    d.message && `• Notes: ${d.message}`,
  ].filter(Boolean);
  return `https://wa.me/${WA}?text=${encodeURIComponent(lines.join("\n"))}`;
}

// A radio rendered as a selectable pill/card, matching the site's CTA styling.
function PillOption({
  name, value, label, checked, onChange, required, block,
}: {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: (v: string) => void;
  required?: boolean;
  block?: boolean;
}) {
  return (
    <label
      className={`flex items-center gap-2.5 cursor-pointer rounded-xl px-4 py-3 text-sm transition-colors ${block ? "w-full" : ""}`}
      style={{
        background: checked ? "rgba(138,90,50,0.12)" : "#fff",
        border: `1.5px solid ${checked ? "var(--gold)" : "rgba(26, 26, 22,0.15)"}`,
        color: "var(--ink)",
        fontWeight: checked ? 600 : 400,
      }}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        required={required}
        onChange={() => onChange(value)}
        className="accent-[var(--gold)]"
      />
      <span>{label}</span>
    </label>
  );
}
