import { IMG } from "@/data/safaris/shared";
import { dayTrip, dayTripLinks } from "./shared";

// From Ombeni's "1 Day Trip Ngorongoro Crater" document. He prices it at $500
// per person for 2 sharing.
export const ngorongoroDayTrip = dayTrip({
  slug: "ngorongoro-crater-day-trip",
  category: "safari",
  seoTitle: "Ngorongoro Crater Day Trip from Arusha | Trust Tours",
  metaDescription:
    "A private Ngorongoro Crater day trip from Arusha: a long game drive on the crater floor, a picnic lunch and a chance of black rhino. From $500 per person.",
  destinations: ["Arusha", "Ngorongoro"],
  title: "Ngorongoro Crater Day Trip – A Full Day on the Crater Floor",
  shortName: "Ngorongoro Crater Day Trip",
  days: 1,
  price: 500,
  heroImage: IMG.crater.src,
  summary:
    "A full-day private safari from Arusha into the Ngorongoro Crater, where grasslands, wetlands, woodland and a soda lake hold a remarkable variety of wildlife.",
  overview: [
    "Spend a full day in one of Africa's most extraordinary landscapes. You descend into the Ngorongoro Crater, where open grasslands, wetlands, woodland and a shallow alkaline lake support a remarkable variety of wildlife.",
    "This day trip suits you if you want to see Tanzania's famous wildlife but have limited time. You enjoy the scenic drive from Arusha, a long game drive on the crater floor, a picnic lunch at a designated site and plenty of chances to photograph iconic animals.",
    "It is a long day of around 12 to 14 hours, because the crater is a good distance from Arusha. If you would prefer a gentler pace, the 2-day safari with Tarangire adds a night in Karatu.",
  ],
  atAGlance: [
    { label: "Duration", value: "1 day, about 12 to 14 hours from Arusha" },
    { label: "Main activity", value: "Wildlife viewing and photography on the crater floor" },
    { label: "Start and finish", value: "Your Arusha hotel or another agreed place" },
    { label: "Safari style", value: "Private, with your own vehicle and guide" },
    { label: "Vehicle", value: "4×4 with a pop-up roof" },
    { label: "Meals", value: "Picnic lunch and drinking water" },
  ],
  highlights: [
    "The crater floor: A long game drive inside the volcanic caldera.",
    "Black rhino: The crater protects this endangered animal, although sightings aren't guaranteed.",
    "Lions and elephants: Often seen on the open plains and woodland edges.",
    "Picnic by the wetlands: Lunch at a designated site, sometimes near a hippo pool.",
    "Views from the rim: Look across the whole caldera before you descend.",
  ],
  itinerary: [
    {
      day: 1,
      time: "5:00 am",
      title: "Pickup from Arusha",
      description:
        "Your driver-guide meets you at your hotel and you begin the early drive to the Ngorongoro Conservation Area. Bring a warm jacket, as the early hours can be chilly. We confirm breakfast arrangements with you before the day.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 2,
      time: "8:00 am",
      title: "Scenic drive to the highlands",
      description:
        "You travel through the changing landscapes of northern Tanzania towards the highlands, while your guide talks about the region's geography, farming and conservation areas. Timings depend on your pickup point, the roads and the entrance formalities.",
      image: IMG.craterRoad,
      meals: "",
      accommodation: "—",
    },
    {
      day: 3,
      time: "8:30 am",
      title: "Crater viewpoint and descent",
      description:
        "You enjoy panoramic views across the vast volcanic caldera, then descend on an authorised crater road. The steep walls frame grasslands, wetlands and woodland below.",
      meals: "",
      accommodation: "—",
    },
    {
      day: 4,
      time: "9:00 am",
      title: "Morning game drive",
      description:
        "You explore the crater floor with your guide, looking for lions, elephants, buffaloes, zebras, wildebeest, hyenas and other wildlife. The route depends on sightings, road access and the time available. Keep your camera ready, and follow your guide's instructions around animals.",
      image: IMG.craterRhino,
      meals: "",
      accommodation: "—",
    },
    {
      day: 5,
      time: "1:30 pm",
      title: "Picnic lunch",
      description:
        "You stop at an authorised picnic site for lunch and a rest. Some sites are near wetlands or hippo pools, where you may see birds and other wildlife from a safe distance. Never leave food unattended or approach the animals.",
      meals: "Picnic lunch",
      accommodation: "—",
    },
    {
      day: 6,
      time: "2:30 pm",
      title: "Afternoon wildlife viewing",
      description:
        "You continue through other parts of the crater. Depending on conditions, your guide may explore the grasslands, woodland edges and Lake Magadi, known for its alkaline water and birdlife. Flamingo numbers vary with the conditions.",
      image: IMG.craterZebra,
      meals: "",
      accommodation: "—",
    },
    {
      day: 7,
      time: "4:00 pm",
      title: "Climb out and return to Arusha",
      description:
        "You drive up the crater wall and complete the exit formalities, following the conservation area's visiting hours. You then travel back to Arusha, arriving at about 7 to 8.30pm, depending on the roads and the length of your game drive.",
      meals: "",
      accommodation: "—",
    },
  ],
  included: [
    "Vehicle: Private 4×4 safari vehicle with a pop-up roof.",
    "Guide: Professional English-speaking driver-guide.",
    "Pickup: Pickup and drop-off at the agreed place.",
    "Fees: Ngorongoro conservation and crater fees, itemised in your quote.",
    "Game drive: A game drive inside the Ngorongoro Crater.",
    "Meals: Picnic lunch and drinking water.",
    "Fuel: Fuel and vehicle costs for the day.",
  ],
  excluded: [
    "International flights.",
    "Accommodation before or after the day trip.",
    "Breakfast and dinner.",
    "Drinks other than those listed as included.",
    "Tips for your driver-guide.",
    "Personal expenses and souvenirs.",
    "Travel insurance and personal medical expenses.",
  ],
  sections: [
    {
      heading: "Best time to visit",
      paragraphs: [
        "Ngorongoro can be visited all year, and wildlife lives in the crater in every season. June to October is often fairly dry, while January and February can also be very rewarding. The rainy months bring greener scenery, cloudier views and wetter roads.",
      ],
    },
    {
      heading: "What to bring",
      bullets: [
        "A warm jacket for the early morning and the crater rim.",
        "Comfortable shoes.",
        "A sun hat, sunglasses and sunscreen.",
        "A camera or phone, and binoculars if you have them.",
        "Personal medication, travel documents and some cash for tips.",
      ],
    },
  ],
  faqs: [
    {
      question: "Will I see the Big Five?",
      answer:
        "The crater is home to lions, elephants, buffaloes, leopards and rhinos, but seeing all five in one day isn't guaranteed. Leopards and rhinos are especially hard to find.",
    },
    {
      question: "Why is the day so long?",
      answer:
        "The crater is a few hours' drive from Arusha, so an early start gives you the most time on the crater floor. If you would prefer a shorter day, we can arrange a night in Karatu instead.",
    },
    {
      question: "Is breakfast included?",
      answer:
        "Breakfast isn't part of the price, because you leave before most hotels serve it. We confirm the arrangements with you, and many hotels can prepare a packed breakfast.",
    },
  ],
  links: dayTripLinks("ngorongoro-crater-day-trip", [
    { href: "/guides/ngorongoro-crater-guide", label: "Ngorongoro Crater" },
    { href: "/guides/what-to-expect-on-safari", label: "What a safari day is like" },
  ]),
});
