import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteMetadata } from "@/lib/data/metadata";

const steps = [
  {
    title: "Diagnóstico",
    text: "Conocemos tu operación y te decimos qué conviene construir y qué no.",
    free: true,
  },
  {
    title: "Diseño y validación",
    text: "Te mostramos las pantallas y el flujo antes de programar.",
  },
  {
    title: "Desarrollo por etapas",
    text: "Revisiones cada dos semanas para que veas avance real.",
  },
  {
    title: "Entrega y acompañamiento",
    text: "Ponemos el sistema en marcha, capacitamos a tu equipo y seguimos dando soporte.",
  },
];

export default function Workflow() {
  return (
    <section
      id="proceso"
      aria-labelledby="proceso-titulo"
      className="bg-surface-alt px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-170">
          <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Cómo trabajamos
          </p>
          <h2
            id="proceso-titulo"
            className="mt-6 heading-4 text-text md:heading-2"
          >
            De la idea a tu sistema en cuatro pasos
          </h2>
          <p className="mt-6 body-3 text-muted md:title-2">
            Sabes en qué va tu proyecto en cada etapa y lo validas antes de
            avanzar a la siguiente.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-x-6 lg:grid-cols-4">
          {steps.map(({ title, text, free }, i) => {
            const last = i === steps.length - 1;
            return (
              <li
                key={title}
                className={`relative grid grid-cols-[48px_minmax(0,1fr)] gap-x-4 lg:block ${last ? "" : "pb-8 lg:pb-0"}`}
              >
                {/* Connectors: horizontal on desktop, vertical on mobile. */}
                {!last && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute top-6 left-16 -right-6 hidden h-px bg-border lg:block"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute top-16 bottom-0 left-6 w-px bg-border lg:hidden"
                    />
                  </>
                )}

                <Reveal delay={i * 80}>
                  <span
                    className={`flex size-12 items-center justify-center rounded-xl heading-6 tabular-nums ${
                      free
                        ? "bg-accent text-on-accent"
                        : "border border-border bg-surface text-text"
                    }`}
                  >
                    {i + 1}
                  </span>
                </Reveal>

                <Reveal delay={i * 80 + 40} className="pt-2 lg:mt-6 lg:pt-0">
                  <h3 className="flex flex-wrap items-center gap-2 heading-6 text-text">
                    {title}
                    {free && (
                      <span className="rounded-md border border-border bg-surface px-2 py-0.5 caption-3 text-text">
                        Sin costo
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 max-w-xs body-6 text-muted">{text}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-16 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Button href={siteMetadata.whatsappUrl}>
            <WhatsappLogoIcon size={20} weight="bold" aria-hidden="true" />
            Agenda tu diagnóstico
          </Button>
          <p className="body-6 text-muted">
            Trabajamos de forma remota con empresas de todo México.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
