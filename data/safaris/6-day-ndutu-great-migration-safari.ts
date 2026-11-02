import { IMG, STAYS_ARUSHA, STAYS_HIGHLANDS, STAYS_NDUTU, arrivalDay, calvingTrip, stop } from "./shared";

// From Ombeni's "6-Day / 8-Day Ndutu Calving & Great Migration Safari" document
// (its 6-day version). The 8-day version has its own page.
export const ndutuMigration6 = calvingTrip({
  slug: "6-day-ndutu-great-migration-safari",
  seoTitle: "6-Day Ndutu Great Migration Safari | Trust Tours",
  metaDescription:
    "Six private days built around the migration: Tarangire, the Ngorongoro Crater and three nights at Ndutu in calving season. From $2,730 per person.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  title: "6-Day Ndutu Calving & Great Migration Safari",
  shortName: "6-Day Ndutu Migration Safari",
  days: 6,
  heroImage: "/images/safaris/ndutu-wildebeest-calves.jpg",
  summary:
    "The deeper Southern Serengeti experience: three nights in the Ndutu calving grounds, with time to slow down and follow the herds, plus Tarangire and the Ngorongoro Crater.",
  overview: [
    "There are few wildlife experiences in Africa as moving as the Great Migration during the Ndutu calving season. Every year, hundreds of thousands of wildebeest gather across the short-grass plains of the Southern Serengeti. The landscape becomes a vast nursery, with newborn calves across the plains while lions, cheetahs, hyenas and other predators stay close by.",
    "This is not a safari where you drive through the Serengeti hoping to meet the migration. This itinerary is designed around the migration itself.",
    "You experience Tarangire's elephants and baobabs and descend into the Ngorongoro Crater, then spend your time in the Southern Serengeti, slowing down and following the movement of the herds rather than travelling every day.",
  ],
  atAGlance: [
    { label: "Duration", value: "6 days / 5 nights" },
    { label: "Travel period", value: "Late December to March" },
    { label: "Best calving months", value: "January and February" },
    { label: "Destinations", value: "Arusha · Tarangire · Ngorongoro · Ndutu" },
    { label: "Start", value: "Kilimanjaro International Airport (JRO)" },
    { label: "Finish", value: "Arusha or Kilimanjaro International Airport" },
    { label: "Safari style", value: "Private" },
  ],
  highlights: [
    "Three nights at Ndutu: Enough time to follow the herds as they move.",
    "Two full migration days: Stay with interesting behaviour instead of rushing on.",
    "Ngorongoro Crater: A completely different ecosystem from the open plains.",
    "Tarangire: Elephants, baobabs and winding river valleys.",
    "Your way home: Choose the road journey or a time-saving flight.",
  ],
  itinerary: [
    arrivalDay("arusha"),
    {
      day: 2,
      title: "Arusha to Tarangire National Park and Karatu",
      description:
        "After an early breakfast, you leave Arusha with your guide and the landscape gradually changes from farmland to open savannah. Tarangire is famous for its spectacular concentration of elephants and enormous ancient baobab trees.\n\nYour safari begins as soon as you enter the park. Your guide searches for wildlife while explaining the behaviour, habitats and ecology of the animals you meet. You may see large elephant families, giraffes, zebras, wildebeest, buffalo, impalas, gazelles, warthogs, hippos, lions, leopards, hyenas and many birds.\n\nYou stop at a scenic spot for a picnic lunch before your afternoon game drive. The park itself is part of the experience, with its baobabs, golden grasslands, acacia trees and winding river valleys. In the late afternoon, you leave the park and continue to Karatu.",
      experience: "Elephants, baobabs and Tanzania's hidden wildlife gem.",
      image: IMG.tarangire,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 3,
      title: "Ngorongoro Crater to the Southern Serengeti",
      description:
        "Today is one of the most spectacular days of your safari. After breakfast, you drive into the Ngorongoro Conservation Area and descend into the crater. The descent itself is unforgettable, as the forest gives way to an enormous natural amphitheatre.\n\nInside the crater, your guide searches for lion, elephant, buffalo, zebra, wildebeest, hippo, hyena, gazelle, flamingo, jackal and black rhino. It is a completely different ecosystem from the open plains of the Serengeti.\n\nAfter lunch, you begin the journey to the Southern Serengeti. As you approach Ndutu, the landscape opens into expansive short-grass plains, and you enter the Great Migration's calving grounds. If conditions allow, your guide begins game viewing on the way to your accommodation.",
      experience: "From the world's most famous crater to the heart of the migration.",
      image: IMG.craterZebra,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 4,
      title: "Full-day Ndutu migration and calving safari",
      description:
        "Today is dedicated almost entirely to the Great Migration and the calving season. You wake before sunrise and head out as the first light reaches the plains. Thousands of wildebeest may be spread across the horizon, with zebras and gazelles moving between the herds.\n\nAnd then there are the newborns. You may see mothers with very young calves, calves learning to walk and large nursery groups moving across the plains. Where there are thousands of vulnerable young animals, predators are never far away. Your guide will look for lions watching the herds, cheetahs hunting on the open plains, hyenas and jackals.\n\nWildlife encounters can never be guaranteed, and that is part of what makes a genuine safari so exciting. Rather than rushing from one sighting to another, your private guide can stay with interesting behaviour. After a picnic lunch in the wilderness, you continue exploring as the plains take on the warm golden colours that make Ndutu so photogenic.",
      experience: "The day you've been waiting for.",
      image: IMG.calf,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 5,
      title: "Full-day Ndutu wildlife and predator experience",
      description:
        "One of the greatest advantages of staying several nights in Ndutu is flexibility. The Great Migration does not follow a timetable. The herds move with the rain, grass and water, so a safari should not be built around visiting one place and leaving straight away.\n\nAfter breakfast, you head out for another full day of exploring. You may return to an area where something interesting happened yesterday, or your guide may take you to another part of the Southern Serengeti.\n\nThis day can be especially rewarding for photographers, because there is time to wait for natural behaviour. You might watch a pride of lions resting near a herd, see a cheetah scan the plains, or simply sit quietly as thousands of wildebeest move across the horizon. There is time for the smaller details too: birds, reptiles, antelope and tracks.\n\nYou enjoy another picnic lunch in the wilderness and, if conditions allow, finish with a beautiful late-afternoon game drive.",
      experience: "Follow the herds, not a fixed schedule.",
      image: IMG.cheetahHerd,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 6,
      title: "Final morning, then back to Arusha or Kilimanjaro Airport",
      description:
        "After an early or packed breakfast, you head out for a final morning game drive. The early hours can be especially rewarding, because wildlife is often active before the heat of the day.\n\nYou then have a choice. Return by safari vehicle for a scenic journey through northern Tanzania, or fly from the Southern Serengeti to Arusha, subject to flight schedules and availability. The flight is especially convenient if you are connecting to an international flight from Kilimanjaro International Airport.\n\nYour Trust Tours & Safaris representative makes sure that your transfers run smoothly, and your safari ends there.",
      experience: "One more morning in the Serengeti, then your way home.",
      image: IMG.duskHerd,
      meals: "Breakfast, and lunch depending on your departure",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("highlands", "Night 2", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("ndutu", "Nights 3, 4 and 5", "Ndutu and the Southern Serengeti", STAYS_NDUTU),
  ],
  sections: [
    {
      heading: "What makes this safari different?",
      bullets: [
        "Built around the migration: Ndutu is the centrepiece, not one stop on a long northern circuit.",
        "Extended time in the Southern Serengeti: Several nights in one place let you slow down.",
        "Private safari: You are not tied to a large group or a rigid schedule.",
        "Experienced local guides: Knowledge of seasonal wildlife movements matters most during the migration.",
        "Flexible return: Choose a scenic road journey or a time-saving flight.",
      ],
    },
  ],
  faqs: [
    {
      question: "How is this different from the 6-Day Calving Safari?",
      answer:
        "This trip starts at Kilimanjaro Airport, visits the crater on the way in and gives you three nights at Ndutu. The 6-Day Calving Safari starts in Arusha and saves the crater for the end, with two nights at Ndutu.",
    },
    {
      question: "Can I fly back from Ndutu?",
      answer:
        "Yes, subject to flight schedules and availability. Tick the flight in the booking box, and we will include it in your quote. It is part of the Luxury and High-end luxury levels.",
    },
  ],
});
