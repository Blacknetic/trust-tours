// Fly-in safaris rebuilt from Ombeni's "fly safari" folder, one file per trip.
// Prices are draft until he reviews the live pages.

import type { TripPackage } from "@/data/packages";
import { threeDayFlyIn } from "./3-day-serengeti-balloon-zanzibar";
import { fiveDayPremiumFlyIn } from "./5-day-premium-safari-fly-to-zanzibar";

export const FLY_IN_PACKAGES: TripPackage[] = [threeDayFlyIn, fiveDayPremiumFlyIn];
