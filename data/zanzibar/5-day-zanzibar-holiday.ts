import { STAYS_EAST_COAST, STAYS_STONE_TOWN, ZIMG, stop, zanzibarTrip } from "./shared";

// From Ombeni's "5-Day Zanzibar Holiday Itinerary", with detail from his "5 Days
// Safaris and Zanzibar Holiday" (an island-only trip despite its title). Replaces
// the old 5-day entry, which was a copy of the 4-day, and keeps its URL.
export const fiveDayZanzibarHoliday = zanzibarTrip({
  slug: "5-day-zanzibar-escape",
  tags: ["honeymoon"],
  seoTitle: "5-Day Zanzibar Holiday: Town and Beach | Trust Tours",
  metaDescription:
    "Five days in Zanzibar: Stone Town and a spice tour, snorkelling at Mnemba, Jozani Forest's red colobus monkeys and two nights on the east coast.",
  title: "5-Day Zanzibar Holiday – Stone Town, Mnemba and the East Coast",
  shortName: "5-Day Zanzibar Holiday",
  days: 5,
  heroImage: ZIMG.beach.src,
  summary:
    "Two nights in Stone Town and two on the quiet east coast, with a spice tour, Mnemba snorkelling, Jozani Forest and a candlelit dinner on the beach.",
  overview: [
    "This holiday balances culture, nature and beach time across five easy days. You begin in Stone Town, where the old town's lanes, carved doors and markets tell the story of Zanzibar's Swahili and Omani past.",
    "A spice farm, a day snorkelling the reefs around Mnemba Atoll and a walk in Jozani Forest, home to the rare red colobus monkey, show you the island's natural side.",
    "You then move to the east coast at Paje or Bwejuu, where palm-lined beaches and wide lagoons make a peaceful end to the trip, with a candlelit dinner on the sand on your last evening.",
  ],
  atAGlance: [
    { label: "Duration", value: "5 days, 4 nights" },
    { label: "Start and finish", value: "Zanzibar International Airport" },
    { label: "Nights", value: "2 in Stone Town, 2 on the east coast" },
    { label: "Excursions included", value: "Stone Town, spice farm, Mnemba snorkelling, Jozani Forest" },
    { label: "Meals", value: "Daily breakfast, 2 lunches and 3 dinners" },
    { label: "Good for", value: "Couples, honeymoons and first-time visitors" },
  ],
  highlights: [
    "Stone Town: A guided walk, including the house where Freddie Mercury was born.",
    "Spice farm: Cloves, vanilla, cinnamon and nutmeg straight from the plant.",
    "Mnemba Atoll: A full morning of snorkelling with a picnic lunch.",
    "Jozani Forest: Red colobus monkeys and a mangrove boardwalk.",
    "Beach dinner: A candlelit dinner on the sand on your last night.",
  ],
  stayChoices: [
    stop("stone-town", "Nights 1–2", "Stone Town", STAYS_STONE_TOWN),
    stop("east-coast", "Nights 3–4", "The east coast (Paje, Bwejuu, Pongwe or Matemwe)", STAYS_EAST_COAST),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Zanzibar",
      description:
        "Our representative meets you at Zanzibar International Airport, helps with your luggage and drives you to your hotel in Stone Town. The afternoon is free to rest after your journey or take a first stroll to the seafront.\n\nIn the evening, you enjoy a welcome dinner of Swahili dishes with international touches.",
      meals: "Welcome dinner",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 2,
      title: "Stone Town and a spice farm",
      description:
        "A guide shows you the old town, a UNESCO World Heritage Site: the Old Fort, the House of Wonders (under restoration), the Sultan's Palace and the house where Freddie Mercury was born, now a small museum.\n\nAfter a Zanzibari lunch at a local restaurant, you visit a spice farm to see, smell and taste the island's famous spices. In the evening, you can add a sunset dhow cruise from the harbour.",
      meals: "Breakfast, lunch",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 3,
      title: "Mnemba snorkelling and on to the east coast",
      description:
        "You drive to Matemwe on the north-east coast and take a boat to the reefs around Mnemba Atoll, known for clear water, coral gardens and tropical fish, with a chance of seeing dolphins. A picnic lunch follows, with more time to snorkel or relax.\n\nAfterwards, you continue down the east coast to your beach hotel for two nights by the sea.",
      image: ZIMG.snorkel,
      notes: ["Mnemba Island itself is private, so trips visit the reefs around it rather than landing on it."],
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen hotel on the east coast",
      stayId: "east-coast",
    },
    {
      day: 4,
      title: "Jozani Forest and a candlelit beach dinner",
      description:
        "In the morning, you visit Jozani Chwaka Bay National Park, the island's only national park, to look for the red colobus monkey, found only on Zanzibar, and walk the boardwalk through the mangroves.\n\nThe afternoon is free for the beach, the pool or a spa treatment. In the evening, you enjoy a candlelit dinner on the beach.",
      notes: ["The monkeys are often easy to see, but sightings are never guaranteed. Never feed them."],
      meals: "Breakfast, beach dinner",
      accommodation: "Your chosen hotel on the east coast",
      stayId: "east-coast",
    },
    {
      day: 5,
      title: "Departure",
      description:
        "Enjoy a last swim and a relaxed breakfast before your transfer to the airport, about an hour away. If your flight is late, we can arrange a short village visit on the way.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  included: [
    "Meals: Daily breakfast, 2 lunches and 3 dinners, including a welcome dinner and a candlelit beach dinner.",
    "Stone Town: A guided tour with entry to the historic sites.",
    "Spice farm: A guided tour with tastings.",
    "Mnemba: A snorkelling boat trip with equipment and a picnic lunch.",
    "Jozani Forest: Entry and a guided nature walk.",
  ],
  excursionsIncluded: ["mnemba-snorkelling"],
  sections: [],
  faqs: [
    {
      question: "Why stay on the east coast?",
      answer:
        "It's quieter than the north and close to Jozani Forest. The sea goes out a long way at low tide there, which reveals lagoons and seaweed farms, so swimming is best around high tide.",
    },
  ],
});
