"use client";

import { useSyncExternalStore } from "react";

// navigator.webdriver is unavailable during SSR and never changes after
// mount, so there's nothing to subscribe to — useSyncExternalStore just
// needs to report the real client value once hydration completes, without
// the mismatch (or the "setState in an effect" anti-pattern) a
// useState+useEffect version would produce.
const subscribe = () => () => {};
const getSnapshot = () => !navigator.webdriver;
const getServerSnapshot = () => false;

// True once we've confirmed, client-side, that this isn't an automated
// browser (Selenium/Puppeteer/Playwright/headless Chrome's default profile
// all set navigator.webdriver = true). Used to keep analytics/chat scripts
// from firing for that traffic — GA4's own bot filter only catches the
// IAB-listed crawlers, not generic automation.
export function useNotBot(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
