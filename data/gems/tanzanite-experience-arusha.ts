import { gemTrip } from "./shared";

// A half-day in Arusha: the tanzanite museum and a cutting workshop, from
// research (Nov 2026). Ombeni to confirm the venues he uses and the price.
export const tanzaniteExperience = gemTrip({
  slug: "tanzanite-experience-arusha",
  seoTitle: "Tanzanite Experience Half-Day Tour in Arusha | Trust Tours",
  metaDescription:
    "A half-day tour in Arusha: the story of tanzanite in a museum, a gem-cutting and polishing demonstration, and an optional visit to licensed dealers.",
  destinations: ["Arusha"],
  title: "Tanzanite Experience – A Half-Day Gem Tour in Arusha",
  shortName: "Tanzanite Experience, Arusha",
  days: 1,
  heroImage: "/images/maasai-dance.jpg",
  summary:
    "Learn how tanzanite, found only in northern Tanzania, is mined, graded, cut and polished, with a museum visit and a cutting demonstration in Arusha.",
  overview: [
    "Tanzanite is found in only one place on Earth: the Merelani hills, between Arusha and Mount Kilimanjaro. This half-day tour in Arusha tells its story, from the geology that made it to the miners who bring it to the surface.",
    "You visit a tanzanite museum with displays on mining, grading and the stone's history, then watch skilled cutters shape and polish rough crystals into gems.",
    "It fits easily into a free afternoon in Arusha, before or after a safari or a Kilimanjaro climb.",
  ],
  atAGlance: [
    { label: "Duration", value: "About 3 to 4 hours" },
    { label: "Start and finish", value: "Your hotel in Arusha" },
    { label: "Includes", value: "Tanzanite museum and a cutting demonstration" },
    { label: "Shopping", value: "Optional, with no pressure to buy" },
    { label: "Difficulty", value: "Easy, mostly indoors" },
    { label: "Good for", value: "Rest days, families and anyone interested in gems" },
  ],
  highlights: [
    "The tanzanite story: How a stone found in only one place was discovered and named.",
    "Mining and grading: How miners work and how colour and clarity set a stone's value.",
    "Cutting and polishing: Watch rough crystals become finished gems.",
    "Easy to fit in: A half-day in Arusha, before or after your trip.",
  ],
  itinerary: [
    {
      day: 1,
      time: "Pickup",
      title: "From your hotel to the museum",
      description:
        "Your guide collects you from your hotel in Arusha at the agreed time, morning or afternoon, and explains the plan on the short drive into town.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 2,
      time: "About 1 hour",
      title: "The tanzanite museum",
      description:
        "A guided visit to a museum that tells the story of tanzanite: how it formed, how it was discovered in the late 1960s, how it is mined in the Merelani hills and how stones are graded by colour, clarity and size.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 3,
      time: "About 1 hour",
      title: "A cutting and polishing demonstration",
      description:
        "You watch a cutter shape and polish rough stones, and see how the angle of each facet brings out the stone's blue and violet colours. There is time for questions.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 4,
      time: "Optional",
      title: "A licensed dealer, then back to your hotel",
      description:
        "If you'd like, you can visit a licensed dealer to see finished stones and jewellery. There is no pressure to buy. Your guide then drives you back to your hotel.",
      meals: "",
      accommodation: "—",
    },
  ],
  included: [
    "Transport: Hotel pickup and drop-off in Arusha.",
    "Guide: An English-speaking guide.",
    "Entry: The museum visit and the cutting demonstration.",
    "Water: Bottled drinking water.",
  ],
  excluded: [
    "Gemstones or jewellery you choose to buy.",
    "Meals and drinks.",
    "Tips for your guide.",
    "Travel insurance.",
  ],
  sections: [],
  faqs: [
    {
      question: "Is this the same as visiting the mines?",
      answer:
        "No. This tour stays in Arusha. To see the mining area itself, choose the Mererani tanzanite mine tour, a full day from Arusha or Moshi.",
    },
  ],
});
