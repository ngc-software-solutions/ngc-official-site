import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { siteMetadata } from "@/lib/data/metadata";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import UpButton from "@/components/ui/UpButton";
import Footer from "@/components/sections/Footer";
import { themeInitScript } from "@/lib/theme";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteMetadata.seoTitle,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.seoDescription,
  metadataBase: new URL(siteMetadata.url),
  keywords: [
    "desarrollo de software",
    "software a medida",
    "sistemas de gestión",
    "digitalización de empresas",
    "expediente clínico electrónico",
    "renta de software",
    "Cuernavaca",
    "Morelos",
    "México",
    "React",
    "Spring Boot",
  ],
  authors: [{ name: siteMetadata.name }],
  creator: siteMetadata.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteMetadata.name,
    locale: "es_MX",
    url: siteMetadata.url,
    title: siteMetadata.seoTitle,
    description: siteMetadata.seoDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.seoTitle,
    description: siteMetadata.seoDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={manrope.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.tagline-word{color:var(--text)!important}`}</style>
        </noscript>
      </head>
      <body className="relative">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-accent focus:px-3 focus:py-2 focus:button-sm focus:text-on-accent"
        >
          Saltar al contenido
        </a>
        <Navbar />
        {children}
        <Footer />
        <UpButton />
      </body>
    </html>
  );
}
