import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
 
// ─── Fuentes ─────────────────────────────────────────────────────────────────
 
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});
 
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
 
// ─── Metadata ────────────────────────────────────────────────────────────────
 
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://alfrainmobiliaria.com";
 
export const metadata: Metadata = {
  title: {
    default: "ALFRA INMOBILIARIA — Asesoría Inmobiliaria en Monterrey",
    template: "%s | ALFRA INMOBILIARIA",
  },
  description:
    "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana. Acceso a 95 proyectos activos y 4,480 unidades disponibles.",
  metadataBase: new URL(siteUrl),
 
  openGraph: {
    title: "ALFRA INMOBILIARIA — Asesoría Inmobiliaria en Monterrey",
    description:
      "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.",
    url: siteUrl,
    siteName: "ALFRA INMOBILIARIA",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image-alfra.webp",
        width: 1200,
        height: 630,
        alt: "ALFRA INMOBILIARIA — Asesoría Inmobiliaria",
      },
    ],
  },
 
  twitter: {
    card: "summary_large_image",
    title: "ALFRA INMOBILIARIA — Asesoría Inmobiliaria en Monterrey",
    description:
      "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.",
    images: ["/og-image-alfra.webp"],
  },
 
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
 
  // Los íconos los resuelve el App Router desde app/icon.png y app/apple-icon.png
};
 
// ─── Layout ──────────────────────────────────────────────────────────────────
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-white text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}