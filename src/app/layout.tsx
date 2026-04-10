import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { siteMetadata } from "@/lib/data/metadata";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";

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
    default: siteMetadata.name,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.tagline,
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
    url: siteMetadata.name,
    title: siteMetadata.name,
    description: siteMetadata.tagline,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteMetadata.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.name,
    description: siteMetadata.tagline,
    images: ["/og-image.png"],
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
