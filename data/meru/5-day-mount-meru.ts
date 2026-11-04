import { MIMG, meruTrip } from "./shared";

// From Ombeni's "5-Day Mount Meru Climbing Adventure & Tarangire Safari" (a
// quote for one client): the 3-day climb with a Tarangire day safari at the
// end. $1,255 per person for two. Replaces the old Rivertrees entry, which had
// no price, and keeps its URL.
export const meru5 = meruTrip({
  slug: "5-day-mount-meru",
  seoTitle: "5-Day Mount Meru Climb & Tarangire Safari | Trust Tours",
  metaDescription:
    "Climb Mount Meru (4,566 m) in 3 days with an armed ranger, rest a night in Arusha, then a private day safari in Tarangire. From $1,255 pp sharing.",
  destinations: ["Mount Meru", "Arusha", "Tarangire"],
  title: "5-Day Mount Meru Climb & Tarangire Safari",
  shortName: "5-Day Mount Meru & Tarangire",
  days: 5,
  hotelNights: 2,
  groupPricing: {
    tiers: [{ pax: 2, usd: 1255 }],
    askSizes: [1, 3, 4, 5, 6],
    note: "Package structure: arrival night near Momella, 3 days on Mount Meru, a night in Arusha and a Tarangire day safari.",
  },
  heroImage: MIMG.summit.src,
  summary:
    "Climb Mount Meru to Socialist Peak (4,566 m) in three days, recover with a night in Arusha, then spend a day among Tarangire's elephants and baobabs before your onward transfer.",
  overview: [
    "This trip pairs Tanzania's second-highest mountain with one of its finest parks. You climb Mount Meru through Arusha National Park's forest and wildlife, with an armed ranger, to the volcanic summit ridge and Socialist Peak at 4,566 metres.",
    "Summit day is long, so you spend that night at a hotel in Arusha instead of driving straight to a safari lodge. Rested, you set off the next morning on a private game drive in Tarangire National Park, famous for its elephant herds and ancient baobab trees.",
    "At the end of the safari day, we drive you on to Kilimanjaro, Moshi or Arusha, or to the airport for an evening flight, whichever suits your plans.",
  ],
  atAGlance: [
    { label: "Duration", value: "5 days: 3 on Mount Meru and a Tarangire safari" },
    { label: "Highest point", value: "Socialist Peak, 4,566 m" },
    { label: "Start", value: "Kilimanjaro International Airport" },
    { label: "Finish", value: "Your onward address in the Kilimanjaro or Arusha area" },
    { label: "Nights", value: "Lodge near Momella, 2 mountain huts, hotel in Arusha" },
    { label: "Safari", value: "A private day in Tarangire National Park" },
  ],
  highlights: [
    "Mount Meru: Forest, giant heather and an exposed ridge to Socialist Peak.",
    "A walking safari: Giraffes and buffaloes on the lower slopes, with an armed ranger.",
    "Sunrise over Kilimanjaro: From the summit on a clear morning.",
    "A night to recover: A hotel in Arusha after the summit day.",
    "Tarangire: Elephant herds and giant baobabs on a private game drive.",
  ],
  pricingDetails: [
    "This is Ombeni's package price per person for 2 people sharing a room, with a private guide and vehicle for the safari day.",
    "For one traveller or a group of three to six, select your group size in the booking box and Ombeni will quote you directly.",
    "Your written quote confirms the final price for your dates before you pay a deposit.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival and transfer to Momella",
      description:
        "Our driver meets you at Kilimanjaro International Airport and takes you to your lodge near Momella, close to Arusha National Park. You have time to rest, and we hold your mountain briefing, check your equipment and explain the plan for the morning.",
      image: MIMG.airport,
      meals: "Depending on your arrival time",
      accommodation: "A mid-range lodge near Momella",
    },
    {
      day: 2,
      title: "Momella Gate to Miriakamba Hut",
      description:
        "After registering at Momella Gate with your armed ranger, you walk across open grassland with chances of giraffes, zebras, buffaloes and warthogs, then climb into montane forest, where black-and-white colobus monkeys live. After lunch on the trail, you reach Miriakamba Hut for dinner and an early night.",
      image: MIMG.forest,
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
        "A steeper climb through forest to moorland and giant heather brings you to Saddle Hut by lunchtime. If you feel well and your guide agrees, you can walk up Little Meru (3,820 m) in the afternoon to acclimatise, before dinner, the summit briefing and bed.",
      image: MIMG.heather,
      altitudeStart: 2514,
      altitudeEnd: 3570,
      altitudeMax: 3820,
      hours: "3–5 hours",
      meals: "Breakfast, lunch, dinner",
      accommodation: "Saddle Hut",
    },
    {
      day: 4,
      title: "Summit Socialist Peak and descend to Arusha",
      description:
        "Around midnight, you climb with your guide and ranger past Rhino Point and Cobra Point to the exposed summit ridge, with steep, rocky ground and cold wind. At Socialist Peak (4,566 m), you may see the sun rise behind Kilimanjaro.\n\nYou then descend all the way to Momella Gate, a very long day, and our driver takes you to your hotel in Arusha for a shower, dinner and a proper night's rest before the safari.",
      image: MIMG.summit,
      notes: ["This day can mean 12 to 14 hours of walking, and your guide may change the plan if it's unsafe to continue."],
      altitudeStart: 3570,
      altitudeEnd: 1500,
      altitudeMax: 4566,
      hours: "12–14 hours",
      meals: "Early snack, mountain meals, dinner",
      accommodation: "A mid-range hotel in Arusha, such as the New Safari Hotel",
    },
    {
      day: 5,
      title: "Tarangire National Park and onward transfer",
      description:
        "After an early breakfast, your driver-guide collects you for a full day in Tarangire National Park, known for its elephant herds and baobab trees. You may see giraffes, zebras, wildebeest, antelopes and many birds, and predators are possible, though never guaranteed. You stop for a picnic lunch in the park.\n\nIn the late afternoon, you leave the park for your onward transfer to the Kilimanjaro or Arusha area. It's a long day, so we plan the timing with you once we know where you're heading.",
      image: MIMG.tarangire,
      meals: "Breakfast, picnic lunch",
      accommodation: "—",
    },
  ],
  included: [
    "Airport pickup: From Kilimanjaro International Airport.",
    "Hotels: A night at a lodge near Momella before the climb and a night in Arusha after, sharing a double or twin room.",
    "Park fees: Arusha National Park entry, climbing, hut and rescue fees.",
    "Guide: A professional English-speaking mountain guide.",
    "Ranger: The armed park ranger required by the park.",
    "Crew: Porters and a cook, with mountain meals as listed in the itinerary.",
    "Mountain huts: Two nights, at Miriakamba Hut and Saddle Hut.",
    "Drinking water: Throughout the climb.",
    "Transfers: Between the hotel and Momella Gate.",
    "Tarangire safari: A private day safari with park fees, a driver-guide, the vehicle and a picnic lunch.",
    "Onward transfer: From Tarangire to the Kilimanjaro or Arusha area.",
    "Evacuation: High-altitude trekking and emergency evacuation cover.",
    "Taxes: Applicable taxes on the included services.",
  ],
  excluded: [
    "International flights.",
    "Tanzania visa fees.",
    "Personal travel and medical insurance.",
    "Personal trekking equipment: boots, warm layers, rainwear and a sleeping bag, unless rented.",
    "Tips for your guide, ranger, crew and safari driver-guide.",
    "Alcoholic drinks and personal expenses.",
    "Extra hotel nights, meals or activities not listed.",
  ],
  addOns: ["extra-hotel-night", "single-supplement", "gear-rental", "safari-extension", "zanzibar-extension", "kilimanjaro-extension"],
  sections: [],
  faqs: [
    {
      question: "Why not go straight to Tarangire after the climb?",
      answer:
        "Summit day is very long, often 12 to 14 hours of walking. A night in Arusha lets you shower, eat and sleep properly, so you enjoy the safari instead of dozing through it.",
    },
    {
      question: "Can I stay longer on safari?",
      answer:
        "Yes. Add the Ngorongoro Crater or the Serengeti after Tarangire, or a few days on Zanzibar. Tick the add-on in the booking box and we'll quote it.",
    },
  ],
});
