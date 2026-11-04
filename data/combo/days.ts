// Day plans that several Combo trips share, written from Ombeni's documents.
// Each trip passes its own day number and stop id; trip-specific days live in
// the trip files.

import type { ItineraryDay } from "@/data/packages";
import { IMG } from "@/data/safaris/shared";
import { ZIMG } from "@/data/zanzibar/shared";

type Opts = { honeymoon?: boolean };

export const arrivalArusha = (day: number, stayId: string, { honeymoon }: Opts = {}): ItineraryDay => ({
  day,
  title: honeymoon ? "Arrival in Arusha and a quiet first evening" : "Arrival at Kilimanjaro Airport and transfer to Arusha",
  description: [
    "Our driver meets you at Kilimanjaro International Airport and takes you to your hotel in Arusha, about an hour away, beneath Mount Meru. The first day is kept free so you can rest after your flight.",
    honeymoon
      ? "If you'd like a romantic start, we can ask the hotel for a honeymoon room setup or a special dinner. Your guide then briefs you on the days ahead before an early night."
      : "Depending on when you land, you can relax in the garden or by the pool. Your guide briefs you on the route, the driving times and what to bring before an early night.",
  ].join("\n\n"),
  meals: "Dinner, depending on your arrival time",
  accommodation: "Your chosen hotel in Arusha",
  stayId,
});

export const tarangireDay = (day: number, stayId: string, overnight = "Tarangire"): ItineraryDay => ({
  day,
  title: "Tarangire National Park: elephants and baobabs",
  description:
    "After breakfast, your private guide drives you to Tarangire National Park, about two hours from Arusha. The park is known for its large elephant herds, ancient baobab trees and the Tarangire River, which draws wildlife in the dry season. You may also see giraffes, zebras, wildebeest, buffaloes and many birds, and lions live here too.\n\nYou stop for a picnic lunch in the park and explore a different area in the afternoon, before driving to your lodge" +
    (overnight === "Tarangire" ? " near the park." : ` in the ${overnight} area.`),
  image: IMG.tarangireBaobab,
  meals: "Breakfast, picnic lunch, dinner",
  accommodation: `Your chosen lodge in the ${overnight} area`,
  stayId,
});

export const tarangireToSerengeti = (day: number, stayId: string): ItineraryDay => ({
  day,
  title: "Through the highlands to the Serengeti",
  description:
    "A long and scenic day. You climb into the Ngorongoro highlands, past farmland and the crater rim, then drop down onto the open plains of the Serengeti. Depending on the time, you game-drive on the way to camp.\n\nThe herds of the Great Migration move with the rain, so we choose your camp to suit your travel month. You arrive in time to settle in before dinner.",
  image: IMG.northPlains,
  notes: ["The crater itself comes later in the trip, on the way back from the Serengeti."],
  meals: "Breakfast, picnic lunch, dinner",
  accommodation: "Your chosen camp or lodge in the Serengeti",
  stayId,
});

export const craterThenSerengeti = (day: number, stayId: string): ItineraryDay => ({
  day,
  title: "Ngorongoro Crater, then on to the Serengeti",
  description:
    "You set off early and descend into the Ngorongoro Crater, a vast volcanic caldera with grassland, swamps and a soda lake. Buffaloes, zebras, wildebeest, hippos, hyenas and lions live on the crater floor, and there's a chance of the endangered black rhino.\n\nAfter a picnic lunch in the crater, you continue to the Serengeti, watching the highlands give way to endless plains. It's a long day, and you reach your camp in the late afternoon.",
  image: IMG.craterRhino,
  meals: "Breakfast, picnic lunch, dinner",
  accommodation: "Your chosen camp or lodge in the Serengeti",
  stayId,
});

const SERENGETI_TEXT = [
  "You spend the whole day in the Serengeti with your private guide, starting early when the light is soft and the animals are active. Look for lions on the rocky kopjes, cheetahs scanning the plains, leopards in the trees along the rivers and herds of wildebeest and zebra. A picnic lunch keeps you out on the plains instead of driving back to camp.",
  "Another day in the Serengeti gives your guide time to follow up on the best sightings or explore a new area. In the right season, you head for the herds of the Great Migration; at any time of year, the resident lions, elephants and giraffes keep the days full.",
  "A third day in the park lets you slow down: a long morning drive, a rest at camp in the heat of the day and a last drive in the golden afternoon light.",
];

export const serengetiDay = (day: number, stayId: string, n: 1 | 2 | 3, { honeymoon }: Opts = {}): ItineraryDay => ({
  day,
  title: n === 1 ? "A full day in the Serengeti" : n === 2 ? "More of the Serengeti" : "A slower day on the plains",
  description:
    SERENGETI_TEXT[n - 1] +
    (n === 1
      ? "\n\nFor a special morning, you can add a sunrise hot-air balloon flight with a bush breakfast."
      : honeymoon
        ? "\n\nIn the evening, we can ask the camp for a sundowner or a private dinner under the stars to celebrate."
        : ""),
  image: n === 1 ? IMG.serengetiLions : n === 2 ? IMG.sunsetDrive : IMG.balloon,
  notes: n === 1 ? ["The balloon safari costs $600 per person. It's included at High-end luxury level."] : undefined,
  meals: "Breakfast, picnic lunch, dinner",
  accommodation: "Your chosen camp or lodge in the Serengeti",
  stayId,
});

