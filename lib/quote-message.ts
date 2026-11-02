// WhatsApp links for the quote journey.

const WA = "255785938860";

const TRIP_LABEL: Record<string, string> = {
  kilimanjaro: "Hiking Kilimanjaro / Meru",
  safari: "Safari",
  zanzibar: "Zanzibar",
  other: "Other tours",
};

export const WA_FALLBACK = `https://wa.me/${WA}?text=${encodeURIComponent(
  "Hi Ombeni! I tried the quote form but I'd rather chat here."
)}`;

// Builds a WhatsApp deep-link summarising the answers, for visitors who pick
// "WhatsApp" as their preferred reply channel.
export function waSummary(d: Record<string, string>): string {
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
