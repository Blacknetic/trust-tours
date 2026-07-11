<!-- WEEKLY SEO REPORT TEMPLATE — duplicate this file each Friday, update every
     section, keep the same headings so week-over-week comparison stays easy.
     Rules: plain language, every number gets a "what this means", no filler. -->

# SEO Weekly Report — Week 1

**Period:** July 9–11, 2026 · **Plan days completed:** 1–5 of 90 · **Prepared:** July 11, 2026

---

## 1. Summary

We built the measurement foundation this week: the site now tracks visitors and leads (it previously tracked nothing), Google and Bing both have complete, verified maps of the site, and we recorded the baseline numbers every future week will be compared against.

**Biggest win of the week wasn't SEO:** we discovered the quote-request form had been silently broken — every traveler who chose "email" got an error. The mailbox password had been changed but never updated in the site's configuration. It is now fixed, tested, and verified working in production.

---

## 2. What was done

| Day | Task | Status |
|---|---|---|
| 1 | Installed Google Analytics (GA4). The site now records every visit, every WhatsApp click, and every quote request. Before this week: zero measurement. | ✅ Done |
| 2 | Google Search Console audit + baseline export. Confirmed Google has the full site map (160 pages) and recorded our starting numbers (Section 3). | ✅ Done |
| 3 | Bing Webmaster Tools set up. Bing had not been told about the new site at all — we submitted all 160 pages and requested homepage indexing. Bing confirmed the site is indexable with no issues. | ✅ Done |
| 4 | Removed 424 MB of unused raw photos and internal documents that were shipping with the live site. Fixed two broken old links that visitors were still hitting. | ✅ Done — **awaiting deploy** |
| 5 | Page-speed baseline measured on 4 page types, phone and desktop (Section 4). Saved to the tracking spreadsheet. | ✅ Done |
| — | **Unplanned fix:** quote form was down (wrong email password). Fixed, plus upgraded the email connection to proper certificate-verified encryption and secured the cPanel login. | ✅ Done |

---

## 3. The starting numbers (our baseline)

These are the numbers we will beat. Recorded July 9–11 from Google Search Console (last 28 days).

| Metric | Value | What this means in plain terms |
|---|---|---|
| Impressions | 1,400 | Google showed us in search results 1,400 times. Google considers us relevant — that's real demand. |
| Clicks | 12 | Only 12 people actually clicked through. Almost all searched our brand name — strangers aren't finding us yet. |
| Average position | 67.5 | On average we appear on page 7 of Google. Nobody scrolls there. **This is the number the whole 90-day plan attacks.** |
| Click-through rate | 0.9% | Of everyone who saw us, under 1% clicked — exactly what page-7 placement predicts. Not a messaging problem yet, a ranking problem. |
| Pages Google knows | 160 of 160 | The full site is submitted and being indexed. No technical blockers. |
| Bing traffic | ~0 | Bing ignored the new site because it was never notified. Now notified (all 160 pages). Expect 3–6 weeks before Bing responds. |

**Demand evidence worth knowing:** one old cost-related page alone was shown 342 times (from page 7). The UK is our biggest untapped market — 434 impressions, zero clicks. The demand exists; we rank too low to catch it.

---

## 4. Page speed, in plain terms

Think of the score like a school grade out of 100. Measured on a simulated cheap phone with weak internet (the harshest test) and on desktop.

| Page type | Phone | Desktop | The verdict |
|---|---|---|---|
| Homepage | 86 | 99 | Good. |
| Tour page | 90 | 99 | Good. |
| Guide article | 83 | 99 | Acceptable. |
| Kilimanjaro listing | 79 | 99 | Weakest — most photos above the fold. |

- **Desktop is essentially perfect (99/100 everywhere).** Most of our US/UK/AU customers on modern phones will experience something closer to this than to the harsh phone test.
- **The layout never jumps while loading (a perfect 0)** on every page — rare, and worth protecting.
- **The one weakness is how fast the big hero photo appears on slow connections.** Known fixes are queued (photo loading priority + compression). Not urgent: Google ranks us on real visitors' experience, and our real visitors skew toward fast devices.
- Full data: `docs/seo-tracking/cwv-baseline-2026-07-11.csv` (imported to the tracking sheet). Re-measured at Day 77 with the identical method.

---

## 5. Problems found and fixed this week

1. **Quote form was down (revenue-critical).** Wrong email password in the site config — every email-preference lead since the password change was lost. Fixed, tested end-to-end, confirmed working on the live site. The form's WhatsApp fallback had been catching some of the loss.
2. **Site was invisible to Bing.** The old WordPress plugin used to notify Bing; the new site never did. Now submitted (160 pages) with a permanent notification pipeline for future publishes.
3. **Visitors were hitting dead pages.** Analytics showed "Page not found" as our #2 most-viewed page. Traced to two old URL patterns; both now redirect to the right pages.
4. **424 MB of dead weight** (unused raw photo albums, internal Word documents publicly accessible) removed from the deployment. Also archived safely offline.
5. **Email + cPanel security upgraded:** certificate-verified email encryption, secure hostname URLs for cPanel/webmail, two-factor authentication recommended.

---

## 6. Open items

| Item | Owner | By when |
|---|---|---|
| Deploy this week's commits to production (redirects + cleanup aren't live until then) | Owner | ASAP |
| Accessibility & speed quick-wins (star-rating markup, list structure, photo priority) | Claude | Next code session |
| Provide real social profile URLs (LinkedIn/TikTok/FB/IG are currently share-links) | Owner | Before Day 41 |
| Enable cPanel two-factor authentication | Owner | This week |

## 7. Next week (Days 6–12 of the plan)

Schema markup on category pages (Day 6), contact-info consistency sweep (Day 7), then the keyword map: assigning one target search phrase to every page on the site (Days 8–11) and rewriting the titles Google shows for our top 10 money pages (Day 12). First formal checkpoint lands Day 14.

---

*Reporting rhythm: impressions move first (weeks 3–6), clicks follow (weeks 6–10), inquiries follow clicks. Weeks 1–6 are judged on impressions and indexing — not clicks.*
