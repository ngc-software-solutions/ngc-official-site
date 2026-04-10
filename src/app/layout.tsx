import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NGC Software Solutions",
  description: "Desarrollo de software a medida para empresas que quieren crecer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}