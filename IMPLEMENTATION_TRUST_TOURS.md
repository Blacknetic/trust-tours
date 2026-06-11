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
- [ ] Complete itinerary for: 9-Day Northern Circuit
- [ ] Complete itinerary for: 8-Day Lemosho Route
- [ ] Complete itinerary for: 5-Day Marangu Route
- [ ] Complete itinerary for: 7-Day Great Migration Safari
- [ ] Complete itinerary for: 10-Day Safari + Zanzibar
- [ ] Complete itinerary for: 4-Day Mount Meru Trek
- [ ] `app/safaris/[slug]/page.tsx` — same template as kilimanjaro slug page
- [ ] `app/trekking/[slug]/page.tsx` — same template

### 4.2 Supporting Pages
- [ ] `app/about/page.tsx` — Ombeni's story, TALA license, team, vehicles
- [ ] `app/contact/page.tsx` — WhatsApp CTA, inquiry form, map embed placeholder
- [ ] `app/reviews/page.tsx` — aggregated review snippets

### 4.3 Inquiry Form (Contact + Package Pages)
- [ ] Form fields: name, email, travel month, group size, message
- [ ] `app/api/inquiry/route.ts` — route handler → email (confirm email service with client)
- [ ] Honeypot field for spam protection

### 4.4 Images
- [ ] Rename all client photos: descriptive filenames, convert to `.webp`
- [ ] Place in `public/images/` matching paths in `packages.ts`
- [ ] Audit all `next/image` alt text

---

## Phase 5 — Polish & Animations (Day 5)

- [ ] ElevationJourney final pass — smooth scroll sync, correct altitude data from `itinerary[]`
- [ ] Stat counters — count up on scroll into view (summit success rate, climbers guided, etc.)
- [ ] Scroll reveal animations — fade-up 16px, 0.5s ease-out, stagger 0.08s, `viewport={{ once: true }}`
- [ ] `prefers-reduced-motion` full audit — all animations disabled, content still visible
- [ ] Keyboard focus audit — every link, button, accordion item, form field
- [ ] Real-device mobile QA at 375px (Android preferred)
- [ ] Fix any Lighthouse regressions from Days 3–4

---

## Phase 6 — SEO / AEO Hardening (Day 6)

- [ ] `generateMetadata()` on every route — title, description, OG confirmed
- [ ] `app/opengraph-image.tsx` — dynamic OG images via `next/og`
- [ ] `app/sitemap.ts` — auto-generated from `packages.ts` slugs
- [ ] `app/robots.ts`
- [ ] Validate JSON-LD: [search.google.com/test/rich-results](https://search.google.com/test/rich-results) for each package page
- [ ] Guide article 1: `app/blog/kilimanjaro-routes-compared/page.tsx`
- [ ] Guide article 2: `app/blog/tanzania-safari-cost/page.tsx`
- [ ] Google Search Console verified + sitemap submitted
- [ ] GA4 measurement ID confirmed and live

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
| Email service for inquiry form | ⏳ Pending |
| Confirm old WordPress URL slugs (`CONFIRM` placeholders) | ⏳ Pending |
| Permission to use Ombeni's name & photo | ⏳ Pending |

---

## Current Phase: 3 complete (except deploy) → 4 — Content Rollout
**Next action:** Either (a) deploy preview to Vercel — needs GitHub push + Vercel connect, or (b) continue to Phase 4: supporting pages (/about, /contact, /reviews), inquiry form, remaining itineraries (needs old-site facts).
