import { IMG, STAYS_HIGHLANDS } from "@/data/safaris/shared";
import { STAYS_EAST_COAST, STAYS_STONE_TOWN, ZIMG, onlyLevels, safariBeachTrip, stop } from "./shared";

// From Ombeni's "6-Day Tanzania and Zanzibar Itinerary" (Oct 2026). His two
// options are "Standard Luxury" ($2,955) and "Premium Luxury" ($3,600), shown
// here as Luxury and High-end luxury. His Day 2 had a sunset cruise on arrival
// after the crater and a flight; the cruise moves to Day 3 so the day is realistic.
const LEVELS = ["luxury", "high-end"];

export const sixDaySafariZanzibar = safariBeachTrip({
  slug: "6-day-safari-zanzibar",
  seoTitle: "6-Day Safari & Zanzibar: Crater to Stone Town | Trust Tours",
  metaDescription:
    "Tarangire and the Ngorongoro Crater, then a flight to Zanzibar for Stone Town, Prison Island, Safari Blue and a night at a beach resort. From $2,955 pp.",
  destinations: ["Tarangire", "Ngorongoro", "Zanzibar"],
  title: "6-Day Safari & Zanzibar – Tarangire, the Crater and Stone Town",
  shortName: "6-Day Safari & Zanzibar",
  days: 6,
  heroImage: IMG.crater.src,
  bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  summary:
    "Two days of safari in Tarangire and the Ngorongoro Crater, then a flight to Zanzibar for Stone Town, Prison Island, Safari Blue and a last night on the beach.",
  overview: [
    "This short trip packs the best of both worlds into six days. You start with a day in Tarangire, famous for its elephants and baobabs, and a visit to a Maasai village, then spend the next morning on the floor of the Ngorongoro Crater.",
    "A short flight takes you to Zanzibar, where you stay in Stone Town for three nights: exploring the old town and a spice farm, visiting Prison Island's giant tortoises, sailing on a sunset dhow cruise and spending a full day on the Safari Blue excursion.",
    "Your last night is at a beach resort on the east coast, with a morning by the sea before you fly home.",
  ],
  atAGlance: [
    { label: "Duration", value: "6 days, 5 nights" },
    { label: "Start", value: "Kilimanjaro International Airport (JRO)" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Safari", value: "Tarangire and the Ngorongoro Crater, in a private 4×4" },
    { label: "Zanzibar", value: "3 nights in Stone Town, 1 at a beach resort" },
    { label: "Flight", value: "Mainland to Zanzibar, included" },
  ],
  highlights: [
    "Tarangire: Elephant herds and giant baobabs on your first afternoon.",
    "Maasai village: A cultural visit on the way to Karatu.",
    "Ngorongoro Crater: A morning game drive on the crater floor.",
    "Stone Town and Prison Island: The old town, a spice farm and giant tortoises.",
    "Safari Blue: A full day of sailing and snorkelling.",
  ],
  stayChoices: [
    stop("highlands", "Night 1", "Karatu and the Ngorongoro Highlands", onlyLevels(STAYS_HIGHLANDS, ...LEVELS)),
    stop("stone-town", "Nights 2–4", "Stone Town", onlyLevels(STAYS_STONE_TOWN, ...LEVELS)),
    stop("east-coast", "Night 5", "A beach resort on the east coast", onlyLevels(STAYS_EAST_COAST, ...LEVELS)),
  ],
  itinerary: [
    {
      day: 1,
      title: "Kilimanjaro Airport to Tarangire and a Maasai village",
      description:
        "Your private guide meets you at Kilimanjaro International Airport and drives you to Tarangire National Park, known for its huge elephant herds and ancient baobab trees. You spend the afternoon on a game drive, looking for elephants, lions, giraffes and zebras, with a picnic lunch in the park.\n\nOn the way to Karatu, you stop at a Maasai boma to meet the community and learn about their way of life, before dinner at your lodge in the highlands.",
      image: IMG.tarangire,
      meals: "Picnic lunch, dinner",
      accommodation: "Your chosen lodge in the Ngorongoro Highlands",
      stayId: "highlands",
    },
    {
      day: 2,
      title: "Ngorongoro Crater and the flight to Zanzibar",
      description:
        "After an early breakfast, you descend into the Ngorongoro Crater, a UNESCO World Heritage Site and one of the richest wildlife areas in Africa. You look for lions, elephants, buffaloes and the endangered black rhino, and stop for a picnic lunch by a hippo pool.\n\nIn the afternoon, you transfer to the airstrip for your flight to Zanzibar, which is included. On arrival, your driver takes you to your hotel in Stone Town for a late dinner.",
      image: IMG.craterRhino,
      notes: ["Flights to Zanzibar can leave from the Lake Manyara airstrip or Arusha. We confirm the airstrip and time with your booking."],
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 3,
      title: "Stone Town, a spice farm, Prison Island and a sunset cruise",
      description:
        "A guide leads you through Stone Town's lanes, markets and landmarks, from the Old Fort to the House of Wonders (under restoration), then on to a spice farm to taste the island's famous spices.\n\nIn the afternoon, a boat takes you to Prison Island to see its giant tortoises and swim in the turquoise water, with a seafood lunch. In the evening, you sail on a sunset dhow cruise with dinner and traditional music.",
      image: ZIMG.dhowSunset,
      meals: "Breakfast, seafood lunch, dinner on the dhow",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 4,
      title: "Safari Blue",
      description:
        "A full day on the water: you sail a traditional dhow through Menai Bay to snorkelling spots and a sandbank, then enjoy a seafood lunch with tropical fruit. You return to Stone Town in the late afternoon, with the evening free.",
      image: ZIMG.snorkel,
      meals: "Breakfast, seafood lunch",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 5,
      title: "Souvenirs in Stone Town and on to the beach",
      description:
        "Spend the morning shopping in Stone Town for spices, jewellery and colourful Tingatinga paintings. In the afternoon, you transfer to a beach resort on the east coast for an evening by the sea, with dinner on the beach.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 6,
      title: "A morning on the beach and departure",
      description:
        "Enjoy a relaxed breakfast and a last swim or a spa treatment before your private transfer to Zanzibar International Airport for your flight home.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  prices: [
    {
      id: "luxury",
      usd: 2955,
      summary: "Ombeni's standard package: a luxury lodge in the highlands and a luxury hotel in Stone Town.",
      includes: [
        "A luxury lodge in Karatu",
        "A luxury hotel in Stone Town, such as Park Hyatt or Zanzibar Serena",
        "A beach resort for the last night",
        "All the activities in the itinerary",
      ],
    },
    {
      id: "high-end",
      usd: 3600,
      summary: "Ombeni's premium package: upgraded stays, private guides and extra touches such as spa treatments.",
      includes: [
        "Upgraded lodges and hotels",
        "Private guides throughout",
        "Additional experiences, such as spa treatments",
        "All the activities in the itinerary",
      ],
    },
  ],
  included: [
    "Safari: Game drives in Tarangire and the Ngorongoro Crater, with picnic lunches.",
    "Maasai village: A cultural visit.",
    "Stone Town and spices: A guided tour and a spice farm with tastings.",
    "Prison Island: Boat trip and entry, with a seafood lunch.",
    "Sunset dhow cruise: With dinner.",
    "Safari Blue: A full-day dhow excursion with snorkelling equipment and a seafood lunch.",
  ],
  excursionsIncluded: ["safari-blue", "prison-island-nakupenda", "sunset-dhow-cruise"],
  sections: [],
  faqs: [
    {
      question: "Isn't the second day long?",
      answer:
        "It's a full day, with the crater in the morning and the flight in the afternoon. If you'd like a slower pace, we can add a night in the highlands or in Arusha.",
    },
  ],
});
