import { MERU_GROUP_PRICES, MIMG, meruTrip } from "./shared";

// From Ombeni's "3-Day Mount Meru Climbing Adventure" (a quote for one client):
// three days on the mountain, with a night near Momella before and a night in
// Arusha after. Replaces the old $645 entry and keeps its URL and redirects.
export const meru3 = meruTrip({
  slug: "3-day-mount-meru-momela",
  seoTitle: "3-Day Mount Meru Climb, Momela Route | Trust Tours",
  metaDescription:
    "Climb Mount Meru (4,566 m) in 3 days on the Momela Route, with an armed ranger, mountain huts, airport transfers and a hotel night before and after.",
  title: "3-Day Mount Meru Climb – Momela Route to Socialist Peak",
  shortName: "3-Day Mount Meru",
  days: 3,
  hotelNights: 2,
  groupPricing: {
    ...MERU_GROUP_PRICES,
    note: "Package structure: 3 days on Mount Meru + a night near Momella before and a night in Arusha after.",
  },
  heroImage: MIMG.forest.src,
  oldUrl: "/booking/3-days-mount-meru-climb-2/",
  summary:
    "Climb Tanzania's second-highest mountain in three days: through Arusha National Park's wildlife and forest with an armed ranger, to Socialist Peak at 4,566 metres for sunrise over Kilimanjaro.",
  overview: [
    "Mount Meru rises to 4,566 metres inside Arusha National Park, so your climb begins like a walking safari, with giraffes, buffaloes and warthogs on the open slopes and colobus monkeys in the forest. Higher up, the trail climbs through giant heather to a dramatic volcanic ridge and the summit, Socialist Peak.",
    "This is the shortest way to climb Meru: two days up to Saddle Hut, then the summit before dawn and the full descent to the gate on the third day. It suits fit, experienced hikers who are short on time. If you'd prefer a gentler pace, the 4-day climb adds a night on the mountain after the summit.",
    "The package includes your airport pickup, a night at a lodge near Momella before the climb and a night in Arusha afterwards to rest, so you arrive fresh and don't have to travel straight after the longest day.",
  ],
  atAGlance: [
    { label: "Package", value: "3 days on Mount Meru + 2 hotel nights" },
    { label: "Highest point", value: "Socialist Peak, 4,566 m" },
    { label: "Route", value: "Momella Gate – Miriakamba Hut – Saddle Hut – Socialist Peak" },
    { label: "Mountain accommodation", value: "Two nights in mountain huts" },
    { label: "Hotels", value: "A lodge near Momella before, Arusha after" },
    { label: "Best for", value: "Fit, experienced hikers and Kilimanjaro warm-ups" },
  ],
  highlights: [
    "A walking safari: Giraffes, buffaloes and warthogs on the lower slopes, with an armed ranger.",
    "Forest and heather: Moss-draped montane forest, then giant heather and moorland.",
    "Little Meru: An optional afternoon walk to 3,820 metres from Saddle Hut.",
    "Socialist Peak: Sunrise at 4,566 metres, often with Kilimanjaro above the clouds.",
    "A night to recover: A hotel in Arusha after the summit day.",
  ],
  pricingDetails: [
    "These are Ombeni's planning prices per person. The 2-person rate assumes two climbers booking together and sharing a hotel room; the solo rate covers the full cost of a private climb.",
    "Groups of four or more pay from $895 each, subject to confirming the crew and safe guide-to-climber ratios.",
    "Your written quote confirms the final price for your dates before you pay a deposit.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival and transfer to Momella",
      description:
        "Our driver meets you at Kilimanjaro International Airport and takes you to your lodge near Momella, close to Arusha National Park. After check-in, you can rest after your journey.\n\nWe hold your mountain briefing, check your equipment and explain the plan for the next morning.",
      image: MIMG.airport,
      meals: "Depending on your arrival time",
      accommodation: "A mid-range lodge near Momella",
    },
    {
      day: 2,
      title: "Momella Gate to Miriakamba Hut",
      description:
        "After breakfast, you drive to Momella Gate to register and meet the armed ranger who walks with your group. The trail starts across open grassland that feels like a walking safari, with chances of giraffes, zebras, buffaloes, warthogs and many birds.\n\nYou climb into montane forest, with towering trees and a chance of black-and-white colobus monkeys, stop for lunch on the way and reach Miriakamba Hut for dinner.",
      image: MIMG.forest,
      notes: ["Wildlife sightings are never guaranteed. Always follow the ranger's instructions near animals."],
      altitudeStart: 1500,
      altitudeEnd: 2514,
      hours: "4–6 hours",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Miriakamba Hut",
    },
    {
      day: 3,
      title: "Miriakamba Hut to Saddle Hut",
      description:
        "The trail climbs steeply through forest to open moorland and giant heather, with growing views of Meru's volcanic cliffs and the plains below. You reach Saddle Hut for lunch, then rest and drink plenty.\n\nIf you feel well and your guide agrees, you can walk up Little Meru (3,820 m) in the afternoon to help you acclimatise. After an early dinner and the summit briefing, you go to bed early.",
      image: MIMG.heather,
      altitudeStart: 2514,
      altitudeEnd: 3570,
      altitudeMax: 3820,
      hours: "3–5 hours, plus the optional Little Meru walk",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Saddle Hut",
    },
    {
      day: 4,
      title: "Summit Socialist Peak and descend to the gate",
      description:
        "You set off at around midnight after tea and a snack, climbing with your guide and ranger past Rhino Point and Cobra Point to the exposed summit ridge. The final section is steep and rocky, with some scrambling, and it's cold and often windy.\n\nAt Socialist Peak (4,566 m), you may watch the sun rise behind Kilimanjaro. After photographs, you descend to Saddle Hut and on through Miriakamba to Momella Gate. It's a very long day, then our driver takes you to your hotel in Arusha for a shower, dinner and a well-earned rest.",
      image: MIMG.summit,
      notes: ["This day can mean 12 to 14 hours of walking. Your guide may change the plan if the weather or your condition makes it unsafe."],
      altitudeStart: 3570,
      altitudeEnd: 1500,
      altitudeMax: 4566,
      hours: "12–14 hours",
      meals: "Early snack, mountain meals, dinner",
      accommodation: "A mid-range hotel in Arusha, such as the New Safari Hotel",
    },
    {
      day: 5,
      title: "Departure",
      description:
        "After breakfast, our driver takes you to Kilimanjaro International Airport for your flight. If you'd like to continue on a safari or to Zanzibar instead, we'll plan it with you.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  included: [
    "Airport pickup: From Kilimanjaro International Airport, and your departure transfer back.",
    "Hotels: A night at a lodge near Momella before the climb and a night in Arusha after, sharing a double or twin room.",
    "Park fees: Arusha National Park entry, climbing, hut and rescue fees.",
    "Guide: A professional English-speaking mountain guide.",
    "Ranger: The armed park ranger required by the park.",
    "Crew: Porters and a cook, with mountain meals as listed in the itinerary.",
    "Mountain huts: Two nights, at Miriakamba Hut and Saddle Hut.",
    "Drinking water: Throughout the climb.",
    "Transfers: Between the hotel and Momella Gate.",
    "Evacuation: High-altitude trekking and emergency evacuation cover.",
    "Taxes: Applicable taxes on the included services.",
  ],
  excluded: [
    "International flights.",
    "Tanzania visa fees.",
    "Personal travel and medical insurance.",
    "Personal trekking equipment: boots, warm layers, rainwear and a sleeping bag, unless rented.",
    "Tips for your guide, ranger and crew.",
    "Alcoholic drinks and personal expenses.",
    "Extra hotel nights, meals or activities not listed.",
  ],
  sections: [],
  faqs: [
    {
      question: "Is 3 days enough to climb Mount Meru?",
      answer:
        "Yes, Meru is often climbed in 3 days, but the last day is very long: the summit and the full descent to the gate, often 12 to 14 hours. If you'd like an easier pace, the 4-day climb spends the night after the summit on the mountain.",
    },
  ],
});
