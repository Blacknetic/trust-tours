import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, STAYS_TARANGIRE } from "@/data/safaris/shared";
import { STAYS_EAST_COAST, ZIMG, safariBeachTrip, stop } from "./shared";

// From Ombeni's "20-Day Tanzania & Zanzibar Honeymoon Safari Adventure" ($8,750
// mid-range, $14,450 luxury). His lodge names come first in each list. Replaces
// the old entry and keeps its URL.
const first = (ids: string[], list: string[]) => [...ids, ...list.filter((id) => !ids.includes(id))];

export const twentyDayHoneymoon = safariBeachTrip({
  slug: "20-day-honeymoon-tanzania-zanzibar",
  tags: ["honeymoon"],
  oldUrl: "/booking/20-day-tanzania-zanzibar-honeymoon-safari-adventure/",
  seoTitle: "20-Day Tanzania & Zanzibar Honeymoon | Trust Tours",
  metaDescription:
    "A 20-day honeymoon: Arusha, Tarangire, the Ngorongoro Crater, the Serengeti and Lake Natron, then nine nights on Zanzibar's east coast. From $8,750 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Lake Natron", "Zanzibar"],
  title: "20-Day Tanzania & Zanzibar Honeymoon – Safari and Island",
  shortName: "20-Day Safari & Zanzibar Honeymoon",
  days: 20,
  heroImage: "/images/packages/20-day-honeymoon-tanzania-zanzibar.jpg",
  bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  summary:
    "Ten days across Tanzania's wilderness, from Arusha National Park to the Serengeti and Lake Natron, then nine nights on Zanzibar's east coast to unwind together.",
  overview: [
    "Your honeymoon deserves more than a destination. This 20-day journey is designed for newlyweds who want both the thrill of a safari and the peace of a tropical island, without rushing either.",
    "The first ten days take you from a walking safari in Arusha National Park to the elephants of Tarangire, the Ngorongoro Crater, the Great Migration in the Serengeti and the flamingos and volcanic scenery of Lake Natron, with romantic bush lunches and private dinners along the way.",
    "Then you fly to Zanzibar for nine nights by the sea on the east coast, with Stone Town, a sunset dhow cruise, a spice farm, Jozani Forest and Mnemba's reefs, and plenty of free days just for the two of you.",
  ],
  atAGlance: [
    { label: "Duration", value: "20 days, 19 nights" },
    { label: "Start", value: "Kilimanjaro International Airport (JRO)" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Safari", value: "Arusha NP, Tarangire, Ngorongoro, Serengeti and Lake Natron" },
    { label: "Zanzibar", value: "9 nights on the east coast" },
    { label: "Flight", value: "Arusha to Zanzibar, included" },
  ],
  highlights: [
    "Walking safari: Explore Arusha National Park on foot.",
    "The Great Migration: Two full days in the Serengeti.",
    "Lake Natron: Flamingos, a waterfall walk and volcanic scenery.",
    "Zanzibar: Stone Town, a sunset dhow cruise, a spice farm and Mnemba snorkelling.",
    "Romantic touches: Candlelit dinners and a farewell night with drumming.",
  ],
  stayChoices: [
    stop("arusha", "Nights 1–2 and 10", "Arusha", {
      "mid-range": first(["parrot-hotel"], STAYS_ARUSHA["mid-range"]),
      luxury: STAYS_ARUSHA.luxury,
    }),
    stop("tarangire", "Night 3", "Tarangire", {
      "mid-range": STAYS_TARANGIRE["mid-range"],
      luxury: first(["lemala-mpingo-ridge"], STAYS_TARANGIRE.luxury),
    }),
    stop("highlands", "Nights 4–5", "Karatu and the Ngorongoro Highlands", {
      "mid-range": first(["marera-valley-lodge"], STAYS_HIGHLANDS["mid-range"]),
      luxury: first(["the-retreat-ngorongoro"], STAYS_HIGHLANDS.luxury),
    }),
    stop("serengeti", "Nights 6–8", "Central Serengeti", {
      "mid-range": STAYS_CENTRAL_SERENGETI["mid-range"],
      luxury: first(["kubu-kubu"], STAYS_CENTRAL_SERENGETI.luxury),
    }),
    stop("natron", "Night 9", "Lake Natron", {
      "mid-range": ["lake-natron-tented-camp"],
      luxury: ["lake-natron-tented-camp"],
    }),
    stop("zanzibar", "Nights 11–19", "Zanzibar's east coast", {
      "mid-range": first(["zanziblue"], STAYS_EAST_COAST["mid-range"]),
      luxury: ["tulia-zanzibar", "zuri-zanzibar", "baraza-resort"],
    }),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Arusha",
      description:
        "A Trust Tours representative welcomes you at Kilimanjaro International Airport and drives you to your hotel in Arusha. Spend your first evening relaxing in the gardens before the adventure begins.",
      meals: "Dinner",
      accommodation: "Your chosen hotel in Arusha",
      stayId: "arusha",
    },
    {
      day: 2,
      title: "Arusha National Park and a walking safari",
      description:
        "Ease into safari life in Arusha National Park. With an armed ranger, you walk through forest and open plains to see giraffes, zebras and monkeys up close, then continue by vehicle, with an optional canoe trip on the Momella Lakes and a picnic lunch.",
      image: { src: "/images/safari-giraffes.jpg", alt: "Giraffes browsing among trees on a game drive" },
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen hotel in Arusha",
      stayId: "arusha",
    },
    {
      day: 3,
      title: "Tarangire National Park",
      description:
        "A full-day game drive in Tarangire, among huge elephant herds and baobab trees, looking for lions, leopards and migratory birds. The day ends with a candlelit dinner under the stars.",
      image: IMG.tarangireBaobab,
      meals: "Breakfast, lunch, candlelit dinner",
      accommodation: "Your chosen lodge near Tarangire",
      stayId: "tarangire",
    },
    {
      day: 4,
      title: "Mto wa Mbu village and on to Karatu",
      description:
        "A guided tour of Mto wa Mbu, a village where people from many Tanzanian communities live side by side. You taste local food, walk through banana farms and meet local artists, then drive up to Karatu in the highlands.",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen lodge in the highlands",
      stayId: "highlands",
    },
    {
      day: 5,
      title: "Ngorongoro Crater",
      description:
        "A full day on the floor of the Ngorongoro Crater, a UNESCO World Heritage Site with a good chance of seeing lions, elephants, buffaloes and black rhino in a single day. Lunch is a picnic beside a hippo pool.",
      image: IMG.craterRhino,
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen lodge in the highlands",
      stayId: "highlands",
    },
    {
      day: 6,
      title: "Into the Serengeti",
      description:
        "You drive into the Serengeti with game viewing on the way, arriving in the central plains for an evening game drive before settling into your camp.",
      image: IMG.northPlains,
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen camp in the Serengeti",
      stayId: "serengeti",
    },
    {
      day: 7,
      title: "Serengeti: following the migration",
      description:
        "A full day exploring the central Serengeti, and further north if the herds are there. You watch wildebeest and zebras in huge numbers, predators on the hunt and a sunset over the plains, with a romantic bush lunch.",
      image: IMG.plainsHerds,
      meals: "Breakfast, bush lunch, dinner",
      accommodation: "Your chosen camp in the Serengeti",
      stayId: "serengeti",
    },
    {
      day: 8,
      title: "Another full day in the Serengeti",
      description:
        "Another day on the plains, with your guide positioning you for the best wildlife and light. A balloon flight at sunrise can be added at extra cost.",
      image: IMG.serengetiLions,
      meals: "Breakfast, bush lunch, dinner",
      accommodation: "Your chosen camp in the Serengeti",
      stayId: "serengeti",
    },
    {
      day: 9,
      title: "Serengeti to Lake Natron",
      description:
        "You leave the Serengeti for the remote, otherworldly landscapes of Lake Natron, below the Ol Doinyo Lengai volcano. A guided walk leads up a gorge to a waterfall, and the lake is home to large numbers of flamingos at certain times of year.",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen camp at Lake Natron",
      stayId: "natron",
    },
    {
      day: 10,
      title: "Lake Natron to Arusha",
      description:
        "A scenic drive back to Arusha, with time to rest, look through your photographs and get ready for the island half of your honeymoon.",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen hotel in Arusha",
      stayId: "arusha",
    },
    {
      day: 11,
      title: "Fly to Zanzibar",
      description:
        "A short flight takes you to Zanzibar, where your driver meets you and takes you to your resort on the east coast, with ocean views and palm trees all around.",
      image: ZIMG.beach,
      meals: "Breakfast, dinner",
      accommodation: "Your chosen resort on Zanzibar",
      stayId: "zanzibar",
    },
    {
      day: 12,
      title: "Stone Town and a sunset dhow cruise",
      description:
        "A private guide shows you Stone Town's historic lanes, markets and landmarks. Later, you sail along the coast on a romantic sunset dhow cruise.",
      image: ZIMG.dhowSunset,
      meals: "Breakfast, dinner",
      accommodation: "Your chosen resort on Zanzibar",
      stayId: "zanzibar",
    },
    {
      day: 13,
      title: "Spice farm and Jozani Forest",
      description:
        "You visit a spice farm to learn about the island's farming history and taste its spices, then Jozani Forest to see the rare red colobus monkeys.",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen resort on Zanzibar",
      stayId: "zanzibar",
    },
    {
      day: 14,
      title: "A day on the beach",
      description:
        "A free day on white sand and in clear water. Try snorkelling or paddleboarding, or ask us to arrange a beach massage and a private dinner on the sand.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen resort on Zanzibar",
      stayId: "zanzibar",
    },
    {
      day: 15,
      title: "Mnemba snorkelling",
      description:
        "A boat trip to the Mnemba Atoll for some of the best snorkelling in Zanzibar, among coral reefs and tropical fish, with a seafood lunch on board.",
      image: ZIMG.snorkel,
      notes: ["Mnemba Island itself is private, so trips visit the surrounding reefs."],
      meals: "Breakfast, seafood lunch, dinner",
      accommodation: "Your chosen resort on Zanzibar",
      stayId: "zanzibar",
    },
    {
      day: 16,
      title: "Time together by the ocean",
      description:
        "A free day for pampering, or for optional diving, kitesurfing or a visit to a fishing village.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen resort on Zanzibar",
      stayId: "zanzibar",
    },
    {
      day: 17,
      title: "Time together by the ocean",
      description: "Another day at your own pace, enjoying the calm of your resort and the Indian Ocean.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen resort on Zanzibar",
      stayId: "zanzibar",
    },
    {
      day: 18,
      title: "A last full beach day",
      description: "Spa, water sports or simply soaking up the island together.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen resort on Zanzibar",
      stayId: "zanzibar",
    },
    {
      day: 19,
      title: "Farewell dinner and drumming",
      description:
        "On your final night, a candlelit dinner is followed by a live drumming performance and a last toast to your journey.",
      meals: "Breakfast, farewell dinner",
      accommodation: "Your chosen resort on Zanzibar",
      stayId: "zanzibar",
    },
    {
      day: 20,
      title: "Departure",
      description:
        "After breakfast, you transfer to Zanzibar International Airport for your flight home, with memories of a truly unforgettable honeymoon.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  prices: [
    {
      id: "mid-range",
      usd: 8750,
      summary: "Comfortable lodges, tented camps and a boutique beach hotel, with private guiding throughout.",
      includes: [
        "Mid-range lodges and tented camps on safari",
        "A beachfront hotel on Zanzibar's east coast",
        "Private 4×4 Land Cruiser and guide",
        "Flight from Arusha to Zanzibar",
        "All the tours and excursions in the itinerary",
      ],
    },
    {
      id: "luxury",
      usd: 14450,
      summary: "The same route with luxury lodges and camps and a luxury beach resort.",
      includes: [
        "Luxury lodges and tented camps on safari",
        "A luxury beach resort in Zanzibar",
        "Private 4×4 Land Cruiser and guide",
        "Flight from Arusha to Zanzibar",
        "All the tours and excursions in the itinerary",
      ],
    },
  ],
  included: [
    "Safari: Walking safari, game drives and the Mto wa Mbu cultural tour.",
    "Drinks: Bottled water and soft drinks on game drives.",
    "Zanzibar: Stone Town tour, sunset dhow cruise, spice farm, Jozani Forest and Mnemba snorkelling.",
    "Honeymoon touches: Candlelit dinners and a farewell dinner with drumming.",
    "Insurance: Flying Doctors emergency evacuation cover.",
  ],
  excursionsIncluded: ["mnemba-snorkelling", "sunset-dhow-cruise"],
  sections: [],
  faqs: [
    {
      question: "Is 20 days too long?",
      answer:
        "It's designed as a complete honeymoon, with ten days of safari and ten on the island and rest days built in, so it never feels rushed. We can shorten either half if you prefer.",
    },
  ],
});
