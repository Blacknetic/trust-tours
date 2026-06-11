import type { Metadata } from "next";
import { Bricolage_Grotesque, Albert_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-albert",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trust Tours & Safaris — Kilimanjaro Climbs & Tanzania Safaris",
    template: "%s | Trust Tours & Safaris",
  },
  description:
    "Tanzania's trusted safari operator. Climb Kilimanjaro, track the Great Migration, explore Ngorongoro Crater. Led by Ombeni — fully licensed, plan on WhatsApp.",
  openGraph: {
    siteName: "Trust Tours & Safaris",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${albert.variable}`}>
      <body className="min-h-dvh flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
