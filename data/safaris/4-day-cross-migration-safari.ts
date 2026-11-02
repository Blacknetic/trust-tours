import { IMG, STAYS_HIGHLANDS, STAYS_NORTH_SERENGETI, crossingTrip, stop } from "./shared";

// Cross Migration Safari, from Ombeni's "4-Day Great Migration River Crossing
// Safari" document.
export const crossMigration4 = crossingTrip({
  slug: "4-day-cross-migration-safari",
  seoTitle: "4-Day Cross Migration Safari, Mara River | Trust Tours",
  metaDescription:
    "A private 4-day cross migration safari: the Ngorongoro Crater, two nights in the Northern Serengeti and a full day by the Mara River. From $1,820 pp.",
  destinations: ["Arusha", "Ngorongoro", "Serengeti"],
  title: "4-Day Cross Migration Safari – Ngorongoro & the Mara River",
  shortName: "4-Day Cross Migration Safari",
  days: 4,
  heroImage: "/images/safaris/mara-crossing-zebra-wildebeest.jpg",
  summary:
    "A concentrated four-day private safari, from the Ngorongoro Crater across the Serengeti to the far north, where the Great Wildebeest Migration gathers around the Mara River.",
  overview: [
    "Experience Tanzania's extraordinary wildlife in just four days, from the spectacular Ngorongoro Crater to the vast Serengeti plains and the remote Northern Serengeti, where the Great Wildebeest Migration gathers around the Mara River.",
    "The main river crossing season generally runs from July to October, with August and September often especially popular, although the herds respond to rainfall, grazing and river conditions rather than a fixed calendar.",
    "This itinerary is designed for travellers who want a concentrated wildlife adventure without sacrificing comfort. You explore the Ngorongoro Crater, enjoy a game drive through Central Serengeti, continue into the Northern Serengeti and dedicate valuable time to searching for wildebeest and zebra near the Mara River.",
    "We believe a migration safari should be more than a list of parks and hotel nights. You may watch thousands of wildebeest spread across the plains, wait quietly as a herd gathers at the riverbank, or see the African sun disappear over the Serengeti. Some moments cannot be scheduled.",
  ],
  atAGlance: [
    { label: "Duration", value: "4 days / 3 nights" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Main experience", value: "Great Migration and Mara River crossing search" },
    { label: "Best period", value: "July to October" },
    { label: "Route", value: "Arusha · Ngorongoro Crater · Central Serengeti · Northern Serengeti" },
    { label: "Start", value: "Arusha" },
    { label: "Finish", value: "Arusha, by road or optional flight" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with a pop-up roof" },
  ],
  highlights: [
    "Two nights in the north: Stay close to the Mara River, not a long drive away.",
    "A full migration day: Day 3 is dedicated to following the herds around the river.",
    "Ngorongoro Crater: A game drive across the crater's grasslands, wetlands and woodland.",
    "Central Serengeti: Game viewing around Seronera on your way north.",
    "Optional flight back: Save many hours on the road on your last day.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arusha to the Ngorongoro Crater",
      description:
        "Your professional safari guide meets you in Arusha, explains the route and the wildlife you may see, and begins the journey to the Ngorongoro Conservation Area.\n\nAfter reaching the crater area, you descend into the magnificent Ngorongoro Crater for a game drive across its grasslands, wetlands, woodland and seasonal water sources. You may see lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and a wide variety of birds. With good fortune, you may also find black rhinos.\n\nYou stop at an authorised picnic site for lunch, then continue exploring according to the day's sightings and park rules. In the afternoon, you climb out of the crater and transfer to your lodge in Karatu or the surrounding highlands for dinner and a restful night.",
      experience: "A game drive on the crater floor to begin your safari.",
      image: IMG.craterRoad,
      meals: "Picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 2,
      title: "Ngorongoro highlands through Central Serengeti to the north",
      description:
        "After breakfast, you leave for Serengeti National Park, travelling through changing landscapes to the endless plains. Your journey includes wildlife viewing in Central Serengeti, particularly around the Seronera area, when road conditions, travel time and park rules allow. This region is famous for its resident wildlife, including lions, leopards, cheetahs, elephants, giraffes and large herds of plains game.\n\nYou enjoy a picnic lunch on the way and continue north towards the migration region around Kogatende and the Mara River. On arrival, you check in to your camp or lodge, enjoy dinner and prepare for the next day's migration search.",
      experience: "Across the Serengeti to the Mara River region.",
      notes: [
        "This is a long day. The drive from the crater region to the Northern Serengeti is long, so Central Serengeti is a scenic journey with game viewing, not a full day of exploring.",
      ],
      image: IMG.northPlains,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 3,
      title: "Full-day Great Migration safari in the Northern Serengeti",
      description:
        "Today is dedicated to searching for the Great Wildebeest Migration around the Mara River and the northern plains. After an early breakfast, your guide uses local knowledge and recent wildlife sightings to find promising areas where wildebeest and zebra may be gathering.\n\nYou spend time following the herds, watching their behaviour, photographing the dramatic landscape and looking for resident predators such as lions, leopards and hyenas.\n\nIf the herds approach a crossing point, you wait patiently at an authorised viewing area and follow your guide's instructions. A crossing may happen suddenly after a long wait, or the animals may decide not to cross at all, so the day is planned around watching wildlife rather than a guaranteed event.\n\nDepending on conditions and your preferred pace, you may enjoy a packed lunch at an authorised spot or return to camp. Your guide can continue searching in the afternoon before you return to camp for dinner.",
      experience: "A whole day with the herds around the Mara River.",
      image: IMG.crossingBank,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 4,
      title: "Final game drive and return to Arusha",
      description:
        "After breakfast, you enjoy a final wildlife drive in the Northern Serengeti, with time to photograph the plains and look for animals you may not yet have seen. Your departure plans decide how much time is available.\n\nIf you have chosen to fly, you transfer to the airstrip for your flight to Arusha, subject to the airline's schedule, baggage limits and the weather. Flying saves many hours on the road and is especially useful if you have onward plans. If you are returning by road, you begin the long journey back by safari vehicle.\n\nYour safari ends in Arusha, unless you have requested a transfer to your hotel or airport.",
      experience: "One last game drive before heading home.",
      notes: [
        "Flying back is an optional add-on at Mid-range, and is part of the higher comfort levels. If you have an international flight the same day, please check the timing with us first.",
      ],
      image: IMG.flight,
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("highlands", "Night 1", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("north", "Nights 2 and 3", "Northern Serengeti and the Mara River", STAYS_NORTH_SERENGETI),
  ],
  sections: [
    {
      heading: "Important travel advice",
      bullets: [
        "Choose the right camp location: For a river crossing safari, staying in the Northern Serengeti, preferably around Kogatende, is far more practical than spending both nights in Central Serengeti.",
        "Understand the trade-off: This four-day safari passes through Central Serengeti, but it doesn't give you a full day there. The priority is reaching the north and allowing time to search for the migration.",
        "Keep expectations realistic: Even in peak season, the herds may not cross while you are watching. The wildlife, landscapes and behaviour of the herds can still make the safari memorable.",
        "Consider adding a night: If seeing a Mara River crossing is your main reason for travelling, a five or six-day safari gives you more time in the north and a less rushed trip.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is four days enough for a cross migration safari?",
      answer:
        "It can be, as you spend two nights in the north. The pace is quick, though. If a crossing is your main goal, a longer safari gives you more days by the river.",
    },
    {
      question: "Is the flight back to Arusha included?",
      answer:
        "Not at Mid-range, where it is an optional add-on. It is part of the Luxury and High-end luxury levels. We confirm flights together with your camp.",
    },
  ],
});
