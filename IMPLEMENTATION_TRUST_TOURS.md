# Trust Tours & Safaris — Implementation Plan
> WhatsApp: +255 785 938 860 | wa.me/255785938860
> Single source of truth for all trip content: `data/packages.ts`
> Design tokens: `DESIGN.md` | Stack rules: `.cursorrules`

---

## Phase 1 — Foundation (Day 1)
Goal: deployable shell with correct visual identity and routing.

### 1.1 Data & Config
- [x] Create `data/packages.ts` (copy from brief — confirmed prices, `ASK_OMBENI` placeholders intact)
- [x] Update `next.config.ts` — add all redirect rules from README.md
- [ ] Install `@next/third-parties` for GA4 — deferred to Phase 6 (need Measurement ID from Ombeni first)

### 1.2 Global Styles & Fonts
- [x] Rewrite `app/globals.css` — brand CSS variables from DESIGN.md:
  - `--ink`, `--paper`, `--forest`, `--gold`, `--sunset`, `--snow`, `--wa-green`
  - Base body: `background: var(--paper)`, `color: var(--ink)`
  - `prefers-reduced-motion` block disabling all animations
  - Gold `:focus-visible` ring for keyboard accessibility
- [x] Update `app/layout.tsx` — swap Geist for Bricolage Grotesque (600/800) + Albert Sans (400/500/700) via `next/font/google`

### 1.3 Core Layout Components
- [x] `components/Header.tsx` — logo, nav links (Kilimanjaro / Safaris / Mount Meru / About / Contact), mobile hamburger with Framer Motion, active link highlighting, WhatsApp CTA
- [x] `components/Footer.tsx` — contact info, TALA license placeholder, Kilimanjaro + Safari quick links, copyright
- [x] `components/WhatsAppButton.tsx` — floating button, page-aware prefilled message, GA4 event `whatsapp_click { page_slug }`

### 1.4 Root Layout Wiring
- [x] Wire `<Header/>` + `<Footer/>` + `<WhatsAppButton/>` into `app/layout.tsx`
- [x] Set root `generateMetadata()` defaults (title template, OG defaults)
- [ ] GA4 via `@next/third-parties` — deferred to Phase 6

### 1.5 Deploy
- [ ] Push to GitHub, connect Vercel, confirm CI green
- [ ] Verify 5 old URLs redirect correctly in production

---

## Phase 2 — Conversion Unit (Day 2)
Goal: the `/kilimanjaro/[slug]` package page — the highest-value page on the site.

### 2.1 Package Page Template
- [x] `app/kilimanjaro/[slug]/page.tsx` — SSG with `generateStaticParams()` from `packages.ts` (build verified: 4 routes prerendered)
- [x] `generateMetadata()` — title ≤60 chars, description ≤155 chars, OpenGraph
- [x] Hero section — headline, breadcrumb, price block ("From $X per person"), priceNote (gradient placeholder; swap to `next/image priority` when hero photos arrive)
- [x] Highlights section — check list from `package.highlights`
- [x] Itinerary timeline — folded into `ElevationJourney.tsx` (day list + elevation panel in one component, no separate ItineraryTimeline)

### 2.2 Signature Animation
- [x] `components/ElevationJourney.tsx` — SVG elevation profile, scroll-driven line draw + marker from gate to Uhuru Peak, current day camp + altitude readout
- [ ] Safari packages reuse as flat route timeline with moving marker — do in Phase 4 with `/safaris/[slug]`
- [x] Respects `prefers-reduced-motion` (`useReducedMotion` — line fully drawn, marker jumps without spring)

### 2.3 Supporting Sections
- [x] Included/Excluded lists (`package.included`, `package.excluded`)
- [x] `components/FAQAccordion.tsx` — accordion from `package.faqs[]`, h3 questions, aria-expanded
- [x] Review snippets (`package.reviewSnippets[]`) — 5-star blockquote cards
- [x] Sticky bottom CTA bar (mobile only) — `components/MobileCTABar.tsx`, price + "Plan on WhatsApp"

### 2.4 SEO / Schema
- [x] `components/TripJsonLd.tsx` — TouristTrip + Product/Offer + FAQPage + BreadcrumbList from `packages.ts` (Product/Offer skipped when price is 0/ASK_OMBENI)
- [ ] Validate with Google Rich Results Test — needs public URL, do after first Vercel deploy

