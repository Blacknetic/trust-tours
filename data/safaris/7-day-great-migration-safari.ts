import {
  IMG,
  STAYS_CENTRAL_SERENGETI,
  STAYS_HIGHLANDS,
  STAYS_NORTH_SERENGETI,
  STAYS_TARANGIRE,
  crossingTrip,
  stop,
} from "./shared";

// Cross Migration Safari, from Ombeni's "7 Day-by-day itinerary, 6 nights, Great
// Migration river crossings" document. It keeps the slug and old URL of the page
// it replaces, as this is the site's page for "great migration safari" searches.
export const crossMigration7 = crossingTrip({
  slug: "7-day-great-migration-safari",
  oldUrl:
    "/booking/7-day-6-night-lower-budget-and-mid-range-safari-tracking-the-great-migration-crossing-with-trust-tours-and-safaris/",
  reviewSnippets: [
    {
      author: "Julieth Nathaniel",
      text: "Trust Tours made our Kilimanjaro trek and Serengeti safari unforgettable. Professional guides, excellent service, and seamless logistics ensured an amazing experience. Truly the best.",
      source: "Google",
    },
  ],
  seoTitle: "7-Day Great Migration Safari, Mara River | Trust Tours",
  metaDescription:
    "A private 7-day Great Migration safari in Tanzania: Tarangire, Ngorongoro Crater and three nights by the Mara River, July to October. From $3,185 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "7-Day Cross Migration Safari – Tarangire, Ngorongoro & the Mara River",
  shortName: "7-Day Cross Migration Safari",
  days: 7,
  heroImage: IMG.crossingDust.src,
  summary:
    "A relaxed and varied private safari, with Tarangire, the Ngorongoro Crater and Central Serengeti, then three nights in the north and two full days searching for the herds.",
  overview: [
    "Seven days gives you a more relaxed and varied Great Migration safari than a shorter trip. You enjoy Tarangire's elephants and baobabs, explore the Ngorongoro Crater and experience Central Serengeti's resident wildlife before heading north.",
    "You then spend three nights in the Northern Serengeti, with two full days dedicated to searching for the herds. That extra time is especially useful, because river crossings depend on the animals and can't be scheduled.",
    "The main Mara River crossing season generally runs from July to October, and late July to September is a particularly popular time. The migration follows the rain, the grazing and the behaviour of the herds, not a fixed timetable.",
    "Tanzania National Parks publishes rules for watching the crossings, covering designated viewing points, vehicle positions and leaving the herds free to move. They protect the wildlife and keep the experience special for everyone, and your guide follows them throughout.",
  ],
  atAGlance: [
    { label: "Duration", value: "7 days / 6 nights" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Main experience", value: "Great Migration, with two full days near the Mara River" },
    { label: "Best period", value: "July to October" },
    { label: "Route", value: "Arusha · Tarangire · Ngorongoro Crater · Central Serengeti · Northern Serengeti" },
    { label: "Start", value: "Kilimanjaro Airport or Arusha" },
    { label: "Finish", value: "Arusha, by road or optional flight" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with a pop-up roof" },
  ],
  highlights: [
    "Three nights in the north: Your best chance of being there when the herds move.",
    "Two full migration days: Search different areas around the Mara River.",
    "Ngorongoro Crater: An early descent where permitted, with a picnic on the crater floor.",
    "Central Serengeti: Resident lions, leopards and cheetahs around Seronera.",
    "Tarangire: Ancient baobabs and large elephant herds.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Kilimanjaro Airport or Arusha to Tarangire National Park",
      description:
        "Your safari begins with a warm welcome from your private guide at Kilimanjaro International Airport or your hotel in Arusha. After a briefing, you travel to Tarangire National Park, famous for its ancient baobabs, large elephant herds, seasonal swamps and wildlife-rich landscapes.\n\nOn your game drive, you look for elephants, giraffes, zebras, wildebeest, buffaloes, antelopes and predators such as lions and leopards. Your guide chooses the route according to sightings, the roads and the season. You enjoy a picnic lunch at an authorised site and continue game viewing in the afternoon before transferring to your lodge for dinner.",
      experience: "A first game drive among the elephants and baobabs.",
      notes: [
        "If your arrival time doesn't allow a direct start, you may need an extra night before the safari, which we quote separately.",
      ],
      image: IMG.elephantsVehicle,
      meals: "Picnic lunch and dinner",
      accommodation: "Your chosen stay in the Tarangire area",
      stayId: "tarangire",
    },
    {
      day: 2,
      title: "Ngorongoro Crater safari",
      description:
        "After breakfast, you travel to the Ngorongoro Conservation Area for a memorable game drive inside the crater. We can request an early descent, aiming for about 6am, subject to the access arrangements and permits for your date.\n\nYou explore grasslands, wetlands, woodland and water sources while searching for lions, elephants, buffaloes, zebras, wildebeest, hyenas, hippos and, with luck, the endangered black rhino. You stop for a picnic lunch at an authorised site and continue game viewing before climbing out of the crater.\n\nLater, you transfer to your lodge in Karatu or the surrounding highlands, where you can relax, enjoy dinner and prepare for your Serengeti journey.",
      experience: "A day on the crater floor, one of Africa's great wildlife settings.",
      image: IMG.craterZebra,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 3,
      title: "Karatu to Central Serengeti",
      description:
        "After breakfast, you travel into Serengeti National Park as the highlands give way to the vast plains. Your guide looks for wildlife along the route and, where time allows, explores Central Serengeti around Seronera, an area known for its resident lions, leopards, cheetahs, elephants, giraffes, zebras and other plains animals.\n\nYou enjoy a picnic lunch during the journey and continue game viewing according to the roads and the time available. In the afternoon, you check in to your chosen camp or lodge and enjoy dinner, ready for the journey north.",
      experience: "From the highlands to the endless plains.",
      image: IMG.serengetiLion,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in Central Serengeti",
      stayId: "central",
    },
    {
      day: 4,
      title: "Central to Northern Serengeti, following the migration",
      description:
        "After breakfast, you leave for the Northern Serengeti, where the Mara River and the surrounding plains attract migrating wildebeest and zebra in the crossing season. Your guide looks for herds and other wildlife along the route, choosing stops according to recent sightings, the roads and where your camp lies.\n\nYou enjoy a picnic lunch and continue north, where you may see elephants, giraffes, antelopes, predators and large herds of plains game. On arrival, you settle in and talk through the next day's plan with your guide.",
      experience: "North to the Mara River, with game viewing all the way.",
      image: IMG.northPlains,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 5,
      title: "Full-day Mara River crossing search",
      description:
        "This is the main day dedicated to the Great Migration. After an early breakfast, you head out to search for wildebeest and zebra around the Mara River and nearby plains. You may see herds grazing, moving along the riverbanks, gathering at a crossing point or hesitating before entering the water.\n\nIf a crossing happens during your visit, you may see an unforgettable wildlife spectacle as animals enter the river and climb the far bank. Crocodiles, hippos, lions, leopards and hyenas are all part of this ecosystem, although sightings vary.\n\nYour guide uses recent sightings to choose viewing areas and follows park rules, including staying at authorised crossing points and giving the animals space. You enjoy a picnic lunch during the drive and keep exploring in the afternoon before returning to camp for dinner.",
      experience: "Your first full day with the herds at the river.",
      notes: [
        "River crossings are natural events and can't be guaranteed. Herds may wait for hours, cross somewhere else or not cross during your visit.",
      ],
      image: IMG.crossing,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 6,
      title: "A second full day in the Northern Serengeti",
      description:
        "You spend another full day in the Northern Serengeti, with more time to find the herds and visit different areas around the Mara River. After breakfast, your guide checks where they have been seen recently and plans a flexible game drive, which may include river-viewing areas, open grasslands and wooded habitats.\n\nThis extra day is especially valuable because the migration doesn't keep to a timetable. Herds may move between crossing points, pause for a long time or change direction.\n\nYou enjoy a picnic lunch at an authorised place and continue through the afternoon. As well as the migration, you may see elephants, giraffes, antelopes, lions, leopards, hyenas and plenty of birdlife. You return to camp for dinner and your final night in the north.",
      experience: "A second chance at the river, and time for the rest of the north.",
      image: IMG.riverGathering,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 7,
      title: "Final game drive and return by flight or road",
      description:
        "You enjoy breakfast and, if your schedule allows, a short final game drive for one more chance to see wildlife and photograph the landscape.\n\nIf you are flying back, you transfer to the airstrip, often Kogatende when suitable flights operate, and fly to Arusha or another agreed destination. This is the quickest option and avoids a long road journey.\n\nIf you are returning by road, you travel towards Arusha by safari vehicle. It is a long journey, and any extra wildlife viewing depends on the route and driving time.",
      experience: "One last look at the Northern Serengeti.",
      notes: [
        "If you have an international flight the same day, we recommend checking the connection carefully and considering an extra night.",
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
    stop("north", "Nights 4, 5 and 6", "Northern Serengeti and the Mara River", STAYS_NORTH_SERENGETI),
  ],
  sections: [
    {
      heading: "Why choose a seven-day migration safari?",
      paragraphs: [
        "A week gives you the variety of Tanzania's Northern Circuit together with real time in the north. Three nights there means two full days to follow the herds, so one quiet day at the river doesn't decide your trip.",
      ],
    },
  ],
  faqs: [
    {
      question: "Why spend three nights in the Northern Serengeti?",
      answer:
        "Herds can wait at the river for hours or days. Two full days in the north give you far more chance of being there when they move, and let you search different crossing points.",
    },
    {
      question: "Is the flight back to Arusha included?",
      answer:
        "Not at Mid-range, where it is an optional add-on. It is part of the Luxury and High-end luxury levels. Flights depend on your dates, so we confirm them together with your camp.",
    },
  ],
});
