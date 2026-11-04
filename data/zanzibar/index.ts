import type { TripPackage } from "@/data/packages";
import { fourDayZanzibarEscape } from "./4-day-zanzibar-escape";
import { fiveDayZanzibarHoliday } from "./5-day-zanzibar-holiday";
import { sixDayZanzibarHoliday } from "./6-day-zanzibar-holiday";
import { sevenDayZanzibarHoliday } from "./7-day-zanzibar-holiday";
import { sevenDayZanzibarHoneymoon } from "./7-day-zanzibar-honeymoon";
import { eightDayZanzibarTour } from "./8-day-zanzibar-tour";
import { tenDayZanzibarIslandHoliday } from "./10-day-zanzibar-island-holiday";
import { sixDaySafariZanzibar } from "./6-day-safari-zanzibar";
import { tenDaySafariZanzibar } from "./10-day-safari-zanzibar";
import { twentyDayHoneymoon } from "./20-day-honeymoon";

// Zanzibar holidays and safari-and-beach trips rebuilt from Ombeni's
// "Zanzibar packages" folder.
export const ZANZIBAR_PACKAGES: TripPackage[] = [
  fourDayZanzibarEscape,
  fiveDayZanzibarHoliday,
  sixDayZanzibarHoliday,
  sevenDayZanzibarHoliday,
  sevenDayZanzibarHoneymoon,
  eightDayZanzibarTour,
  tenDayZanzibarIslandHoliday,
  sixDaySafariZanzibar,
  tenDaySafariZanzibar,
  twentyDayHoneymoon,
];
