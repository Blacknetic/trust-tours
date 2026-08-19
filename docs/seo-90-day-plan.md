# 90-Day SEO Execution Plan — trusttourstz.com

**Audience:** solo operator (1–2 people), no ad budget. One task per day, each completable in one sitting.
**Grounded in the actual codebase:** this site already has a complete sitemap (`app/sitemap.ts`), robots (`app/robots.ts`), canonicals, 301 redirect map (`next.config.ts`), rich JSON-LD on tours and guides, `next/image` with AVIF/WebP, IndexNow, GSC verification, and a 48-article guide library (`data/guides.ts`). This plan does **not** redo that work — Week 1 closes the *remaining* technical gaps (the biggest: **no analytics is installed at all**), then shifts to keyword architecture, content upgrades, and off-page authority.

**Markets:** US, UK, DE, AU — all served by one English site. Do **not** build hreflang'd en-US/en-GB/en-AU variants; for a single English version Google geo-serves fine, and duplicate near-identical locale pages would split your authority. (Day 76 revisits the German question with real data.)

**Rank timeline reality:** expect impressions to move in weeks 3–6, clicks in weeks 6–10, and money-keyword movement in months 3–6. The biweekly checkpoints exist so you steer on leading indicators (impressions, indexation, CTR), not on rank alone.

---

## Week 1 (Days 1–7): Measurement + Remaining Technical Gaps

### Day 1
- Task: Create a GA4 property and install it. Add the gtag.js loader via `next/script` (strategy `afterInteractive`) in `app/layout.tsx`. Verify in GA4 DebugView that page_views fire, and that the **existing** `whatsapp_click` event in `components/WhatsAppButton.tsx` now actually sends (it currently calls `window.gtag(...)` into the void because no gtag.js is loaded). Mark `whatsapp_click` and the inquiry-form submission (`/api/inquiry` flow) as key events (conversions).
- Why it matters: You cannot run a 90-day data-driven plan with zero analytics — this is the single biggest gap on an otherwise well-built site.
- Deliverable: GA4 live, `whatsapp_click` + `inquiry_submit` registered as key events, real-time report showing your own test visit.

### Day 2
- Task: Full Google Search Console audit. In Page Indexing, reconcile indexed URLs against the sitemap (~120 URLs: 54 packages + 48 guides + statics + group departures). For every "Crawled – currently not indexed" or "Discovered – not indexed" URL, run URL Inspection and note the reason. Export the last 16 months (or all available) of Queries and Pages into a baseline spreadsheet — this is your Day-1 benchmark for every checkpoint.
- Why it matters: Unindexed pages rank for nothing, and the baseline export is what makes Days 55, 71, and 87 possible.
- Deliverable: Spreadsheet with two tabs — "Indexation status per URL" and "Baseline queries (clicks/impressions/position)".

### Day 3
- Task: Set up Bing Webmaster Tools. Replace the literal placeholder `"REPLACE_WITH_BING_WEBMASTER_TOKEN"` (`msvalidate.01`) in `app/layout.tsx` with your real token (or verify via the existing `public/BingSiteAuth.xml` / GSC import), submit the sitemap, and confirm the IndexNow key file (`public/52449f3f...txt`, wired in `lib/indexnow.ts`) is accepted.
- Why it matters: Bing/DuckDuckGo carry meaningful share in the US and UK, verification is a 20-minute task, and your IndexNow pipeline already exists but is only useful if Bing trusts the site.
- Deliverable: Bing WMT verified, sitemap submitted, IndexNow showing accepted submissions.

### Day 4
- Task: Media cleanup in `public/`. Grep the codebase for any references to `public/Photo-Album` (101 MB) and `public/Photo-Album-2` (323 MB, incl. an 81 MB `Honeymoon-1.mp4`); move unreferenced raw albums out of the repo/deploy entirely (keep the mp4 aside — Day 54 uploads it to YouTube). Delete the loose `.docx` files and stray images from `public/`. The optimized set in `public/images` stays.
- Why it matters: 400+ MB of raw assets bloats every deploy, risks crawlers wasting budget on junk URLs, and exposes internal documents publicly.
- Deliverable: `public/` contains only referenced, optimized assets; deploy size drops by ~400 MB; commit pushed.

### Day 5
- Task: Core Web Vitals baseline. Run PageSpeed Insights (mobile) on four template URLs — `/` (home), `/kilimanjaro/7-day-machame-route` (tour), `/guides/climbing-kilimanjaro-guide` (guide), `/kilimanjaro` (listing) — and record LCP, INP, CLS in your tracking sheet. Also screenshot GSC's Core Web Vitals report. Fix only quick wins today (e.g., a missing `sizes`/`priority` on a hero `Photo`), log the rest.
- Why it matters: CWV is a tiebreaker ranking signal and directly drives mobile conversion; you need a baseline to prove Days 4/77 helped.
- Deliverable: Sheet row per template with LCP/INP/CLS + a short list of deferred fixes.

