import type { Metadata } from "next";

import { getImagen } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

import Hero from "@/components/sections/home/Hero";
import Posicion from "@/components/sections/home/Posicion";
import Cifras from "@/components/sections/home/Cifras";
import Inteligencia from "@/components/sections/home/Inteligencia";
import Pilares from "@/components/sections/home/Pilares";
import RutaComprador from "@/components/sections/home/RutaComprador";
import RutaDesarrollador from "@/components/sections/home/RutaDesarrollador";
import Proceso from "@/components/sections/home/Proceso";
import Principios from "@/components/sections/home/Principios";
import Cierre from "@/components/sections/home/Cierre";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "Epicus | Inteligencia inmobiliaria en Monterrey" },
  description:
    "Asesoría de compra e inversión inmobiliaria en Monterrey con más de 95 proyectos activos, precio de origen e inteligencia real de mercado. Residencial, vertical e industrial.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Epicus | Inteligencia inmobiliaria en Monterrey",
    description:
      "Operamos la comercialización de los principales desarrolladores de Monterrey. Esa posición nos permite elegir dentro del mercado completo y maximizar el rendimiento de cada decisión.",
    url: "/",
    images: [{ url: "/og-image-epicus.webp", width: 1200, height: 630 }],
  },
};

// ─── Home institucional ───────────────────────────────────────────────────────
// Estructura del documento «Home institucional · Estructura y textos» v1.0.
// El bloque 10 · Clientes se omite por indicación del propio documento.
// El bloque 12 · Pie de página vive en <Footer /> (layout raíz).

export default async function Home() {
  const heroImagen = await getImagen("hero");
  const heroImagenUrl = heroImagen?.imagen ? urlForImage(heroImagen.imagen) : null;

  return (
    <>
      <Hero
        imagenUrl={heroImagenUrl}
        imagenAlt={heroImagen?.alt}
      />                      {/* 01 · Hero                     */}
      <Posicion />            {/* 02 · Posición                 */}
      <Cifras />              {/* 03 · Cifras                   */}
      <Inteligencia />        {/* 04 · Inteligencia de mercado  */}
      <Pilares />             {/* 05 · Pilares                  */}
      <RutaComprador />       {/* 06 · Ruta comprador           */}
      <RutaDesarrollador />   {/* 07 · Ruta desarrollador       */}
      <Proceso />             {/* 08 · Proceso                  */}
      <Principios />          {/* 09 · Principios               */}
      <Cierre />              {/* 11 · Cierre                   */}
    </>
  );
}
