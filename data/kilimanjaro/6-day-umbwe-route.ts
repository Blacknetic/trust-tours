import type { TripPackage } from "@/data/packages";
import { KILIMANJARO_CAMPING_ADDONS } from "@/data/addons";
import { BEST_MONTHS, CONTACT_BULLETS, IMG, PRICE_NOTE, howPricesWork, withProse } from "./shared";
import { DAYS } from "./prose/6-day-umbwe-route";

export const umbwe6: TripPackage = {
  slug: "6-day-umbwe-route",
  seoTitle: "6-Day Umbwe Route Kilimanjaro Climb · Trust Tours",
  metaDescription:
    "Kilimanjaro's steepest, most direct ascent: 6 days on the Umbwe Route for fit, experienced trekkers. Full crew, camping and park fees. $3,250 per person.",
  destinations: ["Kilimanjaro"],
  category: "kilimanjaro",
  effort: 5,
  summitChance: 3,
  difficulty: "Tough",
  title: "6-Day Kilimanjaro Climb – Umbwe Route",
  shortName: "6-Day Umbwe",
  days: 6,
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
      { pax: 7, usd: 2325 },
      { pax: 8, usd: 1990 },
    ],
    note: "A guided six-day Umbwe climb with camping accommodation, mountain meals, park-related charges and organised crew support.",
  },
  addOns: KILIMANJARO_CAMPING_ADDONS,
  tier: ["mid-range"],
  heroImage: "/images/kilimanjaro-summit-snow.jpg",
  gallery: [],
  summary:
    "Discover one of the most demanding and dramatic approaches to the summit of Mount Kilimanjaro on the six-day Umbwe Route — a steep, direct mountain trail for fit trekkers with previous hiking experience.",
  overviewImage: IMG.moorlandRays,
  overview: [
    "Beginning on Kilimanjaro's southern side, this route leads through dense tropical rainforest, follows a narrow mountain ridge, opens onto dramatic alpine landscapes, and eventually joins the Southern Circuit before the summit attempt at Uhuru Peak, Africa's highest point at 5,895 metres (19,341 feet).",
    "The Umbwe Route is known for its steep initial ascent, quieter lower trail and spectacular scenery, making it an appealing choice for experienced adventurers seeking a more demanding alternative to the mountain's gentler approaches. Unlike routes that provide more time to gain elevation gradually, Umbwe reaches high camps relatively quickly, so the six-day itinerary is best suited to well-prepared trekkers with previous high-altitude experience, rather than beginners seeking the easiest route to the summit.",
    "With Trust Tours & Safaris, your expedition is organised around professional mountain guidance, camping accommodation, freshly prepared meals, porter support, route coordination and careful attention to the changing conditions on the mountain. Our goal is to provide clear information before departure, explain what your package covers, and help you understand the physical demands of the climb so you can make an informed decision.",
    "Choose Umbwe for a rugged, challenging and rewarding Kilimanjaro experience — with a professional local team supporting you at every stage of the journey.",
  ],
  atAGlance: [
    { label: "Destination", value: "Mount Kilimanjaro National Park, Tanzania" },
    { label: "Route", value: "Umbwe ascent and Mweka descent" },
    { label: "Duration", value: "6 days on the mountain" },
    { label: "Highest point", value: "Uhuru Peak, 5,895 m" },
    { label: "Starting elevation", value: "Approximately 1,600 m at Umbwe Gate" },
    { label: "Accommodation", value: "Mountain camps in expedition tents" },
    { label: "Difficulty", value: "Very challenging, with steep early days and demanding altitude" },
    { label: "Recommended for", value: "Fit, experienced trekkers who understand the risks of high altitude" },
    { label: "Summit approach", value: "Barafu Camp via Stella Point" },
    { label: "Guiding and support", value: "Professional mountain guides and supporting crew" },
  ],
  highlights: [
    "Steep, quiet ridge trail through the rainforest",
    "Joins the Southern Circuit at the spectacular Barranco Valley",
    "The famous Barranco Wall and a night at Karanga Camp",
    "Summit via Stella Point and descent on the Mweka Route",
  ],
  pricingDetails: [
    "These are indicative planning prices per person in US dollars for a guided six-day Umbwe climb with camping accommodation, mountain meals, park-related charges and organised crew support.",
    ...howPricesWork("eight or more climbers"),
    "Important: Umbwe's six-day itinerary has limited acclimatisation time. We encourage climbers to discuss their experience, fitness, previous altitude exposure and medical suitability before booking. A seven-day Umbwe itinerary or a longer alternative may be a better choice for many trekkers.",
  ],
  itinerary: withProse(DAYS, [
    { day: 1, altitudeStart: 1600, altitudeEnd: 2850, distanceKm: "10–11", hours: "5–7 hours", meals: "Lunch and dinner", accommodation: "Umbwe Cave Camp (tents)" },
    { day: 2, image: IMG.guides, altitudeStart: 2850, altitudeEnd: 3960, distanceKm: "6–7", hours: "4–6 hours", meals: "Breakfast, lunch and dinner", accommodation: "Barranco Camp (tents)" },
    { day: 3, altitudeStart: 3960, altitudeEnd: 4035, distanceKm: "5–7", hours: "4–5 hours", meals: "Breakfast, lunch and dinner", accommodation: "Karanga Camp (tents)" },
    { day: 4, altitudeStart: 4035, altitudeEnd: 4673, distanceKm: "4–6", hours: "3–5 hours", meals: "Breakfast, lunch and dinner", accommodation: "Barafu Camp (tents)" },
    { day: 5, image: IMG.uhuru, altitudeStart: 4673, altitudeEnd: 3100, altitudeMax: 5895, hours: "12–16 hours or longer", meals: "Summit refreshments and meals", accommodation: "Mweka Camp (tents)" },
    { day: 6, altitudeStart: 3100, altitudeEnd: 1640, distanceKm: "8–10", hours: "3–5 hours", meals: "Breakfast", accommodation: "Transfer to your hotel in Moshi or Arusha" },
  ]),
  included: [
    "Kilimanjaro National Park fees: Applicable park entry and conservation charges for the six-day expedition, based on the official tariffs in force for your travel dates.",
    "Camping fees: Applicable designated mountain camping charges for the itinerary.",
    "Mountain camping equipment: Expedition tents and shared campsite equipment needed for the planned nights.",
    "Professional mountain guides: The guide team required for the expedition, with appropriate qualifications and local knowledge.",
    "Porters and support crew: Porter services and the required supporting mountain crew for transporting agreed expedition supplies and running the campsite.",
    "Mountain meals: Breakfast, lunch and dinner on the mountain, with the exact meal arrangements for summit day confirmed in writing.",
    "Drinking water: Water treated or prepared according to the operator's arrangements.",
    "Transfers to the trailhead and from the exit gate: Road transport between the agreed Moshi or Arusha pickup point, Umbwe Gate and Mweka Gate.",
    "Expedition briefing and coordination: Pre-climb briefing, route coordination, registration arrangements and logistical planning for the scheduled climb.",
    "Basic safety procedures: Guide monitoring, communication arrangements and the applicable park rescue procedures included in the confirmed package.",
    "Certificate arrangements: Assistance with the applicable park certificate procedures for climbers who qualify.",
    "Applicable taxes and mandatory charges: Listed or clearly identified in the final written offer.",
  ],
  excluded: [
    "Hotel accommodation: Hotel nights in Moshi or Arusha before or after the climb (can be added).",
    "Airport transfers not specified: Transfers to or from Kilimanjaro International Airport or another airport.",
    "International flights: Airfare to and from Tanzania, including connecting flights.",
    "Visa and entry documents: Tanzanian visa charges, passport expenses and other required travel documentation.",
    "Travel and medical insurance: Insurance suitable for high-altitude trekking up to 6,000 metres, including emergency medical care and evacuation where covered by the policy.",
    "Personal trekking equipment: Hiking boots, waterproof clothing, insulated jackets, thermal base layers, gloves, hats, headlamps, trekking poles, sleeping bags and other personal equipment unless provided or rented under a confirmed arrangement.",
    "Tips and gratuities: Tips for guides, assistant guides, porters, cooks and other supporting mountain crew members.",
    "Personal purchases: Snacks, soft drinks, alcoholic beverages, souvenirs, telephone charges, laundry and other personal expenses.",
    "Personal medication and medical supplies: Prescription medication, personal first-aid items and medical consultations before or after the climb.",
    "Additional accommodation or meals: Any hotel meals, extra nights or services outside the confirmed mountain package.",
    "Emergency expenses outside the package: Hospital bills, specialist treatment, helicopter rescue or evacuation expenses not expressly covered by the operator or insurance policy.",
    "Changes to the itinerary: Additional transport, accommodation or logistical expenses resulting from itinerary changes, extra nights or arrangements outside the original quotation.",
    "Optional activities and extensions: Safaris, Zanzibar holidays, cultural excursions or any other activity not listed in the confirmed package.",
  ],
  sections: [
    {
      heading: "Please confirm before booking",
      paragraphs: [
        "Sleeping bags, mattresses, private portable toilets, airport transfers, hotel accommodation, oxygen equipment, and additional medical or evacuation services should not be assumed to be included unless they are expressly listed in your quotation.",
      ],
    },
    {
      heading: "Safety and acclimatisation: important information for Umbwe climbers",
      paragraphs: [
        "Umbwe is a demanding route because it gains altitude quickly during the first two days and provides limited time for acclimatisation on a six-day schedule. A strong level of fitness is helpful, but fitness alone does not protect against altitude illness, which can affect experienced athletes and trekkers as well as beginners.",
        "Before booking, we recommend that climbers discuss their previous trekking experience, altitude exposure, medical history and physical preparation with an appropriate healthcare professional. Training should include regular cardiovascular exercise, long walks on varied terrain, practice with hiking boots and a loaded daypack, and preparation for cold, wet and windy conditions.",
        "During the expedition, walk at the pace recommended by your guide, eat regularly, drink appropriate amounts of fluid, protect yourself from the cold, and report symptoms such as headache, nausea, dizziness, unusual fatigue or vomiting promptly. Severe or worsening symptoms require immediate assessment and may mean stopping the ascent and descending; no summit objective should take priority over safety.",
        "Trust Tours & Safaris places safety and responsible decision-making at the centre of mountain operations. The guide team may modify the pace, change the planned activity, or end an ascent when conditions or a climber's health make continuing unsafe. The summit cannot be guaranteed, and any evacuation or medical costs beyond the services explicitly included in your package remain subject to the relevant park arrangements, insurance policy and written booking terms.",
        "Age policy: Trust Tours & Safaris accepts climbers aged 12–70, subject to medical suitability, assessment and applicable park requirements. Confirm age eligibility with us before booking, particularly for younger climbers or travellers over 70.",
      ],
    },
    {
      heading: "Why choose Trust Tours & Safaris?",
      paragraphs: [
        "Trust Tours & Safaris is a local Tanzanian tour operator helping visitors organise mountain climbs, wildlife safaris and holidays across Tanzania. We understand that choosing a Kilimanjaro operator is an important decision, and we aim to make the process clear through detailed itineraries, transparent pricing, realistic advice and a written explanation of what is included in your trip.",
        "Our team can help you discuss the most suitable route, your preferred travel dates, group size, equipment requirements, hotel arrangements and any additional safari or Zanzibar holiday you would like to include. We encourage clients to ask questions before booking so they can understand the physical demands of the climb, the accommodation standards, the responsibilities of the mountain crew and the limits of the services provided.",
        "Our commitment is to organise your expedition responsibly, communicate honestly and support your journey with a professional local team. We cannot promise that every climber will reach Uhuru Peak, but we can help you prepare carefully, understand the route and make informed decisions throughout your adventure.",
      ],
    },
    {
      heading: "Book your 2027–2028 Umbwe Route climb",
      paragraphs: [
        "Are you ready for one of Kilimanjaro's most challenging approaches? Contact Trust Tours & Safaris with your preferred dates, number of climbers, previous hiking experience and any additional travel plans. We will help you review the itinerary and prepare a written quotation that clearly identifies the price, included services, excluded costs, payment terms and booking conditions.",
        "All prices shown are indicative until confirmed in writing. Official park tariffs, taxes, exchange rates, crew costs and operating requirements may change before travel.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "Is the six-day Umbwe Route suitable for beginners?",
      answer:
        "The six-day Umbwe Route is generally not recommended for beginners because of its steep initial ascent and limited acclimatisation time. It is better suited to fit trekkers with previous hiking experience and a realistic understanding of the demands of high altitude. Beginners may wish to consider a longer route with more time for acclimatisation.",
    },
    {
      question: "How difficult is the Umbwe Route?",
      answer:
        "Umbwe is considered one of Kilimanjaro's more challenging routes because the initial trail is steep, the altitude increases quickly, and the summit day is long. The Barranco Wall also involves scrambling on rocky terrain, although the standard trail is not normally considered technical mountaineering. Difficulty varies with weather, fitness, altitude response and trail conditions.",
    },
    {
      question: "Where will I sleep during the six-day climb?",
      answer:
        "You will sleep in expedition tents at designated mountain camps, normally Umbwe Cave Camp, Barranco Camp, Karanga Camp, Barafu Camp and Mweka Camp. This route uses camping accommodation rather than the mountain huts associated with the Marangu Route.",
    },
    {
      question: "Will I reach Uhuru Peak?",
      answer:
        "The goal is to reach Uhuru Peak at 5,895 metres, but summit success cannot be guaranteed. Weather, altitude-related illness, fatigue and other conditions can affect the outcome, and your guide may recommend turning back if continuing becomes unsafe.",
    },
    {
      question: "What should I pack?",
      answer:
        "Suitable hiking boots, moisture-wicking base layers, warm insulating layers, waterproof outerwear, warm gloves, a hat, a headlamp with spare batteries, a reusable water system, sun protection, trekking poles, personal medication and a sleeping bag appropriate for cold mountain conditions. Your final packing list should reflect the equipment actually provided in your confirmed package.",
    },
    {
      question: "Can I add a Tanzania safari after climbing Kilimanjaro?",
      answer:
        "Yes. You can ask Trust Tours & Safaris to organise a separate extension to Serengeti National Park, Ngorongoro Crater, Tarangire National Park or Zanzibar. The cost will depend on your dates, accommodation preferences, group size and the activities you choose.",
    },
  ],
  bestMonths: BEST_MONTHS,
};
