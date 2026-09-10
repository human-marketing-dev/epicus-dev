import Hero from "@/components/sections/Hero";
import Propuesta from "@/components/sections/Propuesta";
import Proceso from "@/components/sections/Proceso";
import Testimonios from "@/components/sections/Testimonios";
import CTAHome from "@/components/sections/CTAHome";
import { getImagen, getHero } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 60;

// Home anterior. Se conserva accesible para comparación, fuera de buscadores
// y fuera del sitemap.
export const metadata = {
  robots: { index: false, follow: false },
  title: "EPICUS — Asesoría Inmobiliaria en Monterrey",
  description:
    "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana. Acceso a 95 proyectos activos y 4,480 unidades disponibles.",
  openGraph: {
    title: "EPICUS — Asesoría Inmobiliaria en Monterrey",
    description:
      "Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default async function Home() {
  const [heroImagen, heroData] = await Promise.all([
    getImagen("hero"),
    getHero(),
  ]);

  const heroImagenUrl = heroImagen?.imagen ? urlForImage(heroImagen.imagen) : null;

  return (
    <>
      <Hero imagenUrl={heroImagenUrl} data={heroData} />
      <Propuesta />
      <Proceso />
      <Testimonios />
      <CTAHome />
    </>
  );
}

