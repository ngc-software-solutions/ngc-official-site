import {
  CalendarCheck,
  Check,
  Key,
  LockKey,
} from "@phosphor-icons/react/ssr";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// High level on purpose: terms are agreed with each client.
const models = [
  {
    Icon: CalendarCheck,
    name: "Renta mensual",
    summary: "Pagas una mensualidad y nosotros nos encargamos de que funcione.",
    points: [
      "Empiezas sin una inversión inicial grande",
      "Nosotros lo mantenemos y lo actualizamos",
      "Ideal para arrancar rápido y crecer por etapas",
    ],
  },
  {
    Icon: Key,
    name: "Licencia permanente",
    summary: "Un solo pago por el derecho de uso de tu sistema, sin vencimiento.",
    points: [
      "Uso permanente para tu empresa",
      "Soporte y mejoras cuando los necesites",
      "Ideal si prefieres una inversión única",
    ],
  },
];

export default function Models() {
  return (
    <section
      id="modelos"
      aria-labelledby="modelos-titulo"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-170">
          <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Modelos
          </p>
          <h2
            id="modelos-titulo"
            className="mt-6 heading-4 text-text md:heading-2"
          >
            Dos formas de tener tu sistema
          </h2>
          <p className="mt-6 body-3 text-muted md:title-2">
            En los dos casos el sistema se hace 100% a tu medida. Lo que cambia
            es cómo lo pagas, y las condiciones las definimos contigo.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-6 md:grid-cols-2">
          {models.map(({ Icon, name, summary, points }, i) => (
            <Reveal key={name} delay={i * 120} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8 md:p-10">
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface text-accent-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-6 heading-5 text-text">{name}</h3>
                <p className="mt-2 body-3 text-muted">{summary}</p>
                <ul className="mt-8 flex flex-col gap-3 border-t border-border pt-8">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check
                        size={20}
                        weight="bold"
                        className="shrink-0 text-accent-icon"
                        aria-hidden="true"
                      />
                      <span className="body-6 text-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-6 rounded-2xl bg-surface-alt p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <p className="flex max-w-2xl items-start gap-3 body-6 text-muted">
              <LockKey
                size={20}
                className="mt-0.5 shrink-0 text-text"
                aria-hidden="true"
              />
              <span>
                <span className="body-4 text-text">
                  En ambos modelos tus datos siempre son tuyos.
                </span>{" "}
                El código lo desarrolla y mantiene NGC, y las condiciones las
                acordamos contigo en el diagnóstico.
              </span>
            </p>
            <Button href="#contacto" variant="secondary" className="shrink-0">
              Agenda tu diagnóstico sin costo
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
