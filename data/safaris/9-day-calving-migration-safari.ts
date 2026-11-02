import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, STAYS_NDUTU, calvingTrip, stop } from "./shared";

// From Ombeni's "9-Day Tanzania Private Safari" document. Prices follow the
// usual daily rates; the document's own $3,450 target is an open question.
export const calvingMigration9 = calvingTrip({
  slug: "9-day-calving-migration-safari",
  seoTitle: "9-Day Tanzania Migration & Calving Safari | Trust Tours",
  metaDescription:
    "Nine private days: walking and canoeing in Arusha National Park, Tarangire, the Crater, Ndutu and Central Serengeti, with a flight back. From $4,095 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "9-Day Tanzania Private Safari – Great Migration, Ngorongoro & Serengeti",
  shortName: "9-Day Calving Migration Safari",
  days: 9,
  flightIncluded: true,
  heroImage: "/images/safaris/tarangire-elephants-vehicle.jpg",
  summary:
    "A varied, unhurried nine days: a walking safari and canoeing in Arusha National Park, Tarangire's elephants, the Ngorongoro Crater, the Ndutu plains and Central Serengeti's big cats.",
  overview: [
    "This safari begins straight away, with no separate arrival day. You start in Arusha National Park, with a guided walking safari alongside an authorised armed ranger and a canoeing excursion beneath Mount Meru.",
    "You then explore Tarangire National Park, famous for its elephant herds and magnificent baobabs, before descending into the Ngorongoro Crater, one of the most remarkable natural landscapes in Africa.",
    "The journey continues to Ndutu and the Southern Serengeti, where you spend dedicated time searching for the migrating wildebeest and zebras. Several nights in Central Serengeti follow, an outstanding area for lions, leopards, cheetahs and elephants.",
    "The aim is a safari that feels varied, unhurried and genuinely memorable, with enough time in the key wildlife areas rather than simply travelling from one place to the next.",
  ],
  atAGlance: [
    { label: "Duration", value: "9 days / 8 nights" },
    { label: "Safari style", value: "Private, with a dedicated professional driver-guide" },
    { label: "Destinations", value: "Arusha National Park · Tarangire · Ngorongoro · Ndutu · Central Serengeti" },
    { label: "Start", value: "Arusha" },
    { label: "Finish", value: "Flight from the Serengeti to Arusha" },
    { label: "Special activities", value: "Walking safari and canoeing in Arusha National Park" },
  ],
  highlights: [
    "Three ways to see wildlife: On foot with a ranger, from a canoe and by safari vehicle.",
    "Tarangire: Elephant families among ancient baobabs.",
    "Ngorongoro Crater: An extensive game drive on the crater floor.",
    "Three nights at Ndutu: Two full days on the southern plains.",
    "Three nights in Central Serengeti: Time for lions, leopards and cheetahs.",
    "No long drive home: Fly from the Serengeti back to Arusha.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arusha National Park: walking safari, wildlife and canoeing",
      description:
        "After breakfast, your guide drives you to Arusha National Park, a beautiful wilderness beneath Mount Meru. Unlike a safari spent entirely in a vehicle, today lets you experience the landscape on foot and from the water.\n\nIn the morning, you enjoy a guided walking safari with an authorised armed park ranger. As you walk through forest and open areas, your ranger explains the plants, animal tracks, birdlife and wildlife behaviour.\n\nAfter lunch, you go to the Momella Lakes area for a canoeing excursion, subject to park arrangements and the weather. From the water, you can admire the peaceful scenery and watch waterbirds, with Mount Meru as a spectacular backdrop when the weather is clear.\n\nLater, you continue exploring the park by vehicle, then return to Arusha to relax and prepare for the safari ahead.",
      experience: "Tanzania's wildlife on foot, from a canoe and by vehicle.",
      meals: "Lunch and dinner",
      accommodation: "Your chosen stay in Arusha",
      stayId: "arusha",
    },
    {
      day: 2,
      title: "Tarangire National Park: elephants, baobabs and savannah",
      description:
        "After breakfast, you leave Arusha for Tarangire National Park and a full day of wildlife exploring. Your guide follows wildlife-viewing tracks in search of elephants, giraffes, zebras, wildebeest, impalas and other animals. Tarangire is especially rewarding for watching elephant families feeding, moving between trees and gathering together.\n\nAround midday, you stop at a designated picnic site. In the afternoon, you continue through different parts of the park, among ancient baobabs, acacia woodland and open grassland.\n\nLate in the afternoon, you leave Tarangire and continue to Karatu to relax and prepare for the crater.",
      experience: "A full day in one of Tanzania's most distinctive elephant habitats.",
      image: IMG.baobabs,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 3,
      title: "Ngorongoro Crater, then on to Ndutu",
      description:
        "After an early breakfast, you travel to the Ngorongoro Conservation Area. As you approach the crater rim, the scenery becomes increasingly dramatic, with sweeping views across the huge volcanic caldera.\n\nYou descend for an extensive game drive through grassland, woodland and wetlands. Your guide will search for zebras, wildebeest, buffaloes, hippos and lions, while keeping an eye out for the endangered black rhino. You stop at a designated picnic area, and continue learning about the area's ecology and conservation.\n\nAfterwards, you climb to the rim and continue to Ndutu in the Southern Serengeti ecosystem, ready for the days of migration ahead.",
      experience: "The crater's scenery and wildlife, then the southern plains.",
      image: IMG.craterRhino,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 4,
      title: "Ndutu and the Southern Serengeti: searching for the migration",
      description:
        "After breakfast, you set out for a full day of wildlife viewing across the Ndutu plains. The region is an important part of the Great Wildebeest Migration route, and the herds move through the wider ecosystem with the seasonal rain and fresh grazing.\n\nYour guide will search for concentrations of wildebeest and zebras, and for predators such as lions, cheetahs and hyenas. The open landscape is wonderful for photographing large herds stretching across the horizon, especially in the early sunlight.\n\nAround midday, you stop for a picnic lunch, then plan the afternoon around current wildlife reports, road conditions and the location of the herds. Sleeping in this area means you can start the next day without travelling from a distant base.",
      experience: "A whole day dedicated to the southern plains.",
      image: IMG.plainsHerds,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 5,
      title: "A second full day of migration and wildlife at Ndutu",
      description:
        "Today is dedicated to exploring Ndutu at a relaxed pace. Rather than leaving after one game drive, you have a second full day to visit different areas and respond to changing wildlife movements.\n\nYou may see large herds of wildebeest and zebras, gazelles grazing in the grass, giraffes moving through the landscape, and predators resting or hunting. During the early-year calving period, this region can be especially rewarding for watching newborn wildebeest and their mothers.\n\nAfter a picnic lunch, your guide adjusts the route to recent sightings, the weather and road conditions, so you can spend more time where wildlife activity is strongest.",
      experience: "More time to search for the herds, without rushing.",
      image: IMG.calf,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 6,
      title: "Ndutu to Central Serengeti, across the great plains",
      description:
        "After breakfast, you leave Ndutu for Central Serengeti, moving through open grasslands, scattered acacia trees and the rocky outcrops known as kopjes.\n\nWhere permitted and practical, your guide adds wildlife viewing along the route, looking for zebras, wildebeest, giraffes, antelope and predators. You stop for a picnic lunch at a suitable site.\n\nAs you approach the Seronera area, the habitats change, with new chances to search for resident lions, elephants and leopards. You explore selected wildlife areas in the afternoon before reaching camp.",
      experience: "From the migration plains into the heart of the Serengeti.",
      image: IMG.serengetiLion,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in Central Serengeti",
      stayId: "central-serengeti",
    },
    {
      day: 7,
      title: "Central Serengeti: lions, leopards, cheetahs and endless plains",
      description:
        "You leave after breakfast for a full day of game viewing in Central Serengeti, particularly around the Seronera ecosystem, known for its diverse habitats and resident wildlife.\n\nDuring the morning, your guide looks for lions resting or moving across the plains, cheetahs scanning open grassland and leopards in suitable woodland. You may also meet elephants, giraffes and zebras. Along the way, you learn about animal behaviour and predator-prey relationships.\n\nAfter a picnic lunch, you can spend more time searching for big cats, exploring rocky kopjes or watching herds of elephants, depending on your interests and the day's sightings.",
      experience: "A full day in one of the Serengeti's most rewarding regions.",
      image: IMG.serengetiLions,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in Central Serengeti",
      stayId: "central-serengeti",
    },
    {
      day: 8,
      title: "Central Serengeti: a flexible day for more wildlife",
      description:
        "Today gives you another full day in Central Serengeti, with no long transfer to think about. You set out with your guide to explore areas chosen around recent wildlife activity, your interests and the conditions.\n\nThe morning may focus on predators, following reports of lion activity, or exploring open plains where zebras, wildebeest and gazelles are grazing. After a picnic lunch, the extra day gives your guide the freedom to return to promising areas and allow more time at interesting sightings.\n\nIn the evening, there is time to reflect on the contrasts of your journey, from Arusha National Park's forest and lakes to Tarangire's baobabs, Ngorongoro's volcanic scenery and Ndutu's migration plains.",
      experience: "More time in the Serengeti, at a comfortable pace.",
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in Central Serengeti",
      stayId: "central-serengeti",
    },
    {
      day: 9,
      title: "Final Serengeti morning and flight to Arusha",
      description:
        "After breakfast, you enjoy a final morning game drive, depending on your flight time. This is your last chance to photograph wildlife and enjoy the peaceful plains. Your guide plans the timing carefully, so that you reach the airstrip on time.\n\nYou then board your scheduled flight from the Serengeti to Arusha, subject to airline availability. Travelling by air avoids a long overland journey. On arrival in Arusha, you continue with your onward travel plans, or transfer to extra accommodation if you have requested another night.",
      experience: "A last look at the Serengeti before flying back to Arusha.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("highlands", "Night 2", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("ndutu", "Nights 3, 4 and 5", "Ndutu and the Southern Serengeti", STAYS_NDUTU),
    stop("central-serengeti", "Nights 6, 7 and 8", "Central Serengeti", STAYS_CENTRAL_SERENGETI),
  ],
  sections: [
    {
      heading: "Why this safari is different",
      paragraphs: [
        "The Serengeti is famous for the Great Migration, but it is also home to resident wildlife that makes game drives rewarding all year. Pairing Ndutu with Central Serengeti means you see both sides: the herds on the southern plains, and the predators of the Seronera area.",
        "By the end, you will have experienced several very different sides of Tanzania, from a ranger-guided walk and a canoe trip to elephant-filled savannah, an extraordinary volcanic crater, seasonal migration plains and predator-rich grassland.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is the flight from the Serengeti included?",
      answer:
        "Yes, your flight from the Serengeti to Arusha is part of this itinerary, subject to airline availability. It saves a long drive on your last day.",
    },
    {
      question: "Is there a separate arrival day?",
      answer:
        "No, the safari starts on Day 1 in Arusha National Park. If you land the day before, or want a rest first, we can add a night in Arusha.",
    },
    {
      question: "Are the walking safari and canoeing safe?",
      answer:
        "The walk is led by an authorised armed park ranger, and the canoeing is subject to park arrangements and the weather. Your guide will brief you before each activity.",
    },
  ],
});
