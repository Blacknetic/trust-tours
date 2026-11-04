import { STAYS_EAST_COAST, ZIMG, stop, zanzibarTrip } from "./shared";

// From Ombeni's "7 Days in Paradise ... Your Ultimate Honeymoon Haven". Based on
// the east coast, where Baraza, his first choice, stands; the Nungwi turtle
// aquarium in his Day 5 is too far from there, so the day keeps Nakupenda only.
// Replaces the old entry and keeps its URL.
export const sevenDayZanzibarHoneymoon = zanzibarTrip({
  slug: "7-day-zanzibar-honeymoon",
  tags: ["honeymoon"],
  seoTitle: "7-Day Zanzibar Honeymoon: Beaches & Romance | Trust Tours",
  metaDescription:
    "A Zanzibar honeymoon: a couples' spa treatment, Stone Town, Mnemba snorkelling, Safari Blue, Nakupenda sandbank, Kizimkazi dolphins and beach dinners.",
  title: "7-Day Zanzibar Honeymoon – Beaches, Reefs and Romance",
  shortName: "7-Day Zanzibar Honeymoon",
  days: 7,
  heroImage: ZIMG.dhowBeach.src,
  summary:
    "Six nights at a romantic east-coast resort, with a couples' spa treatment, beach dinners, Stone Town, Mnemba, Safari Blue, Nakupenda and Kizimkazi's dolphins.",
  overview: [
    "This honeymoon is paced for two: one beautiful resort on the quiet east coast for all six nights, with special touches built in, from a couples' spa treatment on arrival to candlelit dinners on the beach.",
    "Between lazy mornings, you explore Stone Town and a spice farm, snorkel at Mnemba, sail Menai Bay on the Safari Blue trip and picnic on the white Nakupenda sandbank.",
    "On your final full day, you look for dolphins off Kizimkazi and walk in Jozani Forest, before a farewell dinner with live Zanzibari music.",
  ],
  atAGlance: [
    { label: "Duration", value: "7 days, 6 nights" },
    { label: "Start and finish", value: "Zanzibar International Airport" },
    { label: "Nights", value: "6 at one resort on the east coast" },
    { label: "Romantic touches", value: "Couples' spa treatment, beach dinner and a farewell dinner with music" },
    { label: "Meals", value: "Daily breakfast, 3 lunches and 5 dinners" },
    { label: "Excursions included", value: "Stone Town, spice farm, Mnemba, Safari Blue, Nakupenda, Kizimkazi and Jozani" },
  ],
  highlights: [
    "A couples' spa treatment: To unwind on your first afternoon.",
    "Candlelit dinners: On the beach on your first night, and a farewell dinner with music.",
    "Mnemba and Safari Blue: Two days on the water, snorkelling and sailing.",
    "Nakupenda sandbank: A seafood picnic on a ribbon of white sand.",
    "Dolphins and Jozani: Kizimkazi's dolphins and the red colobus monkeys.",
  ],
  stayChoices: [stop("east-coast", "Nights 1–6", "The east coast (Bwejuu, Paje, Pongwe or Matemwe)", STAYS_EAST_COAST)],
  itinerary: [
    {
      day: 1,
      title: "Arrival and a couples' spa treatment",
      description:
        "A private driver meets you at Zanzibar International Airport and takes you to your resort on the east coast. After checking in, the afternoon begins with a couples' spa treatment, then time to walk the beach or swim.\n\nIn the evening, you enjoy a candlelit dinner on the sand, lit by lanterns and set to the sound of the waves.",
      meals: "Candlelit welcome dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 2,
      title: "Stone Town and a spice farm",
      description:
        "A guide shows you Stone Town's lanes, the Old Fort, the House of Wonders (under restoration) and the Sultan's Palace, and tells the story of the island's spice trade and Swahili culture. After a Zanzibari lunch, you visit a spice farm to smell and taste cloves, nutmeg and cinnamon.\n\nIn the evening, you can add a private sunset dhow cruise before returning to the resort.",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 3,
      title: "Mnemba snorkelling",
      description:
        "A boat takes you from Matemwe to the reefs around Mnemba Atoll, among the best snorkelling on the island, with coral, tropical fish, turtles and often dolphins. Lunch is packed for the boat.\n\nBack at the resort, you can book a massage or simply watch the evening light over the lagoon before a seafood dinner.",
      image: ZIMG.snorkel,
      notes: ["Mnemba Island itself is private, so trips visit the surrounding reefs."],
      meals: "Breakfast, packed lunch, seafood dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 4,
      title: "Safari Blue in Menai Bay",
      description:
        "You sail a traditional dhow through the Menai Bay Conservation Area off the south-west coast, stopping at sandbanks and small islands to swim and snorkel. Lunch is a seafood barbecue on the beach.\n\nYou're back in the early evening, with the night free for a quiet dinner for two.",
      image: ZIMG.dhowSunset,
      meals: "Breakfast, seafood lunch, dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 5,
      title: "Prison Island and the Nakupenda sandbank",
      description:
        "From Stone Town, a boat takes you to Prison Island to meet its giant tortoises, then to the Nakupenda sandbank, a stretch of white sand in turquoise water, for a seafood picnic, snorkelling and time in the sun.\n\nThe evening is yours, with a private dinner in your villa or on the beach if you'd like to arrange one.",
      meals: "Breakfast, seafood picnic, dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 6,
      title: "Kizimkazi dolphins, Jozani Forest and a farewell dinner",
      description:
        "An early boat trip from Kizimkazi on the south coast looks for bottlenose and humpback dolphins. You watch them from the boat, and your skipper will tell you when it is calm enough to slip into the water quietly.\n\nIn the afternoon, you visit Jozani Forest for the red colobus monkeys and the mangrove boardwalk. Your last evening ends with a farewell dinner and live Zanzibari music.",
      notes: ["We work with boat crews who keep their distance and never chase the dolphins."],
      meals: "Breakfast, lunch, farewell dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 7,
      title: "Departure",
      description:
        "Take your time over a last breakfast by the ocean and a final swim. Ask the resort about a late checkout, subject to availability, before your transfer to the airport.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  included: [
    "Romance: A couples' spa treatment, a candlelit beach dinner and a farewell dinner with live music.",
    "Meals: Daily breakfast, 3 lunches and 5 dinners.",
    "Stone Town and spices: A guided tour with entry to the historic sites, lunch and a spice farm.",
    "Mnemba: A snorkelling boat trip with equipment and a packed lunch.",
    "Safari Blue: A full-day dhow excursion with snorkelling equipment and a seafood lunch.",
    "Prison Island and Nakupenda: Boat, entry, snorkelling equipment and a seafood picnic.",
    "Kizimkazi and Jozani: A dolphin boat trip, forest entry and a guided walk.",
  ],
  excursionsIncluded: ["mnemba-snorkelling", "safari-blue", "prison-island-nakupenda", "kizimkazi-dolphins"],
  sections: [],
  faqs: [
    {
      question: "Can you add more honeymoon touches?",
      answer:
        "Yes. Tell us it's your honeymoon and we'll ask your resort about a room setup, a private beach dinner or a sunset dhow cruise for two.",
    },
    {
      question: "Can we combine this with a safari?",
      answer:
        "Yes, and many couples do. Start with a few days in the northern parks or the Serengeti, then fly to Zanzibar. We book it all as one trip.",
    },
  ],
});
