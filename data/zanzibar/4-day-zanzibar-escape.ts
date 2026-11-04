import { STAYS_NORTH_COAST, STAYS_STONE_TOWN, ZIMG, stop, zanzibarTrip } from "./shared";

// From Ombeni's "4-Day Zanzibar Itinerary: A Perfect Escape" (two near-identical
// copies, one titled 5-Day). Its Day 3 put Mnemba and a Safari Blue trip on the
// same day at opposite ends of the island, so the route is rebuilt: two nights
// in Stone Town, then Mnemba on the way to one night in the north. Keeps the URL.
export const fourDayZanzibarEscape = zanzibarTrip({
  slug: "4-day-zanzibar-escape",
  tags: ["honeymoon"],
  seoTitle: "4-Day Zanzibar Escape: Stone Town & Mnemba | Trust Tours",
  metaDescription:
    "A short Zanzibar escape: Stone Town, a spice tour, Prison Island and Nakupenda sandbank, snorkelling at Mnemba and a night on the north coast.",
  title: "4-Day Zanzibar Escape – Stone Town, Sandbanks and Mnemba",
  shortName: "4-Day Zanzibar Escape",
  days: 4,
  heroImage: ZIMG.coast.src,
  summary:
    "A short, full escape: Stone Town and its spice farms, a sandbank picnic, snorkelling at Mnemba and a last night by the sea in Nungwi.",
  overview: [
    "Four days is enough for a real taste of Zanzibar if the route is planned well. You start in Stone Town, the island's historic heart, with a guided walk, the Darajani market and a sunset dhow cruise on your first evening.",
    "Next comes a spice farm, then a boat trip to Prison Island's giant tortoises and the white Nakupenda sandbank for swimming and a seafood lunch.",
    "On the third day, you snorkel the reefs around Mnemba Atoll before moving to the north coast for a final night by the beach, and a visit to the sea turtles of Nungwi before you fly home.",
  ],
  atAGlance: [
    { label: "Duration", value: "4 days, 3 nights" },
    { label: "Start and finish", value: "Zanzibar International Airport" },
    { label: "Nights", value: "2 in Stone Town, 1 in Nungwi" },
    { label: "Excursions included", value: "Stone Town, spice farm, Prison Island and Nakupenda, Mnemba snorkelling, sunset dhow cruise" },
    { label: "Meals", value: "Daily breakfast, 2 lunches and 3 dinners" },
    { label: "Good for", value: "Short breaks, honeymoons and a beach finish after a safari" },
  ],
  highlights: [
    "Stone Town: A guided walk and the Darajani market.",
    "Sunset dhow cruise: Your first evening on the water.",
    "Prison Island and Nakupenda: Giant tortoises, then a sandbank picnic.",
    "Mnemba snorkelling: Clear water and coral reefs off the north-east coast.",
    "Sea turtles: Baraka Natural Aquarium in Nungwi on your last morning.",
  ],
  stayChoices: [
    stop("stone-town", "Nights 1–2", "Stone Town", STAYS_STONE_TOWN),
    stop("north-coast", "Night 3", "Nungwi and Kendwa, northern Zanzibar", STAYS_NORTH_COAST),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival, Stone Town and a sunset dhow cruise",
      description:
        "You are met at Zanzibar International Airport and driven to your hotel in Stone Town. Your guide then leads you through the old town's lanes, past the Old Fort, the House of Wonders (under restoration) and the Sultan's Palace, and into the busy Darajani market, full of spices, fruit and fabrics.\n\nAs the sun goes down, you board a traditional dhow for a cruise along the coast, then enjoy a Swahili dinner at a local restaurant.",
      image: ZIMG.dhowSunset,
      meals: "Dinner",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 2,
      title: "Spice farm, Prison Island and Nakupenda sandbank",
      description:
        "In the morning, you visit a spice farm to see, smell and taste cloves, cinnamon, nutmeg and vanilla, and learn why Zanzibar became known as the Spice Island.\n\nIn the afternoon, a boat takes you to Changuu, or Prison Island, home to giant Aldabra tortoises, and then to Nakupenda, a bright white sandbank surrounded by clear water. You swim, snorkel and enjoy a seafood lunch on the sand before returning to Stone Town.",
      notes: ["The sandbank changes with the tide, so your guide times the visit for the best conditions."],
      meals: "Breakfast, seafood lunch, dinner",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 3,
      title: "Mnemba snorkelling and on to Nungwi",
      description:
        "You leave Stone Town early for Matemwe on the north-east coast and take a boat out to the reefs around Mnemba Atoll, one of the best places on the island to snorkel. Expect clear water, coral and tropical fish, with a chance of seeing dolphins on the way.\n\nAfterwards, you continue to the north coast and check into your beach hotel, with the rest of the day free to swim and watch the sunset.",
      image: ZIMG.snorkel,
      notes: ["Mnemba Island itself is private, so boat trips visit the surrounding reefs rather than landing on it."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 4,
      title: "Sea turtles and departure",
      description:
        "After breakfast, you visit the Baraka Natural Aquarium in Nungwi, a natural lagoon where you can see and swim near green sea turtles and learn how the local community cares for them.\n\nDepending on your flight time, you have time for a last swim before the drive to the airport, about an hour and a half away.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  included: [
    "Meals: Daily breakfast, 2 lunches and 3 dinners.",
    "Stone Town: A guided walking tour and the Darajani market.",
    "Sunset dhow cruise: On your first evening.",
    "Spice farm: A guided tour with tastings.",
    "Prison Island and Nakupenda: Boat, tortoise sanctuary entry, snorkelling equipment and a seafood lunch.",
    "Mnemba: A snorkelling boat trip with equipment.",
    "Baraka Natural Aquarium: Entry on your last morning.",
  ],
  excursionsIncluded: ["sunset-dhow-cruise", "prison-island-nakupenda", "mnemba-snorkelling"],
  sections: [],
  faqs: [
    {
      question: "Is four days enough for Zanzibar?",
      answer:
        "It's enough for the highlights if you don't mind full days. If you'd like more time on the beach, the 5-, 6- and 7-day holidays add free days.",
    },
    {
      question: "Is this good after a safari?",
      answer:
        "Yes. Many travellers fly to Zanzibar straight from the Serengeti or Arusha. We can book the flight and your safari as one trip.",
    },
  ],
});
