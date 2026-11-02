import { IMG, STAYS_ARUSHA, STAYS_HIGHLANDS, STAYS_NDUTU, arrivalDay, calvingTrip, stop } from "./shared";

// From Ombeni's "7-Day Ndutu Great Migration & Calving Safari" document, his
// flagship calving trip.
export const ndutuCalving7 = calvingTrip({
  slug: "7-day-ndutu-calving-safari",
  seoTitle: "7-Day Ndutu Calving Safari Tanzania | Trust Tours",
  metaDescription:
    "Our flagship 7-day private calving safari: Tarangire, the Ngorongoro Crater and two full days at Ndutu during the Great Migration. From $3,185 per person.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "7-Day Ndutu Great Migration & Calving Safari",
  shortName: "7-Day Ndutu Calving Safari",
  days: 7,
  heroImage: "/images/safaris/ndutu-dusk-herd.jpg",
  summary:
    "Our flagship calving safari: the complete migration experience, built around time, positioning and flexibility, with two full days on the Ndutu plains.",
  overview: [
    "Experience one of the most extraordinary chapters of the Great Wildebeest Migration, as huge numbers of wildebeest, zebra and other grazing animals gather across the short-grass plains of Ndutu and the Southern Serengeti. During the calving season, the plains become a vast nursery, attracting large numbers of lions, cheetahs, hyenas and other predators.",
    "Rather than rushing through several destinations, this safari is designed around time, positioning and flexibility. You experience Tarangire's elephants and baobabs, the Ngorongoro highlands and crater, and then devote multiple days to the Ndutu migration, where the safari's main experience takes place.",
    "The most important nights are spent close to the migration, so you don't have to commute long distances from a lodge far away.",
  ],
  atAGlance: [
    { label: "Duration", value: "7 days / 6 nights" },
    { label: "Season", value: "December to March" },
    { label: "Best calving period", value: "Late January to February" },
    { label: "Start / finish", value: "Kilimanjaro International Airport (JRO)" },
    { label: "Destinations", value: "Arusha · Tarangire · Ngorongoro · Ndutu" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle" },
    { label: "Main focus", value: "Great Migration and Ndutu calving season" },
  ],
  highlights: [
    "Two full Ndutu days: Far more chance to experience the migration than a single game drive.",
    "Migration first: Designed around Ndutu, not around ticking off parks.",
    "Accommodation follows the experience: Your key nights are close to the herds.",
    "Choose your way home: Stay longer on your last morning and fly, or take the scenic road.",
    "A relaxed final day: Time for Arusha before your flight.",
  ],
  itinerary: [
    arrivalDay("arusha-first"),
    {
      day: 2,
      title: "Arusha to Tarangire National Park and Karatu",
      description:
        "After breakfast, you leave Arusha for Tarangire National Park, famous for its enormous elephant herds, ancient baobab trees and diverse wildlife. You enjoy a full game drive through the park.\n\nDepending on the season and wildlife movements, you may see large elephant herds, giraffes, zebras, wildebeest, buffalo, impala, lions, leopards, warthogs and numerous bird species. Tarangire gives the journey a completely different ecological experience before you enter the Ngorongoro highlands and migration country.\n\nAfter your game drive, you continue to your lodge near Karatu.",
      experience: "Elephants, baobabs and general wildlife.",
      image: IMG.elephantsVehicle,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 3,
      title: "Ngorongoro Crater to Ndutu: from the highlands to the migration plains",
      description:
        "This is an important transition day. After an early breakfast, you drive into the Ngorongoro Conservation Area and descend into the spectacular crater for a game drive.\n\nThe crater is home to an extraordinary concentration of wildlife, with lions, buffalo, zebra, wildebeest, hippos, elephants, hyenas, gazelles, flamingos and other water birds. Black rhino live here too, although sightings are never guaranteed.\n\nAfter the crater, you continue to Ndutu, crossing the spectacular landscapes of the conservation area and entering the Southern Serengeti ecosystem. This is where the character of the safari changes. The land opens into vast short-grass plains and, depending on the time of year and the rainfall, the migration may already be spread across Ndutu.",
      experience: "From the crater floor to the edge of the calving plains.",
      image: IMG.crater,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 4,
      title: "Full-day Ndutu migration experience",
      description:
        "Wake before sunrise. This is one of the most important mornings of the entire journey. After an early breakfast, you head into the Ndutu plains while wildlife activity is high.\n\nThe day is deliberately flexible. Instead of following a rigid sightseeing schedule, your guide watches wildlife activity and adjusts the route to current conditions. You may see enormous concentrations of wildebeest, zebra and gazelles, together with newborn calves and predators.\n\nThe calving season is especially interesting because vulnerable young animals attract predators and create dramatic wildlife behaviour. Possible encounters include wildebeest giving birth, newborn calves, lions stalking the herds, cheetahs hunting, hyenas, jackals, leopards and ostriches.\n\nYou enjoy a picnic lunch in the wilderness or return to camp, depending on the wildlife. You continue with afternoon game viewing before dinner at camp.",
      experience: "The heart of the safari.",
      image: IMG.cheetahChase,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 5,
      title: "A second full migration day at Ndutu",
      description:
        "This is what makes the itinerary stronger than a standard seven-day safari. There is no unnecessary park-hopping today. You wake in the migration zone and spend the entire day following the herds.\n\nYour guide decides where to concentrate, based on the latest sightings and road conditions. That flexibility is important, because the migration is a natural event and not a fixed attraction. The herds move with the grass, water and rain, and a full day lets you explore different areas of Ndutu instead of driving between distant destinations.",
      experience: "A second day with the herds, with no park-hopping.",
      notes: [
        "Keen photographer? This can be set as a dedicated photography day, with your guide allowing more time at selected sightings.",
      ],
      image: IMG.sunsetHerd,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 6,
      title: "Final Ndutu morning, then back to Arusha",
      description:
        "After breakfast, you enjoy a final morning game drive around Ndutu before beginning your return journey.\n\nThe standard option is to continue by safari vehicle through the Ngorongoro Conservation Area to Arusha, arriving in the late afternoon or evening.\n\nIf you would rather make the most of your time in the migration zone, you can fly from the Ndutu area to Arusha instead, subject to availability. This turns the day from a long transfer into another meaningful migration morning followed by an efficient flight.",
      experience: "Choose your way home: the scenic road or a flight.",
      meals: "Breakfast and lunch",
      accommodation: "Your chosen stay in Arusha",
      stayId: "arusha-last",
    },
    {
      day: 7,
      title: "Arusha to Kilimanjaro International Airport",
      description:
        "Enjoy breakfast at your lodge. Depending on your flight time, you may have time to relax, take a short tour of Arusha, go shopping, enjoy a coffee experience or join a cultural activity.\n\nYou are then transferred to Kilimanjaro International Airport for your onward flight. The safari ends, but the memories continue.",
      experience: "A relaxed morning before your flight home.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("arusha-first", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("highlands", "Night 2", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("ndutu", "Nights 3, 4 and 5", "Ndutu and the Southern Serengeti", STAYS_NDUTU),
    stop("arusha-last", "Night 6", "Arusha", STAYS_ARUSHA),
  ],
  sections: [
    {
      heading: "Why this is our flagship Ndutu safari",
      bullets: [
        "Migration first: This is not a simple Tarangire, Ngorongoro and Serengeti tour. It is designed around Ndutu and the calving season.",
        "Two full Ndutu days: You get far more opportunity to experience the migration than a single game drive allows.",
        "Flexible return: Travel from Ndutu to Arusha by safari vehicle or by flight, which suits different budgets.",
        "Accommodation follows the experience: Your most important nights are close to the migration, with no long daily commute.",
      ],
    },
  ],
  faqs: [
    {
      question: "How many nights do I spend at Ndutu?",
      answer: "Three nights, with two full days on the plains and a final morning game drive on Day 6.",
    },
    {
      question: "Can I fly from Ndutu to Arusha?",
      answer:
        "Yes, subject to availability. The flight is quoted separately according to your date and airline. Tick it in the booking box, and we will include it in your quote.",
    },
  ],
});
