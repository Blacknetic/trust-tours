import type { TripPackage } from "@/data/packages";
import { KILIMANJARO_CAMPING_ADDONS } from "@/data/addons";
import { CONTACT_BULLETS, IMG, PRICE_NOTE, howPricesWork, withProse } from "./shared";
import { DAYS } from "./prose/9-day-northern-circuit";

export const northernCircuit9: TripPackage = {
  slug: "9-day-northern-circuit",
  seoTitle: "9-Day Northern Circuit Kilimanjaro Climb · Trust Tours",
  metaDescription:
    "Kilimanjaro's longest, quietest route: 9 trekking days around the northern slopes, 11-day package with 2 hotel nights in Arusha. $4,550 per person.",
  destinations: ["Kilimanjaro"],
  category: "kilimanjaro",
  effort: 4,
  summitChance: 5,
  difficulty: "Challenging",
  title: "9-Day Kilimanjaro Climb – Northern Circuit Route",
  shortName: "9-Day Northern Circuit",
  days: 9,
  hotelNights: 2,
  priceFromUSD: 4550,
  priceNote: PRICE_NOTE,
  groupPricing: {
    tiers: [
      { pax: 1, usd: 4550 },
      { pax: 2, usd: 3450 },
      { pax: 6, usd: 3250 },
      { pax: 7, usd: 3000 },
      { pax: 8, usd: 2850 },
    ],
    note: "USD per person · 9 trekking days + 2 hotel nights · 11 calendar days.",
  },
  addOns: KILIMANJARO_CAMPING_ADDONS,
  tier: ["mid-range"],
  heroImage: "/images/packages/9-day-northern-circuit.jpg",
  gallery: [],
  reviewSnippets: [
    { author: "Andreea J", text: "I did the 9-day Northern Circuit up Kilimanjaro as a solo traveller. The climb was absolutely fabulous — the team was amazing and made me feel so comfortable and taken care of.", source: "Google" },
  ],
  oldUrl:
    "/booking/9-days-climb-mount-kilimanjaro-with-the-best-northern-circuit-route-trust-tours-and-safaris/",
  summary:
    "Experience Mount Kilimanjaro from a different perspective on our 9-day Northern Circuit Route — a remarkable journey across the western slopes, the Shira Plateau and the remote northern side of Africa's highest mountain.",
  overview: [
    "Unlike routes that quickly turn toward the southern slopes, the Northern Circuit follows a longer arc around the mountain, offering broad landscapes, quieter trails, changing vegetation and extended time to adjust to altitude.",
    "This route is an excellent choice for trekkers who value a gradual itinerary, wilderness scenery and a less crowded mountain experience. You will walk through lush rainforest, explore the open Shira Plateau, cross high-altitude landscapes, and approach the summit through the upper mountain before descending along the southern side.",
    "Our package includes nine days of trekking and two hotel nights, giving you a total of 11 calendar days: one night in a hotel before the climb and one night after the descent. Your climb is supported by a professional mountain team, camping accommodation, meals on the mountain, planned acclimatization, and guidance focused on responsible trekking and safety.",
    "Route note: after Shira 1 Camp, this itinerary continues to Shira 2 Camp, rather than going directly from Shira 1 to Moir Hut. From Shira 2, the route proceeds toward Moir Hut and then continues around Kilimanjaro's northern slopes.",
    "The Northern Circuit offers an exceptional way to experience Kilimanjaro because it spends more time exploring the mountain rather than taking the shortest route toward the summit. Its longer itinerary creates more opportunities for gradual altitude exposure, while the remote northern slopes offer a different atmosphere from the busier sections of the mountain.",
  ],
  atAGlance: [
    { label: "Destination", value: "Mount Kilimanjaro, Tanzania" },
    { label: "Route", value: "Northern Circuit" },
    { label: "Trekking duration", value: "9 days" },
    { label: "Total package duration", value: "11 days / 10 nights" },
    { label: "Accommodation", value: "2 hotel nights and 8 mountain-camping nights, subject to final camp allocation" },
    { label: "Highest point", value: "Uhuru Peak, 5,895 m (19,341 ft)" },
    { label: "Starting point", value: "Londorossi Gate area, on Kilimanjaro's western side" },
    { label: "Descent", value: "Mweka Gate, on the southern side" },
    { label: "Difficulty", value: "Challenging; suitable preparation and endurance are essential" },
    { label: "Best for", value: "Trekkers seeking scenic variety, a longer acclimatization schedule and quieter trails" },
    { label: "Age policy", value: "12–70 years, subject to individual suitability, documentation and park regulations" },
  ],
  highlights: [
    "A longer itinerary with more time for gradual acclimatization than many shorter routes.",
    "Expansive views across the Shira Plateau and the northern slopes toward Kenya.",
    "A varied mountain environment, from rainforest to moorland, alpine desert and the high summit zone.",
    "Quieter trail sections, particularly along the northern traverse.",
    "A memorable journey that allows trekkers to experience several sides of Kilimanjaro.",
  ],
  pricingDetails: [
    "The 9-day trek includes nine days on the mountain, while the complete package takes 11 calendar days when you add one hotel night before the climb and one after it.",
    ...howPricesWork("eight or more climbers"),
  ],
  itinerary: withProse(DAYS, [
    { day: 1, image: IMG.airport, meals: "Hotel breakfast if included in your accommodation plan", accommodation: "Hotel in Arusha" },
    { day: 2, altitudeStart: 2100, altitudeEnd: 2780, hours: "3–5 hours", meals: "Lunch and dinner", accommodation: "Mti Mkubwa Camp (tents)" },
    { day: 3, altitudeStart: 2780, altitudeEnd: 3610, hours: "4–6 hours", meals: "Breakfast, lunch and dinner", accommodation: "Shira 1 Camp (tents)" },
    { day: 4, image: IMG.team, altitudeStart: 3610, altitudeEnd: 3850, hours: "3–5 hours", meals: "Breakfast, lunch and dinner", accommodation: "Shira 2 Camp (tents)" },
    { day: 5, altitudeStart: 3850, altitudeEnd: 4200, hours: "4–7 hours", meals: "Breakfast, lunch and dinner", accommodation: "Moir Hut area (tents)" },
    { day: 6, altitudeStart: 4200, altitudeEnd: 4020, hours: "5–7 hours", meals: "Breakfast, lunch and dinner", accommodation: "Buffalo Camp (tents)" },
    { day: 7, altitudeStart: 4020, altitudeEnd: 3870, hours: "4–6 hours", meals: "Breakfast, lunch and dinner", accommodation: "Third Cave Camp (tents)" },
    { day: 8, altitudeStart: 3870, altitudeEnd: 4800, hours: "4–6 hours", meals: "Breakfast, lunch and an early dinner", accommodation: "School Hut (tents)" },
    { day: 9, image: IMG.uhuru, altitudeStart: 4800, altitudeEnd: 3820, altitudeMax: 5895, hours: "10–15 hours or longer", meals: "Summit-day provisions and dinner", accommodation: "Millennium Camp (tents)" },
    { day: 10, altitudeStart: 3820, altitudeEnd: 1640, hours: "4–6 hours", meals: "Breakfast", accommodation: "Hotel in Arusha" },
    { day: 11, meals: "Breakfast, if included by the hotel", accommodation: "—" },
  ]),
  included: [
    "Accommodation: One hotel night before the climb and one after it, plus eight nights in mountain camps using the accommodation arrangement specified in the final quotation.",
    "Transfers: Airport and mountain transfers expressly listed in the booking confirmation.",
    "Park charges: Applicable Kilimanjaro National Park entry, camping, conservation and rescue-related fees, as itemized in the final quotation.",
    "Mountain team: Professional mountain guides, assistant guides, porters and cook, with crew arrangements appropriate to the group size.",
    "Meals: Planned mountain breakfasts, lunches and dinners, with drinking water provision as stated in the confirmed package.",
    "Camping equipment: Standard mountain tents and agreed shared camping equipment.",
    "Pre-climb briefing: Route explanation, equipment checks and summit-day preparation.",
    "Guidance and safety procedures: Regular monitoring by the mountain team and decisions based on weather, route conditions and climber wellbeing.",
  ],
  excluded: [
    "International flights and any domestic flights not specifically listed.",
    "Tanzania visa fees and personal travel expenses.",
    "Travel insurance, including suitable high-altitude trekking, medical treatment and emergency evacuation cover.",
    "Personal trekking equipment, including boots, suitable clothing, sleeping bag, headlamp, daypack and trekking poles, unless rental or supply is explicitly confirmed.",
    "Crew tips and gratuities.",
    "Extra hotel nights, room upgrades, laundry, drinks, snacks and personal purchases.",
    "Optional safari, Zanzibar or other post-climb extensions.",
    "Medical expenses and evacuation costs that are not covered by the confirmed package or the climber's insurance.",
    "Any service not specifically stated as included in the final written quotation.",
  ],
  sections: [
    {
      heading: "Things to consider",
      bullets: [
        "The route requires more days, more mountain supplies and a greater overall budget than shorter climbs.",
        "Long walking days and high altitude require good physical preparation.",
        "Nights can be very cold at high camps, and weather can change quickly.",
        "Spending more days on the mountain improves acclimatization opportunities but cannot guarantee reaching the summit.",
      ],
    },
    {
      heading: "Important booking and safety information",
      paragraphs: [
        "The Northern Circuit is a demanding high-altitude expedition, not simply a long walk. Climbers should prepare through regular cardiovascular exercise, uphill walking and training with a loaded daypack, and should discuss relevant medical concerns with a qualified healthcare professional before travelling. Our stated participant age range is 12–70 years, subject to individual suitability, applicable park rules and any required documentation.",
        "The itinerary and camps may be adjusted when necessary for safety, weather, trail conditions or park instructions. The route is designed to provide valuable acclimatization time, but altitude sickness can affect anyone, regardless of age or fitness.",
      ],
      note: "No responsible operator can guarantee that a climber will reach Uhuru Peak. The final decision to continue or turn back rests on safety, weather, altitude symptoms and the mountain guide's professional assessment.",
    },
    {
      heading: "Ready to climb Africa's highest mountain?",
      paragraphs: [
        "Contact Trust Tours & Safaris for your personalized 2027 or 2028 Northern Circuit quotation. Tell us your preferred dates and group size, and we will help you plan your Kilimanjaro expedition with clear pricing, realistic expectations and professional local support.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "Why choose the Northern Circuit?",
      answer:
        "It spends more time exploring the mountain than any standard route, which gives your body the longest, most gradual build-up to summit night — and its northern traverse is far quieter than the southern trails.",
    },
    {
      question: "How long is the whole trip?",
      answer:
        "Nine days on the mountain plus one hotel night before and one after the climb — 11 calendar days in total.",
    },
  ],
  bestMonths: ["Jan", "Feb", "Jun", "Jul", "Aug", "Sep", "Oct"],
};
