// Shared pieces for the rebuilt calving-season safaris (data/safaris/*.ts).
// Content comes from Ombeni's documents (flash drive D:\mpya\calvining season,
// Oct 2026). Prices are draft until he reviews the live pages.

import type { ComfortLevel } from "@/lib/pricing";

// Ombeni's per-person, per-day ranges for 2 adults sharing a private vehicle.
// A change here reprices every trip built with comfortLevels().
const RATES = {
  midRange: { min: 455, max: 555 },
  luxury: { min: 755, max: 1200 },
  highEnd: { min: 1300, max: 2200 },
  ultra: { min: 2300, max: 5000 },
};

/** Priced for two adults only: other group sizes show "Ask" until Ombeni sends them. */
function perPerson(days: number, min: number) {
  return { tiers: [{ pax: 2, usd: min * days }], askSizes: [1, 3, 4, 5, 6] };
}

/** The four comfort levels for a trip of this length. */
export function comfortLevels(days: number): ComfortLevel[] {
  return [
    {
      id: "mid-range",
      label: "Mid-range",
      perDay: RATES.midRange,
      groupPricing: perPerson(days, RATES.midRange.min),
      summary:
        "A comfortable, well-organised safari with excellent wildlife viewing and good value, without paying for extensive luxury services.",
      includes: [
        "Comfortable 2–3-star lodges",
        "Quality tented accommodation where appropriate",
        "Private 4×4 safari vehicle",
        "Professional safari guide",
        "Full board",
        "Park and conservation fees",
        "Game drives",
        "Airport transfers",
      ],
    },
    {
      id: "luxury",
      label: "Luxury",
      perDay: RATES.luxury,
      groupPricing: perPerson(days, RATES.luxury.min),
      summary:
        "Upgraded lodges and premium tented camps with stylish interiors, excellent dining and attentive hospitality, while the safari stays focused on wildlife.",
      includes: [
        "Premium 4–5-star lodges and camps",
        "Prime-location accommodation where available",
        "Private 4×4 safari vehicle",
        "One-way flight from the Serengeti to Arusha or Zanzibar",
        "Highly experienced guide",
        "Swimming pool at the lodge",
        "Full board",
        "Park and conservation fees",
        "Private airport transfers",
        "More flexibility around the daily schedule",
      ],
      includedAddOns: ["serengeti-flight"],
    },
    {
      id: "high-end",
      label: "High-end luxury",
      perDay: RATES.highEnd,
      groupPricing: perPerson(days, RATES.highEnd.min),
      summary:
        "Exceptional camps and lodges with premium suites, refined cuisine and personal service, chosen for location and exclusivity.",
      includes: [
        "High-end luxury lodges and camps",
        "Private luxury safari vehicle",
        "Flights between the Serengeti and Arusha or Zanzibar, both ways",
        "Highly experienced private guide",
        "All-inclusive premium meals and service",
        "Flexible game-drive schedule",
        "Private airport transfers",
        "Private swimming pool",
        "Hot-air balloon safari",
        "Emergency assistance during the safari, including helicopter evacuation",
        "Priority accommodation selection where available",
      ],
      includedAddOns: ["serengeti-flight", "balloon-safari"],
    },
    {
      id: "ultra-premium",
      label: "Ultra-premium",
      perDay: RATES.ultra,
      groupPricing: perPerson(days, RATES.ultra.min),
      summary:
        "Created for special celebrations and discerning travellers. Inclusions are tailored to the property and flights you choose, because not every camp offers every service.",
      includes: [
        "Exceptional private suites or villas",
        "The highest level of personal hospitality",
        "Premium dining",
        "Bespoke guiding arrangements",
        "Private or charter-flight options",
      ],
      includedAddOns: ["serengeti-flight"],
    },
  ];
}
