import { MERU_GROUP_PRICES, MIMG, meruTrip } from "./shared";

// From Ombeni's "4-Day Mount Meru Climb – A Complete Trekking Adventure". The
// document gives the same group prices as the 3-day climb (and mentions $725,
// $825 and $895 as a "from" price), so the group table is used until he
// confirms. Keeps the old URL and reviews.
export const meru4 = meruTrip({
  slug: "4-day-mount-meru",
  reviewSnippets: [
    { author: "Irina D", text: "A wonderful, well-organized 4-day Mt Meru trip from start to finish — an encouraging guide, a phenomenal cook, and porters carrying the gear, with real care to keep me safe and minimize altitude sickness.", source: "Google" },
    { author: "Evaline Mshina", text: "The guides Jonas and Samuel did an excellent job leading our way up Mt Meru and to the Kilimanjaro summit. They meet the client needs and give the extra confidence you need.", source: "Google" },
  ],
  seoTitle: "4-Day Mount Meru Climb | Tanzania Trekking | Trust Tours",
  metaDescription:
    "Climb Mount Meru in 4 days: the Momella Route, mountain huts, forest trails with wildlife and a summit at 4,566 m with views towards Kilimanjaro.",
  title: "4-Day Mount Meru Climb – Momella Route, with a Night After the Summit",
  shortName: "4-Day Mount Meru",
  days: 4,
  groupPricing: {
    ...MERU_GROUP_PRICES,
    note: "Package structure: 4 days on Mount Meru. Hotel nights in Arusha can be added.",
  },
  heroImage: MIMG.ridge.src,
  summary:
    "Four days on Mount Meru: forest trails with wildlife and an armed ranger, mountain huts, a sunrise attempt on Socialist Peak (4,566 m) and a night at Miriakamba to recover before the walk out.",
  overview: [
    "Rising to 4,566 metres, Mount Meru is Tanzania's second-highest mountain and one of East Africa's most rewarding treks. The climb combines forest trails, wildlife, dramatic volcanic scenery, mountain huts, a challenging summit ridge and, on a clear morning, sunrise views towards Kilimanjaro.",
    "Because Meru lies inside Arusha National Park, the trek begins in a wildlife area: an armed park ranger walks with your group, and you may see giraffes, buffaloes, warthogs, monkeys and many birds on the lower trails. Higher up, the forest gives way to giant heather, rocky ridges and alpine terrain.",
    "The four-day climb gives you more time than the three-day version. After the summit, you sleep at Miriakamba Hut instead of descending all the way to the gate, which makes summit day shorter and lets you enjoy the walk out the next morning. It's the climb we recommend for most hikers, and a good warm-up for Kilimanjaro.",
  ],
  atAGlance: [
    { label: "Duration", value: "4 days on Mount Meru" },
    { label: "Highest point", value: "Socialist Peak, 4,566 m (14,980 ft)" },
    { label: "Route", value: "Momella Gate – Miriakamba Hut – Saddle Hut – Socialist Peak" },
    { label: "Mountain accommodation", value: "Three nights in mountain huts" },
    { label: "Park", value: "Arusha National Park, with an armed ranger" },
    { label: "Best for", value: "Prepared hikers and Kilimanjaro warm-ups" },
  ],
  highlights: [
    "A gentler summit day: A night at Miriakamba after the summit instead of a 14-hour day.",
    "Wildlife on foot: Giraffes, buffaloes and colobus monkeys, with an armed ranger.",
    "Changing landscapes: Grassland, montane forest, giant heather and alpine rock.",
    "Little Meru: An optional acclimatisation walk to 3,820 metres.",
    "Socialist Peak: Sunrise on the crater rim, often with Kilimanjaro on the horizon.",
  ],
  pricingDetails: [
    "These are Ombeni's planning prices per person by group size. A solo climber pays more because the costs of the climb are shared by fewer people.",
    "Groups of four or more pay from $895 each, subject to confirming the crew and safe guide-to-climber ratios.",
    "Park fees and regulations can change, so your written quote uses the official tariff for your dates and lists exactly which fees, hotel nights, meals and transfers are included.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Momella Gate to Miriakamba Hut",
      description:
        "You drive to Momella Gate in Arusha National Park, complete the registration and meet your mountain guide, crew and the armed ranger. Your guide explains the day's route and why the group stays together in the park's wildlife areas.\n\nThe trail crosses open grassland and enters montane forest, where you may see giraffes browsing, buffaloes, warthogs, monkeys and colourful birds. Keep a safe distance from animals and follow the ranger's instructions. As you climb, the forest thickens, with tall trees, mossy branches and birdsong, and you stop for water, photographs and lunch.\n\nYou reach Miriakamba Hut after several hours, with views over the landscape when it's clear. Rest, drink plenty and tell your guide about any headache, nausea or unusual tiredness.",
      image: MIMG.forest,
      altitudeStart: 1500,
      altitudeEnd: 2514,
      distanceKm: "About 10",
      hours: "4–6 hours",
      meals: "Lunch, dinner",
      accommodation: "Miriakamba Hut",
    },
    {
      day: 2,
      title: "Miriakamba Hut to Saddle Hut",
      description:
        "The trail climbs through forest and increasingly open mountain vegetation, with changing views of Meru's volcanic landscape. It's shorter than yesterday, but the height gain means a steady pace matters more than speed. The forest gives way to giant heather and open slopes, and on a clear day you can see far across the plains of northern Tanzania.\n\nAfter lunch at Saddle Hut, an optional walk up Little Meru (3,820 m) may be possible, depending on the weather, the daylight and how you feel. Use the afternoon to rest, drink and prepare your summit clothing, gloves, headlamp and water, then go to bed early.",
      image: MIMG.heather,
      altitudeStart: 2514,
      altitudeEnd: 3570,
      altitudeMax: 3820,
      distanceKm: "About 4–5",
      hours: "3–5 hours",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Saddle Hut",
    },
    {
      day: 3,
      title: "Summit Socialist Peak, back to Miriakamba",
      description:
        "Summit day starts in the dark, at around midnight or 1:00 am. A steep trail leads to Rhino Point and the summit ridge, where the air is thinner and the path more exposed, with rocky sections that need careful footing. Your guide sets the pace and watches the conditions throughout.\n\nAs daylight comes, the ridge reveals Meru's crater and, on a clear morning, Kilimanjaro rising above the plains. After time to celebrate on Socialist Peak (4,566 m), you descend carefully to Saddle Hut and on to Miriakamba Hut to rest, eat and recover.",
      image: MIMG.summit,
      notes: ["The summit ridge is exposed and can be dangerous in bad weather. The guide and ranger may turn back if conditions are unsafe or a climber is unwell."],
      altitudeStart: 3570,
      altitudeEnd: 2514,
      altitudeMax: 4566,
      hours: "10–14 hours",
      meals: "Early snack, breakfast, lunch, dinner",
      accommodation: "Miriakamba Hut",
    },
    {
      day: 4,
      title: "Miriakamba Hut to Momella Gate",
      description:
        "After breakfast, you walk down through the forest to the lower slopes of Arusha National Park, with more chances to see wildlife from a safe distance. Take care on uneven ground and downhill sections, which are hard on tired knees; trekking poles help.\n\nAt Momella Gate, you complete the park formalities and meet your driver for the transfer back to Arusha. We recommend adding a hotel night so you can shower, rest and celebrate before travelling on.",
      image: MIMG.forestTrail,
      altitudeStart: 2514,
      altitudeEnd: 1500,
      hours: "2–4 hours",
      meals: "Breakfast, lunch",
      accommodation: "—",
    },
  ],
  included: [
    "Guide: A professional mountain guide throughout the four-day climb.",
    "Park fees: Arusha National Park entry fees for the confirmed itinerary.",
    "Mountain huts: Nights at Miriakamba Hut and Saddle Hut.",
    "Ranger: The armed park ranger required by the park.",
    "Crew: Porters and a cook.",
    "Meals: Breakfast, lunch and dinner as listed in the itinerary.",
    "Drinking water: Throughout the climb.",
    "Transfers: Between your agreed pickup point and Momella Gate, and back.",
    "Taxes: Applicable government fees and taxes listed in your quote.",
    "Planning: Itinerary planning and coordination with the mountain team.",
  ],
  excluded: [
    "International flights.",
    "Visa fees and travel insurance.",
    "Hotel accommodation before or after the climb, unless added.",
    "Airport transfers, unless added.",
    "Hotel meals and drinks not listed.",
    "Personal trekking equipment, a sleeping bag and trekking poles, unless rented.",
    "Tips for your guide, porters and cook.",
    "Laundry, souvenirs and personal expenses.",
  ],
  sections: [
    {
      heading: "Is Mount Meru good preparation for Kilimanjaro?",
      paragraphs: [
        "Yes. Meru gets you used to several days of walking, mountain huts, early starts, changing temperatures and climbing and descending at altitude. It's also a chance to test your boots, layers, daypack and water system before a longer climb.",
        "It isn't a substitute for acclimatising properly on Kilimanjaro, though. Leave a rest day or two between the climbs, and ask us to plan the pair together.",
      ],
    },
  ],
  faqs: [
    {
      question: "How is the 4-day climb different from the 3-day?",
      answer:
        "The 4-day climb sleeps at Miriakamba Hut after the summit, so you don't have to descend all the way to the gate on summit day. Summit day is shorter and the pace is gentler overall.",
    },
    {
      question: "Can beginners climb Mount Meru?",
      answer:
        "People with reasonable fitness who prepare well can complete the trek, but it isn't an easy walk. Summit day is long and strenuous, so train beforehand and tell us honestly about your experience.",
    },
    {
      question: "Are airport transfers and hotel nights included?",
      answer:
        "Not in the 4-day price, which covers the climb itself and the transfers to and from Momella Gate. Add hotel nights in the booking box and tell us your flights, and we'll include the transfers in your quote.",
    },
  ],
});
