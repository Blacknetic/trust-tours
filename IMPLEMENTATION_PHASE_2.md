# Phase 2 — Itinerary Migration, New Sections & Redirects

**Goal:** Get **most/all** of Ombeni's itineraries onto the site (full, flagship-quality
pages) so it's as informational as possible, preserve the old site's Google authority
via **exact 301 redirects**, then add his informational/blog content.

**Decisions (locked with client/dev):**
- Add **all unique** itineraries, in **waves by category**, **full treatment** (not stubs).
- Misfit trips get **new nav sections**: **Kenya**, **Cultural Tours**, **Paramotoring/Adventure**.
  (Existing four: kilimanjaro · safari · trekking · zanzibar.)
- Honeymoon / photography / migration are **themes**, not categories → fold into safari/zanzibar.
- **Redirects:** crawl the OLD live WordPress site for `/booking/...` URLs and 301 each to its
  new page, placed **before** the `/booking/:slug*` catch-all in `next.config.ts` (no trailing slash).
- Informational/blog content is **Phase 2B**, after the itineraries.

**Sources & tooling:**
- Word/PDF docs: `_source/new-folder/` (git-ignored). Plain-text extracts: `_source/extracted/*.txt`.
- Old URLs harvested from `https://trusttourstz.com/wp-sitemap-posts-to_book-1.xml` (+ `-post-1.xml`),
  saved in `_source/old-urls-to_book.txt`.

**Per-itinerary pipeline (repeat for each):**
1. Read the extracted doc → 2. dedup vs. live → 3. write full `packages.ts` entry
→ 4. set `oldUrl` + add exact 301 in `next.config.ts` → 5. `npx next build` to verify.

---

## Phase 2A.0 — New-section infrastructure (needed before Kenya/Cultural/Paramotoring trips)
- [ ] Extend `category` union in `data/packages.ts` (`kenya` | `cultural` | `paramotoring`)
- [ ] `components/PackageCard.tsx` — add `BASE_PATH`, `PLACEHOLDER`, `CATEGORY_LABEL` entries
- [ ] `components/PackagePageView.tsx` — add `LEXICON` entries (noun/crumb/basePath/verb…)
- [ ] `app/sitemap.ts` — add `categoryPath` entries + static listing routes
- [ ] Create routes: `app/kenya/{page,[slug]/page}.tsx`, `app/cultural/...`, `app/paramotoring/...`
- [ ] `components/Header.tsx` NAV — add the new sections (watch desktop nav crowding)
- [ ] `components/TripFinder.tsx` / `app/search/page.tsx` — add the new category labels

---

## Phase 2A.1 — Safari wave
- [x] 2-Day Tarangire & Ngorongoro — $576 — 301 ✅
- [ ] 3-Day Serengeti + Hot-Air Balloon from Zanzibar — $2,228
- [ ] 3-Day Calving-Season Migration (Jan–Apr, Ndutu) — $3,250
- [x] 4-Day Private Ndutu Calving Safari — genericized, price-on-request — 301 ✅
- [x] 4-Day Arusha NP Walk + Tarangire/Manyara/Ngorongoro — $2,218 — 301 ✅
- [x] 5-Day Arusha Park + Serengeti + Maasai Culture — $1,955 (no old URL) ✅
- [~] 5-Day Best of Northern — **SKIPPED** (duplicate of live 5-Day Northern Safari)
- [x] 5-Day Ndutu Migration (calving) — from $3,760 — 301 (+ `-december-april` variant) ✅
- [x] 5-Day Luxury Fly-out Safari — from $2,499 (no old URL) ✅
- [x] 6-Day Northern Year-Round — $2,625 — 301 (+ `-2` variant) ✅
- [ ] 6-Day Mara River Crossing — old: `/booking/6-day-safari-to-witness-the-epic-migration-crossing-mara-river-in-tanzania`
- [ ] 7-Day Northern Circuit Camp — $3,210 / $4,106
- [ ] 7-Day Great Migration, Photography & Cultural — $3,450
- [x] 8-Day Great Migration (3/4-star) — from $3,250 — 301 ✅
- [ ] 8-Day Mid-Range Customized — $3,899
- [ ] 9-Day Wildlife & Culture / Northern Tanzania — $4,106 — old: `/booking/9-day-wildlife-and-culture-safari-in-tanzania`
- [x] 9-Day Beach, City & Bush (Zanzibar/Dar/Arusha/Maasai Mara) — from $2,890 — 301 ✅
- [x] 10-Day Kenya Safari (Amboseli/Naivasha/Mara) — price on request — folded into Safaris (only 1 Kenya itinerary, so no dedicated section) ✅
- [ ] 10-Day Serengeti Migration (calving focus) — old: `/booking/10-day-serengeti-great-migration-safari-itinerary-with-trust-tours-and-safaris-calving-season-focus-december-to-march`
- [ ] 10-Day incl. Zanzibar/Tarangire/Ngorongoro — $5,999
- [ ] 11-Day Adventure (5/4-star) — old: `/booking/11-day-adventure-is-perfect-...-stay-at-5-star-or-4-star-hotels-and-lodges`
- [ ] 11-Day Bird Photography & Migration — $5,939
- [ ] 12-Day Migration Crossing (customized) — $2,750 — old: `/booking/12-day-itinerary-customized-tracking-the-great-migration-crossing-with-trust-tours-and-safaris`
- [ ] 7-Day Northern Tanzania Mid-Range — old: `/7-day-northern-tanzania-midrange-safari-itinerary`
- [ ] ⚠️ 2-Day Zanzibar → Mikumi — $850 — **HOLD**: source doc contradicts itself (day-trip vs overnight); confirm with Ombeni

