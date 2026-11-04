import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, STAYS_TARANGIRE, stop } from "@/data/safaris/shared";
import { STAYS_ZANZIBAR_BEACH } from "@/data/zanzibar/shared";
import { comboTrip } from "./shared";
import { arrivalArusha, beachDay, craterThenSerengeti, flyToZanzibar, serengetiDay, tarangireDay, zanzibarDeparture } from "./days";

// From Ombeni's "9-Day Tanzania Honeymoon Safari & Zanzibar Beach Escape".
// Replaces the old safari-only 9-day honeymoon, which had no price, and keeps
// its URL.
export const nineDayHoneymoon = comboTrip({
  kind: "honeymoon",
  slug: "9-day-honeymoon-northern",
  seoTitle: "9-Day Tanzania Honeymoon Safari & Zanzibar | Trust Tours",
  metaDescription:
    "Tarangire, a night in the Ngorongoro highlands, the crater and three nights in the Serengeti, then a flight to Zanzibar. A private honeymoon.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
  title: "9-Day Honeymoon Safari & Zanzibar – Tarangire, Ngorongoro, the Serengeti and the Beach",
  shortName: "9-Day Honeymoon Safari & Zanzibar",
  days: 9,
  heroImage: IMG.balloon.src,
  summary:
    "An unhurried private honeymoon: Tarangire, a quiet night in the highlands, the Ngorongoro Crater and three nights in the Serengeti, then two nights on Zanzibar.",
  overview: [
    "This honeymoon gives the safari room to breathe. After Tarangire, you spend a slow afternoon and a night in the cool Ngorongoro highlands before the crater, then three nights in the Serengeti, with time for a sunrise balloon flight and a last evening in the bush.",
    "Everything is private, from the vehicle and guide to the pace of each day, and we can ask every lodge for the touches that make a honeymoon special: a romantic room, a sundowner or a dinner under the stars.",
    "You finish with a flight to Zanzibar and two nights at a beach hotel, with white sand, warm water and time to enjoy each other's company.",
  ],
  atAGlance: [
    { label: "Duration", value: "9 days, 8 nights" },
    { label: "Start", value: "Kilimanjaro International Airport" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Safari", value: "Tarangire, the Ngorongoro highlands and crater, 3 nights in the Serengeti" },
    { label: "Beach", value: "2 nights at a Zanzibar beach hotel" },
    { label: "Style", value: "Private vehicle and driver-guide for the two of you" },
  ],
  highlights: [
    "Tarangire: Elephants beneath ancient baobab trees.",
    "The highlands: A slow afternoon and a night in the cool hills above the crater.",
    "Ngorongoro Crater: Lions, buffaloes and a chance of black rhino.",
    "Three nights in the Serengeti: Sunrise drives and an optional balloon flight.",
    "Zanzibar: Two nights by the Indian Ocean to end the trip.",
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("tarangire", "Night 2", "Tarangire", STAYS_TARANGIRE),
    stop("highlands", "Night 3", "Karatu and the Ngorongoro highlands", STAYS_HIGHLANDS),
    stop("serengeti", "Nights 4–6", "The Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("zanzibar-beach", "Nights 7–8", "A beach hotel on Zanzibar", STAYS_ZANZIBAR_BEACH),
  ],
  itinerary: [
    arrivalArusha(1, "arusha", { honeymoon: true }),
    tarangireDay(2, "tarangire"),
    {
      day: 3,
      title: "Into the Ngorongoro highlands",
      description:
        "After breakfast, you leave Tarangire and climb into the highlands, through farmland and rolling hills where the air turns cooler. You can stop at a viewpoint, visit a local village with a guide or simply take your time.\n\nThe afternoon is free at your lodge near the crater, with gardens and views across the hills, a good place for a slow evening and a special dinner before the early start to the crater.",
      image: IMG.craterRoad,
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen lodge in Karatu or the Ngorongoro highlands",
      stayId: "highlands",
    },
    craterThenSerengeti(4, "serengeti"),
    serengetiDay(5, "serengeti", 1),
    serengetiDay(6, "serengeti", 2, { honeymoon: true }),
    flyToZanzibar(7, "zanzibar-beach", "serengeti", { honeymoon: true }),
    beachDay(8, "zanzibar-beach", { honeymoon: true }),
    zanzibarDeparture(9),
  ],
  sections: [],
  faqs: [
    {
      question: "Can we stay longer on Zanzibar?",
      answer:
        "Yes. Many couples add two or three beach nights. Tick the extra nights in the booking box, or look at the 10- and 12-day honeymoons, which spend longer on the island.",
    },
  ],
});
