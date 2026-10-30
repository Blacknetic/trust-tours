// Every Kilimanjaro climb, one file per itinerary, built from Ombeni's
// 2027–2028 documents. Day-by-day text lives in prose/*.ts.

import type { TripPackage } from "@/data/packages";
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

export const KILIMANJARO_PACKAGES: TripPackage[] = [
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
