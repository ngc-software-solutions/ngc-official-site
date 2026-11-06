import {
  ChartLineUp,
  ChatsCircle,
  ClockCounterClockwise,
  Database,
  FileXls,
  Note,
  Question,
  UserCircleCheck,
} from "@phosphor-icons/react/ssr";
import Reveal from "@/components/ui/Reveal";

const today = [
  { Icon: ChatsCircle, text: "Solicitudes repartidas en chats y correos" },
  { Icon: FileXls, text: "Hojas de cálculo con versiones distintas" },
  { Icon: Note, text: "Formatos en papel que alguien recaptura después" },
  { Icon: Question, text: "Nadie sabe en qué va cada solicitud" },
];

const withSystem = [
  {
    Icon: UserCircleCheck,
    title: "Responsable y estado en cada solicitud",
    text: "tu equipo ve quién la tiene y qué falta.",
  },
  {
    Icon: Database,
    title: "Una sola fuente de datos",
    text: "todos trabajan sobre la misma información.",
  },
  {
    Icon: ClockCounterClockwise,
    title: "Historial de cambios",
    text: "queda registro de quién hizo qué y cuándo.",
  },
  {
    Icon: ChartLineUp,
    title: "Reportes en tiempo real",
    text: "sin esperar a que alguien junte los datos.",
  },
];

export default function ProblemSolution() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-titulo"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-170">
          <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            El problema
          </p>
          <h2
            id="problema-titulo"
            className="mt-6 heading-4 text-text md:heading-2"
          >
            Cuando tu operación vive entre Excel, WhatsApp y papel
          </h2>
          <p className="mt-6 body-3 text-muted md:title-2">
            La información se pierde entre personas y nadie sabe en qué va cada
            solicitud.
          </p>
        </Reveal>

        <div className="mt-16 grid items-start gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Today: muted on purpose, sits slightly lower to break symmetry. */}
          <Reveal className="lg:mt-12">
            <div className="rounded-2xl bg-surface-alt p-8">
              <p className="caption-3 text-muted">Hoy</p>
              <ul className="mt-6 flex flex-col gap-4">
                {today.map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface text-muted">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="body-6 text-muted">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface p-8 shadow-xl shadow-black/5 md:p-10 dark:shadow-none">
              <p className="caption-3 text-muted">Con un sistema a tu medida</p>
              <h3 className="mt-4 heading-5 text-text md:heading-4">
                Lo juntamos en un solo sistema
              </h3>
              <p className="mt-4 max-w-lg body-3 text-muted">
                Con roles, historial de cambios y reportes que tu equipo
                consulta en tiempo real.
              </p>

              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {withSystem.map(({ Icon, title, text }) => (
                  <li key={title} className="flex flex-col gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-accent-icon">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <p className="body-6 text-muted">
                      <span className="body-4 text-text">{title}</span>: {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
