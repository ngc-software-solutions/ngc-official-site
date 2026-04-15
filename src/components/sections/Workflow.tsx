import {
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlassIcon,
    title: "Levantamiento",
    description:
      "Entendemos tu operación, tus cuellos de botella y tus objetivos antes de escribir una sola línea de código.",
  },
  {
    number: "02",
    icon: Square3Stack3DIcon,
    title: "Arquitectura",
    description:
      "Diseñamos la solución técnica, la documentamos y la validamos contigo antes de arrancar el desarrollo.",
  },
  {
    number: "03",
    icon: CodeBracketIcon,
    title: "Desarrollo",
    description:
      "Construimos por etapas con revisiones quincenales para que siempre sepas en qué punto va tu proyecto.",
  },
  {
    number: "04",
    icon: RocketLaunchIcon,
    title: "Entrega",
    description:
      "Hacemos el deploy, capacitamos a tu equipo y ponemos el sistema en marcha contigo.",
  },
  {
    number: "05",
    icon: LifebuoyIcon,
    title: "Soporte",
    description:
      "No desaparecemos al entregar. Te acompañamos con mantenimiento, mejoras y soporte continuo.",
  },
];

export default function Workflow() {
  return (
    <section
      id="proceso"
      className="relative py-28 px-6 overflow-hidden timeline-view animate-blurred-fade-in animate-range-[entry_0%_contain_1%]"
    >
      <div className="absolute inset-0 bg-linear-to-b from-bg via-surface/20 to-bg pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-1.5 text-xs text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Nuestro proceso
          </div>

          <h2 className="font-display mb-4 text-4xl font-bold tracking-tight text-text md:text-5xl">
            De la idea al sistema{" "}
            <span className="text-accent">que tu negocio necesita</span>
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted">
            Un proceso claro y transparente para que sepas exactamente qué
            esperar en cada etapa de tu proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="group relative rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface/50 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-accent/5" />

              <div className="relative">
                <p className="mb-3 font-mono text-2xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors duration-300">
                  {number}
                </p>

                <div className="mb-4 inline-flex rounded-xl border border-border bg-surface/60 p-2.5 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                  <Icon className="size-6 text-accent transition-all duration-300 group-hover:scale-110" />
                </div>

                <h3 className="mb-2 font-semibold text-text">{title}</h3>

                <p className="text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
