import { IMG, STAYS_HIGHLANDS, stop } from "@/data/safaris/shared";
import { flyInTrip } from "./shared";

// From Ombeni's "5 Days Premium Mid-Range Private Tanzania Safari" (a quote for
// one client, Sep 2026): $3,250 per person, with the one-way flight from the
// Serengeti included and the balloon safari ($600) excluded. The document names
// Kudu, "Farm of Dream" and Maramboi for night 1 and Lemala Nanyukie and Kubu
// Kubu for the Serengeti; the verified ones are offered here.
export const fiveDayPremiumFlyIn = flyInTrip({
  slug: "5-day-premium-safari-fly-to-zanzibar",
  seoTitle: "5-Day Premium Safari with a Flight to Zanzibar | Trust Tours",
  metaDescription:
    "Tarangire, a crater-rim walk, a Maasai visit, the Ngorongoro Crater and two nights in the Serengeti, then fly to Zanzibar. Private, from $3,250 pp.",
  destinations: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti", "Zanzibar"],
  bestMonths: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
  title: "5-Day Premium Safari – Tarangire, Ngorongoro and the Serengeti, then Fly to Zanzibar",
  shortName: "5-Day Premium Safari, Fly to Zanzibar",
  days: 5,
  heroImage: IMG.serengetiLion.src,
  summary:
    "A private, unhurried safari through Tarangire, the Ngorongoro Highlands and Crater and the Serengeti, with a crater-rim walk and a Maasai visit, ending with a flight from the Serengeti to Zanzibar.",
  overview: [
    "This safari is built around a relaxed rhythm. The main game drives happen in the cool early hours, when animals are most active. You return for a proper hot lunch and time at the lodge in the heat of the day, then head out again for a shorter afternoon drive.",
    "You travel in your own Land Cruiser with a pop-up roof and a guide who stays with you from start to finish, sharing what they know about wildlife, photography, conservation and Tanzanian culture. Nobody else shares your vehicle.",
    "The route runs from Tarangire's elephants and baobabs to a guided walk on the Ngorongoro Crater rim, a Maasai village, a full morning in the crater and two nights at a tented camp in the Serengeti. On the last morning, you have a final game drive before flying to Zanzibar, with no long drive back to Arusha.",
  ],
  atAGlance: [
    { label: "Duration", value: "5 days, 4 nights" },
    { label: "Start", value: "Your hotel in Arusha" },
    { label: "Finish", value: "Zanzibar, by air from the Serengeti" },
    { label: "Parks", value: "Tarangire, Ngorongoro and the Serengeti" },
    { label: "Experiences", value: "Crater-rim walk, Maasai visit, optional balloon" },
    { label: "Style", value: "Private Land Cruiser and guide" },
  ],
  highlights: [
    "Tarangire: Big elephant herds and giant baobab trees.",
    "Crater-rim walk: The Ngorongoro Crater on foot, with a ranger.",
    "Maasai village: An afternoon with a Maasai community.",
    "Ngorongoro Crater: A long morning on the crater floor, with a chance of black rhino.",
    "Serengeti: Two nights at a tented camp, and an optional sunrise balloon flight.",
    "Fly to Zanzibar: A last game drive, then a flight straight to the beach.",
  ],
  stayChoices: [
    stop("karatu", "Night 1", "Karatu, between Tarangire and Ngorongoro", {
      "mid-range": ["kudu-lodge", ...STAYS_HIGHLANDS["mid-range"].filter((id) => !["kudu-lodge", "ngorongoro-serena", "ngorongoro-sopa", "rhino-lodge"].includes(id))],
    }),
    stop("crater-rim", "Night 2", "The Ngorongoro Crater rim", {
      "mid-range": ["ngorongoro-serena", "ngorongoro-sopa", "rhino-lodge"],
    }),
    stop("serengeti", "Nights 3–4", "Central Serengeti", {
      "mid-range": ["lemala-nanyukie", "kubu-kubu"],
    }),
  ],
  itinerary: [
    {
      day: 1,
      title: "Arusha to Tarangire National Park",
      description:
        "Your guide collects you from your Arusha hotel at about 6:15 am for the 2 to 3 hour drive to Tarangire National Park, famous for its elephant herds and baobab trees. You enter the park in the cool of the morning, looking for elephants, lions, giraffes, zebras, buffaloes and the park's many birds, and take your time wherever the wildlife is good.\n\nYou stop for a hot lunch, then explore a different part of the park in the afternoon as the animals become active again. Afterwards, you drive on to your lodge in Karatu, arriving with time to settle in and relax before dinner.",
      image: IMG.tarangire,
      meals: "Breakfast, hot lunch, dinner",
      accommodation: "Your chosen lodge in Karatu",
      stayId: "karatu",
    },
    {
      day: 2,
      title: "A crater-rim walk and a Maasai village",
      description:
        "This day is about the highlands on foot, with no game drive. You drive through farmland and coffee country to the Ngorongoro Conservation Area, where a ranger leads a guided walk along the crater rim in the cool of the morning. Walking inside the crater isn't allowed, but the rim gives you wide views across it, montane forest and birdlife, at a pace that suits you.\n\nAfter a hot lunch, you visit a Maasai boma, subject to the community's availability, to learn about their homes, their cattle, their clothing and family life. You then check in at your lodge on the crater rim with time to enjoy the view before dinner.",
      image: IMG.craterRoad,
      notes: ["The walk's length depends on the conditions and the ranger on the day."],
      meals: "Breakfast, hot lunch, dinner",
      accommodation: "Your chosen lodge on the crater rim",
      stayId: "crater-rim",
    },
    {
      day: 3,
      title: "Ngorongoro Crater and on to the Serengeti",
      description:
        "After breakfast, you descend about 600 metres onto the crater floor for a long private game drive. Lions, elephants, buffaloes, hippos, zebras, wildebeest, hyenas and flamingos live here, and there's a chance of the endangered black rhino. You have lunch at a picnic site in the crater, so there's no need to rush out.\n\nIn the afternoon, you drive into the Serengeti, game viewing on the way as the highlands give way to the open plains, and arrive at your tented camp with time to enjoy it.",
      image: IMG.craterRhino,
      meals: "Breakfast, hot lunch, dinner",
      accommodation: "Your chosen camp in the Serengeti",
      stayId: "serengeti",
    },
    {
      day: 4,
      title: "The Serengeti, with an optional balloon safari",
      description:
        "If you've added the balloon safari, you leave camp at about 5:00 am for the launch site and float over the plains at sunrise for about an hour, followed by a bush breakfast. You then return to camp to rest, shower and enjoy a hot lunch, instead of heading straight out on a long drive.\n\nWithout the balloon, you head out early for a morning game drive and come back for lunch. Either way, the afternoon brings a shorter game drive, and you return to camp in good time for sunset and a relaxed last dinner in the Serengeti.",
      image: IMG.balloon,
      notes: ["The balloon safari costs $600 per person. Add it in the booking box."],
      meals: "Breakfast, hot lunch, dinner",
      accommodation: "Your chosen camp in the Serengeti",
      stayId: "serengeti",
    },
    {
      day: 5,
      title: "A last game drive and the flight to Zanzibar",
      description:
        "After an early breakfast, you set out on a final morning game drive, one of the best times to find lions, leopards and cheetahs. Your guide keeps an eye on the flight time and brings you back to camp to collect your bags and freshen up.\n\nDepending on the flight, you have lunch at camp or on the way to the airstrip, then fly directly from the Serengeti to Zanzibar to begin the beach part of your holiday.",
      image: IMG.flight,
      notes: ["If you're flying home instead, we can book the flight to Arusha or Kilimanjaro."],
      meals: "Breakfast, lunch depending on the flight",
      accommodation: "—",
    },
  ],
  price: {
    id: "mid-range",
    label: "Premium mid-range",
    usd: 3250,
    summary: "Ombeni's premium mid-range package: selected lodges, a tented camp in the Serengeti and a private guide and vehicle throughout.",
    includes: [
      "A lodge in Karatu and a lodge on the crater rim",
      "Two nights at a tented camp in the Serengeti",
      "One-way flight from the Serengeti to Zanzibar",
      "Crater-rim walk and a Maasai visit",
      "Private Land Cruiser and guide",
      "Full board throughout",
    ],
  },
  included: [
    "Vehicle and guide: A private 4×4 Land Cruiser with a pop-up roof and a professional English-speaking guide throughout.",
    "Flight: The one-way flight from the Serengeti to Zanzibar.",
    "Accommodation: A lodge in Karatu, a lodge on the Ngorongoro Crater rim and two nights at a tented camp in the Serengeti.",
    "Meals: Full board, with a hot lunch most days.",
    "Park fees: All national park entry fees, and the Ngorongoro Crater service and vehicle fees.",
    "Experiences: The crater-rim walk with a ranger and the Maasai boma visit.",
    "Game drives: Unlimited game drives in the itinerary.",
    "Drinking water: Throughout the safari.",
    "Transfers: Your hotel pickup in Arusha and the airstrip transfer.",
  ],
  excluded: ["Hot-air balloon safari, $600 per person."],
  addOns: ["balloon-safari", "extra-serengeti-night", "single-supplement", "zanzibar-extension"],
  sections: [
    {
      heading: "The rhythm of each day",
      paragraphs: [
        "Not every day is a full day in the vehicle. The plan is to be out early, when the wildlife is most active, back for a hot lunch and some rest in the heat of the day, then out again for a shorter afternoon drive or an experience, returning in time to enjoy the lodge in the evening.",
        "Wildlife doesn't keep a timetable, so your guide can always stay longer at an exceptional sighting. On the last morning, the flight time sets how long you can stay in the park.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is the balloon safari included?",
      answer:
        "No. It's an optional extra at $600 per person, with a bush breakfast after landing. Add it in the booking box and we'll book it for your second Serengeti morning.",
    },
    {
      question: "When can I take this safari?",
      answer:
        "Ombeni runs it from July to October and from November to March. April and May are the long rains, when some camps close and the roads are harder.",
    },
  ],
});
