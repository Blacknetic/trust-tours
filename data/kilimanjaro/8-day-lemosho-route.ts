import type { TripPackage } from "@/data/packages";
import { KILIMANJARO_CAMPING_ADDONS } from "@/data/addons";
import { BEST_MONTHS, CONTACT_BULLETS, IMG, PRICE_NOTE, howPricesWork, withProse } from "./shared";
import { DAYS } from "./prose/8-day-lemosho-route";

export const lemosho8: TripPackage = {
  slug: "8-day-lemosho-route",
  seoTitle: "8-Day Lemosho Route Kilimanjaro Climb · Trust Tours",
  metaDescription:
    "Climb Kilimanjaro on the 8-day Lemosho Route: remote western start, Shira Plateau, Karanga night. 10-day package with 2 hotel nights. $3,850 per person.",
  destinations: ["Kilimanjaro"],
  category: "kilimanjaro",
  effort: 4,
  summitChance: 4,
  difficulty: "Challenging",
  title: "8-Day Kilimanjaro Climb – Lemosho Route",
  shortName: "8-Day Lemosho",
  days: 8,
  hotelNights: 2,
  priceFromUSD: 3850,
  priceNote: PRICE_NOTE,
  groupPricing: {
    tiers: [
      { pax: 1, usd: 3850 },
      { pax: 2, usd: 3150 },
      { pax: 4, usd: 2650 },
      { pax: 6, usd: 2550 },
    ],
    note: "The eight-day Lemosho trek plus two hotel nights, making a 10-day tour in total.",
  },
  addOns: KILIMANJARO_CAMPING_ADDONS,
  tier: ["mid-range"],
  heroImage: "/images/lemosho-route-hero.jpg",
  gallery: [],
  reviewSnippets: [
    { author: "Robin Van Rompaey", text: "We hiked to the top of Kilimanjaro on the Lemosho route, and were so happy about how perfectly everything was arranged. 10/10 would recommend.", source: "Google" },
    { author: "Richard Lee", text: "Went on the 8-day Lemosho trek. Excellent team of porters, and the camp crew took care of us so well from dawn till dusk — the small details make a huge difference.", source: "Google" },
  ],
  summary:
    "Discover the beauty of Africa's highest mountain on the 8-Day Lemosho Route, one of Kilimanjaro's most scenic approaches — known for its remote western trailhead, the breathtaking Shira Plateau and dramatic views of Kibo Peak.",
  overview: [
    "This expedition takes you from the lush montane rainforest through heathland and moorland into the rugged alpine desert before the final ascent to Uhuru Peak, at 5,895 metres above sea level.",
    "Trust Tours & Safaris coordinates your mountain transfers, professional guiding, supporting crew, camping arrangements and meals during the trek. From your arrival in Tanzania to your return to Arusha after the climb, our aim is to provide clear arrangements, realistic advice and dependable support so you can prepare confidently for this demanding adventure.",
    "The Lemosho Route begins on Kilimanjaro's western side, where the quieter forest approach leads to the open Shira Plateau and expansive mountain views. Its changing landscapes, gradual progression through different ecological zones and opportunity to spend additional time on the mountain make it a popular choice for both private climbs and organised groups.",
    "The eight-day version includes a separate overnight at Karanga Camp before continuing to Barafu Camp, avoiding the need to combine the Barranco Wall, Karanga Valley and the ascent to Barafu into one extremely long day. Although the extra day provides more time for acclimatisation than the shorter version, altitude sickness remains possible and reaching the summit cannot be guaranteed.",
  ],
  atAGlance: [
    { label: "Tour duration", value: "10 days in total" },
    { label: "Trekking duration", value: "8 days on Kilimanjaro" },
    { label: "Hotel accommodation", value: "2 nights in Arusha — one before and one after the climb" },
    { label: "Mountain accommodation", value: "Designated campsites in mountain tents" },
    { label: "Route", value: "Lemosho Gate – Mti Mkubwa – Shira 1 – Shira 2 – Barranco – Karanga – Barafu – Uhuru Peak – Mweka Camp – Mweka Gate" },
    { label: "Highest point", value: "Uhuru Peak, 5,895 m" },
    { label: "Difficulty", value: "Challenging to very challenging" },
    { label: "Age policy", value: "12–80 years, subject to suitability, safety assessment and park requirements" },
  ],
  highlights: [
    "Remote western start through quiet montane rainforest",
    "Two nights crossing the spectacular Shira Plateau",
    "A separate night at Karanga Camp — a gentler build-up to summit night",
    "Climb high, sleep low via the Lava Tower area",
    "Two hotel nights in Arusha and airport transfers",
  ],
  pricingDetails: [
    "The proposed rates are in US dollars per person for the eight-day Lemosho trek plus two hotel nights, making a 10-day tour in total.",
    ...howPricesWork("six or more climbers"),
  ],
  itinerary: withProse(DAYS, [
    { day: 1, image: IMG.airport, meals: "According to your hotel and package arrangement", accommodation: "Hotel in Arusha" },
    { day: 2, altitudeStart: 2100, altitudeEnd: 2780, hours: "3–5 hours", meals: "Lunch and dinner", accommodation: "Mti Mkubwa Camp (tents)" },
    { day: 3, altitudeStart: 2780, altitudeEnd: 3610, hours: "5–7 hours", meals: "Breakfast, lunch and dinner", accommodation: "Shira 1 Camp (tents)" },
    { day: 4, image: IMG.team, altitudeStart: 3610, altitudeEnd: 3850, hours: "3–5 hours", meals: "Breakfast, lunch and dinner", accommodation: "Shira 2 Camp (tents)" },
    { day: 5, altitudeStart: 3850, altitudeEnd: 3960, altitudeMax: 4600, hours: "7–9 hours", meals: "Breakfast, lunch and dinner", accommodation: "Barranco Camp (tents)" },
    { day: 6, altitudeStart: 3960, altitudeEnd: 4035, hours: "4–6 hours", meals: "Breakfast, lunch and dinner", accommodation: "Karanga Camp (tents)" },
    { day: 7, altitudeStart: 4035, altitudeEnd: 4673, hours: "3–5 hours", meals: "Breakfast, lunch and an early dinner", accommodation: "Barafu Camp (tents)" },
    { day: 8, image: IMG.uhuru, altitudeStart: 4673, altitudeEnd: 3100, altitudeMax: 5895, hours: "12–16 hours or longer", meals: "Breakfast, lunch and dinner", accommodation: "Mweka Camp (tents)" },
    { day: 9, altitudeStart: 3100, altitudeEnd: 1640, hours: "3–5 hours", meals: "Breakfast", accommodation: "Hotel in Arusha" },
    { day: 10, meals: "Breakfast", accommodation: "—" },
  ]),
  included: [
    "Two hotel nights: One in Arusha before the climb and one after the descent, based on the agreed accommodation and meal arrangement.",
    "Transfers: Transfers stated in the confirmed itinerary, including airport transfers when included in the booking.",
    "Park and camping fees: Applicable Kilimanjaro National Park entry, conservation and camping charges.",
    "Professional mountain team: Qualified mountain guides and the required supporting crew.",
    "Mountain camping: Sleeping tents and shared dining arrangements as specified in the package.",
    "Meals during trekking: Meals prepared by the mountain cook according to the confirmed meal plan.",
    "Drinking water: Water provided during the climb according to the operator's arrangements.",
    "Guidance and preparation: Route planning, daily briefings, equipment checks and altitude-awareness guidance.",
    "Descent arrangements: Planned descent support and park exit procedures.",
  ],
  excluded: [
    "International flights to and from Tanzania.",
    "Tanzania visa fees and personal travel documentation costs.",
    "Travel insurance, including appropriate high-altitude trekking and emergency evacuation cover.",
    "Personal trekking clothing and equipment, including boots, waterproof clothing, warm layers, gloves, headlamps and personal medication.",
    "Sleeping bag and trekking pole rental unless explicitly included in the quotation.",
    "Tips for mountain guides, cooks and porters — budget about $250–$350 per person for the eight days.",
    "Personal snacks, alcoholic beverages, souvenirs, laundry and other personal purchases.",
    "Extra hotel nights, room upgrades and meals not stated in the package.",
    "Medical treatment, rescue or evacuation expenses not expressly covered by the package or insurance.",
    "Optional safaris, Zanzibar holidays and other activities not listed in the confirmed booking.",
    "Additional compulsory fees or taxes introduced after the quotation, where applicable under the booking terms.",
  ],
  sections: [
    {
      heading: "Safety, age requirements and preparation",
      paragraphs: [
        "Trust Tours & Safaris' stated age policy for mountain expeditions is 12–80 years, subject to individual suitability, applicable park requirements and a safety assessment. Climbers should train in advance, be comfortable walking for several hours over uneven terrain and understand that summit day can be exceptionally long.",
        "Participants should obtain appropriate medical advice before attempting a high-altitude trek and secure travel insurance that explicitly covers the planned activity and emergency evacuation. Follow your guide's instructions throughout the expedition, report symptoms promptly and understand that the guide may change or stop the climb if continuing is unsafe.",
      ],
    },
    {
      heading: "Why climb with Trust Tours & Safaris?",
      paragraphs: [
        "A Kilimanjaro expedition requires more than a scenic itinerary: it calls for careful logistics, professional guiding, reliable camp arrangements, transparent communication and realistic advice about the mountain's physical demands. Trust Tours & Safaris helps you prepare for each stage, understand what your package covers and approach your adventure with clear information before departure.",
        "Our aim is to deliver a well-organised, professional climbing experience, with honest guidance about altitude, weather, costs and summit conditions. We want you to arrive prepared, understand the challenge ahead and focus on the extraordinary experience of climbing Africa's highest mountain.",
      ],
    },
    {
      heading: "Request your 2027–2028 Kilimanjaro quotation",
      paragraphs: [
        "Contact Trust Tours & Safaris with your preferred dates, number of climbers, accommodation preferences and any equipment rental requirements. We will confirm the itinerary, current fees, inclusions, exclusions and final price before you book.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "7 or 8 days on the Lemosho Route?",
      answer:
        "The 8-day climb adds a night at Karanga Camp, so you never combine the Barranco Wall and the ascent to base camp in one day. It is the version we recommend for first-time climbers.",
    },
    {
      question: "I'm travelling solo — can I still climb?",
      answer:
        "Yes. You can book a private climb at the solo rate, or join one of our scheduled group departures and share the costs.",
    },
    {
      question: "Will I definitely reach the summit?",
      answer:
        "No. Your guide may stop or modify the ascent because of altitude symptoms, exhaustion, severe weather or other safety concerns. A safe descent takes priority over reaching the summit.",
    },
  ],
  bestMonths: BEST_MONTHS,
};
