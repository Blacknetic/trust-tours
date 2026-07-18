import type { Metadata } from "next";
import { Fraunces, Albert_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CrispChat from "@/components/CrispChat";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StripTrackingParams from "@/components/StripTrackingParams";
import QuoteModalProvider from "@/components/QuoteModal";
import { SOCIAL_LINKS } from "@/data/social";
import { jsonLd } from "@/lib/json-ld";
import "./globals.css";

// Site-wide organisation schema. `sameAs` is where search engines pick up
// official social/profile links — keep it driven by data/social.ts.
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  // Stable entity id so per-page schema (e.g. the /reviews aggregateRating)
  // attaches to this same organisation rather than creating a duplicate.
  "@id": "https://www.trusttourstz.com/#organization",
  name: "Trust Tours & Safaris",
  url: "https://www.trusttourstz.com",
  logo: "https://www.trusttourstz.com/Logo.jpeg",
  telephone: "+255785938860",
  email: "info@trusttourstz.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arusha",
    addressCountry: "TZ",
  },
  // Arusha, Tanzania — the operating base for all trips.
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.3869,
    longitude: 36.6830,
  },
  foundingDate: "2008",
  priceRange: "$1,580–$2,200 per person",
  award: [
    "World Travel Awards nominee 2023",
    "World Travel Awards nominee 2024",
  ],
  areaServed: [
    { "@type": "Country", name: "Tanzania" },
    { "@type": "AdministrativeArea", name: "Kilimanjaro" },
    { "@type": "AdministrativeArea", name: "Serengeti" },
    { "@type": "AdministrativeArea", name: "Zanzibar" },
  ],
  sameAs: [
    ...SOCIAL_LINKS.map((s) => s.href),
    "https://www.safaribookings.com/p3691",
    "https://www.tripadvisor.com/Attraction_Review-g297913-d13170128-Reviews-Trust_Tours_And_Safaris_Company_Tanzania-Arusha_Arusha_Region.html",
  ],
};

// Display: Fraunces — a warm, high-contrast optical serif. Editorial / safari-lodge
// character that reads premium and trustworthy. Italics used for accents & quotes.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-albert",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.trusttourstz.com"),
  title: {
    default: "Kilimanjaro Climbs & Tanzania Safaris — Trust Tours",
    template: "%s | Trust Tours & Safaris",
  },
  description:
    "TALA-licensed, owner-led Tanzania operator in Arusha. Climb Kilimanjaro, track the Great Migration, explore Ngorongoro, relax in Zanzibar. 5.0★ TripAdvisor.",
  alternates: { canonical: "/" },
  verification: {
    google: "9IOWur01z2YBwGvWn67xt020CY7G1dZUX5EF91-562I",
    // Bing Webmaster Tools site verification. Renders <meta name="msvalidate.01">.
    // TODO: paste the token from bing.com/webmasters (Add site → Meta tag option),
    // then verify. Until this is a real token, remove it or Bing verify will fail.
    other: { "msvalidate.01": "REPLACE_WITH_BING_WEBMASTER_TOKEN" },
  },
  openGraph: {
    siteName: "Trust Tours & Safaris",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${albert.variable}`}>
      <body className="min-h-dvh flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(ORG_JSON_LD) }}
        />
        <QuoteModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </QuoteModalProvider>
        <WhatsAppButton />
        <CrispChat />
        <GoogleAnalytics />
        <StripTrackingParams />
      </body>
    </html>
  );
}
