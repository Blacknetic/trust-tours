/**
 * Legacy-URL redirect verifier.
 *
 * Proves that every old WordPress URL we know about (harvested /booking sitemap,
 * the /tours/* custom-post-type, bare taxonomy pages, and root-level blog posts)
 * returns a 301/308 redirect — never a 404 — and that the URL it lands on
 * finally returns 200. Run it after a build to guard against redirect drift, or
 * against production after deploy to confirm the fix is live.
 *
 * ── How to run ────────────────────────────────────────────────────────────
 *   1. Build + start the app in one terminal:  npm run build && npm start
 *   2. In another:                              node scripts/verify-redirects.mjs
 *
 * Point it elsewhere with an arg (no trailing slash):
 *   node scripts/verify-redirects.mjs https://trusttourstz.com
 */

const BASE = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");

// Representative legacy URLs. `to` is the expected FINAL path after following
// redirects (null = we only assert "not a 404", i.e. any real page is fine).
const CASES = [
  // /tours/* exact 1:1 upgrades (should land on the precise detail page)
  ["/tours/9-days-northern-circuit", "/kilimanjaro/9-day-northern-circuit"],
  ["/tours/8-days-lemosho-route", "/kilimanjaro/8-day-lemosho-route"],
  ["/tours/7-days-machame-route", "/kilimanjaro/7-day-machame-route"],
  ["/tours/6-days-marangu-route", "/kilimanjaro/6-day-marangu-route"],
  ["/tours/6-days-umbwe-route", "/kilimanjaro/6-day-umbwe-route"],
  ["/tours/6-days-rongai-route", "/kilimanjaro/6-day-rongai-route"],
  // /tours/* keyword catch-alls (land on the best-match section)
  ["/tours/3-days-zanzibar", "/zanzibar"],
  ["/tours/3-days-safari-lodge-package", "/safaris"],
  ["/tours/3-days-mount-meru", "/trekking/3-day-mount-meru-momela"],
  ["/tours/2-days-ol-doinyo-lengai", "/trekking/2-day-ol-doinyo-lengai-climb"],
  ["/tours/tanzania-honeymoon-safari", "/honeymoon"],
  ["/tours/maasai-cultural-experience", "/cultural"],
  ["/tours/12-day-paramotoring-flying-safari", "/paramotoring"],
  ["/tours/some-unknown-trip-we-never-listed", "/safaris"], // fallback net
  // Bare WordPress taxonomy / pages
  ["/cultural-tours", "/cultural"],
  ["/trust-tours-and-safaris-company", "/about"],
  ["/kilimanjaro-mountain", "/kilimanjaro"],
  ["/tanzania-safaris", "/safaris"],
  // Root-level legacy blog itineraries
  ["/7-day-northern-tanzania-midrange-safari-itinerary", "/safaris"],
  ["/7-days-safaris-and-zanzibar-holiday", "/safaris"],
  // A /booking sample (already handled — regression guard)
  ["/booking/6-days-umbwe-route", "/kilimanjaro"],
  // A URL that genuinely does not exist → should hit our branded 404 (not asserted as pass)
];

async function step(url) {
  const res = await fetch(url, { redirect: "manual" });
  const loc = res.headers.get("location");
  return { status: res.status, location: loc };
}

// Follow a manual redirect chain to its 200 (or a dead end), capped to avoid loops.
async function trace(path) {
  let url = BASE + path;
  const hops = [];
  for (let i = 0; i < 8; i++) {
    const { status, location } = await step(url);
    hops.push({ url: url.replace(BASE, ""), status });
    if (status >= 300 && status < 400 && location) {
      url = location.startsWith("http") ? location : BASE + location;
      continue;
    }
    return { finalPath: url.replace(BASE, ""), finalStatus: status, hops };
  }
  return { finalPath: url.replace(BASE, ""), finalStatus: -1, hops }; // redirect loop
}

const results = await Promise.all(
  CASES.map(async ([from, to]) => {
    try {
      const { finalPath, finalStatus, hops } = await trace(from);
      const redirected = hops[0].status >= 300 && hops[0].status < 400;
      const landed200 = finalStatus === 200;
      const rightPlace = to == null || finalPath === to;
      const ok = redirected && landed200 && rightPlace;
      return { from, to, finalPath, finalStatus, firstStatus: hops[0].status, ok };
    } catch (e) {
      return { from, to, finalPath: "—", finalStatus: `ERR ${e.message}`, firstStatus: "—", ok: false };
    }
  }),
);

let fails = 0;
for (const r of results) {
  const mark = r.ok ? "✅" : "❌";
  if (!r.ok) fails++;
  const want = r.to ? ` (want ${r.to})` : "";
  console.log(
    `${mark} ${r.firstStatus}  ${r.from}  →  ${r.finalPath} [${r.finalStatus}]${r.ok ? "" : want}`,
  );
}

console.log(`\n${results.length - fails}/${results.length} passed against ${BASE}`);
process.exit(fails ? 1 : 0);
