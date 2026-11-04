import { dayTrip, dayTripLinks } from "./shared";

// From Ombeni's "1 Day Trip Chemka (Kikuletwa) Hot Springs" document, written
// in our own words. Its photos and prices came from other operators, so it has
// none of them: no photo until Ombeni sends one, and his $455 day-trip rate.
export const chemkaDayTrip = dayTrip({
  slug: "chemka-hot-springs-day-trip",
  category: "safari",
  seoTitle: "Chemka Hot Springs Day Trip | Trust Tours",
  metaDescription:
    "A relaxing day trip to Chemka (Kikuletwa) Hot Springs near Moshi and Arusha: clear blue-green water, swimming, shade and a picnic lunch. From $455 pp.",
  destinations: ["Kilimanjaro", "Arusha"],
  title: "Chemka Hot Springs Day Trip – Kikuletwa near Kilimanjaro",
  shortName: "Chemka Hot Springs Day Trip",
  days: 1,
  price: 455,
  heroImage: "",
  summary:
    "A relaxed day at Chemka, also called Kikuletwa, a spring-fed pool of clear blue-green water shaded by fig trees in the countryside between Moshi and Arusha.",
  overview: [
    "Chemka Hot Springs, also known as Kikuletwa, is a natural swimming spot near Rundugai village in the Kilimanjaro Region. Surrounded by fig trees and greenery in semi-arid countryside, its clear blue-green pools are a refreshing escape from the busy towns of Arusha and Moshi.",
    "Although they are called hot springs, the water is mild or pleasantly warm rather than hot. It's a lovely place to swim, relax in the shade and take photographs.",
    "It's also a popular way to unwind before or after climbing Kilimanjaro or going on safari, because there's no hike and swimming is optional.",
  ],
  atAGlance: [
    { label: "Duration", value: "1 day, about 6 to 9 hours" },
    { label: "Location", value: "Kikuletwa, near Rundugai village, Kilimanjaro Region" },
    { label: "Start and finish", value: "Your hotel in Moshi or Arusha, or near Kilimanjaro Airport" },
    { label: "Main activities", value: "Swimming, relaxing, photography and a picnic lunch" },
    { label: "Difficulty", value: "Easy. No hike, and swimming is optional" },
    { label: "Transport", value: "Private vehicle with a driver-guide" },
  ],
  highlights: [
    "Crystal-clear water: Swim and float in a spring-fed pool.",
    "Shade under the fig trees: Relax on the banks between swims.",
    "A rope swing: For the adventurous, where one is in place and safe to use.",
    "An easy day: A gentle break before or after a climb or safari.",
    "Picnic lunch: Eat beside the water.",
  ],
  itinerary: [
    {
      day: 1,
      time: "8:00 am",
      title: "Hotel pickup",
      description:
        "Your driver-guide meets you at your hotel in Moshi or Arusha. After a quick check that you have swimwear, a towel and water, you set off for Chemka. The drive is shorter from Moshi than from Arusha.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 2,
      time: "9:00 am",
      title: "Drive through the countryside",
      description:
        "You travel through villages, farmland and open country south of the Moshi to Arusha road. The final stretch can be rough and unpaved, so journey times vary. On a clear day, you may see Kilimanjaro on the way.",
      hours: "About 1 hour from Moshi, or 1.5 hours from Arusha",
      meals: "",
      accommodation: "—",
    },
    {
      day: 3,
      time: "10:00 am",
      title: "Swimming and relaxing at the springs",
      description:
        "Your guide shows you the swimming area, the facilities and the safety points before you go in. Then the time is yours: swim at your own pace, relax in the shade, take photographs or try the rope swing if it is in place and safe.\n\nSome parts of the pool are deep, so non-swimmers should stay in the shallows with someone close by.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 4,
      time: "1:00 pm",
      title: "Picnic lunch",
      description:
        "You enjoy a packed lunch at a picnic spot, with time to rest and have another swim afterwards. Please tell us about any dietary needs before the day.",
      meals: "Picnic lunch",
      accommodation: "—",
    },
    {
      day: 5,
      time: "2:30 pm",
      title: "Return to your hotel",
      description:
        "You change into dry clothes, gather your belongings and meet your driver for the drive back, arriving in Moshi or Arusha at about 4 to 5pm. The rest of the day is yours.",
      meals: "",
      accommodation: "—",
    },
  ],
  included: [
    "Pickup: Hotel pickup and drop-off in Moshi or Arusha.",
    "Transport: Private vehicle and fuel for the return journey.",
    "Guide: An English-speaking driver-guide.",
    "Fees: Chemka entry fees and local fees.",
    "Meals: Packed picnic lunch.",
    "Drinks: Drinking water during the day.",
  ],
  excluded: [
    "Flights and accommodation.",
    "Travel insurance and personal medical costs.",
    "Tips for your driver-guide.",
    "Drinks and snacks bought at the springs.",
    "Swimwear, towels and water shoes.",
    "Souvenirs and personal purchases.",
  ],
  sections: [
    {
      heading: "Safety at the springs",
      bullets: [
        "Swimming: Some areas are deep. Only go into deep water if you swim confidently, and keep children close.",
        "Rope swing: Check the landing area is clear, follow local instructions and never dive headfirst into unfamiliar water.",
        "Water temperature: Expect mild or pleasantly warm water, not a hot thermal pool.",
        "Crowds: Weekends and public holidays can be busy, so an earlier arrival is usually quieter.",
        "Respect the place: Take your rubbish with you and look after the trees.",
      ],
    },
    {
      heading: "What to bring",
      bullets: [
        "Swimwear, a towel and dry clothes.",
        "Water shoes or sandals with good grip.",
        "Sunscreen and a hat.",
        "A waterproof bag for your phone and valuables.",
        "Some cash for tips and small purchases.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is the water really hot?",
      answer:
        "No. It's spring-fed and mild or pleasantly warm, which makes it very comfortable for swimming.",
    },
    {
      question: "Do I need to be able to swim?",
      answer:
        "Not to enjoy the day, as you can relax on the banks or stay in the shallows. Some parts of the pool are deep, so only swim there if you're confident.",
    },
    {
      question: "When is the best time to go?",
      answer:
        "Chemka is lovely all year. The dry months, especially June to October, make the final road easier, and January and February are good too.",
    },
  ],
  links: dayTripLinks("chemka-hot-springs-day-trip", [
    { href: "/guides/climbing-kilimanjaro-guide", label: "Climbing Kilimanjaro" },
    { href: "/guides/tanzania-travel-guide", label: "Tanzania travel guide" },
  ]),
});
