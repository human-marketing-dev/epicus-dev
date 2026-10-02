"use client";

import { useState, useRef } from "react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { Turnstile } from "@marsidev/react-turnstile";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Interes = "Comprar para vivir" | "Inversión" | "Industrial" | "Soy Desarrollador";

interface FormData {
  nombre: string;
  telefono: string;
  correo: string;
  interes: Interes[];
  presupuesto: string;
  mensaje: string;
}

// ─── Íconos ───────────────────────────────────────────────────────────────────

const svgStyle = { stroke: "currentColor", fill: "none", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const IconPhone = () => (<svg viewBox="0 0 24 24" style={{ ...svgStyle, width: 20, height: 20 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>);
const IconMail  = () => (<svg viewBox="0 0 24 24" style={{ ...svgStyle, width: 20, height: 20 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
const IconPin   = () => (<svg viewBox="0 0 24 24" style={{ ...svgStyle, width: 20, height: 20 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>);
const IconCheck = () => (<svg viewBox="0 0 24 24" style={{ ...svgStyle, width: 40, height: 40 }}><polyline points="20 6 9 17 4 12"/></svg>);

// ─── Constantes ───────────────────────────────────────────────────────────────

const INTERESES: Interes[] = ["Comprar para vivir", "Inversión", "Industrial", "Soy Desarrollador"];
const PRESUPUESTOS = ["Menos de 2 MDP", "2 – 5 MDP", "5 – 10 MDP", "Más de 10 MDP", "Prefiero no decirlo"];
const inputBase = "w-full border border-black/[0.12] rounded-[4px] px-4 py-3 text-[14px] text-ink placeholder:text-ink-soft/60 focus:outline-none focus:border-blue transition-colors duration-200 bg-white";

// ─── Contacto ─────────────────────────────────────────────────────────────────

export default function Contacto() {
  const [form, setForm] = useState<FormData>({
    nombre: "", telefono: "", correo: "",
    interes: ["Comprar para vivir"],
    presupuesto: "Menos de 2 MDP",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  function toggleInteres(opt: Interes) {
    setForm((prev) => ({
      ...prev,
      interes: prev.interes.includes(opt)
        ? prev.interes.filter((i) => i !== opt)
        : [...prev.interes, opt],
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCargando(true);
    setError(null);

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken }),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setEnviado(true);
    } catch {
      setError("Hubo un problema al enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-68px)] flex items-center">

      {/* Fondos */}
      <div className="absolute top-0 left-0 w-1/2 h-full hidden lg:block" style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0f1f3d 60%, #0a0a0f 100%)" }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 65%)" }} />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block bg-neutral-50" />
      <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(135deg, #0a0f1a 0%, #0f1f3d 60%, #0a0a0f 100%)" }} />

      <Container className="relative grid grid-cols-1 lg:grid-cols-2 py-24 lg:py-28 w-full">

        {/* Columna izquierda — info */}
        <div className="flex flex-col py-8 lg:py-0 lg:pr-16">
          <FadeIn delay={0}>
            <p className="flex items-center gap-3 text-overline text-blue-light/70 mb-5">
              <span className="block w-6 h-px bg-blue-light/70" />
              Hablemos
            </p>
            <h1 className="font-display text-h1 text-white mb-6">
              30 minutos que<br />
              pueden cambiar<br />
              tu <em className="italic text-blue-light">perspectiva.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-b1 font-light text-white/55 mb-12">
              Una asesoría gratuita, sin presiones, donde saldrás con más claridad
              del mercado — independientemente de si decidimos trabajar juntos.
            </p>
          </FadeIn>
          <div className="flex flex-col gap-6">
            {[
              { icon: <IconPhone />, label: "WhatsApp",  value: "+52 81 2600 5642",    href: "https://wa.me/528126005642" },
              { icon: <IconMail />,  label: "Correo",    value: "info@alfrainmobiliaria.com",  href: "mailto:info@alfrainmobiliaria.com" },
              { icon: <IconPin />,   label: "Ubicación", value: "Monterrey, Nuevo León", href: undefined },
            ].map((d, i) => (
              <FadeIn key={d.label} delay={0.25 + i * 0.1}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-[4px] border border-white/10 bg-white/[0.05] flex items-center justify-center text-white/60 shrink-0">
                    {d.icon}
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[0.08em] text-white/35 uppercase mb-[2px]">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="text-[14px] text-white/75 hover:text-white transition-colors duration-200">{d.value}</a>
                    ) : (
                      <p className="text-[14px] text-white/75">{d.value}</p>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Columna derecha — formulario */}
        <div className="flex flex-col py-8 lg:py-0 lg:pl-16">
          <FadeIn delay={0.1} direction="left">
            <div className="w-full max-w-[520px]">
              {!enviado ? (
                <>
                  <h2 className="font-display text-h3 text-ink mb-2">Cuéntanos sobre ti</h2>
                  <p className="text-[14px] font-light text-ink-mid mb-8">
                    Llena este formulario y un asesor te contactará en menos de 24 horas.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-[6px]">
                        <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Nombre</label>
                        <input type="text" placeholder="Tu nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className={inputBase} required />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Teléfono</label>
                        <input type="tel" placeholder="81 0000 0000" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className={inputBase} required />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Correo electrónico</label>
                      <input type="email" placeholder="correo@ejemplo.com" value={form.correo} onChange={(e) => setForm({ ...form, correo: e.target.value })} className={inputBase} required />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Me interesa</label>
                      <div className="flex flex-wrap gap-2">
                        {INTERESES.map((opt) => (
                          <button key={opt} type="button" onClick={() => toggleInteres(opt)}
                            className={form.interes.includes(opt)
                              ? "text-[13px] px-4 py-2 rounded-[4px] border bg-blue border-blue text-white transition-all duration-200"
                              : "text-[13px] px-4 py-2 rounded-[4px] border border-black/[0.12] text-ink-mid hover:border-blue hover:text-blue transition-all duration-200"
                            }
                          >{opt}</button>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[12px] font-medium text-ink tracking-[0.04em]">Presupuesto aproximado</label>
                      <select value={form.presupuesto} onChange={(e) => setForm({ ...form, presupuesto: e.target.value })} className={inputBase}>
                        {PRESUPUESTOS.map((p) => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label className="text-[12px] font-medium text-ink tracking-[0.04em]">¿Algo que quieras contarnos?</label>
                      <textarea rows={4} placeholder="Contexto sobre lo que buscas, zona de interés, o cualquier pregunta..." value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className={`${inputBase} resize-none`} />
                    </div>

                    {/* Turnstile invisible */}
                    <Turnstile
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={(token) => setTurnstileToken(token)}
                      options={{ execution: "render", size: "invisible" }}
/>

                    {/* Error */}
                    {error && (
                      <p className="text-[13px] text-red-500 bg-red-50 px-4 py-3 rounded-[4px]">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={cargando}
                      className="w-full bg-blue hover:bg-blue-light disabled:opacity-60 disabled:cursor-not-allowed text-white text-btn py-4 rounded-[4px] transition-all duration-200 hover:-translate-y-px mt-2"
                    >
                      {cargando ? "Enviando..." : "Solicitar asesoría gratuita"}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-blue/10 flex items-center justify-center text-blue mx-auto mb-6"><IconCheck /></div>
                  <h3 className="font-display text-h3 text-ink mb-3">¡Listo! Recibimos tu solicitud.</h3>
                  <p className="text-b1 font-light text-ink-mid">Un asesor de ALFRA INMOBILIARIA te contactará en las próximas horas. Nos da gusto que quieras conocernos.</p>
                </div>
              )}
            </div>
          </FadeIn>
        </div>

      </Container>
    </div>
  );
}