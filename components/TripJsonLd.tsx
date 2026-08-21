import type { TripPackage } from "@/data/packages";
import { CATEGORY_PATH } from "@/data/packages";
import { packageImage } from "@/data/images";
import { jsonLd } from "@/lib/json-ld";
import { paxLadder, PAX_COLUMNS, MAX_PAX, ladderLow, ladderHigh } from "@/lib/pricing";

const BASE = "https://www.trusttourstz.com";

interface Props {
  pkg: TripPackage;
  pageUrl: string;
}

const SELLER = { "@type": "Organization", name: "Trust Tours & Safaris" };

/**
 * Trips with a group-size ladder have no single price, so they emit an
 * AggregateOffer (Google surfaces `lowPrice` in rich results) wrapping one
 * Offer per party size, each tagged with the `eligibleQuantity` it applies to.
 * Everything else keeps the plain single Offer.
 */
function buildOffers(pkg: TripPackage, pageUrl: string) {
  const base = {
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: pageUrl,
    seller: SELLER,
  };

  if (!pkg.groupPricing) {
    return { "@type": "Offer", price: pkg.priceFromUSD, ...base };
  }

  const ladder = paxLadder(pkg.groupPricing);
  return {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: ladderLow(ladder),
    highPrice: ladderHigh(ladder),
    offerCount: ladder.length,
    offers: ladder.map((price, i) => {
      const pax = PAX_COLUMNS[i];
      return {
        "@type": "Offer",
        name: `${pkg.title} — ${pax === MAX_PAX ? `${pax}+` : pax} ${pax === 1 ? "traveller" : "travellers"}`,
        price,
        eligibleQuantity: {
          "@type": "QuantitativeValue",
          unitCode: "IE", // UN/CEFACT code for "person"
          minValue: pax,
          ...(pax < MAX_PAX && { maxValue: pax }),
        },
        ...base,
      };
    }),
  };
}

export default function TripJsonLd({ pkg, pageUrl }: Props) {
  // Category label/URL for breadcrumbs. The URL segment differs from the raw
  // category for safari ("safari" -> "/safaris"), so always go through CATEGORY_PATH.
  const categorySegment = CATEGORY_PATH[pkg.category];
  const categoryName =
    categorySegment.charAt(0).toUpperCase() + categorySegment.slice(1);
  const graph: object[] = [
    {
      "@type": "TouristTrip",
      "@id": `${pageUrl}#trip`,
      name: pkg.title,
      description: pkg.summary,
      tourOperator: {
        "@type": "TouristInformationCenter",
        name: "Trust Tours & Safaris",
        url: "https://www.trusttourstz.com",
        telephone: "+255785938860",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Arusha",
          addressCountry: "TZ",
        },
      },
      ...(pkg.itinerary.length > 0 && {
        itinerary: pkg.itinerary.map((day) => ({
          "@type": "TouristAttraction",
          name: day.title,
          description: day.description,
        })),
      }),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.trusttourstz.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: categoryName,
          item: `${BASE}/${categorySegment}`,
        },
        { "@type": "ListItem", position: 3, name: pkg.title, item: pageUrl },
      ],
    },
  ];

  const image = packageImage(pkg);

  if (pkg.priceFromUSD > 0) {
    // Item-level Review objects, mapped from the real review snippets shown on
    // the page (components/PackagePageView.tsx) so the markup reflects visible
    // content. These are what earn star snippets on the tour page in search —
    // deliberately per-Product; the org-level AggregateRating stays only on
    // /reviews and is not sprayed sitewide.
    const reviews = (pkg.reviewSnippets ?? []).slice(0, 3).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      // "TripAdvisor, Oct 2023" → publisher "TripAdvisor".
      publisher: { "@type": "Organization", name: r.source.split(",")[0].trim() },
    }));

    graph.push({
      "@type": "Product",
      "@id": `${pageUrl}#product`,
      name: pkg.title,
      description: pkg.summary,
      // Google requires `image` for Product — without it the page is ineligible
      // for Product rich results (and therefore for review stars).
      ...(image && { image: `${BASE}${image}` }),
      brand: { "@type": "Brand", name: "Trust Tours & Safaris" },
      ...(reviews.length > 0 && { review: reviews }),
      offers: buildOffers(pkg, pageUrl),
    });
  }

  if (pkg.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: pkg.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: jsonLd({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
