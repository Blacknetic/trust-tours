import { stop } from "@/data/safaris/shared";
import { ZIMG } from "@/data/zanzibar/shared";
import type { ComfortLevel } from "@/lib/pricing";
import { comboTrip } from "./shared";

// From Ombeni's "7-Day Tanzania Honeymoon Heaven Safari": 3 nights in Nyerere
// National Park, then 3 on Mafia or Fanjove Island. It keeps the document's own
// higher daily rates ($650 / $900 / $1,400), which cover the extra flights and
// island lodges. The document names no camps, so the stays are from research.
const DAYS = 7;
const level = (id: string, label: string, min: number, max: number, summary: string, includes: string[]): ComfortLevel => ({
  id,
  label,
  perDay: { min, max },
  groupPricing: { tiers: [{ pax: 2, usd: min * DAYS }], askSizes: [1, 3, 4, 5, 6] },
  summary,
  includes,
});

const LEVELS: ComfortLevel[] = [
  level("mid-range", "Comfort", 650, 900, "Comfortable safari camps, guided wildlife activities and a welcoming island lodge, with a relaxed pace and selected romantic touches.", [
    "A comfortable tented camp in Nyerere",
    "A relaxed beach lodge on Mafia",
    "Game drives and a boat safari or walk",
    "All the flights in the itinerary",
    "Meals as listed",
  ]),
  level("luxury", "Luxury", 900, 1400, "Upscale safari camps, attentive hospitality, refined dining and a beautiful island lodge, with more privacy and romantic experiences.", [
    "A stylish lakeside or riverside camp",
    "A boutique island lodge or tree house",
    "Game drives, boat safaris and walks",
    "All the flights in the itinerary",
    "More meals and drinks included",
  ]),
  level("high-end", "Premium", 1400, 2500, "Premium camps, enhanced privacy and a secluded private-island stay. Private villas and bespoke celebrations can cost more.", [
    "One of Nyerere's finest camps",
    "Fanjove Private Island, where open",
    "Private guiding where available",
    "All the flights and boat transfers",
    "Full board",
  ]),
];

