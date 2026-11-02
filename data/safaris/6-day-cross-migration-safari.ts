import {
  IMG,
  STAYS_CENTRAL_SERENGETI,
  STAYS_HIGHLANDS,
  STAYS_NORTH_SERENGETI,
  STAYS_TARANGIRE,
  crossingTrip,
  stop,
} from "./shared";

// Cross Migration Safari, from Ombeni's "6-Day Great Migration River Crossing
// Safari in Tanzania" document.
export const crossMigration6 = crossingTrip({
  slug: "6-day-cross-migration-safari",
  seoTitle: "6-Day Cross Migration Safari, Tanzania | Trust Tours",
  metaDescription:
    "A private 6-day cross migration safari through Tarangire, Ngorongoro Crater, Central Serengeti and the Mara River. From $2,730 per person.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "6-Day Cross Migration Safari – Tarangire, Ngorongoro & the Serengeti",
  shortName: "6-Day Cross Migration Safari",
  days: 6,
  heroImage: IMG.crossingWave.src,
  summary:
    "Four of Tanzania's great safari experiences in one trip: Tarangire's elephants, the Ngorongoro Crater, Central Serengeti and two nights near the Mara River.",
  overview: [
    "Discover four remarkable safari experiences in one carefully planned journey: the elephants and baobab trees of Tarangire, the wildlife-rich Ngorongoro Crater, the wide plains of Central Serengeti and the Northern Serengeti, where the Great Wildebeest Migration gathers around the Mara River.",
    "This six-day itinerary is for travellers who want more than a quick wildlife tour. You have time to explore varied landscapes, search for Africa's iconic predators, photograph large herds and spend a dedicated day looking for the dramatic Mara River crossings.",
    "The main crossing season generally runs from July to October, with late July to September often especially popular. Some herds may stay in the north or move back and forth during November and December, depending on rainfall and grazing.",
    "Because the herds are unpredictable, a river crossing can never be guaranteed on a particular day. What we can do is put you in the right place, at the right time of year, with a guide who knows how to read the herds.",
  ],
  atAGlance: [
    { label: "Duration", value: "6 days / 5 nights" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Main experience", value: "Game drives and a dedicated Mara River crossing search" },
    { label: "Best period", value: "July to October" },
    { label: "Route", value: "Arusha · Tarangire · Ngorongoro Crater · Central Serengeti · Northern Serengeti" },
    { label: "Start", value: "Kilimanjaro Airport or Arusha" },
    { label: "Finish", value: "Arusha, by road or optional flight" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with a pop-up roof" },
  ],
  highlights: [
    "Tarangire: Giant baobabs, seasonal swamps and impressive elephant herds.",
    "Early crater descent: We aim to start at around 6am where the rules allow.",
    "Central Serengeti: A night among the kopjes, known for lions and leopards.",
    "Two nights in the north: Stay near Kogatende or another migration area.",
    "A full crossing day: Day 5 is built around recent herd movements.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Kilimanjaro Airport or Arusha to Tarangire National Park",
      description:
        "Your professional safari guide welcomes you at Kilimanjaro International Airport or your hotel in Arusha. After a safari briefing, you travel to Tarangire National Park, known for its giant baobab trees, seasonal swamps, open savannah and impressive elephant populations.\n\nInside the park, your guide looks for elephants, giraffes, zebras, wildebeest, buffaloes, impalas, warthogs and predators such as lions and leopards. Wildlife in Tarangire changes with the season, and the dry months often bring animals towards the Tarangire River and other water sources.\n\nYou stop for a picnic lunch at an authorised site and continue exploring in the afternoon, with time for photography and birdwatching before leaving for your lodge.",
      experience: "Elephants beneath the baobabs on your first game drive.",
      notes: [
        "A morning arrival at Kilimanjaro Airport is best for a full day in Tarangire. If your flight lands late, an extra night before the safari may be needed, and we quote that separately.",
      ],
      image: IMG.tarangire,
      meals: "Picnic lunch and dinner",
      accommodation: "Your chosen stay in the Tarangire area",
      stayId: "tarangire",
    },
    {
      day: 2,
      title: "Early Ngorongoro Crater safari",
      description:
        "After breakfast, you leave for the Ngorongoro Conservation Area for a game drive on the floor of the famous crater. We can plan an early descent, aiming for about 6am, subject to the access arrangements and rules confirmed for your date. An early start lets you explore before the day gets busier.\n\nYour guide looks for lions, elephants, buffaloes, zebras, wildebeest, hyenas, hippos and an extraordinary variety of birds. With luck, you may also see the endangered black rhino. The crater is a remarkable place to see wildlife in a compact area, although sightings depend on the animals and the day.\n\nAfter a picnic lunch at an authorised site and more exploring, you climb to the highlands and transfer to your lodge to relax before the journey into the Serengeti.",
      experience: "Early light on the crater floor, before the day gets busy.",
      image: IMG.craterRhino,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 3,
      title: "Karatu to Central Serengeti",
      description:
        "After breakfast, you leave the highlands and travel into Serengeti National Park. The scenery changes from highland farms to the vast grasslands and rocky outcrops that have made the Serengeti famous. You enjoy game viewing as you go, with the exact route depending on the roads, park rules, recent sightings and your camp's location.\n\nCentral Serengeti, particularly around Seronera, is known for wildlife all year. Your guide searches for lions resting on the rocky kopjes, leopards in the woodland, cheetahs on the open plains, elephants and herds of zebra and wildebeest. You may also see hyenas, giraffes, gazelles and a rich variety of birds.\n\nYou enjoy a picnic lunch during the day and keep exploring before checking in to your camp or lodge.",
      experience: "Lions, kopjes and your first Serengeti sunset.",
      notes: [
        "Central Serengeti isn't the main area for the Mara River crossings, but it is a wonderful introduction to the ecosystem before you head north.",
      ],
      image: IMG.serengetiLions,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in Central Serengeti",
      stayId: "central",
    },
    {
      day: 4,
      title: "Central to Northern Serengeti, following the Great Migration",
      description:
        "After breakfast, you leave for the Northern Serengeti. Your guide looks for wildlife throughout the journey, and may stop in areas where herds or resident animals have recently been seen. The drive is long, so this day combines travel with game viewing rather than giving you a full day at the river.\n\nOn the way, you may see large groups of wildebeest and zebra, giraffes, elephants, antelopes and predators. You enjoy a picnic lunch at an authorised place before continuing north.\n\nOn arrival, you check in to your camp or lodge, ideally placed for the next day's search. After dinner, your guide talks through suitable viewing areas and why patience matters so much at the river.",
      experience: "Across the Serengeti to the land of the crossings.",
      image: IMG.stormHerds,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 5,
      title: "Full-day Great Migration safari and Mara River crossing search",
      description:
        "This is the main migration day of your safari. After an early breakfast, you head out to search for wildebeest and zebra near the Mara River and the plains around it. The day is planned around recent herd movements and conditions, not a fixed timetable.\n\nYou may find herds grazing near the river, moving along its banks, gathering at a crossing point or changing direction as they assess the water. If they begin to cross, you may see wildebeest and zebra enter the river in groups and make for the far bank. Crocodiles live here too, and lions, leopards and hyenas may be nearby.\n\nYour guide takes you to permitted viewing areas and follows the park's crossing rules, which include staying in designated places, keeping vehicles still when required and giving the animals room. Lunch is a picnic during the drive, or back at camp if that works better, and you continue across the northern plains in the afternoon.",
      experience: "A day of watching, waiting and following the herds.",
      notes: [
        "A river crossing can't be guaranteed. Herds may stay at the river for hours, move elsewhere, cross when you aren't there or not cross at all.",
      ],
      image: IMG.crossing,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 6,
      title: "Final morning game drive and return by flight or road",
      description:
        "You enjoy breakfast at camp and, if your schedule allows, one last game drive in the Northern Serengeti. How long you have depends on your flight or the road journey.\n\nIf you are flying back, you transfer to the airstrip, often Kogatende for a northern trip, and board your pre-booked flight to Arusha or another agreed destination. This is the quickest option and avoids a long drive across the Serengeti.\n\nIf you are returning by road, you travel towards Arusha by safari vehicle. It is a long journey, and any extra wildlife viewing depends on the route, the roads and when you leave.",
      experience: "One last game drive in the migration country.",
      notes: [
        "If you need to catch an international flight the same day, please check the timing with us. An extra night may be the safer choice.",
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
    stop("north", "Nights 4 and 5", "Northern Serengeti and the Mara River", STAYS_NORTH_SERENGETI),
  ],
  sections: [
    {
      heading: "Important advice before booking",
      bullets: [
        "Choose the right location: For the best access to the crossing areas, stay in the Northern Serengeti, around Kogatende or another suitable northern area.",
        "Allow enough time: This trip gives you one full search day. If river crossings are your main priority, an extra night or two in the north gives you more time to search different areas.",
        "Book camps and flights together: Peak-season camps and domestic flights can be limited, so confirm both before finalising your plans.",
        "Plan your arrival: A morning arrival at Kilimanjaro Airport is best for travelling straight to Tarangire.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I start this safari if my flight lands in the evening?",
      answer:
        "Yes, but you would need an extra night near Arusha first, because Day 1 includes a game drive in Tarangire. We can add it to your quote.",
    },
    {
      question: "Is the flight back to Arusha included?",
      answer:
        "Not at Mid-range, where it is an optional add-on. It is part of the Luxury and High-end luxury levels. Flights depend on your dates, so we confirm them together with your camp.",
    },
  ],
});
