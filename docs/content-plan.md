Let'# Trust Tours — Content Plan (Hub-and-Spoke Guide Library)

Goal: match the informational depth of altezzatravel.com and climbing-kilimanjaro.com,
where every article anticipates the reader's *next* question and funnels to a bookable trip.

## How it works (already built — we only feed it)
Each guide in `data/guides.ts` renders via `components/GuideView.tsx`, which already outputs:
- `keyTakeaway` — direct-answer box (Google snippets / AI answers)
- `primaryCta` — funnel button at top **and** bottom
- `relatedGuides` — "answer the next question" chain
- `relatedPackages` — **relevant itineraries shown as cards at the end** (the booking ask)
- FAQ accordion + WhatsApp CTA band

So the work is **content production + linking**, not new plumbing.

## Facts policy
Neutral, authoritative framing. Use confirmed facts only (TALA 014216, real itineraries/prices).
No borrowed competitor stats. Numbers needing Ombeni are collected in "TO CONFIRM" at the bottom.

---

## The map

Legend: **[E]** = exists today · **[NEW]** = to write · → = primary funnel (primaryCta)

### HUB 1 — Kilimanjaro (highest intent / margin)
| Guide slug | Title / question | Primary funnel | Related packages |
|---|---|---|---|
| `climbing-kilimanjaro-guide` **[NEW, PILLAR]** | Climbing Kilimanjaro: The Complete Guide | /kilimanjaro | all 4 climbs |
| `best-kilimanjaro-route` **[NEW]** | Which Kilimanjaro route is best? | /kilimanjaro | machame, lemosho, marangu, northern-circuit |
| `how-long-to-climb-kilimanjaro` **[E]** | How long does it take? | /kilimanjaro | machame, lemosho, northern-circuit |
| `how-much-to-climb-kilimanjaro` **[NEW]** | How much does it cost? | /kilimanjaro | machame, marangu |
| `kilimanjaro-success-rate` **[NEW]** | What are the odds of summiting? | /kilimanjaro | northern-circuit, lemosho |
| `kilimanjaro-training-and-fitness` **[NEW]** | How fit do I need to be? | /kilimanjaro | machame, 3-day-mount-meru |
| `kilimanjaro-packing-list` **[NEW]** | What to pack / gear list | /kilimanjaro | all climbs |
| `best-time-to-climb-kilimanjaro` **[NEW]** | Best months / weather | /kilimanjaro | all climbs |
| `machame-route` **[NEW]** | Machame route deep-dive | 7-day-machame-route | 7-day-machame, 8-day-lemosho |
| `lemosho-route` **[NEW]** | Lemosho route deep-dive | 8-day-lemosho-route | 8-day-lemosho, 9-day-northern-circuit |
| `marangu-route` **[NEW]** | Marangu (hut) route deep-dive | 6-day-marangu-route | 6-day-marangu, 7-day-machame |
| `northern-circuit-route` **[NEW]** | Northern Circuit deep-dive | 9-day-northern-circuit | 9-day-northern-circuit, 8-day-lemosho |
| `kilimanjaro-and-mount-meru` **[NEW]** | Acclimatize on Meru first | 3-day-mount-meru-momela | mount-meru x3, 7-day-machame |

### HUB 2 — Safari
| Guide slug | Title / question | Primary funnel | Related packages |
|---|---|---|---|
| `tanzania-safari-guide` **[NEW, PILLAR]** | Tanzania Safari: Complete Guide | /safaris | 7/8-day migration, 5-day-northern |
| `best-time-great-migration` **[NEW]** | Where is the migration each month? | /safaris | 7/8-day migration, calving safaris |
| `serengeti-guide` **[NEW]** | Serengeti National Park guide | /safaris | 7-day-migration, 5-day-northern |
| `ngorongoro-crater-guide` **[NEW]** | Ngorongoro Crater guide | /safaris | 2-day, 3-day-safari |
| `tarangire-guide` **[NEW]** | Tarangire National Park guide | /safaris | 5-day-northern, 6-day-northern |
| `lake-manyara-guide` **[NEW]** | Lake Manyara guide | /safaris | 9-day-northern-tanzania-safari |
| `how-much-tanzania-safari-cost` **[NEW]** | How much does a safari cost? | /safaris | 5-day-northern, 7-day-migration |
| `what-to-expect-on-safari` **[NEW]** | A day on safari (vehicles/lodges) | /safaris | 5-day-northern, 7-day-migration |
| `calving-season-guide` **[NEW]** | Ndutu calving season (Jan–Mar) | /safaris | calving safaris (6/5/10-day) |
| `tanzania-vs-kenya-safari` **[NEW]** | Tanzania vs Kenya | /safaris | 10-day-kenya-safari, 9-day-beach-city-bush |
| `tanzania-safari-packing-list` **[E]** | What to pack for safari | /safaris | 5-day-northern, 7-day-migration |

