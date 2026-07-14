# Keyword Architecture — how to use it

Companion to `keyword-architecture.csv` (127 keywords). This is the map every content day (Weeks 3–13 of the SEO plan) executes against. Import the CSV into Google Sheets: **File → Import → Upload → keyword-architecture.csv → Insert new sheet**.

## Columns

| Column | Meaning |
|---|---|
| `keyword` | The target search phrase |
| `intent` | `informational` (learning) · `commercial` (comparing/investigating) · `transactional` (ready to book) · `brand` · `local` |
| `cluster` | Topic group — one pillar + supporting pages per cluster |
| `target_url` | The **one** page that should rank for this keyword (one keyword → one page) |
| `page_status` | `existing`, `existing (upgrade Dxx)`, or `new (Dxx)` — the plan day that touches it |
| `gsc_impressions` | Real impressions from Search Console where known (proof of live demand) |
| `priority` | 1 = high (money/high-demand) · 2 = medium · 3 = long-tail/fill |
| `market_notes` | Cannibalization flags, UK/US phrasing, positioning notes |

## Clusters (pillar → supporting)

1. **Kilimanjaro Routes** — pillar `/guides/best-kilimanjaro-route`; supporting = per-route guides + tour pages
2. **Kilimanjaro Planning** — cost, training, best-time, beginners, group vs private
3. **Trekking** — Mount Meru (**96 real impressions** — validated demand), Ol Doinyo Lengai
4. **Safari Planning** — cost, migration timing, parks, Kenya comparison, family
5. **Combos & Itineraries** — pillar `/guides/combine-kilimanjaro-safari-zanzibar`; itinerary + safari-from-zanzibar
6. **Zanzibar** — best-time (**49 + 41 real impressions**), beaches, holidays
7. **Trust & Direct-Booking** — the anti-OTA cluster; licensing, safety, book-direct
8. **Practical & Logistics** — visa, health, packing, park fees
9. **Cultural & Niche** — cultural tours, paramotoring
10. **Brand & Local** — protect "trust tours"; GBP owns the "near me" queries

## Rules baked in

- **One keyword → one page.** Where two pages could target the same term (e.g. `best-time-to-visit-tanzania` vs `when-to-visit-tanzania-month-by-month`), the notes flag it — resolved on Day 45.
- **One English site.** UK phrasing ("trekking", "holiday") and US phrasing ("hike", "vacation") are captured as secondary terms *within* a page, never as separate country pages. (No "Safari from USA/UK" doorway pages.)
- **Priority is demand-led, not guesswork.** Rows with real `gsc_impressions` (climb mount kilimanjaro 105, climb mount meru 96, best time to visit zanzibar 49/41, climb kilimanjaro guide 40) are priority 1 — Google already shows us for these; we just rank too low.

## Next steps in the plan
- **Day 9** — map all 54 tour pages to one primary keyword each (transactional column), resolve cannibalization among competing packages.
- **Day 10** — audit all 48 guides against GSC (keep / upgrade / merge), producing the ranked upgrade queue that drives Weeks 3–8.
- **Day 11** — finalize the new-page backlog (rows marked `new`).
