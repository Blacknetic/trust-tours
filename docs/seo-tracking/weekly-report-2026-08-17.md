# SEO Weekly Report — Week 6

**Period:** August 11–17, 2026 · **Plan days completed:** 35–37 of 90 · **Prepared:** August 18, 2026

---

## 1. Summary

This week closed out the **trust cluster** (the pages that answer "can I trust this operator?") and shifted attention to a data-quality problem that's been quietly distorting every report we've sent so far: a large, recurring block of automated traffic from cloud datacenters (Singapore, US) that GA4 counts as real visitors.

**The headline: we found and fixed the source of that noise today.** Every analytics/chat script on the site now checks for the standard automation signal browsers expose (`navigator.webdriver`) before it fires — so going forward, GA4 and Clarity numbers should better reflect real people, not scripts. We also caught a second, unrelated issue worth flagging: the site's own "Page not found" page is the **second most-viewed page on the whole site** (212 views in 28 days, just behind the homepage) — investigation opened, not yet resolved.

---

## 2. What was done

| Day | Task | Status |
|---|---|---|
| 35 | Upgraded **`/guides/is-tanzania-safe`** with current-year specifics, health cross-links, and a founder-voiced safety section. | ✅ Live |
| 36 | **E-E-A-T author upgrade** — every guide's schema now credits founder Ombeni by name (`Person` schema, byline, bio box), not just the organisation. | ✅ Live |
| — | **Homepage hero rebuilt** around a real customer quote (Robin Van Rompaey) and a single clear WhatsApp CTA, informed by Clarity data showing only 38% scroll depth — the strongest trust content now sits where visitors actually look. | ✅ Live |
| — | **npm security fix** — resolved 6 high-severity dependency vulnerabilities. | ✅ Done |
| 37 | **Trust-cluster publish day** — footer link and quote-form link added to the "why book direct" guide; indexing requested for `/faq` and the two trust guides. | ✅ Live |
| — | **Site-wide bot filter shipped** — GA4, Clarity, and the live-chat widget now skip loading entirely for detected automated browsers. | ✅ Live |
| — | **404-leak investigation opened** — "Page not found" confirmed as the #2 most-viewed page two pulls running (219 → 212 views). Root cause not yet identified; needs one more data pull. | 🔎 In progress |

---

## 3. The numbers

### Search visibility (Google Search Console)

| Metric | Prior pull (Aug 11) | Now (Aug 18) | Trend |
|---|---|---|---|
| Impressions (28-day) | ~5,040 | **~5,020** | Flat — growth rate cooling after the initial ramp |
| Clicks (28-day) | 30 | **27** | Flat/slightly down — small numbers, within noise |
| Since campaign start (Jul 1–Aug 14, cumulative) | — | **54 clicks / 7,870 impressions** | Real underlying uptrend, spikes growing over time |
| Average position | ~63–68 | **63.5** | Still page 6–7 — unchanged, expected at this stage |
| Indexed pages | — | **169**, up from 0 | Real indexing progress from the content push |

**Plain read:** the 28-day snapshot looks flat, but that's an artifact of comparing two overlapping windows a week apart — the 3-month view shows the real trend is still climbing, just not in a straight line. Average position hasn't moved, which is expected: that requires authority-building (backlinks), the focus of a later phase.

### Visitors & leads (Google Analytics, last 28 days: Jul 21–Aug 17)

| Metric | Value | Note |
|---|---|---|
| Active users | 589 | Includes bot pollution (see below) |
| Form starts → submissions | 14 → 9 | 64% completion — healthy ratio |
| WhatsApp clicks | 3 | Real intent signal |
| Avg engagement time per user | 14s | Almost certainly dragged down by bot sessions |

> **Data-quality flag (now being actively fixed):** Singapore (232) and the US (175) active users continue to dwarf Tanzania (29) in GA4's country breakdown — the same automated-traffic pattern flagged in prior reports. Today's fix (see above) stops this traffic from being counted going forward; it takes a few days of data to confirm the impact.

---

## 4. Two problems fixed / being fixed this week

1. **Bot traffic polluting analytics — fixed today.** Every third-party script (Google Analytics, Microsoft Clarity, the live-chat widget) now checks for the standard "this browser is being automated" signal before loading. This won't catch every sophisticated scraper, but it's the standard first line of defense and should visibly clean up the Singapore/US numbers within the next reporting cycle.
2. **"Page not found" is the #2 most-viewed page site-wide — investigation open.** This has shown up two reports running (219 views, then 212) and hasn't resolved on its own. We need one more GA4 data pull (the exact URL people are landing on) to fix it properly — flagged as the top priority for the next session rather than guessed at blind.

---

## 5. What only the client (Mr Ombeni) can do — short list

*(unchanged from prior reports — still the highest-leverage open items)*

| Item | Why it matters |
|---|---|
| Ask every recent guest for a Google/TripAdvisor review | The single biggest lever we can't pull directly — compounds every other page |
| Confirm Google Business Profile manager access | Needed to keep optimising photos, Q&As, and posts |
| Confirm Northern Circuit and group-departure pricing | Removes a remaining pricing-consistency risk |

---

## 6. Next: authority-building phase begins

With the trust cluster live and the analytics data quality issue addressed, the next stretch of days shifts toward off-site authority (links, citations, comparison content) — the lever that actually moves average position off page 6–7. The 404 leak gets closed first.
