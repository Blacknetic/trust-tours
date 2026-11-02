# Implementation Plan: Cross Safari Migrations (river-crossing safaris)

> Written 2026-11-02 so a new agent can pick up with no earlier context.

## Context

Trust Tours & Safaris (trusttourstz.com) is a Next.js 16 site for a Tanzanian operator owned by Ombeni. His itineraries are being rebuilt folder by folder from Word documents on `D:\mpya`. Kilimanjaro and the calving safaris are done. This phase rebuilds `D:\mpya\Cross safari migrations` (Mara River crossing safaris, July to October) in the same way as the calving pages.

The agreed order after this: Big Five (`regula bigfive`, 2026 safari documents only), then fly safaris and day trips, then Combo.

## State of the repo at handoff

- **Live:** commit `caacfd2` (calving safaris, lodge chooser, quote flow) is in production.
- **Built locally, not committed (2026-11-02):** all 9 Cross Migration pages, the crossing template, 14 northern, Tarangire and Manyara stays, the filter split, the menu row and the "Your nights on this trip" panel. The two old 7-Day and 8-Day entries are gone from `data/packages.ts`; their slugs and old URLs live on in `data/safaris/`. Release check on a local build: 156 pages, 0 broken links or images, 21/21 redirects. **Still to do: commit, push, and the clean-copy build from committed files.**
- Pushing creates a Vercel Preview. Production is a separate promotion, done in the Vercel dashboard. The Vercel CLI is logged out on this machine.
- After any rebuild, start a fresh `next start`. A server left running during a build returned a false 404 for a new page, and an old preview server may still hold port 3001.
- `master` is 87 commits behind and is not what production has been deployed from. Don't merge into it unless the user asks.
- The user's `next dev` on port 3000 had a corrupt 2.7GB cache. Before starting it: `Remove-Item -Recurse -Force .next\dev; npm run dev`.
- Commit or push only when the user asks. End commit messages with the attribution line given in the session.

## The trips: 11 documents become 9 pages

Prices are `min daily rate × days` at Mid-range, for 2 adults sharing.

| # | Page | Slug | Status | Master document | From |
|---|---|---|---|---|---|
| 1 | 4-Day Cross Migration Safari | `4-day-cross-migration-safari` | New | `4-Day Great Migration River Crossing Safari` | $1,820 |
| 2 | 5-Day Cross Migration Safari: Tarangire, Crater, Northern Serengeti | `5-day-great-migration-safari` | New | `5-Day Tanzania Great Migration Safari with Trust Tours` (has lodge lists by level). Take extra detail from `5-Day Tanzania Great Migration Safari` (65% overlap, but its route has a Central Serengeti night) | $2,275 |
| 3 | 5-Day Cross Migration Safari: Crater, Central, Northern | `5-day-cross-migration-safari` | New | `5-day Great Migration River Crossing Safari recommended route 1` (no Tarangire) | $2,275 |
| 4 | 6-Day Cross Migration Safari | `6-day-cross-migration-safari` | New | `6-Day Great Migration River Crossing Safari in Tanzania` | $2,730 |
| 5 | 7-Day Cross Migration Safari | `7-day-great-migration-safari` | **Rebuild, keep slug** | `7 Day-by-day itinerary 6 nights Great Migration river crossings` | $3,185 |
| 6 | 7-Day Cross Migration Safari: Manyara, Crater & Serengeti | `7-day-manyara-serengeti-migration-safari` | New | `7 Days Tanzania Northern Circuit Safari` (best level lists) | $3,185 |
| 7 | 8-Day Cross Migration Safari: Central and Northern | `8-day-great-migration-safari` | **Rebuild, keep slug** | `8-Day ... in Tanzania...docx` (three dots; closest to the live route, 2 nights north, bracketed by Central) | $3,640 |
| 8 | 8-Day Cross Migration Safari: longer in the north | `8-day-mara-river-crossing-safari` | New | `8-Day ... in Tanzania.docx` (best crossing Q&A) | $3,640 |
| 9 | 9-Day Cross Migration Safari | `9-day-great-migration-safari` | New | The two 9-day documents are the same trip. Use `9-Day ... Safari.docx` for structure and the `...Tarangire...` one for named lodges | $4,095 |

