# Keyword priority — real data, not estimates (2026-08-18)

Where "which keywords do we actually go all-in on" got answered with real GSC data instead of guesses. Triggered by reviewing an unrelated local-SEO playbook and noticing we'd never done Step 1 (benchmark before building) properly for this site — everything so far had been built off the plan's assumptions, not confirmed search demand.

**Important context this whole doc sits inside:** Trust Tours targets **international, solution-aware buyers** — people who already know tour operators exist and are comparing which one to book, searching from the US/UK/EU, not "near me" searchers in Arusha. A generic local-SEO playbook (heatmaps, "areas we serve" pages, city-page silos) mostly doesn't apply here — see the reasoning captured in this conversation thread; not re-documented here since it's a one-time translation, not a recurring checklist.

---

## The shortlist

Five candidates, chosen for solution-aware/comparison-stage intent (not top-of-funnel "what is a safari" awareness queries) and checked against live SERPs — none dominated by big OTAs (Viator/GetYourGuide), all dominated by comparable independent operators (Altezza, Ian Taylor Trekking, Duma Explorer, Macpace, Safari Soles). That's a winnable fight, not an unwinnable one.

## Real GSC data, 3-month window (pulled 2026-08-18)

| Query cluster | Impressions | Clicks | Avg. position | Read |
|---|---|---|---|---|
| tanzania safari cost (+variants) | 132 | 0 | **48.5** | Seen, page ~5, climbing — new peak the week of Aug 8–12 |
| kilimanjaro climb cost (+variants) | 51 | 0 | 76.4 | Seen, page ~8, flat |
| best tanzania tour operator | 0 | 0 | — | **Invisible** — Google has never matched us to this phrase |
| best tanzania safari company | 0 | 0 | — | **Invisible** — same |
| tanzania vs kenya safari | 0 | 0 | — | Too new (guide rebuilt Day 38, 2 days old) — not a real signal yet |

**Correction to a prior report:** the 2026-08-01 "Month 1" client update said cost guides were "being found in your target markets... for searches like kilimanjaro climb cost." This data doesn't support that for the exact phrase — zero clicks across 3 months. Likely that earlier claim came from a looser query match or a Semrush estimate rather than a real GSC filter. Flagging so it doesn't get repeated uncorrected.

## The diagnosis — clean two-bucket split

1. **Cost/informational queries** (tanzania safari cost, kilimanjaro climb cost): real impressions, zero clicks, deep position. This is an **authority problem** — Google is showing the pages, nobody clicks because position 48–76 is past where anyone scrolls. Confirms the existing pivot toward backlinks/citations (Days 40–41) is the right lever; no new content work needed here. Watch the Aug 8–12 uptick on "tanzania safari cost" on the next pull — first real positive inflection, too early to call a trend.

2. **"Best operator/company" queries**: zero impressions — not a ranking problem, a **relevance-matching problem**. No page targeted this exact phrasing closely enough for Google to even consider it a candidate. Fixed by building dedicated content, not by waiting for authority to accrue.

## Action taken

Built `/guides/best-tanzania-safari-company` ([data/guides.ts](../../data/guides.ts)) — an honest, checklist-driven page explicitly targeting both "best tanzania safari company" and "best tanzania tour operator" in title/content, rather than retrofitting the existing `/guides/how-to-choose-tour-operator` (deliberately narrow — TALA licence verification only, would dilute both intents if broadened). Cross-linked from both `book-direct-vs-ota` and `how-to-choose-tour-operator`'s `relatedGuides`.

## Open / next

- **Semrush Position Tracking** was the planned tool for ongoing US/UK/Canada rank tracking but currently needs a paid plan we don't have active — using **GSC's free Query + Country filter** as the real substitute instead (same underlying data Semrush estimates from, and it's what produced the table above). No paid tool needed for this.
- Local **ranking-heatmap tool** (Merchynt-style, grid around Arusha): confirmed not the right instrument for any of these five terms — none trigger a local map-pack for an international searcher. Legitimate use case only for genuinely local queries ("tour operator arusha," "safari company near me") — the smaller in-country/last-minute segment, not the primary target.
- Re-pull all five queries in ~3-4 weeks: expect `best-tanzania-safari-company` to go from 0 impressions to something (first relevance signal), and watch whether "tanzania safari cost"'s Aug 8-12 uptick continues or was a blip.
- GBP heatmap tool auto-selected the old keyword-stuffed duplicate listing name ("Trust Tours and Safaris Company Tanzania | Luxuries Safaris | ...") when picking a business to audit — worth a quick check that the July merge fully completed on Google's end, or whether that's just stale cache in the third-party tool.
