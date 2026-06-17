// Lightweight in-memory, per-key fixed-window rate limiter.
//
// Zero dependencies — protects against bursty abuse (form spam / email-bombing
// / serverless saturation) without an external store. NOTE: state lives in the
// module scope of a single serverless instance, so under heavy horizontal
// scaling the effective limit is (limit × warm instances). That's fine for a
// low-volume contact form; swap in @upstash/ratelimit + Redis if you later need
// a hard global cap shared across instances.

interface Window {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Window>();

// Opportunistic cleanup so the Map can't grow unbounded from unique IPs.
function sweep(now: number) {
  if (buckets.size < 5000) return;
  for (const [key, w] of buckets) {
    if (w.resetAt <= now) buckets.delete(key);
  }
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  retryAfterSec: number;
}

/**
 * @param key       Identifier to throttle on (e.g. client IP).
 * @param limit     Max requests allowed per window.
 * @param windowMs  Window length in milliseconds.
 */
export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const w = buckets.get(key);
  if (!w || w.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1, retryAfterSec: 0 };
  }

  if (w.count >= limit) {
    return { ok: false, remaining: 0, retryAfterSec: Math.ceil((w.resetAt - now) / 1000) };
  }

  w.count += 1;
  return { ok: true, remaining: limit - w.count, retryAfterSec: 0 };
}

/** Best-effort client IP from proxy headers (Vercel/standard proxies). */
export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}
