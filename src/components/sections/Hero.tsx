import {
  FirstAidKit,
  Globe,
  Lightning,
  SealCheck,
  ShoppingCart,
  SquaresFour,
  WhatsappLogo,
} from "@phosphor-icons/react/ssr";
import Button from "@/components/ui/Button";
import { siteMetadata } from "@/lib/data/metadata";

const proof = [
  { value: "9", label: "sistemas en producción" },
  { value: "3", label: "industrias" },
  { value: "+500", label: "pacientes en MedOnline" },
];

// Real systems from the portfolio (src/components/portfolio/data.ts).
const systems = [
  { Icon: FirstAidKit, name: "Expediente clínico electrónico", sector: "Salud" },
  { Icon: Lightning, name: "Monitoreo eléctrico en tiempo real", sector: "Energía" },
  { Icon: ShoppingCart, name: "Gestión de compras y requisiciones", sector: "Energía" },
  { Icon: SquaresFour, name: "Panel de administración interna", sector: "Energía" },
  { Icon: Globe, name: "Sitio de prospección comercial", sector: "Agroindustria" },
];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="inicio" className="relative px-6 pt-24 pb-24">
      <div className="mx-auto mt-12 grid max-w-7xl items-center gap-16 md:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-12">
        <div>
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted"
            style={delay(0)}
          >
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Software a medida · Cuernavaca, Morelos
          </p>

          <h1
            className="animate-rise mt-6 max-w-170 pb-3 heading-3 text-hero-gradient sm:heading-2"
            style={delay(80)}
          >
            Tu operación en un solo sistema,{" "}
            <br className="hidden sm:block" />
            sin papel ni hojas de cálculo
          </h1>

          <p
            className="animate-rise mt-4 max-w-170 body-3 text-muted md:title-2"
            style={delay(160)}
          >
            Diseñamos y construimos sistemas para empresas mexicanas:
            expedientes clínicos, compras, monitoreo y paneles internos. Lo
            rentas por mes o adquieres la licencia, y nosotros lo mantenemos
            funcionando.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
            style={delay(240)}
          >
            <Button href={siteMetadata.whatsappUrl}>
              <WhatsappLogo size={20} weight="bold" aria-hidden="true" />
              Escríbenos por WhatsApp
            </Button>
            <a
              href="#contacto"
              className="body-5 text-muted underline decoration-border underline-offset-4 transition-colors duration-300 ease-base hover:text-text hover:decoration-text"
            >
              o déjanos tus datos y te respondemos en menos de 24 horas
            </a>
          </div>

          <ul
            className="animate-rise mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6"
            style={delay(320)}
            aria-label="Resultados"
          >
            {proof.map(({ value, label }) => (
              <li key={label} className="flex items-baseline gap-2">
                <span className="heading-6 tabular-nums text-text">{value}</span>
                <span className="caption-2 text-muted">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Visual: the systems we actually run in production. */}
        <figure className="animate-rise relative" style={delay(200)}>
          <div className="rounded-2xl border border-border bg-surface p-2 pb-8 shadow-xl shadow-black/5 dark:shadow-none">
            <div className="flex items-center justify-between px-3 pt-2 pb-3">
              <p className="title-4 text-text">Algunos de nuestros sistemas</p>
              <p className="caption-5 text-muted">En producción hoy</p>
            </div>

            <ul className="flex flex-col gap-1">
              {systems.map(({ Icon, name, sector }, i) => (
                <li
                  key={name}
                  className="animate-rise flex items-center gap-3 rounded-lg bg-surface-alt px-3 py-3"
                  style={delay(320 + i * 60)}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface text-accent-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate body-5 text-text">{name}</span>
                    <span className="block caption-5 text-muted">{sector}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-2 caption-4 text-muted">
                    <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
                    <span className="max-sm:sr-only">En producción</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Overlapping chip: risk reversal sits right beside the offer. */}
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-lg shadow-black/5 dark:shadow-none">
            <SealCheck size={20} className="text-accent-icon" aria-hidden="true" />
            <p className="title-4 text-text">Primer diagnóstico sin costo</p>
          </div>

          <figcaption className="sr-only">
            Sistemas desarrollados por NGC que hoy están en producción: expediente
            clínico, monitoreo eléctrico, gestión de compras, panel de
            administración y sitio de prospección comercial.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
