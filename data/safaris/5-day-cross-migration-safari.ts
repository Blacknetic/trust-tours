import { IMG, STAYS_CENTRAL_SERENGETI, STAYS_HIGHLANDS, STAYS_NORTH_SERENGETI, crossingTrip, stop } from "./shared";

// Cross Migration Safari, from Ombeni's "5-day Great Migration River Crossing
// Safari: recommended route" document.
export const crossMigration5Central = crossingTrip({
  slug: "5-day-cross-migration-safari",
  seoTitle: "5-Day Cross Migration Safari, Serengeti | Trust Tours",
  metaDescription:
    "A private 5-day cross migration safari: the Ngorongoro Crater, a night in Central Serengeti and two nights near the Mara River. From $2,275 per person.",
  destinations: ["Arusha", "Ngorongoro", "Serengeti"],
  title: "5-Day Cross Migration Safari – Ngorongoro, Central Serengeti & the Mara River",
  shortName: "5-Day Cross Migration Safari via Central Serengeti",
  days: 5,
  heroImage: IMG.steepBank.src,
  summary:
    "A balanced five-day private safari: the Ngorongoro Crater, a night in Central Serengeti and two nights in the north, with a full day searching for Mara River crossings.",
  overview: [
    "This five-day route gives you a more balanced safari than a four-day trip. You keep the Ngorongoro Crater, spend a night in Central Serengeti and still have two nights in the Northern Serengeti.",
    "The main Mara River crossing season generally runs from July to October. Tanzania's tourism guidance highlights July to September as a popular time, but the migration depends on the weather, so no date can guarantee a crossing.",
    "A five-day safari gives you time to enjoy different landscapes as you travel north, with one full day dedicated to searching for river crossings. Your guide uses recent sightings to decide where to spend it.",
    "If river crossings are your absolute priority, the best upgrade is a third night in the north. More time there means more chances to search different crossing points and follow the herds as they move.",
  ],
  atAGlance: [
    { label: "Duration", value: "5 days / 4 nights" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Main experience", value: "Great Migration and Mara River crossing search" },
    { label: "Best period", value: "July to October" },
    { label: "Route", value: "Arusha · Ngorongoro Crater · Central Serengeti · Northern Serengeti" },
    { label: "Start", value: "Arusha" },
    { label: "Finish", value: "Arusha, by road or optional flight" },
    { label: "Vehicle", value: "Private 4×4 safari vehicle with a pop-up roof" },
  ],
  highlights: [
    "Early crater descent: We aim to be on the crater floor at around 6am where the rules allow.",
    "Central Serengeti: A night among the resident lions, leopards and cheetahs.",
    "Two nights in the north: Time to explore around the Mara River.",
    "A dedicated search day: Day 4 is planned around the herds and the river.",
    "A choice of return: Fly back from the north, or return by road.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arusha to the Ngorongoro highlands",
      description:
        "Your private safari begins with a morning pickup from your Arusha hotel or another agreed location. You meet your professional guide, hear about the route and the wildlife, and travel towards the Ngorongoro Conservation Area.\n\nAlong the way, you see farmland, highland vegetation and changing views as you climb. There may be chances to stop for photographs, depending on your departure time and where you are staying.\n\nAfter checking in to your lodge, you relax and enjoy dinner. Your guide explains the next morning's crater visit, including the early start and what to carry for the day. An early night is a good idea.",
      experience: "An easy first day through the highlands, ready for an early crater start.",
      image: IMG.craterRoad,
      meals: "Dinner",
      accommodation: "Your chosen stay in the highlands",
      stayId: "highlands",
    },
    {
      day: 2,
      title: "Early Ngorongoro Crater descent, then on to Central Serengeti",
      description:
        "You wake early, have breakfast or take a packed breakfast, and leave for the crater. We plan for an early descent, aiming for about 6am if the access arrangements and rules for your date allow it.\n\nOn the crater floor, you spend the morning exploring grasslands, wetlands, woodland and water sources. Your guide looks for lions, elephants, buffaloes, zebras, wildebeest, hyenas and hippos, while watching out for the endangered black rhino. Sightings are never guaranteed, but few places hold so much wildlife in such a spectacular volcanic setting.\n\nAfter a picnic lunch at an authorised site and more game viewing, you climb out of the crater and travel to Serengeti National Park, reaching your Central Serengeti camp or lodge by evening.",
      experience: "The crater in the morning and the Serengeti by evening.",
      notes: [
        "This is a big travel day. How much extra game viewing you have in Central Serengeti depends on when you leave the crater, the roads, gate times and your camp's location.",
      ],
      image: IMG.crater,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in Central Serengeti",
      stayId: "central",
    },
    {
      day: 3,
      title: "Central to Northern Serengeti, following the migration",
      description:
        "After breakfast, you set out on a game-viewing journey north. Central Serengeti is known for its resident wildlife, so your guide watches for lions, leopards, cheetahs, elephants, giraffes, buffaloes and plains game. As you travel, the scenery changes to rolling hills, rocky outcrops, woodland and wide grasslands.\n\nYour guide weighs up recent sightings, the time of year and the state of the roads when deciding where to stop. You enjoy a picnic lunch on the way and continue to the Northern Serengeti, where the Mara River and the plains around it become the focus of your safari.\n\nOn arrival, you check in, enjoy dinner and talk through the next day's search with your guide.",
      experience: "A long, scenic game drive across the Serengeti.",
      notes: [
        "This day combines a transfer with game viewing. It isn't a full day at the Mara River, which comes on Day 4.",
      ],
      image: IMG.northPlains,
      meals: "Breakfast, picnic lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 4,
      title: "Full-day Mara River and Great Migration safari",
      description:
        "This is the key day of your safari. After an early breakfast, you explore the Northern Serengeti with your guide, focusing on suitable viewing areas along the Mara River and the migration routes around it.\n\nCrossings can be extraordinary. Large groups of wildebeest gather on the bank, hesitate, then sometimes move across in dramatic waves. Nile crocodiles live in the river, and you may also see hippos, lions, leopards and hyenas. However, the animals decide when and where to cross, and a herd may wait for hours, turn back or move elsewhere.\n\nYou follow park rules and your guide's instructions throughout. At designated crossing points, vehicles stay in authorised viewing areas, remain stationary as required and give the herd room to move. You enjoy a picnic lunch during the drive, or return to camp if that suits the day better, and continue game viewing in the afternoon.",
      experience: "A patient day beside the river, watching the herds decide.",
      notes: [
        "This day is a dedicated river-crossing search. It isn't a guaranteed crossing or a guaranteed sighting of any particular animal.",
      ],
      image: IMG.crossingBank,
      meals: "Breakfast, lunch and dinner",
      accommodation: "Your chosen camp or lodge in the north",
      stayId: "north",
    },
    {
      day: 5,
      title: "Final game drive and return by flight or road",
      description:
        "You enjoy breakfast at camp and, if your schedule allows, a short final game drive for one more look at the wildlife and open landscapes of the north.\n\nIf you are flying, your guide transfers you to the airstrip for your pre-booked flight to Arusha or another agreed destination. This is the quickest way to end your safari and avoids the long drive back.\n\nIf you are returning by road, you travel back by safari vehicle. It makes for a long day, and there may be less time for wildlife viewing. If you would like game drives on the way back, we agree the timing and any extra costs in advance.",
      experience: "A last look at the north before you head home.",
      notes: [
        "If you have an international flight the same day, we plan the connection carefully, with time for delays and transfers.",
      ],
      image: IMG.flight,
      meals: "Breakfast",
      accommodation: "—",
    },
  ],
  stayChoices: [
    stop("highlands", "Night 1", "Karatu and the Ngorongoro Highlands", STAYS_HIGHLANDS),
    stop("central", "Night 2", "Central Serengeti", STAYS_CENTRAL_SERENGETI),
    stop("north", "Nights 3 and 4", "Northern Serengeti and the Mara River", STAYS_NORTH_SERENGETI),
  ],
  sections: [
    {
      heading: "Why choose a five-day safari?",
      paragraphs: [
        "Five days gives you more than a short four-day trip: a game drive on the crater floor, a taste of Central Serengeti's resident wildlife and time in the migration region, without moving camp every night.",
      ],
      bullets: [
        "Four nights: One in the Ngorongoro or Karatu area, one in Central Serengeti and two in the Northern Serengeti.",
        "One full search day: Two nights in the north give you a whole day around the river.",
        "Room to extend: If a crossing is the main purpose of your trip, one or two extra nights in the north give you more chances to see one.",
      ],
    },
  ],
  faqs: [
    {
      question: "Should I choose this route or the 5-day safari via Tarangire?",
      answer:
        "Choose this route for a night in Central Serengeti and an easier journey north. Choose the Tarangire route if you would rather see baobabs and big elephant herds on your first day.",
    },
    {
      question: "Is the flight back to Arusha included?",
      answer:
        "Not at Mid-range, where it is an optional add-on. It is part of the Luxury and High-end luxury levels. We confirm flights together with your camp.",
    },
  ],
});
