import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, STAYS_TARANGIRE, stop } from "@/data/safaris/shared";
import { STAYS_ZANZIBAR_BEACH } from "@/data/zanzibar/shared";
import { comboTrip } from "./shared";
import { arushaFreeDay, arushaNationalParkDay } from "./arusha-days";
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

// From Ombeni's "15-Day Tanzania Safari & Zanzibar Beach Holiday": four nights
// around Arusha, a safari with three Serengeti nights, then five on Zanzibar.
export const fifteenDaySafariZanzibar = comboTrip({
  kind: "beach",
  slug: "15-day-safari-zanzibar-beach-holiday",
  seoTitle: "15-Day Tanzania Safari & Zanzibar Holiday | Trust Tours",
  metaDescription:
    "Fifteen days: Arusha National Park, Tarangire, three nights in the Serengeti and the Ngorongoro Crater, then five nights on Zanzibar.",
  destinations: ["Arusha", "Tarangire", "Serengeti", "Ngorongoro", "Zanzibar"],
  title: "15-Day Tanzania Safari & Zanzibar – Two Weeks of Wildlife, Culture and Beach",
  shortName: "15-Day Safari & Zanzibar",
  days: 15,
  heroImage: IMG.sunsetDrive.src,
  summary:
    "Two weeks in Tanzania: an easy start around Arusha, a private safari with three nights in the Serengeti, the Ngorongoro Crater and five nights on Zanzibar.",
  overview: [
    "With fifteen days, nothing needs to be rushed. You begin with four nights around Arusha, including a game drive in Arusha National Park and two free days to rest or explore.",
    "The safari then takes you to Tarangire, gives you three full nights in the Serengeti to follow the wildlife and the seasons, and ends with a day in the Ngorongoro Crater, all with your own vehicle and driver-guide.",
    "Finally, you fly to Zanzibar for five nights by the Indian Ocean, with time for Stone Town, a spice farm, the reefs and long, lazy days on the beach.",
  ],
  atAGlance: [
    { label: "Duration", value: "15 days, 14 nights" },
    { label: "Start", value: "Kilimanjaro International Airport" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Arusha", value: "4 nights, with a day in Arusha National Park" },
    { label: "Safari", value: "Tarangire, 3 nights in the Serengeti and the Ngorongoro Crater" },
    { label: "Beach", value: "5 nights at a Zanzibar beach hotel" },
  ],
  highlights: [
    "Time to settle in: Four nights around Arusha before the main safari.",
    "Three nights in the Serengeti: Room to follow the herds and the big cats.",
    "Ngorongoro Crater: A full day in one of Africa's great wildlife areas.",
    "Five nights on Zanzibar: Beach, Stone Town, spices and reefs.",
    "Flexible: Free days you can fill or keep quiet.",
  ],
  stayChoices: [
    stop("arusha", "Nights 1–4", "Arusha", STAYS_ARUSHA),
    stop("tarangire", "Night 5", "Tarangire", STAYS_TARANGIRE),
    stop("serengeti", "Nights 6–8", "The Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("highlands", "Night 9", "Karatu and the Ngorongoro highlands", STAYS_HIGHLANDS),
    stop("zanzibar-beach", "Nights 10–14", "A beach hotel on Zanzibar", STAYS_ZANZIBAR_BEACH),
  ],
  itinerary: [
    arrivalArusha(1, "arusha"),
    arushaFreeDay(2, "arusha"),
    arushaNationalParkDay(3, "arusha"),
    arushaFreeDay(4, "arusha", true),
    tarangireDay(5, "tarangire"),
    tarangireToSerengeti(6, "serengeti"),
    serengetiDay(7, "serengeti", 1),
    serengetiDay(8, "serengeti", 2),
    serengetiToCrater(9, "highlands"),
    flyToZanzibar(10, "zanzibar-beach", "mainland"),
    beachDay(11, "zanzibar-beach"),
    stoneTownDay(12, "zanzibar-beach"),
    oceanDay(13, "zanzibar-beach"),
    lastBeachDay(14, "zanzibar-beach"),
    zanzibarDeparture(15),
  ],
  sections: [],
  faqs: [
    {
      question: "Can we change the balance between safari and beach?",
      answer:
        "Yes. You could swap the free Arusha days for more time in the Serengeti, add the Ngorongoro highlands, or spend longer on Zanzibar. We'll adjust the plan and the price.",
    },
  ],
});
