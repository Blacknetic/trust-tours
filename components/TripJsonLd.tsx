import type { TripPackage } from "@/data/packages";
import { CATEGORY_PATH } from "@/data/packages";
import { packageImage } from "@/data/images";
import { jsonLd } from "@/lib/json-ld";

const BASE = "https://www.trusttourstz.com";

interface Props {
  pkg: TripPackage;
  pageUrl: string;
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
    graph.push({
      "@type": "Product",
      "@id": `${pageUrl}#product`,
      name: pkg.title,
      description: pkg.summary,
      // Google requires `image` for Product — without it the page is ineligible
      // for Product rich results (and therefore for review stars).
      ...(image && { image: `${BASE}${image}` }),
      brand: { "@type": "Brand", name: "Trust Tours & Safaris" },
      offers: {
        "@type": "Offer",
        price: pkg.priceFromUSD,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: pageUrl,
        seller: { "@type": "Organization", name: "Trust Tours & Safaris" },
      },
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
