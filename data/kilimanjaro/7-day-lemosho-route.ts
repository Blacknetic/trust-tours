import type { TripPackage } from "@/data/packages";
import { KILIMANJARO_CAMPING_ADDONS } from "@/data/addons";
import { BEST_MONTHS, CONTACT_BULLETS, IMG, PRICE_NOTE, howPricesWork, withProse } from "./shared";
import { DAYS } from "./prose/7-day-lemosho-route";

export const lemosho7: TripPackage = {
  slug: "7-day-lemosho-route",
  seoTitle: "7-Day Lemosho Route Kilimanjaro Climb · Trust Tours",
  metaDescription:
    "Climb Kilimanjaro on the 7-day Lemosho Route: Shira Plateau, Lava Tower, Barranco Wall. 9-day package with 2 hotel nights in Arusha. $3,250 per person.",
  destinations: ["Kilimanjaro"],
  category: "kilimanjaro",
  effort: 4,
  summitChance: 4,
  difficulty: "Challenging",
  title: "7-Day Kilimanjaro Climb – Lemosho Route",
  shortName: "7-Day Lemosho",
  days: 7,
  hotelNights: 2,
  priceFromUSD: 3250,
  priceNote: PRICE_NOTE,
  groupPricing: {
    tiers: [
      { pax: 1, usd: 3250 },
      { pax: 2, usd: 2750 },
      { pax: 3, usd: 2550 },
      { pax: 4, usd: 2500 },
      { pax: 5, usd: 2450 },
    ],
    note: "The seven-day trekking itinerary plus two hotel nights in Arusha — 9 days in total.",
  },
  addOns: KILIMANJARO_CAMPING_ADDONS,
  tier: ["mid-range"],
  heroImage: "/images/kilimanjaro-plains.jpg",
  gallery: [],
  summary:
    "Experience one of Mount Kilimanjaro's most scenic approaches on the 7-Day Lemosho Route — a spectacular trek that begins on the mountain's western side and crosses the famous Shira Plateau before joining the southern circuit towards the summit.",
  overview: [
    "This carefully organised expedition combines rainforest trails, expansive high-altitude landscapes, volcanic formations, challenging mountain passes and the unforgettable opportunity to stand at Uhuru Peak, 5,895 metres above sea level.",
    "Trust Tours & Safaris provides professional mountain guides, a dedicated mountain crew, camp arrangements, freshly prepared meals on the mountain and logistical support throughout your climb. Our aim is to help you prepare properly, understand the demands of the route and enjoy a well-organised expedition with clear information about the services included in your package.",
    "The Lemosho Route is admired for its western approach, broad views across the Shira Plateau, changing vegetation zones and dramatic views of Kilimanjaro's volcanic landscape. It offers a memorable progression from rainforest to moorland and then to the sparse alpine environment near the summit.",
    "The seven-day itinerary is designed for climbers who have limited time and are prepared for a demanding ascent. However, the shorter schedule requires careful pacing and combines some substantial walking days. An eight-day Lemosho itinerary provides an additional acclimatisation day and is worth considering if you prefer a more gradual ascent.",
  ],
  atAGlance: [
    { label: "Tour duration", value: "9 days in total" },
    { label: "Trekking duration", value: "7 days on Kilimanjaro" },
    { label: "Hotel accommodation", value: "2 nights — one before trekking and one after the descent" },
    { label: "Route", value: "Lemosho Gate – Mti Mkubwa – Shira 1 – Shira 2 – Barranco – Barafu – Uhuru Peak – Mweka Gate" },
    { label: "Summit elevation", value: "5,895 m" },
    { label: "Mountain accommodation", value: "Designated campsites in mountain tents" },
    { label: "Difficulty", value: "Challenging to very challenging" },
    { label: "Departure type", value: "Private climb for your party, subject to confirmation" },
  ],
  highlights: [
    "Quiet western trailhead and the vast Shira Plateau",
    "Climb high, sleep low via the Lava Tower area",
    "The famous Barranco Wall",
    "Two hotel nights in Arusha and airport transfers",
  ],
  pricingDetails: [
    "The proposed rates are in US dollars per person and include the seven-day trekking itinerary plus two hotel nights. They are indicative planning prices; the final amount depends on departure dates, group arrangements, hotel category, park charges and the precise services selected.",
    ...howPricesWork("five or more climbers"),
  ],
  itinerary: withProse(DAYS, [
    { day: 1, image: IMG.airport, meals: "Depending on your package and arrival time", accommodation: "Hotel in Arusha" },
    { day: 2, image: IMG.forestCamp, altitudeStart: 2100, altitudeEnd: 2780, hours: "3–5 hours", meals: "Lunch and dinner", accommodation: "Mti Mkubwa Camp (tents)" },
    { day: 3, image: IMG.shiraCamp, altitudeStart: 2780, altitudeEnd: 3610, hours: "5–7 hours", meals: "Breakfast, lunch and dinner", accommodation: "Shira 1 Camp (tents)" },
    { day: 4, image: IMG.team, altitudeStart: 3610, altitudeEnd: 3850, hours: "3–5 hours", meals: "Breakfast, lunch and dinner", accommodation: "Shira 2 Camp (tents)" },
    { day: 5, image: IMG.barrancoCamp, altitudeStart: 3850, altitudeEnd: 3960, altitudeMax: 4600, hours: "7–9 hours", meals: "Breakfast, lunch and dinner", accommodation: "Barranco Camp (tents)" },
    { day: 6, image: IMG.campKibo, altitudeStart: 3960, altitudeEnd: 4673, hours: "8–10 hours or longer", meals: "Breakfast, lunch and dinner", accommodation: "Barafu Camp (tents)" },
    { day: 7, image: IMG.uhuru, altitudeStart: 4673, altitudeEnd: 3100, altitudeMax: 5895, hours: "12–16 hours or longer", meals: "Breakfast, lunch and dinner", accommodation: "Mweka Camp (tents)" },
    { day: 8, altitudeStart: 3100, altitudeEnd: 1640, hours: "3–5 hours", meals: "Breakfast", accommodation: "Hotel in Arusha" },
    { day: 9, meals: "Breakfast", accommodation: "—" },
  ]),
  included: [
    "Hotel: Two hotel nights in Arusha — one before and one after the mountain trek, based on the agreed room and meal arrangement.",
    "Transfers: Transfers specified in the confirmed itinerary, including the airport transfer when booked and the road transfers required for the Lemosho start and Mweka finish.",
    "Park fees: Kilimanjaro National Park fees and the required camping and conservation charges applicable to the itinerary.",
    "Mountain team: Professional mountain guides and the required supporting mountain crew.",
    "Camping: Mountain camping arrangements, including sleeping tents and the shared dining setup.",
    "Meals: Meals on the mountain as specified in the confirmed package, prepared by the mountain cook.",
    "Drinking water: Provided during the trek according to the operator's arrangements.",
    "Guidance: Route planning, daily briefings, basic equipment checks and monitoring by the mountain guide.",
    "Descent: Planned descent support and park exit procedures.",
  ],
  excluded: [
    "International flights to or from Tanzania.",
    "Tanzania visa fees and any personal travel documentation costs.",
    "Travel insurance, including suitable cover for high-altitude trekking and emergency evacuation.",
    "Personal trekking clothing and equipment, such as boots, waterproof clothing, warm layers, gloves, headlamps and personal medication.",
    "Sleeping bag or trekking pole rental unless explicitly included in the quotation.",
    "Tips for mountain guides, cooks and porters.",
    "Personal snacks, alcoholic beverages, souvenirs, laundry and other personal purchases.",
    "Additional hotel nights, room upgrades and meals not stated in the package.",
    "Medical treatment, rescue or evacuation expenses not expressly covered by the package or the climber's insurance.",
    "Optional safari, Zanzibar extension, extra excursions or other services not stated in the confirmed booking.",
    "Any new government fees, taxes or compulsory charges introduced after the quotation, where applicable under the booking terms.",
  ],
  sections: [
    {
      heading: "Safety, age and preparation",
      paragraphs: [
        "For this expedition, Trust Tours & Safaris accepts participants aged 12–70 years, subject to individual suitability, relevant park requirements and an appropriate assessment of their fitness and health. Climbers should train in advance, be comfortable walking for several hours over uneven terrain and understand that summit day can be exceptionally long.",
        "All participants should disclose relevant medical concerns to an appropriate healthcare professional before travel, obtain suitable high-altitude trekking insurance and follow their guide's instructions. The mountain guide's safety assessment takes priority if altitude symptoms, severe fatigue, weather or other conditions make continuing unsafe.",
      ],
    },
    {
      heading: "Why book with Trust Tours & Safaris?",
      paragraphs: [
        "A Kilimanjaro climb is more than a booking: it requires careful logistics, a dependable mountain crew, realistic advice and support throughout the journey. Trust Tours & Safaris helps you prepare for each stage, explains what your package covers and provides a clear itinerary so you can make informed decisions before travelling.",
        "Our goal is to deliver a well-organised, professional climbing experience with transparent arrangements and honest guidance about the physical challenge of reaching the summit. We want you to arrive prepared, understand the demands of the route and focus on the extraordinary experience of climbing Kilimanjaro.",
      ],
    },
    {
      heading: "Request your 2027–2028 Kilimanjaro quotation",
      paragraphs: [
        "Contact Trust Tours & Safaris with your preferred travel dates, number of climbers, accommodation preferences and any equipment rental requirements. We will confirm the itinerary, current fees, inclusions, exclusions and final price before you book.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "Should I choose the 7-day or 8-day Lemosho?",
      answer:
        "If you have the time, take the 8-day. It adds a night at Karanga Camp, splitting the long Day 6 of this itinerary in two and giving you more time to acclimatise before summit night.",
    },
    {
      question: "Will I definitely reach the summit?",
      answer:
        "No. The guide may stop or modify the ascent because of altitude symptoms, weather, exhaustion or other safety concerns. A safe descent takes priority over reaching the summit.",
    },
  ],
  bestMonths: BEST_MONTHS,
};
