import type { TripPackage } from "@/data/packages";
import { SAFARI_ADDONS } from "@/data/addons";
import { CONTACT_BULLETS } from "@/data/kilimanjaro/shared";
import { calvingLinks } from "./links";

const SLUG = "5-day-ndutu-migration-safari";

// Route and the $3,760 price come from Ombeni's "5-DAY TANZANIA CALVING-SEASON
// SAFARI" document. Day text also draws on his other three 5-day documents.
// Draft: only the 2-guest rate is stated, so other sizes show "Ask".
export const ndutuCalving5: TripPackage = {
  slug: SLUG,
  seoTitle: "5-Day Ndutu Calving Safari Tanzania | Trust Tours",
  metaDescription:
    "Private 5-day Ndutu calving safari: Tarangire, Ngorongoro Crater, two nights among the herds, the Serengeti and a flight to Arusha. From $3,760 per person.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  category: "safari",
  tags: ["family"],
  title: "5-Day Ndutu Calving Safari – Tarangire, Ngorongoro & Serengeti",
  shortName: "5-Day Ndutu Calving Safari",
  days: 5,
  priceFromUSD: 3760,
  priceNote:
    "Indicative price per person for 2 guests sharing a room on a private mid-range safari. Your written quote confirms the final price for your dates.",
  groupPricing: {
    tiers: [{ pax: 2, usd: 3760 }],
    askSizes: [1, 3, 4, 5, 6],
    note: "Indicative mid-range price for 2 guests sharing, including the flight from the Serengeti to Arusha.",
  },
  addOns: SAFARI_ADDONS,
  stays: ["kudu-lodge", "ndutu-serengeti-heritage", "serengeti-heritage-tented-camp"],
  links: calvingLinks(SLUG),
  tier: ["mid-range"],
  heroImage: "/images/serengeti-plains.jpg",
  gallery: [],
  summary:
    "A private five-day safari built around Tanzania's calving season: two nights on the Ndutu plains among wildebeest, newborn calves and predators, with Tarangire, the Ngorongoro Crater and Central Serengeti along the way.",
  overview: [
    "Every year, enormous herds of wildebeest and zebra gather on the short-grass plains of Ndutu and the Southern Serengeti to give birth. Thousands of calves are born within a few weeks, and lions, cheetahs and hyenas follow close behind. It is one of the great wildlife events in Africa, and February is traditionally one of the best months to see it.",
    "This five-day safari is designed to put you in the middle of it. Rather than rushing through as many parks as possible, we choose quality over quantity. You begin with the elephants and giant baobabs of Tarangire, spend a morning on the floor of the Ngorongoro Crater, and then settle in for two nights in the calving grounds.",
    "Two nights matter. Arriving late in the afternoon and leaving the next morning is not enough to understand what is happening on the plains. Staying longer gives your guide a full day to follow the herds, wait at a promising sighting and choose fresh areas as conditions change.",
    "From Ndutu, the safari continues north into Central Serengeti, where the landscape shifts to rocky kopjes, acacia trees and open grassland. After a last morning game drive, you fly back to Arusha instead of spending the day on the road, which leaves more of your time for the safari itself.",
    "This is a private safari. The vehicle and guide are reserved for your party alone, so you decide how long to stay at a sighting, when to stop for photographs and when to break for lunch. No other group's timetable sets the pace.",
  ],
  atAGlance: [
    { label: "Duration", value: "5 days / 4 nights" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Start / finish", value: "Arusha / flight from the Serengeti back to Arusha" },
    { label: "Route", value: "Tarangire · Ngorongoro Crater · Ndutu · Central Serengeti" },
    { label: "Best time", value: "December to March, usually peaking in late January and February" },
    { label: "Vehicle", value: "4×4 safari vehicle with a pop-up roof" },
    { label: "Ideal for", value: "Couples, families, private travellers and wildlife photographers" },
  ],
  highlights: [
    "Two nights in the calving grounds: A full day on the Ndutu plains, with time to follow the herds instead of passing through.",
    "Newborn calves and predators: Look for wildebeest and zebra with their young, along with the lions, cheetahs and hyenas drawn to them.",
    "Ngorongoro Crater: A morning game drive among buffalo, hippos, flamingos and, with luck, black rhino.",
    "Tarangire's elephants: Begin with a full game drive among the park's great herds and ancient baobabs.",
    "Central Serengeti: Watch the scenery change to kopjes and acacia trees on a game drive north.",
    "No long drive home: Fly from the Serengeti to Arusha after your last game drive.",
  ],
  pricingDetails: [
    "The price shown is for two guests sharing a room on a private mid-range safari. It covers the vehicle, guide, park fees, four nights of accommodation and your flight from the Serengeti to Arusha.",
    "A private safari costs less per person as your group grows, because you share one vehicle and guide. A solo traveller carries those costs alone, so we quote one traveller and groups of three to six directly rather than estimating a price here.",
    "Calving season is one of the busiest periods in the Southern Serengeti. We confirm your final price, camps, payment schedule and cancellation terms in writing before you pay a deposit.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arusha to Tarangire National Park and Karatu",
      description:
        "Your private safari guide meets you in Arusha after breakfast for a short briefing on the route, the wildlife you may see and the days ahead. You then set off through the Tanzanian countryside, passing farms and villages on the way to Tarangire National Park.\n\nTarangire is one of northern Tanzania's finest wildlife areas, known for its large elephant population, ancient baobab trees and the river that draws animals through the park. The game drive begins as soon as you enter. Your guide will look for elephants moving in family groups, giraffes browsing among the trees, zebras, wildebeest, buffalo, impala, warthogs and a wide range of birds. Lions and leopards live here too, although sightings can never be guaranteed.\n\nYou stop for a picnic lunch at an approved site, then continue exploring as the afternoon light softens. The baobabs make a memorable backdrop for photographs, and because this is a private safari, your guide can adjust the route to suit wildlife activity and your interests.\n\nLate in the day you leave the park and drive to Karatu, a welcoming highland town and a convenient base for the Ngorongoro Crater. Dinner and a comfortable bed are waiting at your lodge.",
      experience: "A first taste of Tanzania among elephants and giant baobabs.",
      image: {
        src: "/images/tarangire-giraffes.jpg",
        alt: "Giraffes in Tarangire National Park on the first day of the safari",
      },
      meals: "Lunch and dinner",
      accommodation: "Kudu Lodge, Karatu, or similar",
      stayId: "kudu-lodge",
    },
    {
      day: 2,
      title: "Ngorongoro Crater to Ndutu",
      description:
        "An early breakfast starts one of the safari's biggest days. You drive to the Ngorongoro Conservation Area and descend to the crater floor, a remarkable natural landscape formed by the collapse of a great volcano. Its grasslands, wetlands and woodland patches support a high concentration of wildlife in a compact area.\n\nDuring the morning game drive your guide will search for lions, elephants, buffalo, hippos, zebras, wildebeest, gazelles, hyenas and flamingos. With luck, you may also find the endangered black rhino, one of the crater's most sought-after animals. After a picnic lunch inside the crater, you climb back up to the rim.\n\nFrom the highlands, the road continues towards Ndutu and the Southern Serengeti ecosystem. The landscape gradually opens into wide plains, seasonal lakes and acacia-dotted grassland, and the character of the safari changes completely.\n\nDepending on your arrival time and wildlife activity, you may enjoy your first game drive among the migration herds before reaching camp. In February, this area can be alive with wildebeest, zebra, calves and predators. Dinner is at your seasonal tented camp, close to the wilderness.",
      experience: "From the crater floor to the edge of the calving grounds in a single day.",
      notes: [
        "This is a long day of travel and wildlife viewing. We plan the crater departure carefully, and the final timing depends on your camp's exact location and road conditions.",
      ],
      image: {
        src: "/images/ngorongoro-rhino.jpg",
        alt: "Two rhinos grazing on the floor of the Ngorongoro Crater",
      },
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Ndutu Serengeti Heritage, Ndutu, or similar",
      stayId: "ndutu-serengeti-heritage",
    },
    {
      day: 3,
      title: "Full-day calving-season game drive at Ndutu",
      description:
        "This is the most important wildlife day of the safari. You wake before sunrise and head out after an early breakfast, because the first hours of the day are especially valuable for predator activity and photography. The golden light is perfect for capturing wildebeest, newborn calves, zebras, lions, cheetahs, hyenas, giraffes and birds of prey.\n\nThe aim is not simply to drive around looking for animals, but to understand what is happening on the plains. Your guide watches the movement of the herds and checks recent sightings, then adjusts the route to where wildlife activity is strongest. You may come across large nursery groups of mothers and newborn calves, with predators waiting nearby.\n\nAround midday, you stop for a picnic lunch in an approved area, then continue into the afternoon. Because the safari is private, you can stay longer at an exceptional sighting instead of following a fixed schedule. You may also see jackals, ostriches, gazelles, vultures and other birdlife, depending on the areas you visit.\n\nAs the sun lowers over the plains, you return to camp for dinner and, conditions allowing, an evening around the campfire.",
      experience: "A whole day among the herds, at the heart of the Great Migration.",
      image: {
        src: "/images/ndutu-calving.jpg",
        alt: "Four cheetahs watching the plains from a grassy mound",
      },
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Ndutu Serengeti Heritage, Ndutu, or similar",
      stayId: "ndutu-serengeti-heritage",
    },
    {
      day: 4,
      title: "Ndutu to Central Serengeti",
      description:
        "After an early breakfast you have one more morning in the Ndutu area, with another chance to find the herds and the predators following them. Herd movements can change from one day to the next, so your guide will choose the route based on the latest wildlife activity.\n\nLate in the morning you begin travelling gradually north towards Central Serengeti. This is not simply a transfer. The drive itself becomes a game drive, and you can stop whenever something interesting appears.\n\nAfter lunch, the scenery changes from the short-grass plains of Ndutu to the classic Serengeti landscape of rocky kopjes, grassland and acacia trees. Keep watch for lions, leopards, cheetahs, elephants, giraffes, buffalo, hippos, zebras, wildebeest and gazelles.\n\nYou reach your camp in time for a Serengeti sunset. Dinner and your last night on safari follow. If you have added the hot-air balloon, we arrange it around this part of the safari and the balloon operator's flying area.",
      experience: "Following the wildlife north into the classic Serengeti landscape.",
      meals: "Breakfast, lunch and dinner",
      accommodation: "Serengeti Heritage Tented Camp, Central Serengeti, or similar",
      stayId: "serengeti-heritage-tented-camp",
    },
    {
      day: 5,
      title: "Final game drive and flight to Arusha",
      description:
        "Wake early for your last Serengeti game drive, enjoying the cool morning air. Your guide will choose an area close to the airstrip while making the most of your final hours in the park. Depending on your flight schedule, you either return to camp for breakfast or take a packed breakfast with you.\n\nYou then transfer to the Serengeti airstrip, watching for wildlife along the way, and board your flight to Arusha. Flying saves a long road journey and keeps your last day focused on the safari.\n\nIn Arusha, our representative meets you. From there, you can continue to Kilimanjaro International Airport, stay overnight in Arusha, connect with your international flight or travel on to Zanzibar.",
      experience: "One last Serengeti sunrise before flying home.",
      notes: [
        "If you have an international flight on the same day, please share your departure time so that we can plan a safe connection. An extra night in Arusha may be the better choice.",
      ],
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  included: [
    "Vehicle and guide: Private 4×4 safari vehicle with a professional English-speaking guide.",
    "Game drives: All game drives listed in the itinerary.",
    "Park fees: Tarangire National Park, Ngorongoro Conservation Area and crater, and Serengeti National Park fees.",
    "Government fees: Applicable vehicle and government tourism fees.",
    "Accommodation: Four nights in the selected category, based on two people sharing a room.",
    "Meals: Breakfast, lunch and dinner as listed each day.",
    "Drinking water: Provided during the safari.",
    "Pickup: From your Arusha hotel or another agreed point in Arusha.",
    "Road transfers: All road transfers described in the itinerary.",
    "Flight: Serengeti to Arusha, including airstrip transfers.",
  ],
  excluded: [
    "International flights to and from Tanzania.",
    "Tanzania visa fees and any passport or travel-document costs.",
    "Travel, medical and evacuation insurance.",
    "Single-room supplements for guests who do not share.",
    "Meals, drinks or services not listed as included in the itinerary.",
    "Alcoholic drinks, soft drinks, laundry, telephone charges and personal expenses.",
    "Tips for your driver-guide and accommodation staff.",
    "Optional activities, including the hot-air balloon safari ($600 per person), cultural visits ($80 per person) and guided walking activities ($85 per person).",
    "Extra nights, or changes to the itinerary requested after confirmation.",
    "Medical expenses or costs arising from personal emergencies.",
  ],
  sections: [
    {
      heading: "When is the best time for a Ndutu calving safari?",
      paragraphs: [
        "The herds are normally concentrated around Ndutu and the Southern Serengeti from December to March, with January and February usually the core of the calving season. This is why February is such a popular time to book this safari.",
        "The migration follows the rain and the grazing, so its exact location changes from year to year and even from week to week. We monitor seasonal conditions and position your safari around the best available wildlife areas.",
      ],
      note: "No responsible operator can guarantee that the herds will be in one exact place on a particular day. Wildlife movements and sightings are natural events.",
    },
    {
      heading: "Why this route works",
      bullets: [
        "Tarangire: Gives you an excellent first safari day, with wildlife that is quite different from the plains ahead.",
        "Ngorongoro: Adds one of Africa's most spectacular landscapes and rich wildlife viewing.",
        "Ndutu: The centrepiece of the trip, with two nights focused on the calving season.",
        "Central Serengeti: Shows you a different side of the Serengeti, with good wildlife viewing all year.",
        "Flight to Arusha: Avoids a long final road journey and makes five days go much further.",
        "Optional balloon: Adds a memorable extra for those who want it, without every traveller paying for it.",
      ],
    },
    {
      heading: "What a private safari gives you",
      paragraphs: [
        "With a private safari you are paying for freedom as much as for a vehicle. If you find a spectacular lion sighting, you can stay longer. If you want to photograph the calving grounds, you can take your time. If someone in your party is tired, or you prefer an earlier lunch or a later start, your guide can adapt the day.",
        "That flexibility is especially valuable for families, keen photographers and anyone who wants to travel at their own pace.",
      ],
    },
    {
      heading: "Prefer a more luxurious safari?",
      paragraphs: [
        "The same route can be arranged in premium lodges and exclusive seasonal camps, with a private sundowner on your last evening and a sunrise balloon flight as natural additions. Tick the luxury upgrade in the booking box and we will include it in your quote.",
      ],
    },
    {
      heading: "Book your Ndutu calving safari early",
      paragraphs: [
        "The calving season is one of the most sought-after periods in the Southern Serengeti, and the best-placed seasonal camps have limited space. We recommend confirming your Ndutu accommodation and safari vehicle as early as you can.",
        "To request a quote, send us your preferred travel dates, number of travellers, accommodation level and room arrangements. We will check availability and reply with a written itinerary that clearly sets out the accommodation, meals, park fees, transport, flight and exclusions.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "When is the Ndutu calving season?",
      answer:
        "The herds are normally around Ndutu and the Southern Serengeti from December to March, with calving usually peaking in January and February. The exact timing and location change with the rain.",
    },
    {
      question: "Will I definitely see newborn calves?",
      answer:
        "We can't guarantee it, because wildlife sightings are natural events. Travelling in the core of the season and spending two nights at Ndutu gives you a strong chance, and your guide adjusts the route daily to follow the herds.",
    },
    {
      question: "How much does this safari cost?",
      answer:
        "The indicative mid-range price is $3,760 per person for two guests sharing, including the flight from the Serengeti to Arusha. Ask us for a quote for one traveller or a group of three to six.",
    },
    {
      question: "Is the flight back to Arusha included?",
      answer:
        "Yes, the flight from the Serengeti to Arusha and the airstrip transfers are included. If you would rather return by road, tell us when you request your quote. The drive is long, so it uses much of the final day.",
    },
    {
      question: "Is this safari suitable for families?",
      answer:
        "Yes. Because it is private, your guide can adapt the pace, the start times and the length of each game drive to suit your family. Day 2 is long, so tell us your children's ages and we will advise you on the best plan.",
    },
    {
      question: "Can I add a hot-air balloon safari?",
      answer:
        "Yes. A Serengeti balloon flight costs $600 per person and is subject to weather and availability. Tick it in the booking box and we will arrange it around your safari.",
    },
    {
      question: "Which lodges and camps will I stay in?",
      answer:
        "We plan this route around Kudu Lodge in Karatu, Ndutu Serengeti Heritage at Ndutu and Serengeti Heritage Tented Camp in Central Serengeti, or similar stays. Your written quote confirms the exact properties for your dates.",
    },
    {
      question: "How does this compare with your other calving safaris?",
      answer:
        "The 4-day safari is the shortest way to reach Ndutu. This 5-day trip adds Tarangire and Central Serengeti, while the 6-day and 10-day safaris give you more time. Tell us your dates and we will suggest the best fit.",
    },
  ],
  bestMonths: ["Dec", "Jan", "Feb", "Mar"],
  oldUrl: "/booking/5-day-mid-range-tarangire-ngorongoro-crater-and-ndutu-migration-safari/",
};
