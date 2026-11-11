import { gemTrip } from "./shared";

// A day at the Mererani tanzanite mining area, from research (Nov 2026).
// The mining area sits inside a security wall with one guarded gate, so visits
// go through a licensed local partner. Ombeni to confirm his partner, whether
// foreign visitors may go underground, and the price.
export const mereraniMineTour = gemTrip({
  slug: "mererani-tanzanite-mine-tour",
  seoTitle: "Mererani Tanzanite Mine Day Tour from Arusha | Trust Tours",
  metaDescription:
    "A day trip to Mererani, the only place on Earth where tanzanite is mined: the mining area with a licensed local guide, a cutting workshop and a Maasai village.",
  destinations: ["Arusha", "Kilimanjaro"],
  title: "Mererani Tanzanite Mine Tour – A Day at the Source of Tanzanite",
  shortName: "Mererani Tanzanite Mine Tour",
  days: 1,
  difficulty: "Moderate",
  heroImage: "/images/kili-sunrise-hero.jpg",
  summary:
    "Spend a day at Mererani, the only place where tanzanite is mined: see the mining area with a licensed local guide, watch stones being cut and visit a Maasai village.",
  overview: [
    "Every tanzanite in the world comes from a few square kilometres of the Merelani hills, on the plains between Arusha and Mount Kilimanjaro. This day trip takes you to the mining town of Mererani to see where the stone begins its journey.",
    "With a licensed local guide, you visit the mining area and learn how small-scale miners work, often deep underground. You watch rough stones being sorted and cut, and visit a nearby Maasai village, whose people live alongside the mines.",
    "The area is about 60 km from Arusha and close to Kilimanjaro Airport, so the tour fits well at the start or end of a safari or climb.",
  ],
  atAGlance: [
    { label: "Duration", value: "A full day" },
    { label: "Start and finish", value: "Your hotel in Arusha or Moshi" },
    { label: "Distance", value: "About 60 km from Arusha" },
    { label: "Includes", value: "Mining area visit, cutting workshop and a Maasai village" },
    { label: "Access", value: "Through a licensed local partner, at a single guarded gate" },
    { label: "Good for", value: "Curious travellers and anyone who loves gems" },
  ],
  highlights: [
    "The only source on Earth: Visit the mining area where all tanzanite is found.",
    "Life in a mining town: How small-scale miners work and live.",
    "From rough to polished: Watch stones being sorted and cut.",
    "A Maasai village: Meet the people who live alongside the mines.",
    "Close to the airport: Easy to add before or after another trip.",
  ],
  itinerary: [
    {
      day: 1,
      time: "Early morning",
      title: "Pickup and the drive to Mererani",
      description:
        "Your guide collects you from your hotel in Arusha or Moshi for the drive across the plains towards Mererani, with Kilimanjaro on the horizon when the sky is clear.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 2,
      time: "Morning",
      title: "Entry and the mining area",
      description:
        "The mining area lies inside a security wall with a single guarded gate, where visitors register. A licensed local guide then shows you around, explaining how tanzanite forms, how shafts are dug and how miners work. Depending on the rules on the day and the mine you visit, you may go a short way underground or watch from a safe viewing area.",
      notes: [
        "Access and underground visits depend on the authorities and the mine owner on the day, and can never be guaranteed.",
        "Wear closed shoes and clothes that can get dusty, and bring your passport.",
      ],
      meals: "",
      accommodation: "—",
    },
    {
      day: 3,
      time: "Midday",
      title: "Lunch and a cutting workshop",
      description:
        "After lunch in town, you visit a workshop where rough stones are sorted and cut, and see how colour and clarity decide a stone's value.",
      meals: "Lunch",
      accommodation: "—",
    },
    {
      day: 4,
      time: "Afternoon",
      title: "A Maasai village and the return",
      description:
        "On the way back, you stop at a Maasai village to learn about daily life on the plains around the mines, before returning to your hotel in the late afternoon.",
      meals: "",
      accommodation: "—",
    },
  ],
  included: [
    "Transport: Private vehicle and driver from your hotel in Arusha or Moshi and back.",
    "Guides: Your Trust Tours guide and a licensed local guide in the mining area.",
    "Entry: Mining-area visit and the cutting workshop.",
    "Culture: The Maasai village visit.",
    "Meals: Lunch and bottled drinking water.",
  ],
  excluded: [
    "Gemstones or jewellery you choose to buy.",
    "Drinks other than water.",
    "Tips for your guides.",
    "Travel insurance.",
  ],
  sections: [
    {
      heading: "Safety at the mines",
      bullets: [
        "Stay with your guides at all times inside the mining area.",
        "Underground visits are short and only where the mine allows them. Tell us if you're uncomfortable in tight or dark spaces.",
        "Photography rules vary from mine to mine, so ask before taking pictures of people or workings.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I go down a mine?",
      answer:
        "Sometimes. It depends on the rules on the day and the mine you visit. If going underground isn't possible, you'll see the workings from a safe viewing area.",
    },
    {
      question: "Do I need my passport?",
      answer: "Yes. Visitors register at the gate of the walled mining area, so bring your passport.",
    },
  ],
});
