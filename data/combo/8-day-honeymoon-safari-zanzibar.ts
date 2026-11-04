import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_TARANGIRE, stop } from "@/data/safaris/shared";
import { STAYS_ZANZIBAR_BEACH } from "@/data/zanzibar/shared";
import { comboTrip } from "./shared";
import {
  arrivalArusha,
  beachDay,
  craterThenSerengeti,
  flyToZanzibar,
  serengetiDay,
  stoneTownDay,
  tarangireDay,
  zanzibarDeparture,
} from "./days";

// From Ombeni's "8-Day Tanzania Honeymoon Safari & Zanzibar Beach Holiday".
// His own range ($3,500–$4,500 at Mid-range) is replaced by the standard daily
// rates, so the honeymoons rise in price with their length.
export const eightDayHoneymoon = comboTrip({
  kind: "honeymoon",
  slug: "8-day-honeymoon-safari-zanzibar",
  seoTitle: "8-Day Tanzania Honeymoon Safari & Zanzibar | Trust Tours",
  metaDescription:
    "A private honeymoon: Tarangire, the Ngorongoro Crater and two nights in the Serengeti, then a flight to Zanzibar for three nights on the beach.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
  title: "8-Day Honeymoon Safari & Zanzibar – Tarangire, the Crater, the Serengeti and the Beach",
  shortName: "8-Day Honeymoon Safari & Zanzibar",
  days: 8,
  heroImage: IMG.sunsetDrive.src,
  summary:
    "A private honeymoon from Tarangire's elephants to the Ngorongoro Crater and the Serengeti plains, finishing with three nights at a Zanzibar beach resort.",
  overview: [
    "Celebrate your marriage with a journey that brings together Tanzania's great wildlife and the romance of the Indian Ocean. You travel in your own vehicle with a private driver-guide, so every game drive moves at your pace.",
    "After a quiet first night in Arusha, you spend a day among Tarangire's elephants and baobabs, descend into the Ngorongoro Crater and continue to the Serengeti for two nights, with the option of a sunrise balloon flight.",
    "A short flight then takes you to Zanzibar for three nights at a beach resort: time to swim, rest and, if you like, explore Stone Town or sail at sunset.",
  ],
  atAGlance: [
    { label: "Duration", value: "8 days, 7 nights" },
    { label: "Start", value: "Kilimanjaro International Airport" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Safari", value: "Tarangire, the Ngorongoro Crater and 2 nights in the Serengeti" },
    { label: "Beach", value: "3 nights at a Zanzibar beach resort" },
    { label: "Style", value: "Private vehicle and driver-guide for the two of you" },
  ],
  highlights: [
    "Tarangire: Elephants and baobabs on your first game drive together.",
    "Ngorongoro Crater: A day on the floor of a vast volcanic caldera.",
    "The Serengeti: Two nights on the plains, with an optional balloon flight at sunrise.",
    "Zanzibar: Three nights of white sand, warm sea and quiet evenings.",
    "Romantic touches: Dinners for two and a honeymoon room setup on request.",
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("tarangire", "Night 2", "Tarangire", STAYS_TARANGIRE),
    stop("serengeti", "Nights 3–4", "The Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("zanzibar-beach", "Nights 5–7", "A beach resort on Zanzibar", STAYS_ZANZIBAR_BEACH),
  ],
  itinerary: [
    arrivalArusha(1, "arusha", { honeymoon: true }),
    tarangireDay(2, "tarangire"),
    craterThenSerengeti(3, "serengeti"),
    serengetiDay(4, "serengeti", 1, { honeymoon: true }),
    flyToZanzibar(5, "zanzibar-beach", "serengeti", { honeymoon: true }),
    beachDay(6, "zanzibar-beach", { honeymoon: true }),
    stoneTownDay(7, "zanzibar-beach"),
    zanzibarDeparture(8),
  ],
  sections: [],
  faqs: [
    {
      question: "Is the third day very long?",
      answer:
        "Yes. It combines a morning in the Ngorongoro Crater with the drive into the Serengeti, so you start early. If you'd prefer a gentler pace, the 9-day honeymoon adds a night in the highlands before the crater.",
    },
  ],
});