### 2.5 QA (automated via `qa-phase2.mjs` — Playwright + system Edge)
- [x] Verify layout at 375px width — scrollWidth exactly 375, no overflow
- [x] FAQ accordion opens on tap; JSON-LD parses with all 4 types; exactly one h1
- [x] Keyboard focus states — gold 2px outline confirmed on Tab
- [ ] Lighthouse mobile ≥90 perf / 100 SEO — run against production deploy (dev-mode scores are meaningless), do in Phase 5/6

---

## Phase 3 — Homepage + Listings (Day 3)
Goal: client-facing preview — send preview link after this phase.

### 3.1 Homepage (`app/page.tsx`)
- [x] Hero — Ken Burns CSS animation (scale 1→1.06, 12s) + 8s gradient shift overlay (`.hero-ken-burns` / `.hero-gradient-shift` in globals.css; gradient placeholder until hero photo arrives)
- [x] Top 3 packages — cards from `packages.ts` (Machame, Migration Safari, Meru)
- [x] Ombeni founder note — photo placeholder ("O" monogram) + first-person quote
- [x] How it works — 3-step section
- [x] Review strip — Robin V quote from `reviewSnippets`
- [x] CTA band — extracted as reusable `components/CTABand.tsx`

### 3.2 Listing Pages
- [x] `app/kilimanjaro/page.tsx` — 4 route cards + "which route?" CTA band
- [x] `app/safaris/page.tsx` — safari + zanzibar cards + custom-safari CTA band
- [x] `components/PackageCard.tsx` — category gradient placeholder, days badge, price, line-clamped summary, hover shadow

### 3.2b Shared template (pulled forward from Phase 4 to avoid 404s from homepage cards)
- [x] Extracted `components/PackagePageView.tsx` with category lexicon (Climb/Safari/Trek wording)
- [x] `app/safaris/[slug]/page.tsx` + `app/trekking/[slug]/page.tsx` — live, SSG verified
- [x] Fixed Mount Meru links + redirect to real slug `/trekking/4-day-mount-meru-trek`
- [x] Removed invented "since 2015" claim from Footer (never invent facts)

### 3.3 Content
- [x] 7-Day Machame itinerary in `packages.ts` — full (flag accuracy check for Ombeni)
- [ ] Fill 2 more flagship itineraries — BLOCKED on old-site facts; never invent. Folded into Phase 4.1.

### 3.4 Deploy Preview
- [ ] Deploy Vercel preview link → send to client (Ombeni) for first review — needs user to connect GitHub repo to Vercel

### 3.5 QA (automated via `qa-phase3.mjs`)
- [x] All 7 package URLs return 200 with correct h1
- [x] No horizontal overflow at 375px on /, /kilimanjaro, /safaris, Meru page
- [x] Production build green — 13 pages prerendered

---

## Phase 4 — Content Rollout (Day 4)
Goal: all packages have real itineraries; supporting pages live.

### 4.1 Remaining Package Pages
- **UNBLOCKED 2026-06-15:** Ombeni sent 49 itinerary PDFs (now in `_source/itineraries/`, gitignored — contain client names + pricing, never deploy). Extracted to text via PyMuPDF.
- [x] Lemosho 8-day — full itinerary + price ($2,180 midrange)
- [x] Marangu — **slug renamed `5-day` → `6-day-marangu-route`** (Ombeni only sells 6-day); full itinerary + price ($1,580/5+pax, $1,690/1–4). Footer link + Kili listing metadata updated.
- [x] Migration Safari 7-day — full itinerary + price ($2,200 budget / $2,800 mid-range)
- [x] Safari+Zanzibar — **stub repurposed `10-day-safari-zanzibar` → `7-day-tanzania-zanzibar`** (no 10-day exists; 7-day is the real product, $2,879). Footer + `/zanzibar` redirect updated.
- [x] NEW: `5-day-zanzibar-escape` (zanzibar category, $1,708 mid / $2,804 luxury) — first standalone Zanzibar product.
- [ ] **Northern Circuit (9-day climb) + Mount Meru (4-day)** — STILL BLOCKED: no source PDF in the pack (the "Northern Circuit" PDF is a 7-day *safari*, not the climb; no Meru file at all). Left as "coming soon". Chase Ombeni for these two specifically.
- [x] `app/safaris/[slug]/page.tsx` — done early in Phase 3.2b
- [x] `app/trekking/[slug]/page.tsx` — done early in Phase 3.2b

