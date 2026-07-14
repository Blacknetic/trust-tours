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

## External profiles — match against the table above

Tick each once its Name / phone / website match the canonical values exactly. Owner task (off-repo).

- [ ] **Google Business Profile** — name, phone, website, category (Tour Operator). *(Deep optimization is Day 22.)*
- [ ] **TripAdvisor** — listing shows as "Trust Tours And Safaris Company Tanzania"; ensure phone + website link match. [profile](https://www.tripadvisor.com/Attraction_Review-g297913-d13170128-Reviews-Trust_Tours_And_Safaris_Company_Tanzania-Arusha_Arusha_Region.html)
- [ ] **SafariBookings** (profile p3691) — company name, phone, website. *(Full optimization is Day 23.)*
- [ ] **Facebook** — page name, About phone/email, website button.
- [ ] **Instagram / X / TikTok / LinkedIn** — bio website link = `https://www.trusttourstz.com`.

### Known issue to fix (Day 41)
Social links in `data/social.ts` are share/tracking URLs, not canonical profile URLs (LinkedIn is an activity permalink with UTM params; TikTok/Facebook/Instagram are share links). Replace with clean profile URLs when doing the Day 41 directory/profile sweep, and update the org `sameAs` array to match.
