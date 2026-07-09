// IndexNow submission helper — notifies Bing (and other IndexNow engines) the
// instant content is added, updated, or removed. Bing's Webmaster Guidelines
// lean on IndexNow as the primary freshness/discovery channel (#2, #4, #9, #19),
// and prefer small "streaming" submissions over large batches.
//
// The key is published as a plaintext file at /<key>.txt so IndexNow can verify
// ownership. Keep KEY and public/<KEY>.txt in sync.

export const INDEXNOW_KEY = "52449f3f2713ceacf6a1f19888d8ea4c";
export const INDEXNOW_HOST = "www.trusttourstz.com";

const ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

/**
 * Submit one or more URLs to IndexNow. URLs must be absolute and on INDEXNOW_HOST.
 * Returns the HTTP status (200/202 = accepted). Never throws — logs and returns
 * the status so callers (webhooks, scripts) can decide what to do.
 */
export async function submitToIndexNow(urls: string[]): Promise<number> {
  if (urls.length === 0) return 0;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });

  return res.status;
}
