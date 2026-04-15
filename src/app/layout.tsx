import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { siteMetadata } from "@/lib/data/metadata";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import UpButton from "@/components/ui/UpButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
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
    "Cuernavaca",
    "Morelos",
    "México",
    "React",
    "Spring Boot",
  ],
  authors: [{ name: siteMetadata.name }],
  creator: siteMetadata.name,
  openGraph: {
    type: "website",
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
    <html lang="es" className={`${inter.variable} ${syne.variable}`}>
      <body className="relative">
        <Navbar />
        {children}
        <UpButton />
      </body>
    </html>
  );
}
