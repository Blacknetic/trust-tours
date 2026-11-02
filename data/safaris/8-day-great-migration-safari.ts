import {
  IMG,
  STAYS_ARUSHA,
  STAYS_CENTRAL_SERENGETI,
  STAYS_HIGHLANDS,
  STAYS_NORTH_SERENGETI,
  arrivalDay,
  crossingTrip,
  stop,
} from "./shared";

// Cross Migration Safari, from Ombeni's "8-Day Great Migration River Crossing
// Safari in Tanzania..." document (the one with three dots). It keeps the slug
// and old URL of the page it replaces. His bank details and payment plan stay out.
export const crossMigration8 = crossingTrip({
  slug: "8-day-great-migration-safari",
  oldUrl:
    "/booking/8-day-7-night-mid-range-safari-tracking-the-great-migration-crossing-with-trust-tours-and-safaris/",
  seoTitle: "8-Day Great Migration Safari, Serengeti | Trust Tours",
  metaDescription:
    "A private 8-day Great Migration safari: Tarangire, Ngorongoro Crater, and Central and Northern Serengeti, with two nights in the north. From $3,640 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "8-Day Cross Migration Safari – Tarangire, Ngorongoro, Central & Northern Serengeti",
  shortName: "8-Day Cross Migration Safari: Central and Northern",
  days: 8,
  heroImage: IMG.riverGathering.src,
  summary:
    "An unhurried eight-day private safari with a night in Arusha, Tarangire, a long day in the crater, and nights in Central Serengeti either side of two nights in the north.",
  overview: [
    "Experience one of Africa's most extraordinary wildlife adventures on this eight-day safari, combining Tarangire's elephant-filled landscapes, the spectacular Ngorongoro Crater and the wildlife-rich plains of Central and Northern Serengeti.",
    "The itinerary balances rewarding game drives with time in the right areas. You start with a night in Arusha to rest after your flight, then take in Tarangire and a long day in the crater before moving into the Serengeti.",
    "You spend two nights in the Northern Serengeti, giving you valuable time to search for the Mara River crossings, where thousands of wildebeest and zebras gather along the riverbanks. A night in Central Serengeti on each side of the north breaks up the long distances.",
    "River crossings are natural wildlife events, not scheduled performances. The main season generally runs from July to October, but the exact place and timing depend on rainfall, grazing and the herds. Your guide adjusts game drives according to the latest sightings and conditions.",
  ],
  atAGlance: [
    { label: "Duration", value: "8 days / 7 nights" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Main experience", value: "Elephants, big cats, the crater and river-crossing searches" },
    { label: "Best period", value: "July to October" },
    { label: "Route", value: "Arusha · Tarangire · Ngorongoro Crater · Central and Northern Serengeti" },
    { label: "Start", value: "Kilimanjaro Airport, Arusha Airport or Arusha" },
    { label: "Finish", value: "Arusha, by road or optional flight from Seronera" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with a pop-up roof" },
  ],
  highlights: [
    "A rested start: A night in Arusha before your first game drive.",
    "A full day in Tarangire: About seven hours of game viewing with a picnic lunch.",
    "A long day in the crater: About eight hours exploring the Ngorongoro Crater.",
    "A nine-hour river day: Your main search for the herds around the Mara River.",
    "Central Serengeti twice: More game drives, and shorter drives each way.",
  ],
  itinerary: [
    arrivalDay("arusha"),
    {
      day: 2,
      title: "Tarangire National Park",
      description:
        "After breakfast, you leave at about 6am or 7am for Tarangire National Park, around two hours or so from Arusha. Once inside, you enjoy a game drive through landscapes dotted with ancient baobab trees and seasonal riverbeds. Tarangire is especially known for its elephants, and you can also see giraffes, zebras, wildebeest, buffalo, antelope and predators such as lions.\n\nPlan for about seven hours of game viewing, including a picnic lunch. The exact time depends on sightings, the roads and how long it takes to reach the most productive areas. There is no single place to find the wildlife here, as sightings move around the park, so your guide chooses the route according to conditions.\n\nIn the late afternoon, you leave the park and continue to your lodge in Karatu.",
      experience: "A whole day among Tarangire's elephants and baobabs.",
      image: IMG.baobabs,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in Karatu",
      stayId: "karatu",
    },
    {
      day: 3,
      title: "Ngorongoro Crater safari",
      description:
        "You enjoy an early breakfast and leave at about 6am to 6.30am for the Ngorongoro Conservation Area. After the descent, you spend about eight hours exploring the crater, where open grasslands, woodland, wetlands and the lake support an impressive range of wildlife. You may see lions, elephants, buffalo, zebras, wildebeest, hippos and, with luck, the endangered black rhino.\n\nYour guide chooses the route according to wildlife activity and the crater's operating rules. A picnic lunch is usually taken at an approved site. Afterwards, you travel to your lodge in the Ngorongoro Highlands for dinner and rest.",
      experience: "About eight hours exploring the crater floor.",
      notes: [
        "How long it takes to reach the crater floor depends on your lodge, the access road and traffic at the entrance.",
      ],
      image: IMG.crater,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "crater",
    },
    {
      day: 4,
      title: "Journey to Central Serengeti",
      description:
        "After breakfast, you travel from the highlands towards Serengeti National Park, across open plains and past scattered settlements. Your guide explains how the landscape and seasonal rainfall shape animal movements through the year.\n\nAfter the park-entry formalities, you continue to Central Serengeti, an area of savannah, rocky kopjes and riverine habitats known for its resident wildlife. You may see lions resting on the rocks, giraffes crossing the plains, elephants browsing in the woodland and herds of zebra, wildebeest and gazelles. You may also search for leopards in the trees, cheetahs on the grassland and hyenas, along with a wide range of birds.\n\nAfter a picnic lunch and an afternoon game drive, you arrive at your camp or lodge. Over dinner, your guide explains the next stage of the journey and where the herds seem to be heading.",
      experience: "Kopjes, big cats and your first day on the plains.",
      image: IMG.serengetiLions,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in Central Serengeti",
      stayId: "central-first",
    },
    {
      day: 5,
      title: "Central to Northern Serengeti",
      description:
        "You start with breakfast at about 6am and aim to leave around 6.30am for the journey north. The transfer may take around four hours or longer, depending on the camp locations, wildlife stops, the roads and your guide's route.\n\nYou enjoy game viewing on the way as the landscape changes. As you reach the north, your guide assesses recent herd movements and looks for signs of wildebeest and zebra gathering near the Mara River. Depending on when you arrive, you may have about an hour of afternoon game viewing before checking in to camp.",
      experience: "North through the changing landscapes of the Serengeti.",
      notes: [
        "Your guide uses recent sightings and local knowledge to choose where to watch. Even when herds are near the river, they may wait for hours or days before crossing.",
      ],
      image: IMG.northPlains,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 6,
      title: "Full-day Northern Serengeti river-crossing search",
      description:
        "This is your main day for exploring the northern migration area. After an early tea or coffee, you leave at about 6am with a packed breakfast or picnic, depending on your camp. You spend around nine hours exploring, with breaks for meals and wildlife watching.\n\nYour guide searches for herds moving through the northern plains and around the Mara River. If conditions look promising, you may spend time at a suitable viewpoint, keeping a respectful distance and following park rules. A crossing is never guaranteed, as herds can change direction, scatter or stay on one side of the river.\n\nThe wider region also offers chances to see giraffes, elephants, antelope, lions, hyenas, leopards and other predators that follow the herds. You return to camp in the late afternoon or early evening, depending on the wildlife and park rules.",
      experience: "About nine hours searching for the herds.",
      notes: [
        "The distance from camp to the river depends on your camp and the part of the river where the herds are active. We confirm your camp's location and typical drive time before you book.",
      ],
      image: IMG.crossingDust,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 7,
      title: "Northern to Central Serengeti",
      description:
        "You enjoy breakfast before leaving at about 6.30am to 7am for the journey back towards Central Serengeti. This is another chance to look for wildlife on the way, with your guide deciding where to stop according to current sightings and the time available.\n\nIf you arrive with enough daylight, you enjoy an afternoon game drive on the central plains, with one more chance to search for predators and other wildlife before your final night in the Serengeti.",
      experience: "Back through the Serengeti, with a last afternoon on the plains.",
      image: IMG.sunsetDrive,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in Central Serengeti",
      stayId: "central-last",
    },
    {
      day: 8,
      title: "Final game viewing and departure",
      description:
        "You enjoy breakfast and, if your schedule allows, a final morning of game viewing. Afterwards, you can transfer to Seronera Airstrip for an optional scheduled flight to Arusha or another agreed destination.\n\nAlternatively, you continue by road with your guide, game viewing as you leave the Serengeti, then passing through the Ngorongoro area on your way back to Arusha.",
      experience: "A final morning on the plains before heading home.",
      notes: [
        "The road journey from Central Serengeti to Arusha takes most of the day, so an international departure on the same day may not be practical. With a domestic flight, we plan your connection around confirmed schedules and check-in times.",
      ],
      image: IMG.flight,
      meals: "Breakfast and lunch",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("karatu", "Night 2", "Karatu", STAYS_HIGHLANDS),
    stop("crater", "Night 3", "The Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("central-first", "Night 4", "Central Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("north", "Nights 5 and 6", "Northern Serengeti and the Mara River", STAYS_NORTH_SERENGETI),
    stop("central-last", "Night 7", "Central Serengeti", STAYS_CENTRAL_SERENGETI),
  ],
  sections: [
    {
      heading: "Why book this safari with Trust Tours?",
      paragraphs: [
        "A Great Migration safari is about more than driving through the Serengeti. It is about planning your route around the season, staying in the right region and allowing enough time to respond to the wildlife.",
        "We plan your itinerary around your dates, your preferred comfort level and your priorities, with a professional guide, clear inclusions and transparent pricing before you confirm. We don't promise a crossing, but we plan your time in the north to give you a real opportunity to see one.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is this safari or the 8-day with four nights in the north better for crossings?",
      answer:
        "If a crossing is your main goal, the trip with four nights in the north gives you more time at the river. This one suits you better if you also want more of Central Serengeti and a rested first night in Arusha.",
    },
    {
      question: "Is the flight back to Arusha included?",
      answer:
        "Not at Mid-range, where it is an optional add-on. It is part of the Luxury and High-end luxury levels. On this route, you fly from Seronera in Central Serengeti.",
    },
  ],
});