## Phase 2A.2 — Honeymoon trips (fold into safari/zanzibar)
- [ ] 7-Day Ultimate Honeymoon (Tanzania) — old: `/booking/7-days-in-paradise-with-trust-tours-and-safaris-company-your-ultimate-honeymoon-haven`
- [ ] 7-Day Mid-Range Honeymoon (Zanzibar)
- [ ] 9-Day Honeymoon Northern Tanzania
- [ ] 10-Day / 9-Night Honeymoon Migration — old: `/booking/tanzania-honeymoon-safari-tracking-the-great-migration`
- [ ] 12 Days of Romance Honeymoon — $6,599
- [ ] 20-Day Tanzania & Zanzibar Honeymoon — $8,750 — old: `/booking/20-day-tanzania-zanzibar-honeymoon-safari-adventure`

## Phase 2A.3 — Hike + Safari combos
- [ ] 7-Day Marangu Hike + Northern Circuit Safari + Maasai — $2,210 — old: `/booking/7-day-safari-adventure-marangu-route-hike-northern-circuit-safari-maasai-cultural-experience-northern-circuit`
- [ ] 7-Day Tanzania Hiking & Safari

## Phase 2A.4 — Zanzibar wave
- [x] 4-Day Zanzibar Escape — $1,708 ✅
- [ ] 10-Day Zanzibar — $5,999
- [ ] 7-Days Safaris & Zanzibar Holiday — old: `/7-days-safaris-and-zanzibar-holiday`
- [ ] (decide) add premium 5-star 8-Day tier as note on `8-day-zanzibar-tour`? ($3,760–$8,850)

## Phase 2A.5 — Kilimanjaro / Trekking
- [ ] Kilimanjaro Day-Trip via Marangu — $385
- [ ] 5-Day Marangu (Coca-Cola Route) climb — old: `/booking/5-days-the-marangu-route-also-known-as-the-coca-cola-route`
- [ ] 4-Day Mount Meru (Momela) — $725 / $765 (trekking)
- [ ] (decide) old Kili routes not yet on site — 6-Day Machame, 6-Day Umbwe, 6-Day Rongai, 7-Day Lemosho — add or redirect to `/kilimanjaro`?

## Phase 2A.6 — New sections (after 2A.0 infra)
- [~] **Kenya:** only 1 itinerary → folded into Safaris (per client: dedicated page only if 2+). Revisit if more Kenya trips arrive.
- [ ] **Cultural:** Tanzania Cultural Tour — $1,800 — old: `/booking/cultural-tours` (dedupe the two cultural docs)
- [ ] **Paramotoring:** 3-Day Paramotoring (Arusha & Kilimanjaro)
- [ ] **Paramotoring:** 12-Day Paramotoring Safari & Discovery

---

## Phase 2A.7 — Redirects sweep (after pages exist)
- [ ] Every new package has its `oldUrl` set + an exact 301 in `next.config.ts` (before catch-all)
- [ ] Old Kili routes with no 1:1 page → `/kilimanjaro`
- [ ] `/booking/7-nights-8-days-zanzibar-itinerary-october-2026` → `/zanzibar/8-day-zanzibar-tour`
- [ ] Verify catch-all `/booking/:slug*` → `/safaris` still covers the remainder
- [ ] Confirm no redirect `source` collides with a real page (regression check)

---

## Phase 2B — Informational / blog content (after itineraries)
- [ ] Decide structure: `/guides` (or `/blog`) section + route + nav entry
- [ ] Visa & passport requirements (multiple docs → consolidate)
- [ ] Essential vaccinations
- [ ] Tanzania safari packing list
- [ ] Best time to visit (June–October)
- [ ] How long to climb Kilimanjaro / altitude sickness / pre-climb medical check
- [ ] Kilimanjaro food plan + travel insurance
- [ ] FAQs — Kilimanjaro & safari (3 docs → consolidate)
- [ ] What to expect on your first safari · international flights · logistics
- [ ] Refund & cancellation policy · volunteering · accommodations overview
- [ ] **Exclude:** the 3 "Kilimanjaro Wings Expedition" docs (competitor content)

---

## Verification (each wave)
- [ ] `npx next build` green; new slugs appear under the right section in route output
- [ ] Spot-check a new detail page renders (hero, itinerary, included/excluded, FAQ)
- [ ] Old URL 301s to the new page (not the catch-all)
- [ ] No horizontal scroll / layout regressions on mobile (see mobile-responsiveness plan)
