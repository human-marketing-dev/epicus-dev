import Contacto from "@/components/sections/Contacto";

export const metadata = {
  title: "Contacto",
  description:
    "Agenda una asesoría inmobiliaria gratuita en Monterrey. 30 minutos que pueden cambiar tu perspectiva sobre el mercado.",
  openGraph: {
    title: "Contacto | ALFRA INMOBILIARIA",
    description:
      "Agenda tu asesoría inmobiliaria gratuita. Sin presiones, sin compromiso. Saldrás con más claridad del mercado.",
    images: [{ url: "/og-image-alfra.webp", width: 1200, height: 630 }],
  },
};

export default function ContactoPage() {
  return <Contacto />;
}