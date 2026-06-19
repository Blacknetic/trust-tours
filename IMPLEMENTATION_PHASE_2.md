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

## Phase 2A.0 — New-section infrastructure ✅ DONE
- [x] Extended `category` union (`cultural` | `paramotoring`) — Kenya folded into Safaris (only 1)
- [x] `PackageCard.tsx` — BASE_PATH, PLACEHOLDER, CATEGORY_LABEL entries
- [x] `PackagePageView.tsx` — LEXICON entries
- [x] `sitemap.ts` — categoryPath + static routes (/cultural, /paramotoring)
- [x] Routes: `app/cultural/{page,[slug]}`, `app/paramotoring/{page,[slug]}`
- [x] Header NAV — grouped Honeymoon + Cultural + Paramotoring under an **Experiences ▾** dropdown (avoids crowding)

---

## Phase 2A.1 — Safari wave
- [x] 2-Day Tarangire & Ngorongoro — $576 — 301 ✅
- [x] 3-Day Serengeti + Hot-Air Balloon fly-in from Zanzibar — $2,228 (no old URL) ✅
- [x] 6-Day Calving Safari (Tarangire/Ndutu/Ngorongoro) — from $2,350 — *source doc labelled "3-Day" but content is 6-Day* (no old URL) ✅
- [x] 4-Day Private Ndutu Calving Safari — genericized, price-on-request — 301 ✅
- [x] 4-Day Arusha NP Walk + Tarangire/Manyara/Ngorongoro — $2,218 — 301 ✅
- [x] 5-Day Arusha Park + Serengeti + Maasai Culture — $1,955 (no old URL) ✅
- [~] 5-Day Best of Northern — **SKIPPED** (duplicate of live 5-Day Northern Safari)
- [x] 5-Day Ndutu Migration (calving) — from $3,760 — 301 (+ `-december-april` variant) ✅
- [x] 5-Day Luxury Fly-out Safari — from $2,499 (no old URL) ✅
- [x] 6-Day Northern Year-Round — $2,625 — 301 (+ `-2` variant) ✅
- [ ] 6-Day Mara River Crossing — old: `/booking/6-day-safari-to-witness-the-epic-migration-crossing-mara-river-in-tanzania`
- [x] 7-Day Northern Circuit — from $3,210 (no old URL) ✅
- [x] 7-Day Photography & Cultural (Hadzabe/Datoga/Lake Eyasi) — from $3,100 (no old URL) ✅
- [x] 8-Day Great Migration (3/4-star) — from $3,250 — 301 ✅
- [~] 8-Day Mid-Range Customized — **SKIPPED** (near-duplicate of the 8-Day Great Migration)
- [x] 9-Day Northern Tanzania (Wildlife & Culture) — from $3,410 — 301 ✅
- [x] 9-Day Beach, City & Bush (Zanzibar/Dar/Arusha/Maasai Mara) — from $2,890 — 301 ✅
- [x] 10-Day Kenya Safari (Amboseli/Naivasha/Mara) — price on request — folded into Safaris (only 1 Kenya itinerary, so no dedicated section) ✅
- [x] 10-Day Calving Migration (Ndutu) — price on request — 301 ✅
- [x] 10-Day Safari + Zanzibar Adventure (4/5-star) — from $4,890 — 301 ✅ *(this IS the "11-Day Adventure" doc — one page covers both items)*
- [x] 11-Day Bird Photography & Migration — from $4,314 (no old URL) ✅
- [x] 12-Day Kilimanjaro Trek + Safari + Culture + Lake Natron — from $2,750 — 301 ✅
- [ ] 7-Day Northern Tanzania Mid-Range — old: `/7-day-northern-tanzania-midrange-safari-itinerary`
- [ ] ⚠️ 2-Day Zanzibar → Mikumi — $850 — **HOLD**: source doc contradicts itself (day-trip vs overnight); confirm with Ombeni

## Phase 2A.2 — Honeymoon (dedicated `/honeymoon` themed listing; `tags:["honeymoon"]`, detail stays in Safaris/Zanzibar)
- [x] Added `tags` field + built `/honeymoon` listing page + "Honeymoon" nav item + sitemap ✅
- [x] 7-Day Ultimate Honeymoon (Safari + Zanzibar) — price on request — 301 ✅
- [x] 10-Day Honeymoon Migration — price on request — 301 ✅
- [x] 20-Day Tanzania & Zanzibar Honeymoon — from $8,750 — 301 ✅
- [x] 7-Day Zanzibar Honeymoon — price on request (category zanzibar, shows on /honeymoon + /zanzibar) ✅
- [x] 9-Day Honeymoon Northern Tanzania — price on request ✅
- [x] 13-Day Romance Honeymoon (the "12 Days of Romance" doc) — from $5,646 / $6,599 ✅
- [x] Tagged existing romantic trips onto /honeymoon: 4-Day Balloon, 4-Day Zanzibar, 5-Day Zanzibar ✅
- **Honeymoon wave done: 9 trips on /honeymoon (6 dedicated + 3 tagged).**

## Phase 2A.3 — Hike + Safari combos
- [x] 7-Day Kilimanjaro Hike + Northern Circuit + Maasai — $2,210 — 301 ✅
- [~] 7-Day Tanzania Hiking & Safari — **SKIPPED** (same trip as above, no price/URL)

