# Checkpoint 2 (Week 4 / Day 28) — 2026-07-26

Second built-in health check, after the Kilimanjaro content sprint shipped. Compares against the Day-1/2 baseline (Jul 9–11) and Checkpoint 1 (Jul 18).

## Metrics

| Metric | Baseline (Jul 9–11) | Checkpoint 1 (Jul 18) | Now (Jul 26) | Read |
|---|---|---|---|---|
| GSC impressions (28d) | ~1,190 | ~3,160 | **~3,940** | ⬆ ~3.3× since start |
| GSC clicks (28d) | 10 | 27 | **30** | ⬆ steady |
| Avg position | 67.8 | 67.9 | **~67.8** | Flat — page 7 |
| GA4 organic-search sessions | ~2 | ~2 | **22** | ⬆ **11× — the signal of the sprint** |
| GA4 key events (leads) | 0 measured | ~forming | **6–7 inquiry_submit, 3–5 WhatsApp** | ⬆ real leads |
| Indexed pages | 152 | 152 | **152** | Stable |
| GBP reviews | 4 | (merge pending) | **59** ✓ | ⬆ merge consolidated |
| GBP profile views | — | — | **377** (Feb–Jul), 281 interactions | Baseline set |

## Cluster-specific signal (the important part)

- The **cost guide** (`how-much-to-climb-kilimanjaro`) jumped to **115 impressions/week** (from 16), with **UK = 83 impressions (+78)** plus Netherlands, Norway, Austria, Denmark. This is the sprint landing in the **real buyer markets**, not the Singapore bot traffic.
- Ranking query set is now cost-cluster heavy and on-target: "how much to climb kilimanjaro", "kilimanjaro climb cost uk", "kilimanjaro costs", "kilimanjaro beklimmen kosten" (Dutch/German), plus "machame route", "climb mount meru", "tour operators in arusha".

## Indexation of new/upgraded pages

| Page | Status |
|---|---|
| `best-kilimanjaro-route` (pillar) | ✅ Indexed |
| `climbing-kilimanjaro-for-beginners` (new) | ✅ Indexed |
| `kilimanjaro-group-vs-private` (new) | ✅ Live/indexed |
| `best-time-to-climb-kilimanjaro` (upgrade) | ⏳ Crawled, not yet indexed — Request Indexing submitted; old version still cached (last crawl Jul 12) |

3 of 4 indexed within days of publish (IndexNow + request). The 4th is an *upgrade* Google last crawled pre-change; the request + fresh lastmod will push the new version through. **Not a concern.**

## Data-quality notes (no bluff)

- **GA4 total users (~402) is inflated** by ~113 Singapore bot sessions at ~2s engagement. Judge on real markets: US 133, Tanzania 36, Sweden, Ireland, UK, India.
- **Money-page CTR (Day-12 rewrites): insufficient data** to judge — total clicks (30) are too few to isolate per-page CTR reliably. Defer to Checkpoint 3. Do **not** iterate titles yet.

## Decision points (from the plan)

1. **New guides not indexed after 7 days → strengthen homepage internal links.** → 3/4 indexed fast, 1 pending upgrade. **Not triggered.** *Optional proactive move:* feature the routes pillar on the homepage (currently features climbing-kilimanjaro-guide, tanzania-safari-guide, best-time-to-visit-tanzania) — a cheap authority boost from the highest-authority page. Homepage change → discuss before acting.
2. **Money-page CTR flat despite position → iterate titles.** → Insufficient data. **Hold.**
3. **Impressions rising → hold course.** → Impressions rising strongly in target markets. ✅ **HOLD COURSE.**

## Verdict: GREEN — proceed to the Trust / Direct-Booking cluster (Weeks 5–6, Day 29+)

The content engine is working: impressions ~3.3× since start, organic search up 11×, real leads flowing, new pages indexing same-week, and GBP consolidated to 59 reviews. The same playbook now repeats for the trust cluster (why book direct, licensing, pricing transparency, FAQ page, review schema).

## Carried forward (owner actions, not code)

- **Review-velocity system** — highest-leverage unstarted task; Ombeni asking every trip. Template offered.
- **GBP merge/rename** — still processing; let it finish, don't re-edit. Then confirm clean name shows.
- **GBP profile completion** — booking link (point at `/contact` not the homepage), keep "Private tours" service as "No price" (prices vary), skip Activities for now (booking-integration feature, not needed).
- **Weekly GBP post** — 2 banked (routes, cost); 3 more queued from live guides.