The user gave the go-ahead to build from these masters. `D:\mpya` is a flash drive and may be unplugged; text extracted from it is only in the session scratchpad.

**Untouched:** `7-day-photography-cultural-safari`, `11-day-bird-photography-safari`, and `7-day-northern-circuit-safari` (a different Big Five trip).

**Rebuilding the two existing pages:**
- Remove the old entries from `data/packages.ts` and keep their `oldUrl`, as was done for `6-day-calving-safari`.
- These slugs are referenced in `app/page.tsx:58` and many `relatedPackages` in `data/guides.ts`, and `7-day-great-migration-safari` targets "great migration safari". Keeping the slugs protects all of that.
- The 7-day price rises from $2,200 to $3,185 and the 8-day from $3,250 to $3,640. Grep guides, FAQ and meta strings for hard-coded old prices, because prose doesn't derive from data.
- Add each new slug to `MIGRATION_SAFARI_SLUGS` in `data/packages.ts`.

## User's decisions to preserve

- Every page has 4 comfort levels (Mid-range, Luxury, High-end luxury, Ultra-premium), and cards show "From" prices.
- **No price table with "Ask" columns.** Only real prices show. People buttons 1 to 6 stay in the box, and sizes other than 2 say "Ask for price".
- Long pages, with internal links through the left side and the sticky booking box with add-ons on the right.
- Visitors choose a stay per stop, and the review carries their choices.
- `/safaris` is one long page beside the left filter, with no pagination.
- New SEO titles and descriptions are fine, but keep existing URLs.
- The `D:\mpya` documents are the source, built first and reviewed by Ombeni afterwards. Don't block on his answers; keep a running question list.
- **The label is "Cross Migration Safari"**, on titles, cards, the menu and the filter. Keep "river crossings" and "Mara River" in the body text, as that is what people search for. Existing slugs stay for SEO.
- **Update the sub-navigation whenever a new group of itineraries is added.** Each group gets its own row in `SAFARI_PANELS` in `components/Header.tsx`, a filter type in `lib/safari-filter.ts` and a theme tag. Cross Migration Safaris and Calving Season are done. Add trips to their row as they are built.
- **Balloons do fly at Kogatende**, from about June to mid-November, so the High-end level is fine in the north.
- Stick to the brown and white brand. Don't copy competitors' photos or wording (Altezza, Leopard Tours).

## Traps in these documents

- **Strip every internal note:** "PRICING — WHAT SHOULD TRUST TOURS CHARGE?", "Rather than creating three completely different itineraries, you can sell…", and any "I would…" advice.
- **Wrong heading:** "HIGH-END — The Ultimate Ndutu Experience" appears in 4 of these documents. These are northern trips, so never use it.
- **Off-season advice:** a few lines say January to March trips should go to Ndutu. Use this only as a link to the calving pages.
- **8-Day conflict:** in the `.docx` version (page 8), Day 7 stays in the north but says "Overnight: central Serengeti", while Day 8 leaves from Northern Serengeti. Build it as a night in the north and list it for Ombeni.
- **Season wording varies:** one document says June to October. Use July to October, with late July to September as the main window.
- **Keep the honesty:** no one can guarantee a crossing, and vehicles must stay in permitted viewing areas. Put this on every page.
- **Pricing:** the shared ladder is $455–$555, $755–$1,200, $1,300–$2,200 and $2,300–$5,000 per day. Peak-season prices near the Mara may need review by Ombeni. The documents have 1 to 6 person prices nowhere.
- **Bad lodge names:** "Parroti Hotel" is the Parrot Hotel. "Farm of Dream Lodge" must be verified. Serengeti Heritage is named for both Central and Northern nights, so confirm whether a northern camp exists before listing it.
- **High-end includes a balloon** and Luxury a flight. Check whether balloons operate in the north before implying that on crossing pages.
- **Private files:** never open or use agent net rates, payment summaries or the gemstone files in `regula bigfive` and `informations`. Agent rates must never set public prices. Client names, bank details and payment terms in any document must not reach the site.

