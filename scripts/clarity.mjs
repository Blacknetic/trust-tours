/**
 * Microsoft Clarity Data Export puller.
 *
 * Pulls the Live Insights (traffic + engagement + behaviour) for the last N
 * days and prints a readable summary. Read-only (Data.Export scope).
 *
 * ⚠️ Clarity hard-caps this API at 10 requests per project per DAY — run
 * sparingly. Token is read from CLARITY_API_TOKEN in .env.local (gitignored),
 * never committed.
 *
 * Usage:
 *   node scripts/clarity.mjs                 # last 3 days, no dimension
 *   node scripts/clarity.mjs 3 URL           # last 3 days, broken down by URL
 *   node scripts/clarity.mjs 1 Country Device # 1 day, by country + device
 * Valid dimensions: URL, Referrer, Channel, Browser, Device, OS, Country/Region, Source, Medium, Campaign
 */
import { readFileSync } from "node:fs";

// Minimal .env.local loader (no dependency).
function loadEnv() {
  try {
    for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
    }
  } catch { /* no .env.local — rely on real env */ }
}
loadEnv();

const TOKEN = process.env.CLARITY_API_TOKEN;
if (!TOKEN) { console.error("Missing CLARITY_API_TOKEN (set it in .env.local)"); process.exit(1); }

const numOfDays = process.argv[2] ?? "3";
const dims = process.argv.slice(3).filter(Boolean);

const url = new URL("https://www.clarity.ms/export-data/api/v1/project-live-insights");
url.searchParams.set("numOfDays", numOfDays);
dims.forEach((d, i) => url.searchParams.set(`dimension${i + 1}`, d));

const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
if (!res.ok) {
  console.error(`Clarity API ${res.status}: ${await res.text()}`);
  if (res.status === 403) console.error("(403 usually = daily 10-request limit hit, or token expired)");
  process.exit(1);
}
const data = await res.json();

console.log(`\n=== Clarity Live Insights — last ${numOfDays} day(s)${dims.length ? " by " + dims.join(", ") : ""} ===\n`);
for (const metric of data) {
  console.log(`## ${metric.metricName}`);
  for (const row of metric.information ?? []) {
    console.log("   " + Object.entries(row).map(([k, v]) => `${k}=${v}`).join("  |  "));
  }
  console.log("");
}
