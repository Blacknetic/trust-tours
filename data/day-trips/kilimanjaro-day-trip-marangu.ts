import { dayTrip, dayTripLinks } from "./shared";

// From Ombeni's "1 Day Hike Marangu Mount Kilimanjaro" document, with the group
// prices it lists as his own. It replaces the old entry and keeps its URL.
export const kilimanjaroDayHike = dayTrip({
  slug: "kilimanjaro-day-trip-marangu",
  category: "trekking",
  difficulty: "Moderate",
  seoTitle: "Kilimanjaro Day Hike to Mandara Hut | Trust Tours",
  metaDescription:
    "A guided Kilimanjaro day hike on the Marangu Route: rainforest, colobus monkeys, a picnic lunch at Mandara Hut (2,700 m) and back, from Moshi.",
  destinations: ["Kilimanjaro"],
  title: "Kilimanjaro Day Hike – Marangu Route to Mandara Hut",
  shortName: "Kilimanjaro Day Hike",
  days: 1,
  groupPricing: {
    tiers: [
      { pax: 1, usd: 650 },
      { pax: 2, usd: 555 },
      { pax: 3, usd: 500 },
      { pax: 4, usd: 499 },
      { pax: 5, usd: 410 },
    ],
  },
  tier: ["budget"],
  heroImage: "/images/kilimanjaro/marangu-rainforest-trail.jpg",
  bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
  summary:
    "A guided day on Africa's highest mountain: walk through Kilimanjaro's rainforest on the Marangu Route to Mandara Hut at about 2,700 metres, then back to the gate.",
  overview: [
    "Experience Africa's highest mountain on a guided day hike through the lower slopes of Kilimanjaro. You walk through the rainforest, discover its plants and wildlife and enjoy a real mountain trail, without committing to a full summit climb.",
    "The hike follows the Marangu Route from the park gate to Mandara Hut, the first hut on the route, at about 2,700 metres. You rest and have lunch there before walking back down the same trail.",
    "It suits travellers with reasonable walking fitness, adventurous families and anyone short on time. It is a hike on Kilimanjaro, not a summit climb: reaching Uhuru Peak takes a multi-day climb with time to acclimatise.",
  ],
  atAGlance: [
    { label: "Duration", value: "1 full day" },
    { label: "Route", value: "Marangu Gate (about 1,870 m) to Mandara Hut (about 2,700 m) and back" },
    { label: "Start and finish", value: "Your hotel in Moshi" },
    { label: "Experience", value: "Rainforest trekking, wildlife spotting and a picnic lunch" },
    { label: "Difficulty", value: "Moderate: several hours of steady uphill and downhill walking" },
    { label: "Suitable for", value: "Reasonably fit walkers and adventurous families" },
  ],
  highlights: [
    "Kilimanjaro's rainforest: Tall trees, ferns, mosses and vines on the lower slopes.",
    "Colobus monkeys: Look for them in the canopy and listen for forest birds.",
    "Mandara Hut: Lunch at the first hut on the Marangu Route, at about 2,700 metres.",
    "Maundi Crater: A short extra walk towards a viewpoint, when time and conditions allow.",
    "A real taste of the climb: Walk the trail that summit climbers use.",
  ],
  itinerary: [
    {
      day: 1,
      time: "6:00 am",
      title: "Hotel pickup and transfer",
      description:
        "You are picked up from your hotel in Moshi and driven to Marangu Gate, with glimpses of the Kilimanjaro foothills and local villages on the way. Your guide checks that you have your daypack, rain jacket, walking shoes, water and any medication you need.",
      image: { src: "/images/kilimanjaro/trailhead-transfer.jpg", alt: "A safari vehicle at the trailhead on the lower slopes of Kilimanjaro" },
      meals: "",
      accommodation: "—",
    },
    {
      day: 2,
      time: "7:30 am",
      title: "Registration at Marangu Gate",
      description:
        "At the park entrance, you complete the registration and listen to your guide's briefing on the route, the pace, how to behave around wildlife, the weather and why the group stays together. The hike begins once the park formalities are done.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 3,
      time: "8:30 am",
      title: "Hike through the rainforest",
      description:
        "You set off along the Marangu trail, climbing gradually beneath the forest canopy. Your guide keeps a comfortable pace and points out plants, birds and any monkeys. You take short breaks for rest and water. Expect damp ground, muddy patches or rain at times.",
      image: { src: "/images/kilimanjaro/forest-trail-hikers.jpg", alt: "Hikers walking a trail through Kilimanjaro's rainforest" },
      meals: "",
      accommodation: "—",
    },
    {
      day: 4,
      time: "11:30 am",
      title: "Mandara Hut and picnic lunch",
      description:
        "You reach the Mandara Hut area, the destination for the day. You rest, take photographs and enjoy the forest and mountain setting, then have your packed lunch. Your guide decides whether there is time for a short walk towards a nearby viewpoint, such as Maundi Crater.\n\nBefore heading down, drink plenty, check your feet and have your rain layer ready in case the weather changes.",
      image: { src: "/images/kilimanjaro/mandara-hut.jpg", alt: "The wooden huts at Mandara on Kilimanjaro's Marangu Route" },
      meals: "Picnic lunch",
      accommodation: "—",
    },
    {
      day: 5,
      time: "1:00 pm",
      title: "Descend to Marangu Gate",
      description:
        "You walk back down the same trail. Going downhill may feel easier, but roots, stones and wet ground can make the footing tricky, so take your time and stay with your guide.",
      image: { src: "/images/kilimanjaro/rainforest-descent.jpg", alt: "Walkers descending through the forest on Kilimanjaro" },
      meals: "",
      accommodation: "—",
    },
    {
      day: 6,
      time: "4:00 pm",
      title: "Return to your hotel",
      description:
        "After the park exit formalities, you meet your driver for the trip back to Moshi, arriving at about 4 to 5.30pm, depending on traffic and your walking pace. The evening is yours to relax.",
      meals: "",
      accommodation: "—",
    },
  ],
  included: [
    "Pickup: Hotel pickup in Moshi.",
    "Transfers: To the Kilimanjaro National Park gate and back.",
    "Park fees: Kilimanjaro National Park fees, including conservation, crew, vehicle and rescue fees.",
    "Meals: Picnic lunch, and drinks during the hike.",
    "Safety: GPS tracking and a medical kit.",
    "Guide: A licensed professional mountain guide with wilderness first-aid training.",
  ],
  excluded: [
    "International flights and the cost of getting to Moshi.",
    "Hotel accommodation and meals before or after the hike.",
    "Hiking equipment rental.",
    "Tips for your guide and crew. A typical range is $30 to $80 per person.",
    "Travel insurance. Check that yours covers mountain hiking.",
  ],
  sections: [
    {
      heading: "How hard is the hike?",
      bullets: [
        "Fitness: You should be comfortable walking for several hours on uneven ground.",
        "Altitude: Mandara Hut is at about 2,700 metres, so some people notice breathlessness or a headache. Tell your guide straight away if you feel unwell.",
        "Trail: The rainforest can be wet, muddy and slippery, so good grip and waterproofs matter.",
        "Children: Talk to us about your child's age, health and walking ability before booking.",
        "Turning back: Your guide may slow the pace or end the hike early if the weather, tiredness or health makes it unsafe to continue.",
      ],
      note: "A day hike doesn't give you the acclimatisation needed to climb to the summit.",
    },
    {
      heading: "What to pack",
      bullets: [
        "Broken-in hiking boots or trail shoes with good grip.",
        "A waterproof jacket and trousers, plus a warm fleece.",
        "A small daypack, water and a reusable bottle.",
        "A sun hat, sunscreen, sunglasses, light gloves and a warm hat.",
        "Personal medication, blister care and a little cash for tips.",
      ],
    },
    {
      heading: "Best time for the hike",
      table: {
        headers: ["Months", "What to expect"],
        rows: [
          ["June to October", "Generally drier, and often a good time for clearer conditions, although rain is still possible."],
          ["January and February", "Often good for mountain views and hiking."],
          ["March to May", "The long rains bring wetter trails, mud and cloud."],
          ["November and December", "Short rains may fall, so expect changeable weather."],
        ],
      },
    },
    {
      heading: "Prefer two days?",
      paragraphs: [
        "With more time, you can spend a night at Mandara Hut and walk higher the next day, towards Maundi Crater or another agreed viewpoint, before descending. Ask us for a price for the two-day hike.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I reach the summit on a day hike?",
      answer: "No. The day hike reaches Mandara Hut and returns to the gate. Reaching Uhuru Peak takes a climb of several days.",
    },
    {
      question: "Do I need climbing experience?",
      answer:
        "No, but you need suitable footwear and the fitness for several hours of uphill and downhill walking.",
    },
    {
      question: "Will I see monkeys?",
      answer: "You may see colobus monkeys and forest birds, but wildlife sightings aren't guaranteed.",
    },
    {
      question: "Can you pick me up in Arusha?",
      answer:
        "It may be possible, but it means a much longer drive and an earlier start. Ask us, and we'll confirm the transfer and whether the price changes.",
    },
  ],
  links: dayTripLinks("kilimanjaro-day-trip-marangu", [
    { href: "/guides/marangu-route", label: "The Marangu Route" },
    { href: "/guides/altitude-sickness-on-kilimanjaro", label: "Altitude sickness" },
    { href: "/kilimanjaro", label: "Climb to the summit" },
  ]),
});
