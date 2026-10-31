import type { TripPackage } from "@/data/packages";
import { SAFARI_ADDONS } from "@/data/addons";
import { CONTACT_BULLETS } from "@/data/kilimanjaro/shared";
import { calvingLinks } from "./links";
import { comfortLevels } from "./shared";

const SLUG = "5-day-ndutu-migration-safari";

// From Ombeni's "5-Day Ndutu Calving Safari — Tarangire, Ngorongoro & Southern
// Serengeti" document. Draft: its prices are indicative ranges for 2 adults.
export const ndutuCalving5: TripPackage = {
  slug: SLUG,
  seoTitle: "5-Day Ndutu Calving Safari Tanzania | Trust Tours",
  metaDescription:
    "Private 5-day Ndutu calving safari from Kilimanjaro Airport: Tarangire, Ngorongoro Crater and a full day among the herds. Four comfort levels from $2,275 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
  category: "safari",
  tags: ["family"],
  title: "5-Day Ndutu Calving Safari – Tarangire, Ngorongoro & Southern Serengeti",
  shortName: "5-Day Ndutu Calving Safari",
  days: 5,
  priceFromUSD: 2275,
  priceNote:
    "Indicative price per person for 2 adults sharing a private vehicle, at Mid-range level. Your written quote confirms the final price.",
  comfortLevels: comfortLevels(5),
  addOns: SAFARI_ADDONS,
  stays: ["arusha-coffee-lodge", "marera-valley-lodge", "ndutu-camp"],
  links: calvingLinks(SLUG),
  tier: ["mid-range", "comfort"],
  heroImage: "/images/safaris/ndutu-calf-nursing.jpg",
  gallery: [],
  summary:
    "Experience Tanzania's Great Migration at one of its most extraordinary moments, on a private five-day safari through Tarangire, the Ngorongoro Crater and the Ndutu plains of the Southern Serengeti.",
  overview: [
    "From January to February, hundreds of thousands of wildebeest gather across the short-grass plains of the Southern Serengeti to give birth. Newborn calves take their first steps, and lions, cheetahs and hyenas follow the herds. December and March can also offer excellent migration experiences, although the exact location of the herds changes with rainfall and grazing.",
    "This safari combines the elephant-rich landscapes of Tarangire, the remarkable wildlife of the Ngorongoro Crater and dedicated time in the Ndutu calving grounds. Rather than spending the whole trip moving from park to park, it gives you time where the migration is normally concentrated at this time of year.",
    "With Trust Tours & Safaris, you are not simply following a fixed itinerary. Our experienced local safari team follows current wildlife conditions and adapts your game drives to where the herds and predators are actually moving, giving you the best possible opportunity for an unforgettable calving-season experience.",
    "We believe a safari should be more than travelling between national parks. It should give you enough time to appreciate the landscapes, observe wildlife at a comfortable pace, take photographs and enjoy the knowledge of your professional guide.",
    "From the first welcome at Kilimanjaro International Airport to your final departure, you are in safe hands with a trusted Tanzanian safari company.",
  ],
  atAGlance: [
    { label: "Duration", value: "5 days / 4 nights" },
    { label: "Main experience", value: "Great Migration and Ndutu calving season" },
    { label: "Best period", value: "December to March" },
    { label: "Peak calving", value: "Usually January to February" },
    { label: "Destinations", value: "Tarangire · Ngorongoro · Ndutu · Southern Serengeti" },
    { label: "Start / finish", value: "Kilimanjaro International Airport (JRO)" },
    { label: "Safari style", value: "Private and customizable" },
    { label: "Vehicle", value: "4×4 safari vehicle with a pop-up roof" },
    { label: "Guide", value: "Professional English-speaking safari guide" },
    { label: "Focus", value: "Migration, calving, predators, the Big Five and photography" },
  ],
  highlights: [
    "A full day in Ndutu: Spend a whole day on the calving grounds, the heart of the entire safari.",
    "New life and predators: Look for newborn calves, with lions, cheetahs and hyenas patrolling the edges of the herds.",
    "Ngorongoro Crater: Game drive on the crater floor, one of the great wildlife concentrations in Africa.",
    "Tarangire's elephants: A full-day game drive among giant baobabs and large elephant herds.",
    "A rested start: A first night in Arusha, so the safari begins after a proper sleep, not straight after a long flight.",
    "Four comfort levels: The same route, from Mid-range to Ultra-premium.",
  ],
  pricingDetails: [
    "These are indicative private-safari planning ranges per person, based on 2 adults sharing one private safari vehicle and a room. They are not confirmed quotations.",
    "Your final cost depends on your travel dates, the number of guests, camp availability, flight fares and the exact services you choose. Ndutu camps can fill early in the calving season, so we confirm your price and accommodation in writing before you pay a deposit.",
    "To request a price for one traveller or a group of three to six, select your group size in the booking box and Ombeni will quote you directly.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Kilimanjaro Airport to Arusha: arrival and safari briefing",
      description:
        "Your Tanzanian adventure begins with a warm welcome at Kilimanjaro International Airport (JRO) by your Trust Tours & Safaris representative. After help with your luggage, you transfer privately to Arusha, the safari capital of northern Tanzania. The drive is about 50 km and takes around an hour, depending on traffic.\n\nDepending on your arrival time, the rest of the day is yours. Relax at the lodge, enjoy the gardens, recover from your journey or simply prepare for the days ahead.\n\nIn the evening, your safari guide meets you for a detailed briefing on the route, the weather, wildlife expectations, photography opportunities and the next day's departure.",
      experience: "A warm welcome and a comfortable first evening in Arusha.",
      notes: [
        "Why this night matters: Instead of starting a long safari drive straight after an international flight, you enjoy a comfortable first evening in Arusha and begin the main safari rested.",
      ],
      distanceKm: 50,
      hours: "About 1 hour",
      meals: "Dinner",
      accommodation: "Arusha Coffee Lodge",
      stayId: "arusha-coffee-lodge",
    },
    {
      day: 2,
      title: "Arusha to Tarangire National Park and Karatu",
      description:
        "After breakfast, you leave Arusha with your private safari guide and drive to Tarangire National Park, famous for its enormous elephant population, ancient baobab trees, seasonal wetlands and diverse wildlife. The safari begins as soon as you enter the park.\n\nYour guide chooses the best areas according to current wildlife conditions, looking for African elephants, lions, giraffes, zebras, wildebeest, buffalo, impala, warthogs, antelope, baboons, monkeys and numerous bird species.\n\nThe park's landscape of giant baobabs, open savannah and seasonal rivers has a completely different atmosphere from Ndutu. You enjoy a full-day game drive, with a picnic lunch at an authorised picnic area before continuing to explore.\n\nIn the late afternoon, you leave Tarangire and drive to the Karatu highlands for dinner and the night.",
      experience: "Elephants, baobabs and a full day of Tarangire wildlife.",
      notes: [
        "Why Tarangire is included: It adds excellent resident wildlife and elephant viewing, and it breaks up the journey to the Ngorongoro and Ndutu ecosystem.",
      ],
      image: {
        src: "/images/safaris/tarangire-elephants.jpg",
        alt: "A herd of elephants beneath a flat-topped acacia tree in Tarangire National Park",
      },
      meals: "Breakfast, lunch and dinner",
      accommodation: "Marera Valley Lodge, Karatu",
      stayId: "marera-valley-lodge",
    },
    {
      day: 3,
      title: "Ngorongoro Crater to Ndutu and the Southern Serengeti",
      description:
        "This is where the safari becomes a dedicated migration experience. After an early breakfast, you drive into the Ngorongoro Conservation Area and descend into the spectacular crater.\n\nThe crater floor supports an extraordinary concentration of wildlife. On your morning game drive, your guide will search for lions, buffalo, elephants, hippos, zebras, wildebeest, gazelles, hyenas, jackals, flamingos and other waterbirds. Black rhino live here too, although sightings are never guaranteed. You enjoy a picnic lunch in the crater before climbing back out on the western side of the conservation area.\n\nThen comes the important transition. Instead of spending another night around Karatu, you continue to Ndutu and the Southern Serengeti, where the Great Migration normally concentrates during the calving months. The landscape gradually changes from the highlands into vast open plains.\n\nAs you approach Ndutu, your game drive begins again. Look for wildebeest herds, zebras, gazelles, lions, cheetahs, hyenas, jackals, giraffes, elephants and other plains wildlife. If conditions are right, you may meet the first large migration herds before you reach camp.",
      experience: "From the crater floor into the Great Migration.",
      image: {
        src: "/images/safaris/ngorongoro-crater-floor.jpg",
        alt: "A safari vehicle among zebra and wildebeest on the Ngorongoro Crater floor, with the crater walls behind",
      },
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Ndutu / Southern Serengeti camp or lodge",
      stayId: "ndutu-camp",
    },
    {
      day: 4,
      title: "Full day in Ndutu: the Great Migration calving safari",
      description:
        "This is the heart of the entire safari. You wake before sunrise for an early breakfast and leave with your guide while the plains are still cool and the morning light is ideal for photography.\n\nDuring the calving season, the Southern Serengeti and Ndutu plains become one of the main gathering areas for the migrating herds. The peak is generally around January and February, although rainfall can shift the timing. Your guide follows the latest wildlife information to find the concentrations of the migration. Depending on conditions, you may see thousands of wildebeest, newborn calves, zebras, Thomson's and Grant's gazelles, lions following the herds, cheetahs hunting on the open plains, hyenas, jackals, secretary birds and ostriches.\n\nThe magic of Ndutu is not simply the number of animals. It is the meeting of new life and predators. A newborn calf may be only minutes old, with its mother close by while predators patrol the edges of the herd. This concentration of vulnerable young animals is one reason predator activity can be so intense during the calving period.\n\nYou stop for a picnic lunch on the plains, then continue through the afternoon. There is no rigid route. Your guide adapts the day to where the herds are, where predators are active, road conditions, the weather, wildlife reports and your own interests.\n\nThe afternoon can bring wildebeest with newborn calves, herds moving across the plains, lion prides, cheetahs and the dramatic landscapes around Lake Ndutu and Lake Masek. You return to camp around sunset.",
      experience: "The main event: a whole day on the calving grounds.",
      image: {
        src: "/images/safaris/ndutu-newborn-calf.jpg",
        alt: "A young wildebeest calf feeding from its mother",
      },
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Ndutu / Southern Serengeti camp or lodge",
      stayId: "ndutu-camp",
    },
    {
      day: 5,
      title: "Final game drive and return to Kilimanjaro Airport",
      description:
        "Wake early for your final sunrise over the Southern Serengeti. After breakfast, you set out on a last game drive through the Ndutu area. Depending on your flight schedule, this is another chance to look for wildebeest, newborn calves, zebras, lions, cheetahs, hyenas, gazelles, giraffes, elephants and other resident wildlife.\n\nAfter the game drive, you begin the journey back towards Arusha, with a picnic lunch on the way, and continue to Kilimanjaro International Airport for your onward flight.\n\nYour five-day safari ends with memories of the Great Migration, the Ngorongoro Crater and the incredible wildlife of northern Tanzania.",
      experience: "One last sunrise on the plains before the journey home.",
      notes: [
        "Prefer to fly back? A flight from the Southern Serengeti to Arusha is available as an add-on, and it is part of the Luxury and High-end luxury levels.",
      ],
      image: {
        src: "/images/serengeti-plains.jpg",
        alt: "Wildebeest and zebra herds grazing on green plains in the Southern Serengeti",
      },
      meals: "Breakfast and lunch",
      accommodation: "—",
    },
  ],
  included: [
    "Pickup: From an agreed location in Arusha, Kilimanjaro International Airport (JRO) or Arusha Airport (ARK).",
    "Vehicle: Private 4×4 safari vehicle with a pop-up roof for wildlife viewing and photography.",
    "Guide: A professional English-speaking driver-guide. Other languages may be available by arrangement.",
    "Accommodation: In your selected comfort level, based on two people sharing a double or twin room.",
    "Meals: As listed in the day-by-day itinerary, including picnic lunches.",
    "Drinks: Soft drinks, plus drinking water in the safari vehicle.",
    "Game drives: As set out in the itinerary.",
    "Park fees: All park entry, conservation, crater and vehicle fees for the confirmed itinerary.",
    "Insurance: Emergency evacuation insurance.",
    "Transfers: Road transfers between destinations and to the agreed Arusha or airport drop-off point.",
    "Taxes: Government fees and taxes, and applicable statutory charges listed in your written quotation.",
  ],
  excluded: [
    "International flights to and from Tanzania.",
    "Tanzania visa fees and any passport or travel-document costs.",
    "Travel and medical insurance.",
    "Single-room supplements for guests who do not share.",
    "Meals, drinks or services not listed as included in the itinerary.",
    "Alcoholic drinks, laundry, telephone charges and personal expenses.",
    "Tips for your driver-guide and accommodation staff.",
    "Optional activities, including hot-air balloon safaris ($600 per person), cultural visits ($80 per person) and guided walking activities ($85 per person).",
    "Additional nights or itinerary changes beyond the confirmed arrangements.",
    "Unscheduled transfers, extra safari days or changes requested after confirmation.",
    "Medical expenses or costs arising from personal emergencies.",
    "New government fees or charges introduced after your quotation, where the contract allows them to be passed on.",
  ],
  sections: [
    {
      heading: "Why this 5-day safari is different",
      paragraphs: [
        "This is not just another five-day Tanzania safari. It is a dedicated Ndutu calving safari, built around the seasonal movement of the Great Migration rather than an attempt to collect as many national parks as possible.",
        "The route runs from Tarangire to Ngorongoro, then on to Ndutu and the Southern Serengeti, and it gives your two most valuable nights to the place where the calving actually happens. The spectacle takes place on the southern plains, not on the Ngorongoro Crater floor, so staying in or next to the Ndutu area matters more than any other choice on this trip.",
      ],
    },
    {
      heading: "Best time to book this safari",
      paragraphs: [
        "December to March is the overall Ndutu season, with January and February the prime calving window. Here is what normally happens in each month.",
      ],
      table: {
        headers: ["Month", "What to expect"],
        rows: [
          ["December", "The migration begins gathering. The herds generally start concentrating in the south as the short rains bring fresh grass."],
          ["January", "Calving begins. More wildebeest arrive and the first births take place."],
          ["February", "Peak calving. Normally the core month, with huge concentrations of wildebeest, newborn calves and strong predator activity."],
          ["March", "Late calving and transition. Newborn and predator sightings can still be excellent, especially early in the month, but the herds may begin moving north and west."],
        ],
      },
      note: "The exact location of the herds varies with rainfall and conditions, and no wildlife sighting can ever be guaranteed.",
    },
    {
      heading: "A safari designed around your experience",
      paragraphs: [
        "We believe a migration safari should be more than a list of parks and hotel nights. It should give you time to experience the wilderness.",
        "You may wake to the sound of birds outside your tent, watch thousands of wildebeest spread across the plains, follow a mother with her newborn calf, wait quietly while a cheetah scans the grasslands, or watch the African sun disappear over the Serengeti. Some moments cannot be scheduled.",
      ],
    },
    {
      heading: "Book your Ndutu calving safari",
      paragraphs: [
        "To receive an accurate quotation, tell us your travel dates, number of travellers, preferred comfort level, room-sharing arrangements and whether you will arrive at JRO, ARK or an Arusha hotel. We can then check suitable accommodation and give you a more precise price.",
      ],
      bullets: CONTACT_BULLETS,
    },
  ],
  faqs: [
    {
      question: "When is the Ndutu calving season?",
      answer:
        "The Ndutu season runs from about December to March. January and February are the prime calving window, with February usually the peak. The exact timing and location change with the rain.",
    },
    {
      question: "How much does this safari cost?",
      answer:
        "It starts from $2,275 per person at Mid-range level, based on 2 adults sharing. Luxury starts from $3,775, High-end luxury from $6,500 and Ultra-premium from $11,500. These are indicative prices, and your written quote confirms the final figure.",
    },
    {
      question: "What is the difference between the comfort levels?",
      answer:
        "The route stays the same. Higher levels add better lodges and camps, and some services. Luxury includes a one-way flight, while High-end luxury adds flights both ways and a hot-air balloon safari.",
    },
    {
      question: "Will I definitely see newborn calves?",
      answer:
        "We can't guarantee it, because wildlife sightings are natural events. Travelling in January or February and spending a full day at Ndutu gives you a strong chance, and your guide adapts the route to follow the herds.",
    },
    {
      question: "Where does the safari start and finish?",
      answer:
        "It starts and finishes at Kilimanjaro International Airport (JRO). We can also collect you from Arusha Airport (ARK) or an agreed place in Arusha.",
    },
    {
      question: "Can I fly back instead of driving?",
      answer:
        "Yes. A flight from the Southern Serengeti to Arusha is an optional add-on at Mid-range, and flights are part of the Luxury and High-end luxury levels. It saves a long road journey on your last day.",
    },
    {
      question: "Can I add a hot-air balloon safari?",
      answer:
        "Yes. A balloon safari costs $600 per person and is subject to weather and availability. Tick it in the booking box. It is already included at High-end luxury level.",
    },
    {
      question: "Can I extend the safari?",
      answer:
        "Yes. You can add extra nights in the Serengeti, a Zanzibar beach extension or a Kilimanjaro climb. Tick them in the booking box and we will include them in your quote.",
    },
  ],
  bestMonths: ["Dec", "Jan", "Feb", "Mar"],
  oldUrl: "/booking/5-day-mid-range-tarangire-ngorongoro-crater-and-ndutu-migration-safari/",
};
