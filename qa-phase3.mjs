// Phase 3 QA — homepage, listings, cross-category package pages.
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const OUT = "screenshots";
const browser = await chromium.launch({ channel: "msedge" });

// Desktop homepage — full page
const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await desktop.goto(BASE, { waitUntil: "networkidle" });
await desktop.screenshot({ path: `${OUT}/p3-home-desktop.png`, fullPage: true });

// Card links resolve? Collect hrefs from the top-picks grid and visit each.
const hrefs = await desktop.evaluate(() =>
  [...document.querySelectorAll('a[href*="-day-"]')].map((a) => a.getAttribute("href"))
);
console.log("card hrefs:", [...new Set(hrefs)].join(", "));

for (const href of [...new Set(hrefs)]) {
  const res = await desktop.goto(BASE + href, { waitUntil: "domcontentloaded" });
  const h1 = await desktop.locator("h1").textContent();
  console.log(`${res.status() === 200 ? "✅" : "❌ " + res.status()} ${href} → h1: ${h1?.trim().slice(0, 50)}`);
}

// Listing pages
for (const path of ["/kilimanjaro", "/safaris"]) {
  await desktop.goto(BASE + path, { waitUntil: "networkidle" });
  const cards = await desktop.locator('a[href*="-day-"]').count();
  const h1s = await desktop.locator("h1").count();
  console.log(`✅ ${path}: ${cards} cards, ${h1s} h1`);
  await desktop.screenshot({ path: `${OUT}/p3${path.replace("/", "-")}.png` });
}

// Mobile homepage overflow check
const mobile = await browser.newPage({ viewport: { width: 375, height: 812 } });
for (const path of ["/", "/kilimanjaro", "/safaris", "/trekking/4-day-mount-meru-trek"]) {
  await mobile.goto(BASE + path, { waitUntil: "networkidle" });
  const w = await mobile.evaluate(() => document.documentElement.scrollWidth);
  console.log(`[375px] ${path}: scrollWidth ${w} ${w > 375 ? "❌ OVERFLOW" : "✅"}`);
}
await mobile.goto(BASE, { waitUntil: "networkidle" });
await mobile.screenshot({ path: `${OUT}/p3-home-mobile.png`, fullPage: true });

await browser.close();
console.log("QA done.");