### Day 6
- Task: Close the schema gaps on listing pages. Add `ItemList` JSON-LD (each `ListItem` pointing to a tour URL) to the category pages — `app/kilimanjaro/page.tsx`, `app/safaris/page.tsx`, `app/zanzibar/page.tsx`, `app/trekking/page.tsx`, `app/cultural/page.tsx`, `app/honeymoon/page.tsx` — reusing the `lib/json-ld.ts` serializer. Also enrich the `TravelAgency` org node in `app/layout.tsx` (TravelAgency is already a LocalBusiness subtype — don't add a duplicate LocalBusiness node) with `geo`, `priceRange` (`"$1,580–$2,200 pp"` style), `foundingDate` (2008), `award` (World Travel Awards nominee 2023/2024), and `areaServed`. Validate everything in the Rich Results Test.
- Why it matters: Listing pages currently emit no structured data at all, and a richer org entity strengthens every trust signal Google associates with the brand.
- Deliverable: All six category pages pass Rich Results Test with `ItemList`; enriched org node validates with zero errors.

### Day 7
- Task: NAP + contact consistency sweep. Confirm `info@trusttourstz.com` actually receives mail and remove the TODO in `components/Footer.tsx`. Then verify the business name, Arusha address, and phone/WhatsApp are *character-identical* across: site footer, `/contact`, `/about`, the org schema in `app/layout.tsx`, Google Business Profile, TripAdvisor, SafariBookings (profile p3691), and Facebook.
- Why it matters: Inconsistent NAP fragments your entity in Google's knowledge graph and quietly undermines local/brand trust signals in every market.
- Deliverable: One canonical NAP recorded in your sheet; every listed surface matches it; footer TODO resolved.

---

## Week 2 (Days 8–14): Keyword Architecture & Content Audit

### Day 8
- Task: Build the keyword architecture spreadsheet — columns: keyword, intent (informational / commercial / transactional), cluster, target URL (existing or NEW), market notes. Seed it with these clusters (expand each with GSC data from Day 2 + free tools like Google autocomplete, "People also ask", AlsoAsked free tier):
  - **Kilimanjaro routes** (best kilimanjaro route, machame route, lemosho route, machame vs lemosho, kilimanjaro success rate by route)
  - **Kilimanjaro planning** (how much does it cost to climb kilimanjaro, kilimanjaro training, best time to climb kilimanjaro, kilimanjaro packing list, kilimanjaro group climb)
  - **Safari planning** (tanzania safari cost, best time to visit tanzania, serengeti great migration by month, tanzania vs kenya safari, calving season safari)
  - **Combos** (kilimanjaro safari zanzibar package, tanzania itinerary 10 days, safari from zanzibar, tanzania and zanzibar honeymoon)
  - **Trust/direct-booking** (licensed tanzania tour operator, how to choose a kilimanjaro operator, is tanzania safe, book safari direct vs viator)
  - Market notes: keep one English variant; note UK phrasing ("trekking", "holiday") and US phrasing ("vacation", "hike") as secondary terms *within* pages, not separate pages. Germans researching English-language operators search in English for booking queries — capture them with the trust cluster.
- Why it matters: Every content day for the next 11 weeks executes against this map; without it you write by vibes.
- Deliverable: Spreadsheet with ≥120 keywords, each assigned an intent, cluster, and target URL.

### Day 9
- Task: Map all 54 tour pages (`data/packages.ts`) to exactly one primary transactional/commercial keyword each (e.g., `7-day-machame-route` → "machame route 7 days", `10-day-serengeti-calving-safari` → "serengeti calving season safari"). Flag pages where two packages compete for the same keyword (e.g., the two calving safaris, multiple migration safaris) and pick one primary per keyword; the others target long-tail variants (duration, private/luxury).
- Why it matters: Money pages that cannibalize each other split ranking signals; one-keyword-one-page discipline is how a small site beats OTA category pages.
- Deliverable: Keyword column filled for all 54 packages, cannibalization conflicts resolved on paper.

### Day 10
- Task: Audit all 48 guides (`data/guides.ts`) against GSC data: for each, record primary keyword, 90-day impressions/clicks/position, and verdict — **keep / upgrade / merge**. Expect most upgrades in Kilimanjaro and safari-cost guides (highest value), and merge candidates among thin overlapping pieces (e.g., if `best-time-to-visit-tanzania` and `when-to-visit-tanzania-month-by-month` cannibalize, plan a merge with a redirect).
- Why it matters: You already own 48 articles — upgrading existing URLs with age and internal links compounds far faster than publishing new ones.
- Deliverable: Verdict column completed for all 48 guides; ranked upgrade queue (this drives Weeks 3–8).

### Day 11
- Task: Content gap list — pages that should exist but don't. From the Day 8 map, confirm and prioritize these NEW pages (all scheduled later in this plan): "Why book direct with a licensed operator" (D29), standalone `/faq` (D31), "Kilimanjaro group vs private climbs" (D20), "Kilimanjaro for first-timers" (D24), "Tanzania itinerary 7/10/14 days" (D44), "Safari from Zanzibar" (D47), "Family safari Tanzania" (D53), "2026 Tanzania park fees reference" (D67). Add anything else GSC queries reveal.
- Why it matters: A finite, prioritized backlog prevents the classic solo-operator failure mode of writing whatever feels interesting that week.
- Deliverable: Gap backlog of 8–12 new pages, each with target keyword and planned publish day.

### Day 12
- Task: Title/meta rewrite session 1 — top 10 money pages by commercial value (`7-day-machame-route`, `8-day-lemosho-route`, `9-day-northern-circuit`, `6-day-marangu-route`, `7-day-great-migration-safari`, `8-day-great-migration-safari`, `12-day-kilimanjaro-safari-culture`, `7-day-tanzania-zanzibar`, `10-day-safari-zanzibar-adventure`, `7-day-ultimate-honeymoon`). Formula: `{Primary keyword} | {differentiator} — from ${price}` for titles (≤60 chars); meta descriptions lead with a trust hook: "TALA-licensed (No. 014216), owner-led, 5.0★ on TripAdvisor (97 reviews). Transparent pricing, no OTA markup." Edit the `metadata`/`generateMetadata` sources feeding these pages.
- Why it matters: Against OTAs you rarely out-rank on authority first — you out-CTR them with license/price/review hooks OTA snippets can't show.
- Deliverable: 10 rewritten title/meta pairs live, logged in the sheet with their pre-rewrite CTR (for the Day 28 comparison).

### Day 13
- Task: Title/meta rewrite session 2 — home (`app/page.tsx` via `app/layout.tsx` defaults), the six category listing pages, `/about`, `/reviews`, `/contact`. Same trust-hook formula. Also verify every rewritten page's OG title/description matches (the metadata API propagates, but spot-check two pages' rendered `<head>`).
- Why it matters: Category pages are what rank for head terms like "tanzania safari packages" — their snippets do the heavy lifting for first impressions.
- Deliverable: All non-tour indexable pages have intentional, unique, hook-led titles/metas.

### Day 14
- Task: Set up lightweight rank tracking, free: a sheet with your top 25 target keywords where you log GSC average position weekly (filter: query + last 7 days). Optionally add a free tracker (e.g., SERPROBOT free tier) for the top 10. Then run Checkpoint 1 below.
- Why it matters: Weekly position logging turns "I feel like it's working" into a decision-grade trendline.
- Deliverable: Rank-tracking sheet with Week-2 values filled for 25 keywords.

### Week 2 Checkpoint (Days 1–14 review)
- Metrics to check: GA4 receiving data with key events firing; indexation count vs sitemap (target: >90% of the ~120 URLs indexed); Bing verified; CWV baseline recorded; baseline GSC export saved; keyword map + audit verdicts complete.
- Decision point: If >10% of URLs are unindexed, diagnose before writing anything new (indexation problems make content work pointless) — usually it's thin "coming soon" stub packages (priority 0.4 in `app/sitemap.ts`); consider `noindex` on stubs or fleshing them out. If everything is green, proceed to content sprints exactly as planned.

---

## Weeks 3–4 (Days 15–28): Kilimanjaro Cluster (Highest Commercial Value)

### Day 15
- Task: Upgrade `/guides/best-kilimanjaro-route` into the cluster **pillar**: "Kilimanjaro Routes Compared (2026): Which Route Is Right for You?". Brief: comparison table of all 7 routes (days, distance, success rate, scenery, crowds, cost), a "choose your route" decision section (first-timer → Machame/Lemosho; budget/huts → Marangu; solitude → Northern Circuit), one paragraph per route linking to its dedicated guide (`machame-route`, `lemosho-route`, `marangu-route`, `northern-circuit-route`) *and* its tour page (`/kilimanjaro/7-day-machame-route`, `/kilimanjaro/8-day-lemosho-route`, `/kilimanjaro/6-day-marangu-route`, `/kilimanjaro/9-day-northern-circuit`, `/kilimanjaro/6-day-umbwe-route`, `/kilimanjaro/6-day-rongai-route`), plus 5 FAQs (FAQPage schema comes free via `components/GuideJsonLd.tsx`). Target: "best kilimanjaro route", "kilimanjaro routes compared". ~2,500 words.
- Why it matters: This is the single highest-intent informational query in your niche and the hub every other Kilimanjaro page feeds authority into.
- Deliverable: Upgraded pillar drafted in `data/guides.ts` (publish Day 26).

### Day 16
- Task: Upgrade `/guides/machame-route`. Brief: full day-by-day profile drawn from the `7-day-machame-route` package itinerary, 6-day vs 7-day comparison (why 7 days has a higher summit rate), success-rate stat, "who it's for", cost anchor from the package price, 4 FAQs. Target: "machame route", "machame route 7 days", "machame route success rate". Add prominent CTA links to `/kilimanjaro/7-day-machame-route` and `/kilimanjaro/groups`.
- Why it matters: "Machame route" is the highest-volume single-route keyword and feeds your best-selling climb directly.
- Deliverable: Upgraded guide drafted with itinerary, stats, FAQs, and both CTAs.

### Day 17
- Task: Upgrade `/guides/lemosho-route` the same way (targeting "lemosho route", "lemosho 8 days"), then write the brief for a NEW comparison guide: "Machame vs Lemosho: Which Kilimanjaro Route Should You Pick?" — side-by-side table (cost, days, crowds, acclimatization profile, summit rate), verdict by traveler type, links to both route guides + both tour pages. Target: "machame vs lemosho". ~1,500 words.
- Why it matters: "X vs Y" comparison queries convert at near-transactional rates because the searcher has already shortlisted.
- Deliverable: Lemosho upgrade drafted + Machame-vs-Lemosho brief ready to write.

