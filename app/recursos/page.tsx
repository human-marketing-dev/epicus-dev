import Recursos from "@/components/sections/Recursos";
import { getRecursos } from "@/sanity/lib/client";

export const revalidate = 60;

export const metadata = {
  title: "Recursos",
  description:
    "Cápsulas de inteligencia inmobiliaria sobre el mercado de Monterrey — inversión, tendencias, guías y más. Información para tomar mejores decisiones.",
  openGraph: {
    title: "Recursos | ALFRA INMOBILIARIA",
    description:
      "Inteligencia inmobiliaria del mercado de Monterrey. Guías, análisis y tendencias para tomar mejores decisiones.",
    images: [{ url: "og-image-alfra.webp", width: 1200, height: 630 }],
  },
};

export default async function RecursosPage() {
  const recursos = await getRecursos();
  return <Recursos recursos={recursos} />;
}