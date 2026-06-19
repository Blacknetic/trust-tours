# IMPLEMENTATION_CONTENT.md — Content richness + cinematic motion

Reference checklist for making the site rich with the newly-added photography and
animating it. Priorities chosen with Ombeni: **authenticity-forward**, leading with the
**Wall of Summits** + a **cinematic motion pass**.

---

## 0. Asset reality (read before touching photos)

The ~100 photos were dropped **loose into `public/`** with descriptive names
(`Proof-of-MountMeru.jpg`, `The-team with-clients.jpg`, `Clients-on-christmass.jpg`, …).
This is the real library. Notes that bit us once already:

- **Folders are NOT clean sets.** `public/Kilimanjaro/`, `public/Safari Picx/`,
  `public/Mount Meru/`, `public/Oldonyo lengai/` are grab-bags. `public/Kilimanjaro/`
  in particular mixes authentic client photos with **downloaded stock wildlife** — one
  (buffalo + flamingos) carries a stock-site watermark. **Never bulk-import a folder.**
- **Filenames can mislead.** A file in `Kilimanjaro/` was actually a Mount Meru summit sign.
- **Always eyeball a photo before publishing it.** Screen out anything that looks like
  pro/stock wildlife we can't prove is ours.
- **`public/Oldonyo lengai/` has no images** — only `.docx` itinerary sources.
- Curated, web-safe copies live in **`public/images/wall/`** (kebab-case, no spaces).
  Loose originals have spaces / `=` in names → always copy+rename before referencing.

**Tiers:** polished set in `public/images/*` = heroes/seduction · authentic loose photos =
proof/galleries. Keep them separate; don't drop a soft phone photo into a hero slot.

---

## 1. Wall of Summits — authentic proof band (homepage)  ▲ priority

A dense, slightly irregular masonry of **real** expedition/guest photos, placed as the
"proof beat" after `WhyTrustUs`, before the trip sections. Verified authentic, captioned.

Curated tiles (`public/images/wall/`):

- [x] `team-with-clients.jpg` — our team with a summit group (feature tile)
- [x] `meru-summit-sign.jpg` — frosted "Mount Meru 4,566 m" sign
- [x] `meru-summit-ridge.jpg` — guest on the Meru summit ridge
- [x] `kilimanjaro-uhuru-crowd.jpg` — climbers at Uhuru Peak
- [x] `kilimanjaro-summit-night.jpg` — line of climbers on the snow
- [x] `kilimanjaro-glaciers.jpg` — Kibo glaciers at sunrise
- [x] `client-with-hadzabe.jpg` — guest meeting the Hadzabe
- [x] `maasai-dance.jpg` — guest dancing with Maasai warriors
- [x] `clients-christmas.jpg` — guests in Tanzania at Christmas
- [x] `wta-nominee-2023.jpeg` — World Travel Awards 2023 nominee badge (credibility, beside heading)

Tasks:

- [x] Build `components/SummitWall.tsx` (irregular grid, per-tile aspect/feature spans).
- [x] Each tile wrapped in `Reveal` with stagger; inner `.wipe` clip reveal; hover photo-zoom + caption.
- [x] WTA-nominee badge + credibility line (TALA 014216, years) beside the heading.
- [x] Wire into `app/page.tsx` after `WhyTrustUs`.
- [x] Honest captions — neutral wording on photos we can't firmly attribute, warm wording on clearly-ours.
- [ ] Optional: mobile horizontal snap-scroll ribbon variant (currently a 2-col grid on mobile).
- [ ] Optional: expand with more verified loose photos (`Clients-on-airballon`, `Married-client`, …) once eyeballed.

## 2. Cinematic motion pass

Build on the existing system (`.hero-ken-burns`, `.kb-slow`, `.wipe`, `.reveal`,
`.card-lift`, marquee). Every effect must keep its `prefers-reduced-motion` off-ramp.

- [x] `.photo-zoom` — slow hover zoom for gallery/wall tiles (transform-only) + reduced-motion neutraliser.
- [x] Staggered clip-path reveal on the Wall (reuses `.wipe` driven by `Reveal.is-visible`).
- [ ] Apply `.kb-slow` Ken Burns to section/hero images sitewide (trip pages, about).
- [ ] Blur-up placeholders (`placeholder="blur"`) on heavy authentic galleries (LCP safeguard).
- [ ] Hero parallax depth: layer `Parallax` + `SoaringBirds` fore/mid/background drift.
- [ ] Audit `sizes`/lazy-loading on every new `Image` so mobile LCP doesn't regress.

## 3. Footer — written guides / blog links  (requested)

The "written blogs/information" are the 6 articles in `data/guides.ts`.

- [x] Add a "Travel Guides & Advice" column to `components/Footer.tsx` (vertical list, beside Safaris & Trekking) linking all 6 guides + "All guides →".
- [ ] Revisit if a dedicated `/blog` or more guides get added later.

## 4. Backlog (next waves, not started)

- [ ] Dedicated `/gallery` route — filterable (Kili / Meru / Safari), lightbox, lazy-loaded.
- [ ] Photo-journey on trip pages — altitude-matched real photos + sticky-scroll storytelling via `ElevationJourney`.
- [ ] Humanise team/guides pages with `The-team.jpg`, `The-safari-team.jpg`, `Mr-Ombeni`.
- [ ] Stats/credibility band (summits led, years, success rate, TALA, WTA nominee).
- [ ] Rename/optimise the rest of the loose `public/*` photos into web-safe slugs as they're used.

---

### Guardrails
- Eyeball every authentic photo before publishing; reject stock/watermarked.
- Transform/opacity-only animations; always honour reduced-motion.
- Lazy-load + correct `sizes` on all new images (mobile LCP).
- Two-tier discipline: polished = heroes, authentic = proof/galleries.
