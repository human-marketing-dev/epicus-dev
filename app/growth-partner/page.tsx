import type { Metadata } from "next";

import GrowthPartnerHero from "@/components/sections/growth-partner/Hero";
import RutaOperativa from "@/components/sections/growth-partner/RutaOperativa";
import RutaDesarrollador from "@/components/sections/home/RutaDesarrollador";
import Cierre from "@/components/sections/home/Cierre";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Growth Partner",
  description:
    "Epicus opera el área comercial completa de tu desarrollo: atracción de leads, procesamiento y agendamiento, dirección de ventas y cierre. Costo de venta cercano al 3% y primera venta proyectada a 45 días.",
  alternates: { canonical: "/growth-partner" },
  openGraph: {
    title: "Growth Partner | EPICUS",
    description:
      "Tú te enfocas en desarrollar; nosotros en vender. Estructura comercial completa orientada a velocidad de colocación.",
    url: "/growth-partner",
    images: [{ url: "/og-image-epicus.webp", width: 1200, height: 630 }],
  },
};

// ─── Growth Partner ───────────────────────────────────────────────────────────
// Desarrollado sobre el Brief Maestro de Comunicación §6.

export default function GrowthPartnerPage() {
  return (
    <>
      <GrowthPartnerHero />
      <RutaDesarrollador antetitulo="El servicio" mostrarCta={false} />
      <RutaOperativa />
      <Cierre />
    </>
  );
}
