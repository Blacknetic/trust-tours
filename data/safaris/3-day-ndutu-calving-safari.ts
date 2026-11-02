import { IMG, STAYS_NDUTU, calvingTrip, stop } from "./shared";

// From Ombeni's "3-Day Ndutu Calving Season Migration Safari" document.
export const ndutuCalving3 = calvingTrip({
  slug: "3-day-ndutu-calving-safari",
  seoTitle: "3-Day Ndutu Calving Safari Tanzania | Trust Tours",
  metaDescription:
    "A short, private 3-day Ndutu safari from Kilimanjaro Airport: two nights in the calving grounds and a full day with the herds. From $1,365 per person.",
  destinations: ["Arusha", "Ngorongoro", "Serengeti"],
  title: "3-Day Ndutu Calving Season Migration Safari",
  shortName: "3-Day Ndutu Calving Safari",
  days: 3,
  heroImage: "/images/safaris/ndutu-sunset-herd.jpg",
  summary:
    "A short, focused safari for travellers whose priority is the Great Migration: two nights and a full day in the Ndutu calving grounds of the Southern Serengeti.",
  overview: [
    "If your priority is seeing the Great Migration rather than simply visiting the Serengeti, this itinerary concentrates your limited time where it matters. During the calving season, enormous herds of wildebeest and zebra gather across the Ndutu plains.",
    "The landscape can become exceptionally active. Thousands of calves are born, while lions, cheetahs, hyenas and leopards take advantage of the abundance of young prey.",
    "This is not a conventional three-day northern circuit safari. It is a focused migration itinerary designed around Ndutu, with no time lost trying to fit in too many parks.",
  ],
  atAGlance: [
    { label: "Duration", value: "3 days / 2 nights" },
    { label: "Main purpose", value: "Great Migration and Ndutu calving season" },
    { label: "Best period", value: "December to March, especially January and February" },
    { label: "Start / finish", value: "Kilimanjaro International Airport (JRO)" },
    { label: "Destinations", value: "Arusha · Ngorongoro Conservation Area · Ndutu" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
  ],
  highlights: [
    "Two nights at Ndutu: Sleep close to the herds rather than visiting on a day trip.",
    "A full migration day: The whole of Day 2 is dedicated to following the herds.",
    "Newborn calves and predators: Look for young calves, lions, cheetahs and hyenas.",
    "A picnic on the plains: No need to return to camp for lunch, so you stay with the wildlife.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Kilimanjaro Airport to Ndutu: into the migration area",
      description:
        "Your safari begins with a pickup at Kilimanjaro International Airport by your Trust Tours safari guide. After a short briefing, you drive west through northern Tanzania. Depending on your arrival time, there may be a chance for a short stop in Arusha before you continue over the Ngorongoro highlands.\n\nAs you descend towards the southern Serengeti ecosystem, the scenery changes dramatically, from cultivated highlands to open grasslands and acacia-dotted plains.\n\nOnce you reach the Ndutu area, your first game drive begins. It is designed around where the herds actually are, not a fixed route. You may find huge concentrations of wildebeest, zebra herds, newly born calves, Thomson's and Grant's gazelles, lions, cheetahs, spotted hyenas, leopards, jackals and ostriches. You arrive at your camp or lodge for dinner and the night.",
      experience: "From the airport to your first game drive among the migration herds.",
      notes: [
        "This is a long first day, at about 250–300 km and 5–7 hours of driving before game viewing and stops. The distance depends on your route and camp.",
      ],
      image: IMG.plainsHerds,
      distanceKm: "250–300",
      hours: "5–7 hours",
      meals: "Lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 2,
      title: "Full-day Ndutu migration and calving safari",
      description:
        "Today is the heart of the safari. After an early breakfast, you leave with a picnic lunch for a full-day game drive around Ndutu and the surrounding Southern Serengeti plains. The entire day is dedicated to following the migration and searching for wildlife activity.\n\nThe early morning is particularly valuable for photography. Your guide will search for large groups of wildebeest and zebra, sometimes forming enormous moving herds. During the peak calving period, you may see very young calves staying close to their mothers. The concentration of prey attracts predators, so you may also meet lions, cheetahs, hyenas and other carnivores. Ndutu's birdlife is impressive too, with raptors and large ground birds.\n\nYou enjoy your picnic at a designated spot, surrounded by the landscape. There is no need to return to camp, which gives you much more time with the wildlife. In the afternoon, your guide adjusts the route to the herds, recent sightings, predator activity, the weather, road conditions and the best light for photography.\n\nAs the afternoon cools, you continue your game drive before returning to camp for dinner and, depending on the property and weather, an evening around the campfire.",
      experience: "A whole day following the Great Migration across the plains.",
      image: IMG.calf,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 3,
      title: "Final game drive and return to Kilimanjaro Airport",
      description:
        "Wake early for breakfast and your final safari experience. Depending on your flight time, we recommend an early morning game drive around Ndutu before you begin the journey back. The morning can bring lions returning from the night's activity, cheetahs hunting, hyenas, wildebeest and zebra, young calves, giraffes, gazelles, birds of prey and beautiful sunrise photography.\n\nAfter the game drive, you travel back through the Ngorongoro Conservation Area towards Arusha, then transfer to Kilimanjaro International Airport for your onward flight.",
      experience: "One last morning with the herds before the journey home.",
      notes: [
        "Want to see the Ngorongoro Crater too? It can be added on Day 3, but it makes the final day much longer. If the migration is your main goal, we recommend keeping this safari focused on Ndutu, or choosing a longer trip.",
      ],
      meals: "Breakfast and lunch",
      accommodation: "—",
    },
  ],
  stayChoices: [stop("ndutu", "Nights 1 and 2", "Ndutu and the Southern Serengeti", STAYS_NDUTU)],
  sections: [
    {
      heading: "Why choose this 3-day safari?",
      paragraphs: [
        "With only three days, trying to see everything means seeing very little. This safari puts your two nights where the migration is normally concentrated in the early months of the year, so that you spend your time watching wildlife rather than moving between parks.",
        "Rather than promising a particular wildlife encounter, it is built around giving you the best opportunities. Your guide decides each day where to go, based on the herds and the latest sightings.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is three days enough for a calving safari?",
      answer:
        "Yes, if the migration is your main goal. You get two nights at Ndutu and a full day with the herds. If you can spare more time, our 4-day and 5-day safaris add more wildlife viewing and a rested first night.",
    },
    {
      question: "Does this safari include the Ngorongoro Crater?",
      answer:
        "Not as standard. You pass through the conservation area, but a crater game drive would make the last day very long. Tell us if you would like it added.",
    },
  ],
});
