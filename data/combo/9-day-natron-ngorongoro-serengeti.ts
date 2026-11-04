import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, stop } from "@/data/safaris/shared";
import { comboTrip } from "./shared";
import { arrivalArusha, craterThenSerengeti, serengetiDay } from "./days";

// From Ombeni's "9-Day Tanzania Safari: Lake Natron, Ngorongoro Crater and
// Serengeti". Only one Natron camp is verified on the site so far; the Ngare
// Sero camp was destroyed by a storm in early 2026 and is being rebuilt.
const NATRON = ["lake-natron-tented-camp"];

export const nineDayNatron = comboTrip({
  kind: "safari",
  slug: "9-day-natron-ngorongoro-serengeti-safari",
  seoTitle: "9-Day Lake Natron, Crater & Serengeti Safari | Trust Tours",
  metaDescription:
    "Three nights at Lake Natron for flamingos, the Engaresero waterfall and Ol Doinyo Lengai, then the Ngorongoro Crater and three nights in the Serengeti.",
  destinations: ["Arusha", "Lake Natron", "Ol Doinyo Lengai", "Ngorongoro", "Serengeti"],
  title: "9-Day Safari – Lake Natron, the Ngorongoro Crater and the Serengeti",
  shortName: "9-Day Natron, Ngorongoro & Serengeti",
  days: 9,
  heroImage: "/images/lake-natron-flamingos.jpg",
  summary:
    "A safari off the usual route: three nights at remote Lake Natron beneath Ol Doinyo Lengai, then the Ngorongoro highlands and crater and three nights in the Serengeti.",
  overview: [
    "This safari shows you a side of northern Tanzania few visitors see. You start at Lake Natron, a shallow soda lake in the Rift Valley beneath Ol Doinyo Lengai, the Maasai's Mountain of God, with flamingos on the water, a gorge walk to the Engaresero waterfall and huge, quiet landscapes.",
    "From Natron, you cross to the cool Ngorongoro highlands and spend a day on the floor of the crater before continuing to the Serengeti for two full days on the plains, looking for lions, leopards, cheetahs and the great herds.",
    "You travel throughout in a private 4×4 with your own driver-guide, and on the last day you return to Arusha by road or by a short flight.",
  ],
  atAGlance: [
    { label: "Duration", value: "9 days, 8 nights" },
    { label: "Start and finish", value: "Arusha" },
    { label: "Lake Natron", value: "3 nights, with the flamingos and the waterfall walk" },
    { label: "Ngorongoro", value: "A night in the highlands and a day in the crater" },
    { label: "Serengeti", value: "3 nights and 2 full days" },
    { label: "Style", value: "Private vehicle and driver-guide" },
  ],
  highlights: [
    "Lake Natron: Flamingos on a soda lake beneath an active volcano.",
    "Engaresero waterfall: A guided walk up a rocky gorge to a waterfall and pools.",
    "Ngorongoro Crater: Lions, buffaloes and a chance of black rhino.",
    "The Serengeti: Two full days for the big cats and the herds.",
    "Off the usual route: Remote landscapes and far fewer vehicles.",
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("natron", "Nights 2–4", "Lake Natron", {
      "mid-range": NATRON,
      luxury: NATRON,
      "high-end": NATRON,
      "ultra-premium": NATRON,
    }),
    stop("highlands", "Night 5", "Karatu and the Ngorongoro highlands", STAYS_HIGHLANDS),
    stop("serengeti", "Nights 6–8", "The Serengeti", STAYS_CENTRAL_SERENGETI),
  ],
  itinerary: [
    arrivalArusha(1, "arusha"),
    {
      day: 2,
      title: "Arusha to Lake Natron",
      description:
        "After breakfast, you leave the towns behind and drive north into the Rift Valley, through dry savannah, volcanic hills and Maasai country. The road gets rougher towards the lake, and Ol Doinyo Lengai rises ahead, its steep grey cone often streaked white at the top.\n\nYou reach your camp in the afternoon, with time for a short walk and photographs as the light softens over the escarpment.",
      image: { src: "/images/ol-doinyo-lengai-2day.jpg", alt: "Ol Doinyo Lengai rising above dry grassland and lava flats" },
      notes: ["The last part of the drive is dusty and bumpy. Bring sun protection and plenty of water."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen camp at Lake Natron",
      stayId: "natron",
    },
    {
      day: 3,
      title: "Lake Natron and the flamingos",
      description:
        "Today is for the lake. A shallow, alkaline soda lake, Natron is one of the main breeding grounds of the lesser flamingo, and at times huge flocks feed in the pink shallows. With your guide, you walk out across the flats to watch them without disturbing them.\n\nNatron isn't a park full of animals. Its appeal is the scenery, the birds and the feeling of being somewhere remote. In the late afternoon, you can climb a nearby hill for the sunset over the Rift Valley.",
      image: { src: "/images/lake-natron-flamingos.jpg", alt: "Flamingos on the shallow waters of Lake Natron" },
      notes: ["Flamingo numbers vary through the year, and the birds are never guaranteed."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen camp at Lake Natron",
      stayId: "natron",
    },
    {
      day: 4,
      title: "The Engaresero waterfall",
      description:
        "A local guide leads you up the Engaresero gorge, wading through a warm stream between rock walls to a waterfall and pools where you can swim. It's a refreshing change from the vehicle, and a chance to learn how the Maasai live with water in this dry land.\n\nThe rest of the day is free at camp, with Ol Doinyo Lengai on the horizon.",
      image: { src: "/images/lengai-sunrise.jpg", alt: "Sunrise over the Rift Valley from the slopes of Ol Doinyo Lengai" },
      notes: [
        "The walk involves wading and some uneven ground, and depends on the water level.",
        "Climbing Ol Doinyo Lengai is a separate, demanding night climb. Ask us if you'd like to add it.",
      ],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen camp at Lake Natron",
      stayId: "natron",
    },
    {
      day: 5,
      title: "Lake Natron to the Ngorongoro highlands",
      description:
        "You leave the volcanic lowlands and drive to the green Ngorongoro highlands, a long journey from a hot, dry world to cool hills and farmland. Your guide explains how altitude and rainfall shape the change along the way.\n\nYou arrive at your lodge near the crater with time to rest before an early start.",
      image: IMG.craterRoad,
      notes: ["Driving times vary with the road and the stops you make."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen lodge in Karatu or the Ngorongoro highlands",
      stayId: "highlands",
    },
    craterThenSerengeti(6, "serengeti"),
    serengetiDay(7, "serengeti", 1),
    serengetiDay(8, "serengeti", 2),
    {
      day: 9,
      title: "A last game drive and back to Arusha",
      description:
        "After breakfast and, time allowing, a final morning game drive, you return to Arusha. By road, it's a long day through the Ngorongoro highlands with more views on the way; by air, a short flight from a Serengeti airstrip saves many hours.\n\nIf your international flight leaves early or the connection is tight, we recommend an extra night in Arusha.",
      image: IMG.flight,
      notes: ["The flight back is included at Luxury level and above, and can be added at Mid-range."],
      meals: "Breakfast, lunch",
      accommodation: "—",
    },
  ],
  addOns: ["balloon-safari", "cultural-visit", "walking-safari", "serengeti-flight", "extra-serengeti-night", "single-supplement", "zanzibar-extension", "kilimanjaro-extension"],
  sections: [],
  faqs: [
    {
      question: "Is Lake Natron worth three nights?",
      answer:
        "For travellers who like walking, photography and remote places, yes. It gives you a day for the lake and the flamingos and a day for the waterfall, without rushing. If you prefer more game drives, we can shorten it and add a night in the Serengeti.",
    },
    {
      question: "Can we climb Ol Doinyo Lengai?",
      answer:
        "It's possible as a separate night climb with a local guide, but it's steep, hot and demanding. Tell us if you're interested and we'll explain what's involved.",
    },
  ],
});
