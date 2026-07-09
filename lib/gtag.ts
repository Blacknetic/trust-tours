// Fires a GA4 event when gtag.js is present. It only loads where
// NEXT_PUBLIC_GA_ID is set (see components/GoogleAnalytics.tsx), so callers
// can invoke this unconditionally.
export function trackEvent(name: string, params?: Record<string, unknown>) {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", name, params);
}
