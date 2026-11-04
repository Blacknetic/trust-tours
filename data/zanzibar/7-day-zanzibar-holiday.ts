import { STAYS_NORTH_COAST, ZIMG, stop, zanzibarTrip } from "./shared";

// From Ombeni's "7-Day Zanzibar Package Tour Itinerary". He bases it at one
// beachfront resort; Zuri, his first choice, is on the north coast, so it stays
// there. His Day 5 paired Nungwi's turtle aquarium with Nakupenda near Stone
// Town, which is too far apart, so Nakupenda is an optional extra here.
export const sevenDayZanzibarHoliday = zanzibarTrip({
  slug: "7-day-zanzibar-holiday",
  seoTitle: "7-Day Zanzibar Holiday on the North Coast | Trust Tours",
  metaDescription:
    "A week on Zanzibar's north coast: Stone Town and a spice tour, Mnemba snorkelling, Safari Blue, sea turtles in Nungwi, Jozani Forest and a village visit.",
  title: "7-Day Zanzibar Holiday – The North Coast, Reefs and Stone Town",
  shortName: "7-Day Zanzibar Holiday",
  days: 7,
  heroImage: ZIMG.beach.src,
  summary:
    "Six nights on the north coast at Nungwi or Kendwa, with the island's big excursions: Stone Town, Mnemba, Safari Blue, Jozani Forest and a village visit.",
  overview: [
    "The north coast is the best part of Zanzibar for swimming at any tide and for watching the sun set over the sea. This holiday keeps you there for six nights and fits in the island's best-known excursions.",
    "You explore Stone Town and a spice farm, snorkel the Mnemba reefs, sail Menai Bay on the Safari Blue trip and meet the green sea turtles of Nungwi's natural aquarium.",
    "On the final full day, you walk in Jozani Forest, visit a village to try traditional crafts and share a local lunch, then celebrate with a farewell dinner and live taarab music.",
  ],
  atAGlance: [
    { label: "Duration", value: "7 days, 6 nights" },
    { label: "Start and finish", value: "Zanzibar International Airport" },
    { label: "Nights", value: "6 at one resort in Nungwi or Kendwa" },
    { label: "Excursions included", value: "Stone Town and spices, Mnemba, Safari Blue, Baraka aquarium, Jozani and a village" },
    { label: "Meals", value: "Daily breakfast, 3 lunches and 5 dinners" },
    { label: "Good for", value: "Families, friends and couples" },
  ],
  highlights: [
    "North coast: Six nights on beaches that are good for swimming at most tides.",
    "Mnemba: Snorkelling over coral reefs, with a chance of dolphins.",
    "Safari Blue: A day by dhow with a seafood barbecue on a sandbank.",
    "Sea turtles: The Baraka Natural Aquarium in Nungwi.",
    "Farewell dinner: Swahili food and live taarab music.",
  ],
  stayChoices: [stop("north-coast", "Nights 1–6", "Nungwi and Kendwa, northern Zanzibar", STAYS_NORTH_COAST)],
  itinerary: [
    {
      day: 1,
      title: "Arrival on the north coast",
      description:
        "A Trust Tours representative meets you at Zanzibar International Airport for the drive north, about an hour and a half. After checking in, the afternoon is yours by the pool or on the beach.\n\nIn the evening, a welcome dinner at the resort brings together Swahili and international flavours.",
      meals: "Welcome dinner",
      accommodation: "Your chosen resort on the north coast",
      stayId: "north-coast",
    },
    {
      day: 2,
      title: "Stone Town and a spice farm",
      description:
        "A guide shows you Stone Town's landmarks, from the Old Fort and the House of Wonders (under restoration) to the Sultan's Palace, with stories of the island's past along the way. On the way back north, you stop at a spice farm to taste cloves, nutmeg and vanilla where they grow.\n\nIn the evening, you can add a sunset dhow cruise before dinner at the resort.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen resort on the north coast",
      stayId: "north-coast",
    },
    {
      day: 3,
      title: "Mnemba snorkelling",
      description:
        "You drive to Matemwe and take a boat to the reefs around Mnemba Atoll, where the clear water is full of coral and tropical fish, and dolphins are often seen. Lunch is packed for the boat.\n\nDivers can arrange a dive to see turtles and deeper reefs. You're back at the resort in time for a seafood dinner.",
      image: ZIMG.snorkel,
      notes: ["Mnemba Island itself is private, so trips visit the surrounding reefs."],
      meals: "Breakfast, packed lunch, dinner",
      accommodation: "Your chosen resort on the north coast",
      stayId: "north-coast",
    },
    {
      day: 4,
      title: "Safari Blue in Menai Bay",
      description:
        "An early start takes you to Fumba on the south-west coast for the Safari Blue excursion. You sail a traditional dhow through the Menai Bay Conservation Area, swim and snorkel, and stop on a sandbank for a seafood barbecue.\n\nIt's a full day, with around two hours' drive each way, so the evening is for a quiet dinner.",
      image: ZIMG.dhowBeach,
      meals: "Breakfast, seafood lunch, dinner",
      accommodation: "Your chosen resort on the north coast",
      stayId: "north-coast",
    },
    {
      day: 5,
      title: "Sea turtles and a free afternoon",
      description:
        "After breakfast, you visit the Baraka Natural Aquarium in Nungwi, a natural lagoon where you can see and swim near green sea turtles and learn about local conservation.\n\nThe afternoon is free. Relax on the beach, try paddleboarding, or add a trip to Prison Island and the Nakupenda sandbank instead.",
      meals: "Breakfast, dinner",
      accommodation: "Your chosen resort on the north coast",
      stayId: "north-coast",
    },
    {
      day: 6,
      title: "Jozani Forest, a village and a farewell dinner",
      description:
        "You drive south to Jozani Forest, the island's only national park, to look for red colobus monkeys among the trees and walk through the mangroves.\n\nAt a nearby village, you try traditional crafts such as weaving and share a lunch prepared by local families. Back at the resort, a farewell dinner with live taarab music, a blend of Swahili, Arab and Indian sounds, ends your week.",
      meals: "Breakfast, lunch, farewell dinner",
      accommodation: "Your chosen resort on the north coast",
      stayId: "north-coast",
    },
    {
      day: 7,
      title: "Departure",
      description:
        "Enjoy a final breakfast and swim before your private transfer to the airport. Ask the resort about a late checkout, subject to availability.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  included: [
    "Meals: Daily breakfast, 3 lunches and 5 dinners, including welcome and farewell dinners.",
    "Stone Town and spices: A guided tour with entry to the historic sites, and a spice farm with tastings.",
    "Mnemba: A snorkelling boat trip with equipment and a packed lunch.",
    "Safari Blue: A full-day dhow excursion with snorkelling equipment and a seafood lunch.",
    "Baraka Natural Aquarium: Entry.",
    "Jozani and a village: Forest entry, a guided walk and a village lunch.",
  ],
  excursionsIncluded: ["mnemba-snorkelling", "safari-blue"],
  sections: [],
  faqs: [
    {
      question: "Is the Safari Blue day far from the north coast?",
      answer:
        "Yes, it leaves from Fumba in the south-west, around two hours' drive each way. It's worth it, but if you'd prefer a shorter day, we can swap it for a north-coast boat trip.",
    },
  ],
});
