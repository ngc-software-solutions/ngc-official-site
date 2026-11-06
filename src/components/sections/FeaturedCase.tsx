import {
  ArrowUpRightIcon,
  CertificateIcon,
  QuotesIcon,
  StethoscopeIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/ssr";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const points = [
  {
    Icon: UsersThreeIcon,
    title: "Más de 500 pacientes registrados",
    detail: "con su historial completo en un solo lugar.",
  },
  {
    Icon: CertificateIcon,
    title: "Diseñado conforme a la NOM 004",
    detail:
      "cinco documentos clínicos con firma digital que los protege al completarse.",
  },
  {
    Icon: StethoscopeIcon,
    title: "Todo el equipo en el mismo expediente",
    detail: "médicos, enfermería y administración, cada quien con sus permisos.",
  },
];

// Published verbatim on medonline.com.mx; approved for use by the client.
const testimonial =
  "Desde que implementamos este sistema para el manejo de los expedientes clínicos de nuestros pacientes, toda la información está mucho más ordenada y es mucho más fácil dar seguimiento a cada caso. Además, ahora usamos muchísimo menos papel, y para nuestras enfermeras llevar el registro diario es mucho más sencillo y rápido. Estamos realmente satisfechos con el resultado.";

export default function FeaturedCase() {
  return (
    <section
      id="caso"
      aria-labelledby="caso-titulo"
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
            Caso real · En producción
          </p>

          <h2
            id="caso-titulo"
            className="mt-6 max-w-170 heading-4 text-text md:heading-2"
          >
            MedOnline, el expediente clínico de Clínica San Juan
          </h2>

          <p className="mt-6 max-w-xl body-3 text-muted">
            Clínica San Juan, en Tetela del Volcán, Morelos, dejó el papel. Hoy
            lleva pacientes, expedientes, agenda y reportes en un sistema que
            construimos para su forma de trabajar.
          </p>

          <ul className="mt-10 flex flex-col gap-6">
            {points.map(({ Icon, title, detail }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p className="max-w-md pt-2 body-6 text-muted">
                  <span className="body-4 text-text">{title}</span>, {detail}
                </p>
              </li>
            ))}
          </ul>

          <Button
            href="https://medonline.com.mx"
            variant="link"
            className="mt-10"
          >
            Conoce MedOnline
            <ArrowUpRightIcon size={16} aria-hidden="true" />
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <figure className="rounded-2xl border border-border bg-surface p-8 shadow-xl shadow-black/5 md:p-10 dark:shadow-none">
            <div className="flex items-center justify-between gap-6 border-b border-border pb-6">
              <img
                src="/logos/clinica-san-juan.svg"
                alt="Clínica San Juan"
                width={104}
                height={48}
                loading="lazy"
                className="h-12 w-auto dark:brightness-0 dark:invert"
              />
              <QuotesIcon
                size={32}
                weight="fill"
                className="shrink-0 text-accent-icon"
                aria-hidden="true"
              />
            </div>

            <blockquote className="mt-6">
              <p className="title-2 text-text">“{testimonial}”</p>
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-xl bg-accent title-4 text-on-accent"
              >
                EJ
              </span>
              <span>
                <span className="block title-3 text-text">
                  Dr. Esmer Jiménez Solís
                </span>
                <span className="block caption-2 text-muted">
                  Responsable de la clínica · Clínica San Juan
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