## Code changes

Reuse the calving system. Key files: `data/safaris/shared.ts`, `data/safaris/links.ts`, `data/safaris/index.ts`, `data/accommodations.ts`, `lib/safari-filter.ts`, `data/packages.ts`, `data/addons.ts`.

1. **Generalise `calvingTrip()`** in `data/safaris/shared.ts`. It hard-codes the calving season table, booking text, FAQs, `bestMonths`, links and "Ndutu camps" in the pricing copy. Add `safariTrip(trip, theme)`, keep `calvingTrip` as a thin wrapper, and add `crossingTrip` with its own theme:
   - `bestMonths: ["Jul","Aug","Sep","Oct"]`, which also drives the quote flow's month badges.
   - A month table for July to November, a "Can a crossing be guaranteed?" section and crossing FAQs.
2. **Add `crossingLinks(slug)`** in `data/safaris/links.ts`, modelled on `calvingLinks`, with a `CROSSING_TRIPS` list. Include a link across to the calving trips.
3. **Add stay lists** in `shared.ts`: `STAYS_NORTH_SERENGETI`, `STAYS_TARANGIRE`, `STAYS_MANYARA`, and extend the Central list.
4. **Add lodges** to `STAYS` in `data/accommodations.ts`, with facts from at least two sources, written in our own words:
   - **Ombeni's lists:** Lemala Kuria Hills, Singita Mara River Tented Camp, Singita Sasakwa, Maramboi Tented Lodge, Tarangire Simba Lodge, Elewana Tarangire Treetops, Sanctuary Swala, Chem Chem Lodge, Lake Manyara Serena, Manyara's Secret, Lake Manyara Kilimamoja.
   - **Parked from Leopard Tours:** Serengeti Migration Camp, Lobo Wildlife Lodge and any others that truly suit the north. Far-west and Lake Victoria properties stay off these routes.
   - **Still unread:** Leopard Tours' Tarangire and Manyara pages (URLs are linked from `https://www.leopard-tours.com/accommodation-in-the-northern-circuit/`). It lists names only, so research facts elsewhere.
   - **Keep off the site until verified:** Kortiki, Olmorijo, Alina Twin Towers, Gold Crest, Lake Duluti Lodge, Mount Meru Game Lodge, Arusha Safari Lodge, Baghayo Garden Suites, Ngorongoro Rim Lodge, Siringit Serengeti Camp, Asanja Africa, Serengeti Makoma.
   - **&Beyond Crater Lodge** is closed until 2027, so keep it last in its lists.
5. **Create one file per trip** in `data/safaris/`, modelled on `data/safaris/7-day-ndutu-calving-safari.ts`, and register it in `data/safaris/index.ts`. Each `stopId` in the itinerary must match a `stop()` id. Each comfort level must offer a stay at every stop.
6. **Filter split: done.** "Cross migration" and "Calving season" are filter types driven by the trip tags `cross-migration` and `calving`. The Migration section on `/safaris` stays one group.
7. **Fix the add-on text:** `serengeti-flight` in `data/addons.ts` says "Southern Serengeti", which is wrong for the north. Make it generic, and mention Kogatende in the trip text instead.
8. **Safaris menu: done for this group.** Add each new crossing trip to `CROSSING_TRIPS` in `data/safaris/links.ts` and the Cross Migration Safaris row as it is built.

Files use a mix of CRLF and LF, so scripted edits must handle both. `AGENTS.md` requires reading `node_modules/next/dist/docs/` before writing Next.js code.

## Photos

