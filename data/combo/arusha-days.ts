// The Arusha days at the start of the 13- and 15-day safari-and-Zanzibar trips.

import type { ItineraryDay } from "@/data/packages";

export const arushaFreeDay = (day: number, stayId: string, second = false): ItineraryDay => ({
  day,
  title: second ? "A free day in Arusha, or a cultural visit" : "A day to settle in around Arusha",
  description: second
    ? "Another easy day before the main safari. Stay at the hotel and organise your bags and cameras, or join an optional excursion: a coffee farm on the slopes of Mount Meru, a walk through a village or a visit to the town's markets and craft shops.\n\nIn the evening, your guide checks that you're ready for the drive to Tarangire in the morning."
    : "A free day to recover from the flight and adjust to the time. Relax by the pool, read in the garden or ask us to arrange a short outing in town, such as the central market or a cultural centre.\n\nYour guide is on hand to answer questions about wildlife, photography and what to pack for the days ahead.",
  notes: ["Town tours, coffee-farm visits and other outings on this day are optional extras."],
  meals: "Breakfast, dinner",
  accommodation: "Your chosen hotel in Arusha",
  stayId,
});

export const arushaNationalParkDay = (day: number, stayId: string): ItineraryDay => ({
  day,
  title: "Arusha National Park: forest, lakes and Mount Meru",
  description:
    "Your first game drive is in Arusha National Park, a small, beautiful park on the slopes of Mount Meru, about an hour from town. Its montane forest, open glades, the Ngurdoto Crater and the Momella Lakes are home to giraffes, buffaloes, zebras, warthogs, black-and-white colobus monkeys and many birds, often with flamingos on the lakes.\n\nIf you'd like to stretch your legs, you can add a guided walk with an armed ranger. You return to Arusha in the late afternoon.",
  image: { src: "/images/meru-jungle.jpg", alt: "A forest trail through thick green vegetation on the slopes of Mount Meru" },
  notes: ["The walk with a ranger is optional and depends on the park's rules on the day."],
  meals: "Breakfast, picnic lunch, dinner",
  accommodation: "Your chosen hotel in Arusha",
  stayId,
});