## Phase 2A.4 — Zanzibar wave
- [x] 4-Day Zanzibar Escape — $1,708 ✅
- [ ] 10-Day Zanzibar — $5,999
- [ ] 7-Days Safaris & Zanzibar Holiday — old: `/7-days-safaris-and-zanzibar-holiday`
- [ ] (decide) add premium 5-star 8-Day tier as note on `8-day-zanzibar-tour`? ($3,760–$8,850)

## Phase 2A.5 — Kilimanjaro / Trekking
- [x] Kilimanjaro Day-Trip via Marangu — $385 (trekking; rainforest day hike, no summit) ✅
- [x] 4-Day Mount Meru (Momela) — from $725 ✅
- [x] 5-Day Mount Meru (comfort, Rivertrees lodge nights) — price on request ✅ *("5 DAYS CLIMB MT" doc was Meru, not Kili Marangu*
- [~] 5-Day Marangu (Kili) — no source doc; old `/booking/...marangu...` already 301s to `/kilimanjaro` via regex (added `umbwe` too)
- [x] Old Kili routes (Machame/Umbwe/Rongai/Lemosho/Marangu) → `/kilimanjaro` via the booking regex ✅
- [~] 10-Day Zanzibar ($5,999) — **SKIPPED**: same doc as the `10-day-safari-zanzibar-adventure` combo already live

## Phase 2A.5b — Ol Doinyo Lengai ("Mountain of God") — NEW, added Jun 2026
Active volcano + Lake Natron treks. Source: `_source/oldonyo-lengai/` (extracted to `_source/extracted/`).
**Consideration:** these are mountain treks → category `trekking`, surfaced under the existing **Trekking** dropdown next to Kilimanjaro & Mount Meru (consistent with "Kili & Meru under Trekking"). With Lengai added, the dropdown holds 3+ treks → **build a `/trekking` listing page** rather than keep adding fixed dropdown links. The 5-day one is more safari than climb — likely category `safari` (or trekking with a safari note). No old `/booking/` URLs found for these (newer than the crawled sitemap) → no redirects unless Ombeni supplies them.
- [x] 2-Day Ol Doinyo Lengai Climb — from $450 (trekking) ✅
- [x] 3-Day Ol Doinyo Lengai Volcano Hike — from $650 (trekking; `(1)` dup ignored) ✅
- [x] 5-Day Safari & Ol Doinyo Lengai — from $1,450 (safari category) ✅
- [x] 7-Day Ol Doinyo Lengai Expedition — from $1,250 (trekking) ✅
- [x] Built `/trekking` listing page (+ sitemap) and added Lengai + "All treks" to the Trekking dropdown ✅
- [x] Built dedicated `/ol-doinyo-lengai` listing (all 4 Lengai trips, shortest-first) — nav "Ol Doinyo Lengai" now opens this instead of a single itinerary ✅ *(the `(1)` file is a confirmed exact duplicate, so 4 unique, not 5)*
- [ ] (remaining trekking) 4-Day Mount Meru, Kilimanjaro day-trip, 5-Day Marangu — still queued in §2A.5

## Phase 2A.6 — New sections ✅ DONE
- [~] **Kenya:** only 1 itinerary → folded into Safaris (dedicated page only if 2+).
- [x] **Cultural** (`/cultural`): 5-Day Cultural Tour + 8-Day Cultural Heritage Tour (price on request) — `/booking/cultural-tours` 301s to `/cultural` ✅
- [x] **Paramotoring** (`/paramotoring`): 3-Day (Arusha & Kilimanjaro) + 12-Day Paramotoring Safari (price on request) ✅
- Excluded the competitor "Kilimanjaro Wings" content embedded in the cultural doc.

---

## Phase 2A.7 — Redirects sweep (after pages exist)
- [ ] Every new package has its `oldUrl` set + an exact 301 in `next.config.ts` (before catch-all)
- [ ] Old Kili routes with no 1:1 page → `/kilimanjaro`
- [ ] `/booking/7-nights-8-days-zanzibar-itinerary-october-2026` → `/zanzibar/8-day-zanzibar-tour`
- [ ] Verify catch-all `/booking/:slug*` → `/safaris` still covers the remainder
- [ ] Confirm no redirect `source` collides with a real page (regression check)

---

## Phase 2B — Informational / guides content (IN PROGRESS)
- [x] Structure built: `/guides` section + `/guides/[slug]` + `GuideView` + `data/guides.ts` (topic, sections, faqs, relatedPackages) + **Guides** nav item + sitemap
- [x] How long to climb Kilimanjaro ✅
- [x] Best time to visit Tanzania ✅
- [x] Tanzania visa & passport requirements ✅
- [x] Altitude sickness on Kilimanjaro ✅
- [x] Vaccinations & health for Tanzania ✅
- [x] Tanzania safari packing list ✅
- [ ] Pre-Kilimanjaro medical check-up
- [ ] Kilimanjaro food plan + travel insurance
- [ ] FAQs — Kilimanjaro & safari (consolidate the 3 FAQ docs)
- [ ] What to expect on your first safari · international flights · logistics
- [ ] Refund & cancellation policy · volunteering · accommodations overview · discover Tanzania
- [ ] **Exclude:** the "Kilimanjaro Wings Expedition" docs (competitor content)

---

## Verification (each wave)
- [ ] `npx next build` green; new slugs appear under the right section in route output
- [ ] Spot-check a new detail page renders (hero, itinerary, included/excluded, FAQ)
- [ ] Old URL 301s to the new page (not the catch-all)
- [ ] No horizontal scroll / layout regressions on mobile (see mobile-responsiveness plan)
