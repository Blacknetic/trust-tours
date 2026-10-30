import type { TripPackage } from "@/data/packages";
import { KILIMANJARO_HUT_ADDONS } from "@/data/addons";
import { BEST_MONTHS, CONTACT_BULLETS, IMG, PRICE_NOTE, howPricesWork, withProse } from "./shared";
import { DAYS } from "./prose/6-day-marangu-route";

export const marangu6: TripPackage = {
  slug: "6-day-marangu-route",
  seoTitle: "6-Day Marangu Route Kilimanjaro Climb · Trust Tours",
  metaDescription:
    "Climb Kilimanjaro on the 6-day Marangu 'Coca-Cola Route': mountain huts instead of tents and an acclimatisation day at Horombo. $2,627 per person.",
  destinations: ["Kilimanjaro"],
  category: "kilimanjaro",
  effort: 3,
  summitChance: 3,
  difficulty: "Moderate",
  title: "6-Day Kilimanjaro Climb – Marangu Route",
  shortName: "6-Day Marangu",
  days: 6,
  priceFromUSD: 2627,
  priceNote: PRICE_NOTE,
  groupPricing: {
    tiers: [
      { pax: 1, usd: 2627 },
      { pax: 2, usd: 2240 },
      { pax: 3, usd: 2111 },
      { pax: 4, usd: 2047 },
      { pax: 5, usd: 2008 },
      { pax: 6, usd: 1982 },
      { pax: 7, usd: 1964 },
      { pax: 8, usd: 1950 },
    ],
    note: "Current published starting rates · USD per climber · shared hut accommodation.",
  },
  addOns: KILIMANJARO_HUT_ADDONS,
  tier: ["budget"],
  heroImage: "/images/packages/6-day-marangu-route.jpg",
  gallery: [],
  summary:
    "Experience one of Tanzania's classic mountain adventures on the Marangu Route, a well-known trail to the summit of Mount Kilimanjaro — Africa's highest mountain at 5,895 metres (19,341 feet).",
  overviewImage: IMG.kiboSunset,
  overview: [
    "Often called the Coca-Cola Route, Marangu is distinctive because overnight accommodation is provided in mountain huts rather than tents, making it a popular option for trekkers who prefer hut-based trekking.",
    "Over six days on the mountain, you travel from the lush rainforest near Marangu Gate through heathland, moorland and the high-altitude alpine desert before attempting the summit. The itinerary includes an additional acclimatisation day at Horombo Hut, giving your body more time to adapt to the altitude than the shorter five-day version. Although this extra day can improve your opportunity to acclimatise, altitude sickness remains a serious risk and reaching the summit is never guaranteed.",
    "Your climb is supported by mountain guides and a crew, with meals, hut arrangements and essential logistics organised according to your confirmed package. Before the trek, we can also arrange airport transfers, hotel accommodation and a pre-climb briefing.",
    "The recommended version is the six-day Marangu Route, which includes an acclimatisation day at Horombo Hut before continuing towards Kibo Hut and the summit. The trek begins at Marangu Gate and reaches Uhuru Peak at 5,895 metres before descending by the same route.",
  ],
  atAGlance: [
    { label: "Duration", value: "6 trekking days; additional arrival and departure nights recommended" },
    { label: "Highest point", value: "Uhuru Peak — 5,895 m" },
    { label: "Accommodation", value: "Mountain huts on the route, plus hotel nights if included" },
    { label: "Trekking style", value: "Guided, supported trek with an acclimatisation day" },
  ],
  highlights: [
    "Sleep in mountain huts at Mandara, Horombo and Kibo instead of tents",
    "A dedicated acclimatisation day at Horombo Hut with a hike towards Zebra Rocks",
    "Giant groundsels and lobelias in the moorland zone",
    "Views of Mawenzi and Kibo across the high-altitude Saddle",
    "Summit via Gilman's Point on the crater rim",
  ],
  pricingImage: IMG.horombo,
  pricingDetails: [
    "Trust Tours & Safaris offers the six-day Marangu Route with hut accommodation, mountain crew support and the essential arrangements for your summit attempt. The price depends on how many climbers are travelling together, since guide, crew and transport costs are shared across the group.",
    "These are the published starting rates for the six-day climb. Your final quote confirms the travel dates, group size, hotel arrangements and any extra services.",
    ...howPricesWork("eight or more climbers"),
  ],
  itinerary: withProse(DAYS, [
    { day: 1, image: IMG.maranguForest, altitudeStart: 1860, altitudeEnd: 2720, distanceKm: 8, hours: "4–5 hours", meals: "Lunch and dinner", accommodation: "Mandara Hut, 2,720 m" },
    { day: 2, image: IMG.moorlandKibo, altitudeStart: 2720, altitudeEnd: 3720, distanceKm: 12, hours: "5–7 hours", meals: "Breakfast, lunch and dinner", accommodation: "Horombo Hut, 3,720 m" },
    { day: 3, image: IMG.zebraRocks, altitudeStart: 3720, altitudeEnd: 3720, altitudeMax: 4000, distanceKm: "4–6 (round trip)", hours: "2–4 hours", meals: "Breakfast, lunch and dinner", accommodation: "Horombo Hut, 3,720 m" },
    { day: 4, image: IMG.saddle, altitudeStart: 3720, altitudeEnd: 4703, distanceKm: 10, hours: "5–7 hours", meals: "Breakfast, lunch and an early dinner", accommodation: "Kibo Hut, approximately 4,703 m" },
    { day: 5, image: IMG.uhuruSunrise, altitudeStart: 4703, altitudeEnd: 3720, altitudeMax: 5895, hours: "10–15 hours or longer", meals: "Summit-night refreshments and meals", accommodation: "Horombo Hut, 3,720 m" },
    { day: 6, image: IMG.forestDescent, altitudeStart: 3720, altitudeEnd: 1860, distanceKm: 18, hours: "5–7 hours", meals: "Breakfast and lunch", accommodation: "Transfer to your hotel in Moshi or Arusha" },
  ]),
  included: [
    "Kilimanjaro National Park charges: Applicable park entry and conservation fees for the six-day itinerary, subject to the official tariffs in force for your travel dates.",
    "Mountain hut accommodation: Five nights in the designated mountain huts — normally one night at Mandara Hut, two nights at Horombo Hut before and after the summit attempt, and one night at Kibo Hut. Accommodation is shared and subject to park allocation.",
    "Professional mountain guide team: Licensed and appropriately qualified mountain guides, with supporting crew arranged for the expedition.",
    "Porter and mountain support services: The porter team required to transport agreed expedition supplies and assist with the normal logistics of the climb.",
    "Mountain meals: Breakfast, lunch and dinner on the mountain, with the precise meal plan for the summit attempt confirmed in writing.",
    "Drinking water: Drinking water treated or prepared according to the operator's arrangements; bring a reusable bottle or hydration system.",
    "Transfers for the climb: Road transfers between your agreed Moshi or Arusha pickup point and Marangu Gate, as specified in the final quotation.",
    "Expedition coordination: Pre-climb briefing, route arrangements, park registration coordination and logistical planning for the scheduled six-day climb.",
    "Basic safety procedures: Guide monitoring, communication arrangements and the applicable park rescue arrangements included in the confirmed package. These are not a promise of helicopter evacuation or unlimited medical treatment.",
    "Summit certificate arrangements: Assistance with the applicable certificate procedures for climbers who qualify under park rules.",
    "Applicable taxes and charges: Any taxes and mandatory charges included in the final quotation are identified clearly rather than left ambiguous.",
  ],
  excluded: [
    "Accommodation before or after the climb: Hotel nights in Arusha or Moshi (can be added).",
    "Airport transfers not specified: Transfers to or from Kilimanjaro International Airport or another airport.",
    "International flights: Flights to and from Tanzania, including any connecting flights.",
    "Visa and entry documents: Tanzanian visa charges, passport expenses and any required travel documentation.",
    "Travel and medical insurance: Insurance suitable for high-altitude trekking, including cover for trekking to 6,000 metres, emergency medical care and evacuation where available under the policy.",
    "Personal trekking equipment: Hiking boots, thermal base layers, waterproof jackets and trousers, insulated gloves, sleeping bags, trekking poles, headlamps and other personal gear, unless equipment rental is expressly included.",
    "Tips and gratuities: Tips for guides, assistant guides, porters, cooks and other mountain crew — budget about $350–$550 per climber for the six days.",
    "Personal purchases: Snacks, soft drinks, alcoholic beverages, souvenirs, laundry, telephone charges and other personal expenses.",
    "Medication and personal medical supplies: Prescription medication, personal first-aid items and medical consultations before or after the climb.",
    "Additional hotel meals and services: Meals, drinks, room upgrades and other services outside the mountain package.",
    "Emergency expenses outside the package: Hospital bills, medical treatment, specialist evacuation, helicopter rescue or other expenses not expressly covered by the operator or your insurance policy.",
    "Extra nights or itinerary changes: Additional accommodation, transport or logistical costs caused by schedule changes, an extended stay or arrangements outside the confirmed itinerary.",
    "Other optional activities: Any safari, cultural excursion, Zanzibar extension or additional tour not listed in the written quotation.",
  ],
  sections: [
    {
      heading: "Marangu Route itinerary at a glance",
      table: {
        headers: ["Trekking day", "Route", "Approx. hiking time", "Overnight"],
        rows: [
          ["Day 1", "Marangu Gate → Mandara Hut", "4–5 hours", "Mandara Hut, 2,720 m"],
          ["Day 2", "Mandara Hut → Horombo Hut", "5–7 hours", "Horombo Hut, 3,720 m"],
          ["Day 3", "Acclimatisation hike → Horombo Hut", "2–4 hours", "Horombo Hut, 3,720 m"],
          ["Day 4", "Horombo Hut → Kibo Hut", "5–7 hours", "Kibo Hut, approximately 4,703 m"],
          ["Day 5", "Kibo Hut → Uhuru Peak → Horombo Hut", "12–15+ hours", "Horombo Hut, 3,720 m"],
          ["Day 6", "Horombo Hut → Marangu Gate", "5–7 hours", "Return to hotel / onward transfer"],
        ],
        caption: "Times and distances are approximate. Weather, fitness, trail conditions and individual acclimatisation affect the pace. Summit day is particularly demanding.",
      },
    },
    {
      heading: "Accommodation on the mountain",
      paragraphs: [
        "The Marangu Route uses mountain huts rather than tents. Accommodation is generally dormitory-style, with shared sleeping areas and basic facilities. The huts provide shelter from the elements, but they are not luxury lodges, and space can be shared with other climbers.",
      ],
      bullets: [
        "Mandara Hut: Located in the forest zone, it provides your first overnight stop.",
        "Horombo Hut: Used for two nights on this six-day itinerary, including the acclimatisation day.",
        "Kibo Hut: The final overnight stop before the summit attempt, at high altitude where temperatures can be very cold.",
      ],
      images: [IMG.mandara, IMG.horombo, IMG.kiboHut],
      note: "Bring a suitable sleeping bag or confirm whether your chosen package provides one. Even in hut accommodation, warm layers, gloves, a hat and a good headlamp are essential.",
    },
    {
      heading: "Additional costs to plan for",
      table: {
        headers: ["Extra expense", "Planning advice"],
        rows: [
          ["International airfare", "Depends on your departure country, travel dates and airline"],
          ["Visa", "Depends on nationality and visa category"],
          ["Crew tips", "Budget separately for the mountain team; the amount depends on group size and service"],
          ["Personal trekking gear", "Bring suitable gear or ask about local rental availability"],
          ["Extra hotel nights", "Recommended when your flight schedule requires an additional night before or after the trek"],
          ["Travel insurance", "Confirm the policy covers high-altitude trekking, emergency treatment and evacuation"],
        ],
      },
    },
    {
      heading: "Best time to climb the Marangu Route",
      paragraphs: [
        "The most popular climbing periods are generally the drier months, particularly June to October, as well as January and February. Conditions can change quickly at high altitude in any season, and rain, wind, cold temperatures or poor visibility may affect the trek.",
        "The Marangu Route's hut accommodation offers shelter, but it does not remove the risks associated with wet trails, cold weather or altitude. We recommend selecting dates based on your flexibility, fitness, equipment and the advice provided during your pre-climb briefing.",
      ],
      images: [IMG.forestTrail, IMG.kiboClouds, IMG.summitSunrise],
    },
    {
      heading: "Safety, acclimatisation and responsible climbing",
      paragraphs: [
        "Mount Kilimanjaro is a high-altitude mountain, and the summit attempt should never be treated as a simple walk. Altitude illness can affect climbers of different fitness levels, and symptoms may include headache, nausea, dizziness, unusual fatigue or vomiting. Severe symptoms require immediate assessment and may require descent; no summit goal should take priority over a climber's health.",
        "Trust Tours & Safaris encourages climbers to prepare with regular walking and cardiovascular exercise, suitable footwear, practice hikes and properly fitted clothing. Before travel, consult a qualified healthcare professional about your fitness for high altitude, any existing medical conditions, and whether preventive medication is appropriate for you.",
        "During the climb, follow your guide's instructions, walk slowly, drink regularly, eat enough, dress in layers and report symptoms honestly. Our team will make decisions with safety as the priority, including changing the pace, shortening an acclimatisation hike or ending an ascent when necessary.",
        "Mountain conditions can change quickly, and the route may be affected by rain, snow, wind, cold or poor visibility. The six-day schedule is a planned itinerary rather than a guarantee of summit success, and operational changes may be necessary for safety.",
      ],
    },
    {
      heading: "Preparing for your climb with Trust Tours & Safaris",
      paragraphs: [
        "Before travelling, make sure you are physically prepared for several consecutive days of walking, including a very long summit day. Training with regular hikes, uphill walking and endurance exercise can help, but it cannot guarantee a successful summit.",
        "You should also have appropriate boots, layered clothing, waterproof protection, gloves, a warm hat, a headlamp and a daypack. Your guide will explain the final equipment list and the arrangements for carrying personal luggage.",
        "The six-day Marangu Route offers a classic way to experience Kilimanjaro, with changing landscapes, hut accommodation and a dedicated acclimatisation day. Trust Tours & Safaris can help you plan the climb, organise the mountain arrangements and confirm the cost based on your group size and travel dates.",
      ],
    },
    {
      heading: "Why climb with Trust Tours & Safaris?",
      paragraphs: [
        "Trust Tours & Safaris is a Tanzanian tour operator offering local knowledge and organised travel services for visitors exploring Tanzania's mountains, wildlife destinations and islands. We aim to make the booking process clear and straightforward, with written itineraries, transparent inclusions and exclusions, and practical advice before your expedition begins.",
        "When you book with us, you can discuss your preferred travel dates, group size, equipment needs, hotel arrangements and any safari or Zanzibar extension you would like to add. We will help you understand what is included, what you need to prepare yourself, and which arrangements must be confirmed before departure.",
        "Our promise is to plan your expedition responsibly, communicate honestly and help you experience Kilimanjaro with a professional local team. We cannot promise that every climber will reach Uhuru Peak, but we can work to ensure that your climb is carefully organised, your questions are answered and your safety remains central to the decisions made on the mountain.",
      ],
    },
    {
      heading: "Book your 2027–2028 Kilimanjaro climb",
      paragraphs: [
        "Ready to begin your Mount Kilimanjaro adventure? Contact Trust Tours & Safaris with your preferred dates, number of climbers, accommodation requirements and any additional travel plans. We will help you review the itinerary and prepare a written quotation that identifies the services included, excluded expenses, payment terms and relevant conditions.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "Is the six-day Marangu Route better than the five-day version?",
      answer:
        "The six-day itinerary includes an extra acclimatisation day at Horombo Hut, giving your body more time to adapt before climbing higher. It can improve the opportunity to acclimatise, although no route or itinerary can guarantee that you will reach the summit.",
    },
    {
      question: "Is the six-day Marangu Route suitable for beginners?",
      answer:
        "It may suit a well-prepared beginner who understands the physical demands of high altitude, but it is not an easy walk. The additional acclimatisation day makes it preferable to the five-day version for many climbers, although a longer itinerary may offer further acclimatisation benefits.",
    },
    {
      question: "Do I sleep in tents? Where will I sleep?",
      answer:
        "No tents. You sleep in designated mountain huts at Mandara, Horombo and Kibo. The huts generally offer shared dormitory-style sleeping arrangements, so expect basic facilities rather than private hotel rooms. Bring or arrange an appropriate sleeping bag and warm sleeping layers.",
    },
    {
      question: "Is the Marangu Route known as the Coca-Cola Route?",
      answer:
        "Yes. Marangu is commonly called the Coca-Cola Route, a traditional nickname associated with its long-established popularity. It is also distinctive because it uses mountain huts rather than the tented camps used on most other Kilimanjaro routes.",
    },
    {
      question: "Does the price include the summit attempt?",
      answer:
        "The guided trek to Uhuru Peak is the planned objective, subject to your condition and mountain safety. Reaching the summit cannot be guaranteed, and your guide may advise turning back if continuing is unsafe.",
    },
    {
      question: "Are airport transfers and hotel accommodation included?",
      answer:
        "The six-day mountain package covers transfers between your Moshi or Arusha hotel and Marangu Gate. Hotel nights and airport transfers can be added — tell us your arrival and departure dates and we will confirm them, with any extra meals, in your written quotation.",
    },
    {
      question: "Can I climb Kilimanjaro during the rainy season?",
      answer:
        "The huts provide a roof over your head, which can be an advantage in wet weather, but they do not eliminate rain, mud, cold, poor visibility or slippery trails. Conditions vary by season, and your dates should be selected with the weather, personal preferences and operational advice in mind.",
    },
    {
      question: "Does the package guarantee that I will reach Uhuru Peak?",
      answer:
        "No. Summit success depends on many factors, including acclimatisation, individual health, weather and trail conditions. Your guides will support your attempt, but they must prioritise your wellbeing and may recommend turning around if continuing becomes unsafe.",
    },
    {
      question: "What should I bring?",
      answer:
        "Suitable hiking boots, layered clothing, waterproof outerwear, warm gloves, a warm hat, a headlamp with spare batteries, a reusable water system, sun protection, personal medication and a sleeping bag suitable for cold mountain conditions unless your confirmed equipment package provides these items. We provide a detailed packing list before your departure.",
    },
    {
      question: "How can I get an exact price?",
      answer:
        "Tell us your intended climbing dates, number of climbers, arrival airport and whether you need hotel accommodation before and after the trek. We will then confirm the total price and the services included.",
    },
    {
      question: "Can I add a Tanzania safari or Zanzibar holiday?",
      answer:
        "Yes. You can extend your climb with a wildlife safari to Serengeti National Park, Ngorongoro Crater or Tarangire National Park, or with a beach holiday in Zanzibar. These extensions are quoted separately according to your travel dates, accommodation preferences and budget.",
    },
  ],
  bestMonths: BEST_MONTHS,
};
