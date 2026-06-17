import { ImageResponse } from "next/og";

// Default social share image for the whole site (inherited by routes that
// don't define their own). Brand tokens mirrored from globals.css.
export const alt = "Trust Tours & Safaris — Kilimanjaro Climbs & Tanzania Safaris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens mirrored from globals.css — strictly brown & white.
const INK = "#1a1a16";
const PAPER = "#fbf8f1";
const FOREST = "#4a2912";
const GOLD = "#8a5a32";
const SUNSET = "#6e3b1f";

export default function Image() {
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

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              maxWidth: "920px",
            }}
          >
            Climb Kilimanjaro. Track the Great Migration.
          </div>
          <div style={{ fontSize: "32px", color: "rgba(251,248,241,0.82)" }}>
            Licensed Tanzania operator · Plan directly with Ombeni
          </div>
        </div>

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
          <div style={{ color: "rgba(251,248,241,0.7)", display: "flex" }}>
            WhatsApp +255 785 938 860
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
