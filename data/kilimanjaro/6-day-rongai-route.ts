import type { TripPackage } from "@/data/packages";
import { KILIMANJARO_CAMPING_ADDONS } from "@/data/addons";
import { BEST_MONTHS, CONTACT_BULLETS, IMG, PRICE_NOTE, howPricesWork, withProse } from "./shared";
import { DAYS } from "./prose/6-day-rongai-route";

export const rongai6: TripPackage = {
  slug: "6-day-rongai-route",
  seoTitle: "6-Day Rongai Route Kilimanjaro Climb · Trust Tours",
  metaDescription:
    "Climb Kilimanjaro from the quieter, drier north on the 6-day Rongai Route: 8-day package with 2 hotel nights and airport transfers. $3,250 per person.",
  destinations: ["Kilimanjaro"],
  category: "kilimanjaro",
  effort: 3,
  summitChance: 4,
  difficulty: "Moderate",
  title: "6-Day Kilimanjaro Climb – Rongai Route",
  shortName: "6-Day Rongai",
  days: 6,
  hotelNights: 2,
  priceFromUSD: 3250,
  priceNote: PRICE_NOTE,
  groupPricing: {
    tiers: [
      { pax: 1, usd: 3250 },
      { pax: 2, usd: 2750 },
      { pax: 3, usd: 2550 },
      { pax: 4, usd: 2450 },
      { pax: 5, usd: 2400 },
      { pax: 6, usd: 2350 },
      { pax: 7, usd: 2300 },
    ],
    note: "Package duration: 6 days trekking + 2 hotel nights = 8 calendar days.",
  },
  addOns: KILIMANJARO_CAMPING_ADDONS,
  tier: ["mid-range"],
  heroImage: "/images/kilimanjaro-camp.jpg",
  gallery: [],
  summary:
    "Discover Kilimanjaro's quieter northern slopes with Trust Tours & Safaris. Six days on the mountain, two hotel nights and an unforgettable journey to the Roof of Africa.",
  overview: [
    "The Rongai Route approaches Mount Kilimanjaro from the north, near the Kenyan border, offering a different experience from the busier southern routes. The trail begins in the countryside before passing through montane forest, open moorland and spectacular high-altitude landscapes beneath the rugged peaks of Mawenzi and Kibo.",
    "Rongai is particularly attractive to climbers seeking a quieter trail, wide views across the northern plains and a route that is often drier than Kilimanjaro's southern slopes. It can be a good option during wetter periods, although weather conditions vary and rain is still possible.",
    "At Trust Tours & Safaris, we organise your climb with professional mountain guides, a support crew, camping arrangements and meals according to your confirmed package. We provide a clear itinerary, practical preparation guidance and a written breakdown of the costs so you know what to expect before booking.",
    "Important advice: the six-day Rongai Route is a relatively compressed itinerary with limited time for acclimatisation. It is best considered by suitably prepared, physically fit trekkers who understand the demands of high altitude. For many first-time climbers, we recommend comparing it with the seven-day Rongai Route, which allows more time on the mountain.",
  ],
  atAGlance: [
    { label: "Package", value: "6 days trekking + 2 hotel nights = 8 calendar days" },
    { label: "Highest point", value: "Uhuru Peak, 5,895 m" },
    { label: "Start / finish", value: "Rongai trailhead near Nale Moru / Marangu Gate" },
    { label: "Mountain nights", value: "Simba Camp, Kikelewa Camp, Mawenzi Tarn Camp, Kibo Camp, Horombo Hut" },
    { label: "Hotel", value: "One night in Moshi before and one after the climb" },
    { label: "Age policy", value: "12–70 years, subject to fitness and medical suitability" },
  ],
  highlights: [
    "A quieter northern approach, often drier than the southern slopes",
    "Wide views across the northern plains towards Kenya",
    "Camp at Mawenzi Tarn beneath Mawenzi's jagged peaks",
    "Summit via Gilman's Point, descend via Horombo Hut and Marangu Gate",
    "Two hotel nights and airport transfers",
  ],
  pricingDetails: [
    "The following are proposed indicative planning prices for Trust Tours & Safaris for 2027–2028.",
    ...howPricesWork("seven or more climbers"),
  ],
  itinerary: withProse(DAYS, [
    { day: 1, image: IMG.airport, meals: "According to the confirmed hotel meal plan", accommodation: "Hotel in Moshi" },
    { day: 2, image: IMG.trailhead, altitudeStart: 1950, altitudeEnd: 2650, distanceKm: "7–8", hours: "3–5 hours", meals: "Lunch and dinner", accommodation: "Simba Camp (tents)" },
    { day: 3, image: IMG.mawenziCamp, altitudeStart: 2650, altitudeEnd: 3600, distanceKm: "9–12", hours: "6–8 hours", meals: "Breakfast, lunch and dinner", accommodation: "Kikelewa Camp (tents)" },
    { day: 4, image: IMG.highCamp, altitudeStart: 3600, altitudeEnd: 4330, distanceKm: "5–7", hours: "3–5 hours", meals: "Breakfast, lunch and dinner", accommodation: "Mawenzi Tarn Camp (tents)" },
    { day: 5, image: IMG.hutsClouds, altitudeStart: 4330, altitudeEnd: 4720, distanceKm: "8–10", hours: "4–6 hours", meals: "Breakfast, lunch and an early dinner", accommodation: "Kibo Camp (tents)" },
    { day: 6, image: IMG.uhuru, altitudeStart: 4720, altitudeEnd: 3720, altitudeMax: 5895, hours: "11–16 hours or more", meals: "Summit-day meals and drinks", accommodation: "Horombo Hut" },
    { day: 7, altitudeStart: 3720, altitudeEnd: 1860, distanceKm: 18, hours: "5–7 hours", meals: "Breakfast and lunch", accommodation: "Hotel in Moshi" },
    { day: 8, meals: "Breakfast", accommodation: "—" },
  ]),
  included: [
    "Park fees: Applicable Kilimanjaro National Park entry and conservation fees.",
    "Camping fees: Required camping fees and overnight charges for the confirmed route.",
    "Mountain team: Professional mountain guides and the required support crew.",
    "Porters: Porter services for permitted group equipment and supplies, within applicable park weight limits.",
    "Mountain cook: Meal preparation throughout the climb.",
    "Camping equipment: Mountain camping equipment and dining arrangements specified in the quotation.",
    "Meals: Meals during the climb, according to the daily itinerary.",
    "Drinking water: Drinking-water arrangements as stated in the final package.",
    "Rescue: Applicable park rescue arrangements and mandatory charges, as confirmed in the quotation.",
    "Summit certificate: Arranged according to park procedures and the climber's achievement.",
    "Hotel: One hotel night before the climb and one hotel night after the climb.",
    "Transfers: From the agreed pickup point to the Rongai trailhead, and from Marangu Gate to the agreed hotel or drop-off point.",
    "Airport transfers.",
    "Preparation: Pre-climb briefing and equipment guidance.",
    "Applicable taxes.",
  ],
  excluded: [
    "International flights and visa fees.",
    "Additional hotel nights and room upgrades.",
    "Personal trekking equipment, including hiking boots, waterproof clothing, warm layers, gloves, headlamp, sleeping bag, trekking poles and daypack.",
    "Travel insurance that covers high-altitude trekking, medical treatment and emergency evacuation.",
    "Tips for guides, porters, cooks and other support crew — about $350 per person for the whole climb.",
    "Personal snacks, soft drinks, alcohol, laundry, telephone charges and other personal expenses.",
    "Medical expenses outside the agreed package and applicable insurance.",
    "Optional private toilet hire — $200 for the whole trip (tick it under Add-ons).",
    "Additional meals outside the stated meal plan.",
    "Safari extensions, Zanzibar holidays and other activities beyond the eight-day package.",
  ],
  sections: [
    {
      heading: "What does the eight-day package mean?",
      bullets: [
        "Day 1: Arrival in Tanzania and hotel check-in.",
        "Days 2–7: Six days trekking on the Rongai Route.",
        "Night after the trek: Hotel accommodation following the descent, included within the two hotel nights.",
        "Day 8: Departure from Tanzania.",
      ],
      paragraphs: [
        "This structure includes one hotel night before the climb and one after the climb. The six-day mountain itinerary itself includes five overnight stops: Simba Camp, Kikelewa Camp, Mawenzi Tarn Camp, Kibo Camp and Horombo Hut.",
      ],
    },
    {
      heading: "Is the six-day Rongai Route right for you?",
      paragraphs: [
        "The Rongai Route offers a quieter northern approach and a distinctive landscape, but the six-day itinerary is compressed. The ascent from Kikelewa to Mawenzi Tarn is followed by a high-altitude crossing to Kibo, then a summit attempt and long descent to Horombo.",
        "Although the northern approach is often drier than the southern slopes, weather conditions remain unpredictable. The six-day itinerary also provides less time for acclimatisation than the seven-day version.",
        "For many first-time climbers, we recommend considering the seven-day Rongai Route, which adds time on the mountain and allows a more gradual schedule. A longer itinerary cannot eliminate altitude sickness, but additional acclimatisation time can improve the opportunity to adjust to altitude.",
        "Our team will ask about your travel dates, hiking experience, fitness and preferred comfort level before recommending a suitable route. We want you to choose a climb that is realistic for your abilities, not simply the shortest option available.",
      ],
    },
    {
      heading: "Safety first: age and preparation",
      paragraphs: [
        "To maintain our stated safety standards, Trust Tours & Safaris accepts mountain expedition participants aged 12–70 years, subject to individual fitness, medical suitability, applicable park regulations and any additional requirements for the specific trip.",
        "Kilimanjaro is a high-altitude mountain, and even very fit people can develop altitude-related illness. No responsible operator can guarantee that every climber will reach Uhuru Peak.",
        "Before travelling, prepare with regular walking, uphill training and longer hikes where possible. Bring suitable clothing and equipment, follow your guide's pacing advice, and report any symptoms promptly. If you have medical concerns, seek appropriate medical advice before booking.",
        "Our priority is to help you prepare responsibly, travel with realistic expectations and receive professional support throughout your expedition.",
      ],
    },
    {
      heading: "Why book with Trust Tours & Safaris?",
      paragraphs: [
        "Choosing a mountain operator is about more than finding a low price. You need clear communication, a realistic itinerary, properly organised camping and meals, experienced guides and a team that takes your wellbeing seriously.",
        "Trust Tours & Safaris aims to make the booking process straightforward. We explain what your package covers, provide a written quotation, help you prepare your equipment and discuss the challenges of each stage before you commit.",
        "Whether you are climbing alone, travelling as a couple or organising a group expedition, we can discuss the arrangements that best suit your dates, experience and budget.",
        "Six days on the mountain. Two hotel nights. One extraordinary challenge.",
      ],
      note: "We encourage every climber to review the inclusions and exclusions before paying a deposit. This makes it easier to compare operators fairly and understand the full cost of the climb.",
    },
    {
      heading: "Request your 2027–2028 Rongai Route quotation",
      paragraphs: [
        "Send us your preferred travel dates, number of climbers, country of residence and accommodation preferences. We will prepare a written quotation confirming the price, hotel arrangements, transfers, inclusions, exclusions and payment terms.",
        "Start planning your Kilimanjaro adventure with a local team that values clear information, careful preparation and service you can trust.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "Is the 6-day Rongai right for me?",
      answer:
        "It is a compressed itinerary with limited acclimatisation time, best for fit, well-prepared trekkers. First-timers should consider a 7-day climb.",
    },
    {
      question: "Is Rongai drier than the other routes?",
      answer:
        "The northern side is often drier than the southern slopes, which makes Rongai a good option in wetter months — but rain is still possible, so pack waterproofs.",
    },
  ],
  bestMonths: BEST_MONTHS,
};
