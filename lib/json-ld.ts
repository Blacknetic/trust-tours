// Serialize a JSON-LD object for embedding in a <script> via
// dangerouslySetInnerHTML. Escapes "<" so the data can never break out of the
// script tag (e.g. a stray "</script>" in any field) — defense-in-depth even
// though our structured data is author-controlled.
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
