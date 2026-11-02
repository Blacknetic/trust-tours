import {
  IMG,
  STAYS_CENTRAL_SERENGETI,
  STAYS_HIGHLANDS,
  STAYS_MANYARA,
  STAYS_NORTH_SERENGETI,
  crossingTrip,
  stop,
} from "./shared";

// Ombeni names Singita Sasakwa for the Serengeti nights on this trip. It is in
// the private Grumeti Reserve in the west, so it stays out of the shared list.
const CENTRAL_OR_GRUMETI = {
  ...STAYS_CENTRAL_SERENGETI,
  "high-end": ["singita-sasakwa", ...STAYS_CENTRAL_SERENGETI["high-end"]],
  "ultra-premium": ["singita-sasakwa", ...STAYS_CENTRAL_SERENGETI["ultra-premium"]],
};

// Cross Migration Safari, from Ombeni's "7 Days Tanzania Northern Circuit Safari"
// document. It lists "Serengeti" for Days 3 to 6, with Central and northern camps
// together. Built here as a Central night, two in the north, then a Central night
// to shorten the last day. Ombeni to confirm.
export const crossMigration7Manyara = crossingTrip({
  slug: "7-day-manyara-serengeti-migration-safari",
  seoTitle: "7-Day Cross Migration Safari via Manyara | Trust Tours",
  metaDescription:
    "A private 7-day cross migration safari: Lake Manyara, Ngorongoro Crater and the Serengeti, with two nights by the Mara River. From $3,185 per person.",
  destinations: ["Arusha", "Lake Manyara", "Ngorongoro", "Serengeti"],
  title: "7-Day Cross Migration Safari – Lake Manyara, Ngorongoro & the Serengeti",
  shortName: "7-Day Cross Migration Safari via Lake Manyara",
  days: 7,
  heroImage: IMG.manyaraFlamingos.src,
  summary:
    "An immersive week on the Northern Circuit, from the Rift Valley and Lake Manyara to the Ngorongoro Crater and four nights in the Serengeti following the herds.",
  overview: [
    "Experience the best of Tanzania's Northern Circuit on an immersive seven-day private safari, combining the dramatic landscapes of the Great Rift Valley, the wildlife-rich Ngorongoro Conservation Area and the legendary Serengeti.",
    "This itinerary is designed for travellers who want to experience the Great Migration and, in the right season, the wildebeest river crossings in the Northern Serengeti. Along the way, you have chances to see the Big Five, large elephant herds, cheetahs, leopards, giraffes, zebras and thousands of wildebeest.",
    "Your safari is private, so your schedule can adapt to wildlife activity, photography and the location of the herds. During the crossing season, our team keeps track of where the herds are and plans your game drives around the most promising areas.",
    "This isn't simply a tour of a list of parks. The Serengeti changes constantly, so rather than promising a crossing, we promise to put you in the right ecosystem, at the right time of year, with an experienced guide who understands how to follow the migration.",
  ],
  atAGlance: [
    { label: "Duration", value: "7 days / 6 nights" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Main experience", value: "Big Five, Great Migration and predators" },
    { label: "Best period", value: "July to October" },
    { label: "Route", value: "Arusha · Lake Manyara · Ngorongoro Crater · Central and Northern Serengeti" },
    { label: "Start", value: "Kilimanjaro Airport" },
    { label: "Finish", value: "Arusha or Kilimanjaro Airport, by road or optional flight" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with a pop-up roof" },
  ],
  highlights: [
    "Lake Manyara: Forest elephants, baboons and blue monkeys below the Rift Valley wall.",
    "Ngorongoro Crater: A full game drive searching for the Big Five.",
    "Four nights in the Serengeti: Time for the plains, the predators and the migration.",
    "Two nights in the north: Follow the herds around the Mara River.",
    "A gentler last day: Finish with a night in the centre, not a drive from the far north.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Kilimanjaro Airport to Lake Manyara",
      description:
        "Your Tanzanian safari begins at Kilimanjaro International Airport, where your private guide welcomes you, helps with your luggage and introduces your 4×4 safari vehicle. After a short briefing, you drive towards Lake Manyara, passing farmland, villages, coffee and banana plantations and the dramatic scenery of the Great Rift Valley.\n\nAfter lunch, depending on your arrival time, you enter Lake Manyara National Park for an afternoon game drive. The park lies between the Rift Valley escarpment and the lake and, although it is fairly small, it holds a remarkable range of habitats and wildlife. You may see elephants in the forest, giraffes in the open woodland, large troops of baboons and blue monkeys, zebras, wildebeest, buffalo and many birds. At different times of year, the lake attracts thousands of flamingos and other waterbirds.\n\nAs the sun sets, you leave the park for your lodge, dinner and a restful night.",
      experience: "Forest, lake and Rift Valley views on your first game drive.",
      notes: [
        "A morning arrival gives you the most time in the park. If you land later, we adjust the plan around your flight.",
      ],
      image: IMG.manyaraFlamingos,
      meals: "Lunch and dinner",
      accommodation: "Your chosen stay at Lake Manyara",
      stayId: "manyara",
    },
    {
      day: 2,
      title: "Lake Manyara to the Ngorongoro Crater",
      description:
        "After breakfast, you leave for the Ngorongoro Conservation Area. The road climbs gradually into the highlands, with lovely views over the countryside, until you reach the crater rim and the land suddenly opens into one of Africa's most extraordinary sights. The crater is an ancient volcanic caldera about 20 kilometres across.\n\nYou descend for a long game drive on the crater floor, one of the best places in Tanzania to search for the Big Five. The open grasslands make wildlife easy to watch, while the forests, lake and wetlands offer an exceptional range of species. You may see lions in the grass, elephants, buffalo, zebras, wildebeest, hippos and possibly cheetahs. Black rhino can sometimes be seen on the plains too.\n\nYour guide stops for photographs and a picnic lunch. In the late afternoon, you climb back to the rim and continue to your lodge to enjoy the cool highland air.",
      experience: "A long day in the crater, then a quiet evening in the highlands.",
      image: IMG.crater,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 3,
      title: "Ngorongoro to Central Serengeti",
      description:
        "After an early breakfast, you set off for Serengeti National Park. Your safari continues as soon as you leave Ngorongoro, with the highlands gradually giving way to vast open plains. Your guide chooses the route according to the season and where wildlife activity is strongest.\n\nOnce inside the park, you begin your first long game drive. The plains can stretch to the horizon, and wildlife may appear almost anywhere. Predators such as lions, cheetahs, leopards and hyenas are often found near the herds, because so much prey creates good hunting opportunities.\n\nAs the light softens, you enjoy the end of your game drive before heading to camp. A Serengeti sunset is one of the defining moments of any Tanzanian safari, and the sounds of the wild carry on through dinner.",
      experience: "Your first Serengeti game drive and sunset.",
      image: IMG.sunsetDrive,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the Serengeti",
      stayId: "central-first",
    },
    {
      day: 4,
      title: "North to the Mara River",
      description:
        "You wake before sunrise and leave with your guide for an early game drive. The first hours of the day are among the best for wildlife, as predators are often active and the cool air keeps animals moving.\n\nDuring the crossing season, the aim is to reach suitable crossing areas in the Northern Serengeti as early as practical. After a picnic or camp lunch, you explore the migration zone, where large herds of wildebeest and zebra may gather around the Mara River.\n\nYou may see herds on the riverbanks, looking for safe crossing points before suddenly committing to the water, with crocodiles waiting in the river. Nature decides when and where this happens, and herds sometimes wait for hours or even days. If they aren't at a crossing point, your guide turns to the wider migration area and other wildlife, rather than spending the whole day waiting in one place.",
      experience: "Early on the road to the crossing country.",
      image: IMG.crossing,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 5,
      title: "Full-day migration tracking in the Northern Serengeti",
      description:
        "Another early start lets you carry on following the migration. This day is deliberately flexible, because the Great Migration can't be planned like a scheduled attraction. Your guide uses the latest information on herd movements to decide where to go.\n\nYou may spend the morning following wildebeest and zebra across the plains, watching predators or waiting near the river if large herds are gathering. The landscape here is beautiful, with kopjes, open grasslands, riverine vegetation and woodland.\n\nIf the herds are around the Mara River, your afternoon may be spent watching the banks for crossing activity. If they have moved away, your guide explores the nearby plains and wildlife corridors instead. The aim is to experience the migration as a living ecosystem, not simply to tick off the river. At some luxury and ultra-premium camps, the evening can end with a private sundowner, depending on the camp's location and rules.",
      experience: "A flexible day built around the latest herd movements.",
      image: IMG.riverGathering,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 6,
      title: "Game drive south through the Serengeti",
      description:
        "Your final full day in the Serengeti begins with another early game drive. The first light is excellent for photography, and lions, cheetahs and leopards may still be active.\n\nDepending on the season and the wildlife, your guide may stay a little longer in the north before driving south through the Serengeti. After lunch, you continue your game drive and make the most of your last afternoon in the park.\n\nThis is your chance to slow down and enjoy the place itself. You may see large herds of zebra and wildebeest, giraffes crossing the plains, elephants near water and predators resting beneath acacia trees. After sunset, you reach your camp or lodge for a relaxed last dinner in the Serengeti.",
      experience: "A slower day through the heart of the Serengeti.",
      image: IMG.serengetiLions,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the Serengeti",
      stayId: "central-last",
    },
    {
      day: 7,
      title: "Final game drive and return to Arusha or Kilimanjaro",
      description:
        "You wake early for a last Serengeti game drive. Depending on when you leave, you may enjoy a short sunrise drive followed by breakfast, or take breakfast with you and explore for several hours.\n\nYou then leave the Serengeti and head towards Arusha, by road or on an optional flight. The details depend on your onward plans. With a late international departure, you can continue to Kilimanjaro International Airport, and with more time, you can enjoy lunch in Arusha first.\n\nIf your flight leaves later in the evening, we can arrange a day room or an optional activity in Arusha.",
      experience: "A last sunrise on the plains before heading home.",
      image: IMG.flight,
      meals: "Breakfast and lunch",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("manyara", "Night 1", "Lake Manyara and the Rift Valley", STAYS_MANYARA),
    stop("highlands", "Night 2", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("central-first", "Night 3", "Central Serengeti", CENTRAL_OR_GRUMETI),
    stop("north", "Nights 4 and 5", "Northern Serengeti and the Mara River", STAYS_NORTH_SERENGETI),
    stop("central-last", "Night 6", "Central Serengeti", CENTRAL_OR_GRUMETI),
  ],
  sections: [
    {
      heading: "Why this safari is different",
      paragraphs: [
        "The location of your camp matters as much as its quality, so we confirm your Northern Serengeti camp according to where the herds are expected on your dates. Your accommodation can be adjusted to follow the wildlife, so your trip stays focused on the animals and not a fixed hotel list.",
        "If the herds gather at a riverbank, retreat, cross straight away or stay in one place for days, your guide adapts. That flexibility is what a private safari is for.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I do this safari outside the crossing season?",
      answer:
        "Yes, the route works through the main safari seasons, but the crossings are generally from July to October. From January to March, the herds are in the south, so a calving safari at Ndutu is a better choice.",
    },
    {
      question: "Why do I go back to Central Serengeti at the end?",
      answer:
        "It breaks up the long journey out of the park, and gives you another day of game viewing on the way. If you would prefer to stay in the north for that night and fly out, tell us in your request.",
    },
    {
      question: "Is the flight back included?",
      answer:
        "Not at Mid-range, where it is an optional add-on. It is part of the Luxury and High-end luxury levels. We confirm flights together with your camp.",
    },
  ],
});
