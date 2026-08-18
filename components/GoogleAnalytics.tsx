"use client";

import Script from "next/script";
import { useNotBot } from "@/lib/useNotBot";

// GA4 measurement ID (G-XXXXXXXXXX). Inlined at build time — set it in
// .env.local and in the hosting environment. When unset (local dev, preview
// builds), no analytics load at all.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  // See lib/useNotBot.ts — GA4's own bot filter only catches IAB-listed
  // crawlers, which is why Clarity kept showing large Singapore/Oregon
  // datacenter sessions with real engagement events.
  const allow = useNotBot();

  if (!GA_ID || !allow) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
