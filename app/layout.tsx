import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  EU_MARKET_ENABLED,
  SITE,
  assertLaunchConfiguration,
} from "@/lib/constants";
import {
  BUILD_LOCALE,
  IS_LAUNCH_READY,
  SITE_ORIGIN,
  languageAlternates,
  l,
} from "@/lib/i18n/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

assertLaunchConfiguration();

const titleDefault = `${SITE.name} · ${l(
  "Soluciones empresariales integradas",
  "Integrated enterprise solutions",
)}`;
const socialImage = BUILD_LOCALE === "es"
  ? { url: "/og-portfolio.png", width: 1731, height: 909 }
  : { url: "/og-en.png", width: 1200, height: 630 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: titleDefault,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "7 Business Solutions",
    "Intelligent business solutions",
    "Decision Intelligence",
    "Inteligencia de Decisión",
    "SAP SuccessFactors",
    "SAP Payroll",
    "SAP S/4HANA",
    "SAP managed services",
    "Enterprise integration",
    "Operational AI",
    "Software factory",
    "ABAP Fiori factory",
    "Governed data",
    "Business automation",
    "SAP integration",
    "Cloud and data",
    "Mexico",
    ...(EU_MARKET_ENABLED ? ["European Union"] : []),
  ],
  alternates: languageAlternates("/"),
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE_ORIGIN,
    siteName: SITE.name,
    title: titleDefault,
    description: SITE.description,
    images: [
      {
        ...socialImage,
        alt: `${SITE.name} · ${l("Soluciones empresariales integradas", "Integrated enterprise solutions")}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: SITE.description,
    images: [socialImage.url],
  },
  robots: {
    index: IS_LAUNCH_READY,
    follow: IS_LAUNCH_READY,
    googleBot: {
      index: IS_LAUNCH_READY,
      follow: IS_LAUNCH_READY,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0e1c" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={BUILD_LOCALE} className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen bg-ink-50 font-sans text-ink-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-700 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          {l("Saltar al contenido", "Skip to content")}
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
