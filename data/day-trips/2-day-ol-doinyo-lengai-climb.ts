import { dayTrip, dayTripLinks } from "./shared";

// From Ombeni's "2-Day Adventure to the Mountain of God" document, at his
// day-trip rate of $455 per person per day for 2 sharing. It replaces the old
// entry and keeps its URL.
export const lengaiClimb2 = dayTrip({
  slug: "2-day-ol-doinyo-lengai-climb",
  category: "trekking",
  difficulty: "Challenging",
  seoTitle: "2-Day Ol Doinyo Lengai Climb | Trust Tours",
  metaDescription:
    "Climb Ol Doinyo Lengai, the Mountain of God, on a 2-day trip from Arusha: a night near Lake Natron, a midnight ascent and sunrise views. From $910 pp.",
  destinations: ["Arusha", "Lake Natron", "Ol Doinyo Lengai"],
  title: "2-Day Ol Doinyo Lengai Climb – the Mountain of God",
  shortName: "2-Day Ol Doinyo Lengai Climb",
  days: 2,
  price: 910,
  tier: ["mid-range"],
  heroImage: "/images/ol-doinyo-lengai-2day.jpg",
  summary:
    "A demanding night climb of Ol Doinyo Lengai, the active volcano above Lake Natron, with a night near the lake and sunrise over the Great Rift Valley.",
  overview: [
    "Ol Doinyo Lengai is an active volcano rising above the Great Rift Valley near Lake Natron. Known in the Maasai language as the \"Mountain of God\", it is famous for its unusual geology, steep slopes, dramatic crater and wide views over the wilderness around it.",
    "This is a demanding mountain adventure, not a wildlife safari. You drive through remote northern Tanzania, spend the night near Lake Natron and start climbing around midnight with a local mountain guide, aiming to reach the crater rim around sunrise.",
    "After the descent, you rest at your accommodation before driving back to Arusha. Although Lengai is sometimes sold as a day trip, the long drive and the night climb mean two days is the safe minimum.",
  ],
  atAGlance: [
    { label: "Duration", value: "2 days / 1 night" },
    { label: "Summit", value: "About 2,962 metres" },
    { label: "Main activity", value: "A night ascent, sunrise views and a descent with a local guide" },
    { label: "Accommodation", value: "One night near Lake Natron, confirmed before booking" },
    { label: "Difficulty", value: "Very strenuous: steep, loose and exposed" },
    { label: "Start and finish", value: "Arusha" },
  ],
  highlights: [
    "A unique volcano: Ol Doinyo Lengai erupts natrocarbonatite, an unusual type of lava.",
    "A night ascent: Climb in the cool darkness with an experienced local guide.",
    "Sunrise over the Rift Valley: On a clear morning, views stretch over Lake Natron.",
    "Lake Natron: Salt flats, striking colours and seasonal flamingos.",
    "Ngare Sero waterfall: An optional gorge walk if time and energy allow.",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arusha to Lake Natron",
      description:
        "You leave Arusha at about 6.30 to 7am and head north towards Lake Natron, through highland and Rift Valley scenery with villages, open plains and distant volcanoes. It is a remote area, so the drive takes several hours and can be slower on rough sections.\n\nYou reach your accommodation near the lake in the early or mid afternoon. Resting before the night climb is important, but if you have the energy, you can take a guided walk to explore the lake or visit the Ngare Sero gorge and waterfall. The gorge walk can involve wet, slippery rocks and shallow streams, so good footwear matters.\n\nAfter dinner, your mountain guide briefs you on the route, conditions, equipment, water, emergency plans and turnaround times. You prepare your headlamp, warm layers, gloves and boots, and go to bed early.",
      experience: "A long, beautiful drive into the Rift Valley.",
      image: { src: "/images/lake-natron-flamingos.jpg", alt: "Flamingos on the shallow waters of Lake Natron" },
      meals: "Lunch and dinner",
      accommodation: "Accommodation near Lake Natron",
    },
    {
      day: 2,
      title: "Midnight ascent, sunrise and return to Arusha",
      description:
        "You wake around midnight, have a hot drink or light snack, and transfer to the start of the climb. Your guide checks the weather, the trail and the volcano before you set off.\n\nYou climb steeply in the dark by headlamp, over loose ash, volcanic gravel and rock, with some narrow sections. You keep a steady pace, stay close to your guide and take short rests. As you climb higher, the air cools and the route gets harder. Your guide watches how you are doing and decides whether it is safe to carry on.\n\nIf the route is open and you reach the safe viewpoint, you watch the sunrise over Lake Natron and the Rift Valley. You then descend carefully: loose ground makes going down just as tough as going up. Back at the base, you rest, rehydrate, have a meal and freshen up before the long drive back to Arusha.",
      experience: "A tough night climb to a sunrise you won't forget.",
      notes: [
        "Don't enter the crater or go near volcanic features unless your guide says the area is safe and permitted.",
        "If the climb takes longer than expected, a later departure or an extra night may be the safer choice.",
      ],
      image: { src: "/images/lengai-sunrise.jpg", alt: "Sunrise over the Rift Valley from the slopes of Ol Doinyo Lengai" },
      altitudeEnd: 2962,
      hours: "Night ascent, then the descent and drive",
      meals: "Breakfast and lunch",
      accommodation: "—",
    },
  ],
  included: [
    "Transport: Private 4×4 transport between Arusha and Lake Natron.",
    "Accommodation: One night near Lake Natron.",
    "Guide: A local mountain guide for the climb and descent.",
    "Fees: Local permissions and community or access fees.",
    "Meals: As listed, including a packed breakfast for the climb.",
    "Water: Drinking water for the climb.",
    "Transfers: To and from the start of the climb.",
    "Safety: A first-aid kit and a clear emergency plan.",
  ],
  excluded: [
    "International flights and airport transfers.",
    "Accommodation in Arusha before or after the climb.",
    "Extra nights caused by changes to the plan.",
    "Porters or extra support staff.",
    "Hiking equipment rental.",
    "Travel insurance covering strenuous trekking.",
    "Tips for your guide and driver.",
    "Drinks and snacks not listed as included.",
  ],
  sections: [
    {
      heading: "How hard is the climb?",
      paragraphs: [
        "Ol Doinyo Lengai is a very strenuous climb, even though it is much lower than Kilimanjaro. The route is steep, the surface is unstable and most of the ascent is in the dark. The descent can be just as hard.",
      ],
      bullets: [
        "Good fitness: You need strong cardiovascular fitness and experience of long uphill walks.",
        "Night starts: You should be comfortable hiking for many hours from the middle of the night.",
        "Steep ground: The terrain is uneven, steep and exposed.",
        "Ready to turn back: Your guide's safety decision always comes first.",
      ],
      note: "If you have a medical condition that could affect hard exercise, please seek medical advice before booking.",
    },
    {
      heading: "What to pack",
      bullets: [
        "Sturdy hiking boots with reliable grip.",
        "A headlamp with spare batteries.",
        "Warm and windproof layers, gloves and a warm hat.",
        "A sun hat, sunglasses and sunscreen for the descent.",
        "Water as advised by your guide, snacks and a small daypack.",
        "Trekking poles if you use them, and personal medication.",
      ],
    },
    {
      heading: "Safety on an active volcano",
      paragraphs: [
        "Ol Doinyo Lengai is an active volcano, so conditions and access can change, and the summit can never be guaranteed. Always climb with an experienced local guide, follow instructions about safe areas and turnaround times, and never approach fresh lava, unstable crater edges or gas vents.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I climb Ol Doinyo Lengai in one day from Arusha?",
      answer:
        "A safe attempt needs at least two days, for the drive to Lake Natron and the night climb. A third day gives you a more comfortable recovery before the drive back.",
    },
    {
      question: "Will I reach the summit?",
      answer:
        "Not necessarily. Weather, volcanic activity, access, trail conditions and fitness can all stop an attempt, and your guide's safety decision comes first.",
    },
    {
      question: "Will I see molten lava?",
      answer:
        "Not necessarily. Volcanic activity varies, and going near hazardous areas isn't allowed, so please don't book expecting to see lava.",
    },
    {
      question: "Is it suitable for beginners?",
      answer:
        "Not without good fitness and preparation for steep, strenuous hiking. Please be honest with us about your experience, and we'll advise you.",
    },
  ],
  links: dayTripLinks("2-day-ol-doinyo-lengai-climb", [
    { href: "/guides/ol-doinyo-lengai-guide", label: "Ol Doinyo Lengai guide" },
    { href: "/ol-doinyo-lengai", label: "All Ol Doinyo Lengai climbs" },
  ]),
});
