import { STAYS_EAST_COAST, STAYS_NORTH_COAST, ZIMG, stop, zanzibarTrip } from "./shared";

// From Ombeni's "10-Day Zanzibar Island Holiday – Beaches, Culture & Tropical
// Experiences" (2026), the source of the Zanzibar rates. His suggested days are
// kept, split between the east coast and the north so the trip ends on the
// northern beaches he describes on Day 8.
export const tenDayZanzibarIslandHoliday = zanzibarTrip({
  slug: "10-day-zanzibar-island-holiday",
  seoTitle: "10-Day Zanzibar Island Holiday Package | Trust Tours",
  metaDescription:
    "A relaxed 10-day Zanzibar holiday with 9 nights by the beach, airport transfers, Stone Town, a spice farm, Safari Blue, Jozani Forest and free days.",
  title: "10-Day Zanzibar Island Holiday – Beaches, Culture and Free Days",
  shortName: "10-Day Zanzibar Island Holiday",
  days: 10,
  heroImage: ZIMG.coast.src,
  summary:
    "Nine unhurried nights on two coasts, with Stone Town, a spice farm, Safari Blue and Jozani Forest included, and plenty of days left free for the beach.",
  overview: [
    "Imagine waking to the sound of the Indian Ocean, walking barefoot on warm white sand and swimming in turquoise water, with time to do it all without rushing. Ten days lets you enjoy Zanzibar's beaches, Swahili heritage, spice farms, forests and reefs at a relaxed pace.",
    "You spend the first five nights on the east coast, close to Stone Town, the spice farms, Menai Bay and Jozani Forest. Then you move to the north coast for four nights, where the beaches are good for swimming at most tides and the sun sets over the sea.",
    "Whether it's a honeymoon, a family holiday, an anniversary or simply a long rest, the free days can stay free or be filled with snorkelling, a sunset cruise or a spa day.",
  ],
  atAGlance: [
    { label: "Duration", value: "10 days, 9 nights" },
    { label: "Start and finish", value: "Zanzibar International Airport" },
    { label: "Nights", value: "5 on the east coast, 4 on the north coast" },
    { label: "Excursions included", value: "Stone Town, spice farm, Safari Blue and Jozani Forest" },
    { label: "Free days", value: "4, for the beach or optional trips" },
    { label: "Departures", value: "Daily, subject to availability" },
  ],
  highlights: [
    "Two coasts: The quiet east coast, then the northern beaches.",
    "Stone Town: A guided walk through the old town and its markets.",
    "Spice farm: Learn how the island's famous spices grow.",
    "Safari Blue: Sailing, snorkelling and a sandbank lunch in Menai Bay.",
    "Jozani Forest: The rare Zanzibar red colobus monkey.",
    "Time to slow down: Four free days to spend as you like.",
  ],
  stayChoices: [
    stop("east-coast", "Nights 1–5", "The east coast (Paje, Bwejuu, Pongwe or Matemwe)", STAYS_EAST_COAST),
    stop("north-coast", "Nights 6–9", "Nungwi and Kendwa, northern Zanzibar", STAYS_NORTH_COAST),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Zanzibar",
      description:
        "Your driver meets you at Zanzibar International Airport and takes you to your hotel on the east coast, with a first look at palm-lined roads, villages and the sea on the way.\n\nThe first day is kept free because flights arrive at different times. Settle in, walk the beach, and enjoy dinner at your hotel or a local seafood restaurant.",
      meals: "Dinner",
      accommodation: "Your chosen hotel on the east coast",
      stayId: "east-coast",
    },
    {
      day: 2,
      title: "A day on the beach",
      description:
        "Wake up to island life and spend the day at your own pace: swim, read under a palm, or enjoy the hotel's facilities.\n\nOn the east coast, the sea goes out a long way at low tide, revealing shallow lagoons and seaweed farms, and swimming is best around high tide. Kayaking and paddleboarding can be arranged where available.",
      image: ZIMG.pool,
      meals: "Breakfast, dinner",
      accommodation: "Your chosen hotel on the east coast",
      stayId: "east-coast",
    },
    {
      day: 3,
      title: "Stone Town",
      description:
        "You travel to Stone Town for a guided walk through one of the most fascinating old towns on the Indian Ocean. Narrow lanes lead past coral-stone houses, carved doors, small shops and markets, while your guide explains the African, Arab, Indian and European influences that shaped it.\n\nAfter lunch at a local restaurant, you have time on the waterfront before returning to your hotel.",
      notes: ["Some lanes are uneven, so wear comfortable shoes."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen hotel on the east coast",
      stayId: "east-coast",
    },
    {
      day: 4,
      title: "Spice farm",
      description:
        "A guided walk on a spice farm introduces you to cloves, cinnamon, cardamom, black pepper, vanilla, nutmeg, turmeric and lemongrass, depending on the season. You smell fresh leaves and bark, see tropical fruit growing and learn how spices are used in cooking and traditional remedies.\n\nThe afternoon is free. If you love food, ask us to add a Swahili cooking class.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen hotel on the east coast",
      stayId: "east-coast",
    },
    {
      day: 5,
      title: "Safari Blue in Menai Bay",
      description:
        "Today you see Zanzibar from the water. A traditional boat takes you through Menai Bay off the south-west coast to swim and snorkel over reefs, rest on a sandbank when the tide allows and enjoy a seafood lunch.\n\nSandbanks change shape with the tide and routes can change with the weather, so follow the crew's lead. The evening is for a quiet dinner after a day outdoors.",
      image: ZIMG.dhowBeach,
      meals: "Breakfast, seafood lunch, dinner",
      accommodation: "Your chosen hotel on the east coast",
      stayId: "east-coast",
    },
    {
      day: 6,
      title: "Jozani Forest and on to the north",
      description:
        "After breakfast, a guide takes you into Jozani Forest to look for the Zanzibar red colobus monkey, found nowhere else, and to walk among the mangroves that protect the coast.\n\nYou then drive to the north coast and check into your hotel for the last four nights.",
      notes: ["Watch the monkeys quietly and never feed or touch them. Sightings are never guaranteed."],
      meals: "Breakfast, dinner",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 7,
      title: "Choose your day: snorkelling, a sandbank or rest",
      description:
        "Today is up to you. You could add a snorkelling trip to the reefs around Mnemba Atoll, a boat to a sandbank, or simply stay on the beach. You don't need to fill every day to enjoy Zanzibar.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 8,
      title: "The northern beaches and a tropical sunset",
      description:
        "Spend the day on the beaches of Nungwi and Kendwa, where the sand is soft and the water stays deep enough to swim at most tides.\n\nIn the late afternoon, you could add a sunset dhow cruise, or watch the sun go down from the beach.",
      image: ZIMG.dhowSunset,
      meals: "Breakfast, dinner",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 9,
      title: "Your last full day",
      description:
        "Return to a favourite beach, book a spa treatment, shop for souvenirs or visit a fishing village. If you're celebrating a honeymoon, anniversary or birthday, we can help arrange a romantic dinner or a private sunset experience.\n\nLeave a little time to pack and confirm your transfer.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 10,
      title: "Departure",
      description:
        "Enjoy a final breakfast before your driver collects you for the airport, about an hour and a half away. If you're continuing to a safari or another destination, share your plans and we'll arrange the transfer.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  included: [
    "Meals: Daily breakfast and dinner, plus 2 lunches on excursion days.",
    "Stone Town: A guided walking tour and lunch.",
    "Spice farm: A guided tour.",
    "Safari Blue: A full-day boat excursion with snorkelling equipment and a seafood lunch.",
    "Jozani Forest: Entry and a guided walk.",
  ],
  excursionsIncluded: ["safari-blue"],
  sections: [
    {
      heading: "Why ten days?",
      paragraphs: [
        "Ten days gives you time for Zanzibar's beaches, culture and nature without choosing between them. The itinerary is a starting point: ask for more beach time, fewer excursions, a different area or a more luxurious level, and we'll tailor it.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I stay in one hotel instead of two?",
      answer:
        "Yes. Many guests like to move, because it shows you two sides of the island, but we can keep you in one hotel for all nine nights.",
    },
  ],
});
