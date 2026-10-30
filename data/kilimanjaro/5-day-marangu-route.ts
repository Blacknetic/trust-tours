import type { TripPackage } from "@/data/packages";
import { KILIMANJARO_HUT_ADDONS } from "@/data/addons";
import { BEST_MONTHS, CONTACT_BULLETS, IMG, PRICE_NOTE, howPricesWork, withProse } from "./shared";
import { DAYS } from "./prose/5-day-marangu-route";

export const marangu5: TripPackage = {
  slug: "5-day-marangu-route",
  seoTitle: "5-Day Marangu Route Kilimanjaro Climb · Trust Tours",
  metaDescription:
    "The shortest way up Kilimanjaro: 5 days on the Marangu 'Coca-Cola Route', sleeping in mountain huts. For fit, experienced hikers. $2,850 per person.",
  destinations: ["Kilimanjaro"],
  category: "kilimanjaro",
  effort: 4,
  summitChance: 2,
  difficulty: "Challenging",
  title: "5-Day Kilimanjaro Climb – Marangu Route",
  shortName: "5-Day Marangu",
  days: 5,
  priceFromUSD: 2850,
  priceNote: PRICE_NOTE,
  groupPricing: {
    tiers: [
      { pax: 1, usd: 2850 },
      { pax: 2, usd: 2550 },
      { pax: 3, usd: 2550 },
      { pax: 4, usd: 2450 },
      { pax: 5, usd: 2350 },
      { pax: 6, usd: 2250 },
      { pax: 7, usd: 1999 },
    ],
    note: "5 days / 4 nights on the mountain, sleeping in mountain huts.",
  },
  addOns: KILIMANJARO_HUT_ADDONS,
  tier: ["budget"],
  heroImage: "/images/kilimanjaro-summit-sign.jpg",
  gallery: [],
  summary:
    "Climb Kilimanjaro in 5 days on the classic Coca-Cola Route to Uhuru Peak — one of the most established ways to climb Africa's highest mountain, sleeping in mountain huts instead of tents.",
  overview: [
    "The 5-day Marangu Route is one of the most established ways to climb Mount Kilimanjaro, Africa's highest mountain, reaching an elevation of 5,895 metres at Uhuru Peak. Often known as the Coca-Cola Route, Marangu is famous for its established hiking trail, scenic landscapes and mountain huts, making it different from Kilimanjaro routes that rely on tented camping.",
    "Your journey begins in the lush tropical rainforest on Kilimanjaro's lower slopes, continues through the beautiful moorland and alpine landscapes around Horombo and Kibo huts, and culminates in the demanding overnight ascent towards Uhuru Peak. If conditions permit and you are physically prepared, you will stand on the summit of Africa's highest mountain and enjoy the extraordinary experience of watching the sun rise above the surrounding landscape.",
    "The Marangu Route follows the historic eastern approach to Kilimanjaro. It became internationally famous through the early European expeditions, including Hans Meyer's successful summit in 1889. Today, it remains a popular choice for climbers who prefer hut accommodation and a clearly established trail.",
    "At Trust Tours & Safaris, we organise Kilimanjaro climbs with an emphasis on experienced local mountain guides, professional support staff, appropriate equipment, careful monitoring of altitude-related symptoms and a well-coordinated mountain experience. Our goal is to help you prepare confidently, understand the demands of the climb and give yourself the best reasonable opportunity to reach Uhuru Peak safely.",
    "Please note: the five-day Marangu itinerary is a demanding schedule with limited acclimatisation time. A six-day Marangu climb, which adds an extra acclimatisation day around Horombo Hut, is generally the better choice for improving adaptation to altitude. No operator can guarantee a summit.",
  ],
  atAGlance: [
    { label: "Duration", value: "5 days / 4 nights on the mountain" },
    { label: "Route", value: "Marangu Route" },
    { label: "Highest point", value: "Uhuru Peak, 5,895 m" },
    { label: "Difficulty", value: "Challenging" },
    { label: "Accommodation", value: "Mountain huts" },
    { label: "Trek style", value: "Guided trekking expedition" },
    { label: "Start and finish", value: "Marangu Gate, Kilimanjaro National Park" },
    { label: "Best for", value: "Experienced hikers and physically fit travellers seeking a shorter itinerary" },
  ],
  highlights: [
    "Reach Uhuru Peak at 5,895 metres, the highest point in Africa, if conditions and your health allow.",
    "Hike through Kilimanjaro's changing ecological zones, from tropical rainforest to moorland, alpine desert and the high-altitude summit zone.",
    "Sleep in established mountain huts instead of tents.",
    "Enjoy views of Mawenzi Peak, Kibo Peak and the distinctive volcanic landscapes of Kilimanjaro.",
    "Walk through the giant heather and moorland vegetation of the higher mountain slopes.",
    "Experience the demanding midnight summit ascent under a sky that can be filled with stars.",
    "Climb with a professional mountain guide and a supporting mountain crew.",
    "Receive guidance on altitude awareness, hydration, pacing and preparation before and during the expedition.",
  ],
  pricingDetails: [
    ...howPricesWork("seven or more climbers"),
    "Our pricing commitment: we provide a clear breakdown of the costs included in your climb so that you can understand the services covered and identify any additional expenses before confirming your booking.",
  ],
  itinerary: withProse(DAYS, [
    { day: 1, image: IMG.moorlandHikers, altitudeStart: 1870, altitudeEnd: 2720, distanceKm: 8, hours: "4–5 hours", meals: "Lunch and dinner", accommodation: "Mandara Hut" },
    { day: 2, altitudeStart: 2720, altitudeEnd: 3720, distanceKm: 12, hours: "6–8 hours", meals: "Breakfast, lunch and dinner", accommodation: "Horombo Hut" },
    { day: 3, altitudeStart: 3720, altitudeEnd: 4703, distanceKm: 10, hours: "5–7 hours", meals: "Breakfast, lunch and dinner", accommodation: "Kibo Hut" },
    { day: 4, image: IMG.uhuru, altitudeStart: 4703, altitudeEnd: 3720, altitudeMax: 5895, distanceKm: "16–21", hours: "10–15 hours or longer", meals: "Tea or a light snack before departure, refreshments and dinner", accommodation: "Horombo Hut" },
    { day: 5, altitudeStart: 3720, altitudeEnd: 1870, distanceKm: 20, hours: "5–7 hours", meals: "Breakfast and lunch", accommodation: "Transfer to your hotel in Arusha or Moshi" },
  ]),
  included: [
    "Kilimanjaro National Park fees: The applicable park entry fees for the five-day itinerary, together with the relevant compulsory conservation and mountain-use charges specified in your quotation.",
    "Mountain hut accommodation: Four nights — Mandara Hut, Horombo Hut, Kibo Hut and Horombo Hut. Accommodation is generally in shared dormitory-style rooms; expect basic mountain facilities rather than hotel-style luxury.",
    "Professional mountain guides: Experienced local guides who coordinate the daily trekking schedule, explain the route, monitor the team's progress, watch for altitude-related symptoms and make safety decisions when conditions require a change of plan.",
    "Mountain support crew: The staff required for the confirmed group size — assistant guides, cooks and porters who transport approved expedition supplies and prepare meals, coordinated with appropriate workloads, suitable equipment and respect for their welfare.",
    "Meals during the climb: Breakfast, lunch and dinner according to the itinerary, eaten at the huts or as packed lunches. Tell us in advance about vegetarian diets, food allergies or other dietary requirements.",
    "Drinking water: Provided during the climb and made safe for drinking. Bring a reusable water bottle or hydration system with enough capacity for each trekking day.",
    "Transfers for the expedition: Between your hotel in Moshi or Arusha and Marangu Gate at the start of the climb, and the return transfer after the trek.",
    "Safety briefing and mountain preparation: Before the trek your guide explains the route, walking times, conditions, equipment and the importance of reporting symptoms early, and monitors your condition throughout.",
    "Rescue and emergency arrangements: The applicable park rescue arrangements and mountain emergency support. This does not automatically include helicopter evacuation, hospital treatment or international medical evacuation — you need travel insurance that covers high-altitude trekking on Kilimanjaro.",
    "Summit certificate: Recorded through the applicable park procedures if you reach the qualifying summit point.",
  ],
  excluded: [
    "International flights: Flights to and from Tanzania.",
    "Accommodation before and after the climb: Hotel nights in Arusha or Moshi before or after the mountain expedition (can be added).",
    "Airport transfers: Transfers between Kilimanjaro International Airport and your hotel, unless specifically included.",
    "Tanzania visa fees: Visa applications and related immigration charges.",
    "Travel and medical insurance: Insurance covering high-altitude trekking, medical expenses, emergency evacuation, trip cancellation and other relevant risks.",
    "Personal climbing equipment: Hiking boots, waterproof jackets and trousers, thermal layers, gloves, sleeping bag, headlamp, trekking poles, backpack and other personal gear unless rental is agreed.",
    "Tips and gratuities: Tips for guides, assistant guides, cooks and porters — budget about $250–$350 per climber for the whole climb.",
    "Personal expenses: Laundry, telephone charges, souvenirs, snacks and other personal purchases.",
    "Additional meals and drinks: Meals outside the stated itinerary and any beverages or special food not included in the package.",
    "Optional services: Equipment rental, private upgrades, additional accommodation and other services not specified in the quotation.",
    "Medical treatment and uncovered evacuation costs: Hospital treatment, specialist care, helicopter evacuation and other expenses not covered by the confirmed package or your insurance.",
    "Additional costs arising from itinerary changes: Extra accommodation, transport or other expenses resulting from voluntary changes or circumstances outside the agreed arrangements.",
  ],
  sections: [
    {
      heading: "Is the 5-Day Marangu Route right for you?",
      paragraphs: [
        "The five-day Marangu Route is best suited to travellers who are physically fit, have prepared for several consecutive days of hiking and understand the challenges of sleeping and walking at altitude. The hut accommodation is convenient, but it does not remove the physical demands of the mountain or the risk of altitude sickness.",
        "If your priority is to maximise your time for acclimatisation and give your body more opportunity to adjust to the altitude, we recommend considering the six-day Marangu Route. It adds a further night around Horombo Hut and an acclimatisation day, making the schedule less compressed.",
        "Physical fitness is important, but it cannot predict exactly how your body will respond to altitude. A well-prepared climber can still experience altitude illness, while a slower pace, appropriate acclimatisation and early reporting of symptoms can help the guide make safer decisions.",
        "Our team will explain the route, preparation requirements, equipment list and safety procedures before your climb so that you can make an informed decision about the itinerary that best suits your experience and goals.",
      ],
    },
    {
      heading: "Essential equipment for the Marangu Route",
      paragraphs: [
        "Proper equipment is essential because Kilimanjaro's temperature and weather conditions can change significantly between the rainforest and the summit. Your personal packing list should include:",
      ],
      bullets: [
        "Waterproof hiking boots that have been properly broken in.",
        "Moisture-wicking base layers and warm insulating clothing.",
        "A waterproof and wind-resistant outer jacket and trousers.",
        "Warm gloves, a hat and a neck covering or buff.",
        "A warm sleeping bag suitable for sub-zero mountain conditions.",
        "A headlamp with spare batteries for the night-time summit ascent.",
        "Trekking poles to help with balance and the long descent.",
        "A reusable water bottle or hydration system.",
        "Sunglasses, sunscreen and lip protection.",
        "A daypack for water, clothing layers, snacks and personal essentials.",
        "Personal medication and any other items recommended by your healthcare professional.",
      ],
      note: "We will provide a more detailed equipment checklist before departure and advise you about suitable rental options where available.",
    },
    {
      heading: "Climb Kilimanjaro with Trust Tours & Safaris",
      paragraphs: [
        "Standing at Uhuru Peak is an extraordinary goal, but a successful expedition is about more than reaching the summit. It is about preparing well, respecting the mountain, working with a professional local team and making sensible decisions throughout the journey.",
        "Trust Tours & Safaris provides locally organised Kilimanjaro expeditions with experienced mountain guides, organised support crews and personal assistance before your climb. We want you to understand the challenges, know what is included in your package and feel supported from the first briefing to your return from the mountain.",
        "Contact us to request your personalised quotation for the five-day Marangu Route, or ask our team about the six-day option if you would prefer additional time for acclimatisation. Your Kilimanjaro adventure starts with the right preparation. Let's plan it together.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "Is five days enough to climb Mount Kilimanjaro?",
      answer:
        "A five-day Marangu climb is possible, but it is demanding because the schedule offers limited time for acclimatisation. Some climbers reach Uhuru Peak on this itinerary, while others need to turn around because of altitude symptoms, fatigue or weather. The six-day Marangu itinerary is generally preferable because it adds an acclimatisation day.",
    },
    {
      question: "What is the highest point on the Marangu Route?",
      answer:
        "The highest point is Uhuru Peak at 5,895 metres above sea level. Climbers normally pass Gilman's Point on the crater rim before continuing towards Uhuru Peak, provided their condition and the weather allow.",
    },
    {
      question: "Do I sleep in tents on the Marangu Route?",
      answer:
        "No. The standard Marangu itinerary uses mountain huts at Mandara, Horombo and Kibo. Rooms are generally shared, and facilities are basic compared with hotels or luxury lodges.",
    },
    {
      question: "Is the Marangu Route suitable for beginners?",
      answer:
        "The route can be attempted by fit beginners who prepare properly, but it is not an easy walk. The summit ascent is physically demanding, and altitude illness can affect people regardless of fitness or previous hiking experience. For beginners, we generally recommend considering the six-day option.",
    },
    {
      question: "Can I climb Kilimanjaro during the rainy season?",
      answer:
        "The Marangu Route's hut accommodation can be an advantage in wet conditions because you do not need to sleep in a tent. However, the trail can be wet, muddy or slippery, and the summit may be cold, windy or snowy. Appropriate waterproof clothing and footwear are essential, and no season guarantees favourable weather.",
    },
    {
      question: "What happens if I cannot reach Uhuru Peak?",
      answer:
        "Your guide will assess your condition and decide whether it is safe to continue. If you develop concerning altitude symptoms or become too exhausted, the guide may stop the ascent and arrange a descent. Reaching a lower point is not a failure: the priority is to return safely.",
    },
    {
      question: "What is the difference between the five-day and six-day Marangu routes?",
      answer:
        "The five-day itinerary follows a more compressed schedule, with the summit attempt after the ascent to Kibo Hut. The six-day itinerary adds an extra acclimatisation day around Horombo Hut, typically including a hike to a higher elevation followed by a return to the hut. This provides additional time for the body to adjust to altitude, although it does not eliminate the risk of altitude illness.",
    },
    {
      question: "How do I book the Marangu Route with Trust Tours & Safaris?",
      answer:
        "Contact our team with your preferred travel dates, number of climbers, nationality and whether you need airport transfers or accommodation before and after the climb. We will prepare a personalised quotation, explain the equipment and preparation requirements, and confirm the arrangements before accepting your booking.",
    },
  ],
  bestMonths: BEST_MONTHS,
};
