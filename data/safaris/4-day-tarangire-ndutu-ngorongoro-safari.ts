import { IMG, RATES, STAYS_HIGHLANDS, STAYS_NDUTU, calvingTrip, stop } from "./shared";

// From Ombeni's "4-Day Tarangire, Ndutu & Ngorongoro Crater Safari" document,
// which quotes its own Mid-range and Luxury rates rather than the usual ones.
export const tarangireNdutuCrater4 = calvingTrip({
  slug: "4-day-tarangire-ndutu-ngorongoro-safari",
  seoTitle: "4-Day Tarangire, Ndutu & Crater Safari | Trust Tours",
  metaDescription:
    "Four private days in the calving season: Tarangire's elephants, the Ndutu plains and a Ngorongoro Crater game drive. From $1,980 per person.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "4-Day Tarangire, Ndutu & Ngorongoro Crater Safari",
  shortName: "4-Day Tarangire, Ndutu & Crater",
  days: 4,
  rates: {
    ...RATES,
    midRange: { min: 495, max: 595 },
    luxury: { min: 795, max: 995 },
  },
  heroImage: "/images/safaris/tarangire-baobabs.jpg",
  summary:
    "Tanzania's wildlife in four days: elephants beneath ancient baobabs in Tarangire, the Great Wildebeest Migration on the Ndutu plains and a game drive in the Ngorongoro Crater.",
  overview: [
    "This carefully planned safari combines Tarangire National Park, the Ndutu plains in the southern Serengeti ecosystem and the world-famous Ngorongoro Crater.",
    "You travel through elephant country beneath ancient baobab trees, explore the open grasslands where thousands of wildebeest gather to give birth, look for lions and cheetahs following the herds, and descend into the crater for an exceptional wildlife-viewing experience.",
    "It is ideal for couples, families, photographers and wildlife enthusiasts who want to see the calving season without committing to a longer itinerary.",
  ],
  atAGlance: [
    { label: "Duration", value: "4 days / 3 nights" },
    { label: "Starting point", value: "Arusha, Kilimanjaro Airport (JRO) or Arusha Airport (ARK)" },
    { label: "Safari style", value: "Private, with a professional driver-guide" },
    { label: "Destinations", value: "Tarangire · Ndutu · Ngorongoro Crater" },
    { label: "Best season", value: "Late December to March, especially January and February" },
  ],
  highlights: [
    "Tarangire: Elephant herds, baobab trees and the Tarangire River.",
    "Ndutu calving plains: Wildebeest, newborn calves, zebras, lions, cheetahs and hyenas.",
    "Ngorongoro Crater: An extended game drive, with a chance of seeing black rhino.",
    "Three very different landscapes: All in one four-day private safari.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arusha to Tarangire National Park and the highlands",
      description:
        "Your safari begins with a pickup from your hotel in Arusha, Kilimanjaro International Airport or Arusha Airport, depending on your arrival time. After a briefing on the route, wildlife, safety and photography, you leave for Tarangire National Park.\n\nTarangire is famous for its large elephant herds, ancient baobab trees, seasonal wetlands and beautiful savannah. The Tarangire River is an important water source, drawing elephants, zebras, wildebeest, buffalo and other wildlife. Your guide will help you search for lions, leopards, giraffes, impalas, warthogs, baboons and a remarkable variety of birds.\n\nYou enjoy a picnic lunch at an authorised site inside the park, then continue through different habitats, looking for elephant families, predators resting in the shade and animals gathering at water.\n\nIn the late afternoon, you leave the park and drive to Karatu or the Ngorongoro Highlands for dinner and the night.",
      experience: "Elephants, baobabs and the Tarangire River.",
      image: IMG.elephantsVehicle,
      meals: "Lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands-first",
    },
    {
      day: 2,
      title: "The highlands to the Ndutu plains",
      description:
        "After an early breakfast, you set off through the Ngorongoro Conservation Area towards the southern plains of the Serengeti ecosystem. This is a day of travel and wildlife viewing, so an early start matters. Your guide plans the route around your camp, road conditions and the latest news of the herds.\n\nNdutu is famous for its short-grass plains, seasonal lakes and the calving season of the Great Wildebeest Migration. From late December into March, large herds of wildebeest and zebras commonly gather here as the rains bring fresh grass.\n\nOn reaching the area, you begin exploring the plains in search of herds, newborn calves, zebras, gazelles and the predators that follow them. You may see lions resting in the grass, cheetahs scanning the plains, hyenas near the herds or jackals looking for food. A newborn calf standing for the first time can be an unforgettable highlight, although no individual sighting can ever be guaranteed.\n\nAfter a picnic lunch, you continue exploring through the afternoon, then reach your lodge or seasonal tented camp for dinner.",
      experience: "Into the calving plains of the Great Wildebeest Migration.",
      image: IMG.cheetahChase,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 3,
      title: "Morning on the Ndutu plains, then back to the highlands",
      description:
        "Wake early for a morning game drive across the Ndutu plains. Temperatures are cooler and many animals are moving or feeding, which makes this a rewarding time to look for wildebeest, young calves, zebras and predators.\n\nThe route depends on where the animals are gathering that morning. Your guide may explore open grasslands, seasonal wetlands, woodland edges and the areas around Lake Ndutu and Lake Masek, depending on access and the weather.\n\nAfter a picnic lunch, you travel on to the Ngorongoro Highlands, swapping the broad southern plains for cooler highland scenery. On the way, your guide can explain how the Serengeti ecosystem, the seasonal migration and the volcanic landscapes of northern Tanzania fit together. Dinner is at your lodge, ready for the crater the next day.",
      experience: "A last morning with the herds, then the cool highlands.",
      image: IMG.calves,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands-second",
    },
    {
      day: 4,
      title: "Ngorongoro Crater game drive and return to Arusha",
      description:
        "After an early breakfast, you descend into the spectacular Ngorongoro Crater for an extended game drive. This volcanic caldera holds grasslands, woodland, wetlands and water sources that support a high concentration of wildlife.\n\nLook for lions, elephants, buffalo, zebras, wildebeest, hippos, hyenas and other resident animals. The crater is also one of the places where you have a chance of seeing the endangered black rhino, although sightings are not guaranteed. You enjoy a picnic lunch at an authorised site, then continue exploring within the permitted visit schedule.\n\nAfterwards, you climb back to the rim and begin the journey to Arusha. We can drop you at your Arusha hotel, Arusha Airport or Kilimanjaro International Airport, as long as the timing is realistic.",
      experience: "A volcanic caldera full of wildlife to end your safari.",
      notes: [
        "Flight advice: The return journey can take several hours, and crater exit times, traffic and road conditions all affect your arrival. For international flights, allow a generous buffer or add a night in Arusha. Please check with us before booking a same-day flight.",
      ],
      image: IMG.crater,
      meals: "Breakfast and picnic lunch",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("highlands-first", "Night 1", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("ndutu", "Night 2", "Ndutu and the Southern Serengeti", STAYS_NDUTU),
    stop("highlands-second", "Night 3", "The Ngorongoro Highlands", STAYS_HIGHLANDS),
  ],
  sections: [
    {
      heading: "Solo travellers and larger groups",
      paragraphs: [
        "The prices shown are based on two people sharing a room. A solo traveller needs a tailored quotation, because one person carries the full cost of the private vehicle and guide.",
        "We also welcome larger families, friends, private groups and special-interest travellers. Their final price depends on the number of guests, rooms and vehicles needed.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I fly home on the last day?",
      answer:
        "Possibly, but allow plenty of time. The drive from the crater can take several hours, so please check with us before booking a same-day international flight. An extra night in Arusha may be the safer choice.",
    },
    {
      question: "How long do I spend at Ndutu?",
      answer:
        "One night, with game viewing on Day 2 and the morning of Day 3. If the calving season is your main goal, our other 4-day safari gives you two nights at Ndutu.",
    },
  ],
});
