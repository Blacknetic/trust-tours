// Safaris rebuilt from Ombeni's documents, one file per itinerary. Prices are
// draft until he reviews the live pages. Trips not rebuilt yet stay in
// data/packages.ts.

import type { TripPackage } from "@/data/packages";
import { ndutuCalving3 } from "./3-day-ndutu-calving-safari";
import { ndutuCalving4 } from "./4-day-ndutu-calving-safari";
import { tarangireNdutuCrater4 } from "./4-day-tarangire-ndutu-ngorongoro-safari";
import { ndutuCalving5 } from "./5-day-ndutu-calving-safari";
import { calving6 } from "./6-day-calving-safari";
import { ndutuMigration6 } from "./6-day-ndutu-great-migration-safari";
import { ndutuCalving7 } from "./7-day-ndutu-calving-safari";
import { ndutuCalving8 } from "./8-day-ndutu-calving-safari";
import { calvingMigration9 } from "./9-day-calving-migration-safari";

export const SAFARI_PACKAGES: TripPackage[] = [
  ndutuCalving3,
  ndutuCalving4,
  tarangireNdutuCrater4,
  ndutuCalving5,
  calving6,
  ndutuMigration6,
  ndutuCalving7,
  ndutuCalving8,
  calvingMigration9,
];