- The 11 documents embed 164 images. Extract them with Python's `zipfile` from `word/media/`, and de-duplicate by hash.
- View each photo before using it: filenames mislead. `zebra-wildebeest.jpg` shows giraffes, and `migration-herds.jpg` is only 318px wide.
- Use only images at least 1200px wide for heroes. Resize with `sharp` into `public/images/safaris/`.
- Use no lodge photos without permission. Stays without photos show as text. Lodge photos go through `Stay.photos` in `data/accommodations.ts`.
- The user will supply lodge photos in `D:\mpya\lodges\<lodge-name>`. Images pasted into chat may not reach disk.

## Build order

1. Confirm production has been promoted and that the master documents are approved.
2. Extract the full text of all 11 documents, including tables. The `.docx` files are zip archives, and `word/document.xml` holds the text.
3. Generalise the shared code and confirm all 9 calving pages are unchanged.
4. Research and add the lodges.
5. Build the 4-Day page as the pilot and get the user's review.
6. Build the other 8 pages.
7. Add the filter split, photos, sitemap checks and price grep.

## Verification

- `npx tsc --noEmit`, `npx eslint` on changed files, and `npm run build`. Five older lint errors exist in `app/about/page.tsx`, `app/kilimanjaro/groups/page.tsx`, `Reveal`, `RotatingWords` and `WhatsAppButton`.
- Build from committed files only. `git clone` fails on Windows because of a long path in `content-source`. Use `git archive HEAD app components data lib public scripts package.json package-lock.json next.config.ts tsconfig.json postcss.config.mjs eslint.config.mjs`, then `npm ci` and `next build`.
- Crawl every sitemap URL against the live sitemap, checking for no dropped page, HTTP 200, one `h1`, a title, valid JSON-LD, working internal links and working images.
- Run `node scripts/verify-redirects.mjs <url>`.
- Check in Playwright, on every new page: title up to 60 characters, description up to 160, the correct "From" price, every comfort level offering a stay at every stop, and each stay opening its own card. Also check Request to book and Request a quote, plus phone width with no sideways scroll. Search the text for "Ndutu Experience", "WHAT SHOULD", "you can sell", "I would" and account details.
- Intercept `/api/inquiry` in tests so nothing reaches Ombeni's inbox. **A real test enquiry, including WhatsApp, is still outstanding.**
- Scripts from the last session lived in a temporary folder, so recreate them.

## Questions for Ombeni

Carried over from earlier work:
- Prices for 1 and 3 to 6 people at each level.
- Safari deposit terms: documents say 20% then 80% cash, while the site only covers Kilimanjaro's $200.
- The 9-Day calving price: $3,450 or $4,095.
- Which lodges he truly books at each level, and lodge photo permissions.
- Whether the wildlife photos from his documents are his.
- Which add-on prices he can confirm.

New for this folder:
- Do peak-season Mara prices follow the normal daily rates?
- What does the Serengeti to Arusha flight cost at Mid-range?
- Which camp does he use in the north at Mid-range? Is Serengeti Heritage there?
- Is the 8-Day Day 7 night in the north or Central Serengeti?
- Is a balloon really included at High-end in the north?
- What is "Farm of Dream Lodge"?
- The 7-Day via Lake Manyara document lists "Serengeti" for Days 3 to 6 with Central and northern camps mixed. It is built as Central, two nights north, then Central. Is that right?
- Should Lemala Ewanjan, Lemala Nanyukie and Serengeti Kati Kati stay out of the north? His 5-Day document names them for northern nights, but they are Central camps, so the site lists them under Central.
- Singita Sasakwa is in the private Grumeti Reserve in the west, not on the road north. It is offered on the Manyara trip only, as he listed it. Is that what he wants?
- Is Maramboi open? One listing says it is closed until the end of 2026.
- The flight add-on still says "Price on request". His 8-Day document says $455 per person one way. Can that go on every trip?
- The Maasai visit is $80 in most documents but $70 in the 8-Day document. Which is right?
- Which Ngorongoro lodge is "Ngorongoro Safari Lodge"? It is not on the site yet.
