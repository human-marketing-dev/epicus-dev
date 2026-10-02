import Link from "next/link";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
 
// ─── Tipos ────────────────────────────────────────────────────────────────────
 
interface CardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  index: number;
}
 
// ─── Sub-componentes ──────────────────────────────────────────────────────────
 
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-overline text-blue mb-5">
      <span className="block w-6 h-px bg-blue" />
      {children}
    </p>
  );
}
 
function PropuestaCard({ icon, title, body, index }: CardProps) {
  return (
    <FadeIn delay={0.3 + index * 0.1}>
      <div className="bg-white p-8 h-full">
        <div
          className="w-11 h-11 flex items-center justify-center rounded-[4px] mb-[18px] text-blue"
          style={{ background: "rgba(37,99,235,0.07)" }}
        >
          {icon}
        </div>
        <h4 className="text-h6 text-ink mb-2">{title}</h4>
        <p className="text-[13px] font-light text-ink-soft leading-[1.7]">{body}</p>
      </div>
    </FadeIn>
  );
}
 
// ─── Iconos ───────────────────────────────────────────────────────────────────
 
const svgStyle = { width: 22, height: 22, stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
 
const IconSun = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>
);
 
const IconCheck = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
  </svg>
);
 
const IconTeam = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
 
const IconHome = () => (
  <svg viewBox="0 0 24 24" style={svgStyle}>
    <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
 
// ─── Data ─────────────────────────────────────────────────────────────────────
 
const cards = [
  {
    icon: <IconSun />,
    title: "Acceso al mercado completo",
    body: "95 proyectos activos en Monterrey y su área metropolitana, monitoreados en tiempo real.",
  },
  {
    icon: <IconCheck />,
    title: "Asesoría con datos",
    body: "Tomamos decisiones con fundamentos de mercado, no con intuición ni presión comercial.",
  },
  {
    icon: <IconTeam />,
    title: "Acompañamiento completo",
    body: "Estamos contigo desde la primera conversación hasta el cierre. Sin apuros ni sorpresas.",
  },
  {
    icon: <IconHome />,
    title: "Enfoque patrimonial",
    body: "Evaluamos cada opción como lo que es: un activo de largo plazo con impacto en tu patrimonio.",
  },
];
 
// ─── Propuesta ────────────────────────────────────────────────────────────────
 
export default function Propuesta() {
  return (
    <Section className="bg-cream">
 
      {/* Header */}
      <FadeIn delay={0}>
        <SectionLabel>Qué es ALFRA INMOBILIARIA</SectionLabel>
        <h2 className="font-display text-h2 text-ink">
          Más que una inmobiliaria.<br />
          <em className="italic text-blue">Un asesor de confianza.</em>
        </h2>
      </FadeIn>
 
      {/* Grid — texto + cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mt-16">
 
        {/* Columna izquierda — texto */}
        <FadeIn delay={0.1} direction="right">
          <div>
            <h3 className="font-display text-h3 font-normal text-ink mb-5">
              No te vendemos una propiedad.<br />
              Te ayudamos a tomar la mejor decisión.
            </h3>
            <p className="text-b1 text-ink-mid mb-5">
              Sabemos que comprar una propiedad involucra emociones: el hogar que imaginas,
              la inversión que quieres construir, el futuro que estás planeando.
              Eso es completamente natural.
            </p>
            <p className="text-b1 text-ink-mid mb-8">
              Por eso nuestro trabajo es ser la parte que equilibra esa emoción con
              información real. Te ayudamos a entender el mercado, comparar opciones
              con criterio y llegar a la decisión con la cabeza y el corazón alineados.
            </p>
            <Link
              href="/nosotros"
              className="inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
            >
              Conocer el equipo
            </Link>
          </div>
        </FadeIn>
 
        {/* Columna derecha — cards 2x2 */}
        <div className="grid grid-cols-2 gap-px bg-black/[0.08]">
          {cards.map((card, i) => (
            <PropuestaCard key={card.title} {...card} index={i} />
          ))}
        </div>
 
      </div>
    </Section>
  );
}