import { IMG } from "@/data/safaris/shared";
import { dayTrip, dayTripLinks } from "./shared";

// From Ombeni's "1-Day Tarangire National Park Safari" document.
export const tarangireDayTrip = dayTrip({
  slug: "tarangire-day-trip",
  category: "safari",
  seoTitle: "Tarangire Day Trip from Arusha | Trust Tours",
  metaDescription:
    "A private Tarangire day safari from Arusha: elephant herds, giant baobabs, a long game drive and a picnic lunch in the park. From $455 per person.",
  destinations: ["Arusha", "Tarangire"],
  title: "Tarangire Day Trip – Elephants and Baobabs from Arusha",
  shortName: "Tarangire Day Trip",
  days: 1,
  price: 455,
  heroImage: IMG.tarangire.src,
  summary:
    "A full day in Tarangire National Park from Arusha, with its large elephant herds, ancient baobab trees and the river that draws wildlife in the dry season.",
  overview: [
    "Tarangire National Park is one of Tanzania's outstanding wildlife areas, famous for its large elephant herds, giant baobab trees, varied birdlife and the Tarangire River, which draws animals in when the land around it dries out.",
    "A day trip is a great choice if you are staying in Arusha and want a genuine safari without an overnight stay. You leave early, spend around seven to eight hours in the park with a picnic lunch, and are back in Arusha by early evening.",
    "You travel in a private 4×4 with a pop-up roof, so your guide can stay longer wherever the wildlife is best.",
  ],
  atAGlance: [
    { label: "Duration", value: "1 day, about 9 to 11 hours" },
    { label: "Time in the park", value: "About 7 to 8 hours" },
    { label: "Distance", value: "About 120 km, around 2 hours each way" },
    { label: "Start and finish", value: "Your Arusha hotel or another agreed place" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Vehicle", value: "4×4 with a pop-up roof" },
  ],
  highlights: [
    "Elephant herds: Tarangire is known for its large family groups.",
    "Giant baobabs: The park's ancient trees make striking photographs.",
    "A full day of game viewing: Around seven to eight hours in the park.",
    "Birdlife: Bee-eaters, hornbills, eagles and ostriches.",
    "Back the same day: No overnight stay needed.",
  ],
  itinerary: [
    {
      day: 1,
      time: "5:00 am",
      title: "Pickup in Arusha",
      description:
        "Your driver-guide meets you at your hotel in Arusha. After a short introduction, you set off in a 4×4 safari vehicle with a pop-up roof, made for wildlife viewing and photography.\n\nAs you leave the city, the scenery changes to villages, farmland and open country, and your guide answers your questions about Tanzania's wildlife on the way.",
      hours: "About 2 hours to the park",
      meals: "",
      accommodation: "—",
    },
    {
      day: 2,
      time: "7:00 am",
      title: "Into Tarangire National Park",
      description:
        "After the park-entry formalities, you begin exploring acacia woodland, open grassland, riverine vegetation and baobabs. Your guide chooses the route according to the time available, recent sightings and the roads.\n\nThe first sightings might be impalas, zebras, giraffes, baboons, warthogs or elephants. Nothing is guaranteed, but the variety of habitats gives you excellent chances.",
      image: IMG.baobabs,
      meals: "",
      accommodation: "—",
    },
    {
      day: 3,
      time: "Late morning",
      title: "Elephants and baobabs",
      description:
        "Tarangire is especially known for its elephants. You may watch family groups feeding, walking between the trees or visiting water, while your guide explains how they live together.\n\nThe baobabs are another highlight, and their huge trunks make memorable backgrounds for photographs. Your guide may also point out termite mounds, birds of prey and smaller animals that are easy to miss.",
      image: IMG.elephantsVehicle,
      meals: "",
      accommodation: "—",
    },
    {
      day: 4,
      time: "1:00 pm",
      title: "Picnic lunch",
      description:
        "You stop at a designated picnic site for lunch and a rest before the afternoon. Picnic sites are shared with other visitors, so keep food secured and don't feed the wildlife.",
      meals: "Picnic lunch",
      accommodation: "—",
    },
    {
      day: 5,
      time: "1:45 pm",
      title: "Afternoon game drive",
      description:
        "You continue through the park looking for buffalo, wildebeest, zebra, giraffes and antelope. Lions and other predators may be resting in the shade or moving through the grass, although sightings can never be promised.\n\nYour guide decides whether to explore the river, woodland or open plains, depending on the day. The birdlife is a highlight too, with bee-eaters, hornbills, eagles and ostriches among the species you may see.",
      image: IMG.tarangire,
      meals: "",
      accommodation: "—",
    },
    {
      day: 6,
      time: "3:30 pm",
      title: "Final sightings and return to Arusha",
      description:
        "You enjoy a last viewing stop before heading for the gate, leaving enough time to exit within the park's hours. You then drive back to Arusha, arriving at about 6 to 6.30pm depending on traffic, and your driver drops you at your hotel.",
      notes: [
        "If you are travelling on somewhere else that evening, please tell us in advance so we can plan the timing.",
      ],
      meals: "",
      accommodation: "—",
    },
  ],
  included: [
    "Transport: Return transport from Arusha in a 4×4 safari vehicle with a pop-up roof.",
    "Guide: Professional English-speaking driver-guide.",
    "Park fees: Tarangire National Park entry fees and vehicle charges.",
    "Game drives: A full day in the park.",
    "Meals: Picnic lunch.",
    "Drinks: Drinking water during the day.",
    "Pickup: Hotel pickup and drop-off in Arusha.",
  ],
  excluded: [
    "International and domestic flights.",
    "Tanzania visa fees.",
    "Travel and medical insurance.",
    "Accommodation before or after the day trip.",
    "Tips for your driver-guide.",
    "Alcoholic drinks, soft drinks and extra snacks.",
    "Personal purchases and souvenirs.",
    "Optional activities, such as balloon or walking safaris, which need separate arrangements.",
  ],
  sections: [
    {
      heading: "Best time to visit Tarangire",
      table: {
        headers: ["Months", "What to expect"],
        rows: [
          ["June to October", "Often the best time for wildlife, as animals gather around the Tarangire River and other permanent water."],
          ["November and December", "The short rains bring greener landscapes, and the wildlife spreads out. Roads and sightings vary."],
          ["January and February", "Good wildlife viewing, although animals may be more spread out than in the dry season."],
          ["March to May", "The long rains can make some roads muddy and travel times less predictable."],
        ],
      },
      note: "Tarangire is open all year. The best month depends on whether you care most about concentrated wildlife, green scenery, birds or photography.",
    },
    {
      heading: "What to bring",
      bullets: [
        "Comfortable, neutral-coloured clothing and closed shoes.",
        "A hat, sunglasses and sunscreen.",
        "A camera, binoculars and spare batteries.",
        "A reusable water bottle and a light jacket for the early start.",
        "Personal medication, insect repellent and some cash for tips.",
      ],
    },
  ],
  faqs: [
    {
      question: "Is a day trip to Tarangire worth it?",
      answer:
        "Yes, if you're staying in Arusha. The drive is about two hours each way, which leaves around seven to eight hours in the park. It's a long day, but a rewarding one.",
    },
    {
      question: "What animals will I see?",
      answer:
        "Elephants are the park's best-known sight. You may also see giraffes, zebras, wildebeest, buffalo, antelope and many birds, and with luck lions, hyenas or leopards. Wildlife sightings are never guaranteed.",
    },
    {
      question: "Can I add a night and see the Ngorongoro Crater too?",
      answer:
        "Yes. The 2-day Tarangire and Ngorongoro safari does exactly that, with a night in Karatu between the two parks.",
    },
  ],
  links: dayTripLinks("tarangire-day-trip", [
    { href: "/guides/tarangire-guide", label: "Tarangire National Park" },
    { href: "/guides/what-to-expect-on-safari", label: "What a safari day is like" },
  ]),
});
