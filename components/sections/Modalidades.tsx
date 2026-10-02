import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface ModalidadProps {
  label: string;
  title: string;
  items: string[];
  index: number;
}

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function ModalidadCard({ label, title, items, index }: ModalidadProps) {
  return (
    <FadeIn delay={0.2 + index * 0.1}>
      <div className="bg-white border border-black/[0.06] flex flex-col h-full">
        <div className="bg-ink px-8 py-7">
          <p className="text-overline text-blue-light/70 mb-2">{label}</p>
          <h3 className="font-display text-h4 font-normal text-white">{title}</h3>
        </div>
        <ul className="flex flex-col gap-4 px-8 py-7 flex-1">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[6px] w-[5px] h-[5px] shrink-0 rounded-full bg-blue" />
              <span className="text-[13px] font-light text-ink-mid leading-[1.75]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const modalidades = [
  {
    label: "Modalidad 1",
    title: "Master Broker + Gerencia Comercial",
    items: [
      "Nos integramos como tu equipo comercial completo. Estrategia, ejecución y resultados.",
      "Estrategia de precios, perfiles de buyer y canales de captación desde el arranque.",
      "Equipo de ventas dedicado con KPIs y seguimiento semanal.",
      "CRM, seguimiento y reporting en tiempo real.",
      "Marketing digital (Meta Ads) y captación de leads calificados.",
      "Coordinación con brokers externos y red de asesores.",
    ],
  },
  {
    label: "Modalidad 2",
    title: "Master Broker Digital",
    items: [
      "Activamos tu proyecto en nuestros canales digitales y red de prospectos activos.",
      "Gestión de campañas de Meta Ads orientadas a conversión real.",
      "Calificación y seguimiento de leads hasta el punto de cierre.",
      "Integración con tu equipo de ventas sin reemplazarlo.",
      "Reportes de desempeño y costo por lead calificado.",
      "Sin inversión inicial — modelo basado en resultados.",
    ],
  },
  {
    label: "Modalidad 3",
    title: "Broker Tradicional",
    items: [
      "Incluimos tu proyecto en el portafolio activo de ALFRA INMOBILIARIA.",
      "Tu desarrollo llega a nuestra base de clientes calificados en Monterrey.",
      "Nuestros asesores lo presentan como una opción real dentro de su asesoría.",
      "Sin exclusividad ni compromisos de largo plazo.",
      "Ideal para desarrolladores que ya tienen equipo propio y buscan ampliar su canal de ventas.",
      "Comisión sobre cierre. Sin costos fijos.",
    ],
  },
];

// ─── Modalidades ──────────────────────────────────────────────────────────────

export default function Modalidades() {
  return (
    <Section className="bg-cream">
      <FadeIn delay={0}>
        <p className="flex items-center gap-3 text-overline text-blue mb-5">
          <span className="block w-6 h-px bg-blue" />
          Modelo de trabajo
        </p>
        <h2 className="font-display text-h2 text-ink">
          Tres formas de<br />
          <em className="italic text-blue">trabajar juntos</em>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-black/[0.06] mt-16">
        {modalidades.map((m, i) => (
          <ModalidadCard key={m.label} {...m} index={i} />
        ))}
      </div>
    </Section>
  );
}