### HUB 3 — Zanzibar
| Guide slug | Title / question | Primary funnel | Related packages |
|---|---|---|---|
| `zanzibar-travel-guide` **[NEW, PILLAR]** | Zanzibar: Complete Guide | /zanzibar | 4/5/8-day zanzibar |
| `best-beaches-zanzibar` **[NEW]** | Best beaches in Zanzibar | /zanzibar | 5-day, 8-day zanzibar |
| `stone-town-guide` **[NEW]** | Stone Town guide | /zanzibar | 8-day, 4-day zanzibar |
| `things-to-do-zanzibar` **[NEW]** | Things to do in Zanzibar | /zanzibar | 5-day, 8-day zanzibar |
| `best-time-to-visit-zanzibar` **[NEW]** | Best time to visit | /zanzibar | 4/5-day zanzibar |

### HUB 4 — Planning (cross-cutting)
| Guide slug | Title / question | Primary funnel | Related packages |
|---|---|---|---|
| `tanzania-travel-guide` **[NEW, PILLAR]** | Planning a Trip to Tanzania | / | flagship climb + safari |
| `best-time-to-visit-tanzania` **[E]** | Best time to visit | / | migration safaris |
| `tanzania-visa-and-passport-requirements` **[E]** | Visa & passport | / | — |
| `combine-kilimanjaro-safari-zanzibar` **[NEW]** | How to combine all three | 12-day-kilimanjaro-safari-culture | 12-day combo, 7-day-tanzania-zanzibar |
| `tanzania-honeymoon-guide` **[NEW]** | Honeymoon planning | /honeymoon | honeymoon packages |
| `how-to-choose-tour-operator` **[NEW]** | How to pick a safe, legit operator (mirrors climbing-kilimanjaro ref) | /about | flagship climb + safari |
| `tipping-in-tanzania` **[NEW]** | Tipping crew & guides | / | — |

### HUB 5 — Health & Safety
| Guide slug | Title / question | Primary funnel | Related packages |
|---|---|---|---|
| `altitude-sickness-on-kilimanjaro` **[E]** | Altitude sickness | /kilimanjaro | northern-circuit, lemosho |
| `tanzania-vaccinations` **[E]** | Vaccinations | / | — |
| `malaria-in-tanzania` **[NEW]** | Malaria & prevention | / | — |
| `is-tanzania-safe` **[NEW]** | Is Tanzania safe? | / | flagship safari |
| `travel-insurance-tanzania` **[NEW]** | Travel insurance (req. for climbs) | /kilimanjaro | climbs |

### Phase 2 (optional spokes — write after the above)
- `mount-meru-climb-guide` → mount-meru packages
- `ol-doinyo-lengai-guide` → lengai packages
- `tanzania-cultural-tours-guide` → cultural packages
- `paramotoring-tanzania-guide` → paramotoring packages

Totals: **6 existing + ~33 new (core) + 4 optional ≈ 43 guides.**

---

## 3 small structural upgrades to GuideView (reusable, static, no perf cost)
1. **Inline mid-article CTA** — a compact "talk to Ombeni / see trips" block between sections (competitors disperse CTAs, not just top/bottom). Add optional `inlineCtaAfter: number` to the Guide model.
2. **Comparison tables** — add a `table` section type so route/cost/park comparisons render natively (a signature of both reference sites).
3. **Trust strip** — a thin reusable band: TALA 014216 license + review count + "talk to the founder, not a call centre." Sitewide-eligible, high conversion.

## Build order (proposed)
- **Wave 1 — Kilimanjaro hub** (pillar + 8 spokes): highest intent, proves the pattern.
- **Wave 2 — Safari hub** (pillar + parks + migration).
- **Wave 3 — Zanzibar + Planning + Health.**
- **Wave 4 — Phase 2 optional spokes.**

## TO CONFIRM with Ombeni (so we can add real stats later)
- Trust Tours' own summit success rate (overall + by route)
- Guide-to-client ratio, oxygen/pulse-ox carried, crew sizes
- Exact tipping guidelines Trust Tours recommends
- Whether travel insurance is mandatory/which they require
- Park fees / single-supplement specifics for cost articles
- Any awards / association memberships beyond TALA 014216
