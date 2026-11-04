import { IMG, STAYS_CENTRAL_SERENGETI, stop } from "@/data/safaris/shared";
import { flyInTrip } from "./shared";

// From Ombeni's "3-Day Tanzania Classic Safari: Zanzibar to Serengeti" (a quote
// for one couple, Oct 2026): USD 6,480 for two, so $3,240 per person. Replaces
// the old $2,228 entry and keeps its URL.
export const threeDayFlyIn = flyInTrip({
  slug: "3-day-serengeti-balloon-zanzibar",
  seoTitle: "3-Day Fly-in Serengeti Safari from Zanzibar | Trust Tours",
  metaDescription:
    "Fly from Zanzibar to the Serengeti for two nights of private game drives and a sunrise balloon safari, then fly back. Flights included, from $3,240 pp.",
  destinations: ["Serengeti", "Zanzibar"],
  title: "3-Day Fly-in Safari – Zanzibar to the Serengeti, with a Balloon Flight",
  shortName: "3-Day Zanzibar to Serengeti Fly-in",
  days: 3,
  heroImage: IMG.balloon.src,
  summary:
    "Fly from Zanzibar straight to the Serengeti for two nights at a tented camp, private game drives and a sunrise balloon safari with a bush breakfast, then fly back to the beach.",
  overview: [
    "This short safari turns a Zanzibar beach holiday into an African adventure. Instead of a long road journey, you fly directly from the island to the Serengeti, so you're on a game drive within an hour of landing.",
    "You spend two nights at a tented camp in the heart of the park, with a private vehicle and guide for just the two of you. The highlight is a sunrise hot-air balloon flight over the plains, followed by a bush breakfast where you land.",
    "On the third day, you have a last game drive before flying back to Zanzibar. It suits honeymooners especially well: tell us it's a celebration and we'll arrange a romantic dinner and a special room setup where the camp allows.",
  ],
  atAGlance: [
    { label: "Duration", value: "3 days, 2 nights" },
    { label: "Start and finish", value: "Zanzibar International Airport" },
    { label: "Flights", value: "Zanzibar to the Serengeti and back, included" },
    { label: "Nights", value: "2 at a tented camp in the central Serengeti" },
    { label: "Balloon safari", value: "Included, with a bush breakfast" },
    { label: "Style", value: "Private vehicle and guide, no camping" },
  ],
  highlights: [
    "Fly in: A direct flight from Zanzibar, with no long drive.",
    "Balloon safari: Sunrise over the Serengeti, then a bush breakfast.",
    "Private game drives: Lions, elephants, giraffes, buffaloes and cheetahs.",
    "A camp for two: A tented camp with a private bathroom and a romantic setting.",
    "Back to the beach: Fly back to Zanzibar on the third day.",
  ],
  stayChoices: [
    stop("serengeti", "Nights 1–2", "Central Serengeti", { luxury: STAYS_CENTRAL_SERENGETI.luxury }),
  ],
  itinerary: [
    {
      day: 1,
      title: "Fly from Zanzibar to the Serengeti",
      description:
        "You take a direct flight from Zanzibar to an airstrip in the Serengeti, where your private guide meets you beside the plane. Your first game drive starts straight away, looking for lions, elephants, giraffes, buffaloes and cheetahs, and, depending on the season, the herds of the Great Migration.\n\nIn the late afternoon, you arrive at your tented camp, chosen for its setting and its comfort, with a private bathroom in every tent.",
      image: IMG.flight,
      meals: "Lunch, dinner",
      accommodation: "Your chosen tented camp in the Serengeti",
      stayId: "serengeti",
    },
    {
      day: 2,
      title: "Hot-air balloon safari and a full day in the Serengeti",
      description:
        "Very early in the morning, you're driven to the launch site for a hot-air balloon flight over the Serengeti at sunrise, watching the plains and the wildlife from above. After landing, you sit down to a bush breakfast in the open.\n\nThe rest of the day is a private game drive at your own pace, with plenty of time at the best sightings. In the evening, you return to camp for a relaxed dinner.",
      image: IMG.balloon,
      notes: ["Balloon flights depend on the weather. If a flight can't go ahead, we let you know what's refunded."],
      meals: "Bush breakfast, lunch, dinner",
      accommodation: "Your chosen tented camp in the Serengeti",
      stayId: "serengeti",
    },
    {
      day: 3,
      title: "A last game drive and the flight back to Zanzibar",
      description:
        "After breakfast, you have a final game drive, timed around your flight. Your guide then takes you to the airstrip for the direct flight back to Zanzibar, where a driver meets you for the transfer to your hotel.",
      image: IMG.serengetiLions,
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  price: {
    id: "luxury",
    label: "Fly-in package",
    usd: 3240,
    summary: "Ombeni's fly-in package: both flights, the balloon safari and two nights at a tented camp, private throughout.",
    includes: [
      "Flights from Zanzibar to the Serengeti and back",
      "Two nights at a comfortable tented camp",
      "Hot-air balloon safari with a bush breakfast",
      "Private 4×4 vehicle and guide",
      "Full board during the safari",
      "All Serengeti park fees",
    ],
  },
  included: [
    "Flights: Zanzibar to the Serengeti, and the Serengeti back to Zanzibar.",
    "Transfers: Airport and airstrip transfers where needed.",
    "Safari: A private 4×4 safari vehicle and an experienced professional guide, for the two of you only.",
    "Game drives: All game drives in the itinerary.",
    "Balloon safari: A sunrise hot-air balloon flight with a bush breakfast.",
    "Accommodation: Two nights at a tented camp, full board.",
    "Park fees: All Serengeti park and conservation fees, and government taxes.",
    "Drinking water: In the safari vehicle.",
    "Support: Ombeni's personal help before and during the trip.",
  ],
  addOns: ["extra-serengeti-night", "single-supplement"],
  sections: [
    {
      heading: "A fly-in safari for honeymooners",
      paragraphs: [
        "If you're on honeymoon, tell us when you book. We choose a camp with the right atmosphere and arrange a few thoughtful touches, such as a romantic dinner and a special room setup where the camp allows.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is the balloon flight included?",
      answer:
        "Yes. The sunrise balloon safari and the bush breakfast are both in the price. Flights depend on the weather, and we confirm your launch time the evening before.",
    },
  ],
});
