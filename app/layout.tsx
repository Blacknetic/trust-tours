import type { Metadata } from "next";
import { Fraunces, Albert_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CrispChat from "@/components/CrispChat";
import QuoteModalProvider from "@/components/QuoteModal";
import { SOCIAL_LINKS } from "@/data/social";
import { jsonLd } from "@/lib/json-ld";
import "./globals.css";

// Site-wide organisation schema. `sameAs` is where search engines pick up
// official social/profile links — keep it driven by data/social.ts.
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Trust Tours & Safaris",
  url: "https://trusttourstz.com",
  logo: "https://trusttourstz.com/Logo.jpeg",
  telephone: "+255785938860",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arusha",
    addressCountry: "TZ",
  },
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
  metadataBase: new URL("https://trusttourstz.com"),
  title: {
    default: "Trust Tours & Safaris — Kilimanjaro Climbs & Tanzania Safaris",
    template: "%s | Trust Tours & Safaris",
  },
  description:
    "Tanzania's trusted safari operator. Climb Kilimanjaro, track the Great Migration, explore Ngorongoro Crater. Led by Ombeni — fully licensed, plan on WhatsApp.",
  alternates: { canonical: "/" },
  verification: {
    google: "9IOWur01z2YBwGvWn67xt020CY7G1dZUX5EF91-562I",
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
      </body>
    </html>
  );
}
