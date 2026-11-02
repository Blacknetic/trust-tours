import { IMG, STAYS_HIGHLANDS, STAYS_NDUTU, calvingTrip, stop } from "./shared";

// From Ombeni's "6-Day Calving-Season Safari – Tarangire, Ndutu & Ngorongoro"
// document. Starts and ends in Arusha, with the crater after Ndutu.
export const calving6 = calvingTrip({
  slug: "6-day-calving-safari",
  seoTitle: "6-Day Calving Season Safari Tanzania | Trust Tours",
  metaDescription:
    "A private 6-day calving season safari from Arusha: Tarangire, two nights at Ndutu, Olduvai Gorge and a Ngorongoro Crater game drive. From $2,730 per person.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  tags: ["family"],
  title: "6-Day Calving Season Safari – Tarangire, Ndutu & Ngorongoro",
  shortName: "6-Day Calving Safari",
  days: 6,
  heroImage: "/images/safaris/ndutu-cheetah-chase.jpg",
  summary:
    "A balanced six days from Arusha: Tarangire's elephants and baobabs, the calving plains of Ndutu and a final Big Five game drive in the Ngorongoro Crater.",
  overview: [
    "This safari makes Ndutu the main focus, without spending too much time moving between parks. It gives you a good balance of elephants and baobabs in Tarangire, the spectacular calving-season wildlife around Ndutu, and a final Big Five experience in the Ngorongoro Crater.",
    "During the calving season, the Southern Serengeti and Ndutu become a spectacular wildlife theatre, with large concentrations of wildebeest and zebra and predators following the herds.",
    "You travel in a private 4×4 Land Cruiser with a pop-up roof and a professional Tanzanian safari guide, with full-board stays and picnic lunches on your game drives.",
  ],
  atAGlance: [
    { label: "Duration", value: "6 days / 5 nights" },
    { label: "Start / finish", value: "Arusha" },
    { label: "Best time", value: "January to March" },
    { label: "Focus", value: "Ndutu calving season, predators and the Ngorongoro Crater" },
    { label: "Vehicle", value: "Private 4×4 Land Cruiser with a pop-up roof and a guaranteed window seat" },
    { label: "Best for", value: "Couples, families and small private groups" },
  ],
  highlights: [
    "Tarangire National Park: Elephants, baobabs and excellent general wildlife.",
    "Ndutu and the Southern Serengeti: The heart of the calving season.",
    "Big cats: Excellent opportunities for lion, cheetah, leopard and hyena.",
    "Great Migration: Huge concentrations of wildebeest and zebra.",
    "Ngorongoro Crater: One of Tanzania's strongest Big Five areas.",
    "Scenic highlands: The Great Rift Valley and the Ngorongoro Highlands.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arusha to Tarangire National Park and Karatu",
      description:
        "After breakfast, you leave Arusha with your private safari guide and drive to Tarangire National Park. You begin your first game drive through landscapes dominated by enormous baobab trees and seasonal wildlife corridors.\n\nTarangire is particularly famous for its large elephant herds and is an excellent opening before you head deeper towards Ndutu. You may see elephants, lions, leopards, giraffes, zebras, wildebeest, buffalo, antelope, warthogs and numerous bird species.\n\nYou enjoy a picnic lunch in the park and continue your game drive into the afternoon. Later, you leave Tarangire and continue to Karatu for the night.",
      experience: "Elephants, baobabs and your first day of wildlife.",
      image: IMG.baobabs,
      hours: "7–9 hours of game driving",
      meals: "Lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands-first",
    },
    {
      day: 2,
      title: "Karatu through the Ngorongoro Highlands to Ndutu",
      description:
        "After breakfast, you drive through the spectacular Ngorongoro Highlands to the Ndutu area. This is an important day, because the aim is to reach Ndutu early enough to make the most of your time in the migration area. Depending on the road and wildlife conditions, you can enjoy game viewing along the way.\n\nBy the afternoon, you begin your first dedicated Ndutu game drive, and the safari changes character. Look for lions, cheetahs, leopards, hyenas, jackals, wildebeest, zebra, gazelles, ostriches, raptors and other birds.",
      experience: "Entering the calving-season area.",
      image: IMG.plainsHerds,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 3,
      title: "Full day in Ndutu: the main calving season safari",
      description:
        "This is the most important day of the safari. You wake early and head out with a packed breakfast, or after an early breakfast at camp. You then spend the entire day exploring Ndutu and the surrounding Southern Serengeti plains, following the wildlife rather than rushing from one destination to another.\n\nThis safari is designed around the calving season, so you stay where the migration is concentrated instead of losing hours to long transfers. Depending on conditions, you may see wildebeest giving birth, very young calves, protective mothers, lions hunting around the herds, cheetahs on the open plains, hyenas moving through the migration, and dramatic predator-prey interactions.\n\nThe wildlife changes from day to day, so your guide uses local knowledge and recent sightings to decide where to explore. You enjoy a picnic lunch in the wilderness, continue into the afternoon and return to camp around sunset.",
      experience: "A whole day in the migration, with no long transfers.",
      image: IMG.calf,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge at Ndutu",
      stayId: "ndutu",
    },
    {
      day: 4,
      title: "Final morning in Ndutu, then back to the highlands",
      description:
        "Wake early for another game drive around Ndutu, with one more chance to search for predators and watch the migration before you leave.\n\nAfter the morning's wildlife, you begin your journey to the Ngorongoro Highlands. If conditions allow, the route can include more wildlife viewing or a stop at Olduvai Gorge, one of the region's most important archaeological areas. You then continue to Karatu or the highlands for a relaxed evening.",
      experience: "A last morning on the plains and a relaxed evening in the highlands.",
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands-second",
    },
    {
      day: 5,
      title: "Big Five safari in the Ngorongoro Crater",
      description:
        "Wake early and descend into the Ngorongoro Crater for a full morning and early-afternoon game drive. The crater is one of Tanzania's most extraordinary wildlife destinations: an intact volcanic caldera with a very high concentration of wildlife, including the Big Five.\n\nThe crater floor mixes open grasslands, swamps, woodlands, lakes and rivers, which creates excellent conditions for wildlife viewing. You may see lions, elephants, black rhino, buffalo, hippos, zebras, leopards, hyenas, gazelles and other antelope.\n\nYou enjoy a picnic lunch at an approved site before continuing to explore. In the afternoon, you climb out of the crater and return to your lodge.",
      experience: "The Big Five in the world's famous caldera.",
      image: IMG.craterRhino,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands-second",
    },
    {
      day: 6,
      title: "Karatu to Arusha",
      description:
        "Enjoy a relaxed breakfast at your lodge. Depending on your departure time, you can leave straight after breakfast and have lunch in Arusha, or fit in a short early morning activity in the surrounding area first.\n\nYou reach Arusha in time for your onward journey, and your safari ends there.",
      experience: "A relaxed final morning before heading home.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("highlands-first", "Night 1", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("ndutu", "Nights 2 and 3", "Ndutu and the Southern Serengeti", STAYS_NDUTU),
    stop("highlands-second", "Nights 4 and 5", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
  ],
  sections: [
    {
      heading: "Why this route works",
      paragraphs: [
        "The route runs from Arusha to Tarangire, on to Karatu and Ndutu, then back through the Ngorongoro Crater to Arusha. Saving the crater for the end means you don't have to rush it before reaching the calving grounds.",
        "We have kept the trip free of extra parks such as Lake Manyara or Lake Eyasi. Fewer transfers leave you more time with the wildlife.",
      ],
    },
  ],
  faqs: [
    {
      question: "Does this safari visit the Ngorongoro Crater?",
      answer:
        "Yes. You spend a full morning and early afternoon in the crater on Day 5, after your time at Ndutu.",
    },
    {
      question: "How is this different from the 6-Day Ndutu Migration Safari?",
      answer:
        "This one starts in Arusha and gives you two nights at Ndutu, then the crater at the end. The Ndutu Migration Safari starts at Kilimanjaro Airport and gives you three nights at Ndutu, with the crater on the way in.",
    },
  ],
});
