import { dayTrip, dayTripLinks } from "./shared";

// From Ombeni's "1 Day Trip Arusha National Park" document, written in our own
// words. Its group prices may come from another operator's page, so it uses
// his day-trip rate of $455 per person for 2 sharing.
export const arushaNationalParkDayTrip = dayTrip({
  slug: "arusha-national-park-day-trip",
  category: "safari",
  seoTitle: "Arusha National Park Day Trip | Trust Tours",
  metaDescription:
    "A guided walking safari and 4×4 game drive in Arusha National Park, with Mount Meru views, giraffes, colobus monkeys and the Momella Lakes. From $455 pp.",
  destinations: ["Arusha", "Mount Meru"],
  title: "Arusha National Park Day Trip – Walking Safari and Game Drive",
  shortName: "Arusha National Park Day Trip",
  days: 1,
  price: 455,
  heroImage: "/images/meru-montane-forest.jpg",
  summary:
    "Explore Arusha National Park on foot with an armed ranger, then by 4×4 through forest, grassland and the Momella Lakes, beneath the slopes of Mount Meru.",
  overview: [
    "Arusha National Park is one of the most varied short safaris in northern Tanzania. Unlike a usual game drive, where you stay in the vehicle, here you can explore on foot with an authorised ranger before continuing by 4×4 through forest, open grassland and the Momella Lakes.",
    "You may see giraffes, buffaloes, zebras, warthogs, blue monkeys and black-and-white colobus monkeys, along with many birds. The scenery takes in Mount Meru, crater landscapes, forested slopes and lakes that attract flamingos and other waterbirds.",
    "The park is close to Arusha, so it makes an easy day out, a good first taste of safari before a longer trip, or a gentle day before or after a Kilimanjaro climb.",
  ],
  atAGlance: [
    { label: "Duration", value: "1 day, about 6 to 10 hours with transfers" },
    { label: "Main activities", value: "Walking safari, 4×4 game drive and the Momella Lakes" },
    { label: "Distance", value: "About 30 to 45 minutes from Arusha, or around an hour from Moshi" },
    { label: "Start and finish", value: "Your hotel in Arusha or Moshi" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Meals", value: "Lunch box, soft drinks and water" },
  ],
  highlights: [
    "A walking safari: Explore on foot with an authorised ranger.",
    "Mount Meru: Tanzania's second-highest mountain makes a dramatic backdrop on clear days.",
    "Colobus monkeys: Look for them in the forest canopy.",
    "Momella Lakes: Flamingos and other waterbirds, depending on the season.",
    "Ngurdoto Crater: Sometimes called \"Little Ngorongoro\", with buffalo grazing on its floor.",
  ],
  itinerary: [
    {
      day: 1,
      time: "7:00 am",
      title: "Pickup and drive to the park",
      description:
        "Your guide meets you at your hotel or pickup point and talks you through the day. After checking that you have water, sun protection and suitable walking shoes, you set off for the park, about 45 minutes from Arusha or an hour from Moshi.\n\nOn the way, you see villages and the countryside around Mount Meru while your guide explains the park's wildlife and landscapes.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 2,
      time: "8:00 am",
      title: "Guided walking safari",
      description:
        "One of the special things about this park is exploring on foot with an authorised ranger. Walking lets you notice tracks, plants, insects, birds and the small details you would miss from a vehicle.\n\nYou may see giraffes, buffaloes, warthogs and other wildlife from a safe distance. Your ranger chooses the permitted route, keeps a safe distance from the animals and explains how to behave around them. The forest can be cool and shaded, and the pace depends on the route, the weather and your fitness.",
      notes: [
        "Walking safaris are arranged through the park and led by a ranger. Never approach wildlife on your own.",
      ],
      image: { src: "/images/meru-jungle.jpg", alt: "A forest trail through thick green vegetation on the slopes of Mount Meru" },
      meals: "",
      accommodation: "—",
    },
    {
      day: 3,
      time: "10:30 am",
      title: "Forest, crater and mountain views",
      description:
        "After your walk, you enjoy the scenery and learn about the park's habitats. Arusha National Park packs montane forest, open grassland, crater landscapes and lakes into a fairly small area.\n\nOn clear days, Mount Meru rises behind it all. The park is also known for Ngurdoto Crater, sometimes called \"Little Ngorongoro\", with steep forested slopes and grassy areas where buffaloes graze.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 4,
      time: "11:00 am",
      title: "Game drive through the park",
      description:
        "You continue by safari vehicle through grassland and woodland, with your guide choosing the route according to recent sightings, the roads and the time left. You may see giraffes, zebras, buffaloes, warthogs and antelope, and in the forest, blue monkeys and black-and-white colobus monkeys.\n\nThe drive lets you cover more ground and reach areas that the walking route doesn't, while your guide explains the differences between the forest, grassland and wetland.",
      image: { src: "/images/safari-giraffes.jpg", alt: "Giraffes browsing among trees on a game drive" },
      meals: "",
      accommodation: "—",
    },
    {
      day: 5,
      time: "12:30 pm",
      title: "The Momella Lakes",
      description:
        "You drive to the Momella Lakes, known for their birdlife and views of Mount Meru. Depending on the season and the water, you may see flamingos, other waterbirds and wildlife near the shore. The colour of the water changes with the light and conditions, so the lakes look different through the year.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 6,
      time: "1:00 pm",
      title: "Picnic lunch and return",
      description:
        "You enjoy your lunch box at a picnic site, with time to rest and take in the surroundings. Afterwards, you meet your driver for the transfer back. If you are staying in Arusha, the return is quick. From Moshi, allow a little longer.",
      notes: [
        "If you have a flight, a climb briefing or another plan later that day, tell us in advance so we can time the return.",
      ],
      meals: "Lunch box",
      accommodation: "—",
    },
  ],
  included: [
    "Transfers: Return transfer to the park from your hotel in Arusha or Moshi.",
    "Walking safari: A guided walk with an authorised ranger.",
    "Game drive: A game drive in a safari vehicle.",
    "Meals: Lunch box, soft drinks and water.",
    "Park fees: Arusha National Park entry fees.",
    "Guide: An experienced English-speaking guide.",
    "Binoculars: One pair in the vehicle.",
  ],
  excluded: [
    "Tips for your guide.",
    "Alcoholic drinks.",
    "International flights and accommodation.",
    "Personal expenses.",
  ],
  sections: [
    {
      heading: "Practical advice",
      bullets: [
        "Wear comfortable walking shoes: The walk may cross uneven ground and forest trails.",
        "Bring sun protection: Pack sunscreen, sunglasses and a hat, even though parts of the walk are shaded.",
        "Bring binoculars if you have them: They help with birds and distant wildlife.",
        "Follow the ranger: Stay on the authorised route and never approach wildlife.",
        "Check the weather: Cloud and rain can hide Mount Meru and make trails wet.",
      ],
    },
    {
      heading: "Best time to visit",
      paragraphs: [
        "The park is open all year. The drier months, especially June to October, are good for walking and wildlife, and December to February can be lovely too. The green season brings lush scenery and excellent birdwatching, but rain can affect the trails and the views.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is the walking safari safe?",
      answer:
        "Yes, when you follow the ranger. Walks are led by an authorised ranger, who chooses the route and keeps a safe distance from the animals.",
    },
    {
      question: "Will I see lions or elephants?",
      answer:
        "This park is about giraffes, buffaloes, monkeys, birds and scenery rather than big cats. For lions and elephants, a day in Tarangire or the Ngorongoro Crater is the better choice.",
    },
    {
      question: "Can you pick me up in Moshi?",
      answer:
        "Yes. The drive is around an hour from Moshi, compared with about 45 minutes from Arusha.",
    },
  ],
  links: dayTripLinks("arusha-national-park-day-trip", [
    { href: "/guides/mount-meru-climb-guide", label: "Mount Meru and Arusha National Park" },
    { href: "/guides/what-to-expect-on-safari", label: "What a safari day is like" },
  ]),
});
