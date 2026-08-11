"use client";

import Script from "next/script";

// Crisp live-chat widget. The Website ID is public (it ships in the page that
// loads on every visitor's browser), so it lives here in source rather than in
// an env var. Manage conversations at https://app.crisp.chat.
//
// Kept deliberately subtle:
//   • position:reverse — bottom-LEFT, clear of the WhatsApp button (bottom-right).
//   • hide:on:away     — the bubble only appears when an operator is online; when
//                        the team is away it stays fully hidden (no floating
//                        bubble, no auto-greeting nagging visitors).
//
// strategy="lazyOnload" (not afterInteractive): Crisp opens a WebSocket and
// loads its own SDK — the heaviest of the site's third-party scripts — and
// since it stays invisible until an operator is online anyway, there's no
// reason for it to compete for the main thread right at hydration, when INP
// is most sensitive. Real-user Clarity data (Aug 2026) showed poor INP on
// every page; this was the clearest global lever without touching component code.
const CRISP_WEBSITE_ID = "5f0209e9-8c97-49e4-be59-64c2946b0dc6";

export default function CrispChat() {
  return (
    <Script id="crisp-widget" strategy="lazyOnload">
      {`window.$crisp=[];window.CRISP_WEBSITE_ID="${CRISP_WEBSITE_ID}";window.$crisp.push(["config","position:reverse",[true]]);window.$crisp.push(["config","hide:on:away",[true]]);(function(){var d=document,s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}
    </Script>
  );
}
