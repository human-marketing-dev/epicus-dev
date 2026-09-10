import { cn } from "@/lib/utils";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/sections/demo/shared";

// ─── Data ─────────────────────────────────────────────────────────────────────

const etapas = [
  {
    num: "01",
    title: "Empezamos por tu objetivo",
    body: "Antes de mostrarte opciones, entendemos qué buscas, en qué momento estás y qué papel juega esta decisión en tu patrimonio.",
  },
  {
    num: "02",
    title: "Filtramos el mercado completo",
    body: "Con más de 95 proyectos activos en monitoreo, identificamos las opciones que se alinean con tu perfil, tu presupuesto y tu objetivo.",
  },
  {
    num: "03",
    title: "Analizamos y comparamos",
    body: "Recibes un análisis con argumentos, contexto de mercado y proyección de rendimiento, para que la decisión tenga base.",
  },
  {
    num: "04",
    title: "Cerramos contigo",
    body: "Coordinamos el proceso hasta la formalización, con claridad y seguimiento constante en cada etapa.",
  },
];

// ─── 08 · Proceso ─────────────────────────────────────────────────────────────
// Línea de proceso: nodo + tramo de conexión por etapa.
// El tramo se extiende sobre el gap del grid (-mr-8) para unir un nodo con el
// siguiente; en la última etapa se oculta en desktop.

export default function ProcesoDemo() {
  return (
    <Section className="bg-cream" size="lg">
      <FadeIn delay={0}>
        <SectionLabel>Cómo trabajamos</SectionLabel>
        <h2 className="font-display text-h2 text-ink">
          El proceso que nos <em className="italic text-blue">define.</em>
        </h2>
      </FadeIn>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-x-8 mt-16">
        {etapas.map((e, i) => (
          <li key={e.num} className="relative">
            <FadeIn delay={0.15 + i * 0.12}>

              {/* Nodo + tramo de la línea */}
              <div className="flex items-center mb-6">
                <span className="relative z-10 shrink-0 w-[13px] h-[13px] rounded-full border border-blue bg-cream flex items-center justify-center">
                  <span className="block w-[5px] h-[5px] rounded-full bg-blue" />
                </span>
                <span
                  className={cn(
                    "flex-1 h-px bg-black/[0.12] sm:-mr-8",
                    i === etapas.length - 1 && "sm:hidden",
                    i === 1 && "lg:block sm:hidden"
                  )}
                  aria-hidden
                />
              </div>

              <p className="text-overline text-blue mb-3">Etapa {e.num}</p>
              <h3 className="font-display text-h4 font-normal text-ink mb-3">
                {e.title}
              </h3>
              <p className="text-[13px] font-light text-ink-soft leading-[1.8] max-w-[280px]">
                {e.body}
              </p>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}
