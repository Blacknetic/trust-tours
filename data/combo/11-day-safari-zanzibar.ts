import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, STAYS_TARANGIRE, stop } from "@/data/safaris/shared";
import { STAYS_ZANZIBAR_BEACH } from "@/data/zanzibar/shared";
import { comboTrip } from "./shared";
import {
  arrivalArusha,
  beachDay,
  flyToZanzibar,
  lastBeachDay,
  oceanDay,
  serengetiDay,
  serengetiToCrater,
  stoneTownDay,
  tarangireDay,
  tarangireToSerengeti,
  zanzibarDeparture,
} from "./days";

// From Ombeni's "11-Day Tanzania Safari & Zanzibar Beach Holiday".
export const elevenDaySafariZanzibar = comboTrip({
  kind: "beach",
  slug: "11-day-safari-zanzibar-beach-holiday",
  seoTitle: "11-Day Tanzania Safari & Zanzibar Holiday | Trust Tours",
  metaDescription:
    "Tarangire, two nights in the Serengeti and the Ngorongoro Crater on a private safari, then five nights on Zanzibar. Flight to the island included.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
  title: "11-Day Tanzania Safari & Zanzibar – The Northern Parks, then Five Nights on the Beach",
  shortName: "11-Day Safari & Zanzibar",
  days: 11,
  heroImage: IMG.crater.src,
  summary:
    "A private safari through Tarangire, the Serengeti and the Ngorongoro Crater, followed by five nights on Zanzibar with Stone Town and the reefs within easy reach.",
  overview: [
    "This holiday gives you the essential northern safari and a proper beach holiday in one trip. With your own vehicle and driver-guide, you travel from Tarangire's baobabs to the Serengeti's open plains and down into the Ngorongoro Crater.",
    "From the highlands, a short flight takes you to Zanzibar for five nights. The days are yours: the beach and the pool, a guided walk through Stone Town and a spice farm, or a boat trip to a reef or a sandbank.",
    "It suits couples, friends and families who want plenty of wildlife without rushing, and time afterwards to rest.",
  ],
  atAGlance: [
    { label: "Duration", value: "11 days, 10 nights" },
    { label: "Start", value: "Kilimanjaro International Airport" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Safari", value: "Tarangire, 2 nights in the Serengeti and the Ngorongoro Crater" },
    { label: "Beach", value: "5 nights at a Zanzibar beach hotel" },
    { label: "Style", value: "Private vehicle and driver-guide" },
  ],
  highlights: [
    "Tarangire: Elephants and baobabs on your first day.",
    "The Serengeti: Two nights on the plains, with an optional balloon flight.",
    "Ngorongoro Crater: A day in one of Africa's great wildlife areas.",
    "Five nights on Zanzibar: Beach, Stone Town and the reefs.",
    "One booking: Safari, flight and island arranged together.",
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("tarangire", "Night 2", "Tarangire", STAYS_TARANGIRE),
    stop("serengeti", "Nights 3–4", "The Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("highlands", "Night 5", "Karatu and the Ngorongoro highlands", STAYS_HIGHLANDS),
    stop("zanzibar-beach", "Nights 6–10", "A beach hotel on Zanzibar", STAYS_ZANZIBAR_BEACH),
  ],
  itinerary: [
    arrivalArusha(1, "arusha"),
    tarangireDay(2, "tarangire"),
    tarangireToSerengeti(3, "serengeti"),
    serengetiDay(4, "serengeti", 1),
    serengetiToCrater(5, "highlands"),
    flyToZanzibar(6, "zanzibar-beach", "mainland"),
    beachDay(7, "zanzibar-beach"),
    stoneTownDay(8, "zanzibar-beach"),
    oceanDay(9, "zanzibar-beach"),
    lastBeachDay(10, "zanzibar-beach"),
    zanzibarDeparture(11),
  ],
  sections: [],
  faqs: [
    {
      question: "Can we spend longer in the Serengeti?",
      answer:
        "Yes. Many travellers swap a beach night for a third night in the Serengeti. Add it in the booking box, or look at the 13- and 15-day versions.",
    },
  ],
});
