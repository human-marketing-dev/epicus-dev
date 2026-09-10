import { cn } from "@/lib/utils";

// ─── Estilo base de iconos ────────────────────────────────────────────────────

export const svgStyle = {
  width: 22,
  height: 22,
  stroke: "currentColor",
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// ─── Antetítulo de sección ────────────────────────────────────────────────────
// tone="light" → sobre fondo claro · tone="dark" → sobre fondo oscuro

export function SectionLabel({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-overline mb-5",
        tone === "dark" ? "text-blue-light" : "text-blue",
        className
      )}
    >
      <span
        className={cn(
          "block w-6 h-px",
          tone === "dark" ? "bg-blue-light" : "bg-blue"
        )}
      />
      {children}
    </p>
  );
}

// ─── Caja de icono ────────────────────────────────────────────────────────────

export function IconBox({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-11 h-11 flex items-center justify-center rounded-[4px] shrink-0",
        tone === "dark"
          ? "bg-white/[0.06] text-blue-light"
          : "bg-blue-dim text-blue",
        className
      )}
    >
      {children}
    </div>
  );
}

// ─── Chip «por confirmar» ─────────────────────────────────────────────────────
// Marca los datos que el Brief Maestro señala como pendientes de validación.

export function ChipConfirmar({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-block text-[9px] tracking-[0.14em] uppercase px-2 py-[3px] rounded-[2px] border",
        tone === "dark"
          ? "border-white/20 text-white/45"
          : "border-black/15 text-ink-soft"
      )}
    >
      Por confirmar
    </span>
  );
}
