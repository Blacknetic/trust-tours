// Phase 4 QA — about/contact/reviews pages + inquiry form behaviour.
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const OUT = "screenshots";
const browser = await chromium.launch({ channel: "msedge" });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

// New pages render with one h1
for (const path of ["/about", "/contact", "/reviews"]) {
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  const h1 = await page.locator("h1").count();
  const title = await page.locator("h1").first().textContent();
  console.log(`✅ ${path} → h1 x${h1}: "${title?.trim()}"`);
  await page.screenshot({ path: `${OUT}/p4${path.replace("/", "-")}.png` });
}

// Form: fill and submit — email service NOT configured, so expect the
// honest error + WhatsApp fallback link.
await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
await page.fill("#name", "QA Tester");
await page.fill("#email", "qa@example.com");
await page.selectOption("#travelMonth", "July");
await page.selectOption("#groupSize", "2");
await page.fill("#message", "Testing the inquiry form end to end.");
await page.click('button[type="submit"]');
// p[role=alert] — avoids matching Next.js's empty route announcer
await page.waitForSelector('p[role="alert"]:has-text("WhatsApp")', { timeout: 10000 });
const alert = await page.locator('p[role="alert"]').textContent();
const hasWaLink = await page.locator('p[role="alert"] a[href*="wa.me"]').count();
console.log(`🔍 form submit (no email key) → error shown: "${alert?.trim().slice(0, 60)}..." WA fallback link: ${hasWaLink === 1 ? "✅" : "❌"}`);
await page.screenshot({ path: `${OUT}/p4-form-error.png` });

// API probes: honeypot, missing fields, bad email, bad JSON
const probes = [
  ["honeypot filled", { name: "x", email: "a@b.co", message: "hi", website: "spam" }, 200],
  ["missing fields", { name: "x" }, 400],
  ["bad email", { name: "x", email: "not-an-email", message: "hi" }, 400],
];
for (const [label, body, expected] of probes) {
  const status = await page.evaluate(async (b) => {
    const r = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(b),
    });
    return r.status;
  }, body);
  console.log(`🔍 API ${label}: ${status} ${status === expected ? "✅" : `❌ expected ${expected}`}`);
}

// Mobile overflow on new pages
const mobile = await browser.newPage({ viewport: { width: 375, height: 812 } });
for (const path of ["/about", "/contact", "/reviews"]) {
  await mobile.goto(BASE + path, { waitUntil: "networkidle" });
  const w = await mobile.evaluate(() => document.documentElement.scrollWidth);
  console.log(`[375px] ${path}: scrollWidth ${w} ${w > 375 ? "❌ OVERFLOW" : "✅"}`);
}

await browser.close();
console.log("QA done.");
