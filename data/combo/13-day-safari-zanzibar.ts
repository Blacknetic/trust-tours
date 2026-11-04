import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, STAYS_TARANGIRE, stop } from "@/data/safaris/shared";
import { STAYS_ZANZIBAR_BEACH } from "@/data/zanzibar/shared";
import { comboTrip } from "./shared";
import { arushaFreeDay, arushaNationalParkDay } from "./arusha-days";
import {
  arrivalArusha,
  beachDay,
  flyToZanzibar,
  oceanDay,
  serengetiDay,
  stoneTownDay,
  tarangireDay,
  zanzibarDeparture,
} from "./days";

// From Ombeni's "13-Day Tanzania Safari & Zanzibar Beach Holiday". It starts
// with four nights in Arusha (two of them free days), as his document does.
export const thirteenDaySafariZanzibar = comboTrip({
  kind: "beach",
  slug: "13-day-safari-zanzibar-beach-holiday",
  seoTitle: "13-Day Tanzania Safari & Zanzibar Holiday | Trust Tours",
  metaDescription:
    "An unhurried 13-day holiday: Arusha National Park, Tarangire, the Serengeti and the Ngorongoro Crater, then four nights on Zanzibar.",
  destinations: ["Arusha", "Tarangire", "Serengeti", "Ngorongoro", "Zanzibar"],
  title: "13-Day Tanzania Safari & Zanzibar – An Easy Start in Arusha, the Northern Parks and the Beach",
  shortName: "13-Day Safari & Zanzibar",
  days: 13,
  heroImage: IMG.tarangire.src,
  summary:
    "An unhurried holiday that starts with four relaxed nights around Arusha and a day in Arusha National Park, then Tarangire, the Serengeti and the crater, and four nights on Zanzibar.",
  overview: [
    "This holiday starts slowly on purpose. You spend your first four nights around Arusha, with time to recover from the flight, a game drive in Arusha National Park on the slopes of Mount Meru and an optional cultural day, before the main safari begins.",
    "Then you travel to Tarangire for its elephants and baobabs, into the Serengeti for two nights and back through the Ngorongoro Crater, all with your own vehicle and driver-guide.",
    "A flight takes you on to Zanzibar for four nights by the sea, with Stone Town, a spice farm and the reefs nearby if you want them.",
  ],
  atAGlance: [
    { label: "Duration", value: "13 days, 12 nights" },
    { label: "Start", value: "Kilimanjaro International Airport" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Arusha", value: "4 nights, with a day in Arusha National Park" },
    { label: "Safari", value: "Tarangire, 2 nights in the Serengeti and the Ngorongoro Crater" },
    { label: "Beach", value: "4 nights at a Zanzibar beach hotel" },
  ],
  highlights: [
    "An easy start: Four nights around Arusha to settle in.",
    "Arusha National Park: Forest, lakes, giraffes and colobus monkeys.",
    "The big parks: Tarangire, the Serengeti and the Ngorongoro Crater.",
    "Four nights on Zanzibar: Beach, Stone Town and the reefs.",
    "Flexible days: Free days you can keep quiet or fill with outings.",
  ],
  stayChoices: [
    stop("arusha", "Nights 1–4", "Arusha", STAYS_ARUSHA),
    stop("tarangire", "Night 5", "Tarangire", STAYS_TARANGIRE),
    stop("serengeti", "Nights 6–7", "The Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("highlands", "Night 8", "Karatu and the Ngorongoro highlands", STAYS_HIGHLANDS),
    stop("zanzibar-beach", "Nights 9–12", "A beach hotel on Zanzibar", STAYS_ZANZIBAR_BEACH),
  ],
  itinerary: [
    arrivalArusha(1, "arusha"),
    arushaFreeDay(2, "arusha"),
    arushaNationalParkDay(3, "arusha"),
    arushaFreeDay(4, "arusha", true),
    tarangireDay(5, "tarangire"),
    {
      day: 6,
      title: "Through the highlands to the Serengeti",
      description:
        "A long, scenic drive takes you up into the Ngorongoro highlands, along the crater rim and down onto the Serengeti's open plains. You game-drive on the way to camp, looking for the herds, lions and cheetahs.\n\nWe choose your camp to suit your travel month, so you're close to the best wildlife at that time of year.",
      image: IMG.northPlains,
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen camp or lodge in the Serengeti",
      stayId: "serengeti",
    },
    serengetiDay(7, "serengeti", 1),
    {
      day: 8,
      title: "The Ngorongoro Crater",
      description:
        "You leave the Serengeti early and drive to the Ngorongoro Crater, descending to its floor for a game drive among buffaloes, zebras, wildebeest, hippos, hyenas and lions, with a chance of the black rhino. You have a picnic lunch in the crater.\n\nIn the afternoon, you climb out to your lodge in the highlands for your last night on safari.",
      image: IMG.craterRhino,
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen lodge in Karatu or the Ngorongoro highlands",
      stayId: "highlands",
    },
    flyToZanzibar(9, "zanzibar-beach", "mainland"),
    beachDay(10, "zanzibar-beach"),
    stoneTownDay(11, "zanzibar-beach"),
    oceanDay(12, "zanzibar-beach"),
    zanzibarDeparture(13),
  ],
  sections: [],
  faqs: [
    {
      question: "Do we need four nights in Arusha?",
      answer:
        "Not necessarily. The two free days help after a long flight, but we can swap them for an extra night in the Serengeti or on Zanzibar. Just ask.",
    },
  ],
});
