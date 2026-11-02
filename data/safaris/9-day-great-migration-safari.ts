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

// Cross Migration Safari, from Ombeni's two "9-Day Tanzania Great Migration
// Safari" documents, which are the same trip. His bank details and payment plan
// stay out, and so does "Farm of Dream Lodge" until he confirms what it is.
export const crossMigration9 = crossingTrip({
  slug: "9-day-great-migration-safari",
  seoTitle: "9-Day Great Migration Safari, Tanzania | Trust Tours",
  metaDescription:
    "A private 9-day Great Migration safari: Tarangire, Ngorongoro Crater, and three nights in Central and two in Northern Serengeti. From $4,095 per person.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "9-Day Cross Migration Safari – Tarangire, Ngorongoro, Central & Northern Serengeti",
  shortName: "9-Day Cross Migration Safari",
  days: 9,
  heroImage: IMG.sunsetDrive.src,
  summary:
    "Our longest cross migration safari: nine days from Tarangire and the Ngorongoro Crater to the plains of Central Serengeti and the remote north around the Mara River.",
  overview: [
    "Spend nine unforgettable days exploring Tanzania's iconic wildlife destinations, from the ancient baobabs and elephant herds of Tarangire to the breathtaking Ngorongoro Crater, the wildlife-rich plains of Central Serengeti and the remote north, where the famous Mara River crossings may take place.",
    "This carefully planned safari combines varied landscapes, exciting game drives and valuable time in the Northern Serengeti during the crossing season. With three nights in Central Serengeti and two in the north, you can explore different habitats, search for predators and follow the wildebeest and zebras.",
    "The migration changes with the rainfall, the grazing and the movements of the animals. The main crossing season generally runs from July to October, particularly late July, August and September, but individual crossings can't be guaranteed.",
    "Staying several nights in the Serengeti also gives you time to enjoy the safari itself. Central Serengeti stays rewarding even when the main herds are farther north or south, because many animals live there all year.",
  ],
  atAGlance: [
    { label: "Duration", value: "9 days / 8 nights" },
    { label: "Safari style", value: "Private, with a professional driver-guide" },
    { label: "Main experience", value: "Serengeti predators, the migration and the Mara River" },
    { label: "Best period", value: "July to October, particularly late July to September" },
    { label: "Route", value: "Arusha · Tarangire · Ngorongoro Crater · Central and Northern Serengeti" },
    { label: "Start", value: "Kilimanjaro Airport, Arusha Airport or Arusha" },
    { label: "Finish", value: "Arusha, by road or optional flight" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with a pop-up roof" },
  ],
  highlights: [
    "Five nights in the Serengeti: Three in the centre and two in the north.",
    "A full day for the big cats: Lions, leopards and cheetahs in Central Serengeti.",
    "A dedicated river day: Day 7 is given to the herds around the Mara.",
    "No rushed return: A last night in the centre breaks the long journey back.",
    "Ngorongoro and Tarangire: Two of Tanzania's great wildlife parks on the way.",
  ],
  itinerary: [
    arrivalDay("arusha"),
    {
      day: 2,
      title: "Arusha to Tarangire National Park and Karatu",
      description:
        "After an early breakfast, you meet your professional guide and leave for Tarangire National Park, celebrated for its elephant herds, giant baobabs, scenic savannah and the wildlife that gathers around the Tarangire River.\n\nOn your game drive, you look for elephants in the woodland, giraffes feeding on acacia trees, zebras and wildebeest on the grasslands and buffalo near water. Tarangire is also home to lions and leopards, although sightings depend on the day. Your guide helps you understand the animals' behaviour, and the scenery makes for wonderful photographs.\n\nYou enjoy a picnic lunch at an authorised place before continuing in the afternoon. Later, you leave the park for Karatu, a pleasant highland town and a convenient base for the Ngorongoro Crater.",
      experience: "Elephants, baobabs and the Tarangire River.",
      image: IMG.tarangire,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in Karatu",
      stayId: "karatu",
    },
    {
      day: 3,
      title: "Karatu to the Ngorongoro Crater and highlands",
      description:
        "After an early breakfast, you travel to the Ngorongoro Conservation Area and descend into the crater for a long game drive. This volcanic caldera is surrounded by steep walls and holds grasslands, woodland, wetlands and water sources that support an impressive concentration of wildlife.\n\nYou search for lions, elephants, buffalo, zebras, wildebeest, hippos, hyenas and other residents. There is also a chance of seeing the endangered black rhino, although sightings are never guaranteed. Your guide uses local knowledge and current sightings to make the most of your time.\n\nAfter a picnic lunch at an authorised site, you continue across the crater floor before climbing to the rim. In the afternoon, you transfer to your accommodation in the highlands to relax in the cooler air.",
      experience: "A long game drive beneath the crater walls.",
      image: IMG.craterRoad,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "crater",
    },
    {
      day: 4,
      title: "Ngorongoro Highlands to Central Serengeti",
      description:
        "After breakfast, you leave for Serengeti National Park, crossing the conservation area as the scenery changes from highlands to open plains and vast savannah.\n\nAs you enter the Serengeti, you begin looking for wildlife. Depending on the season, you may see zebras, wildebeest, gazelles, giraffes, elephants and predators resting near the rocky kopjes. Central Serengeti is an important year-round wildlife area, and its plains, kopjes and scattered trees are excellent for lions, leopards, cheetahs, elephants and hyenas.\n\nYou enjoy a picnic lunch on the way, then an afternoon game drive if time and park rules allow. Your guide explains how the migration moves through the Serengeti during the year. You arrive at your lodge or camp for dinner and the first of three nights in this wildlife-rich region.",
      experience: "Into the Serengeti, with your first afternoon game drive.",
      image: IMG.northPlains,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in Central Serengeti",
      stayId: "central-first",
    },
    {
      day: 5,
      title: "Full-day Central Serengeti safari: predators and plains wildlife",
      description:
        "You wake to the sounds of the African wilderness and enjoy breakfast before a full day of wildlife exploration. This region is especially rewarding if you are interested in predators. Its varied landscapes support resident lion prides, leopards resting in trees or rocky areas, cheetahs hunting across the plains and hyenas moving through the ecosystem.\n\nYour guide plans the route according to recent sightings, the weather and the best opportunities available. You may also see large herds of wildebeest and zebras, along with gazelles, giraffes, elephants, buffalo and many birds.\n\nA picnic lunch means you can stay out on the plains instead of returning to camp in the middle of the day. You continue through the afternoon, taking time to watch the animals and photograph the landscape, and return in the late afternoon or early evening.",
      experience: "A whole day looking for the Serengeti's big cats.",
      image: IMG.serengetiLions,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in Central Serengeti",
      stayId: "central-first",
    },
    {
      day: 6,
      title: "Central to Northern Serengeti",
      description:
        "After breakfast, you begin your journey north through grasslands, rolling hills, rocky outcrops and woodland, with chances to see wildlife along the way.\n\nAs you travel, your guide looks for herds and other animals, using the latest information on their movements. In the crossing season, wildebeest and zebras may gather near the Mara River, sometimes staying on the banks for long periods before deciding whether to cross.\n\nThe drive can take a good part of the day, so your guide balances travel time with game viewing. Once in the north, you explore where time and park rules allow, before arriving at your camp or lodge for dinner and your first night in the north.",
      experience: "North to the riverine landscapes of the Mara.",
      image: IMG.stormHerds,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 7,
      title: "Full-day Northern Serengeti: Mara River crossing search",
      description:
        "Today is dedicated to exploring the Northern Serengeti and searching for the herds around the Mara River. This is one of the most exciting parts of your safari, particularly from July to September, when large numbers of wildebeest and zebras may move between Tanzania and Kenya's Maasai Mara.\n\nYou begin with an early breakfast before heading out. Your guide assesses recent wildlife activity and chooses where to explore, which may include the river, open grasslands and other permitted areas.\n\nIf the animals gather at a designated crossing point, you may see the dramatic moment when wildebeest enter the water and try to reach the far bank. Currents, steep banks and crocodiles make crossings a natural spectacle, but the herds may also wait for hours or days. Even if no crossing happens, the north offers excellent chances to see the herds and predators in a beautiful and fairly remote setting.",
      experience: "The day you came for: a full search around the Mara River.",
      image: IMG.crossing,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 8,
      title: "Northern Serengeti to Central Serengeti",
      description:
        "You enjoy breakfast and a final morning game drive in the north, depending on the timing of your journey. You then begin the drive south, looking for wildlife where time allows. Depending on the season, you may find herds of wildebeest and zebras, elephants, giraffes, antelopes and predators.\n\nAfter a picnic lunch along the way, you continue through the Serengeti. The exact route and length of the game drive depend on your camp, the roads and the wildlife.\n\nYou reach your Central Serengeti accommodation later in the day. This extra night is a practical break before your final journey, as it saves you driving all the way from the north to Arusha in a single day.",
      experience: "South through the Serengeti, without a rushed return.",
      image: IMG.riverGathering,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in Central Serengeti",
      stayId: "central-last",
    },
    {
      day: 9,
      title: "Central Serengeti to Arusha, by road or optional flight",
      description:
        "After breakfast, you begin your return journey. The best arrangement depends on your schedule, your comfort level and whether you prefer to go by road or fly.\n\nBy road, you travel through the Serengeti and on to Arusha. This is a long journey, and your arrival time depends on the route, the roads, wildlife stops and park formalities. It suits travellers with flexible onward plans.\n\nBy air, you can fly from a suitable Serengeti airstrip to Arusha or another available destination. This saves a lot of driving and may be more convenient if you are connecting elsewhere.",
      experience: "A final view of the Serengeti before heading home.",
      notes: [
        "If you have an international flight from Kilimanjaro Airport, please check the connection time with us. An extra night in Arusha may be necessary.",
      ],
      image: IMG.balloon,
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("karatu", "Night 2", "Karatu", STAYS_HIGHLANDS),
    stop("crater", "Night 3", "The Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("central-first", "Nights 4 and 5", "Central Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("north", "Nights 6 and 7", "Northern Serengeti and the Mara River", STAYS_NORTH_SERENGETI),
    stop("central-last", "Night 8", "Central Serengeti", STAYS_CENTRAL_SERENGETI),
  ],
  sections: [
    {
      heading: "Your accommodation plan",
      paragraphs: [
        "This trip has eight nights in total, including your arrival night in Arusha, with three nights in Central Serengeti and two in the Northern Serengeti.",
        "If you would prefer to spend all eight nights on safari, without an arrival night in Arusha, we can adjust the plan and confirm the revised route and price. Northern camps should be chosen early for the crossing season, because suitable ones are in high demand.",
      ],
    },
  ],
  faqs: [
    {
      question: "Why spend three nights in Central Serengeti?",
      answer:
        "Central Serengeti has wildlife all year, so it gives you great game drives whatever the herds are doing. It also breaks the long drives to and from the north.",
    },
    {
      question: "Can I spend more nights in the north?",
      answer:
        "Yes. If a crossing is your main goal, tell us in your request and we can change the balance of nights. The 8-day safari with four nights in the north is another good option.",
    },
    {
      question: "Is the flight back to Arusha included?",
      answer:
        "Not at Mid-range, where it is an optional add-on. It is part of the Luxury and High-end luxury levels. We confirm flights together with your camp.",
    },
  ],
});
