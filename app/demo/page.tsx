import type { Metadata } from "next";

import HeroDemo from "@/components/sections/demo/HeroDemo";
import Posicion from "@/components/sections/demo/Posicion";
import Cifras from "@/components/sections/demo/Cifras";
import Inteligencia from "@/components/sections/demo/Inteligencia";
import Pilares from "@/components/sections/demo/Pilares";
import RutaComprador from "@/components/sections/demo/RutaComprador";
import RutaDesarrollador from "@/components/sections/demo/RutaDesarrollador";
import ProcesoDemo from "@/components/sections/demo/ProcesoDemo";
import Principios from "@/components/sections/demo/Principios";
import Cierre from "@/components/sections/demo/Cierre";
import FooterDemo from "@/components/sections/demo/FooterDemo";

// ─── Metadata ─────────────────────────────────────────────────────────────────
// noindex mientras sea una demo de revisión.

export const metadata: Metadata = {
  title: { absolute: "Epicus | Inteligencia inmobiliaria en Monterrey" },
  description:
    "Asesoría de compra e inversión inmobiliaria en Monterrey con más de 95 proyectos activos, precio de origen e inteligencia real de mercado. Residencial, vertical e industrial.",
  robots: { index: false, follow: false },
};

// ─── Home institucional · versión demo ────────────────────────────────────────
// Estructura del documento «Home institucional · Estructura y textos» v1.0.
// El bloque 10 · Clientes se omite por indicación del propio documento.

export default function DemoHome() {
  return (
    <>
      <HeroDemo />            {/* 01 · Hero                     */}
      <Posicion />            {/* 02 · Posición                 */}
      <Cifras />              {/* 03 · Cifras                   */}
      <Inteligencia />        {/* 04 · Inteligencia de mercado  */}
      <Pilares />             {/* 05 · Pilares                  */}
      <RutaComprador />       {/* 06 · Ruta comprador           */}
      <RutaDesarrollador />   {/* 07 · Ruta desarrollador       */}
      <ProcesoDemo />         {/* 08 · Proceso                  */}
      <Principios />          {/* 09 · Principios               */}
      <Cierre />              {/* 11 · Cierre                   */}
      <FooterDemo />          {/* 12 · Pie de página            */}
    </>
  );
}