**Flags for Ombeni (don't guess):**
- 7-day Machame price: code was $2,380, his official PDF says **$2,180** — changed to $2,180 with `CONFIRM` comment in `packages.ts`. Verify.
- Office location: site says **Moshi**, his PDF letterhead says **Arusha (P.O. Box varies: 6111 / 14954 / 14319)**. Contact page still says Moshi — confirm which is the public office.
- Summit success rate still `ASK_OMBENI` (no number in any PDF).
- ~40 more itineraries available for a wider catalog (see Wave 2 candidates below).
- [x] `app/safaris/[slug]/page.tsx` — done early in Phase 3.2b
- [x] `app/trekking/[slug]/page.tsx` — done early in Phase 3.2b

### 4.2 Supporting Pages
- [x] `app/about/page.tsx` — founder section (portrait placeholder), how-we-work values, TALA TODO, team photo grid TODO
- [x] `app/contact/page.tsx` — WhatsApp panel, email + office cards, inquiry form
- [x] `app/reviews/page.tsx` — auto-aggregates `reviewSnippets` from all packages with trip links; grows as reviews are added to packages.ts
- [x] Footer: added /reviews link

### 4.3 Inquiry Form
- [x] `components/InquiryForm.tsx` — name, email, travel month, group size, message; success state; error state falls back to WhatsApp link
- [x] `app/api/inquiry/route.ts` — validation + Resend email (fetch, no SDK); returns honest 503 until `RESEND_API_KEY` + `INQUIRY_TO_EMAIL` env vars are set
- [x] Honeypot field — bots get fake 200, humans never see it
- [x] QA: probed honeypot (200), missing fields (400), bad email (400), unconfigured send (503 → WhatsApp fallback shown)

### 4.4 Images — BLOCKED: no photos from client yet
- [ ] Rename all client photos: descriptive filenames, convert to `.webp`
- [ ] Place in `public/images/` matching paths in `packages.ts`
- [ ] Audit all `next/image` alt text

---

## Phase 5 — Polish & Animations (Day 5)

- [x] Scroll reveal animations — `components/Reveal.tsx` (IntersectionObserver, fade-up 16px / 0.5s, stagger via `delay`, fires once). Applied to homepage cards, how-it-works steps, review. No-JS safe (`.reveal` class only added on mount) + reduced-motion safe (override in globals.css). Also added `h-full` to PackageCard for equal-height grids.
- [x] `prefers-reduced-motion` audit — global block disables all animation/transition; `.reveal` forced visible under reduced motion (content never hidden).
- [x] Keyboard focus audit — global gold `:focus-visible` ring (2px, offset 3px) on all interactive elements; verified present.
- [ ] ElevationJourney final pass — currently functional; smooth-scroll-sync polish deferred (not blocking).
- [ ] Stat counters — BLOCKED: no real stats yet (summit success rate is `ASK_OMBENI`). Add once Ombeni provides numbers.
- [ ] Real-device mobile QA at 375px (Android) — needs a physical device; automated 375px QA passes (`qa-content.mjs`).
- [ ] Fix any Lighthouse regressions — needs production deploy (dev/local scores are meaningless).

---

## Phase 6 — SEO / AEO Hardening (Day 6)

- [x] `generateMetadata()` / metadata on every route — titles, descriptions, OG confirmed; added `metadataBase` (https://trusttourstz.com) + per-route `alternates.canonical` on all pages and the 3 `[slug]` templates; `twitter: summary_large_image`.
- [x] `app/opengraph-image.tsx` — branded dynamic OG (1200×630) via `next/og`; inherited site-wide. Verified `image/png` 200.
- [x] `app/sitemap.ts` — auto-generated from `packages.ts` (18 URLs: 6 static + 12 packages; coming-soon stubs get lower priority).
- [x] `app/robots.ts` — allow all, disallow `/api/`, points to sitemap, sets host.
- [ ] Validate JSON-LD with Rich Results Test — needs public URL (after Vercel deploy).
- [ ] Guide article 1: `app/blog/kilimanjaro-routes-compared/page.tsx` — not started (content build).
- [ ] Guide article 2: `app/blog/tanzania-safari-cost/page.tsx` — not started (content build).
- [ ] Google Search Console verified + sitemap submitted — needs deploy + user.
- [ ] GA4 measurement ID confirmed and live — BLOCKED on Ombeni's Measurement ID.

---

## Phase 7 — Launch (Day 7)

- [ ] Point domain `trusttourstz.com` to Vercel (keep old host alive until DNS propagates)
- [ ] Submit sitemap in Search Console
- [ ] Hand-test 10 old URLs → confirm all redirect correctly
- [ ] Test WhatsApp button + inquiry form on a real phone
- [ ] Test GA4 events firing: `whatsapp_click` events visible in DebugView
- [ ] Confirm JSON-LD passes Rich Results Test on live domain
- [ ] Remove placeholder `TODO_*` values — confirm all real data from Ombeni
- [ ] Monitor Search Console → Pages → 404s daily for 2 weeks post-launch

---

## Outstanding Data (chase in parallel — don't block)

| Item | Status |
|------|--------|
| WhatsApp number | ✅ +255 785 938 860 |
| Package prices (all marked `ASK_OMBENI`) | ⏳ Pending |
| Real summit success rate | ⏳ Pending (`ASK_OMBENI`) |
| TALA license number | ⏳ Pending |
| Logo file | ⏳ Pending |
| GA4 Measurement ID | ⏳ Pending |
| Ombeni portrait photo | ⏳ Pending |
| Team / vehicle photos | ⏳ Pending |
| Safari / summit hero images | ⏳ Pending |
| Email service for inquiry form (`RESEND_API_KEY` + `INQUIRY_TO_EMAIL` env vars) | ⏳ Pending |
| Confirm old WordPress URL slugs (`CONFIRM` placeholders) | ⏳ Pending |
| Permission to use Ombeni's name & photo | ⏳ Pending |

---

## Current Phase: 4 content rollout (2026-06-15 — Wave 1 + Wave 2 done) → 5 — Polish
**Catalog now (12 products):**
- Kilimanjaro: Machame 7d ($2,180), Lemosho 8d ($2,180), Marangu 6d ($1,580), Northern Circuit 9d (coming soon)
- Safari: Migration 7d ($2,200), 3-Day ($1,460), 5-Day Northern ($2,125), 4-Day Balloon ($2,218), Tanzania+Zanzibar 7d ($2,879)
- Zanzibar: 5-Day Escape ($1,708), 8-Day Tour ($2,500)
- Trekking: Mount Meru 4d (coming soon)
10 fully fleshed, 2 awaiting source (Northern Circuit climb, Mount Meru).

**Resolved (used the document, per client 2026-06-15):**
- TALA License No. **014216** (Class A Tourism Agent) → Footer + About.
- Office location → **Arusha** (was Moshi) across homepage/Footer/About/Contact/JSON-LD. Trip-specific Moshi hotel mentions kept (accurate).
- Machame price → **$2,180** (his official PDF; was $2,380). Homepage "from" price → $1,580.
- Contact email confirmed.

**Still blocked on client:** Northern Circuit climb + Mount Meru itineraries (NO source PDF), summit success rate (no number anywhere), photos, GA4 ID, email env vars.

### Wave 2 — done this session
Added: 3-Day Safari, 5-Day Northern Safari, 4-Day Balloon Safari, 8-Day Zanzibar.
**Skipped 8-Day Machame** — on-mountain profile is identical to the 7-Day Machame (same 6 camps, same $2,180); would be a confusing duplicate.

### Still available in `_source/` if a wider catalog is wanted
6-Day standalone safari, Marangu Day Trip ($385), 4-Day standalone safari, 11-Day Bird Photography ($4,314), 12-Day Paramotoring ($11,500, exotic), more Zanzibar variants. Skip client one-offs (Annie, Jef, "for Two Adults", fixed-date customs).

### QA (2026-06-15)
- [x] Production build green — all routes prerendered + `/sitemap.xml`, `/robots.txt`, `/opengraph-image`
- [x] `qa-content.mjs` — homepage + all 12 catalog pages: 200, single h1, no overflow at 375px
- [x] `qa-seo.mjs` — sitemap (18 URLs, absolute), robots (sitemap + /api disallow), OG image (image/png 200), homepage canonical + og:image + no-JS-safe reveal content

### Phases 5 & 6 progress (2026-06-15)
- **Phase 6 SEO infra done:** metadataBase + canonicals everywhere, sitemap.ts, robots.ts, branded next/og OG image.
- **Phase 5 polish done:** scroll-reveal (Reveal.tsx, accessible), reduced-motion audit, keyboard focus ring verified.
- **Deferred (need deploy):** JSON-LD Rich Results validation, Lighthouse, Search Console, real-device QA.
- **Deferred (need client):** GA4 Measurement ID, stat counters (real numbers), 2 blog guide articles, photos.

**Next action:** Vercel deploy preview (unlocks Lighthouse + Rich Results + Search Console + GA4), or write the 2 Phase 6 blog guides, or get Ombeni's outstanding data (Meru/NC itineraries, GA4 ID, photos).
