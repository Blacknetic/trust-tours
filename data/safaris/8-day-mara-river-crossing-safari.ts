import {
  IMG,
  STAYS_CENTRAL_SERENGETI,
  STAYS_HIGHLANDS,
  STAYS_NORTH_SERENGETI,
  STAYS_TARANGIRE,
  crossingTrip,
  stop,
} from "./shared";

// Cross Migration Safari, from Ombeni's "8-Day Great Migration River Crossing
// Safari in Tanzania" document. It labels Day 7 "Overnight: central Serengeti",
// but the day stays in the north, Day 8 leaves from there and the intro promises
// four northern nights. Built as a night in the north. Ombeni to confirm.
export const crossMigration8North = crossingTrip({
  slug: "8-day-mara-river-crossing-safari",
  seoTitle: "8-Day Mara River Crossing Safari | Trust Tours",
  metaDescription:
    "A private 8-day cross migration safari with four nights near the Mara River, plus Tarangire and the Ngorongoro Crater. From $3,640 per person.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "8-Day Cross Migration Safari – Four Nights by the Mara River",
  shortName: "8-Day Cross Migration Safari: Four Nights North",
  days: 8,
  heroImage: IMG.crocodile.src,
  summary:
    "The longest stay in the north of any of our crossing safaris: four nights around the Mara River, after Tarangire, the Ngorongoro Crater and Central Serengeti.",
  overview: [
    "Begin among Tarangire's remarkable elephant herds and ancient baobabs, explore the wildlife-rich floor of the Ngorongoro Crater, travel across the legendary Serengeti plains, then spend several days in the north searching for the Great Migration and its dramatic Mara River crossings.",
    "Rather than visiting the Northern Serengeti for a night or two, this itinerary gives you four nights there. That means more chances to follow the herds, watch their behaviour, take photographs and wait patiently at authorised viewing areas when conditions look promising.",
    "The safari focuses on the Kogatende and Lamai areas, where the Mara River forms part of the migration route. Your guide weighs up recent wildlife movements, the roads and which areas are accessible under park rules before deciding where to spend your time.",
    "The Great Migration is much more than one river crossing. Along the way, you may see enormous herds of wildebeest, zebras travelling with them, elephants, giraffes, buffaloes, antelopes, lions, leopards, cheetahs, hyenas and many birds. Even if a crossing doesn't happen during your visit, the north offers exceptional wildlife and dramatic landscapes.",
  ],
  atAGlance: [
    { label: "Duration", value: "8 days / 7 nights" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Main experience", value: "Four nights searching for the Mara River crossings" },
    { label: "Best period", value: "July to October, especially late July to September" },
    { label: "Route", value: "Arusha · Tarangire · Ngorongoro Crater · Central Serengeti · Northern Serengeti" },
    { label: "Start", value: "Kilimanjaro Airport or Arusha" },
    { label: "Finish", value: "Arusha or Kilimanjaro, by optional flight or road" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with a pop-up roof" },
  ],
  highlights: [
    "Four nights in the north: The best way to give yourself time at the river.",
    "Two full migration days: Plus a final morning if the herds are close.",
    "Kogatende and Lamai: The northern areas where the Mara lies on the migration route.",
    "Ngorongoro Crater: An early descent where permitted, with a chance of black rhino.",
    "Tarangire: Elephants beneath the baobabs on your first day.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Kilimanjaro Airport or Arusha to Tarangire National Park",
      description:
        "When you arrive at Kilimanjaro International Airport, or from your hotel in Arusha if you are already in Tanzania, your guide welcomes you and briefs you on your route, the wildlife and safety. You then travel to Tarangire National Park, known for its large elephant populations, giant baobabs, seasonal swamps and wildlife-rich river valley.\n\nAfter the park-entry formalities, you begin your first game drive. Your guide helps you search for elephants feeding beneath the baobabs, giraffes browsing on acacia trees, zebras and wildebeest on the plains and antelopes near water. You may also find lions, leopards, cheetahs, spotted hyenas, warthogs, baboons and many birds.\n\nTarangire is especially rewarding in the dry season, when animals often gather around reliable water. After a picnic lunch and an afternoon in the park, you travel to your accommodation in the Tarangire area for dinner.",
      experience: "A wonderful introduction to Tanzania's wildlife.",
      image: IMG.tarangireBaobab,
      meals: "Picnic or lodge lunch, and dinner",
      accommodation: "Your chosen stay in the Tarangire area",
      stayId: "tarangire",
    },
    {
      day: 2,
      title: "Tarangire to the Ngorongoro Crater",
      description:
        "After breakfast, you leave for the Ngorongoro Conservation Area and descend into the world-famous crater. Where the schedule, permits and arrangements allow, we aim for an early descent, potentially around 6am, to make the most of the morning.\n\nThe crater has grasslands, woodland, wetlands and a soda lake. Your guide searches for lions, elephants, buffaloes, zebras, wildebeest, gazelles and hyenas. It is also one of the places where you have a chance of seeing the endangered black rhino, although a sighting can never be promised. Depending on conditions, you may see flamingos and other waterbirds, as well as eagles, vultures and ostriches.\n\nAfter a picnic lunch at a designated site and more game viewing, you climb out of the crater and travel to your lodge in the Karatu area or the highlands, where the air is cooler.",
      experience: "Black rhino country, with flamingos on the soda lake if you're lucky.",
      image: IMG.craterRhino,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 3,
      title: "Ngorongoro Highlands to Central Serengeti",
      description:
        "After breakfast, you travel from the highlands towards Serengeti National Park, across open plains and past scattered settlements. Your guide explains how the landscape and seasonal rainfall influence animal movements through the year.\n\nYou continue to Central Serengeti, an area of savannah, rocky kopjes, riverine habitats and resident wildlife. It offers excellent chances to see lions on rocky outcrops, giraffes crossing the plains, elephants in the woodland and herds of zebra, wildebeest and gazelles. You may also search for leopards in the trees and cheetahs on the open grassland.\n\nAfter a picnic lunch and an afternoon game drive where timing allows, you reach your camp or lodge. Over dinner, your guide explains the next stage of your journey and where the herds seem to be heading.",
      experience: "A day on the central plains on your way north.",
      image: IMG.serengetiLion,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in Central Serengeti",
      stayId: "central",
    },
    {
      day: 4,
      title: "Central Serengeti to the Mara River region",
      description:
        "After breakfast, you set out for the Northern Serengeti, watching wildlife as the land changes from central plains to northern hills, woodland and rivers. Your guide balances game viewing with reaching the north in good time.\n\nAs you approach the Kogatende or Lamai area, the focus shifts to the Great Migration. Your guide looks for concentrations of wildebeest and zebra, fresh tracks and other signs of recent movement. If the herds are nearby and conditions allow, you may visit authorised viewing places along the Mara River to see whether crossing activity is developing.\n\nCrossings are unpredictable, so you may search several areas rather than wait in one place. Even without one, you can still enjoy the beautiful scenery and wildlife of the north. You arrive at your camp or lodge for dinner, ready for two full days with the herds.",
      experience: "Your first look at the Mara River.",
      image: IMG.northPlains,
      meals: "Breakfast, picnic or camp lunch, and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 5,
      title: "Full-day Great Migration and Mara River crossing search",
      description:
        "Today is dedicated to the Great Migration. After breakfast, you leave with your guide for a long game drive to find the herds and assess conditions at the river. The route depends on recent sightings, where the herds are, the roads and access to the designated crossing areas.\n\nA crossing can begin suddenly after a long period of hesitation. Wildebeest may gather along a bank, move backwards, scatter across the plains or wait for others before attempting to cross. Your guide explains this behaviour and why patience and time in the right area are so important.\n\nIf a crossing develops at an authorised viewing point, you may see hundreds or even thousands of wildebeest moving down the bank and into the river, sometimes with zebras alongside them. Strong currents, steep banks and crocodiles make it a dramatic natural event. When the herds aren't crossing, you explore the surrounding plains and riverine habitats. Lunch is a picnic at an authorised place, away from the riverbank.",
      experience: "Learning to read the herds, with your guide beside you.",
      image: IMG.crossingBank,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 6,
      title: "A second full day of migration tracking and photography",
      description:
        "You enjoy another full day in the north, with a second big opportunity to follow the migration. Having several nights here is valuable, because crossing activity can be concentrated in one area while other parts of the river stay quiet.\n\nAfter breakfast, your guide reviews recent sightings and chooses the most promising areas. You may return to a known crossing area, explore a different part of the plains or spend time with a large herd as it grazes and moves.\n\nIf the wildebeest approach the river, your guide positions the vehicle within the designated viewing area, so you can watch them gather and see whether they commit to crossing. Wildlife viewing is always done responsibly, without approaching or blocking the animals. If there is no crossing, you can look for predators, watch elephants and giraffes and enjoy the varied birdlife.",
      experience: "A second day of following the herds, wherever they go.",
      image: IMG.crossingWave,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 7,
      title: "Final migration game drive and a relaxed afternoon",
      description:
        "You have another morning in the Northern Serengeti to look for migration activity and watch wildlife near your camp. This extra day offers more flexibility if the herds have been moving between river sections, and you don't have to rush into a long transfer.\n\nYour guide checks the latest reports and decides whether to revisit a promising crossing area or explore another part of the north. You may find large herds of wildebeest and zebra, elephants, giraffes and predators looking for opportunities among the grazers.\n\nAfter lunch, the afternoon is yours to plan. You can relax at camp, enjoy more game viewing where permitted or take a shorter drive nearby. If you are flying the next morning, your guide and the camp team can confirm your departure and baggage arrangements.",
      experience: "One more morning with the herds, then an easy afternoon.",
      image: IMG.sunsetDrive,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 8,
      title: "Optional flight to Arusha or Kilimanjaro, or return by road",
      description:
        "You enjoy breakfast at camp and, depending on your departure, a short final game drive if the flight schedule, park rules and transfer times allow. We leave it out if it risks delaying your flight.\n\nIf you fly back, you transfer to the airstrip, commonly Kogatende, for your scheduled flight to Arusha or another available airport. This is generally the most convenient option if you want to avoid a long drive, and it can also suit travellers continuing to Zanzibar, subject to confirmed schedules.\n\nIf you prefer not to fly, you can return by road with your private vehicle and guide. The drive to Arusha is long and can take much of the day, depending on your camp, the roads and the stops you make.",
      experience: "A last morning in the north before heading home.",
      notes: [
        "Flight routes and times vary by airline and season, and some flights stop at another airstrip first. A direct flight to Kilimanjaro shouldn't be assumed, so we confirm your exact flight before you book.",
      ],
      image: IMG.flight,
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("tarangire", "Night 1", "Tarangire and the Manyara area", STAYS_TARANGIRE),
    stop("highlands", "Night 2", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("central", "Night 3", "Central Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("north", "Nights 4, 5, 6 and 7", "Northern Serengeti and the Mara River", STAYS_NORTH_SERENGETI),
  ],
  sections: [
    {
      heading: "How to choose your stay and return option",
      paragraphs: [
        "For the best balance of wildlife and comfort, choose your accommodation not only by its comfort level but also by its location relative to the herds and the northern airstrip. Convenient camps are in high demand during peak season, so we recommend booking early.",
        "If your main priority is the Mara River crossing, the most important investment is time in the north, a knowledgeable guide and a flexible approach. Even with excellent planning, a crossing is a natural event and can't be guaranteed.",
      ],
    },
  ],
  faqs: [
    {
      question: "Do I stay at the same camp for all four nights in the north?",
      answer:
        "Usually, yes, which means you unpack once and spend your time with the herds. If they move a long way, Ombeni can suggest splitting your stay between two areas.",
    },
    {
      question: "Do I have to stay in the vehicle at a crossing point?",
      answer:
        "Yes, except in an emergency or where park rules expressly allow otherwise. Vehicles must also stay in permitted viewing areas and keep their distance, which protects the herds.",
    },
    {
      question: "Is the flight back included?",
      answer:
        "Not at Mid-range, where it is an optional add-on. It is part of the Luxury and High-end luxury levels. We confirm flights together with your camp.",
    },
  ],
});
