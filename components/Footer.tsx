import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

const KILI_LINKS = [
  { href: "/kilimanjaro/7-day-machame-route", label: "7-Day Machame Route" },
  { href: "/kilimanjaro/9-day-northern-circuit", label: "9-Day Northern Circuit" },
  { href: "/kilimanjaro/8-day-lemosho-route", label: "8-Day Lemosho Route" },
  { href: "/kilimanjaro/6-day-marangu-route", label: "6-Day Marangu Route" },
];

const SAFARI_LINKS = [
  { href: "/safaris/7-day-great-migration-safari", label: "7-Day Migration Safari" },
  { href: "/safaris/7-day-tanzania-zanzibar", label: "7-Day Safari + Zanzibar" },
  { href: "/trekking/3-day-mount-meru-momela", label: "3-Day Mount Meru" },
];

const WA_URL = `https://wa.me/255785938860?text=${encodeURIComponent(
  "Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris."
)}`;

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--forest)",
        color: "rgba(251,248,241,0.72)",
        borderTop: "1px solid rgba(176,130,42,0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <p
            className="font-extrabold text-xl mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--paper)" }}
          >
            Trust Tours &amp; Safaris
          </p>
          <p className="text-sm leading-relaxed mb-4">
            Arusha-based operator leading climbs on Kilimanjaro and safaris
            across northern Tanzania. Plan directly with Ombeni on WhatsApp.
          </p>
          <p className="text-xs" style={{ color: "rgba(251,248,241,0.4)" }}>
            Licensed Tourism Agent (Class A) · TALA License No. 014216
          </p>
          <SocialLinks className="-ml-2 mt-5" linkClassName="text-paper/70 hover:text-gold" />
        </div>

        {/* Kilimanjaro */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--gold)" }}
          >
            Kilimanjaro
          </h3>
          <ul className="space-y-2">
            {KILI_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "inherit" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Safaris & Trekking */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--gold)" }}
          >
            Safaris &amp; Trekking
          </h3>
          <ul className="space-y-2">
            {SAFARI_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "inherit" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--gold)" }}
          >
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
                style={{ color: "inherit" }}
              >
                WhatsApp: +255 785 938 860
              </a>
            </li>
            <li>
              {/* TODO: confirm email address with Ombeni */}
              <a
                href="mailto:info@trusttourstz.com"
                className="transition-colors hover:text-white"
                style={{ color: "inherit" }}
              >
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
            <li style={{ color: "rgba(251,248,241,0.5)" }}>Arusha, Tanzania</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: "rgba(251,248,241,0.4)" }}>
          <p>© {new Date().getFullYear()} Trust Tours &amp; Safaris. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="transition-colors hover:text-white" style={{ color: "inherit" }}>About</Link>
            <Link href="/reviews" className="transition-colors hover:text-white" style={{ color: "inherit" }}>Reviews</Link>
            <Link href="/contact" className="transition-colors hover:text-white" style={{ color: "inherit" }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
