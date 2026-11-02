// Safaris rebuilt from Ombeni's documents, one file per itinerary. Prices are
// draft until he reviews the live pages. Trips not rebuilt yet stay in
// data/packages.ts.

import type { TripPackage } from "@/data/packages";
import { ndutuCalving3 } from "./3-day-ndutu-calving-safari";
import { crossMigration4 } from "./4-day-cross-migration-safari";
import { ndutuCalving4 } from "./4-day-ndutu-calving-safari";
import { tarangireNdutuCrater4 } from "./4-day-tarangire-ndutu-ngorongoro-safari";
import { crossMigration5Central } from "./5-day-cross-migration-safari";
import { crossMigration5Tarangire } from "./5-day-great-migration-safari";
import { ndutuCalving5 } from "./5-day-ndutu-calving-safari";
import { calving6 } from "./6-day-calving-safari";
import { crossMigration6 } from "./6-day-cross-migration-safari";
import { ndutuMigration6 } from "./6-day-ndutu-great-migration-safari";
import { crossMigration7 } from "./7-day-great-migration-safari";
import { crossMigration7Manyara } from "./7-day-manyara-serengeti-migration-safari";
import { ndutuCalving7 } from "./7-day-ndutu-calving-safari";
import { crossMigration8 } from "./8-day-great-migration-safari";
import { crossMigration8North } from "./8-day-mara-river-crossing-safari";
import { ndutuCalving8 } from "./8-day-ndutu-calving-safari";
import { crossMigration9 } from "./9-day-great-migration-safari";
import { calvingMigration9 } from "./9-day-calving-migration-safari";

export const SAFARI_PACKAGES: TripPackage[] = [
  ndutuCalving3,
  crossMigration4,
  ndutuCalving4,
  tarangireNdutuCrater4,
  crossMigration5Central,
  crossMigration5Tarangire,
  ndutuCalving5,
  calving6,
  crossMigration6,
  ndutuMigration6,
  crossMigration7,
  crossMigration7Manyara,
  ndutuCalving7,
  crossMigration8,
  crossMigration8North,
  ndutuCalving8,
  crossMigration9,
  calvingMigration9,
];
