import { IMG, STAYS_HIGHLANDS, stop } from "@/data/safaris/shared";
import { dayTrip, dayTripLinks, shortSafariLevels } from "./shared";

// From Ombeni's "2-Day Tarangire & Ngorongoro Crater Safari" document. It
// replaces the old entry and keeps its URL. His bank details stay out.
export const tarangireNgorongoro2 = dayTrip({
  slug: "2-day-tarangire-ngorongoro",
  category: "safari",
  oldUrl: "/booking/2-days-tarangire-and-ngorongoro-crater/",
  reviewSnippets: [
    {
      author: "Andreas Galanakis",
      text: "We went to Tarangire National Park with Trust Tours. Our guide Ombeni did a great job arranging our day trip — a unique experience. I strongly recommend them for your next trip in Tanzania.",
      source: "Google",
    },
    {
      author: "victor Fainzilber",
      text: "Trust Tours were very professional throughout — the payment, the timings, and the professionalism of the driver and guide. We were very pleased and would definitely recommend Mr Ombeni and his company.",
      source: "Google",
    },
  ],
  seoTitle: "2-Day Tarangire & Ngorongoro Crater Safari | Trust Tours",
  metaDescription:
    "A private 2-day safari: Tarangire's elephants and baobabs, a night in Karatu and a game drive in the Ngorongoro Crater. Four comfort levels, from $910 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro"],
  title: "2-Day Tarangire & Ngorongoro Crater Safari",
  shortName: "2-Day Tarangire & Ngorongoro Safari",
  days: 2,
  comfortLevels: shortSafariLevels(2),
  addOns: ["cultural-visit"],
  bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Jan", "Feb"],
  heroImage: IMG.craterZebra.src,
  summary:
    "Two of Tanzania's great wildlife parks in two days: Tarangire's elephants and baobabs, a night in Karatu, then a game drive on the floor of the Ngorongoro Crater.",
  overview: [
    "If you have limited time in Tanzania but want outstanding wildlife and dramatic scenery, this two-day safari is an excellent choice.",
    "You begin in Tarangire National Park, famous for its elephant herds, ancient baobabs, open savannah and the wildlife that gathers around the Tarangire River, particularly in the dry season. On the second day, you explore the Ngorongoro Crater, a volcanic caldera holding an extraordinary variety of wildlife in a fairly compact area.",
    "The route makes the most of your time without adding extra stops. You have your own guide, wildlife viewing in both parks and a comfortable night in between, at the comfort level you choose.",
  ],
  atAGlance: [
    { label: "Duration", value: "2 days / 1 night" },
    { label: "Start", value: "Arusha or Kilimanjaro Airport" },
    { label: "Finish", value: "Arusha or Kilimanjaro Airport" },
    { label: "Route", value: "Tarangire · Karatu · Ngorongoro Crater" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Best time", value: "June to October and December, with wildlife all year" },
  ],
  highlights: [
    "Tarangire: Elephant families beneath the baobabs.",
    "Ngorongoro Crater: A game drive on the crater floor, with a chance of black rhino.",
    "A night in Karatu: Choose where you sleep, from mid-range to ultra-premium.",
    "Picnic lunches: In both parks, at designated sites.",
    "Short but complete: Two great parks without rushing between extra stops.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arusha or Kilimanjaro Airport to Tarangire, overnight in Karatu",
      description:
        "Your safari begins with a pickup from Kilimanjaro International Airport or your hotel in Arusha. An early start gives you more time for the drive and the game viewing. If you are landing the same day, your flight needs to arrive early enough for a worthwhile game drive.\n\nAfter a briefing on the route and the wildlife-viewing rules, you travel to Tarangire National Park. Once inside, you may see elephant families moving through the woodland, feeding beneath the baobabs or gathering near the river, along with zebras, wildebeest, giraffes, buffaloes, impalas, gazelles, warthogs and baboons. Your guide also looks for lions, leopards, cheetahs and spotted hyenas.\n\nFrom June to October, animals often gather around the river and remaining water, which can make them easier to find. You enjoy a picnic lunch at a designated site and explore more of the park in the afternoon, then drive to your lodge in Karatu for dinner.",
      experience: "Elephants, baobabs and a first afternoon on safari.",
      image: IMG.tarangire,
      meals: "Lunch and dinner",
      accommodation: "Your chosen stay in Karatu",
      stayId: "karatu",
    },
    {
      day: 2,
      title: "Ngorongoro Crater, then back to Arusha or Kilimanjaro Airport",
      description:
        "You wake early, have breakfast and leave for the Ngorongoro Conservation Area, aiming to reach the crater early enough for a long game drive.\n\nFrom the rim, the land opens into a natural amphitheatre of grassland, woodland, wetlands and a soda lake. Your guide searches for lions, elephants, buffaloes, zebras, wildebeest, gazelles and hyenas, and you have a chance of seeing the endangered black rhino, although sightings can't be guaranteed. You may also see hippos and a variety of waterbirds.\n\nAfter a picnic lunch at a designated site, you explore the crater floor for as long as the permitted schedule allows. You then climb out and return to Arusha or Kilimanjaro International Airport.",
      experience: "A day in one of Africa's great wildlife settings.",
      notes: [
        "If you have an international flight the same day, please tell us your departure time before booking. An extra night may be the safer option.",
      ],
      image: IMG.crater,
      meals: "Breakfast and picnic lunch",
      accommodation: "—",
    },
  ],
  stayChoices: [stop("karatu", "Night 1", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS)],
  included: [
    "Vehicle: Private 4×4 safari vehicle with a pop-up roof.",
    "Guide: Professional English-speaking safari guide.",
    "Accommodation: One night at your chosen comfort level, based on two people sharing.",
    "Meals: Lunch and dinner on Day 1, and breakfast and a picnic lunch on Day 2.",
    "Park fees: Tarangire National Park entry fees, and Ngorongoro conservation and crater fees.",
    "Game drives: In Tarangire and the Ngorongoro Crater.",
    "Transfers: Road transfers between the parks, and drop-off in Arusha or at Kilimanjaro Airport.",
    "Drinks: Drinking water in the vehicle.",
  ],
  excluded: [
    "International flights.",
    "Tanzania visa fees and travel documents.",
    "Travel, medical and evacuation insurance.",
    "Alcoholic drinks, laundry and personal purchases.",
    "Tips for your guide and lodge staff.",
    "Optional activities not listed in the itinerary.",
  ],
  sections: [
    {
      heading: "Best time to visit",
      table: {
        headers: ["Months", "What to expect"],
        rows: [
          ["June to October", "Generally the best time for wildlife, as Tarangire's animals gather around the river. July to September can be busy, so book early."],
          ["January and February", "Warm weather and green landscapes, with wildlife in both parks."],
          ["March to May", "The long rains bring green scenery, great birdlife and fewer visitors, but roads can be slower."],
          ["November and December", "The short rains turn the land green, and Tarangire's animals may be more spread out."],
        ],
      },
    },
    {
      heading: "Travelling alone or in a bigger group?",
      paragraphs: [
        "The prices shown are for two people sharing. On your own, the price per person is higher, because you cover the vehicle, guide and fuel yourself, and a single-room supplement may apply.",
        "For six or more people, sharing the vehicle and guide can lower the price per person. We recommend the right vehicle arrangement for your group and quote each comfort level separately.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is two days enough for a safari?",
      answer:
        "It's enough for a real taste of Tanzania. You see two very different parks and have a good chance of seeing elephants, lions and buffaloes, and possibly black rhino.",
    },
    {
      question: "Can I start from Kilimanjaro Airport on the day I land?",
      answer:
        "Yes, if your flight lands early enough for the drive and a worthwhile game drive in Tarangire. Otherwise, a night in Arusha first is more comfortable.",
    },
    {
      question: "Can I choose where I sleep?",
      answer:
        "Yes. Pick your comfort level, then choose your stay in Karatu or the highlands. Ombeni confirms availability, and suggests a similar stay if yours is full.",
    },
  ],
  links: dayTripLinks("2-day-tarangire-ngorongoro", [
    { href: "/guides/tarangire-guide", label: "Tarangire National Park" },
    { href: "/guides/ngorongoro-crater-guide", label: "Ngorongoro Crater" },
  ]),
});
