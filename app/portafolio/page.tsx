import PortafolioHero from "@/components/sections/PortafolioHero";
import InteligenciaComercial from "@/components/sections/InteligenciaComercial";
import Tipologias from "@/components/sections/Tipologias";

// Fuera de la navegación y del sitemap: la ruta sigue viva pero no se indexa.
export const metadata = {
  robots: { index: false, follow: false },
  title: "Portafolio",
  description:
    "Acceso a 95 proyectos inmobiliarios activos en Monterrey — terrenos residenciales, departamentos, casas e industrial. Información que no verás en ningún portal.",
  openGraph: {
    title: "Portafolio | ALFRA INMOBILIARIA",
    description:
      "95 proyectos activos en Monterrey. Terrenos, departamentos, casas e industrial. Información exclusiva disponible en tu asesoría.",
    images: [{ url: "og-image-alfra.webp", width: 1200, height: 630 }],
  },
};

export default function PortafolioPage() {
  return (
    <>
      <PortafolioHero />
      <InteligenciaComercial />
      <Tipologias />
    </>
  );
}