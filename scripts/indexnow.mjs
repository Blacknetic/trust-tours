/**
 * IndexNow submitter — pings Bing/IndexNow with the site's canonical URLs so the
 * index refreshes without waiting for an organic crawl. Bing's Webmaster
 * Guidelines treat IndexNow as the primary freshness signal (#2, #4, #9, #19).
 *
 * By default it fetches the live sitemap and submits every URL it lists. Run it
 * after each production deploy (or from a deploy hook).
 *
 * ── How to run ────────────────────────────────────────────────────────────
 *   node scripts/indexnow.mjs                       # submit all sitemap URLs
 *   node scripts/indexnow.mjs https://www.trusttourstz.com/kilimanjaro  # one/more URLs
 *
 * Keep KEY in sync with lib/indexnow.ts and public/<KEY>.txt.
 */

const KEY = "52449f3f2713ceacf6a1f19888d8ea4c";
const HOST = "www.trusttourstz.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function sitemapUrls() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const urls = process.argv.length > 2 ? process.argv.slice(2) : await sitemapUrls();

const offHost = urls.filter((u) => !u.startsWith(ORIGIN));
if (offHost.length) {
  console.error(`Refusing to submit URLs not on ${HOST}:\n  ${offHost.join("\n  ")}`);
  process.exit(1);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${ORIGIN}/${KEY}.txt`,
    urlList: urls,
  }),
});

// 200 = accepted, 202 = accepted (key validation pending). Both are success.
const ok = res.status === 200 || res.status === 202;
console.log(`IndexNow: submitted ${urls.length} URL(s) → HTTP ${res.status} ${ok ? "OK" : "FAILED"}`);
if (!ok) {
  console.error(await res.text());
  process.exit(1);
}
