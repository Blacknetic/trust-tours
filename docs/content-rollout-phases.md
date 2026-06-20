# Content Rollout — Phased Plan

Surfacing the 45-guide library and tightening SEO. Each phase is self-contained
and built + verified before moving on, to keep context lean.

## Phase 1 — Close the loop: package → guides  ✅ (this phase)
Guides link down to trips; trips don't link up to guides. Fix that.
- `guidesForCategory(category)` helper in `data/guides.ts`
- Reusable `components/GuideStrip.tsx`
- Wire into `components/PackagePageView.tsx` (every trip page gets relevant guides)
Files: 2 new edits + 1 component. No new assets.

## Phase 2 — Surface on category pages + homepage
Reuse `GuideStrip` to add a guides band to each listing page and the homepage.
- `/kilimanjaro`, `/safaris`, `/zanzibar`, `/trekking`, `/cultural`, `/honeymoon`, `/paramotoring`
- Homepage "Plan with confidence" strip (flagship pillar guides)

## Phase 3 — Give guides a hero image
- Add optional `heroImage` to the Guide model + image mapping
- Render a hero in `GuideView` (matches package-page polish)
- Falls back to the current brown header when no image set

## Phase 4 — SEO plumbing
- Verify all 45 guides are in `sitemap.xml`
- Verify `GuideJsonLd` emits Article + FAQPage schema (rich results)
- Add breadcrumb JSON-LD if missing

## Phase 5 — Per-guide OG images
- Dynamic `opengraph-image` for guide routes (nice link previews)

## Phase 6 — Fill real stats (BLOCKED on Ombeni)
- Replace neutral framing with confirmed numbers from the "TO CONFIRM" list
  in `docs/content-plan.md` (summit rate, crew ratios, tipping, insurance).
- Also: confirm footer email `info@trusttourstz.com` is a real inbox.