export const serengetiToCrater = (day: number, stayId: string, overnight = "Karatu or the Ngorongoro highlands"): ItineraryDay => ({
  day,
  title: "Leave the Serengeti for the Ngorongoro Crater",
  description:
    "After breakfast, you game-drive out of the Serengeti and climb back into the highlands to the Ngorongoro Crater. You descend to the crater floor, one of the richest wildlife areas in Africa, to look for lions, buffaloes, hippos, flamingos and the rare black rhino, with a picnic lunch by a hippo pool.\n\nLate in the afternoon, you drive up the crater wall to your lodge, where the cool highland air makes a pleasant change from the plains.",
  image: IMG.crater,
  meals: "Breakfast, picnic lunch, dinner",
  accommodation: `Your chosen lodge in ${overnight}`,
  stayId,
});

export const flyToZanzibar = (day: number, stayId: string, from: "serengeti" | "mainland", { honeymoon }: Opts = {}): ItineraryDay => ({
  day,
  title: "Fly to Zanzibar",
  description:
    (from === "serengeti"
      ? "After breakfast, your guide drives you to the Serengeti airstrip for the flight to Zanzibar, which is included. "
      : "After breakfast, you drive to the airstrip at Lake Manyara or Arusha for the flight to Zanzibar, which is included. ") +
    "Our driver meets you at Zanzibar Airport and takes you to your beach hotel.\n\n" +
    (honeymoon
      ? "Settle in, walk the beach and enjoy your first evening by the Indian Ocean. If you've asked for a honeymoon welcome, the hotel prepares it for your arrival."
      : "The rest of the day is free to swim, walk the beach or simply rest after the safari."),
  image: IMG.flight,
  notes: ["Light aircraft usually allow about 15 kg of luggage per person in a soft bag. Hotels can store extra bags."],
  meals: "Breakfast, dinner",
  accommodation: "Your chosen beach hotel on Zanzibar",
  stayId,
});

export const beachDay = (day: number, stayId: string, { honeymoon }: Opts = {}): ItineraryDay => ({
  day,
  title: honeymoon ? "A beach day for the two of you" : "A free day on the beach",
  description:
    "After the early starts of the safari, today is yours. Swim, read under the palms, use the pool or walk the shore. On the east coast the sea goes a long way out at low tide, so ask the hotel about the best times to swim.\n\n" +
    (honeymoon
      ? "If you'd like, we can book a couples' massage or a candlelit dinner on the beach."
      : "If you'd rather be busy, you can add snorkelling, kayaking or a boat trip."),
  image: ZIMG.pool,
  meals: "Breakfast, dinner",
  accommodation: "Your chosen beach hotel on Zanzibar",
  stayId,
});

export const stoneTownDay = (day: number, stayId: string): ItineraryDay => ({
  day,
  title: "Stone Town and a spice farm (optional)",
  description:
    "Today you can explore Zanzibar's history on a guided walk through Stone Town, a UNESCO World Heritage Site of narrow lanes, carved wooden doors and busy markets shaped by African, Arab, Indian and European influences. Many travellers add a spice farm to see, smell and taste cloves, cinnamon, vanilla and nutmeg.\n\nIf you'd rather stay on the beach, that's fine too. In the evening, a sunset dhow cruise is a lovely way to end the day.",
  image: ZIMG.dhowSunset,
  notes: ["The Stone Town tour, spice farm and sunset cruise are optional extras. Add them in the booking box."],
  meals: "Breakfast, dinner",
  accommodation: "Your chosen beach hotel on Zanzibar",
  stayId,
});

export const oceanDay = (day: number, stayId: string): ItineraryDay => ({
  day,
  title: "Out on the ocean (optional)",
  description:
    "Spend the day on the water: snorkel over coral reefs, sail a traditional dhow to a sandbank or join a full-day Safari Blue trip in Menai Bay, depending on the tides and the weather. Choose a licensed operator, and we'll book it for you.\n\nOr keep the day free for the beach and the pool.",
  image: ZIMG.snorkel,
  notes: ["Boat trips and snorkelling are optional extras. Sandbank visits depend on the tide."],
  meals: "Breakfast, dinner",
  accommodation: "Your chosen beach hotel on Zanzibar",
  stayId,
});

export const lastBeachDay = (day: number, stayId: string, { honeymoon }: Opts = {}): ItineraryDay => ({
  day,
  title: "Your last full day on Zanzibar",
  description:
    "A day with no fixed plans: a final swim, a spa treatment, some souvenir shopping or a long lunch by the sea.\n\n" +
    (honeymoon
      ? "For your last evening, we can arrange a private dinner or a sunset dhow cruise to celebrate the end of your honeymoon."
      : "In the evening, you can watch the sunset from the beach or book a sunset dhow cruise."),
  image: ZIMG.dhowBeach,
  meals: "Breakfast, dinner",
  accommodation: "Your chosen beach hotel on Zanzibar",
  stayId,
});

export const zanzibarDeparture = (day: number): ItineraryDay => ({
  day,
  title: "Departure from Zanzibar",
  description:
    "Enjoy a last breakfast by the sea before our driver takes you to Zanzibar Airport for your flight home, timed around your departure. If your international flight leaves from the mainland, we book the connecting flight and allow plenty of time.",
  meals: "Breakfast",
  accommodation: "—",
});
