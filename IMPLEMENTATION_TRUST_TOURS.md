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
- [ ] `app/kilimanjaro/[slug]/page.tsx` — SSG with `generateStaticParams()` from `packages.ts`
- [ ] `generateMetadata()` — title ≤60 chars, description ≤155 chars, OpenGraph
- [ ] Hero section — `next/image priority`, headline, price block ("From $X per person"), priceNote
- [ ] Highlights section — icon list, 4–6 bullets from `package.highlights`
- [ ] Itinerary timeline — `components/ItineraryTimeline.tsx`, reads `package.itinerary[]`

### 2.2 Signature Animation
- [ ] `components/ElevationJourney.tsx` — SVG elevation profile, scroll-driven marker from gate to Uhuru Peak, current day camp + altitude label
- [ ] Safari packages reuse as flat route timeline with moving marker
- [ ] Respects `prefers-reduced-motion`

### 2.3 Supporting Sections
- [ ] Included/Excluded lists (`package.included`, `package.excluded`)
- [ ] `components/FAQAccordion.tsx` — accordion from `package.faqs[]`, h3 questions
- [ ] Review snippets (`package.reviewSnippets[]`)
- [ ] Sticky bottom CTA bar (mobile only) — price + "Plan on WhatsApp" button

### 2.4 SEO / Schema
- [ ] `components/TripJsonLd.tsx` — TouristTrip + Product/Offer + FAQPage + BreadcrumbList, all data from `packages.ts`
- [ ] Validate with Google Rich Results Test

### 2.5 QA
- [ ] Verify layout at 375px width
- [ ] Run Lighthouse mobile — target Performance ≥90, SEO 100
- [ ] Keyboard focus states visible on all interactive elements

---

## Phase 3 — Homepage + Listings (Day 3)
Goal: client-facing preview — send preview link after this phase.

### 3.1 Homepage (`app/page.tsx`)
- [ ] Hero — Ken Burns CSS animation (scale 1→1.06, 12s) + 8s gradient shift overlay
- [ ] Top 3 packages — cards from `packages.ts` (Machame, Migration Safari, Meru)
- [ ] Ombeni founder note — photo placeholder + first-person copy
- [ ] How it works — 3-step section
- [ ] Review strip — from `reviewSnippets`
- [ ] CTA band — "Plan your trip on WhatsApp"

### 3.2 Listing Pages
- [ ] `app/kilimanjaro/page.tsx` — all kilimanjaro packages as cards from `packages.ts`
- [ ] `app/safaris/page.tsx` — all safari packages as cards
- [ ] `components/PackageCard.tsx` — reusable card component (hero image, title, days, price, CTA)

### 3.3 Content
- [ ] Fill 7-Day Machame itinerary in `packages.ts` (already done in brief — confirm accuracy)
- [ ] Fill 2 more flagship itineraries (pull from old site before it goes offline)

### 3.4 Deploy Preview
- [ ] Deploy Vercel preview link → send to client (Ombeni) for first review

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

## Current Phase: 2 — Conversion Unit
**Next action:** Build `/kilimanjaro/[slug]` package page template (Phase 2.1).
