import type { Guide } from "@/data/guides";
import { jsonLd } from "@/lib/json-ld";

const SITE = "https://www.trusttourstz.com";

/**
 * Structured data for guide pages so search engines and answer engines
 * (Google, Gemini, ChatGPT) can parse, quote and recommend the content:
 * Article + FAQPage + BreadcrumbList.
 */
export default function GuideJsonLd({ guide }: { guide: Guide }) {
  const url = `${SITE}/guides/${guide.slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.excerpt,
    abstract: guide.keyTakeaway,
    articleSection: guide.topic,
    // Per-guide 1200×630 social card (app/guides/[slug]/opengraph-image.tsx).
    image: [`${SITE}/guides/${guide.slug}/opengraph-image`],
    datePublished: guide.updated,
    dateModified: guide.updated,
    // Named human author (founder & lead guide) rather than the Organization —
    // Google's quality systems reward identifiable, credentialed expertise.
    // Ties to the org via worksFor @id; full Person schema lives on /about.
    author: {
      "@type": "Person",
      "@id": `${SITE}/#ombeni`,
      name: "Ombeni",
      jobTitle: "Founder & Lead Guide",
      worksFor: { "@id": `${SITE}/#organization` },
      url: `${SITE}/about`,
      image: `${SITE}/images/founder-ombeni.jpg`,
      knowsAbout: [
        "Kilimanjaro climbing",
        "Mount Meru",
        "Tanzania safaris",
        "Serengeti",
        "Ngorongoro Crater",
        "Zanzibar",
        "high-altitude trekking",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "Trust Tours & Safaris",
      logo: { "@type": "ImageObject", url: `${SITE}/Logo.jpeg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en",
  };

  const faqPage =
    guide.faqs && guide.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: guide.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides` },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ],
  };

  const blocks = [article, faqPage, breadcrumb].filter(Boolean);

  return (
    <>
      {blocks.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(obj) }}
        />
      ))}
    </>
  );
}
