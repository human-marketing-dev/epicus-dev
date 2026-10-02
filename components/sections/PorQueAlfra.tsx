import Link from "next/link";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface RazonProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  index: number;
}

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function RazonCard({ icon, title, body, index }: RazonProps) {
  return (
    <FadeIn delay={0.2 + index * 0.08}>
      <div className="bg-white p-9 h-full">
        <div className="w-11 h-11 flex items-center justify-center bg-blue-dim rounded-[4px] mb-5 text-blue">{icon}</div>
        <h4 className="text-[15px] font-medium text-ink mb-[10px]">{title}</h4>
        <p className="text-[13px] font-light text-ink-mid leading-[1.75]">{body}</p>
      </div>
    </FadeIn>
  );
}

// ─── Iconos ───────────────────────────────────────────────────────────────────

const svgStyle = { width: 22, height: 22, stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const IconChart  = () => (<svg viewBox="0 0 24 24" style={svgStyle}><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>);
const IconSignal = () => (<svg viewBox="0 0 24 24" style={svgStyle}><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>);
const IconPulse  = () => (<svg viewBox="0 0 24 24" style={svgStyle}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>);
const IconGlobe  = () => (<svg viewBox="0 0 24 24" style={svgStyle}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>);
const IconStar   = () => (<svg viewBox="0 0 24 24" style={svgStyle}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const IconHeart  = () => (<svg viewBox="0 0 24 24" style={svgStyle}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>);

// ─── Data ─────────────────────────────────────────────────────────────────────

const razones = [
  { icon: <IconChart />,  title: "Inteligencia de mercado",       body: "Monitoreamos 95 proyectos activos en Monterrey. Sabemos dónde está tu oportunidad de posicionamiento antes de lanzar." },
  { icon: <IconSignal />, title: "Sistemas probados",             body: "CRM, asignación de leads, scripts de ventas, reportes semanales. Todo estructurado, nada improvisado." },
  { icon: <IconPulse />,  title: "Orientados a cierre",           body: "No medimos éxito en leads. Medimos en escrituras. Nuestra estructura premia resultados, no actividad." },
  { icon: <IconGlobe />,  title: "Red activa de brokers",         body: "Como master broker, coordinamos la red externa para multiplicar el alcance de tu proyecto en la ciudad." },
  { icon: <IconStar />,   title: "Estrategia de posicionamiento", body: "Definimos tu diferenciador, perfil de buyer ideal y mensaje de ventas antes de activar cualquier canal." },
  { icon: <IconHeart />,  title: "Alineación de intereses",       body: "Somos también inversionistas inmobiliarios. Entendemos lo que se juega un desarrollador en cada proyecto." },
];

// ─── PorQueAlfra ─────────────────────────────────────────────────────────────

export default function PorQueAlfra() {
  return (
    <Section className="bg-white">
      <FadeIn delay={0}>
        <p className="flex items-center gap-3 text-overline text-blue mb-5">
          <span className="block w-6 h-px bg-blue" />
          ¿Por qué ALFRA INMOBILIARIA?
        </p>
        <h2 className="font-display text-h2 text-ink">
          No somos un broker.<br />
          <em className="italic text-blue">Somos tu equipo.</em>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.06] mt-16">
        {razones.map((r, i) => (
          <RazonCard key={r.title} {...r} index={i} />
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="mt-16 bg-ink p-8 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <h3 className="font-display text-h3 font-light text-white mb-3">
              ¿Tienes un proyecto y buscas el equipo comercial correcto?
            </h3>
            <p className="text-[14px] font-light text-white/55 leading-[1.8]">
              Cuéntanos sobre tu desarrollo. Revisamos en qué etapa está, cuál es
              el objetivo de ventas y cómo estructuramos una propuesta a tu medida.
            </p>
          </div>
          <Link href="/contacto" className="shrink-0 inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:-translate-y-px whitespace-nowrap">
            Agendar reunión
          </Link>
        </div>
      </FadeIn>
    </Section>
  );
}