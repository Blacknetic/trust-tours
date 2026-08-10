/**
 * Microsoft Clarity — Data Export puller.
 *
 * Pulls the "live insights" (last 1–3 days) from Clarity's Data Export API and
 * prints a readable summary: real-vs-bot sessions, engagement, scroll depth and
 * the frustration signals (dead/rage clicks, quick-backs, errors) — the things
 * that tell you whether the landing pages are working.
 *
 * The API token is a SECRET (Data.Export scope). It is read from CLARITY_API_TOKEN
 * in .env.local (gitignored) or the environment — never hard-coded here, never
 * committed, never shipped to the browser.
 *
 * ⚠️ Clarity caps this API at 10 requests per project PER DAY. Each run = 1 call.
 *
 * Usage:
 *   node scripts/clarity.mjs                 # last 3 days, summary
 *   node scripts/clarity.mjs 1               # last 1 day
 *   node scripts/clarity.mjs 3 URL           # break down by URL
 *   node scripts/clarity.mjs 3 Country Device
 *   Dimensions: Browser | Device | Country | OS | Source | URL (up to 3)
 */
import { readFileSync } from "node:fs";

const ENDPOINT = "https://www.clarity.ms/export-data/api/v1/project-live-insights";

function loadToken() {
  if (process.env.CLARITY_API_TOKEN) return process.env.CLARITY_API_TOKEN.trim();
  try {
    const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
    const m = env.match(/^CLARITY_API_TOKEN=(.+)$/m);
    if (m) return m[1].trim();
  } catch {}
  return null;
}

const token = loadToken();
if (!token) {
  console.error("Missing CLARITY_API_TOKEN (set it in .env.local or the environment).");
  process.exit(1);
}

const days = Math.min(3, Math.max(1, Number(process.argv[2]) || 3));
const dims = process.argv.slice(3).filter(Boolean).slice(0, 3);

const url = new URL(ENDPOINT);
url.searchParams.set("numOfDays", String(days));
dims.forEach((d, i) => url.searchParams.set(`dimension${i + 1}`, d));

const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
if (!res.ok) {
  const body = await res.text();
  console.error(`Clarity API error ${res.status}: ${body.slice(0, 300)}`);
  if (res.status === 429) console.error("→ Daily quota (10/day) exhausted. Try again tomorrow.");
  process.exit(1);
}
const data = await res.json();
const byName = Object.fromEntries(data.map((m) => [m.metricName, m.information]));
const first = (name) => byName[name]?.[0] ?? {};
const pct = (v) => (v == null ? "—" : `${Number(v).toFixed(1)}%`);

console.log(`\n📊 Clarity — last ${days} day(s)\n${"=".repeat(40)}`);

const t = first("Traffic");
const total = Number(t.totalSessionCount || 0);
const bots = Number(t.totalBotSessionCount || 0);
console.log("TRAFFIC");
console.log(`  Sessions (total)     ${total}`);
console.log(`  Bot sessions         ${bots}  (${total ? ((bots / total) * 100).toFixed(0) : 0}%)`);
console.log(`  Real sessions        ${total - bots}   ← judge everything on this`);
console.log(`  Distinct users       ${t.distinctUserCount ?? "—"}`);
console.log(`  Pages / session      ${t.pagesPerSessionPercentage ? Number(t.pagesPerSessionPercentage).toFixed(2) : "—"}`);

const e = first("EngagementTime");
console.log("\nENGAGEMENT");
console.log(`  Total time (s)       ${e.totalTime ?? "—"}`);
console.log(`  Active time (s)      ${e.activeTime ?? "—"}   ← real attention`);
console.log(`  Avg scroll depth     ${pct(first("ScrollDepth").averageScrollDepth)}   ← how far down they read`);

console.log("\nFRUSTRATION SIGNALS  (% of sessions where it happened)");
const sig = [
  ["Rage clicks", "RageClickCount"],
  ["Dead clicks", "DeadClickCount"],
  ["Quick-backs", "QuickbackClick"],
  ["Excessive scroll", "ExcessiveScroll"],
  ["JS errors", "ScriptErrorCount"],
  ["Error clicks", "ErrorClickCount"],
];
for (const [label, key] of sig) {
  const info = first(key);
  console.log(`  ${label.padEnd(18)} ${pct(info.sessionsWithMetricPercentage)}`);
}

// Any dimension breakdowns (Browser/Device/Country/URL/… — requested or default).
// Skip the summary/frustration metrics already printed above.
const SUMMARY = new Set([
  "Traffic", "EngagementTime", "ScrollDepth", "DeadClickCount", "ExcessiveScroll",
  "RageClickCount", "QuickbackClick", "ScriptErrorCount", "ErrorClickCount",
]);
const dimMetrics = data.filter(
  (m) =>
    !SUMMARY.has(m.metricName) &&
    Array.isArray(m.information) &&
    m.information[0] &&
    "sessionsCount" in m.information[0],
);
for (const m of dimMetrics) {
  console.log(`\n${m.metricName.toUpperCase()}`);
  m.information
    .slice()
    .sort((a, b) => Number(b.sessionsCount) - Number(a.sessionsCount))
    .slice(0, 10)
    .forEach((row) => {
      const label = row.name ?? row.url ?? row.Country ?? Object.values(row)[0];
      console.log(`  ${String(label).slice(0, 45).padEnd(46)} ${row.sessionsCount}`);
    });
}
console.log("");
