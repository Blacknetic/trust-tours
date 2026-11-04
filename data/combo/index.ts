// Trips rebuilt from Ombeni's "Combo" folder, one file per trip. Prices are
// draft until he reviews the live pages.

import type { TripPackage } from "@/data/packages";
import { sevenDayBushBeach } from "./7-day-tanzania-zanzibar";
import { sevenDayNyerereMafia } from "./7-day-nyerere-mafia-honeymoon";
import { eightDayHoneymoon } from "./8-day-honeymoon-safari-zanzibar";
import { nineDayHoneymoon } from "./9-day-honeymoon-northern";
import { tenDayHoneymoon } from "./10-day-honeymoon-safari-zanzibar";
import { twelveDayHoneymoon } from "./12-day-honeymoon-safari-zanzibar";
import { elevenDaySafariZanzibar } from "./11-day-safari-zanzibar";
import { thirteenDaySafariZanzibar } from "./13-day-safari-zanzibar";
import { fifteenDaySafariZanzibar } from "./15-day-safari-zanzibar";
import { nineDayNatron } from "./9-day-natron-ngorongoro-serengeti";
import { nineDayFamily } from "./9-day-family-safari";

export const COMBO_PACKAGES: TripPackage[] = [
  sevenDayBushBeach,
  sevenDayNyerereMafia,
  eightDayHoneymoon,
  nineDayHoneymoon,
  tenDayHoneymoon,
  twelveDayHoneymoon,
  elevenDaySafariZanzibar,
  thirteenDaySafariZanzibar,
  fifteenDaySafariZanzibar,
  nineDayNatron,
  nineDayFamily,
];
