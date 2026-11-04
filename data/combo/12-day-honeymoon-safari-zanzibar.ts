import {
  IMG,
  STAYS_ARUSHA,
  STAYS_CENTRAL_SERENGETI,
  STAYS_HIGHLANDS,
  STAYS_MANYARA,
  STAYS_TARANGIRE,
  stop,
} from "@/data/safaris/shared";
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

// From Ombeni's "12-Day Tanzania Honeymoon Safari & Zanzibar Beach Holiday":
// the safari of the 10-day honeymoon, a slow day near Lake Manyara, then five
// nights on Zanzibar.
export const twelveDayHoneymoon = comboTrip({
  kind: "honeymoon",
  slug: "12-day-honeymoon-safari-zanzibar",
  seoTitle: "12-Day Tanzania Honeymoon Safari & Zanzibar | Trust Tours",
  metaDescription:
    "A slow-paced 12-day honeymoon: Tarangire, the Serengeti, the Ngorongoro Crater and a quiet day at Lake Manyara, then five nights on Zanzibar.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Lake Manyara", "Zanzibar"],
  title: "12-Day Honeymoon Safari & Zanzibar – A Slow Safari and Five Nights on the Beach",
  shortName: "12-Day Honeymoon Safari & Zanzibar",
  days: 12,
  heroImage: IMG.tarangireBaobab.src,
  summary:
    "A relaxed honeymoon with time to breathe: Tarangire, the Serengeti and the Ngorongoro Crater, a slow day near Lake Manyara, then five nights on Zanzibar.",
  overview: [
    "Twelve days lets your honeymoon unfold at an easy pace. You explore Tarangire, spend two nights in the Serengeti and a day in the Ngorongoro Crater, all with your own vehicle and private driver-guide.",
    "Before the island, there's a day with nothing to do: a lodge near Lake Manyara and the Great Rift Valley, a pool, a terrace and time to rest. If you'd rather keep exploring, you can add a game drive in Lake Manyara National Park.",
    "Then you fly to Zanzibar for five nights by the sea, with free days, an optional Stone Town and spice tour and a day out on the ocean.",
  ],
  atAGlance: [
    { label: "Duration", value: "12 days, 11 nights" },
    { label: "Start", value: "Kilimanjaro International Airport" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Safari", value: "Tarangire, 2 nights in the Serengeti, the Ngorongoro Crater and Lake Manyara" },
    { label: "Beach", value: "5 nights at a Zanzibar beach resort" },
    { label: "Style", value: "Private vehicle and driver-guide for the two of you" },
  ],
  highlights: [
    "A full safari: Tarangire, the Serengeti and the Ngorongoro Crater.",
    "A day to rest: A quiet lodge near Lake Manyara before the island.",
    "Five nights on Zanzibar: Free days, Stone Town and the reefs.",
    "Optional extras: A balloon flight, a couples' massage and a sunset dhow cruise.",
    "Honeymoon touches: Requested at every lodge and hotel.",
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("tarangire", "Night 2", "Tarangire", STAYS_TARANGIRE),
    stop("serengeti", "Nights 3–4", "The Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("highlands", "Night 5", "Karatu and the Ngorongoro highlands", STAYS_HIGHLANDS),
    stop("manyara", "Night 6", "Lake Manyara", STAYS_MANYARA),
    stop("zanzibar-beach", "Nights 7–11", "A beach resort on Zanzibar", STAYS_ZANZIBAR_BEACH),
  ],
  itinerary: [
    arrivalArusha(1, "arusha", { honeymoon: true }),
    tarangireDay(2, "tarangire"),
    tarangireToSerengeti(3, "serengeti"),
    serengetiDay(4, "serengeti", 1, { honeymoon: true }),
    serengetiToCrater(5, "highlands"),
    {
      day: 6,
      title: "A slow day near Lake Manyara",
      description:
        "After several early starts, today is for slowing down. You move to a lodge near Lake Manyara, on the edge of the Great Rift Valley, with green hills, farmland and views over the escarpment.\n\nSpend the afternoon by the pool, on the terrace or in your room. If you'd like more wildlife, you can add a game drive in Lake Manyara National Park, known for its tree-climbing lions, elephants and flamingos.",
      image: IMG.manyaraFlamingos,
      notes: ["The Lake Manyara game drive is optional and has its own park fee. Ask us to include it."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen lodge near Lake Manyara",
      stayId: "manyara",
    },
    flyToZanzibar(7, "zanzibar-beach", "mainland", { honeymoon: true }),
    beachDay(8, "zanzibar-beach", { honeymoon: true }),
    stoneTownDay(9, "zanzibar-beach"),
    oceanDay(10, "zanzibar-beach"),
    lastBeachDay(11, "zanzibar-beach", { honeymoon: true }),
    zanzibarDeparture(12),
  ],
  sections: [],
  faqs: [
    {
      question: "Why is there a free day before Zanzibar?",
      answer:
        "Because safari days start early. A day at a quiet lodge lets you rest before the island. If you'd prefer, we can turn it into a game drive in Lake Manyara National Park.",
    },
  ],
});
