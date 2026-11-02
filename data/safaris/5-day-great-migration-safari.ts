import { IMG, STAYS_HIGHLANDS, STAYS_NORTH_SERENGETI, STAYS_TARANGIRE, crossingTrip, stop } from "./shared";

// Cross Migration Safari, from Ombeni's "5-Day Tanzania Great Migration Safari
// with Trust Tours" document. His other 5-day document, with a Central Serengeti
// night, is close to data/safaris/5-day-cross-migration-safari.ts.
export const crossMigration5Tarangire = crossingTrip({
  slug: "5-day-great-migration-safari",
  seoTitle: "5-Day Cross Migration Safari via Tarangire | Trust Tours",
  metaDescription:
    "A private 5-day cross migration safari: Tarangire, the Ngorongoro Crater and two nights by the Mara River in the Northern Serengeti. From $2,275 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "5-Day Cross Migration Safari – Tarangire, Ngorongoro & the Mara River",
  shortName: "5-Day Cross Migration Safari via Tarangire",
  days: 5,
  heroImage: IMG.riverHerd.src,
  summary:
    "A five-day private safari through Tanzania's Northern Circuit, from the elephants of Tarangire and the Ngorongoro Crater to two nights near the Mara River.",
  overview: [
    "If you have limited time but want to experience one of Africa's greatest wildlife spectacles, this five-day private safari takes you deep into Tanzania's Northern Circuit. You combine the elephants and baobabs of Tarangire and the wildlife of the Ngorongoro Crater with the plains of the Serengeti.",
    "It is especially well suited to the Northern Serengeti season, when enormous herds of wildebeest and zebra move towards the Mara River. With careful planning, an experienced guide and a camp close to the migration, you have a real opportunity to see the dramatic scenes the Great Migration is famous for.",
    "You travel in a private 4×4 safari vehicle with a professional guide, so the daily schedule can stay flexible. Rather than rushing from one place to another, your guide adjusts each game drive around wildlife activity, the weather and, above all, the location of the herds.",
    "The migration isn't a single event on a fixed date. It is a continuous movement of wildebeest, zebra and other grazers across the Serengeti ecosystem, and if the herds move away from one crossing point, we follow the wildlife.",
  ],
  atAGlance: [
    { label: "Duration", value: "5 days / 4 nights" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Main experience", value: "Great Migration and Mara River crossing search" },
    { label: "Best period", value: "July to October" },
    { label: "Route", value: "Arusha · Tarangire · Ngorongoro Crater · Northern Serengeti" },
    { label: "Start", value: "Kilimanjaro Airport or Arusha" },
    { label: "Finish", value: "Arusha or Kilimanjaro Airport, by road or optional flight" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with a pop-up roof" },
  ],
  highlights: [
    "Tarangire: Ancient baobabs and large elephant herds on your first afternoon.",
    "Ngorongoro Crater: A long game drive and picnic lunch on the crater floor.",
    "Two nights in the north: Sleep close to the herds around the Mara River.",
    "A full migration day: Day 4 is given entirely to the herds and the river.",
    "A flexible private safari: Your guide follows the wildlife, not a fixed timetable.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Kilimanjaro Airport or Arusha to Tarangire National Park",
      description:
        "Your adventure begins with a warm welcome at Kilimanjaro International Airport or your hotel in Arusha. Your guide helps with your luggage, introduces your private safari vehicle and briefs you on the route, the wildlife, photography and why flexibility matters when following the Great Migration.\n\nYou then drive to Tarangire National Park, and your safari begins as soon as you enter. The park is famous for its huge ancient baobabs, seasonal wetlands and large elephant population. In the dry season, wildlife gathers around the Tarangire River and other permanent water sources.\n\nYour guide takes you through different habitats in search of elephants, giraffes, zebras, wildebeest, buffalo, antelope and many bird species. Lions are often seen, while leopards and cheetahs are possible with patience. As the sun sets, you leave the park for your lodge, dinner and a briefing on the next day's journey.",
      experience: "Baobabs, elephants and a first game drive in soft afternoon light.",
      image: IMG.tarangireBaobab,
      meals: "Lunch and dinner",
      accommodation: "Your chosen stay in the Tarangire area",
      stayId: "tarangire",
    },
    {
      day: 2,
      title: "Tarangire to the Ngorongoro Crater",
      description:
        "After an early breakfast, you leave for the Ngorongoro Conservation Area. The scenery changes as you climb from the Tarangire ecosystem towards the crater rim, where the air turns cooler.\n\nYou descend about 600 metres into the Ngorongoro Crater, an ancient volcanic caldera of grasslands, wetlands and woodland with a permanent water supply. Your guide searches the crater floor for the Big Five. You may find large herds of buffalo, wildebeest and zebra, elephants in the forested areas, hippos in the wetlands and lions on the plains. Cheetahs may also be seen, and the endangered black rhino can sometimes be found in the open grasslands.\n\nYou enjoy a picnic lunch at a designated site, then explore more of the crater, spending longer wherever the sightings are best. Later you climb out to your lodge in the highlands, where your guide explains the plan for entering the Serengeti.",
      experience: "A full crater safari surrounded by the caldera walls.",
      image: IMG.crater,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 3,
      title: "Ngorongoro through the Serengeti to the north",
      description:
        "After breakfast, you set off for Serengeti National Park. The drive becomes part of the safari as you cross the conservation area and the land opens into endless plains. This is the landscape where the wildebeest, zebra and other grazers of the Great Migration make their journey.\n\nYour guide keeps track of the herds and chooses the best route towards the migration zone. In the crossing season, your game drive focuses on the areas around the Mara River and the northern migration corridors. Predators such as lions, cheetahs, leopards and hyenas are drawn to the herds, so this can be a very rewarding time for sightings.\n\nYou reach your camp or lodge in the late afternoon or early evening. In a seasonal tented camp, the sounds of the Serengeti are all around you after dinner.",
      experience: "Across the great plains and into the migration country.",
      notes: [
        "This is a long day, because the Northern Serengeti is a long way from the crater highlands. Your time in the north is what makes it worthwhile.",
      ],
      image: IMG.northPlains,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 4,
      title: "Full-day Great Migration safari at the Mara River",
      description:
        "Today is the highlight of your safari. You wake before sunrise and leave with your guide while the air is cool, the light is excellent and many predators are still active. Your guide watches how the wildebeest and zebra are moving and chooses the most promising place to explore. If large herds are gathering near the Mara River, the day may centre on the crossing zones.\n\nThe tensest moments often come before a crossing. Thousands of wildebeest can gather on the bank, seem ready to go, then suddenly turn away. Your guide positions the vehicle responsibly and within park rules, so you can watch without disturbing them.\n\nAfter a picnic or camp lunch, you carry on through the migration zone. If the herds cross, you may see thousands of animals pour down the bank and fight the current to the far side, with Nile crocodiles in the water and lions and hyenas nearby. If they don't, your guide turns to the wider Northern Serengeti and its other wildlife. You return to camp around sunset.",
      experience: "A whole day with the herds, from sunrise to sunset.",
      image: IMG.crocodile,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 5,
      title: "Final game drive and return to Arusha or Kilimanjaro",
      description:
        "Your last morning starts with an early breakfast, or a breakfast packed for the road, and a final sunrise game drive through the Northern Serengeti. If the herds are still nearby, your guide tries to give you more time with them.\n\nAfter the drive, you begin your journey out of the Serengeti. The route depends on your onward plans. If you are flying back, you transfer to the airstrip. If you are returning by road, you begin the long drive towards Arusha or Kilimanjaro International Airport. With a later flight, it may be possible to have lunch in Arusha or arrange a day room before your airport transfer.",
      experience: "One last sunrise in the Serengeti.",
      notes: [
        "If you have an international flight on the same day, please check the timing with us first. The road journey from the north takes most of the day.",
      ],
      image: IMG.flight,
      meals: "Breakfast and lunch",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("tarangire", "Night 1", "Tarangire and the Manyara area", STAYS_TARANGIRE),
    stop("highlands", "Night 2", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("north", "Nights 3 and 4", "Northern Serengeti and the Mara River", STAYS_NORTH_SERENGETI),
  ],
  sections: [
    {
      heading: "A safari that follows the herds",
      paragraphs: [
        "With a migration safari, your guide and your location matter as much as your accommodation. A private vehicle means your guide can stay longer at a great sighting, change the route as the animals move and position you well for photography.",
        "We may need to change the exact camp or route within the Serengeti, depending on the herds, availability and seasonal movements. We would discuss any change with you first and, wherever possible, keep to the same or a higher standard.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is this a good first safari?",
      answer:
        "Yes. In five days you see Tarangire, the Ngorongoro Crater and the Northern Serengeti, which gives you a wide range of landscapes and wildlife. The pace is quite full, so a longer trip suits you better if you prefer a slower safari.",
    },
    {
      question: "Why aren't there any nights in Central Serengeti?",
      answer:
        "This route gives you Tarangire instead. You pass through the Serengeti on Day 3 on your way north. If you would rather have a night in the centre, the 5-day safari via Central Serengeti is the better choice.",
    },
    {
      question: "Is the flight back included?",
      answer:
        "Not at Mid-range, where it is an optional add-on. It is part of the Luxury and High-end luxury levels. We confirm flights together with your camp.",
    },
  ],
});