### Day 18
- Task: Upgrade `/guides/kilimanjaro-success-rate` into a data asset: success-rate table **per route per duration** (5–9 days), sourced/estimated with methodology stated, plus your own operator context (guide ratio, acclimatization protocol). Target: "kilimanjaro success rate", "kilimanjaro summit success rate by route".
- Why it matters: This is Link-Worthy Asset #1 — bloggers and journalists cite per-route stat tables, and it's a table OTAs don't publish.
- Deliverable: Upgraded guide with the stats table and a stated methodology line.

### Day 19
- Task: Upgrade `/guides/how-much-to-climb-kilimanjaro` into a radical-transparency cost breakdown: itemized 2026 KINAPA park/camping/rescue fees, crew wages, food, transfers, your actual margin philosophy, and a "why $1,200 climbs are dangerous" section (unlicensed operators, unpaid porters). Anchor with your real prices from `data/packages.ts`. Target: "kilimanjaro cost", "how much does it cost to climb kilimanjaro".
- Why it matters: Link-Worthy Asset #2, and it pre-sells your pricing against cheaper competitors by reframing the comparison around safety and porter welfare.
- Deliverable: Upgraded cost guide with itemized fee table and price anchors.

### Day 20
- Task: Write the NEW guide "Kilimanjaro Group Climbs vs Private Climbs" — cost difference, pros/cons (fixed dates vs flexibility, camaraderie vs pace control), who should pick which, linking to `/kilimanjaro/groups` and its scheduled departures (`data/departures.ts`) plus 2 private climb pages. Target: "kilimanjaro group climb", "join kilimanjaro group". ~1,200 words.
- Why it matters: Group-departure queries are transactional, seasonal, and directly monetize your existing `/kilimanjaro/groups/[departure]` pages, which currently have almost no informational content feeding them.
- Deliverable: New guide drafted in `data/guides.ts` with departure links.

### Day 21
- Task: Kilimanjaro internal-link pass. In every Kilimanjaro guide body, add 3–5 contextual in-text links (keyword-rich but natural anchors): each route guide → pillar; pillar → all route guides + tour pages; planning guides (`kilimanjaro-training-and-fitness`, `kilimanjaro-packing-list`, `best-time-to-climb-kilimanjaro`, `altitude-sickness-on-kilimanjaro`) → pillar + one tour page each. Don't rely on the automated `GuideStrip` alone — in-body links carry more weight.
- Why it matters: Internal links are the one authority lever you fully control, and a hub-and-spoke structure concentrates it on the pillar and money pages.
- Deliverable: Every Kilimanjaro guide has ≥3 contextual in-body links; pillar links out to all 6 route tour pages.

### Day 22
- Task: Google Business Profile deep optimization: complete every field (categories: Tour Operator + Safari Tour Agency; services list mirroring your clusters; attributes), upload 15 real photos (summit shots, vehicles, founder Ombeni), seed 5 Q&As with answers (visa, best time, price range, license), and publish your first GBP post (link to the routes pillar). Set a weekly recurring reminder: 1 post + 1 photo.
- Why it matters: GBP is free brand-SERP real estate in every target market and the entity anchor for your `TravelAgency` schema.
- Deliverable: 100% complete GBP, 5 Q&As live, first post published, weekly reminder set.

### Day 23
- Task: SafariBookings profile (p3691) optimization: complete company description with license number, sync tour listings with your top 8 packages (matching your site prices), upload photos, and send review invitations for your 3 most recent trips through their system.
- Why it matters: SafariBookings ranks page-one for "tanzania safari operator" queries in every English market — your profile there *is* a search result, plus it's an authority backlink you already have (it's in your org `sameAs`).
- Deliverable: Complete SafariBookings profile with ≥8 current tours and 3 review invitations sent.

### Day 24
- Task: Write the NEW guide "Climbing Kilimanjaro for Beginners: Your First High-Altitude Trek" — honest difficulty framing, fitness benchmarks (link `kilimanjaro-training-and-fitness`), route recommendation for first-timers (link pillar), what a day on the mountain looks like, 5 first-timer FAQs. Target: "climbing kilimanjaro for beginners", "can a beginner climb kilimanjaro". ~1,800 words.
- Why it matters: Beginner queries are the widest top-of-funnel entry to the cluster and skew heavily toward your 25–45 first-timer ICP.
- Deliverable: New guide drafted with links into pillar, training guide, and one group-climb CTA.

### Day 25
- Task: Upgrade `/guides/best-time-to-climb-kilimanjaro` into a month-by-month resource: a section per month (conditions, crowds, summit-night temps, verdict), jump-link table of contents, and month-specific FAQs ("Can you climb Kilimanjaro in April?"). Do **not** create 12 separate thin month pages — one strong page captures all "kilimanjaro in {month}" long-tails.
- Why it matters: Month queries have booking intent with a known travel window — the closest thing to transactional an informational page gets.
- Deliverable: Upgraded guide with 12 month sections + TOC + FAQs.

### Day 26
- Task: Publish day. Ship everything drafted Days 15–25 (pillar, 4 route/stat/cost upgrades, 2 new guides, month guide), bump each guide's `updated` date in `data/guides.ts` (this flows into `lastModified` in `app/sitemap.ts` and `dateModified` in Article schema), deploy, request indexing in GSC for the pillar + 2 new URLs, and confirm IndexNow fired.
- Why it matters: Batched publishing with fresh lastmod dates gets the whole cluster recrawled together, so the new internal-link structure is seen at once.
- Deliverable: All Kilimanjaro cluster changes live, indexing requested, deploy verified.

### Day 27
- Task: Post-publish QA: run the Rich Results Test on the pillar and both new guides (Article + FAQPage should validate), check their auto-generated OG images render (`app/guides/[slug]/opengraph-image.tsx`), click through every new internal link on the live site, and share the pillar on your Facebook/Instagram + first GBP post if not done.
- Why it matters: A broken FAQ schema or dead link on your most important new page wastes the crawl you just requested.
- Deliverable: Zero schema errors, zero broken links on all newly published pages.

### Day 28
- Task: Run Checkpoint 2 (below) and log Week-4 positions for your 25 tracked keywords.
- Why it matters: First data-informed steering opportunity after real content shipped.
- Deliverable: Checkpoint notes + updated rank sheet.

### Week 4 Checkpoint
- Metrics to check: GSC impressions trend for the Kilimanjaro cluster (filter Pages containing `/guides/` + query contains "kilimanjaro") vs Day-2 baseline; indexation of the 2 new guides (should be indexed within days given IndexNow + request); CTR change on the 10 money pages rewritten Day 12; GA4 organic sessions and key events; GBP views.
- Decision point: New guides not indexed after 7 days → inspect URLs and strengthen internal links from home (`app/page.tsx` features 3 pillar guides — swap one for the routes pillar). Money-page CTR flat despite position → iterate titles again (test price-in-title vs review-count-in-title). Impressions rising → hold course; the same playbook repeats for the trust cluster next.

---

## Weeks 5–6 (Days 29–42): Trust & Direct-Booking Cluster (Your Anti-OTA Differentiator)

### Day 29
- Task: Write the NEW page "Why Book Direct With a Licensed Tanzania Operator (Instead of an OTA)" — honest comparison: what Viator/GetYourGuide markups pay for vs booking direct (same trip, ~15–25% commission), who actually runs your trip either way, what direct gets you (owner on WhatsApp, itinerary changes, no middleman in emergencies), and how to verify *any* operator (license check, TripAdvisor cross-check). Name your own proof: TALA Class A No. 014216, Est. 2008, 97 five-star TripAdvisor reviews. Target: "book safari direct vs viator", "licensed tanzania tour operator". ~1,500 words, publish as a guide in `data/guides.ts`.
- Why it matters: This is the argument your entire business model rests on, and no OTA can ever publish a page competing for it.
- Deliverable: Draft complete with a verification checklist section (that checklist is your most shareable asset in this cluster).

