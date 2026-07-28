import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

// ── Guide columns, grouped by topic (data/guides.ts) ────────────────────
const KILI_GUIDES = [
  { href: "/guides/climbing-kilimanjaro-guide", label: "Climbing Kilimanjaro guide" },
  { href: "/guides/best-kilimanjaro-route", label: "Which route is best?" },
  { href: "/guides/kilimanjaro-success-rate", label: "Summit success rates" },
  { href: "/guides/kilimanjaro-packing-list", label: "Kilimanjaro packing list" },
  { href: "/guides/how-much-to-climb-kilimanjaro", label: "How much it costs" },
  { href: "/guides/mount-meru-climb-guide", label: "Climbing Mount Meru" },
];

const SAFARI_GUIDES = [
  { href: "/guides/tanzania-safari-guide", label: "Tanzania safari guide" },
  { href: "/guides/best-time-great-migration", label: "Great Migration by month" },
  { href: "/guides/serengeti-guide", label: "Serengeti National Park" },
  { href: "/guides/ngorongoro-crater-guide", label: "Ngorongoro Crater" },
  { href: "/guides/calving-season-guide", label: "Calving season" },
  { href: "/guides/how-much-tanzania-safari-cost", label: "What a safari costs" },
];

const ZANZIBAR_GUIDES = [
  { href: "/guides/zanzibar-travel-guide", label: "Zanzibar travel guide" },
  { href: "/guides/best-beaches-zanzibar", label: "Best beaches" },
  { href: "/guides/stone-town-guide", label: "Stone Town guide" },
  { href: "/guides/things-to-do-zanzibar", label: "Things to do" },
  { href: "/guides/best-time-to-visit-zanzibar", label: "Best time to visit" },
];

const USEFUL_INFO = [
  { href: "/guides/best-time-to-visit-tanzania", label: "Best time to visit Tanzania" },
  { href: "/guides/tanzania-visa-and-passport-requirements", label: "Visa & passport" },
  { href: "/guides/tipping-in-tanzania", label: "Tipping in Tanzania" },
  { href: "/guides/travel-insurance-tanzania", label: "Travel insurance" },
  { href: "/guides/is-tanzania-safe", label: "Is Tanzania safe?" },
  { href: "/guides/how-to-choose-tour-operator", label: "Choosing an operator" },
];

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris."
)}`;

const linkClass = "text-sm transition-colors hover:text-white";

function GuideColumn({
  title,
  titleHref,
  links,
}: {
  title: string;
  titleHref: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">
        <Link href={titleHref} className="transition-colors hover:opacity-80" style={{ color: "var(--gold)" }}>
          {title}
        </Link>
      </h3>
      <ul className="space-y-2.5">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className={linkClass} style={{ color: "inherit" }}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--forest)",
        color: "rgba(255,255,255,0.95)",
        borderTop: "1px solid rgba(176,130,42,0.3)",
      }}
    >
      {/* ── Brand + trust band ──────────────────────────────────────── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="font-extrabold text-xl mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}>
              Trust Tours &amp; Safaris
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ maxWidth: "46ch" }}>
              A small, licensed, Arusha-based operator leading Kilimanjaro climbs,
              northern Tanzania safaris and Zanzibar beach escapes. We run our own
              crews and plan every trip with you directly.
            </p>
            <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.95)" }}>
              Licensed Tourism Agent (Class A) · TALA License No. 014216
            </p>
            <SocialLinks className="-ml-2" linkClassName="text-paper/70 hover:text-gold" />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:pt-1">
            {[
              ["Licensed Class A", "TALA License No. 014216"],
              ["Our own crew", "We drive, cook & guide every trip"],
              ["Plan with the founder", "Talk to Ombeni — not a call centre"],
            ].map(([head, sub]) => (
              <div key={head} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-0.5 text-base" style={{ color: "var(--gold)" }}>✓</span>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--paper)" }}>{head}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.95)" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Guide columns by topic + contact ────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
        <GuideColumn title="Kilimanjaro & Trekking" titleHref="/kilimanjaro" links={KILI_GUIDES} />
        <GuideColumn title="Safari" titleHref="/safaris" links={SAFARI_GUIDES} />
        <GuideColumn title="Zanzibar" titleHref="/zanzibar" links={ZANZIBAR_GUIDES} />

        {/* Useful information */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-4">
            <Link href="/guides" className="transition-colors hover:opacity-80" style={{ color: "var(--gold)" }}>
              Useful Information
            </Link>
          </h3>
          <ul className="space-y-2.5">
            {USEFUL_INFO.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={linkClass} style={{ color: "inherit" }}>
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/guides" className="text-sm font-semibold transition-colors hover:text-white" style={{ color: "var(--gold)" }}>
                All 45 guides →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white" style={{ color: "inherit" }}>
                WhatsApp: +255 785 938 860
              </a>
            </li>
            <li>
              <a href="mailto:info@trusttourstz.com" className="transition-colors hover:text-white" style={{ color: "inherit" }}>
                info@trusttourstz.com
              </a>
            </li>
            <li>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g297913-d13170128-Reviews-Trust_Tours_And_Safaris_Company_Tanzania-Arusha_Arusha_Region.html"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                style={{ color: "inherit" }}
              >
                Reviews on TripAdvisor →
              </a>
            </li>
            <li style={{ color: "rgba(255,255,255,0.95)" }}>Arusha, Tanzania</li>
            <li className="pt-1" style={{ color: "rgba(255,255,255,0.95)" }}>
              We typically reply within a few hours.
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.95)" }}>
          <p>
            © {new Date().getFullYear()} Trust Tours &amp; Safaris · Licensed Tourism Agent (Class A) · TALA No. 014216
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="transition-colors hover:text-white" style={{ color: "inherit" }}>About</Link>
            <Link href="/guides" className="transition-colors hover:text-white" style={{ color: "inherit" }}>Guides</Link>
            <Link href="/faq" className="transition-colors hover:text-white" style={{ color: "inherit" }}>FAQ</Link>
            <Link href="/reviews" className="transition-colors hover:text-white" style={{ color: "inherit" }}>Reviews</Link>
            <Link href="/contact" className="transition-colors hover:text-white" style={{ color: "inherit" }}>Contact</Link>
            <Link href="/cancellation-policy" className="transition-colors hover:text-white" style={{ color: "inherit" }}>Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
