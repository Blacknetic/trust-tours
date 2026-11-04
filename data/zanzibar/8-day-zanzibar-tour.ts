import { STAYS_NORTH_COAST, STAYS_STONE_TOWN, ZIMG, stop, zanzibarTrip } from "./shared";

// From Ombeni's "7 Nights, 8 Days Zanzibar Itinerary – October 2026", with
// detail from his other 8-day versions. It replaces the old entry and keeps its URL.
export const eightDayZanzibarTour = zanzibarTrip({
  slug: "8-day-zanzibar-tour",
  seoTitle: "8-Day Zanzibar Tour: Stone Town & Nungwi | Trust Tours",
  metaDescription:
    "Eight days in Zanzibar: Stone Town, Safari Blue, Jozani Forest, village visits, a spice tour with a cooking class and four nights on the north coast.",
  title: "8-Day Zanzibar Tour – Stone Town, Safari Blue and Nungwi",
  shortName: "8-Day Zanzibar Tour",
  days: 8,
  heroImage: ZIMG.beach.src,
  summary:
    "Three nights in historic Stone Town with the island's best excursions, then four nights on the beaches of Nungwi and Kendwa in the north.",
  overview: [
    "This holiday shows you far more of Zanzibar than the beach. You begin in Stone Town, the old trading port whose narrow lanes, carved doors and coral-stone houses tell the story of centuries of African, Arab, Indian and European influence.",
    "From there, you sail Menai Bay on the Safari Blue excursion, look for red colobus monkeys in Jozani Forest, meet the seaweed farmers of Jambiani and learn to cook with Zanzibar's spices.",
    "The second half is for slowing down. You move to the north coast, where Nungwi and Kendwa have some of the island's best swimming beaches and its finest sunsets, with free days to relax or add a snorkelling trip or a sunset dhow cruise.",
  ],
  atAGlance: [
    { label: "Duration", value: "8 days, 7 nights" },
    { label: "Start and finish", value: "Zanzibar International Airport" },
    { label: "Nights", value: "3 in Stone Town, 4 on the north coast" },
    { label: "Excursions included", value: "Stone Town, Safari Blue, Jozani Forest, villages, spice tour and cooking class" },
    { label: "Meals", value: "Full board, or all-inclusive at the beach where your resort offers it" },
    { label: "Style", value: "Private transfers and guides" },
  ],
  highlights: [
    "Stone Town: A guided walk through the UNESCO-listed old town.",
    "Safari Blue: A day by dhow with snorkelling and a seafood lunch on a sandbank.",
    "Jozani Forest: Look for the rare Zanzibar red colobus monkey.",
    "Village life: Seaweed farms at Jambiani and traditions at Makunduchi.",
    "Spices and cooking: A spice farm tour and a Swahili cooking class.",
    "Nungwi and Kendwa: Four nights on the north coast's beaches.",
  ],
  stayChoices: [
    stop("stone-town", "Nights 1–3", "Stone Town", STAYS_STONE_TOWN),
    stop("north-coast", "Nights 4–7", "Nungwi and Kendwa, northern Zanzibar", STAYS_NORTH_COAST),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival and a walk through Stone Town",
      description:
        "Your guide meets you at Zanzibar International Airport and drives you to your hotel in Stone Town, about 20 minutes away. After checking in, you set out on a guided walk through the old town, a UNESCO World Heritage Site.\n\nYou wander lanes lined with carved wooden doors and coral-stone houses, and pass the Old Fort, the House of Wonders (under restoration) and Forodhani Gardens on the waterfront. Your guide also shows you the house where Freddie Mercury was born, now a small museum. Lunch is at a local restaurant serving Swahili dishes.",
      experience: "Your first taste of the old town's history, food and atmosphere.",
      notes: ["Wear comfortable shoes: the lanes are narrow and uneven in places."],
      meals: "Lunch, dinner",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 2,
      title: "Safari Blue in Menai Bay",
      description:
        "Today is a full day at sea. You drive to Fumba on the south-west coast and board a traditional dhow to explore the Menai Bay Conservation Area. The day usually includes snorkelling over the reefs, swimming in a lagoon and time on a sandbank, followed by a seafood barbecue lunch with tropical fruit.\n\nThe exact route depends on the tides and the sea. You return to Stone Town in the late afternoon, with the evening free to watch the sunset from the waterfront.",
      image: ZIMG.snorkel,
      notes: ["Bring a swimsuit, a towel, sun cream and a hat. Snorkelling equipment is provided."],
      meals: "Breakfast, seafood lunch, dinner",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 3,
      title: "Jozani Forest and the villages of the south-east",
      description:
        "You head south-east to Jozani Forest, the island's only national park. With a guide, you look for the Zanzibar red colobus monkey, found nowhere else in the world, and walk a boardwalk through the mangroves.\n\nYou continue to Jambiani on the east coast, where the women of the village farm seaweed in the shallow lagoon, and then to Makunduchi, a traditional village known for its Mwaka Kogwa new-year festival each July. Your guide introduces you to everyday village life before you return to Stone Town.",
      notes: ["Sightings of the monkeys are likely but never guaranteed. Watch them quietly and never feed them."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen hotel in Stone Town",
      stayId: "stone-town",
    },
    {
      day: 4,
      title: "Spice tour, cooking class and on to Nungwi",
      description:
        "After breakfast, you visit a spice farm outside Stone Town, where you see, smell and taste cloves, nutmeg, cinnamon, vanilla and tropical fruit, and learn how spices shaped the island's history. Afterwards, a local cook shows you how to prepare traditional Swahili dishes, which you then eat for lunch.\n\nYou then drive north to Nungwi, near the tip of the island. On arrival, a short village tour shows you the yards where dhows are still built by hand, before you settle into your beach hotel.",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 5,
      title: "Beach day in Nungwi",
      description:
        "Today is yours to enjoy the beach. The north coast is good for swimming at most tides, so you can spend the day in the water, by the pool or under a palm tree.\n\nIf you'd like to be more active, you can try kayaking, paddleboarding or diving, or add a sunset dhow cruise in the evening.",
      image: ZIMG.pool,
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 6,
      title: "Kendwa beach, or a snorkelling trip",
      description:
        "Spend the day on Kendwa beach, a short way down the coast, known for its soft sand and calm water. Alternatively, you can add a boat trip to the reefs around Mnemba Atoll, one of the island's best places to snorkel, with a chance of seeing dolphins on the way.",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 7,
      title: "Your last full day on the coast",
      description:
        "Enjoy a final day at your own pace: a spa treatment, a long walk along the shore or a last swim. In the evening, watch the sun set over the sea from the beach, or celebrate with a candlelit dinner or a sunset cruise.",
      image: ZIMG.dhowSunset,
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 8,
      title: "Departure",
      description:
        "After breakfast, you have some free time for a final walk on the beach or some shopping in Nungwi. Your driver then takes you to Zanzibar International Airport, about an hour and a half away, for your flight home or onward.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  included: [
    "Meals: Full board, or all-inclusive at the beach where your resort offers it.",
    "Stone Town: A guided walking tour.",
    "Safari Blue: A full-day dhow excursion with snorkelling equipment and a seafood lunch.",
    "Jozani Forest: Entry and a guided walk.",
    "Villages: Guided visits to Jambiani, Makunduchi and Nungwi.",
    "Spices: A spice farm tour and a Swahili cooking class.",
  ],
  excursionsIncluded: ["safari-blue"],
  sections: [
    {
      heading: "Why start in Stone Town?",
      paragraphs: [
        "Stone Town is the best base for the island's history and the southern excursions, so you see the old town, Menai Bay, Jozani and the villages without long daily drives from the beach. Moving north for the second half means you finish with four unhurried days on the coast.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is this tour more than just beaches?",
      answer:
        "Yes. The first four days are full of history, wildlife and village life, and the last four are for the beach, with optional extras if you want them.",
    },
    {
      question: "Which beach is best for swimming?",
      answer:
        "Nungwi and Kendwa in the north, where you stay, are good for swimming at most tides. On the east coast, the sea can go out a long way at low tide.",
    },
  ],
});
