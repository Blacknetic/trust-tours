// Every Kilimanjaro climb, one file per itinerary, built from Ombeni's
// 2027–2028 documents. Day-by-day text lives in prose/*.ts.

import type { ContentSection, TripPackage } from "@/data/packages";
import { CONTACT_BULLETS } from "./shared";
import { machame7 } from "./7-day-machame-route";
import { machame6 } from "./6-day-machame-route";
import { lemosho8 } from "./8-day-lemosho-route";
import { lemosho7 } from "./7-day-lemosho-route";
import { northernCircuit9 } from "./9-day-northern-circuit";
import { craterCamp } from "./northern-circuit-crater-camp";
import { marangu6 } from "./6-day-marangu-route";
import { marangu5 } from "./5-day-marangu-route";
import { rongai6 } from "./6-day-rongai-route";
import { umbwe6 } from "./6-day-umbwe-route";

// From Ombeni's 8-day Kilimanjaro menu: a short note on every climb page,
// linking to the full menu in the guides.
const MEALS: ContentSection = {
  heading: "Meals on the mountain",
  paragraphs: [
    "Your mountain cook prepares three fresh meals a day: a hot breakfast, lunch on the trail or at camp, and a three-course dinner with soup. Hot drinks are served morning and evening, with snacks such as popcorn and nuts. The full day-by-day menu from one of our climbs is in our guides.",
    "Tell us about any dietary needs or allergies when you book, so the cook can plan for you.",
  ],
};

/** Adds the meals note just before the booking section with the contact details. */
const withMeals = (p: TripPackage): TripPackage => {
  const sections = p.sections ?? [];
  const at = sections.findIndex((x) => x.bullets === CONTACT_BULLETS);
  const i = at === -1 ? sections.length : at;
  return { ...p, sections: [...sections.slice(0, i), MEALS, ...sections.slice(i)] };
};

const CLIMBS: TripPackage[] = [
  machame7,
  machame6,
  lemosho8,
  lemosho7,
  northernCircuit9,
  craterCamp,
  marangu6,
  marangu5,
  rongai6,
  umbwe6,
];

export const KILIMANJARO_PACKAGES: TripPackage[] = CLIMBS.map(withMeals);
