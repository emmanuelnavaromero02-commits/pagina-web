import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE, assertLaunchConfiguration } from "@/lib/constants";
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
  "Soluciones empresariales inteligentes",
  "Intelligent business solutions",
)}`;

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
    "Enterprise Copilot",
    "Enterprise integration",
    "Operational AI",
    "Software factory",
    "Governed data",
    "Business automation",
    "SAP integration",
    "Cloud and data",
    "Mexico",
    "Spain",
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
        url: BUILD_LOCALE === "es" ? "/og-es.png" : "/og-en.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} · Enterprise Copilot`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: SITE.description,
    images: [BUILD_LOCALE === "es" ? "/og-es.png" : "/og-en.png"],
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
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
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
      <body className="min-h-screen bg-white font-sans text-ink-900 antialiased">
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