export const sevenDayNyerereMafia = comboTrip({
  kind: "honeymoon",
  south: true,
  levels: LEVELS,
  slug: "7-day-nyerere-mafia-honeymoon",
  seoTitle: "7-Day Nyerere & Mafia Island Honeymoon | Trust Tours",
  metaDescription:
    "A honeymoon in southern Tanzania: three nights in Nyerere National Park with game drives and boat safaris, then three on Mafia or Fanjove Island.",
  destinations: ["Nyerere", "Mafia Island"],
  title: "7-Day Honeymoon Heaven – Nyerere National Park and Mafia or Fanjove Island",
  shortName: "7-Day Nyerere & Mafia Honeymoon",
  days: DAYS,
  heroImage: ZIMG.dhowSunset.src,
  bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
  summary:
    "Three nights in the wild south at Nyerere National Park, with game drives, a boat safari and sundowners for two, then three nights on a quiet Indian Ocean island.",
  overview: [
    "This honeymoon takes you away from the busy northern circuit to the wild south of Tanzania. Nyerere National Park, formerly the Selous, is one of Africa's largest protected areas: a land of rivers, lakes and woodland where you can explore by vehicle, by boat and on foot.",
    "You spend three nights at an intimate safari camp, watching elephants and giraffes, drifting past hippos and crocodiles on the water and toasting the sunset together. Then a short flight takes you to Mafia Island, or to secluded Fanjove, for three nights of soft sand, warm sea and quiet.",
    "Every honeymoon is personal, so we can add the touches that matter to you, from a romantic room setup to a private dinner on the beach.",
  ],
  atAGlance: [
    { label: "Duration", value: "7 days, 6 nights" },
    { label: "Start and finish", value: "Dar es Salaam" },
    { label: "Safari", value: "3 nights in Nyerere National Park" },
    { label: "Island", value: "3 nights on Mafia Island or Fanjove Island" },
    { label: "Flights", value: "Dar es Salaam to Nyerere, on to the island and back, included" },
    { label: "Designed for", value: "Honeymoons and anniversaries" },
  ],
  highlights: [
    "The wild south: Nyerere's rivers, lakes and woodland, far from the crowds.",
    "Three ways to explore: Game drives, a boat safari and, where offered, a guided walk.",
    "Sundowners for two: Drinks at sunset after a day in the bush.",
    "Mafia or Fanjove: A quiet island with reefs, dhows and seasonal whale sharks off Mafia.",
    "Romantic touches: Private dinners, a couples' massage and a special room setup on request.",
  ],
  stayChoices: [
    stop("nyerere", "Nights 1–3", "Nyerere National Park", {
      "mid-range": ["rufiji-river-camp", "lake-manze-camp", "selous-impala-camp"],
      luxury: ["roho-ya-selous", "siwandu", "selous-impala-camp"],
      "high-end": ["sand-rivers-selous", "beho-beho", "siwandu"],
    }),
    stop("island", "Nights 4–6", "Mafia Island or Fanjove Island", {
      "mid-range": ["butiama-beach-lodge", "pole-pole-mafia", "kinasi-lodge"],
      luxury: ["pole-pole-mafia", "kinasi-lodge", "chole-mjini"],
      "high-end": ["fanjove-island-lodge", "pole-pole-mafia"],
    }),
  ],
  itinerary: [
    {
      day: 1,
      title: "Fly from Dar es Salaam to Nyerere National Park",
      description:
        "Your honeymoon begins in Dar es Salaam, where we meet you and take you to the airport for your short flight to Nyerere National Park. Your guide welcomes you at the airstrip, and the drive to camp becomes your first game drive, with chances of elephants, giraffes, zebras, impalas and many birds.\n\nSettle into your tent, enjoy the view from your veranda and have dinner under the stars or by the fire. If you've asked for it, the camp prepares a honeymoon welcome.",
      notes: ["Your flight times depend on the airline's schedule and your international arrival, so we plan the day around them."],
      meals: "Lunch or dinner, depending on your flight, and dinner",
      accommodation: "Your chosen camp in Nyerere",
      stayId: "nyerere",
    },
    {
      day: 2,
      title: "Game drives in Nyerere",
      description:
        "After breakfast, you set out with your guide to explore the park's plains, woodland and river channels. Nyerere is known for its elephants, buffaloes, giraffes and antelopes, for large numbers of hippos and crocodiles and for its birdlife. Lions and wild dogs live here too, although no sighting can be promised.\n\nYou return to camp to rest in the heat of the day, then head out again in the afternoon. In the evening, we can ask the camp for a private dinner or a sundowner to celebrate.",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen camp in Nyerere",
      stayId: "nyerere",
    },
    {
      day: 3,
      title: "A boat safari, a walk and a sunset to remember",
      description:
        "Today you see the wilderness from a different angle. Depending on your camp, you can glide along the river or lakes on a boat safari, watching hippos, crocodiles and waterbirds up close, or set off on a guided walk with an armed ranger to read tracks and learn the smaller details of the bush.\n\nIn the late afternoon, you celebrate your last evening on safari with a sundowner as the sky turns gold, followed by a lantern-lit dinner.",
      notes: ["Boat safaris and walks depend on what your camp offers, the water levels and park rules."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen camp in Nyerere",
      stayId: "nyerere",
    },
    {
      day: 4,
      title: "Fly to your island",
      description:
        "After breakfast, you fly from Nyerere to Mafia Island. For Mafia, a short drive takes you to your lodge; for Fanjove, you continue by boat across the open sea to the island, about 30 minutes in calm conditions.\n\nThe pace now changes completely. Settle into your room or villa, take a walk on the beach and spend your first evening listening to the waves.",
      image: ZIMG.beach,
      notes: ["Fanjove Island Lodge usually closes from mid-March to the end of May, and Nyerere's camps close in the long rains too."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen lodge on Mafia or Fanjove",
      stayId: "island",
    },
    {
      day: 5,
      title: "Beach, reef and time together",
      description:
        "A day at your own pace. Mafia Island Marine Park has some of the best snorkelling and diving on the East African coast, and you can join a boat trip to a reef or a sandbank when the tide allows. On Fanjove, kayaks, paddleboards and snorkelling are right in front of the lodge.\n\nOr simply rest on your veranda, book a couples' massage and enjoy a private dinner on the beach.",
      image: ZIMG.snorkel,
      notes: ["Whale sharks visit the waters off Mafia from about October to March. Sightings are never guaranteed."],
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen lodge on Mafia or Fanjove",
      stayId: "island",
    },
    {
      day: 6,
      title: "A last island day",
      description:
        "Spend your final full day as you like: a sunset dhow cruise, a dive with a resident instructor, a dolphin trip or a long, slow morning on the beach.\n\nIn the evening, we can arrange a special final dinner to celebrate the start of your married life.",
      image: ZIMG.dhowSunset,
      meals: "Breakfast, lunch, dinner",
      accommodation: "Your chosen lodge on Mafia or Fanjove",
      stayId: "island",
    },
    {
      day: 7,
      title: "Fly back to Dar es Salaam",
      description:
        "After a last breakfast by the sea, you transfer to the airstrip, by boat first from Fanjove, for your flight back to Dar es Salaam in time for your international departure. If you'd like longer on the island, we can add nights.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  includedOverride: [
    "Flights: Dar es Salaam to Nyerere, Nyerere to Mafia, and Mafia back to Dar es Salaam.",
    "Transfers: Airport and airstrip transfers, and the boat to and from Fanjove if you stay there.",
    "Accommodation: Three nights in Nyerere and three on the island, in your selected comfort level, sharing a double room.",
    "Safari: Game drives with a professional guide, plus a boat safari or guided walk where your camp offers them.",
    "Park fees: Nyerere National Park and conservation fees for the scheduled activities.",
    "Meals: As listed in the itinerary, following each lodge's meal plan.",
    "Planning: Itinerary planning and coordination by Trust Tours & Safaris.",
  ],
  excludedOverride: [
    "International flights to and from Tanzania.",
    "Tanzania visa fees, travel insurance and personal medical costs.",
    "Spa treatments, private beach dinners, premium drinks, cakes and decorations, unless confirmed as included.",
    "Diving, private boat charters and other optional ocean activities.",
    "Mafia Island Marine Park fees for activities in the park, where charged separately.",
    "Tips, laundry and personal expenses.",
    "Extra nights, room upgrades and additional transfers.",
  ],
  addOns: ["single-supplement"],
  sections: [
    {
      heading: "Best time for a Nyerere and island honeymoon",
      table: {
        headers: ["Months", "What to expect"],
        rows: [
          ["June to October", "The dry season: the best game viewing in Nyerere, as animals gather near the rivers and lakes."],
          ["November to February", "Warmer and greener, with excellent birdlife. Whale sharks visit Mafia from about October to March."],
          ["Mid-March to May", "The long rains. Most camps in Nyerere and Fanjove Island Lodge are closed."],
        ],
      },
    },
    {
      heading: "Mafia Island or Fanjove?",
      bullets: [
        "Mafia Island: A quiet island of fishing villages and small lodges, with a marine park offering excellent snorkelling and diving and seasonal whale sharks. Choose from simple beach lodges to a tree-house eco-lodge.",
        "Fanjove Island: A private island less than a kilometre long, with one lodge, a restored lighthouse and the sea all around. More secluded and more expensive, with an extra boat crossing.",
      ],
      note: "We quote the two islands separately, because their flights, boat transfers and rates differ.",
    },
  ],
  faqs: [
    {
      question: "Where do we fly in and out?",
      answer:
        "The trip starts and ends in Dar es Salaam, where most southern safari flights leave. If your international flight uses Zanzibar or Kilimanjaro, we can change the routing.",
    },
    {
      question: "When can we go?",
      answer:
        "From June to February. Most camps in Nyerere, and Fanjove Island Lodge, close from about mid-March to the end of May for the long rains.",
    },
  ],
});
