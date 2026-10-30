import type { TripPackage } from "@/data/packages";
import { KILIMANJARO_CAMPING_ADDONS } from "@/data/addons";
import { CONTACT_BULLETS, IMG, PRICE_NOTE, howPricesWork, withProse } from "./shared";
import { DAYS } from "./prose/northern-circuit-crater-camp";

export const craterCamp: TripPackage = {
  slug: "northern-circuit-crater-camp",
  seoTitle: "Northern Circuit with Crater Camp · Kilimanjaro 2027–28",
  metaDescription:
    "An extended Kilimanjaro expedition: 11 trekking days on the Northern Circuit with an acclimatisation day and a night at Crater Camp (5,790 m). $6,250 pp.",
  destinations: ["Kilimanjaro"],
  category: "kilimanjaro",
  effort: 5,
  summitChance: 5,
  difficulty: "Tough",
  title: "Kilimanjaro Northern Circuit with Crater Camp",
  shortName: "11-Day Northern Circuit + Crater Camp",
  days: 11,
  hotelNights: 2,
  priceFromUSD: 6250,
  priceNote: PRICE_NOTE,
  groupPricing: {
    tiers: [
      { pax: 1, usd: 6250 },
      { pax: 2, usd: 4850 },
      { pax: 6, usd: 3590 },
    ],
    note: "11 trekking days + 2 hotel nights = 13 calendar days. The Crater Camp night depends on park approval, weather and your guide's safety assessment.",
  },
  addOns: KILIMANJARO_CAMPING_ADDONS,
  tier: ["comfort"],
  heroImage: "/images/about-crater-rim.jpg",
  gallery: [],
  summary:
    "An extraordinary high-altitude expedition: discover Mount Kilimanjaro through one of its most spectacular and remote trekking routes, with the option of a rare night at Crater Camp, about 5,790 metres above sea level.",
  overview: [
    "This extended expedition follows the mountain's western slopes, crosses the breathtaking Shira Plateau, explores the quieter northern side of the mountain and leads toward the summit of Uhuru Peak at 5,895 metres. For experienced, well-prepared trekkers seeking an exceptional adventure, the itinerary can also include an overnight at Crater Camp, approximately 5,790 metres above sea level, subject to permits, weather, medical assessment and the guide's safety decision.",
    "The Northern Circuit is renowned for its long approach, panoramic scenery and valuable opportunities for gradual acclimatization. Rather than rushing toward the summit, the expedition allows time to experience the mountain's changing landscapes, from rainforest and moorland to the high alpine desert and the dramatic volcanic terrain surrounding the summit.",
    "At Trust Tours & Safaris, we believe that a successful Kilimanjaro expedition is about much more than reaching the highest point. It is about thoughtful planning, professional mountain support, realistic expectations, suitable equipment and responsible decisions throughout the journey. Our goal is to help every climber experience Kilimanjaro with confidence, respect for the mountain and a clear understanding of the challenges involved.",
    "Important duration information: this Crater Camp version is planned as 11 trekking days plus two hotel nights, making 13 calendar days in total. A conventional 10-day Northern Circuit trek without the Crater Camp overnight can be offered separately. We do not recommend compressing the additional acclimatization, summit, Crater Camp and descent stages into an itinerary that does not allow enough time for a safe descent.",
    "The extended Northern Circuit combines the scenic appeal of a full mountain traverse with additional time for acclimatization before the summit stages. The northern slopes are often quieter than some of Kilimanjaro's more frequently used trails, allowing trekkers to enjoy expansive landscapes and a stronger sense of wilderness.",
    "The Crater Camp overnight adds a rare experience: spending a night close to the summit zone, surrounded by the extraordinary volcanic landscape and, when skies are clear, the stars above Kilimanjaro's glaciers. However, sleeping at approximately 5,790 metres carries serious altitude-related risks. The decision to include Crater Camp must be based on the approved itinerary, climbers' condition, weather and the professional judgement of the mountain team.",
  ],
  atAGlance: [
    { label: "Destination", value: "Mount Kilimanjaro, Tanzania" },
    { label: "Route", value: "Northern Circuit, with a Crater Camp overnight planned subject to approval and conditions" },
    { label: "Trekking duration", value: "11 days" },
    { label: "Total trip duration", value: "13 calendar days" },
    { label: "Accommodation", value: "Two hotel nights plus mountain camping" },
    { label: "Summit elevation", value: "Uhuru Peak, 5,895 m" },
    { label: "Crater Camp elevation", value: "Approximately 5,790 m" },
    { label: "Start / descent", value: "Londorossi Gate (west) / Mweka Gate, subject to the approved route plan" },
    { label: "Difficulty", value: "Very challenging, with an exceptionally high-altitude overnight" },
    { label: "Recommended for", value: "Fit, well-prepared trekkers who understand the demands and risks of sleeping at extreme altitude" },
    { label: "Age policy", value: "12–70, subject to suitability, park requirements and any required medical documentation" },
  ],
  highlights: [
    "Cross the scenic Shira Plateau, with wide views of Kilimanjaro's volcanic landscape.",
    "Follow the Northern Circuit through remote high-altitude terrain.",
    "Spend additional time acclimatizing before the summit stages.",
    "Attempt Uhuru Peak, Africa's highest point, at 5,895 metres.",
    "Experience the exceptional setting of Crater Camp if conditions and safety assessments permit.",
    "Enjoy mountain camping, freshly prepared meals and the support of an experienced trekking crew.",
  ],
  pricingDetails: [
    "These are proposed planning rates for the extended Northern Circuit expedition with the Crater Camp option. They are per-person prices, not total group prices. The final quotation confirms the authorized route, Crater Camp arrangements, current park fees, accommodation, staffing, meals, transport and the specific services included.",
    ...howPricesWork("six or more climbers"),
  ],
  itinerary: withProse(DAYS, [
    { day: 1, image: IMG.airport, meals: "Hotel breakfast if specified", accommodation: "Hotel in Arusha" },
    { day: 2, altitudeStart: 2100, altitudeEnd: 2780, hours: "3–5 hours", meals: "Lunch and dinner", accommodation: "Mti Mkubwa Camp (tents)" },
    { day: 3, altitudeStart: 2780, altitudeEnd: 3610, hours: "5–7 hours", meals: "Breakfast, lunch and dinner", accommodation: "Shira 1 Camp (tents)" },
    { day: 4, image: IMG.team, altitudeStart: 3610, altitudeEnd: 3850, hours: "3–5 hours", meals: "Breakfast, lunch and dinner", accommodation: "Shira 2 Camp (tents)" },
    { day: 5, altitudeStart: 3850, altitudeEnd: 4200, hours: "5–7 hours", meals: "Breakfast, lunch and dinner", accommodation: "Moir Hut area (tents)" },
    { day: 6, altitudeStart: 4200, altitudeEnd: 4200, hours: "Rest + optional guided walk", meals: "Breakfast, lunch and dinner", accommodation: "Moir Hut area (tents)" },
    { day: 7, altitudeStart: 4200, altitudeEnd: 4020, hours: "5–7 hours", meals: "Breakfast, lunch and dinner", accommodation: "Buffalo Camp (tents)" },
    { day: 8, altitudeStart: 4020, altitudeEnd: 3870, hours: "4–6 hours", meals: "Breakfast, lunch and dinner", accommodation: "Third Cave Camp (tents)" },
    { day: 9, altitudeStart: 3870, altitudeEnd: 4800, hours: "4–6 hours", meals: "Breakfast, lunch and an early dinner", accommodation: "School Hut or designated high camp (tents)" },
    { day: 10, image: IMG.uhuru, altitudeStart: 4800, altitudeEnd: 5790, altitudeMax: 5895, hours: "Highly variable — many hours at extreme altitude", meals: "Breakfast, lunch and dinner", accommodation: "Crater Camp (tents), only if approved" },
    { day: 11, altitudeStart: 5790, altitudeEnd: 3820, hours: "Highly variable", meals: "Breakfast, lunch and dinner", accommodation: "Millennium Camp or designated lower camp (tents)" },
    { day: 12, altitudeStart: 3820, altitudeEnd: 1640, hours: "Depends on the descent camp", meals: "Breakfast", accommodation: "Hotel in Arusha" },
    { day: 13, meals: "Breakfast", accommodation: "—" },
  ]),
  included: [
    "Two hotel nights: one before the climb and one after the descent.",
    "Transfers specifically stated in the final quotation.",
    "Applicable Kilimanjaro National Park entry, camping and other required fees itemized in the booking.",
    "Professional mountain guides and supporting crew, with staffing appropriate to the group size.",
    "Mountain camping accommodation and standard camping equipment.",
    "Planned breakfasts, lunches and dinners on the mountain, plus drinking water as specified.",
    "Pre-climb briefing, equipment check and route guidance.",
    "The approved acclimatization and summit itinerary.",
    "Crater Camp overnight only when authorized, available, operationally confirmed and considered safe by the responsible guide team.",
  ],
  excluded: [
    "International flights and any domestic flights not listed.",
    "Tanzania visa fees and personal travel expenses.",
    "Travel insurance covering high-altitude trekking, medical treatment and emergency evacuation.",
    "Personal trekking clothing and equipment unless specifically supplied or rented.",
    "Crew gratuities and personal purchases.",
    "Additional hotel nights, room upgrades, laundry and drinks not included in the package.",
    "Optional safaris, Zanzibar extensions and other activities not listed in the quotation.",
    "Unspecified medical, rescue or evacuation costs.",
    "Any service or special arrangement that is not explicitly confirmed in writing.",
  ],
  sections: [
    {
      heading: "Safety and acclimatization",
      paragraphs: [
        "Crater Camp is at an extreme altitude where the risk of altitude-related illness is serious. Additional days can provide valuable acclimatization opportunities, but they cannot eliminate the risk or guarantee a successful summit. The itinerary is finalized with the required authorizations and a clear descent and emergency-response plan.",
        "Trust Tours & Safaris accepts participants aged 12–70 subject to individual suitability, applicable park regulations and any required documentation. Every climber should prepare physically, arrange suitable insurance, and discuss relevant health concerns with a qualified healthcare professional before the expedition. Our mountain team's first responsibility is safety, and the guide may change the itinerary, cancel the Crater Camp overnight or initiate descent if conditions require it.",
      ],
    },
    {
      heading: "Plan your Kilimanjaro expedition with Trust Tours & Safaris",
      paragraphs: [
        "If you are looking for a longer, more immersive Kilimanjaro experience, the Northern Circuit offers a remarkable journey through the mountain's diverse landscapes, while the Crater Camp option adds a rare high-altitude overnight for suitably prepared climbers when conditions permit.",
        "Contact Trust Tours & Safaris with your preferred travel dates, group size and trekking experience so we can confirm the suitable route, the actual package price and the services available for your expedition.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "Is the Crater Camp night guaranteed?",
      answer:
        "No. Sleeping at about 5,790 m depends on park approval, the weather and your guide's assessment on the day. If it is not safe, the team follows an alternative descent plan.",
    },
    {
      question: "Who is this expedition for?",
      answer:
        "Fit, well-prepared trekkers who understand the additional demands and risks of sleeping at extreme altitude. If this is your first high mountain, the 9-day Northern Circuit is a better fit.",
    },
  ],
  bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
};
