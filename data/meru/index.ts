// Mount Meru climbs rebuilt from Ombeni's "Meru" folder, one file per trip.
// Prices are draft until he reviews the live pages.

import type { TripPackage } from "@/data/packages";
import { meru3 } from "./3-day-mount-meru-momela";
import { meru4 } from "./4-day-mount-meru";
import { meru5 } from "./5-day-mount-meru";

export const MERU_PACKAGES: TripPackage[] = [meru3, meru4, meru5];
