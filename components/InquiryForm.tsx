"use client";

import { useState } from "react";

const MONTHS = [
  "Flexible", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I tried the inquiry form but I'd rather chat here."
)}`;

type Status = "idle" | "sending" | "sent" | "error";

const inputStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(26, 26, 22,0.15)",
  color: "var(--ink)",
};

interface InquiryFormProps {
  // Pre-fills the message box (e.g. a chosen group departure) and the submit label.
  defaultMessage?: string;
  submitLabel?: string;
}

export default function InquiryForm({ defaultMessage, submitLabel }: InquiryFormProps = {}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
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
          Asante! Your inquiry is on its way.
        </p>
        <p className="text-sm" style={{ color: "var(--ink)" }}>
          We typically reply within a day. For a faster answer, message us on
          WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from humans, bots fill it */}
      <div className="absolute opacity-0 -z-10 h-0 overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ink)" }}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl px-4 py-3 text-sm"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ink)" }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl px-4 py-3 text-sm"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="travelMonth" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ink)" }}>
            When do you want to travel?
          </label>
          <select
            id="travelMonth"
            name="travelMonth"
            className="w-full rounded-xl px-4 py-3 text-sm"
            style={inputStyle}
          >
            {MONTHS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="groupSize" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ink)" }}>
            Group size
          </label>
          <select
            id="groupSize"
            name="groupSize"
            className="w-full rounded-xl px-4 py-3 text-sm"
            style={inputStyle}
          >
            {["1", "2", "3–4", "5–8", "9+"].map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-1.5" style={{ color: "var(--ink)" }}>
          Tell us about your trip
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={defaultMessage}
          placeholder="Which trip interests you? Any dates in mind?"
          className="w-full rounded-xl px-4 py-3 text-sm resize-y"
          style={inputStyle}
        />
      </div>

      {status === "error" && (
        <p
          className="text-sm rounded-xl px-4 py-3"
          style={{ background: "rgba(110, 59, 31, 0.1)", color: "var(--sunset)" }}
          role="alert"
        >
          Something went wrong sending your inquiry. Please{" "}
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            message us on WhatsApp
          </a>{" "}
          instead — we reply fast there.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-8 py-4 rounded-full text-ink font-semibold text-base transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ background: "var(--gold)" }}
      >
        {status === "sending" ? "Sending…" : (submitLabel ?? "Get a free itinerary")}
      </button>
    </form>
  );
}
