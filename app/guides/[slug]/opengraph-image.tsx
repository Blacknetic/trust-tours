import { ImageResponse } from "next/og";
import { guides, getGuide } from "@/data/guides";

// Per-guide social share card — branded, title-bearing preview for when a guide
// is shared on WhatsApp / social. Brand tokens mirrored from globals.css.
export const alt = "Trust Tours & Safaris travel guide";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Prerender one card per guide alongside the static pages.
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

const INK = "#1a1a16";
const PAPER = "#fbf8f1";
const FOREST = "#4a2912";
const GOLD = "#8a5a32";
const SUNSET = "#6e3b1f";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const title = guide?.title ?? "Tanzania Travel Guide";
  const topic = guide?.topic ?? "Travel Guide";
  const minutes = guide?.readMinutes;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: `linear-gradient(135deg, ${FOREST} 0%, ${INK} 55%, ${SUNSET} 140%)`,
          color: PAPER,
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: GOLD,
              color: INK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 800,
            }}
          >
            T
          </div>
          <div style={{ fontSize: "30px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            Trust Tours &amp; Safaris
          </div>
        </div>

        {/* Topic eyebrow + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 20px",
              borderRadius: "999px",
              background: GOLD,
              color: INK,
              fontSize: "26px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            {topic} Guide
          </div>
          <div
            style={{
              fontSize: title.length > 48 ? "60px" : "72px",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-1.5px",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "26px" }}>
          <div
            style={{
              padding: "10px 22px",
              borderRadius: "999px",
              background: GOLD,
              color: INK,
              fontWeight: 700,
              display: "flex",
            }}
          >
            trusttourstz.com
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", display: "flex" }}>
            {minutes ? `${minutes} min read · Free travel guide` : "Free travel guide"}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
