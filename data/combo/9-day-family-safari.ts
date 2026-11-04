import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, STAYS_TARANGIRE, stop } from "@/data/safaris/shared";
import { comboTrip } from "./shared";
import { serengetiDay } from "./days";

// From Ombeni's "9-Day Tanzania Family Safari with Older Children": two nights
// in each park area, so the family moves camp less often.
export const nineDayFamily = comboTrip({
  kind: "family",
  slug: "9-day-family-safari",
  seoTitle: "9-Day Family Safari for Older Children | Trust Tours",
  metaDescription:
    "A private family safari for older children and teenagers: two nights each in Tarangire and the Ngorongoro highlands, then three in the Serengeti.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "9-Day Family Safari with Older Children – Tarangire, Ngorongoro and the Serengeti",
  shortName: "9-Day Family Safari",
  days: 9,
  heroImage: IMG.elephantsVehicle.src,
  summary:
    "A private safari paced for families with older children and teenagers: two nights in Tarangire, two in the Ngorongoro highlands and three in the Serengeti.",
  overview: [
    "This safari is built for families travelling with older children and teenagers. Instead of moving every day, you spend two nights in Tarangire, two near the Ngorongoro Crater and three in the Serengeti, so there's time to settle in, swim and rest between game drives.",
    "Your private guide does more than find animals. They explain how elephants communicate, how predators hunt and how the crater's habitats fit together, which turns the safari into a shared adventure that teenagers remember.",
    "You travel in your own 4×4 with a pop-up roof, and we choose lodges with family rooms and pools wherever we can.",
  ],
  atAGlance: [
    { label: "Duration", value: "9 days, 8 nights" },
    { label: "Start and finish", value: "Arusha" },
    { label: "Tarangire", value: "2 nights" },
    { label: "Ngorongoro", value: "2 nights in the highlands, with a full day in the crater" },
    { label: "Serengeti", value: "3 nights" },
    { label: "Best for", value: "Families with older children and teenagers" },
  ],
  highlights: [
    "Fewer moves: Two or three nights in each place.",
    "Tarangire: Elephant families and baobabs, with time to return to the best spots.",
    "Ngorongoro Crater: A full day on the crater floor.",
    "The Serengeti: Two full days for the big cats and the herds.",
    "A guide who teaches: Behaviour, tracks and conservation explained along the way.",
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("tarangire", "Nights 2–3", "Tarangire", STAYS_TARANGIRE),
    stop("highlands", "Nights 4–5", "Karatu and the Ngorongoro highlands", STAYS_HIGHLANDS),
    stop("serengeti", "Nights 6–8", "The Serengeti", STAYS_CENTRAL_SERENGETI),
  ],
  itinerary: [
    {
      day: 1,
      title: "Welcome to Tanzania: a relaxed start in Arusha",
      description:
        "We meet you at Kilimanjaro or Arusha Airport and drive you to your hotel in Arusha, beneath Mount Meru. After the long flight, the day is free to rest, swim or explore the garden.\n\nYour guide then briefs the family on the days ahead, explains the daily routine and asks everyone what they most hope to see, from elephants and big cats to birds.",
      notes: ["Pack binoculars, sun protection, a water bottle and a small day bag for each traveller."],
      meals: "Dinner, depending on your arrival time",
      accommodation: "Your chosen hotel in Arusha",
      stayId: "arusha",
    },
    {
      day: 2,
      title: "To Tarangire National Park",
      description:
        "After breakfast, you drive to Tarangire, famous for its elephants and baobab trees. On your first game drive, look for elephant families, giraffes, zebras and antelopes, while your guide explains how the animals live together.\n\nAfter a picnic lunch and an afternoon drive, you check in to your lodge and share the day's photographs over dinner.",
      image: IMG.tarangire,
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen lodge in the Tarangire area",
      stayId: "tarangire",
    },
    {
      day: 3,
      title: "A second day in Tarangire",
      description:
        "A second day lets you explore further without packing up. An early drive in the cool morning is often the most rewarding, with animals heading for the river. Your guide can stop to read tracks and feeding signs, which older children often enjoy.\n\nIf the family wants a gentler day, there's time to rest at the lodge between drives. Some lodges offer guided walks for older children.",
      image: IMG.baobabs,
      notes: ["Walks and night drives depend on the lodge, the children's ages and park rules, and may cost extra."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen lodge in the Tarangire area",
      stayId: "tarangire",
    },
    {
      day: 4,
      title: "Into the Ngorongoro highlands",
      description:
        "You drive up from the savannah into the cool, green highlands, stopping for views on the way. The afternoon is kept light: settle into your lodge, enjoy the scenery and get ready for an early start.\n\nEvenings in the highlands can be chilly, so bring a warm layer.",
      image: IMG.craterRoad,
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen lodge in Karatu or the Ngorongoro highlands",
      stayId: "highlands",
    },
    {
      day: 5,
      title: "A full day in the Ngorongoro Crater",
      description:
        "You descend early into the Ngorongoro Crater, a vast volcanic caldera with grassland, swamps and a soda lake. Look for lions, elephants, buffaloes, zebras, wildebeest, hippos and flamingos, and keep watch for the endangered black rhino.\n\nAfter a picnic lunch in the crater, you explore more before climbing back to your lodge for the night.",
      image: IMG.craterRhino,
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen lodge in Karatu or the Ngorongoro highlands",
      stayId: "highlands",
    },
    {
      day: 6,
      title: "On to the Serengeti",
      description:
        "You drive through the Ngorongoro Conservation Area and down onto the Serengeti plains, game-viewing on the way. Your guide explains why the animals move with the seasons and how the herds of the Great Migration follow the rain.\n\nYou arrive at camp in the afternoon, with time for a short drive before dinner.",
      image: IMG.northPlains,
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen camp or lodge in the Serengeti",
      stayId: "serengeti",
    },
    serengetiDay(7, "serengeti", 1),
    serengetiDay(8, "serengeti", 2),
    {
      day: 9,
      title: "A last game drive and the journey home",
      description:
        "After breakfast and, time allowing, a short morning drive, you head back to Arusha, by road through the highlands or by a short flight from a Serengeti airstrip. If your international flight leaves early, we recommend an extra night in Arusha.",
      image: IMG.flight,
      notes: ["The flight back is included at Luxury level and above, and can be added at Mid-range."],
      meals: "Breakfast, lunch",
      accommodation: "—",
    },
  ],
  addOns: ["balloon-safari", "cultural-visit", "walking-safari", "serengeti-flight", "extra-serengeti-night", "single-supplement", "zanzibar-extension"],
  sections: [
    {
      heading: "Travelling with older children",
      bullets: [
        "Ages: The pace suits older children and teenagers. Tell us everyone's age when you enquire.",
        "Rooms: We look for family rooms or connecting tents wherever they're available.",
        "Children's rates: Some lodges charge adult rates for older children and teenagers, so we confirm each child's price in your quote.",
        "Activities: Walks, night drives and balloon flights have minimum ages that vary by operator.",
        "Health: Ask your doctor about vaccinations and malaria tablets suitable for children.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can we add Zanzibar after the safari?",
      answer:
        "Yes. Many families finish with a few days on the beach. Tick the Zanzibar add-on and we'll quote the flight, transfers and hotel.",
    },
  ],
});
