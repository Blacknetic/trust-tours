// Indicative market prices for the gemstones guests see on our gem tours,
// presented as a buyer's reference, never as an offer for sale. Approved by
// Ombeni on 2026-11-18 (same figures as the Kilimanjaro Wings site).
//
// Ranges are from Ombeni's 2026 gemstone price notes (per carat; 1 g = 5 ct).
// His gem company's name, contacts and per-kg/per-ton mineral lists stay off
// the website. Swatch colours are decorative, close to each stone's colour.

export interface GemPrice {
  name: string;
  variety?: string;
  swatch: string;
  /** USD per carat: [from, to]; `plus` means top stones sell above the range. */
  carat: [number, number];
  plus?: boolean;
  note: string;
}

export const GEM_PRICES: GemPrice[] = [
  { name: "Tanzanite", variety: "Blue / violet", swatch: "#4b3fa8", carat: [50, 800], plus: true, note: "Mined only in Tanzania" },
  { name: "Tsavorite", variety: "Green garnet", swatch: "#1f8a4c", carat: [100, 1200], plus: true, note: "Premium green, high demand" },
  { name: "Spinel", variety: "Red / pink / blue", swatch: "#c2185b", carat: [50, 500], plus: true, note: "Demand rising worldwide" },
  { name: "Tourmaline", variety: "Multi-colour", swatch: "#2e9e8f", carat: [10, 500], plus: true, note: "Wide variety of colours" },
  { name: "Topaz", variety: "Blue / imperial", swatch: "#4fa3d1", carat: [5, 300], plus: true, note: "Value set by colour and treatment" },
  { name: "Aquamarine", variety: "Light blue", swatch: "#7fc8d8", carat: [20, 200], plus: true, note: "High clarity commands a premium" },
  { name: "Peridot", variety: "Green", swatch: "#9bbf2a", carat: [10, 80], note: "Bright green, good value" },
  { name: "Red garnet", variety: "Almandine / pyrope", swatch: "#8e1b2c", carat: [5, 50], note: "A jewellery favourite" },
  { name: "Iolite", variety: "Blue / violet", swatch: "#5b5fb5", carat: [5, 50], note: "Affordable sapphire alternative" },
  { name: "Amethyst", variety: "Purple quartz", swatch: "#8e5bb5", carat: [2, 20], note: "Popular and affordable" },
];

export const GEM_PRICE_NOTES = [
  "Indicative market prices in US dollars, for reference only and not an offer to sell. Trust Tours & Safaris offers gem tours; we don't sell gemstones.",
  "Every stone is priced on its colour, clarity, cut and origin, and Tanzanian stones often command more. 1 gram equals 5 carats.",
  "Only buy from licensed dealers, and keep your receipt, any certificate and the export documents.",
];