### Day 30
- Task: Upgrade `/guides/how-to-choose-tour-operator` into "How to Verify a Tanzania Tour Operator Is Licensed (TALA Explained)" — what TALA licensing is, Class A vs others, how to ask for and check a license number, red flags (no license number published, prices far below park fees, no physical address), plus a worked example using your own license. Target: "TALA license tanzania", "how to verify tanzania tour operator". Cross-link with Day 29's page.
- Why it matters: You become the definitional resource for the trust criterion you win on — and journalists/bloggers writing "how to pick a safari operator" cite exactly this kind of page.
- Deliverable: Upgraded guide with a step-by-step verification walkthrough.

### Day 31
- Task: Build the standalone `/faq` page — new `app/faq/page.tsx` aggregating your ~20 most-asked questions across clusters (visa, vaccinations, cost, tipping, safety, booking/payment, cancellation), reusing `components/FAQAccordion.tsx` for the UI and emitting one consolidated `FAQPage` JSON-LD via `lib/json-ld.ts` (same pattern as `components/TripJsonLd.tsx`). Add it to `app/sitemap.ts`, the footer nav in `components/Footer.tsx`, and link each answer out to its full guide.
- Why it matters: A sitewide FAQ page captures dozens of long-tail question queries, feeds internal links to every cluster, and gives support-style queries somewhere to land besides the contact page.
- Deliverable: `/faq` live, FAQPage schema validates, in sitemap and footer.

### Day 32
- Task: Add item-level `Review` schema. In `components/TripJsonLd.tsx`, where a package has review snippets, attach 2–3 `Review` objects (author, reviewBody excerpt, ratingValue, source noted as TripAdvisor) to the existing `Product` node. Keep `AggregateRating` where it already lives (`app/reviews/page.tsx` on the org) — don't spray org-level ratings sitewide; per-Product reviews are what earn stars on tour-page snippets.
- Why it matters: Star snippets on tour pages are the single biggest CTR weapon a small operator has against OTA listings in the same SERP.
- Deliverable: Review schema validating on 3+ tour pages in Rich Results Test.

### Day 33
- Task: Build the review-velocity system: write a post-trip email + WhatsApp template (sent day 2–3 after trip end, while the glow lasts) with direct links from `REVIEW_LINKS` in `data/social.ts` (TripAdvisor + Google `g.page` link), one-tap phrasing, and a photo-sharing ask. Set a recurring calendar rule: every trip end-date triggers the send.
- Why it matters: Review recency and velocity drive both your TripAdvisor/SafariBookings rankings and the aggregate numbers all your schema cites — this system compounds for years.
- Deliverable: Both templates written, review links tested, recurring process on the calendar.

### Day 34
- Task: Upgrade `/guides/how-much-tanzania-safari-cost` with the same radical-transparency treatment as Day 19: per-day cost bands (budget/mid/luxury), itemized park fees per park (Serengeti, Ngorongoro crater fee, Tarangire), what your $1,580–$2,200 pricing includes, and a "why the cheapest quote is the most expensive mistake" section. Anchor to 3 real packages (`3-day-safari-tarangire-manyara-ngorongoro`, `7-day-great-migration-safari`, `5-day-luxury-fly-safari`).
- Why it matters: "Tanzania safari cost" is the highest-volume commercial-investigation query in the safari cluster and the natural home of your pricing-transparency positioning.
- Deliverable: Upgraded cost guide with itemized tables and package anchors.

### Day 35
- Task: Upgrade `/guides/is-tanzania-safe` with current-year specifics: safety by context (parks, Arusha, Zanzibar, solo female travelers), health cross-links (`malaria-in-tanzania`, `tanzania-vaccinations`, `travel-insurance-tanzania`), how licensed operators change the risk picture, and a short founder-voiced section ("what I tell my own guests"). Target: "is tanzania safe", "is tanzania safe for tourists 2026".
- Why it matters: Safety queries are where hesitant high-value travelers decide between booking anything at all — and E-E-A-T (a named, licensed local expert) is decisive here.
- Deliverable: Upgraded guide with founder-voiced section and health cross-links.

### Day 36
- Task: E-E-A-T author upgrade. Change the `Article` author in `components/GuideJsonLd.tsx` from the Organization to a `Person` node for founder Ombeni (with `jobTitle`, `worksFor` → org `@id`, `knowsAbout`), add a visible author byline + short bio box to `components/GuideView.tsx` (photo: `public/images/founder-ombeni.jpg`, linking to `/about`), and add matching `Person` schema on `/about`.
- Why it matters: Google's quality systems reward identifiable human expertise, and "written by the licensed guide who's climbed it 100+ times" is credibility no OTA content mill can match.
- Deliverable: Byline visible on all guides; Person schema validates; `/about` links resolve.

### Day 37
- Task: Publish day for the trust cluster (Days 29–36 work): deploy, bump `updated` dates, request indexing for `/faq` and the two new/renamed trust guides, and add trust-cluster links from high-traffic pages — footer link to the direct-booking page, a "Why book direct" link in the quote-request flow, and a line in `components/PackagePageView.tsx`'s trust area if one exists.
- Why it matters: Trust pages only work if they're one click away from every money page where doubt strikes.
- Deliverable: Trust cluster live and linked from footer + tour template; indexing requested.

### Day 38
- Task: Upgrade `/guides/tanzania-vs-kenya-safari` — head-to-head on wildlife density, crowds, cost (park fees comparison), migration timing on each side, verdict by traveler type; link `10-day-kenya-safari` (you sell both — rare credibility) and the migration guides. Target: "tanzania vs kenya safari". ~1,800 words.
- Why it matters: This comparison query has big volume in all four markets and you're one of few operators who can answer it without bias theater — you run trips in both.
- Deliverable: Upgraded comparison guide with fee table and package links.

### Day 39
- Task: Case study #1: pick a recent 5★ TripAdvisor review with a story arc, get the guest's permission, and turn it into a trip-report guide ("How Sarah and Tom's 12-Day Kilimanjaro + Safari + Zanzibar Trip Actually Went") — real itinerary from the package data, real photos, what changed en route and how you handled it, cost paid. Link the package (`12-day-kilimanjaro-safari-culture` or similar) and the combo pillar.
- Why it matters: Trip reports rank for long-tail "X day tanzania itinerary review" queries and are the most persuasive mid-funnel content that exists for a $2,000 decision.
- Deliverable: Case study drafted with guest permission logged.

### Day 40
- Task: Directory sweep 1 — travel-specific: claim/complete free listings on Bookmundi and TourRadar (list 3–5 top packages at site-matching prices), YourAfricanSafari, and check Tanzania Tourist Board / TATO membership directory listings show your correct site URL. Log every profile URL + login in your sheet.
- Why it matters: These directories rank for "[trip] operator" queries themselves and provide relevant, legitimate backlinks — the easy 20% of link building.
- Deliverable: ≥4 completed directory profiles, all logged with consistent NAP.

### Inserted — Keyword Priority & the "Best Operator" Gap (2026-08-18)
- Task: Off-cycle addition, not part of the original 90-day skeleton. Reviewed a local-SEO framework, realized we'd never done real Step-1-style keyword benchmarking for this site, and pulled actual GSC data (not estimates) for a 5-term shortlist. Found a clean two-bucket split: cost/informational queries have real impressions but zero clicks (an authority problem, already being addressed by Days 40–41's link building) vs. "best operator/company" queries with **zero impressions** — a relevance-matching gap, not an authority one. Built `/guides/best-tanzania-safari-company` to close it directly.
- Why it matters: Confirms the authority-building pivot is correctly prioritized, and surfaces a real, fixable content gap that backlinks alone would never have fixed — Google was never even considering the site a candidate for "best tanzania tour operator" / "best tanzania safari company."
- Deliverable: New guide live, cross-linked from `book-direct-vs-ota` and `how-to-choose-tour-operator`. Full findings + methodology: [keyword-priority-2026-08-18.md](./seo-tracking/keyword-priority-2026-08-18.md).

