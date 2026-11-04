import { IMG, STAYS_ARUSHA, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS } from "@/data/safaris/shared";
import { STAYS_NORTH_COAST, ZIMG, safariBeachTrip, stop } from "./shared";

// From Ombeni's "10-Day Tanzania Safari & Zanzibar Escape" ($3,990 mid-range,
// $7,350 luxury). His lodge names come first in each list. His Day 9 paired
// Mnemba with Mtende beach at the far south, so Mtende joins the southern day
// with the Salaam caves instead. Replaces the old entry and keeps its URL.
const first = (ids: string[], list: string[]) => [...ids, ...list.filter((id) => !ids.includes(id))];

export const tenDaySafariZanzibar = safariBeachTrip({
  slug: "10-day-safari-zanzibar-adventure",
  oldUrl:
    "/booking/11-day-adventure-is-perfect-a-perfect-combination-for-an-unforgettable-adventure-with-trust-tours-and-safaris-stay-at-5-star-or-4-star-hotels-and-lodges/",
  seoTitle: "10-Day Tanzania Safari & Zanzibar Escape | Trust Tours",
  metaDescription:
    "Tarangire, the Ngorongoro Crater and the Serengeti, then a flight to Zanzibar's north coast for Stone Town, Safari Blue and Mnemba. From $3,990 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
  title: "10-Day Tanzania Safari & Zanzibar Escape – Bush to Beach",
  shortName: "10-Day Safari & Zanzibar",
  days: 10,
  heroImage: IMG.serengetiLions.src,
  bestMonths: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  summary:
    "Four days on safari in Tarangire, the Ngorongoro Crater and the Serengeti, then a flight to Zanzibar for five nights on the north coast with the island's best excursions.",
  overview: [
    "This journey brings together Tanzania's great wildlife parks and the turquoise water of Zanzibar. It suits travellers who want comfort, real wildlife encounters, some culture and time to relax on the beach.",
    "From Arusha, you travel through Tarangire's baobab country, down into the Ngorongoro Crater and out onto the endless plains of the Serengeti, with a private vehicle and guide throughout.",
    "A flight then takes you to Nungwi on Zanzibar's north coast. From there you explore Stone Town, swim in the Salaam caves, sail on the Safari Blue trip and snorkel the Mnemba reefs, with time left over for the beach.",
  ],
  atAGlance: [
    { label: "Duration", value: "10 days, 9 nights" },
    { label: "Start", value: "Kilimanjaro International Airport (JRO)" },
    { label: "Finish", value: "Zanzibar International Airport" },
    { label: "Safari", value: "Tarangire, Ngorongoro Crater and the Serengeti" },
    { label: "Zanzibar", value: "5 nights in Nungwi, with 4 excursions" },
    { label: "Flight", value: "Serengeti to Zanzibar, included" },
  ],
  highlights: [
    "Tarangire: Elephant families and baobab trees.",
    "Ngorongoro Crater: A chance of black rhino on the crater floor.",
    "Serengeti: A full day on the plains, following the wildlife.",
    "Stone Town and a sunset dhow cruise: History, then the sea at dusk.",
    "Safari Blue and Mnemba: Two days snorkelling and sailing.",
  ],
  stayChoices: [
    stop("arusha", "Night 1", "Arusha", {
      "mid-range": first(["parrot-hotel"], STAYS_ARUSHA["mid-range"]),
      luxury: first(["arusha-coffee-lodge", "gran-melia-arusha"], STAYS_ARUSHA.luxury),
    }),
    stop("highlands", "Night 2", "Karatu and the Ngorongoro Highlands", {
      "mid-range": first(["marera-valley-lodge"], STAYS_HIGHLANDS["mid-range"]),
      luxury: first(["the-retreat-ngorongoro", "kitela-lodge"], STAYS_HIGHLANDS.luxury),
    }),
    stop("serengeti", "Nights 3–4", "Central Serengeti", {
      "mid-range": first(["serengeti-serena"], STAYS_CENTRAL_SERENGETI["mid-range"]),
      luxury: first(["four-seasons-serengeti", "kubu-kubu"], STAYS_CENTRAL_SERENGETI.luxury),
    }),
    stop("north-coast", "Nights 5–9", "Nungwi and Kendwa, northern Zanzibar", {
      "mid-range": first(["amaan-bungalows", "z-hotel-nungwi"], STAYS_NORTH_COAST["mid-range"]),
      luxury: first(["riu-palace-zanzibar", "royal-zanzibar"], STAYS_NORTH_COAST.luxury),
    }),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Arusha",
      description:
        "Our representative welcomes you at Kilimanjaro International Airport and drives you to your hotel in Arusha, about an hour away. Depending on your arrival time, relax in the gardens or rest after your flight.\n\nAfter dinner, your safari guide briefs you on the days ahead and answers your questions.",
      meals: "Dinner",
      accommodation: "Your chosen hotel in Arusha",
      stayId: "arusha",
    },
    {
      day: 2,
      title: "Tarangire National Park",
      description:
        "You drive about two and a half hours to Tarangire, famous for its large elephant herds, ancient baobabs and the river that draws wildlife in the dry season. A full-day game drive looks for elephants, lions, leopards, giraffes, zebras, buffaloes and some of the park's 500-plus bird species, with a picnic lunch in the park.\n\nIn the late afternoon, you continue to your lodge in the Ngorongoro Highlands.",
      image: IMG.tarangire,
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen lodge in the highlands",
      stayId: "highlands",
    },
    {
      day: 3,
      title: "Ngorongoro Crater and on to the Serengeti",
      description:
        "After an early breakfast, you descend 600 metres into the Ngorongoro Crater, one of the densest concentrations of wildlife in Africa. You may see black rhino, lions, hyenas, hippos, flamingos, buffaloes and elephants, with a picnic lunch on the crater floor.\n\nYou then cross the highlands to the Serengeti, with a game drive on the way to your camp.",
      image: IMG.crater,
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen camp in the Serengeti",
      stayId: "serengeti",
    },
    {
      day: 4,
      title: "A full day in the Serengeti",
      description:
        "Today is dedicated to the Serengeti. Your guide follows recent sightings and the season to find lions, leopards, cheetahs, elephants and, at the right time of year, the herds of the Great Migration. Lunch is a picnic on the plains.\n\nAn early-morning hot-air balloon flight can be added at extra cost.",
      image: IMG.serengetiLion,
      meals: "Breakfast, picnic lunch, dinner",
      accommodation: "Your chosen camp in the Serengeti",
      stayId: "serengeti",
    },
    {
      day: 5,
      title: "Sunrise game drive and the flight to Zanzibar",
      description:
        "A final early game drive catches predators returning from the night's hunt. After breakfast, you transfer to the airstrip for your flight to Zanzibar, sometimes via Arusha.\n\nOn arrival, your driver takes you to Nungwi on the north coast, with the rest of the day free by the sea.",
      image: IMG.flight,
      meals: "Breakfast",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 6,
      title: "Stone Town and a sunset dhow cruise",
      description:
        "After a relaxed morning, you travel to Stone Town for a guided walk past the Old Fort, the House of Wonders (under restoration), the Freddie Mercury museum and the spice market.\n\nIn the evening, you board a traditional dhow for a sunset cruise along the coast, with drinks and local snacks, before returning to Nungwi.",
      image: ZIMG.dhowSunset,
      meals: "Breakfast",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 7,
      title: "Salaam caves, Mtende beach and The Rock",
      description:
        "You head south to the Salaam caves, limestone caverns with a clear freshwater pool where you can swim. Next is Mtende, a small, sheltered beach of white sand between coral cliffs.\n\nYou finish at The Rock, the famous restaurant on a rock in the sea, for lunch with an ocean view, before driving back north.",
      notes: ["Lunch at The Rock is paid at the restaurant, and booking ahead is essential. We reserve your table."],
      meals: "Breakfast",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 8,
      title: "Safari Blue",
      description:
        "Zanzibar's best-known sea excursion: you sail a traditional dhow through Menai Bay, snorkel over coral, look out for dolphins, explore mangroves and relax on a sandbank. Lunch is a seafood barbecue with tropical fruit.",
      image: ZIMG.snorkel,
      meals: "Breakfast, seafood lunch",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 9,
      title: "Mnemba snorkelling and a last afternoon on the beach",
      description:
        "A short drive to Matemwe and a boat out to the Mnemba Atoll Marine Conservation Area, one of the finest snorkelling spots in East Africa, with tropical fish, turtles and coral gardens.\n\nThe afternoon is free for a final swim and photographs before your farewell evening.",
      notes: ["Mnemba Island itself is private, so trips visit the surrounding reefs."],
      meals: "Breakfast",
      accommodation: "Your chosen hotel on the north coast",
      stayId: "north-coast",
    },
    {
      day: 10,
      title: "Departure from Zanzibar",
      description:
        "Enjoy a final breakfast overlooking the ocean before your transfer to Zanzibar International Airport for your flight home.",
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  prices: [
    {
      id: "mid-range",
      usd: 3990,
      summary: "Comfortable lodges and camps on safari, full board, then bed and breakfast at a north-coast hotel.",
      includes: [
        "Full board on safari",
        "Bed and breakfast in Zanzibar",
        "Private 4×4 Land Cruiser and guide",
        "Flight from the Serengeti to Zanzibar",
        "All the excursions in the itinerary",
      ],
    },
    {
      id: "luxury",
      usd: 7350,
      summary: "Everything in Mid-range, with luxury lodges and camps and a beachfront resort.",
      includes: [
        "Luxury safari lodges and premium tented camps",
        "A luxury beachfront resort in Zanzibar",
        "Superior room categories",
        "Premium dining",
        "VIP airport assistance where available",
      ],
    },
  ],
  included: [
    "Safari: Game drives in Tarangire, the Ngorongoro Crater and the Serengeti, full board.",
    "Zanzibar: Bed and breakfast, plus the seafood lunch on Safari Blue.",
    "Stone Town: A guided tour and a sunset dhow cruise.",
    "South coast: The Salaam caves, Mtende beach and transport to The Rock.",
    "Safari Blue: A full-day dhow excursion with snorkelling equipment.",
    "Mnemba: A snorkelling boat trip with equipment.",
    "Taxes: Government taxes and VAT.",
  ],
  excursionsIncluded: ["safari-blue", "mnemba-snorkelling", "sunset-dhow-cruise", "rock-restaurant"],
  sections: [],
  faqs: [
    {
      question: "When is the best time for this trip?",
      answer:
        "June to October is dry and excellent for both wildlife and beaches, and December to February is good too. Where the migration herds are depends on the month, so your guide plans the Serengeti day around them.",
    },
  ],
});
