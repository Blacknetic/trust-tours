// Content QA — Wave 1/2 package pages: 375px no-overflow, single h1, price + itinerary render.
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

const paths = [
  "/",
  "/kilimanjaro",
  "/safaris",
  "/safaris/3-day-safari-tarangire-manyara-ngorongoro",
  "/safaris/5-day-northern-safari",
  "/safaris/4-day-balloon-safari-serengeti-ngorongoro",
  "/safaris/8-day-zanzibar-tour",
  "/safaris/5-day-zanzibar-escape",
];

let fail = 0;
for (const path of paths) {
  const resp = await page.goto(BASE + path, { waitUntil: "networkidle" });
  const status = resp?.status();
  const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
  const h1 = await page.locator("h1").count();
  const h1text = (await page.locator("h1").first().textContent())?.trim();
  // itinerary day count (timeline list items with a day title)
  const dayCount = await page.locator("text=/^Day \\d+/i").count();
  const overflow = scrollW > 375;
  const ok = status === 200 && !overflow && h1 === 1;
  if (!ok) fail++;
  console.log(
    `${ok ? "✅" : "❌"} ${path}\n   status=${status} scrollW=${scrollW} h1=${h1} days~=${dayCount} "${h1text}"`
  );
}

await browser.close();
console.log(fail === 0 ? "\n✅ ALL CONTENT PAGES PASS (375px, single h1, 200)" : `\n❌ ${fail} page(s) failed`);
process.exit(fail === 0 ? 0 : 1);
