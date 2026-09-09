import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/sections/demo/shared";

// ─── Data ─────────────────────────────────────────────────────────────────────

const puntos = [
  "Qué se está vendiendo en cada zona y a qué ritmo de absorción.",
  "El precio real de operación, más allá del precio de lista.",
  "Qué proyectos cambiaron de velocidad y qué significa para tu momento de entrada.",
  "Acceso a precio de origen y a etapas de preventa.",
];

// Vista ilustrativa del panel — no son cifras publicables.
const lecturas = [
  { zona: "Valle Oriente",   tipo: "Vertical",     absorcion: 82, ritmo: "Alta" },
  { zona: "Carr. Nacional",  tipo: "Residencial",  absorcion: 64, ritmo: "Media" },
  { zona: "San Jerónimo",    tipo: "Vertical",     absorcion: 47, ritmo: "Media" },
  { zona: "Santa Catarina",  tipo: "Industrial",   absorcion: 71, ritmo: "Alta" },
];

// ─── Panel de lectura de mercado ──────────────────────────────────────────────

function PanelLectura() {
  return (
    <div className="bg-[#0f1623] border border-white/[0.08] rounded-[6px] overflow-hidden">

      {/* Encabezado */}
      <div className="bg-[#0a0f1a] px-5 py-[13px] flex items-center justify-between border-b border-white/[0.06]">
        <div className="flex items-center gap-[10px]">
          <span className="relative flex w-[7px] h-[7px]">
            <span className="absolute inline-flex w-full h-full rounded-full bg-blue-light opacity-60 animate-ping" />
            <span className="relative inline-flex w-[7px] h-[7px] rounded-full bg-blue-light" />
          </span>
          <span className="text-[11px] text-white/40 tracking-[0.06em]">
            Lectura de mercado · Monterrey
          </span>
        </div>
        <span className="text-[10px] text-white/20 tracking-[0.1em] uppercase">
          En vivo
        </span>
      </div>

      {/* Filas */}
      <div className="divide-y divide-white/[0.05]">
        {lecturas.map((l) => (
          <div key={l.zona} className="px-5 py-[18px]">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-[9px] tracking-[0.12em] uppercase text-blue-light mb-1">
                  {l.tipo}
                </div>
                <div className="text-[14px] font-medium text-white">
                  {l.zona}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[14px] font-medium text-white leading-none">
                  {l.absorcion}%
                </div>
                <div className="text-[9px] text-white/30 mt-1">Absorción</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-light rounded-full"
                  style={{ width: `${l.absorcion}%` }}
                />
              </div>
              <span className="text-[10px] text-white/35 tracking-[0.04em] w-12 text-right">
                {l.ritmo}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pie */}
      <div className="bg-[#0a0f1a] px-5 py-[11px] border-t border-white/[0.06]">
        <span className="text-[10px] text-white/25 tracking-[0.04em]">
          Vista ilustrativa · El detalle se revisa contigo en tu asesoría
        </span>
      </div>
    </div>
  );
}

// ─── 04 · Inteligencia de mercado ─────────────────────────────────────────────

export default function Inteligencia() {
  return (
    <Section className="bg-white" size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* Texto */}
        <FadeIn delay={0} direction="right">
          <div>
            <SectionLabel>Inteligencia real de mercado</SectionLabel>

            <h2 className="font-display text-h2 text-ink mb-7">
              Sabemos qué se vende,<br />
              a qué precio y a qué{" "}
              <em className="italic text-blue">velocidad.</em>
            </h2>

            <p className="text-b1 text-ink-mid mb-9">
              El mercado de Monterrey se mueve rápido y cada proyecto avanza a su
              propio ritmo. Monitoreamos ese movimiento en tiempo real y lo
              traducimos en información que puedes usar.
            </p>

            {/* Puntos */}
            <ul className="flex flex-col gap-px bg-black/[0.08] border-y border-black/[0.08] mb-9">
              {puntos.map((p) => (
                <li key={p} className="bg-white flex items-start gap-4 py-4">
                  <span className="mt-[7px] block w-[18px] h-px bg-blue shrink-0" />
                  <span className="text-[14px] font-light text-ink-mid leading-[1.75]">
                    {p}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-[14px] font-light text-ink leading-[1.8] max-w-[460px]">
              Con esa lectura, identificas la oportunidad antes y la aprovechas
              con certeza.
            </p>
          </div>
        </FadeIn>

        {/* Panel */}
        <FadeIn delay={0.15} direction="left">
          <PanelLectura />
        </FadeIn>

      </div>
    </Section>
  );
}
