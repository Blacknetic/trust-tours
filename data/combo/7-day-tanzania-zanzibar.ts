import { IMG, STAYS_CENTRAL_SERENGETI, stop } from "@/data/safaris/shared";
import { STAYS_ZANZIBAR_BEACH } from "@/data/zanzibar/shared";
import { comboTrip } from "./shared";
import { beachDay, flyToZanzibar, oceanDay, serengetiDay, zanzibarDeparture } from "./days";

// From Ombeni's "7-Day Tanzania Bush and Beach Safari" (two near-identical
// versions): fly into the Serengeti for 3 nights, then 3 nights on Zanzibar.
// Replaces the old crater-and-Serengeti entry and keeps its URL.
export const sevenDayBushBeach = comboTrip({
  kind: "beach",
  slug: "7-day-tanzania-zanzibar",
  oldUrl: "/booking/CONFIRM/",
  seoTitle: "7-Day Serengeti & Zanzibar Bush and Beach | Trust Tours",
  metaDescription:
    "Fly straight into the Serengeti for three nights of private game drives, then fly to Zanzibar for three nights on the beach. Flights included.",
  destinations: ["Serengeti", "Zanzibar"],
  title: "7-Day Bush and Beach – Fly into the Serengeti, then Zanzibar",
  shortName: "7-Day Serengeti & Zanzibar",
  days: 7,
  heroImage: IMG.flight.src,
  summary:
    "Fly straight into the Serengeti for three nights of private game drives, then fly on to Zanzibar for three nights of white sand and turquoise water.",
  overview: [
    "This is the quickest way to combine a real safari with a beach holiday. Instead of spending the first days on the road, you fly from Arusha or Kilimanjaro straight into the Serengeti, where your guide meets you at the airstrip and your first game drive begins on the way to camp.",
    "Three nights in the park give you time to explore it properly: open plains, river woodland and rocky kopjes, with lions, elephants, giraffes, cheetahs and, in the right season, the herds of the Great Migration.",
    "A second flight then takes you to Zanzibar for three nights at a beach hotel, with time to relax and the option of snorkelling, a dhow trip or a visit to Stone Town. It suits couples, families and anyone who wants both sides of Tanzania in a week.",
  ],
  atAGlance: [
    { label: "Duration", value: "7 days, 6 nights" },
    { label: "Start", value: "Arusha or Kilimanjaro International Airport" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Safari", value: "3 nights in the Serengeti, private vehicle and guide" },
    { label: "Beach", value: "3 nights at a beach hotel on Zanzibar" },
    { label: "Flights", value: "Into the Serengeti and on to Zanzibar, both included" },
  ],
  highlights: [
    "No long drives: Fly straight into the Serengeti and start game-viewing on arrival.",
    "Three nights in the park: Time to explore without rushing.",
    "The Great Migration: In season, the herds and the chance of a river crossing in the north.",
    "Zanzibar: Three nights of white sand and turquoise water.",
    "Your choice of stays: Pick your camp and your beach hotel.",
  ],
  stayChoices: [
    stop("serengeti", "Nights 1–3", "The Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("zanzibar-beach", "Nights 4–6", "A beach hotel on Zanzibar's north or east coast", STAYS_ZANZIBAR_BEACH),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive and fly into the Serengeti",
      description:
        "We meet you at the airport and help you onto your flight to the Serengeti, so you skip the long drive from Arusha. Your guide meets you at the airstrip, and the game drive starts on the way to camp: giraffes, elephants, zebras, wildebeest and, with luck, lions.\n\nIn the migration season, your camp may be in the north near the Mara River, where the herds gather. You arrive in time to settle in and, depending on the flight, head out again in the afternoon.",
      image: IMG.flight,
      notes: [
        "If your international flight lands too late for the connection, we add a night in Arusha and you fly in the next morning.",
        "River crossings are natural events and can never be guaranteed.",
      ],
      meals: "Lunch, dinner",
      accommodation: "Your chosen camp or lodge in the Serengeti",
      stayId: "serengeti",
    },
    serengetiDay(2, "serengeti", 1),
    serengetiDay(3, "serengeti", 2),
    flyToZanzibar(4, "zanzibar-beach", "serengeti"),
    beachDay(5, "zanzibar-beach"),
    oceanDay(6, "zanzibar-beach"),
    zanzibarDeparture(7),
  ],
  included: ["Flights: From Arusha or Kilimanjaro to the Serengeti, with the airstrip transfers."],
  sections: [],
  faqs: [
    {
      question: "Which part of the Serengeti will we stay in?",
      answer:
        "It depends on your month. For most of the year we choose a camp in the central Serengeti, but from about July to October we can base you in the north, closer to the migration and the Mara River.",
    },
  ],
});
