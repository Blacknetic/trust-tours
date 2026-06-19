// data/guides.ts — evergreen travel guides for /guides (Phase 2B).
// Informational content distilled from Ombeni's source docs into clean,
// original articles. Each guide can link to relevant packages.

export type GuideTopic =
  | "Kilimanjaro"
  | "Safari"
  | "Zanzibar"
  | "Planning"
  | "Health & Safety";

export interface GuideSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  topic: GuideTopic;
  excerpt: string;
  updated: string; // ISO date
  readMinutes: number;
  // AEO: a one-paragraph direct answer to the page's primary question, shown in a
  // highlighted box up top and ideal for featured snippets / answer engines.
  keyTakeaway: string;
  intro: string;
  sections: GuideSection[];
  faqs?: { question: string; answer: string }[];
  // Conversion: the main booking page this guide should funnel to (diamond → money page).
  primaryCta: { label: string; href: string };
  relatedGuides?: string[]; // guide slugs — lateral interlinking
  relatedPackages?: string[]; // package slugs — link down to bookable trips
}

export const guides: Guide[] = [
  {
    slug: "how-long-to-climb-kilimanjaro",
    title: "How Long Does It Take to Climb Kilimanjaro?",
    topic: "Kilimanjaro",
    excerpt:
      "Five to nine days — and why the longer routes reach the summit far more often.",
    updated: "2026-06-19",
    readMinutes: 6,
    keyTakeaway:
      "Climbing Kilimanjaro takes 5 to 9 days. The longer routes (7–9 days) reach the summit far more often because they give your body time to acclimatize to the altitude — the single biggest factor in success.",
    primaryCta: { label: "Compare all Kilimanjaro routes", href: "/kilimanjaro" },
    relatedGuides: [
      "best-kilimanjaro-route",
      "how-much-does-it-cost-to-climb-kilimanjaro",
      "altitude-sickness-on-kilimanjaro",
    ],
    intro:
      "It takes five to nine days to reach Uhuru Peak and descend again. The single biggest factor in whether you summit isn't fitness — it's how many days you give your body to acclimatize to the thin air. Here's how the routes compare and why we almost always recommend going longer.",
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "Kilimanjaro is a 'walk-up' mountain — there's no technical climbing. How long it takes is dictated by acclimatization: the more days you spend gaining altitude slowly, the better your chances of standing on the Roof of Africa.",
          "Trekkers who do the mountain in 5 days have the lowest success rate. Those who take 8 or 9 days have a far better chance of summiting and a more enjoyable, less exhausting climb.",
        ],
      },
      {
        heading: "Why acclimatization is everything",
        paragraphs: [
          "The main reason climbers fail to summit is simply that they haven't acclimatized. Going slowly — 'pole pole' as the guides say — lets your body adapt to the lack of oxygen. Controlling the rate of ascent is the most effective way to prevent altitude illness.",
          "Fitness helps you enjoy the trek and reduces fatigue, but it does not protect you from altitude sickness. Older estimates put 5-day success around 27% versus roughly 85% for 8-day climbs — a stark illustration of why extra days matter.",
        ],
      },
      {
        heading: "How long each route takes",
        bullets: [
          "Marangu Route — 5–6 days (the only hut route; we recommend the 6-day version)",
          "Umbwe Route — 6 days (steep and direct)",
          "Rongai Route — 6–7 days (quiet, approaches from the north)",
          "Machame Route — 6–7 days (scenic and popular; 7 days recommended)",
          "Lemosho Route — 7–9 days (excellent acclimatization)",
          "Northern Circuit — 8–9 days (longest route, highest success rate)",
        ],
      },
      {
        heading: "Is a 5–6 day climb worth the risk?",
        paragraphs: [
          "You can climb Kilimanjaro in 5 or 6 days, and people choose shorter climbs to save money, time, or days of hiking. But a rushed ascent raises the chance of altitude sickness, fatigue and turning back — sometimes on day 3, after you've already paid for the whole trip.",
          "A shorter climb only really makes sense if you've recently been at high altitude (for example a successful Mount Meru or Mount Kenya climb gives useful pre-acclimatization) or you're an experienced high-altitude climber confident in how your body adjusts.",
        ],
      },
      {
        heading: "How long does the descent take?",
        paragraphs: [
          "Descending from Uhuru Peak to the finish gate takes about two days — typically a long summit-day descent to a final camp, then 4–6 hours down the next morning depending on the route.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does being fit mean I'll acclimatize better?",
        answer:
          "No. Fitness makes the daily hiking easier and less stressful, but altitude specialists are clear that physical fitness gives no protection from altitude sickness. Very fit people sometimes push too hard and ignore warning symptoms.",
      },
      {
        question: "Which route has the highest success rate?",
        answer:
          "The Northern Circuit (8–9 days), thanks to the most acclimatization time, followed by the 8-day Lemosho and 7-day Machame. Longer simply summits more often.",
      },
    ],
    relatedPackages: [
      "7-day-machame-route",
      "8-day-lemosho-route",
      "9-day-northern-circuit",
      "6-day-marangu-route",
    ],
  },

  {
    slug: "best-time-to-visit-tanzania",
    title: "The Best Time to Visit Tanzania",
    topic: "Planning",
    excerpt:
      "June to October is the sweet spot — but the right month depends on what you want to see.",
    updated: "2026-06-19",
    readMinutes: 5,
    keyTakeaway:
      "The best time to visit Tanzania is June to October — the dry season, ideal for both safari game viewing and climbing Kilimanjaro. For the Serengeti calving season go January–March; for the Mara River crossings, August–October.",
    primaryCta: { label: "Browse safari packages", href: "/safaris" },
    relatedGuides: [
      "how-much-does-a-tanzania-safari-cost",
      "tanzania-safari-packing-list",
      "how-long-to-climb-kilimanjaro",
    ],
    intro:
      "Tanzania is a year-round destination, but the dry season from June to October is widely considered the best window for combining a safari with a Kilimanjaro climb — and it pairs perfectly with a Zanzibar beach finish. Here's how the year breaks down.",
    sections: [
      {
        heading: "The best overall window: June–October",
        paragraphs: [
          "This is the long dry season. On safari, wildlife gathers around rivers and waterholes, the grass is shorter and the roads are easier, so game viewing across the Serengeti, Ngorongoro Crater and Tarangire is outstanding.",
          "On Kilimanjaro you get clearer skies, spectacular mountain views, a lower chance of rain and comfortable daytime trekking — the conditions most climbers hope for.",
        ],
      },
      {
        heading: "Month by month",
        bullets: [
          "January–March — Excellent safari (calving season in the southern Serengeti) and excellent climbing",
          "April–May — The long rains; lush and quiet but less ideal for both safari and trekking",
          "June–October — Outstanding for both safari and Kilimanjaro — the prime window",
          "November — Short rains; still very possible, moderate climbing",
          "December — Very good for both, and festive-season green",
        ],
      },
      {
        heading: "Timing the Great Migration",
        paragraphs: [
          "Which month is best depends on what you want to witness:",
        ],
        bullets: [
          "January–March — Calving season in the southern Serengeti, with thousands of wildebeest born daily and intense predator action",
          "June–July — The dramatic river crossings begin in the western corridor",
          "August–October — The famous Mara River crossings in the northern Serengeti — one of Africa's greatest spectacles",
        ],
      },
      {
        heading: "The ideal combination trip",
        paragraphs: [
          "For travellers who want it all, July, August, September or early October offer the best wildlife viewing, excellent climbing conditions and pleasant weather across the north — plus the perfect lead-in to a Zanzibar beach holiday.",
          "A popular full-Tanzania itinerary is 6–8 days climbing Kilimanjaro, 4–6 days on safari in Tarangire, Ngorongoro and the Serengeti, and 3–5 days relaxing in Zanzibar: mountains, wildlife, culture and beaches in one trip.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the rainy season worth avoiding entirely?",
        answer:
          "Not necessarily. April–May is greener, quieter and cheaper, and resident wildlife is still around — but expect wet trails and muddy roads. If your priority is the migration or a comfortable climb, stick to the dry months.",
      },
    ],
    relatedPackages: [
      "7-day-great-migration-safari",
      "7-day-machame-route",
      "5-day-zanzibar-escape",
    ],
  },

  {
    slug: "tanzania-visa-and-passport-requirements",
    title: "Tanzania Visa & Passport Requirements",
    topic: "Planning",
    excerpt:
      "What you need to enter Tanzania — passport validity, visa options, fees and entry points.",
    updated: "2026-06-19",
    readMinutes: 5,
    keyTakeaway:
      "Most visitors need a tourist visa — $50 for a six-month single entry, $100 for US citizens (one-year multiple entry). Your passport must be valid 6+ months with a blank page. Buy it on arrival (cash, USD) or apply via the official e-visa portal.",
    primaryCta: { label: "Start planning your trip", href: "/safaris" },
    relatedGuides: ["tanzania-vaccinations", "best-time-to-visit-tanzania"],
    intro:
      "Most visitors to Tanzania need a visa, and the process is straightforward whether you apply online beforehand or buy one on arrival. Here's what to prepare. (Rules change — always confirm the latest details for your nationality with the Tanzania Immigration Services Department before you travel.)",
    sections: [
      {
        heading: "Passport requirements",
        paragraphs: [
          "Your passport must be valid for at least six months beyond your date of entry and have at least one or two blank pages for stamps. Check your passport early and renew it if needed to avoid last-minute problems.",
        ],
      },
      {
        heading: "Do you need a visa?",
        paragraphs: [
          "Most foreign visitors need a visitor (tourist) visa. Citizens of a few African nations such as Kenya and Uganda are visa-exempt, but travellers from the US, UK, EU, Canada, Australia, New Zealand and India do require one.",
        ],
      },
      {
        heading: "Two ways to get your visa",
        bullets: [
          "Visa on arrival — available at major airports (Kilimanjaro/JRO, Julius Nyerere/Dar, Zanzibar) and land borders. Complete a form, show your passport and pay in cash (USD).",
          "e-Visa (apply online in advance) — via the official portal at eservices.immigration.go.tz/visa. Fill in the form, upload a passport photo and passport copy, and pay by card. Processing is usually a few business days to around 10; you print the approved e-visa and present it on arrival.",
        ],
      },
      {
        heading: "Visa fees (paid in cash on arrival)",
        bullets: [
          "US citizens — $100 for a one-year multiple-entry visa",
          "Non-US citizens — $50 for a six-month single-entry visa",
          "Non-US citizens — $100 for a six-month double-entry visa",
          "Transit visa — around $30",
        ],
      },
      {
        heading: "Entry points",
        paragraphs: [
          "You can enter at Kilimanjaro International (JRO), Julius Nyerere International (Dar es Salaam) and Zanzibar airports, and at land borders including Namanga (Tanzania–Kenya), Tunduma, Sirari, Horohoro and Kigoma port.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I get the visa on arrival or online?",
        answer:
          "Both work. Visa on arrival is usually quick despite occasional queues; the e-visa lets you skip the line and have everything confirmed before you fly. If you prefer certainty, apply online a few weeks ahead.",
      },
      {
        question: "What documents should I have ready?",
        answer:
          "A passport valid 6+ months with blank pages, a completed application, a recent passport photo, proof of onward/return travel, and the fee in cash (USD) if paying on arrival.",
      },
    ],
    relatedPackages: ["7-day-great-migration-safari", "5-day-zanzibar-escape"],
  },

  {
    slug: "altitude-sickness-on-kilimanjaro",
    title: "Altitude Sickness on Kilimanjaro: Risks & Precautions",
    topic: "Health & Safety",
    excerpt:
      "How common altitude sickness is, the warning signs, and how we keep you safe on the mountain.",
    updated: "2026-06-19",
    readMinutes: 6,
    keyTakeaway:
      "Altitude sickness affects 50–75% of Kilimanjaro climbers, but it's usually mild. A longer route, a slow 'pole pole' pace, 3–4 litres of water a day and guides with daily oxygen checks keep the vast majority summiting safely.",
    primaryCta: { label: "See Kilimanjaro routes", href: "/kilimanjaro" },
    relatedGuides: [
      "how-long-to-climb-kilimanjaro",
      "best-kilimanjaro-route",
      "tanzania-vaccinations",
    ],
    intro:
      "At 5,895 m, Kilimanjaro is high enough that altitude sickness affects many climbers regardless of fitness or experience. The good news: with a slow ascent, good guiding and the right precautions, the vast majority of trekkers summit safely. Here's what to know.",
    sections: [
      {
        heading: "How common is it?",
        paragraphs: [
          "Around 50–75% of climbers experience some form of altitude sickness — usually mild (a headache or nausea). The primary cause is ascending too quickly without enough time to acclimatize. Individual susceptibility, hydration and pacing all play a part.",
        ],
      },
      {
        heading: "The three types to know",
        bullets: [
          "Acute Mountain Sickness (AMS) — the common, mild form: headache, nausea, dizziness, fatigue, breathlessness",
          "High Altitude Pulmonary Edema (HAPE) — fluid in the lungs, causing breathing difficulty and chest congestion (serious)",
          "High Altitude Cerebral Edema (HACE) — fluid on the brain, causing confusion and loss of coordination (life-threatening)",
        ],
      },
      {
        heading: "How we reduce the risk",
        bullets: [
          "Slow ascent and longer routes that build in acclimatization time",
          "'Pole pole' (go slowly) pacing, with rest days on routes like Lemosho and Machame",
          "'Climb high, sleep low' days to help your body adjust",
          "Plenty of water — 3–4 litres a day to avoid dehydration",
          "Daily pulse-oximeter checks and guides trained to spot early symptoms",
          "Emergency oxygen carried for the rare serious case",
        ],
      },
      {
        heading: "What to do if you feel symptoms",
        paragraphs: [
          "Mild headaches and slight nausea are common and usually ease with rest, hydration and a slower pace — tell your guide so they can monitor you. If symptoms worsen (confusion, severe breathlessness), the only reliable treatment is to descend immediately, and your guide will arrange a safe descent.",
          "Many trekkers also take acetazolamide (Diamox) as a preventive — discuss this with your doctor before the trip.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I prevent altitude sickness completely?",
        answer:
          "There's no guarantee, but you can dramatically lower the risk: choose a longer route, ascend slowly, hydrate well, and consider Diamox after talking to your doctor. Climbing Mount Meru first is also excellent pre-acclimatization.",
      },
    ],
    relatedPackages: [
      "8-day-lemosho-route",
      "9-day-northern-circuit",
      "3-day-mount-meru-momela",
    ],
  },

  {
    slug: "tanzania-vaccinations",
    title: "Vaccinations & Health for Tanzania",
    topic: "Health & Safety",
    excerpt:
      "Routine jabs, yellow fever rules, malaria prevention and what to sort before you fly.",
    updated: "2026-06-19",
    readMinutes: 6,
    keyTakeaway:
      "No vaccine is universally required for Tanzania except yellow fever — and only if you arrive from a risk country. Routine jabs plus hepatitis A, typhoid and malaria prevention are recommended. See a travel clinic 4–6 weeks before you fly.",
    primaryCta: { label: "Browse Tanzania trips", href: "/safaris" },
    relatedGuides: [
      "tanzania-visa-and-passport-requirements",
      "tanzania-safari-packing-list",
    ],
    intro:
      "A little health planning goes a long way in Tanzania. This is a general overview — visit a travel clinic 4–6 weeks before departure for advice tailored to your itinerary and medical history, and carry your vaccination records (especially the yellow fever certificate).",
    sections: [
      {
        heading: "Routine vaccinations",
        paragraphs: ["Make sure you're up to date on the usual ones:"],
        bullets: [
          "MMR (measles, mumps, rubella)",
          "Diphtheria, tetanus and pertussis (DTP)",
          "Varicella (chickenpox) and polio",
          "Seasonal influenza",
        ],
      },
      {
        heading: "Yellow fever — and when it's mandatory",
        paragraphs: [
          "Tanzania requires proof of yellow fever vaccination if you are arriving from — or have spent more than 12 hours transiting — a country with yellow fever risk. A single dose gives lifelong immunity and you receive the 'Yellow Card' (International Certificate), valid 10 days after vaccination.",
          "If you arrive from a risk country without the certificate you can be denied entry or quarantined, so check your routing carefully and carry the card.",
        ],
      },
      {
        heading: "Recommended vaccinations",
        bullets: [
          "Hepatitis A and typhoid — spread via contaminated food and water",
          "Hepatitis B — recommended, especially for longer stays",
          "Rabies — consider it for remote or outdoor-heavy trips",
          "Cholera and meningococcal meningitis — situational; ask your clinic",
        ],
      },
      {
        heading: "Malaria — no vaccine, prevention is essential",
        paragraphs: [
          "Tanzania, including the areas around Kilimanjaro, is malaria-endemic. There's no vaccine, so take anti-malarial medication as prescribed and prevent bites: insect repellent, long sleeves in the evening, and mosquito nets where provided.",
        ],
      },
      {
        heading: "Before you go",
        paragraphs: [
          "See a travel clinic 4–6 weeks ahead, discuss altitude medication (Diamox) if you're climbing, pack a small kit for traveller's diarrhoea, and stay well hydrated throughout your trip.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I definitely need the yellow fever vaccine?",
        answer:
          "Only if you're arriving from or transiting (12+ hours) a yellow-fever-risk country. Coming directly from somewhere with no risk (e.g. Europe or North America), it's generally not required for entry — but a clinic can confirm based on your exact route.",
      },
    ],
    relatedPackages: ["7-day-machame-route", "7-day-great-migration-safari"],
  },

  {
    slug: "tanzania-safari-packing-list",
    title: "Tanzania Safari Packing List",
    topic: "Planning",
    excerpt:
      "Exactly what to bring — clothing, sun and insect protection, gear and the small things people forget.",
    updated: "2026-06-19",
    readMinutes: 6,
    keyTakeaway:
      "Pack light, in neutral colours, in layers: breathable shirts and trousers, a warm fleece for chilly mornings, sun protection, insect repellent, binoculars and a good camera. Most other gear — 4x4, water, meals — is provided.",
    primaryCta: { label: "See safari packages", href: "/safaris" },
    relatedGuides: [
      "best-time-to-visit-tanzania",
      "tanzania-vaccinations",
      "how-much-does-a-tanzania-safari-cost",
    ],
    intro:
      "Pack light, in neutral colours, and in layers. Tanzanian days are warm but mornings, evenings and the highlands (Ngorongoro, the Serengeti) get cool, so you'll want to add and shed layers through the day. Here's a practical checklist.",
    sections: [
      {
        heading: "Clothing",
        bullets: [
          "Lightweight, breathable, moisture-wicking shirts and trousers",
          "Long sleeves and trousers for sun and insect protection",
          "Neutral colours — khaki, beige, olive (bright colours attract insects and startle wildlife)",
          "A warm fleece or jacket for chilly mornings, evenings and the highlands",
          "Sturdy walking shoes or light hiking boots, plus sandals for the lodge",
        ],
      },
      {
        heading: "Sun & insect protection",
        bullets: [
          "Wide-brimmed hat and UV sunglasses",
          "High-SPF sunscreen and SPF lip balm (reapply often)",
          "Strong insect repellent — mosquitoes are most active at dawn and dusk",
        ],
      },
      {
        heading: "Gear & accessories",
        bullets: [
          "Binoculars — essential for game viewing",
          "Camera with a good zoom lens, spare batteries and memory cards",
          "A small daypack for game drives, plus a refillable water bottle",
          "Portable power bank for long drives with limited charging",
          "Headlamp or flashlight for camp at night",
          "Waterproof/dry bags for electronics and documents",
        ],
      },
      {
        heading: "Documents & health",
        bullets: [
          "Passport (valid 6+ months), visa, travel insurance and any permits",
          "Personal medications and a basic first-aid kit",
          "Anti-malarials and, for climbers, altitude medication if prescribed",
          "Yellow fever certificate if your routing requires it",
        ],
      },
    ],
    faqs: [
      {
        question: "How much should I pack?",
        answer:
          "Less than you think. Most lodges and camps offer laundry, and internal bush flights have strict luggage limits (often ~15 kg in soft bags). Pack versatile layers you can re-wear.",
      },
      {
        question: "What's already provided on safari?",
        answer:
          "Our packages include 4x4 transport with a pop-up roof, accommodation and meals, park fees, an English-speaking guide, bottled water on game drives and emergency evacuation cover — so you only need personal items.",
      },
    ],
    relatedPackages: [
      "5-day-northern-safari",
      "7-day-great-migration-safari",
      "3-day-safari-tarangire-manyara-ngorongoro",
    ],
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

export const GUIDE_TOPICS: GuideTopic[] = [
  "Kilimanjaro",
  "Safari",
  "Zanzibar",
  "Planning",
  "Health & Safety",
];
