import { SealCheckIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import Button from "@/components/ui/Button";
import SystemIllustration from "@/components/ui/SystemIllustration";
import { siteMetadata } from "@/lib/data/metadata";

const proof = [
  { value: "9", label: "sistemas en producción" },
  { value: "3", label: "industrias" },
  { value: "+500", label: "pacientes en MedOnline" },
];

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section id="inicio" className="relative px-6 pt-24 pb-24">
      <div className="mx-auto mt-12 grid max-w-7xl items-center gap-12 md:mt-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
        <div>
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted"
            style={delay(0)}
          >
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Hecho en Cuernavaca para empresas de todo México
          </p>

          <h1
            className="animate-rise mt-6 pb-3 heading-2 text-hero-gradient sm:display-2 xl:display-1"
            style={delay(80)}
          >
            Software
            <br />a la medida
          </h1>

          <p
            className="animate-rise mt-4 max-w-170 body-3 text-muted md:title-2"
            style={delay(160)}
          >
            Tu operación en un solo sistema, sin papel ni hojas de cálculo. Lo
            rentas por mes o adquieres la licencia, y nosotros lo mantenemos
            funcionando.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col items-start gap-4"
            style={delay(240)}
          >
            <Button href={siteMetadata.whatsappUrl}>
              <WhatsappLogoIcon size={20} weight="bold" aria-hidden="true" />
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

        <figure className="relative mx-auto w-full max-w-xl">
          <SystemIllustration className="h-auto w-full" />

          {/* Risk reversal sits right beside the offer. */}
          <div
            className="animate-rise absolute -bottom-2 right-0 flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 shadow-lg shadow-black/5 dark:shadow-none"
            style={delay(700)}
          >
            <SealCheckIcon size={20} className="text-accent-icon" aria-hidden="true" />
            <p className="title-4 text-text">Primer diagnóstico sin costo</p>
          </div>
        </figure>
      </div>
    </section>
  );
}
