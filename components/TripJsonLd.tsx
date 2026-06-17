import type { TripPackage } from "@/data/packages";

interface Props {
  pkg: TripPackage;
  pageUrl: string;
}

export default function TripJsonLd({ pkg, pageUrl }: Props) {
  const graph: object[] = [
    {
      "@type": "TouristTrip",
      "@id": `${pageUrl}#trip`,
      name: pkg.title,
      description: pkg.summary,
      tourOperator: {
        "@type": "TouristInformationCenter",
        name: "Trust Tours & Safaris",
        url: "https://trusttourstz.com",
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
        { "@type": "ListItem", position: 1, name: "Home", item: "https://trusttourstz.com" },
        {
          "@type": "ListItem",
          position: 2,
          name: pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1),
          item: `https://trusttourstz.com/${pkg.category}`,
        },
        { "@type": "ListItem", position: 3, name: pkg.title, item: pageUrl },
      ],
    },
  ];

  if (pkg.priceFromUSD > 0) {
    graph.push({
      "@type": "Product",
      "@id": `${pageUrl}#product`,
      name: pkg.title,
      description: pkg.summary,
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
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