### Day 41
- Task: Directory sweep 2 — general/platform: Bing Places, Apple Business Connect (Apple Maps), full Facebook page audit (services, CTA button → site), LinkedIn company page, and make sure every profile links to `https://www.trusttourstz.com` (with www — matching your canonical host) and appears in the org `sameAs` array in `app/layout.tsx` where appropriate.
- Why it matters: Consistent cross-platform presence consolidates your knowledge-graph entity, and each profile is another page-one result for brand searches by comparison-shopping travelers.
- Deliverable: 4 platform profiles complete; `sameAs` array updated and deployed.

### Day 42
- Task: Run Checkpoint 3 (below); log weekly positions.
- Why it matters: The trust cluster is your differentiator — verify Google is picking it up before doubling down.
- Deliverable: Checkpoint notes + updated rank sheet.

### Week 6 Checkpoint
- Metrics to check: Impressions for trust-cluster queries ("licensed", "book direct", "safe", "operator"); star snippets appearing on tour pages (check live SERPs for 3 tour-page keywords after Day 32's Review schema); `/faq` indexed; review count vs Day 33 baseline (any new TripAdvisor/Google reviews yet?); Kilimanjaro cluster impressions still climbing vs Checkpoint 2.
- Decision point: Star snippets not showing after 2 weeks → verify schema in GSC's enhancement reports, don't chase it further (eligibility ≠ guarantee). Kilimanjaro impressions flat since Day 26 → the issue is authority, not content; pull Days 57–70 (off-page) forward a week and swap with combo-cluster content days. Review system generating reviews → update `data/reviews-meta.ts` count now rather than waiting for Day 79.

---

## Weeks 7–8 (Days 43–56): Safari + Zanzibar Combo Cluster

### Day 43
- Task: Upgrade `/guides/combine-kilimanjaro-safari-zanzibar` into the combo **pillar**: "Kilimanjaro, Safari & Zanzibar: How to Combine All Three (Sample Itineraries)". Brief: why this order (climb → safari → beach recovery), 10/12/14-day sample itineraries mapped to real packages (`12-day-kilimanjaro-safari-culture`, `7-day-kilimanjaro-hike-safari`, `10-day-safari-zanzibar-adventure`, `9-day-beach-city-bush`), logistics (internal flights, rest days), cost ranges, 5 FAQs. Target: "kilimanjaro safari zanzibar package", "tanzania climb safari beach itinerary". ~2,200 words.
- Why it matters: Combo trips are your highest-ticket products and this exact multi-part query has almost no strong owner-operator content competing.
- Deliverable: Combo pillar drafted with 3 itineraries linked to packages.

### Day 44
- Task: Write the NEW guide "Tanzania Itinerary: 7, 10 and 14 Days (What Actually Fits)" — one section per duration with a realistic day-by-day, what to cut at each length, each mapped to a bookable package (`7-day-tanzania-zanzibar`, `10-day-safari-zanzibar-adventure`, a 14-day combo). Target: "tanzania itinerary 10 days", "2 weeks in tanzania", "one week tanzania". ~2,000 words.
- Why it matters: "Itinerary + duration" queries are how independent planners in all four markets actually search, and each section funnels straight to a matching product.
- Deliverable: New guide drafted with three duration sections and package CTAs.

### Day 45
- Task: Resolve the best-time overlap: make `/guides/best-time-to-visit-tanzania` the primary (decision-focused: dry vs green season, by activity), restructure `/guides/when-to-visit-tanzania-month-by-month` as the deep month-by-month companion, cross-link both prominently, and differentiate their titles/targets ("best time to visit tanzania" vs "tanzania weather by month"). If GSC (Day 10 audit) showed them cannibalizing one query, merge instead and 301 in `next.config.ts`.
- Why it matters: Two pages fighting for one query rank worse than either would alone; clean separation (or a merge) fixes the biggest cannibalization risk in your library.
- Deliverable: Both pages re-scoped with distinct targets, or merged with a redirect — decided by data.

### Day 46
- Task: Upgrade `/guides/best-time-great-migration` into a migration-map asset: month-by-month herd location (Ndutu calving Dec–Mar, Grumeti May–Jun, Mara crossings Jul–Oct) with a simple map graphic, "where to stay each month", and links to `7-day-great-migration-safari`, `8-day-great-migration-safari`, `5-day-ndutu-migration-safari`, plus `calving-season-guide`. Target: "great migration by month", "where is the great migration now".
- Why it matters: Link-Worthy Asset #3 — migration-timing content earns citations from every "when to see the migration" listicle, and it sells your migration safaris year-round.
- Deliverable: Upgraded guide with month-location table/graphic and 4 package links.

### Day 47
- Task: Write the NEW guide "Safari From Zanzibar: Day Trips vs Fly-In Safaris (Honest Comparison)" — Selous/Nyerere and Mikumi day options vs flying to the northern circuit, real costs, what a one-day safari can and can't deliver, when to instead do safari-first-beach-second (link combo pillar). Target: "safari from zanzibar", "zanzibar day safari". ~1,400 words.
- Why it matters: Huge volume from beach tourists already in-country deciding on impulse — high intent, and honesty here ("a day trip can't do the Serengeti") builds the trust that wins bigger bookings.
- Deliverable: New guide drafted, linked from Zanzibar category and combo pillar.

### Day 48
- Task: Upgrade `/guides/tanzania-honeymoon-guide` targeting "tanzania and zanzibar honeymoon" / "tanzania honeymoon safari": romance-angle itinerary building, privacy/lodge notes, and a package-picker section linking all six honeymoon products (`7-day-ultimate-honeymoon`, `10-day-honeymoon-migration`, `20-day-honeymoon-tanzania-zanzibar`, `7-day-zanzibar-honeymoon`, `9-day-honeymoon-northern`, `13-day-romance-honeymoon`) with one-line "pick this if…" guidance.
- Why it matters: Honeymooners are your least price-sensitive segment and you have six products with almost no informational content funneling into them.
- Deliverable: Upgraded honeymoon guide with the six-package picker.

### Day 49
- Task: Zanzibar cluster refresh: update `/guides/best-beaches-zanzibar` with an area-comparison section (Nungwi vs Kendwa vs Paje vs Jambiani — swimmability/tides, vibe, kitesurfing) and cross-link `/guides/best-time-to-visit-zanzibar` and `things-to-do-zanzibar`; add links to `4-day-zanzibar-escape` / `5-day-zanzibar-escape` / `8-day-zanzibar-tour`.
- Why it matters: "Nungwi vs Paje"-style area queries are exactly what your UK/DE beach-extension audience searches after committing to Tanzania.
- Deliverable: Refreshed beaches guide with area comparison and 3 package links.

### Day 50
- Task: Publish day for the combo/Zanzibar cluster (Days 43–49): deploy, bump `updated` dates, request indexing for the 2 new guides, run an internal-link pass so the safari and Zanzibar category pages (`app/safaris/page.tsx`, `app/zanzibar/page.tsx`) and home feature the combo pillar.
- Why it matters: Same batched-recrawl logic as Day 26 — ship the cluster as a connected unit.
- Deliverable: Cluster live, indexing requested, pillar linked from both category pages.

### Day 51
- Task: Schema verification sweep on everything added since Day 6: Rich Results Test the six `ItemList` listing pages, `/faq`, 3 tour pages with `Review` markup, and 2 upgraded guides; fix any warnings; then check GSC's "Enhancements" reports for items flagged since the additions.
- Why it matters: Schema errors silently disqualify rich results — a 1-hour verification protects five weeks of markup work.
- Deliverable: Zero errors across all tested templates; GSC enhancement reports clean.

### Day 52
- Task: Image SEO sweep: audit alt text on guide and package images for descriptive, keyword-natural phrasing (recent commits improved some — finish the job in `data/packages.ts` / `data/guides.ts` image fields), ensure listing-card `Photo` components pass sensible `sizes` props, and add captions to key guide images where they aid the reader.
- Why it matters: Google Images is a real discovery channel for safari/beach content, and correct `sizes` props keep your CWV wins from Day 5.
- Deliverable: Alt text complete across both data files; no oversized image payloads on listing pages.

### Day 53
- Task: Write the NEW guide "Family Safari in Tanzania: Taking Kids on Safari (Ages, Parks, Sample Trip)" — minimum ages (balloon, walking safaris), park choices for short drives, malaria considerations for kids (link `malaria-in-tanzania`), a sample 5–6 day family itinerary mapped to `5-day-northern-safari` or `6-day-northern-safari`. Target: "tanzania family safari", "safari with kids tanzania". ~1,500 words.
- Why it matters: Family queries are a market-wide gap in your library, and family bookings are multi-person tickets at your existing price points.
- Deliverable: New guide drafted with sample itinerary and package link.

### Day 54
- Task: Create the YouTube channel (or dust it off), upload the honeymoon film set aside on Day 4 (`Honeymoon-1.mp4`) with a keyword title ("Tanzania & Zanzibar Honeymoon — 20 Days with Trust Tours"), a description linking the honeymoon guide + packages, then embed it on the honeymoon category page (`app/honeymoon/page.tsx`) using a lightweight facade (thumbnail + click-to-load iframe) so it doesn't hurt CWV.
- Why it matters: YouTube is the second-largest search engine, video is proof-of-experience no OTA reseller has, and the asset already exists — it was just sitting in `public/` as 81 MB of dead weight.
- Deliverable: Video live on YouTube, embedded via facade on `/honeymoon`, description links to site.

### Day 55
- Task: Mid-plan GSC query mine: pull the last 28 days, filter to positions 8–20 (striking distance), and list the top 10 queries by impressions with their ranking URL. For each, note the fix type: content gap on the page, title mismatch, or missing internal links. This list drives Days 72–73.
- Why it matters: Moving position 12 → 6 on a query you already rank for is 10× cheaper than ranking something new — this is where months 3+ gains actually come from.
- Deliverable: Striking-distance hit list of 10 queries with diagnosis each.

### Day 56
- Task: Run Checkpoint 4 (below); log weekly positions.
- Why it matters: Halfway point — this checkpoint decides the balance of content vs outreach for the final month.
- Deliverable: Checkpoint notes + updated rank sheet.

### Week 8 Checkpoint
- Metrics to check: Total organic clicks vs Day-2 baseline (expect the first meaningful click growth around now); combo-cluster impressions; indexation still >90%; GA4 key events from organic (inquiries + WhatsApp clicks — the number that pays rent); YouTube video views; review count trend.
- Decision point: Clicks up but zero inquiries → conversion problem, not SEO: audit CTAs on your top 5 organic landing pages before writing more (pull Day 81 forward). Impressions up across clusters but positions stuck at 8–15 → authority is the binding constraint: extend the off-page block (Weeks 9–10) by trading away Days 71–74 content refreshes. Both rising → stay the course.

---

## Weeks 9–10 (Days 57–70): Off-Page Authority Push

### Day 57
- Task: Set up journalist-request accounts (HARO's successors): Featured.com, Qwoted, SourceBottle, and Help a B2B Writer — free tiers, alerts filtered to travel / Africa / adventure / outdoor. Write your reusable pitch skeleton: 2-line credential intro (TALA-licensed operator since 2008, World Travel Awards nominee 2023 & 2024, based in Arusha), then 3–4 sentences of genuinely specific expert answer, headshot + site link on file.
- Why it matters: Expert-source citations from travel publications are the highest-quality free backlinks available to a small operator, and your on-the-ground credentials beat 95% of the marketers pitching the same queries.
- Deliverable: 4 accounts live with alerts configured + pitch skeleton saved.

### Day 58
- Task: Answer 2–3 relevant journalist queries using the skeleton. From today onward, make this a recurring 20–30 min daily habit (scan alerts at coffee, answer only where you have real standing — Kilimanjaro, safaris, Tanzania travel, adventure safety).
- Why it matters: Source-request success is a volume game with a lag; starting the habit now means citations land during Weeks 11–13 when you need authority most.
- Deliverable: First 2–3 pitches sent; recurring daily slot on the calendar.

### Day 59
- Task: Build the blogger outreach list: 30 travel bloggers/creators with existing Kilimanjaro or Tanzania content. Find them with searches like `"climbing kilimanjaro" blog 2025`, `"tanzania itinerary" site:.co.uk`, `kilimanjaro packing list -site:pinterest.com`, plus who ranks pages 1–2 for your informational targets. Spreadsheet: name, site, relevant post URL, contact, domain strength (free Ahrefs/Moz checker), and a personalized angle per person.
- Why it matters: A researched list of 30 warm-relevant targets outperforms 300 cold sprays — every one of them has already proven they publish your topics.
- Deliverable: 30-row outreach sheet with a specific angle noted per target.

### Day 60
- Task: Outreach batch 1 — send 10 personalized emails. Lead with value, not asks: offer a free expert fact-check of their Kilimanjaro/Tanzania post against current park fees and rules (your Day 19 fee table is the hook), an updated stat they can cite (Day 18 success-rate table), or answers to reader questions they get. The link is the natural byproduct ("current fees are itemized here"), never the opening demand.
- Why it matters: Bloggers update old posts constantly and dread fact-checking Tanzania fees themselves — you're the primary source giving them free labor.
- Deliverable: 10 personalized pitches sent, logged with date in the outreach sheet.

### Day 61
- Task: Guest-post pitch #1: pick 2 mid-tier travel blogs from your list that accept contributions, and pitch "What a Licensed Tanzania Operator Wishes You Knew Before Booking a Safari" (or a Kilimanjaro-prep angle for a hiking blog) — send a 5-bullet outline, your credential line, and 2 writing samples (your best guides).
- Why it matters: One guest post on a real travel blog earns an in-content contextual link plus referral traffic from exactly your ICP mid-research.
- Deliverable: 2 guest-post pitches with outlines sent.

### Day 62
- Task: Digital PR asset push: package the Day 18 success-rate data as a mini press angle — "Operator data: summit success rates by route and duration" — with 3 pull-quote stats, and pitch it to 5 outdoor/adventure publications and newsletters (climbing/hiking media, adventure-travel sections) as an exclusive-first offer.
- Why it matters: Data journalism is the reliable path to authority-site links without a PR budget — publications need original numbers, and operators sit on them.
- Deliverable: 5 data pitches sent with the stats one-pager attached.

### Day 63
- Task: Founder-story PR: pitch Ombeni to 5 travel podcasts and 3 industry/entrepreneurship blogs — angles: building a licensed operator in Arusha since 2008, what OTA commissions actually do to local operators, porter welfare economics, back-to-back World Travel Awards nominations. Podcasts nearly always link guests from show notes.
- Why it matters: Founder-story links carry E-E-A-T straight to the `Person` entity you marked up on Day 36, and podcast audiences trust hosts' guests.
- Deliverable: 8 founder-story pitches sent.

### Day 64
- Task: Outreach batch 2 (next 10 from the Day 59 list) + polite one-line follow-ups to non-responders from batch 1 (one follow-up only, ~7 days later — which is now).
- Why it matters: 40–50% of outreach replies come from the follow-up, not the original email.
- Deliverable: 10 new pitches + up to 10 follow-ups sent and logged.

### Day 65
- Task: Partner-ecosystem links: list every business you already transact with — lodges/hotels you book, gear rental shops, travel-insurance or flight partners, the Zanzibar/Nairobi office networks — and offer each a written testimonial for their site (which customarily links your name/site) and/or a "partners we trust" mention exchange where genuinely true.
- Why it matters: These are the easiest legitimate links you'll ever get — pre-existing real relationships where a link just formalizes reality.
- Deliverable: ≥6 testimonial/partner offers sent.

### Day 66
- Task: Industry and institutional listings: verify/pursue TATO (Tanzania Association of Tour Operators) membership listing with a live link, Tanzania Tourist Board licensed-operator listings, and scan resource pages that list licensed operators (embassy travel pages, university outdoor clubs' Kilimanjaro pages, charity-climb resource lists) — pitch inclusion where you legitimately qualify.
- Why it matters: Institutional links are trust-weighted far above their traffic, and "licensed operator lists" are exactly the association your positioning wants.
- Deliverable: TATO/TTB listings verified or applied for; 5 resource-page inclusion requests sent.

### Day 67
- Task: Build the NEW reference page "Tanzania National Park Fees 2026 (Complete Table)" — every park's entry/camping/crater/vehicle fee in one maintained table, updated-date prominent, plus a short "how fees affect your quote" section linking the cost guides. Target: "tanzania park fees 2026", "serengeti entrance fee". This is the citable asset your Day 60+ outreach references.
- Why it matters: Fee tables are the most-linked page type in this niche — every blogger writing about Tanzania costs needs a current source, and official sources are hard to read.
- Deliverable: Fee reference page drafted and published; indexing requested; outreach targets notified it exists.

### Day 68
- Task: Community presence, value-first: create/complete profiles on r/Kilimanjaro, r/safari, r/travel and the TripAdvisor Tanzania forum; answer 3–5 open questions today with genuinely complete answers (no links unless the sub allows and it truly helps; your profile carries the operator identity transparently). Recurring: 2–3 answers weekly.
- Why it matters: Reddit threads rank on Google for your exact questions, community goodwill drives brand searches, and brand-search volume is itself a trust signal — but only the genuinely helpful survive moderation.
- Deliverable: Profiles complete; 3–5 substantive answers posted; weekly slot scheduled.

### Day 69
- Task: Outreach batch 3 (final 10 from the list) + follow-ups on batch 2 + tally results so far: replies, links earned/promised, guest posts accepted, podcast interest. Update the outreach sheet's status column for all 30.
- Why it matters: The tally tells Checkpoint 5 which outreach angle earns links per hour spent — you'll keep only the best one as a recurring habit.
- Deliverable: All 30 targets pitched; results tally complete.

### Day 70
- Task: Run Checkpoint 5 (below); log weekly positions.
- Why it matters: Deciding what earns a permanent slot in your weekly routine vs what gets dropped.
- Deliverable: Checkpoint notes + updated rank sheet.

### Week 10 Checkpoint
- Metrics to check: Links earned/promised (any new referring domains in GSC's Links report or a free backlink checker); journalist-pitch hit rate; guest post / podcast acceptances; brand-name search impressions in GSC (rising brand queries = outreach echo); position trend on the 25 tracked keywords — striking-distance queries from Day 55 especially.
- Decision point: ≥3 links earned → outreach works; lock the best-performing angle (data asset vs fact-check offer vs founder story) into a weekly recurring task. Zero links after 30 pitches + follow-ups → your asset isn't citable enough; strengthen the fee table/success-rate pages with visuals and re-pitch rather than sending more volume. Rankings moving without links → content+internal links are still paying; rebalance Weeks 11–12 toward refreshes.

---

## Weeks 11–12 (Days 71–84): Data-Driven Refresh & Striking-Distance Push

### Day 71
- Task: GSC deep-dive: export the full 90-day Pages + Queries data. Identify the top 10 **high-impression, low-CTR** pages (CTR below ~1.5% at position ≤10, or below expectation for their position) and rewrite their titles/metas — sharper hooks, front-loaded keywords, price/review proof. Log before-values for each.
- Why it matters: CTR rewrites on pages already getting impressions are the fastest clicks you can buy with an hour of editing.
- Deliverable: 10 title/meta rewrites deployed with before-CTR logged.

### Day 72
- Task: Striking-distance push #1: take the first 5 queries from the Day 55 list, and for each upgrade the ranking page — add a dedicated section that answers the query outright (heading phrased as the query), 2–3 new internal links to it from related guides using the query as natural anchor text, and refresh `updated`.
- Why it matters: Pages at positions 8–20 have already proven relevance — a targeted content-plus-links nudge is what tips them onto page one.
- Deliverable: 5 pages upgraded and interlinked; indexing requested.

### Day 73
- Task: Striking-distance push #2: same treatment for the remaining 5 queries from the Day 55 list.
- Why it matters: Same leverage, second tranche.
- Deliverable: 5 more pages upgraded and interlinked.

### Day 74
- Task: Prune and merge: from the Day 10 audit + 90 days of data, take guides with <10 impressions total and either merge them into a stronger sibling (move unique content across, add a 301 in the `next.config.ts` redirect map, remove from `data/guides.ts`) or visibly improve them if they're strategically necessary. Run `scripts/verify-redirects.mjs` after adding redirects.
- Why it matters: Dead pages dilute crawl attention and topical focus; consolidation moves their small equity somewhere it compounds.
- Deliverable: Merge/prune decisions executed; redirects verified passing.

### Day 75
- Task: Sitewide internal-link pass #2: from your five most-linked/most-visited pages (home, routes pillar, combo pillar, cost guides), audit outgoing links and ensure each passes authority to the current priority money pages (top group departures, migration safaris in booking window, honeymoon packages). Fix any orphan-ish new pages (fee table, family safari, `/faq`) so each has ≥3 internal inlinks.
- Why it matters: Ninety days of publishing always leaves fresh pages under-linked; this pass re-concentrates authority onto what sells.
- Deliverable: Link audit sheet; every new page ≥3 inlinks; money pages linked from ≥2 high-authority pages.

### Day 76
- Task: German-market decision, on data: in GSC filter performance by country (Germany) — check impression volume, which queries (English vs German-language), and which pages. Recommendation to hold unless data screams otherwise: keep one English site, no hreflang; if DE impressions are meaningful, first add DE-relevant touches to existing English pages (e.g., "flights from Frankfurt" in the getting-there content, metric units already standard) before ever considering translated pages — full German content is a next-quarter project only if this data justifies it.
- Why it matters: hreflang + translated content doubles maintenance forever; the decision deserves 90 days of real geo data, not guesswork.
- Deliverable: Written go/no-go note with the GSC Germany numbers attached.

### Day 77
- Task: CWV re-audit: re-run PageSpeed Insights on the same four template URLs from Day 5, compare, and fix the worst regression (usual suspects: an unoptimized new image, the Crisp chat widget's load timing, a missing `sizes` prop on a new component). Check GSC's CWV report for field-data movement.
- Why it matters: Three months of publishing usually erodes performance quietly; catching it now protects both rankings and mobile conversion into next season.
- Deliverable: Before/after table for the four templates; worst regression fixed and deployed.

### Day 78
- Task: Refresh publish day: deploy everything from Days 71–75, bump `updated` dates on all touched guides so `app/sitemap.ts` lastmod and Article `dateModified` update, request indexing for the 10 striking-distance pages, confirm IndexNow fired.
- Why it matters: The refresh sprint only counts once Google recrawls it — same batched-signal logic as Days 26/37/50.
- Deliverable: All refresh work live; recrawl requested on priority URLs.

### Day 79
- Task: Review-system harvest: count reviews gained since Day 33 across TripAdvisor/Google/SafariBookings, update `data/reviews-meta.ts` so the `AggregateRating` on `/reviews` reflects the current count (stale counts are a schema-credibility risk), and add the 2 best new review snippets to their matching packages so the Day 32 `Review` markup stays fresh.
- Why it matters: Review recency compounds every trust surface at once — schema, `/reviews`, TripAdvisor rank, and the meta descriptions citing the count.
- Deliverable: Current review counts everywhere; 2 fresh snippets added to packages.

### Day 80
- Task: Seasonal booking-window content: it's high season now (July), but travelers book 6–12 months out — refresh calving-season content (`calving-season-guide`, `10-day-serengeti-calving-safari`, `4-day-private-ndutu-calving-safari` metas) for the Dec–Mar window, and strengthen September/October sections in the Kilimanjaro month guide for shoulder-season climbers deciding now.
- Why it matters: SEO lead time plus booking lead time means today's content decides bookings two seasons ahead — publish for the *booking* window, not the travel window.
- Deliverable: Calving cluster + Sep/Oct climb content refreshed and deployed.

### Day 81
- Task: Conversion audit with 90 days of GA4: which organic landing pages produce inquiries and WhatsApp clicks, and at what rate? For the top 5 organic landers with weak conversion, add/upgrade a quote CTA block (the pattern from `components/PackagePageView.tsx`'s quote flow) placed after the content answers the reader's question.
- Why it matters: The plan's success metric is inquiries, not clicks — this is where traffic gains get converted into revenue.
- Deliverable: Conversion table for top 10 organic landers; CTAs added to 5 pages.

### Day 82
- Task: Outreach round 4: follow up every open thread from Weeks 9–10 (accepted guest posts, interested podcasts, promised links), deliver anything you owe (drafts, photos, quotes), and send 5 new pitches using whichever angle Checkpoint 5 crowned — referencing the now-live fee table.
- Why it matters: Most link opportunities die from the operator's own non-delivery, not rejection — closing loops is where promised links become live links.
- Deliverable: All open threads actioned; 5 new pitches sent; owed deliverables delivered.

### Day 83
- Task: Competitor gap check: pick 2–3 owner-operator competitors that outrank you (from your tracked SERPs — not the OTAs) and inventory what they rank for that you don't cover (free Ahrefs/Ubersuggest checks + manual SERP reading). Add the top 3 genuinely relevant gaps to your next-quarter backlog with target keywords.
- Why it matters: Peer competitors reveal winnable keywords OTAs mask; their content map is free market research for quarter two.
- Deliverable: 3 new backlog entries with keyword, rationale, and competitor URL.

### Day 84
- Task: Run Checkpoint 6 (below); log weekly positions.
- Why it matters: Final steering input before the consolidation week writes the next-quarter plan.
- Deliverable: Checkpoint notes + updated rank sheet.

### Week 12 Checkpoint
- Metrics to check: CTR movement on the Day 71 rewrites; position change on the 10 striking-distance queries (Days 72–73); organic inquiries/WhatsApp clicks vs Checkpoint 4; referring domains vs Checkpoint 5; Germany decision documented; indexation stable after the Day 74 prune (redirects clean, no 404 spikes in GSC).
- Decision point: Striking-distance queries that moved → the upgrade formula works; make it the standing pattern for Q2 refreshes. Queries that didn't move despite upgrades → competitive gap is authority; those keywords go to the Q2 link-building list, stop touching the content. Inquiries lagging traffic growth even after Day 81 → prioritize a conversion-focused sprint (quote-flow UX, response time, pricing display) ahead of new content next quarter.

---

## Week 13 (Days 85–90): Consolidation & Next-Quarter Setup

### Day 85
- Task: Full technical re-crawl: run Screaming Frog (free tier covers 500 URLs; site is ~120) and diff against Day-1 conditions — broken internal links (especially from Day 74 merges), redirect chains, missing/duplicate titles from three months of edits, orphan pages. Fix everything found.
- Why it matters: Twelve weeks of rapid editing always leaves debris; a clean crawl locks in the technical baseline for next quarter.
- Deliverable: Crawl report with all issues fixed or ticketed; zero broken internal links.

### Day 86
- Task: Sitewide schema validation sweep: Rich Results Test one URL of every template type (home, category listing, tour page, guide, `/faq`, `/reviews`, group departure) and reconcile with all GSC enhancement reports (FAQ, Review snippets, Breadcrumbs, Products).
- Why it matters: Your schema footprint grew a lot in 90 days (ItemList, Review, Person, FAQ page, enriched org) — one sweep confirms it all still validates together.
- Deliverable: All templates pass; GSC enhancement reports show zero errors.

### Day 87
- Task: Write the 90-day report (one page): Day-2 baseline vs now — total clicks, impressions, average position on the 25 tracked keywords, indexed pages, referring domains gained, reviews gained, organic inquiries/WhatsApp clicks, CWV before/after. Note the three biggest wins and the three biggest disappointments with your hypothesis for each.
- Why it matters: This document is the difference between a quarter of activity and a quarter of learning — and it writes Day 89's roadmap for you.
- Deliverable: One-page report saved alongside this plan (e.g., `docs/seo-q1-report.md`).

### Day 88
- Task: Cornerstone refresh pass: update stats, prices, and dates in your five most important pages (routes pillar, combo pillar, both cost guides, fee table), bump `updated`, redeploy, request indexing.
- Why it matters: Cornerstones must never go stale — freshness on your five highest-value pages protects the rankings the quarter earned.
- Deliverable: Five cornerstones current as of today's date and recrawl requested.

### Day 89
- Task: Build the next-quarter roadmap from the Day 87 report: double down on the winning cluster (more supporting content + links to it), assign the authority-blocked keywords (Checkpoint 6) to a link-building track, schedule the Day 83 competitor gaps, and decide the German-market action from Day 76's note. Structure it as another 90-day checklist like this one.
- Why it matters: Momentum dies in the gap between plans — Q2 should start the day after Q1 ends, already knowing what worked.
- Deliverable: Q2 outline with weekly themes and the first two weeks day-by-day.

### Day 90
- Task: Systematize the compounding habits into a standing weekly SOP (put it in the calendar, ~4 hrs/week total): 1 GBP post + photo, 2–3 journalist-query pitches, 1 content refresh or striking-distance upgrade, review requests after every trip, 2–3 community answers, biweekly metrics log. Everything else in Q2 is project work on top of this floor.
- Why it matters: The plan's real output isn't 90 tasks done — it's a machine that keeps compounding at a solo operator's sustainable pace.
- Deliverable: Written weekly SOP with calendar slots; 90-day plan complete. 🏔️

---

## Standing Tracking Reference (used at every checkpoint)

| Metric | Where | Cadence |
|---|---|---|
| Clicks / impressions / CTR / position | GSC Performance (export to sheet) | Weekly |
| 25 tracked keyword positions | GSC query filter → rank sheet | Weekly |
| Indexation vs sitemap | GSC Page Indexing | Biweekly |
| Organic inquiries + `whatsapp_click` | GA4 key events (organic segment) | Weekly |
| Referring domains | GSC Links report / free backlink checker | Biweekly |
| Review counts (TripAdvisor / Google / SafariBookings) | Each platform | Biweekly |
| Core Web Vitals | GSC CWV + PageSpeed on 4 templates | Monthly |
| GBP views/actions | GBP dashboard | Biweekly |

**Golden rule for every checkpoint:** impressions lead clicks by 4–8 weeks, clicks lead inquiries by days. Judge weeks 1–6 on impressions and indexation, weeks 6–12 on clicks and CTR, and the quarter on inquiries.
