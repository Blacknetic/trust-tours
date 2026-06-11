// Phase 2 QA — drives system Edge against the dev server.
// Checks: 375px overflow, FAQ accordion, sticky CTA bar, JSON-LD, focus states.
import { chromium } from "playwright";

const URL = "http://localhost:3000/kilimanjaro/7-day-machame-route";
const OUT = "screenshots";

const browser = await chromium.launch({ channel: "msedge" });

// ── Mobile 375px ────────────────────────────────────────────────
const mobile = await browser.newPage({ viewport: { width: 375, height: 812 } });
await mobile.goto(URL, { waitUntil: "networkidle" });

const scrollW = await mobile.evaluate(() => document.documentElement.scrollWidth);
console.log(`[mobile] scrollWidth: ${scrollW} (viewport 375) ${scrollW > 375 ? "❌ OVERFLOW" : "✅"}`);

if (scrollW > 375) {
  const offenders = await mobile.evaluate(() => {
    const out = [];
    document.querySelectorAll("body *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > 376 && r.width < document.documentElement.scrollWidth) {
        out.push(
          `${el.tagName}${el.id ? "#" + el.id : ""} .${String(el.className).slice(0, 70)} → right=${r.right.toFixed(0)} w=${r.width.toFixed(0)}`
        );
      }
    });
    return out.slice(0, 15);
  });
  console.log(offenders.join("\n"));
}

await mobile.screenshot({ path: `${OUT}/qa-mobile-hero.png` });

// Sticky CTA bar visible?
const ctaBar = await mobile.locator("text=Plan on WhatsApp").last().isVisible();
console.log(`[mobile] sticky CTA bar visible: ${ctaBar ? "✅" : "❌"}`);

// FAQ accordion: click first question
await mobile.locator('button[aria-expanded]').first().scrollIntoViewIfNeeded();
await mobile.locator('button[aria-expanded]').first().click();
await mobile.waitForTimeout(400);
const expanded = await mobile.locator('button[aria-expanded="true"]').count();
console.log(`[mobile] FAQ accordion opens on tap: ${expanded === 1 ? "✅" : "❌ count=" + expanded}`);
await mobile.screenshot({ path: `${OUT}/qa-mobile-faq.png` });

// Elevation journey present?
const svg = await mobile.locator('svg[aria-label="Route elevation profile chart"]').count();
console.log(`[mobile] elevation SVG rendered: ${svg === 1 ? "✅" : "❌"}`);

// JSON-LD valid?
const jsonld = await mobile.evaluate(() => {
  const s = document.querySelector('script[type="application/ld+json"]');
  if (!s) return null;
  try {
    const data = JSON.parse(s.textContent);
    return data["@graph"].map((g) => g["@type"]);
  } catch {
    return "PARSE_ERROR";
  }
});
console.log(`[mobile] JSON-LD types: ${JSON.stringify(jsonld)}`);

// One h1 only?
const h1s = await mobile.locator("h1").count();
console.log(`[mobile] exactly one h1: ${h1s === 1 ? "✅" : "❌ count=" + h1s}`);

// ── Desktop 1280px ──────────────────────────────────────────────
const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await desktop.goto(URL, { waitUntil: "networkidle" });
await desktop.screenshot({ path: `${OUT}/qa-desktop-hero.png` });

// Scroll to itinerary to trigger elevation animation, capture mid-scroll
await desktop.locator("text=Day-by-Day Itinerary").scrollIntoViewIfNeeded();
await desktop.mouse.wheel(0, 900);
await desktop.waitForTimeout(600);
await desktop.screenshot({ path: `${OUT}/qa-desktop-elevation.png` });

// Keyboard focus ring check
await desktop.keyboard.press("Tab");
await desktop.keyboard.press("Tab");
const focused = await desktop.evaluate(() => {
  const el = document.activeElement;
  const style = getComputedStyle(el);
  return { tag: el.tagName, outline: style.outlineColor, width: style.outlineWidth };
});
console.log(`[desktop] focus ring on Tab: ${JSON.stringify(focused)}`);

// Sticky CTA bar should be HIDDEN on desktop
const ctaBarDesktop = await desktop.evaluate(() => {
  const bars = [...document.querySelectorAll("div.fixed.bottom-0")];
  return bars.some((b) => getComputedStyle(b).display !== "none");
});
console.log(`[desktop] mobile CTA bar hidden: ${!ctaBarDesktop ? "✅" : "❌ visible on desktop"}`);

await browser.close();
console.log("QA done.");
