// Day trips and short safaris rebuilt from Ombeni's "Day Trip" folder, one file
// per trip. Prices are draft until he reviews the live pages.

import type { TripPackage } from "@/data/packages";
import { lengaiClimb2 } from "./2-day-ol-doinyo-lengai-climb";
import { tarangireNgorongoro2 } from "./2-day-tarangire-ngorongoro";
import { arushaNationalParkDayTrip } from "./arusha-national-park-day-trip";
import { chemkaDayTrip } from "./chemka-hot-springs-day-trip";
import { kilimanjaroDayHike } from "./kilimanjaro-day-trip-marangu";
import { ngorongoroDayTrip } from "./ngorongoro-crater-day-trip";
import { tarangireDayTrip } from "./tarangire-day-trip";

export const DAY_TRIP_PACKAGES: TripPackage[] = [
  tarangireDayTrip,
  ngorongoroDayTrip,
  arushaNationalParkDayTrip,
  chemkaDayTrip,
  kilimanjaroDayHike,
  tarangireNgorongoro2,
  lengaiClimb2,
];
