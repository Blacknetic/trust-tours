"use client";

import { useEffect } from "react";

// Ad/social click IDs and campaign tags that platforms append to shared links
// (e.g. ?fbclid=... from Facebook). They make URLs ugly when visitors copy or
// share them, so we remove them from the address bar after landing.
const TRACKING_PARAMS = [
  "fbclid", // Facebook / Instagram
  "gclid", // Google Ads
  "gclsrc",
  "gbraid",
  "wbraid",
  "dclid", // Google Display
  "msclkid", // Microsoft/Bing Ads
  "twclid", // Twitter/X
  "ttclid", // TikTok
  "igshid", // Instagram share
  "igsh",
  "li_fat_id", // LinkedIn
  "mc_cid", // Mailchimp
  "mc_eid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
];

function stripParams() {
  const url = new URL(window.location.href);
  let changed = false;
  for (const param of TRACKING_PARAMS) {
    if (url.searchParams.has(param)) {
      url.searchParams.delete(param);
      changed = true;
    }
  }
  if (!changed) return;
  // replaceState rewrites the address bar without reloading or adding a
  // history entry, so back/forward behaviour is unaffected.
  window.history.replaceState(window.history.state, "", url.toString());
}

export default function StripTrackingParams() {
  useEffect(() => {
    // Wait for the window load event so GA4 (and any other analytics that read
    // the landing URL) capture the original params for attribution first.
    if (document.readyState === "complete") {
      stripParams();
      return;
    }
    window.addEventListener("load", stripParams, { once: true });
    return () => window.removeEventListener("load", stripParams);
  }, []);

  return null;
}
