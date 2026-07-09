// Phase 6/5 QA — sitemap, robots, OG image, and no-JS-safe reveal content.
const BASE = "http://localhost:3000";
let fail = 0;
const ok = (cond, label) => { console.log(`${cond ? "✅" : "❌"} ${label}`); if (!cond) fail++; };

// sitemap.xml
const sm = await fetch(`${BASE}/sitemap.xml`);
const smText = await sm.text();
const urlCount = (smText.match(/<url>/g) || []).length;
ok(sm.status === 200, `sitemap.xml 200 (status ${sm.status})`);
ok(urlCount >= 16, `sitemap has ${urlCount} <url> entries (expect 6 static + 12 packages = 18)`);
ok(smText.includes("/kilimanjaro/8-day-lemosho-route"), "sitemap includes a package slug");
ok(smText.includes("https://www.trusttourstz.com/"), "sitemap uses absolute prod URLs");

// robots.txt
const rb = await fetch(`${BASE}/robots.txt`);
const rbText = await rb.text();
ok(rb.status === 200, `robots.txt 200 (status ${rb.status})`);
ok(/Sitemap:\s*https:\/\/www\.trusttourstz\.com\/sitemap\.xml/.test(rbText), "robots points to sitemap");
ok(/Disallow:\s*\/api\//.test(rbText), "robots disallows /api/");

// OG image
const og = await fetch(`${BASE}/opengraph-image`);
ok(og.status === 200, `opengraph-image 200 (status ${og.status})`);
ok((og.headers.get("content-type") || "").includes("image/"), `OG content-type is image (${og.headers.get("content-type")})`);

// No-JS-safe reveal: server HTML must contain the revealed content
const home = await fetch(`${BASE}/`);
const homeHtml = await home.text();
ok(homeHtml.includes("Three trips, three ways in"), "homepage reveal content present in server HTML (no-JS safe)");
ok(homeHtml.includes("canonical"), "homepage emits canonical link");
ok(homeHtml.includes("og:image"), "homepage emits og:image meta");

console.log(fail === 0 ? "\n✅ ALL SEO/REVEAL CHECKS PASS" : `\n❌ ${fail} check(s) failed`);
process.exit(fail === 0 ? 0 : 1);
