# Mobile Responsiveness — Implementation Plan

**Goal:** Make the entire Trust Tours & Safaris site render and behave correctly across
all screen sizes. The site already has a partial mobile foundation (hamburger nav,
mobile CTA bar, ~99 breakpoint utilities) — this is an **audit-and-fix pass**, not a
from-scratch build.

**Decisions (agreed with client/dev):**
- Approach: **full audit + fix**
- Targets: **all breakpoints weighted equally**
- Verification: **Playwright** visual screenshots at each width
- Audit harness: **throwaway / gitignored** (`scripts/shots.mjs`, `.audit/`)
- Structural fixes: **applied inline**, reported in summary afterward

**Breakpoints under test:** 360 · 390 · 768 · 1024 · 1280 px

---

## Phase 0 — Tooling & capture
- [x] Add `.audit/` + `scripts/shots.mjs` to `.gitignore`
- [x] Write Playwright screenshot harness (`scripts/shots.mjs`)
- [x] Install Playwright Chromium
- [ ] Capture baseline screenshots of all routes × all breakpoints
- [ ] Review screenshots and compile the defect list (below)

---

## Routes to audit
- [ ] `/` — Homepage
- [ ] `/kilimanjaro` — Kilimanjaro list
- [ ] `/kilimanjaro/[slug]` — Kilimanjaro package detail
- [ ] `/safaris` — Safaris list
- [ ] `/safaris/[slug]` — Safari package detail
- [ ] `/safaris/[slug]` — Zanzibar package detail (same template)
- [ ] `/trekking/[slug]` — Mount Meru trek detail
- [ ] `/about`
- [ ] `/contact`
- [ ] `/reviews`
- [ ] `/search`

## Shared components to audit
- [ ] `Header` (nav + hamburger + logo wordmark)
- [ ] `Footer`
- [ ] `PackageCard` (grid item)
- [ ] `PackagePageView` (detail layout shell)
- [ ] `BookingCard` (desktop sidebar)
- [ ] `MobileCTABar` (mobile sticky bar)
- [ ] `InquiryForm`
- [ ] `TripFinder`
- [ ] `KilimanjaroFilter`
- [ ] `ElevationJourney`
- [ ] `WhyTrustUs`
- [ ] `CTABand`
- [ ] `TestimonialsMarquee`
- [ ] `FAQAccordion`
- [ ] `WhatsAppButton` (fixed FAB — must not collide with MobileCTABar)
- [ ] `ScrollProgressSpine` / `WaypointEyebrow` / `Parallax` / `Reveal` (motion behaviors on touch)

---

## What to check on every page (checklist per breakpoint)
- [ ] **No horizontal scroll / overflow** (watch the custom `globals.css` classes that can override Tailwind)
- [ ] **Typography scales** — heroes & headings not oversized/clipped on small screens
- [ ] **Hero sizing** — `min-height` and image framing sensible on phones
- [ ] **Grids reflow** — multi-column grids collapse to 1–2 cols cleanly
- [ ] **Tap targets ≥ 44px** — links, buttons, filter chips, accordion headers
- [ ] **Spacing/padding** — section padding not cramped or excessive on mobile
- [ ] **Fixed elements don't collide** — WhatsApp FAB vs MobileCTABar vs sticky header
- [ ] **Forms usable** — inputs full-width, labels visible, no zoom-on-focus surprises
- [ ] **Motion degrades** — parallax/spine/marquee behave (or disable) on touch + reduced-motion
- [ ] **Images** — `next/image` sizing correct, no layout shift, not stretched

---

## Phase 1 — Defect list (from capture + DOM probe)

| # | Route / component | Breakpoint | Issue | Severity | Status |
|---|-------------------|------------|-------|----------|--------|
| 1 | Homepage `.ridge-top` divider SVG | 360 / 768 / 1280 (all) | `viewBox 0 0 1440 56` with no explicit width → SVG falls back to intrinsic 1440px (`right:0` ignored for auto-width replaced elements), forcing horizontal scroll at every width (overflow = 1440 − viewport) | **P1** | ✅ fixed |
| 2 | WhatsApp FAB | narrow | Floats over body text on reviews/contact while scrolling — normal fixed-FAB behavior, not a layout break | P3 cosmetic | accepted |

**Confirmed clean (no overflow, no gaps, all widths):** kilimanjaro list+detail, safaris
list+detail, zanzibar detail, trekking detail, about, contact, reviews, search.
The existing mobile foundation (hamburger nav, MobileCTABar, FAB stacked at `bottom-24`
above the CTA bar, grid reflows) all works.

---

## Phase 2 — Fixes
- [x] Add `width: 100%` to `.ridge-top` in `globals.css` (root cause of homepage overflow)

---

## Phase 3 — Verification
- [x] Re-run DOM probe — every route reports `ok` (no overflow / no gaps) at 360 / 768 / 1280
- [x] Visual re-capture of homepage at 360 confirms full page renders cleanly
- [x] 1280px confirms no desktop regression
- [x] Harness kept throwaway / gitignored (`scripts/shots.mjs`, `scripts/probe.mjs`, `.audit/`)

> **Note:** the pre-existing dev server was serving stale CSS (globals.css change
> didn't hot-reload); a server restart was required for the fix to take effect.
