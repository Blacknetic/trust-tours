import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, STAYS_TARANGIRE, stop } from "@/data/safaris/shared";
import { STAYS_ZANZIBAR_BEACH } from "@/data/zanzibar/shared";
import { comboTrip } from "./shared";
import {
  arrivalArusha,
  beachDay,
  flyToZanzibar,
  lastBeachDay,
  serengetiDay,
  serengetiToCrater,
  stoneTownDay,
  tarangireDay,
  tarangireToSerengeti,
  zanzibarDeparture,
} from "./days";

// From Ombeni's "10-Day Tanzania Honeymoon Safari & Zanzibar Beach Escape".
// His range ($3,250–$4,250 at Mid-range) is replaced by the standard daily rates.
// The old 10-day migration honeymoon (no price) redirects here.
export const tenDayHoneymoon = comboTrip({
  kind: "honeymoon",
  slug: "10-day-honeymoon-safari-zanzibar",
  seoTitle: "10-Day Tanzania Honeymoon Safari & Zanzibar | Trust Tours",
  metaDescription:
    "A private 10-day honeymoon: Tarangire, two nights in the Serengeti and the Ngorongoro Crater, then four nights at a Zanzibar beach resort.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
  title: "10-Day Honeymoon Safari & Zanzibar – Five Days of Safari and Four Nights on the Beach",
  shortName: "10-Day Honeymoon Safari & Zanzibar",
  days: 10,
  heroImage: IMG.serengetiLion.src,
  summary:
    "Five days of private safari through Tarangire, the Serengeti and the Ngorongoro Crater, then four nights at a Zanzibar beach resort to slow right down.",
  overview: [
    "A honeymoon of two halves. The first five days are wild: Tarangire's elephants, two nights on the Serengeti plains and a day on the floor of the Ngorongoro Crater, all in your own vehicle with a private driver-guide.",
    "The second half is pure island. You fly to Zanzibar for four nights at a beach resort, with a free day, an optional visit to Stone Town and a spice farm, and a last evening that can end with a sunset dhow cruise.",
    "Along the way, we can ask each lodge and hotel for honeymoon touches, from a decorated room to a private dinner.",
  ],
  atAGlance: [
    { label: "Duration", value: "10 days, 9 nights" },
    { label: "Start", value: "Kilimanjaro International Airport" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Safari", value: "Tarangire, 2 nights in the Serengeti and the Ngorongoro Crater" },
    { label: "Beach", value: "4 nights at a Zanzibar beach resort" },
    { label: "Style", value: "Private vehicle and driver-guide for the two of you" },
  ],
  highlights: [
    "Tarangire: Elephant herds and giant baobabs.",
    "The Serengeti: A full day on the plains, with an optional sunrise balloon flight.",
    "Ngorongoro Crater: One of Africa's richest wildlife areas.",
    "Four nights on Zanzibar: Time to rest after the safari.",
    "Stone Town and a sunset sail: Optional, for your last days.",
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("tarangire", "Night 2", "Tarangire", STAYS_TARANGIRE),
    stop("serengeti", "Nights 3–4", "The Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("highlands", "Night 5", "Karatu and the Ngorongoro highlands", STAYS_HIGHLANDS),
    stop("zanzibar-beach", "Nights 6–9", "A beach resort on Zanzibar", STAYS_ZANZIBAR_BEACH),
  ],
  itinerary: [
    arrivalArusha(1, "arusha", { honeymoon: true }),
    tarangireDay(2, "tarangire"),
    tarangireToSerengeti(3, "serengeti"),
    serengetiDay(4, "serengeti", 1, { honeymoon: true }),
    serengetiToCrater(5, "highlands"),
    flyToZanzibar(6, "zanzibar-beach", "mainland", { honeymoon: true }),
    beachDay(7, "zanzibar-beach", { honeymoon: true }),
    stoneTownDay(8, "zanzibar-beach"),
    lastBeachDay(9, "zanzibar-beach", { honeymoon: true }),
    zanzibarDeparture(10),
  ],
  sections: [],
  faqs: [
    {
      question: "Where does the flight to Zanzibar leave from?",
      answer:
        "Usually from the Lake Manyara airstrip or Arusha, after your night in the highlands. We confirm the airstrip and time with your booking.",
    },
  ],
});
