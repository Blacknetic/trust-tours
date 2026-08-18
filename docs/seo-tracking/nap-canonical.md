# Canonical NAP — Trust Tours & Safaris

The single source of truth for Name / Address / Phone. **Every external profile must match this character-for-character** — inconsistent NAP fragments the business entity in Google's knowledge graph and weakens local/brand trust signals. (Day 7 of the SEO plan.)

## The canonical values

| Field | Exact value |
|---|---|
| **Name** | Trust Tours & Safaris |
| **Locality** | Arusha, Tanzania |
| **Phone / WhatsApp** | +255 785 938 860 |
| **Email** | info@trusttourstz.com |
| **Website** | https://www.trusttourstz.com (always `www`, always `https`) |
| **License** | TALA Licensed Tourism Agent (Class A) · License No. 014216 |
| **Founded** | 2008 |

> Street address + Google Maps embed still pending from Ombeni (noted as a TODO on `/contact`). Add it here first once confirmed, then propagate everywhere.

## On-site status (verified in code, Day 7)

All consistent ✓ — footer, `/contact`, `/about`, and the `TravelAgency` schema in `app/layout.tsx` all use the values above. The stale "confirm email" TODO in `components/Footer.tsx` is resolved (the SMTP fix proved `info@` receives mail).

## ⚠️ Google Business Profile — duplicate-listing problem (open, 2026-07-22)

There are **at least two GBP listings**, which splits reviews and weakens local ranking. Resolve before the Day-22 deep optimisation.

**What we know:**
- Listing A — claimed by us, **4 reviews**.
- Listing B — cannot claim; Google is offering **postcard verification**. Its name is keyword-stuffed: *"Trust Tours and Safaris Company Tanzania" | Luxuries Safaris | Mount Kilimanjaro climbing | Mount Meru Climbing | Zanzibar*.
- Possible third phantom listing: a **New York** address appears in third-party data (seolium.com, usacityyp.com, Semrush Listing Management showed "Trust Travel & Tours, 9402 4th Avenue, New York").

**Two problems with Listing B's name:** it breaks Google's real-world-name policy (**suspension risk**) and it doesn't match our canonical name. Rename only **after** verification — renaming mid-verification tends to fail.

**RESOLVED 2026-07-22 — Listing A is canonical.** It is verified and tied to Ombeni's professional email, so we legitimately own and control it. Day 22 optimisation runs on Listing A. Its low review count is a solvable problem; not owning a verified listing was not.

**RESOLVED 2026-07-23 — merge requested.** Both listings turned out to be inside Ombeni's own GBP account. Google had already auto-flagged Listing B with status **"Duplicate"** (so it was suppressed, not showing publicly). A **merge into Listing A has been requested** — no postcard, no Redressal form needed. Google folds B's data into A; wait a few days to a couple of weeks. The keyword-stuffed name dies with the merge.

**Canonical listing (A) details captured from GBP:**
- Shop code: `1255112648873848 8675`
- Address on the profile: **Njia Ya Ngome, Arusha CBD** — *this is the street address we've been missing. Pending Ombeni's confirmation, propagate it to `/contact`, the `TravelAgency` schema and this file.*
- Custom short name: `trust-tours-and-safaris-tanzania` — **keep it** (deletion is irreversible; no upside).

**"Fahari travels"** (verified, Summit Center, Arusha) in the same account = a **former client Ombeni dropped**, not spam. Action: remove himself as manager so it's off his dashboard. Not urgent.

**New York phantom:** no third listing appeared in the account view; treat the seolium/usacityyp NY data as stale third-party scrape, not a real GBP listing.

## External profiles — match against the table above

Tick each once its Name / phone / website match the canonical values exactly. Owner task (off-repo).

- [ ] **Google Business Profile** — name, phone, website, category (Tour Operator). *(Day 22 paste-ready optimisation brief written: [gbp-optimization-day22.md](./gbp-optimization-day22.md). Awaiting Ombeni to set hours + upload 15 photos, then it's 100% complete.)*
- [ ] **TripAdvisor** — listing shows as "Trust Tours And Safaris Company Tanzania"; ensure phone + website link match. [profile](https://www.tripadvisor.com/Attraction_Review-g297913-d13170128-Reviews-Trust_Tours_And_Safaris_Company_Tanzania-Arusha_Arusha_Region.html)
- [ ] **SafariBookings** (profile p3691) — company name, phone, website. *(Day 23 paste-ready pack written: [safaribookings-optimization-day23.md](./safaribookings-optimization-day23.md) — description, 8 price-matched tours, photo list, 3 review invites. Awaiting Ombeni.)*
- [ ] **Facebook** — page name, About phone/email, website button.
- [ ] **Instagram / X / TikTok / LinkedIn** — bio website link = `https://www.trusttourstz.com`.
- [ ] **Bookmundi** — new application. *(Day 40 paste-ready pack: [directory-sweep-day40.md](./directory-sweep-day40.md) — description, 4 price-matched tours. Awaiting Ombeni to apply; selective platform, not guaranteed.)*
- [ ] **YourAfricanSafari** — check for an existing (unclaimed) auto-indexed listing before creating one. *(Same Day 40 doc, §3.)*
- ~~TourRadar~~ — not currently onboarding new operators; parked, not a checklist item. *(Day 40 doc, §2.)*
- ~~TATO membership~~ — paid application, Ombeni's call, not an SEO task. *(Day 40 doc, §4.)*

### Social profile URLs — RESOLVED 2026-07-23 (was a Day 41 item)
The verified GBP "Social profiles" panel gave us Google's own canonical URLs, so `data/social.ts` was cleaned early:
- Instagram → `https://www.instagram.com/trust.tours.safaristanzania/` (was `?igsh=` share link)
- Facebook → `https://www.facebook.com/Trust.Tours.Safaris.Tanzania` (was `/share/1D6QCmgBpe/`)
- TikTok → `https://www.tiktok.com/@trusttourstanzania` (was `vm.tiktok.com` redirect)
- LinkedIn → `https://www.linkedin.com/company/trust-tours-safaris-company-tanzania` (was an activity permalink with UTM)
- X → `https://x.com/TrustSafaris` (already clean)
- YouTube → `https://www.youtube.com/channel/UCVmG90HUjOZOj3l_wQq9uXw` added to the org `sameAs` in `app/layout.tsx` (not a footer icon).

These feed the `sameAs` entity array, so the site→social connection is now consistent with what Google already knows.
