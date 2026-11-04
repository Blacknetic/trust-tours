import { STAYS_EAST_COAST, ZIMG, stop, zanzibarTrip } from "./shared";

// From Ombeni's "6-Day Zanzibar Package Tour Itinerary" (two near-identical
// versions). One beach base for all five nights, as in his document.
export const sixDayZanzibarHoliday = zanzibarTrip({
  slug: "6-day-zanzibar-holiday",
  seoTitle: "6-Day Zanzibar Holiday: Reefs & Culture | Trust Tours",
  metaDescription:
    "Six days on one Zanzibar beach: Stone Town and a spice farm, Prison Island and Nakupenda sandbank, Mnemba snorkelling, Jozani Forest and a village visit.",
  title: "6-Day Zanzibar Holiday – Beaches, Reefs and Island Culture",
  shortName: "6-Day Zanzibar Holiday",
  days: 6,
  heroImage: ZIMG.pool.src,
  summary:
    "Five nights at one east-coast beach resort, with day trips to Stone Town, Prison Island and Nakupenda, the Mnemba reefs and Jozani Forest.",
  overview: [
    "If you'd rather unpack once, this holiday keeps you at one beach resort for all five nights and brings the island to you through day trips.",
    "You explore Stone Town and a spice farm, take a boat to Prison Island's giant tortoises and the Nakupenda sandbank, snorkel the reefs around Mnemba Atoll and look for red colobus monkeys in Jozani Forest.",
    "The last full day ends in a village near Jozani, where you join a cooking session and meet the people who live there, before a farewell dinner on the beach.",
  ],
  atAGlance: [
    { label: "Duration", value: "6 days, 5 nights" },
    { label: "Start and finish", value: "Zanzibar International Airport" },
    { label: "Nights", value: "5 at one beach resort on the east coast" },
    { label: "Excursions included", value: "Stone Town and spice farm, Prison Island and Nakupenda, Mnemba, Jozani and a village visit" },
    { label: "Meals", value: "Daily breakfast, 2 lunches and 4 dinners" },
    { label: "Good for", value: "Couples and families who prefer one base" },
  ],
  highlights: [
    "One base: Five nights at the same beach resort.",
    "Stone Town and spices: The old town and a spice farm in one day.",
    "Prison Island and Nakupenda: Giant tortoises and a sandbank seafood picnic.",
    "Mnemba: A day of snorkelling over coral reefs.",
    "Jozani and a village: Red colobus monkeys and a Swahili cooking session.",
  ],
  stayChoices: [stop("east-coast", "Nights 1–5", "The east coast (Paje, Bwejuu, Pongwe or Matemwe)", STAYS_EAST_COAST)],
  itinerary: [
    {
      day: 1,
      title: "Arrival at your beach resort",
      description:
        "Your driver meets you at Zanzibar International Airport and takes you across the island to your resort on the east coast, about an hour away. The afternoon is yours to settle in by the pool, walk the beach or book a massage.\n\nIn the evening, a welcome dinner introduces you to the flavours of Swahili cooking.",
      meals: "Welcome dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 2,
      title: "Stone Town and a spice farm",
      description:
        "A guide leads you through Stone Town's lanes to the Old Fort, the House of Wonders (under restoration) and the Anglican Cathedral, built on the site of the old slave market, where a moving memorial tells the island's darker history. There is time for the markets and craft shops too.\n\nAfter a Zanzibari lunch, you visit a spice farm to see how cloves, vanilla, nutmeg and cinnamon grow, before returning to your resort.",
      meals: "Breakfast, lunch",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 3,
      title: "Prison Island and Nakupenda sandbank",
      description:
        "From Stone Town, a boat takes you to Changuu, or Prison Island, once a quarantine station and now a sanctuary for giant Aldabra tortoises, some more than a century old.\n\nYou continue to the Nakupenda sandbank, a strip of white sand surrounded by clear water, for swimming, snorkelling and a seafood barbecue picnic.",
      meals: "Breakfast, seafood lunch, dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 4,
      title: "Mnemba snorkelling",
      description:
        "You head north to Matemwe and take a boat to the reefs around Mnemba Atoll, known for coral, tropical fish and sea turtles, with a chance of dolphins on the way. Lunch is packed for the boat.\n\nCertified divers can arrange a dive here instead. You return to the resort in the afternoon, with time for the spa or a sunset walk.",
      image: ZIMG.snorkel,
      notes: ["Mnemba Island itself is private, so trips visit the surrounding reefs."],
      meals: "Breakfast, packed lunch, dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 5,
      title: "Jozani Forest, a village visit and a farewell dinner",
      description:
        "In the morning, a guide takes you through Jozani Forest to look for red colobus monkeys and walk the mangrove boardwalk.\n\nIn the afternoon, you visit a nearby village to see traditional crafts and help prepare a Swahili meal. Back at the resort, you celebrate your last night with a farewell dinner on the beach.",
      meals: "Breakfast, lunch, farewell dinner",
      accommodation: "Your chosen resort on the east coast",
      stayId: "east-coast",
    },
    {
      day: 6,
      title: "Departure",
      description:
        "Enjoy a final swim and breakfast by the sea. Ask the resort about a late checkout, subject to availability, before your transfer to the airport.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  included: [
    "Meals: Daily breakfast, 2 lunches and 4 dinners, including welcome and farewell dinners.",
    "Stone Town: A guided tour with entry to the historic sites, and lunch.",
    "Spice farm: A guided tour.",
    "Prison Island and Nakupenda: Boat, tortoise sanctuary entry, snorkelling equipment and a seafood picnic.",
    "Mnemba: A snorkelling boat trip with equipment and a packed lunch.",
    "Jozani and a village: Forest entry, a guided walk and a village cooking session.",
  ],
  excursionsIncluded: ["prison-island-nakupenda", "mnemba-snorkelling"],
  sections: [],
  faqs: [
    {
      question: "Are the drives long from the east coast?",
      answer:
        "Stone Town and Matemwe are each about an hour away, and Jozani is closer. Most excursion days start after breakfast and finish back at the resort by late afternoon.",
    },
  ],
});
