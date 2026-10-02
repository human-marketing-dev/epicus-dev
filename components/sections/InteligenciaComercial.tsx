import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

// ─── Mock Dashboard ───────────────────────────────────────────────────────────

function MockDashboard() {
  return (
    <FadeIn delay={0.3} direction="up">
      <div className="bg-[#0f1623] rounded-t-lg border border-white/[0.08] border-b-0 overflow-hidden">

        {/* Top bar */}
        <div className="bg-[#0a0f1a] px-4 py-[10px] flex items-center justify-between border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="flex gap-[6px]">
              <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[11px] text-white/30 tracking-[0.05em]">
              Alfra Intelligence — Sistema de Inteligencia Comercial
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-[11px] text-white/20 px-3 py-1 border border-white/[0.08] rounded-[3px]">Dashboard</span>
            <span className="text-[11px] text-white/20 px-3 py-1">Comparador</span>
          </div>
        </div>

        {/* Stat bar */}
        <div className="bg-[#0c1220] px-4 py-3 flex gap-6 border-b border-white/[0.05]">
          {[
            { val: "95",     label: "Total Proyectos" },
            { val: "11,387", label: "Unidades Totales" },
            { val: "4,480",  label: "Disponibles" },
            { val: "83",     label: "En Preventa" },
          ].map((s, i) => (
            <div key={s.label} className="flex items-baseline gap-[6px]">
              {i > 0 && <span className="w-px self-stretch bg-white/[0.05] mr-2" />}
              <span className={`text-[20px] font-medium ${i === 0 ? "text-blue-light" : "text-white"}`}>
                {s.val}
              </span>
              <span className="text-[10px] tracking-[0.1em] uppercase text-white/30">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Filter bar */}
        <div className="bg-[#0c1220] px-4 py-[10px] flex items-center gap-3 border-b border-white/[0.05]">
          <span className="text-[10px] text-white/30 tracking-[0.08em] uppercase">Tipo</span>
          {["Todos", "Residencial", "Deptos", "Industrial"].map((f, i) => (
            <span key={f} className={i === 0 ? "text-[11px] text-white bg-blue px-3 py-[3px] rounded-[2px]" : "text-[11px] text-white/35 px-3 py-[3px] border border-white/[0.08] rounded-[2px]"}>
              {f}
            </span>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-2 divide-x divide-white/[0.05]">

          {/* Mapa simulado */}
          <div className="relative h-48 bg-[#0a1020]">
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 40% 50%, rgba(37,99,235,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(245,158,11,0.1) 0%, transparent 40%)" }} />
            {[
              { x: "38%", y: "45%", color: "#22c55e" },
              { x: "55%", y: "35%", color: "#3b82f6" },
              { x: "65%", y: "55%", color: "#f59e0b" },
              { x: "42%", y: "62%", color: "#3b82f6" },
              { x: "28%", y: "38%", color: "#ef4444" },
            ].map((dot, i) => (
              <span key={i} className="absolute w-[7px] h-[7px] rounded-full" style={{ left: dot.x, top: dot.y, background: dot.color }} />
            ))}
            <div className="absolute bottom-3 left-3 flex gap-3">
              {[{ color: "#22c55e", label: "Terrenos" }, { color: "#3b82f6", label: "Deptos" }, { color: "#f59e0b", label: "Industrial" }, { color: "#ef4444", label: "Casas" }].map((l) => (
                <div key={l.label} className="flex items-center gap-[6px]">
                  <span className="w-2 h-2 rounded-full" style={{ background: l.color }} />
                  <span className="text-[9px] text-white/40">{l.label}</span>
                </div>
              ))}
            </div>
            <span className="absolute top-3 right-3 text-[9px] text-white/15 tracking-[0.1em]">© Monterrey, N.L.</span>
          </div>

          {/* Listings */}
          <div className="flex flex-col divide-y divide-white/[0.05]">
            <div className="px-4 py-[14px] flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[9px] tracking-[0.1em] uppercase text-blue-light mb-1">Terr. Residencial</div>
                  <div className="text-[13px] font-medium text-white">COLINAS DEL VERGEL</div>
                  <div className="text-[10px] text-white/35">AGORA · Carr. Nacional</div>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-[9px] bg-blue/30 text-blue-light px-[7px] py-[2px] rounded-[2px]">PREVENTA</span>
                  <span className="text-[9px] bg-green-500/20 text-green-300 px-[7px] py-[2px] rounded-[2px]">CAPTADO</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[["260–350 m²","Superficie"],["$16,500/m²","Precio"],["160 disp.","Disponibles"]].map(([v,l]) => (
                  <div key={l}><div className="text-[11px] font-medium text-white">{v}</div><div className="text-[9px] text-white/30">{l}</div></div>
                ))}
              </div>
              <div className="h-[3px] bg-white/[0.05] rounded-[2px]"><div className="h-[3px] bg-green-500 rounded-[2px] w-[86%]" /></div>
            </div>
            <div className="px-4 py-[14px] flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[9px] tracking-[0.1em] uppercase text-blue-light mb-1">Departamento</div>
                  <div className="text-[13px] font-medium text-white">ESFERA TORRE 2</div>
                  <div className="text-[10px] text-white/35">IDEKA · Valle Oriente</div>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-[9px] bg-blue/30 text-blue-light px-[7px] py-[2px] rounded-[2px]">PREVENTA</span>
                  <span className="text-[9px] bg-green-500/20 text-green-300 px-[7px] py-[2px] rounded-[2px]">CAPTADO</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[["100–550 m²","Superficie"],["$85,271/m²","Precio"],["256 disp.","Disponibles"]].map(([v,l]) => (
                  <div key={l}><div className="text-[11px] font-medium text-white">{v}</div><div className="text-[9px] text-white/30">{l}</div></div>
                ))}
              </div>
              <div className="h-[3px] bg-white/[0.05] rounded-[2px]"><div className="h-[3px] bg-blue-light rounded-[2px] w-[80%]" /></div>
            </div>
            <div className="px-4 py-[14px] flex flex-col gap-2 blur-[3px] opacity-40 pointer-events-none select-none">
              <div>
                <div className="text-[9px] tracking-[0.1em] uppercase text-amber-400 mb-1">Industrial</div>
                <div className="text-[13px] font-medium text-white">IBP SANTA CATARINA</div>
                <div className="text-[10px] text-white/35">IBP · Santa Catarina</div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay con lock */}
        <div className="flex items-end justify-center pb-5 -mt-20 h-20 relative" style={{ background: "linear-gradient(to top, rgba(10,15,26,0.98) 0%, rgba(10,15,26,0.7) 60%, transparent 100%)" }}>
          <div className="flex items-center gap-[10px]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
            <span className="text-[11px] text-white/40 tracking-[0.06em]">Acceso disponible en tu asesoría con ALFRA INMOBILIARIA</span>
            <Link href="/contacto" className="text-[11px] bg-blue text-white px-[14px] py-[5px] rounded-[3px] tracking-[0.04em]">Agendar →</Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// ─── InteligenciaComercial ───────────────────────────────────────────────────────

export default function InteligenciaComercial() {
  return (
    <div className="bg-ink py-14 px-[4%] overflow-hidden relative">
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }} />

      <div className="mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start mb-10">
          <FadeIn delay={0}>
            <div>
              <p className="text-overline text-blue-light mb-3">Alfra Intelligence</p>
              <h2 className="font-display text-h2 text-white mb-4">
                El mapa completo del mercado,<br />analizado contigo en tu asesoría.
              </h2>
              <p className="text-[14px] font-light text-white/55 leading-[1.8] max-w-[520px]">
                Nuestro sistema de inteligencia comercial rastrea precios, disponibilidad, esquemas de pago y tendencias de los proyectos más relevantes de Monterrey. No es un portal público — es la herramienta que abrimos juntos en tu asesoría para encontrar las mejores opciones para ti.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-row lg:flex-col gap-6 lg:min-w-[180px] lg:text-right">
              {[{ val: "95", label: "Proyectos" }, { val: "11K+", label: "Unidades" }, { val: "4", label: "Tipologías" }].map((s, i) => (
                <div key={s.label}>
                  {i > 0 && <div className="hidden lg:block h-px bg-white/[0.07] mb-6" />}
                  <div className="font-display text-[44px] font-light text-white leading-none">{s.val}</div>
                  <div className="text-[11px] tracking-[0.12em] uppercase text-white/35 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
        <MockDashboard />
      </div>
    </div>
  );
}