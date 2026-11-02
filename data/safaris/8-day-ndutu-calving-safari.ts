import { IMG, STAYS_ARUSHA, STAYS_HIGHLANDS, STAYS_NDUTU, arrivalDay, calvingTrip, stop } from "./shared";

// From Ombeni's "8-day itinerary is our signature Ndutu experience" document.
// Its title says 6 nights, but its details and day plan give 7.
export const ndutuCalving8 = calvingTrip({
  slug: "8-day-ndutu-calving-safari",
  seoTitle: "8-Day Ndutu Calving Safari Tanzania | Trust Tours",
  metaDescription:
    "Our signature 8-day private Ndutu safari: four nights in the migration zone, Tarangire and the Ngorongoro Crater, with road or flight home. From $3,640 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "8-Day Ndutu Great Migration & Calving Safari",
  shortName: "8-Day Ndutu Calving Safari",
  days: 8,
  heroImage: "/images/safaris/ndutu-plains-herds.jpg",
  summary:
    "Our signature Ndutu experience: four nights in the migration zone, giving you far more freedom to follow the herds and watch wildlife behaviour.",
  overview: [
    "Experience one of the most extraordinary chapters of the Great Wildebeest Migration, as huge herds gather across the short-grass plains of Ndutu and the Southern Serengeti. During the calving season, the plains become a vast nursery that attracts lions, cheetahs, hyenas and other predators.",
    "The key difference with this safari is simple: more time in the migration zone. Instead of spending most of the safari driving between destinations, you have four nights in the Southern Serengeti and Ndutu area.",
    "That gives you the freedom to follow the herds and watch wildlife behaviour, and it is especially rewarding for photographers. You also experience Tarangire's elephants and baobabs, the Ngorongoro highlands and the crater along the way.",
    "Instead of measuring the safari by the number of animals seen, this journey is about quality time in the wilderness.",
  ],
  atAGlance: [
    { label: "Duration", value: "8 days / 7 nights" },
    { label: "Season", value: "December to March" },
    { label: "Best calving period", value: "Late January to February" },
    { label: "Start", value: "Kilimanjaro International Airport (JRO)" },
    { label: "Finish", value: "Arusha or Kilimanjaro International Airport" },
    { label: "Destinations", value: "Arusha · Tarangire · Ngorongoro · Ndutu" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle" },
  ],
  highlights: [
    "Four nights at Ndutu: The longest stay in the migration zone of any of our calving safaris.",
    "Three full migration days: Time to return, wait and follow the herds as they move.",
    "A night on the crater side: A relaxed transition before your descent into the Ngorongoro Crater.",
    "Tarangire: A full day among elephants and giant baobabs.",
    "Road or flight home: Choose what suits your onward plans.",
  ],
  itinerary: [
    arrivalDay("arusha"),
    {
      day: 2,
      title: "Arusha to Tarangire National Park and Karatu",
      description:
        "After breakfast, you leave for Tarangire and enjoy a full-day game drive among giant baobabs, elephants and the park's diverse wildlife. Your guide chooses the best areas according to the season and recent wildlife movements.\n\nYou stop for a picnic lunch before continuing your game drive. In the late afternoon, you leave the park and travel on to Karatu.",
      experience: "A full day among elephants and baobabs.",
      image: IMG.tarangire,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen stay in Karatu",
      stayId: "karatu",
    },
    {
      day: 3,
      title: "Karatu to the Ngorongoro Conservation Area",
      description:
        "After breakfast, you continue into the Ngorongoro Conservation Area. Depending on your accommodation, this day can be used for cultural or scenic experiences, or as a relaxed transition towards the crater.\n\nThe surrounding highlands offer spectacular scenery, coffee plantations, forests and traditional Maasai communities. Your guide will explain the history and ecological importance of the Ngorongoro ecosystem.",
      experience: "A slower day in the highlands.",
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen stay near the crater",
      stayId: "crater",
    },
    {
      day: 4,
      title: "Ngorongoro Crater to Ndutu",
      description:
        "Rise early and descend into the Ngorongoro Crater, where you spend several hours exploring the crater floor.\n\nAfter lunch, you begin the journey to the Southern Serengeti. As you approach Ndutu, the land opens into the famous short-grass plains. You arrive at your camp and settle into the heart of the migration area.",
      experience: "From the crater floor into the migration.",
      image: IMG.craterZebra,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 5,
      title: "Ndutu calving season",
      description:
        "This is your first complete day dedicated to the migration. You wake before sunrise and leave with your guide to search for newborn wildebeest, large nursery herds and predator activity.\n\nYou spend the day exploring different areas of Ndutu instead of rushing back to camp, with a picnic lunch surrounded by the wilderness. Your game drive continues until the late afternoon.",
      experience: "Your first complete day with the herds.",
      image: IMG.calves,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 6,
      title: "Ndutu predator and wildlife day",
      description:
        "This is another full day in the migration zone. Today your guide can adapt the route to what you found yesterday. Perhaps the herds have moved. Perhaps predators have been found in a particular area. Perhaps a large group of wildebeest has gathered near water.\n\nYour private safari gives you the freedom to spend more time observing rather than constantly travelling.",
      experience: "Following what the plains show you.",
      image: IMG.cheetahHerd,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 7,
      title: "A deeper Southern Serengeti experience",
      description:
        "This extra full day is what makes the eight-day safari so special. You are not forced to leave Ndutu immediately after seeing the migration. You have another opportunity to explore the surrounding plains and follow wildlife movements.\n\nDepending on conditions, your guide may explore around Ndutu, the nearby seasonal lakes and the wider Southern Serengeti. It is an excellent opportunity for photographers.\n\nWatch. Wait. Listen. Follow. Let Tanzania reveal itself naturally. You return to camp after your final sunset game drive.",
      experience: "One more day to follow the migration.",
      image: IMG.sunsetHerd,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 8,
      title: "Ndutu to Arusha by road or flight",
      description:
        "Enjoy your final morning in the Southern Serengeti. Depending on your departure time, you can take a last game drive before breakfast or leave after breakfast.\n\nYou then return by private safari vehicle towards Arusha, or transfer to the airstrip and fly. Your safari ends when you reach Arusha or Kilimanjaro International Airport.",
      experience: "A final morning in the Southern Serengeti.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("karatu", "Night 2", "Karatu and the highlands", STAYS_HIGHLANDS),
    stop("crater", "Night 3", "The Ngorongoro Crater area", STAYS_HIGHLANDS),
    stop("ndutu", "Nights 4, 5, 6 and 7", "Ndutu and the Southern Serengeti", STAYS_NDUTU),
  ],
  sections: [
    {
      heading: "What makes this safari different?",
      bullets: [
        "Built around the migration: Ndutu is the centrepiece, not one stop on a long northern circuit.",
        "Extended time in the Southern Serengeti: Four nights in the Ndutu area.",
        "Private safari: You are not tied to a large group or a rigid schedule.",
        "Experienced local guides: Knowledge of seasonal wildlife movements matters most during the migration.",
        "Flexible return: Choose a scenic road journey or a time-saving flight.",
      ],
    },
  ],
  faqs: [
    {
      question: "Why spend four nights at Ndutu?",
      answer:
        "The herds move with the rain, so more time means more chances to find them, and more chances to wait for natural behaviour. It is especially valuable for photographers.",
    },
    {
      question: "Can I fly back from Ndutu?",
      answer:
        "Yes, subject to availability. Tick the flight in the booking box, and we will include it in your quote. It is part of the Luxury and High-end luxury levels.",
    },
  ],
});
