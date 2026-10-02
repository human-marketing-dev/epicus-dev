import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getRecursoBySlug } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

// ─── Metadata dinámica ────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const recurso = await getRecursoBySlug(params.slug);
  if (!recurso) return {};
  return {
    title: recurso.titulo,
    description: recurso.resumen,
  };
}

// ─── Componentes de Portable Text ─────────────────────────────────────────────

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const url = value?.asset ? urlForImage(value) : null;
      if (!url) return null;
      return (
        <figure className="my-10">
          <img
            src={url}
            alt={value.alt ?? ""}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <figcaption className="text-[12px] text-ink-soft text-center mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    normal: ({ children }: any) => (
      <p className="text-b1 text-ink-mid mb-5 leading-[1.85]">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-display text-h3 text-ink mt-12 mb-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-display text-h4 text-ink mt-10 mb-4">{children}</h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-blue pl-6 my-8 font-display text-h5 italic text-ink-mid">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-medium text-ink">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic text-blue">{children}</em>
    ),
    link: ({ value, children }: any) => (
      <a href={value?.href} className="text-blue underline hover:text-blue-light transition-colors duration-200" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="flex flex-col gap-2 mb-5 pl-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="flex flex-col gap-2 mb-5 pl-5 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-b1 text-ink-mid flex items-start gap-2 before:content-['·'] before:text-blue before:font-bold">
        {children}
      </li>
    ),
  },
};

// ─── Página ───────────────────────────────────────────────────────────────────

export default async function RecursoPage({ params }: { params: { slug: string } }) {
  const recurso = await getRecursoBySlug(params.slug);

  if (!recurso) notFound();

  const imagenDestacadaUrl = recurso.imagenDestacada
    ? urlForImage(recurso.imagenDestacada)
    : null;

  const fecha = recurso.fecha
    ? new Date(recurso.fecha).toLocaleDateString("es-MX", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="bg-white pt-24 lg:pt-28 pb-24">
      <Container>

        {/* Breadcrumb */}
        <FadeIn delay={0}>
          <div className="flex items-center gap-2 text-[12px] text-ink-soft mb-10">
            <Link href="/recursos" className="hover:text-blue transition-colors duration-200">
              Recursos
            </Link>
            <span>/</span>
            <span className="text-ink">{recurso.categoria}</span>
          </div>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="max-w-[760px]">
            <p className="flex items-center gap-3 text-overline text-blue mb-5">
              <span className="block w-6 h-px bg-blue" />
              {recurso.categoria} · ALFRA INMOBILIARIA
            </p>
            <h1 className="font-display text-h1 text-ink mb-6">
              {recurso.titulo}
            </h1>
            {fecha && (
              <p className="text-[13px] text-ink-soft mb-8">{fecha}</p>
            )}
            {recurso.resumen && (
              <p className="text-b1 text-ink-mid leading-[1.85] border-l-2 border-blue pl-6">
                {recurso.resumen}
              </p>
            )}
          </div>
        </FadeIn>

        {/* Imagen destacada */}
        {imagenDestacadaUrl && (
          <FadeIn delay={0.2}>
            <div className="mt-12 mb-12">
              <img
                src={imagenDestacadaUrl}
                alt={recurso.titulo}
                className="w-full max-h-[500px] object-cover rounded-lg"
              />
            </div>
          </FadeIn>
        )}

        {/* Cuerpo */}
        {recurso.cuerpo && (
          <FadeIn delay={0.25}>
            <div className="max-w-[760px] mt-12">
              <PortableText value={recurso.cuerpo} components={portableTextComponents} />
            </div>
          </FadeIn>
        )}

        {/* CTA final */}
        <FadeIn delay={0.3}>
          <div className="max-w-[760px] mt-16 p-8 bg-cream rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-h4 text-ink mb-2">
                ¿Quieres profundizar en este tema?
              </h3>
              <p className="text-[14px] font-light text-ink-mid">
                Agenda una asesoría gratuita y lo analizamos juntos con datos reales del mercado.
              </p>
            </div>
            <Link
              href="/contacto"
              className="shrink-0 inline-block bg-blue hover:bg-blue-light text-white text-btn px-8 py-[14px] rounded-[4px] transition-all duration-200 hover:-translate-y-px"
            >
              Agendar asesoría
            </Link>
          </div>
        </FadeIn>

        {/* Volver */}
        <FadeIn delay={0.35}>
          <div className="max-w-[760px] mt-8">
            <Link
              href="/recursos"
              className="text-[13px] text-ink-soft hover:text-blue transition-colors duration-200 flex items-center gap-2"
            >
              ← Volver a recursos
            </Link>
          </div>
        </FadeIn>

      </Container>
    </div>
  );
}