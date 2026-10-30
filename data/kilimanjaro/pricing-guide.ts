// Long-form pricing guide for the /kilimanjaro page, from Ombeni's
// "Mount Kilimanjaro Climbing Prices 2026–2028" document. Its own price
// tables are not used: they disagree with the itinerary documents, so the
// page builds its comparison table from the trip rate cards instead.

import type { ContentSection } from "@/data/packages";

export const PRICING_INTRO = [
  "Climb Africa's highest mountain with Trust Tours & Safaris and choose the route, number of trekking days and comfort level that best suit your adventure. This page makes it easy to compare routes, understand what is included, and see how the cost changes with group size.",
  "The total price depends on the route, duration, number of climbers, accommodation before and after the trek, mountain crew, park and camping fees, meals, transfers and any additional services.",
];

export const ROUTE_CHOICES: ContentSection = {
  heading: "Choose your Kilimanjaro climbing package",
  bullets: [
    "Marangu Route (5 or 6 trekking days): Hut accommodation and a well-established trail. The five-day option is shorter, while six days allows more time on the mountain.",
    "Machame Route (6 or 7 trekking days): Scenic landscapes, tented camping and a varied ascent. The seven-day option offers more time for acclimatization.",
    "Lemosho Route (7 or 8 trekking days): Beautiful western approaches and broad mountain scenery. The longer itinerary is a strong choice for climbers prioritizing acclimatization.",
    "Northern Circuit (9 or 11 trekking days): A longer journey around the northern slopes, offering remote scenery and additional time for acclimatization — with a Crater Camp option on the longest version.",
    "Rongai Route (6 trekking days): Approaches Kilimanjaro from the north and offers a different perspective on the mountain.",
    "Umbwe Route (6 trekking days): A steep, demanding route best suited to experienced trekkers who are comfortable with challenging terrain.",
  ],
};

export const PRICING_SECTIONS: ContentSection[] = [
  {
    heading: "What is included in a Kilimanjaro climbing package?",
    paragraphs: [
      "A well-organized climbing package should clearly identify the services covered by the quoted price. Depending on the confirmed package, inclusions may comprise:",
    ],
    bullets: [
      "Park and mountain fees: Applicable park entry, camping or hut fees, conservation charges and required rescue or access fees, as itemized in the quotation.",
      "Professional mountain crew: Qualified lead guide, assistant guides where needed, porters and a mountain cook according to group size and route requirements.",
      "Meals on the mountain: Meals and drinking water during the trek, with dietary requirements discussed before departure.",
      "Mountain accommodation: Tents and shared camping equipment on camping routes, or designated mountain huts on the Marangu Route.",
      "Transfers: Transfers between the agreed hotel, route starting point and finishing point, plus airport transfers where included.",
      "Safety equipment and monitoring: The agreed first-aid provisions, altitude monitoring and emergency oxygen arrangements, with the precise safety equipment confirmed in writing.",
      "Hotel accommodation before and after climbing: Many packages include two hotel nights — typically one before the climb and one after the descent. Hotel category, meals and room-sharing arrangements are confirmed in your quote.",
    ],
  },
  {
    heading: "What is not included?",
    paragraphs: ["Unless the quotation explicitly states otherwise, travellers should budget separately for:"],
    bullets: [
      "International flights.",
      "Tanzania visa fees.",
      "Travel insurance that specifically covers high-altitude trekking and emergency evacuation.",
      "Tips for the mountain crew.",
      "Personal climbing equipment, including boots, sleeping bags, trekking poles and insulated clothing.",
      "Extra hotel nights beyond those included.",
      "Hotel lunches and dinners not included in the package.",
      "Personal purchases, snacks and other expenses.",
      "Private-room or single-tent supplements where available.",
      "Any additional transfer, excursion or service not listed in the written itinerary.",
    ],
  },
  {
    heading: "Classic and premium climbing options",
    bullets: [
      "Classic climbing package: A practical mountain expedition with professional guides, a support crew, mountain meals, camping or hut accommodation, safety arrangements and the agreed hotel nights. This is suitable for climbers who want a well-organized trek with a focus on reaching the summit safely.",
      "Premium climbing package: A higher-comfort option may provide upgraded hotel accommodation, more personalized services, enhanced dining arrangements, additional support or upgraded equipment. The exact premium services are listed individually in your quote rather than assumed from the package name.",
    ],
  },
  {
    heading: "Why does the price change with group size?",
    paragraphs: [
      "The cost per person usually decreases when several climbers travel together because some expenses can be shared. These include vehicle transfers, guide arrangements, equipment logistics and certain operating costs. However, park fees and other per-person charges remain payable for each climber, while larger groups may require additional guides and crew.",
      "A solo climber normally pays more per person than a group of two or more. Groups of six or more receive a quotation based on the exact route, dates, crew requirements and accommodation arrangements — not an assumed discount.",
    ],
  },
  {
    heading: "Which route should you choose?",
    bullets: [
      "Best for a shorter itinerary: Marangu Route, 6 days rather than the shorter five-day version where possible.",
      "Popular scenic option: Machame Route, 7 days.",
      "Recommended for a longer acclimatization itinerary: Lemosho Route, 8 days.",
      "For a longer mountain adventure: Northern Circuit, with a longer itinerary selected according to availability and fitness.",
      "For experienced trekkers seeking a steep ascent: Umbwe Route, after careful consideration of its difficulty.",
    ],
    note: "No route can guarantee a summit. A longer itinerary generally allows more time for acclimatization, but summit success also depends on individual health, fitness, weather and the guide's safety decisions.",
  },
  {
    heading: "How to request an accurate quotation",
    paragraphs: ["For an accurate Trust Tours & Safaris quotation, tell us:"],
    bullets: [
      "Your preferred climbing route.",
      "Your intended climbing month and year.",
      "The number of climbers.",
      "Whether you need airport transfers.",
      "Your preferred hotel level before and after the trek.",
      "Whether you need personal climbing equipment.",
      "Any dietary requirements or special assistance.",
    ],
    note: "Your final quote states the total price per person, the group total, the hotel nights if applicable, all included park and mountain fees, excluded expenses, deposit requirements and cancellation terms.",
  },
];
