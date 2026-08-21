# Directory sweep 2 — general/platform (Day 41)

Bing Places and Apple Business Connect are new sign-ups; Facebook and LinkedIn already exist and just need an audit. Everything below is paste-ready, matching [nap-canonical.md](./nap-canonical.md) character-for-character.

---

## 1. Bing Places — new sign-up

**Sign up:** [bing.com/places](https://www.bing.com/places) — free, verification usually by phone call or postcard (faster than Google's postcard-only option).

### Company description (paste-ready)

```
Trust Tours & Safaris is a TALA-licensed, owner-led tour operator based in Arusha, Tanzania, running trips since 2008. We specialise in private northern-circuit safaris — the Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara — the Great Migration and calving season, alongside Kilimanjaro and Mount Meru climbs, Zanzibar beach stays and cultural tours.

Every trip is private and tailored: you tell us your dates, group size and budget, and we build the itinerary around you and reply — usually within a day. We run our own vehicles, guides and crews rather than subcontracting.

Licensed as a TALA Tourism Agent (Class A), licence number 014216. Rated 5.0 on TripAdvisor.
```

### Profile fields

| Field | Value |
|---|---|
| Business name | Trust Tours & Safaris |
| Category | Tour Operator / Travel Agency |
| Phone | +255 785 938 860 |
| Website | https://www.trusttourstz.com |
| Email | info@trusttourstz.com |
| Address | Arusha, Tanzania *(street address pending — see nap-canonical.md)* |
| Hours | Match whatever's set on the Google Business Profile once Ombeni confirms them |

Once live, the profile URL gets added to `sameAs` in `app/layout.tsx` and logged in the Directory & Citations sheet — not before, since an unclaimed/pending listing has no confirmed public URL yet.

---

## 2. Apple Business Connect — new sign-up

**Sign up:** [businessconnect.apple.com](https://businessconnect.apple.com) — free, requires an Apple ID and puts the business on Apple Maps + Siri results. Verification is typically instant for an address Apple already has in Maps, or a short manual review otherwise.

Same company description and profile fields as the Bing Places section above — Apple's form fields are nearly identical (name, category, phone, website, hours, description).

**One extra Apple-specific field:** they support uploading a "Showcase" — a short highlights section similar to a GBP post. Paste-ready version:

```
Climb Kilimanjaro or Mount Meru, track the Great Migration, or relax on Zanzibar's beaches — all privately guided, TALA-licensed, and run by our own crew from Arusha since 2008.
```

Same rule as Bing: don't add the URL to `sameAs` until the listing is confirmed live.

---

## 3. Facebook page — audit (already exists, no new sign-up)

Page: [facebook.com/Trust.Tours.Safaris.Tanzania](https://www.facebook.com/Trust.Tours.Safaris.Tanzania)

Checklist for Ombeni to run on the existing page:

- [ ] **About section** — phone, email, website match the canonical NAP exactly (www, https)
- [ ] **CTA button** — set to "Send Message" or "Learn More" pointing directly at `https://www.trusttourstz.com`, not a booking-form app or nothing
- [ ] **Services tab** — filled in with the same core offerings as the site (Kilimanjaro climbs, Tanzania safaris, Zanzibar, cultural tours) — currently likely empty or generic
- [ ] **Page category** — set to Tour Operator or Travel Agency, not a generic "Local Business"
- [ ] **Pinned post** — worth pinning something evergreen (e.g. the licence-verification or "why book direct" message) rather than whatever's most recent by default

Nothing here needs a code change — `sameAs` already includes the correct Facebook URL.

---

## 4. LinkedIn company page — audit (already exists, no new sign-up)

Page: [linkedin.com/company/trust-tours-safaris-company-tanzania](https://www.linkedin.com/company/trust-tours-safaris-company-tanzania)

Checklist:

- [ ] **Website link** — points to `https://www.trusttourstz.com` (www, https)
- [ ] **About section** — same company description as used everywhere else, not left blank
- [ ] **Industry** — set to "Travel Arrangements" or "Hospitality," not left as default
- [ ] **Logo/cover image** — matches the brand assets used elsewhere (same logo file as the site favicon/header)

Also already correctly present in `sameAs` — audit only, no code change needed.

---

## Code state — verified, no changes needed today

Checked `app/layout.tsx`'s `sameAs` array against `data/social.ts` and `nap-canonical.md`: Instagram, Facebook, X, TikTok, LinkedIn, YouTube, SafariBookings and TripAdvisor are all present and match canonical URLs exactly. Bing Places and Apple Business Connect URLs will be added here once those listings go live — tracked as a follow-up, not done now with placeholder links.

## To-do list for Mr Ombeni

1. Sign up for **Bing Places** and **Apple Business Connect** using the paste-ready content above.
2. Run the **Facebook audit** checklist — CTA button and Services tab are the two most likely to actually be missing.
3. Run the **LinkedIn audit** checklist — website link and About section are the two most likely gaps.
4. Send me the two new profile URLs once Bing/Apple are live so I can add them to `sameAs` and deploy.
