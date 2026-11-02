import { IMG, STAYS_ARUSHA, STAYS_NDUTU, arrivalDay, calvingTrip, stop } from "./shared";

// From Ombeni's "4-Day Ndutu Calving Safari 3 Nights" document.
export const ndutuCalving4 = calvingTrip({
  slug: "4-day-private-ndutu-calving-safari",
  seoTitle: "4-Day Private Ndutu Calving Safari | Trust Tours",
  metaDescription:
    "A private 4-day calving season safari: a rested first night in Arusha, then two nights at Ndutu with a full day among the herds. From $1,820 per person.",
  destinations: ["Arusha", "Ngorongoro", "Serengeti"],
  tags: ["family"],
  title: "4-Day Ndutu Calving Safari – The Focused Great Migration Experience",
  shortName: "4-Day Ndutu Calving Safari",
  days: 4,
  heroImage: "/images/safaris/ndutu-cheetah-herd.jpg",
  summary:
    "Follow the vast herds into the Southern Serengeti and the Ndutu plains, combining the comfort of Arusha with two nights in the migration zone at the most dramatic time of year.",
  overview: [
    "Experience the Great Migration at one of its most dramatic moments. Over four days, you follow the vast herds into Tanzania's Southern Serengeti and the Ndutu plains, where hundreds of thousands of wildebeest gather during the calving season.",
    "This itinerary is deliberately designed around one main experience. Instead of trying to fit Tarangire, Lake Manyara, the Ngorongoro Crater and the Serengeti into four days, it gives you meaningful time in the Southern Serengeti.",
    "You combine the comfort of a first night in Arusha with two nights dedicated to exploring the migration zone, with the chance to see newborn calves, predator activity and an extraordinary concentration of wildlife.",
    "Your guide follows the wildlife rather than a fixed itinerary, and adjusts each day's route to the movement of the herds, the weather and current conditions.",
  ],
  atAGlance: [
    { label: "Duration", value: "4 days / 3 nights" },
    { label: "Safari focus", value: "Great Migration and Ndutu calving season" },
    { label: "Best season", value: "January to March" },
    { label: "Destinations", value: "Arusha · Ngorongoro Conservation Area · Ndutu" },
    { label: "Start / finish", value: "Kilimanjaro International Airport (JRO)" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with an experienced guide" },
    { label: "Main wildlife", value: "Wildebeest, zebra, gazelle, lions, cheetahs and hyenas" },
    { label: "Ideal for", value: "Couples, photographers, families and first-time safari travellers" },
  ],
  highlights: [
    "Two nights in the migration zone: Ndutu is the centre of this trip, not a quick overnight stop.",
    "A full day with the herds: Day 3 is entirely dedicated to the calving plains.",
    "Newborn calves: See some of the most important moments of the migration cycle.",
    "Predator encounters: The abundance of young animals draws lions, cheetahs and hyenas.",
    "A rested start: Your first night in Arusha means you begin the safari refreshed.",
  ],
  itinerary: [
    arrivalDay("arusha"),
    {
      day: 2,
      title: "Arusha to Ndutu, through the Ngorongoro highlands",
      description:
        "After an early breakfast, you meet your safari guide and set off for the Ngorongoro Conservation Area. The drive takes you from the farmland around Arusha up into the dramatic highlands, where the landscape opens into vast grasslands and volcanic scenery. Depending on conditions, you may stop to enjoy the views before continuing to Ndutu.\n\nOnce you enter the Southern Serengeti ecosystem, the character of the safari changes completely. This is migration country. The open plains can be filled with enormous concentrations of wildebeest and zebra, and during the calving season thousands of calves are born here.\n\nAfter reaching the Ndutu area, your first game drive begins. Your guide monitors current movements and chooses areas where the herds are concentrated. The aim is not simply to drive from one point to another, but to spend time observing the ecosystem. You may see wildebeest herds, zebras, gazelles, giraffes, elephants, ostriches, lions, cheetahs, leopards, spotted hyenas and jackals.",
      experience: "From the highlands into migration country.",
      image: IMG.plainsHerds,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 3,
      title: "Full-day Ndutu calving season safari",
      description:
        "This is the main day of the safari. You wake before sunrise and enjoy breakfast or a packed breakfast before heading into the plains. The early morning is one of the most rewarding times for wildlife viewing, with cooler temperatures, active predators and soft light for photography.\n\nYour guide follows the current position of the herds instead of a rigid route. The day may take you across open plains, seasonal lakes, woodland and the areas where animals gather around water. During the calving season, you may see wildebeest with newborn calves, predators drawn by the young animals, and large numbers of zebra and gazelle moving with the herds. Birdwatchers can look for raptors, vultures, secretary birds and ostriches.\n\nYou enjoy a picnic lunch at a designated spot, surrounded by the landscape. There is no need to rush back to camp, because you have the whole day to explore.\n\nThrough the afternoon, your guide uses knowledge of the area, recent sightings and animal behaviour to decide where to spend your time. That flexibility matters, because the location of the herds changes with rainfall and grazing. You return to camp in the late afternoon or around sunset.",
      experience: "The heart of the migration experience.",
      image: IMG.calves,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 4,
      title: "Final morning and return to Kilimanjaro Airport",
      description:
        "Wake early for your last chance to enjoy the Southern Serengeti. Depending on your flight schedule, you can choose an early morning game drive shortly after sunrise, or a leisurely breakfast at camp before you leave.\n\nThe return journey takes you through the Ngorongoro Conservation Area and back to the northern highlands. If your international flight leaves later in the evening, there may be time for lunch in Arusha before your private transfer to Kilimanjaro International Airport.\n\nYour safari ends at the airport, with unforgettable memories of Tanzania's Great Migration.",
      experience: "A last sunrise on the plains, or a slow breakfast at camp.",
      meals: "Breakfast and lunch",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", STAYS_ARUSHA),
    stop("ndutu", "Nights 2 and 3", "Ndutu and the Southern Serengeti", STAYS_NDUTU),
  ],
  sections: [
    {
      heading: "Why choose this 4-day Ndutu safari?",
      bullets: [
        "The Great Migration: Experience one of Africa's greatest wildlife spectacles as huge herds gather across the Southern Serengeti.",
        "Predator encounters: The abundance of young animals gives you the chance to watch lions, cheetahs, hyenas and other predators.",
        "Newborn calves: The calving season lets you witness some of the most important moments of the migration cycle.",
        "Photography: Early mornings, open plains and enormous herds make Ndutu especially attractive for wildlife photographers.",
        "Authentic Southern Serengeti: Two nights in the migration zone, not a quick overnight stop.",
        "Private safari: Your guide can adjust each day to wildlife movements, the weather and current conditions.",
      ],
    },
  ],
  faqs: [
    {
      question: "Why stay the first night in Arusha?",
      answer:
        "It means you don't go straight from an international flight into a long safari drive. You rest, meet your guide and start the next morning refreshed.",
    },
    {
      question: "Is this safari suitable for families?",
      answer:
        "Yes. Because it is private, your guide can adapt the pace, the start times and the length of each game drive. Tell us your children's ages and we will advise you on the best plan.",
    },
  ],
  oldUrl: "/booking/4-day-private-safari-itinerary-tarangire-ngorongoro-crater-and-southern-serengeti-ndutu-area/",
});
