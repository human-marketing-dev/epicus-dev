import DesarrolladoresHero from "@/components/sections/DesarrolladoresHero";
import DesarrolladoresTrack from "@/components/sections/DesarrolladoresTrack";
import Modalidades from "@/components/sections/Modalidades";
import PorQueAlfra from "@/components/sections/PorQueAlfra";

export const metadata = {
  title: "Para Desarrolladores",
  description:
    "ALFRA INMOBILIARIA opera como brazo comercial estratégico para desarrolladores en Monterrey. Master broker, gerencia comercial y marketing digital orientado a resultados.",
  openGraph: {
    title: "Para Desarrolladores | ALFRA INMOBILIARIA",
    description:
      "Comercializa tu proyecto con estructura y resultados. Master broker y gerencia comercial para desarrolladores en Monterrey.",
    images: [{ url: "og-image-alfra.webp", width: 1200, height: 630 }],
  },
};

export default function DesarrolladoresPage() {
  return (
    <>
      <DesarrolladoresHero />
      <DesarrolladoresTrack />
      <Modalidades />
      <PorQueAlfra />
    </>
  );
}