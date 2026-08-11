"use client";

import { trackEvent } from "@/lib/gtag";

const WA_NUMBER = "255785938860";
const WA_MESSAGE =
  "Hi Ombeni! I'd like to plan a Tanzania trip with Trust Tours & Safaris.";

/**
 * Primary hero CTA — a direct wa.me link (same URL pattern the floating
 * WhatsAppButton widget builds internally) so it works with zero JS, plus a
 * `whatsapp_click` GA4 event on click to match the tracking already fired by
 * that widget and by other WhatsApp entry points on the site.
 */
export default function HeroWhatsAppCTA({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { page_slug: "/" })}
      className={className}
      style={style}
    >
      Message Ombeni on WhatsApp
    </a>
  );
}
