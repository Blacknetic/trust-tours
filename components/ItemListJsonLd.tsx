import type { TripPackage } from "@/data/packages";
import { packagePath } from "@/data/packages";
import { jsonLd } from "@/lib/json-ld";

const BASE = "https://www.trusttourstz.com";

// Emits schema.org ItemList JSON-LD for a category/listing page — one ListItem
// per package shown, in display order. Helps Google understand a listing page
// as a structured collection of tours rather than loose text.
export default function ItemListJsonLd({
  packages,
  name,
}: {
  packages: TripPackage[];
  name: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: packages.length,
    itemListElement: packages.map((pkg, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pkg.title,
      url: `${BASE}${packagePath(pkg)}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
