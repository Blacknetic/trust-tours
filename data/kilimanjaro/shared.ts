// Shared pieces for the Kilimanjaro climbs (data/kilimanjaro/*.ts).
// Content comes from Ombeni's 2027–2028 itinerary documents
// (flash drive D:\mpya\Kilimanjaro, Oct 2026). Prices are draft until he
// reviews the live pages.

import type { ContentImage, ItineraryDay } from "@/data/packages";

/** A day's words, extracted from the source document (see prose/*.ts). */
export interface DayProse {
  title: string;
  description: string;
  experience?: string;
  notes?: string[];
  dayIncluded?: string[];
  dayExcluded?: string[];
}

/** A day's facts: altitude, distance, time, meals, overnight, picture. */
export type DayFacts = Omit<ItineraryDay, "title" | "description"> & { title?: string };

/** Merge each day's facts with its document prose, in day order. */
export function withProse(prose: Record<number, DayProse>, facts: DayFacts[]): ItineraryDay[] {
  return facts.map((f) => {
    const p = prose[f.day];
    if (!p) throw new Error(`No prose for day ${f.day}`);
    return { ...p, ...f, title: f.title ?? p.title };
  });
}

export const BEST_MONTHS = ["Jan", "Feb", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct"];

export const PRICE_NOTE =
  "Per person in US dollars. The 2-person rate assumes two climbers sharing a hotel room; the solo rate carries the full cost of a private expedition. Final price confirmed in your written quote.";

/** "How the prices work" — the same explanation runs through every document. */
export function howPricesWork(largestGroup: string): string[] {
  return [
    `The solo price reflects the higher cost of organising a private expedition for one climber, while two-person and larger groups can share certain operational costs. The price for ${largestGroup} is a starting estimate and may change according to the final group size, travel dates, accommodation arrangements before and after the climb, and any additional services requested.`,
    "These prices are intended for a quality guided mountain expedition rather than a stripped-down budget climb. They are realistic planning prices for 2027–2028. The 2-person rate assumes two climbers booking together and sharing a hotel room. Solo pricing includes the additional cost of operating the expedition for one climber. Larger groups require confirmation of crew capacity and safe guide-to-climber ratios.",
    "Before you pay a deposit, we confirm your final price, payment schedule, cancellation terms and any optional services in writing.",
  ];
}

export const CONTACT_BULLETS = [
  "WhatsApp: +255 785 938 860",
  "Email: info@trusttourstz.com",
  "Website: trusttourstz.com",
];

// Pictures supplied in Ombeni's itinerary documents.
const img = (file: string, alt: string): ContentImage => ({ src: `/images/kilimanjaro/${file}`, alt });

export const IMG = {
  airport: img("kilimanjaro-airport.jpg", "Kilimanjaro International Airport, where your Trust Tours representative meets you"),
  team: img("team-group-photo.jpg", "A Trust Tours & Safaris climbing team and crew with the company banner on Kilimanjaro"),
  team2: img("team-group-photo-2.jpg", "Trust Tours & Safaris climbers and mountain crew together on Kilimanjaro"),
  uhuru: img("uhuru-peak-climber.jpg", "A climber at the Uhuru Peak summit sign in the snow, 5,895 m"),
  moorlandHikers: img("hikers-moorland-trail.jpg", "Hikers on a moorland trail on Kilimanjaro"),
  kiboSunset: img("kibo-sunset-above-clouds.jpg", "Sunset over the clouds beside Kilimanjaro's glaciers"),
  maranguForest: img("marangu-rainforest-trail.jpg", "Climbers walking through the rainforest on the Marangu Route"),
  moorlandKibo: img("moorland-hikers-kibo.jpg", "A line of hikers crossing the moorland towards Kibo"),
  zebraRocks: img("zebra-rocks.jpg", "The striped cliffs of Zebra Rocks above Horombo Hut"),
  saddle: img("saddle-trail-to-kibo.jpg", "The trail across the alpine desert of the Saddle towards Kibo"),
  uhuruSunrise: img("uhuru-peak-sign-sunrise.jpg", "Climbers at the Uhuru Peak sign at sunrise"),
  forestDescent: img("rainforest-descent.jpg", "A group descending through the rainforest to the park gate"),
  horombo: img("horombo-hut.jpg", "Horombo Hut with the snow-capped summit of Kibo behind"),
  mandara: img("mandara-hut.jpg", "Mandara Hut, the first overnight stop on the Marangu Route"),
  kiboHut: img("kibo-hut.jpg", "Kibo Hut, the last stop before the summit, with Mawenzi behind"),
  forestTrail: img("forest-trail-hikers.jpg", "Hikers on a green forest trail on the lower slopes of Kilimanjaro"),
  kiboClouds: img("kibo-above-clouds.jpg", "Kilimanjaro rising above the clouds against a blue sky"),
  summitSunrise: img("summit-sunrise-group.jpg", "A group celebrating on the crater rim at sunrise"),
  trailhead: img("trailhead-transfer.jpg", "A climber stepping out of the safari vehicle at the trailhead"),
  mawenziCamp: img("mawenzi-camp.jpg", "Tents at a high camp beneath the jagged peaks of Mawenzi"),
  highCamp: img("high-camp-kibo.jpg", "Yellow expedition tents at a high camp below Kibo"),
  hutsClouds: img("huts-above-clouds.jpg", "Mountain huts above a sea of clouds at sunset"),
  moorlandRays: img("moorland-kibo-sunrays.jpg", "Sun rays over the moorland with Kibo in the distance"),
  guides: img("guides-at-camp.jpg", "Two Trust Tours guides smiling at camp"),
  forestCamp: img("forest-camp.jpg", "Orange tents pitched among the trees at a forest camp"),
  shiraCamp: img("shira-camp.jpg", "Tents on the Shira Plateau with Kibo behind"),
  barrancoCamp: img("barranco-camp-groundsels.jpg", "Giant groundsels above the clouds at Barranco Camp"),
  campKibo: img("camp-below-kibo.jpg", "Orange tents at camp with the summit of Kibo behind"),
};
