import {
  CodeBracketIcon,
  ArrowPathIcon,
  WindowIcon,
  ArrowsRightLeftIcon,
  WrenchScrewdriverIcon,
  ArrowLongRightIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: CodeBracketIcon,
    name: "Sistemas a Medida",
    description:
      "Construimos software diseñado exactamente para tu operación, sin soluciones genéricas que no encajan.",
  },
  {
    icon: ArrowPathIcon,
    name: "Digitalización de Procesos",
    description:
      "Transformamos flujos manuales en procesos digitales eficientes que ahorran tiempo y reducen errores.",
  },
  {
    icon: WindowIcon,
    name: "Plataformas Web y Landing Pages",
    description:
      "Presencia digital que convierte visitas en clientes, con diseño profesional y carga rápida.",
  },
  {
    icon: ArrowsRightLeftIcon,
    name: "APIs e Integraciones",
    description:
      "Conectamos tus herramientas y sistemas para que trabajen juntos sin fricciones ni datos duplicados.",
  },
  {
    icon: WrenchScrewdriverIcon,
    name: "Soporte y Mantenimiento",
    description:
      "Tu software siempre operando. Nos encargamos de las actualizaciones, bugs y mejoras continuas.",
  },
  {
    icon: LightBulbIcon,
    name: "Consultoría Tecnológica",
    description:
      "Analizamos tu operación y te decimos exactamente qué tecnología necesitas — y cuál no — antes de invertir en desarrollo.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-28 px-6 overflow-hidden timeline-view animate-blurred-fade-in animate-range-[entry_0%_contain_1%]"
    >
      <div className="absolute inset-0 bg-linear-to-b from-bg via-surface/20 to-bg pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-1.5 text-xs text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Lo que hacemos
          </div>

          <h2 className="font-display mb-4 text-4xl font-bold tracking-tight text-text md:text-5xl">
            ¿En qué podemos <span className="text-accent">ayudarte?</span>
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted">
            Desde la idea hasta el sistema en producción — cubrimos cada etapa
            con soluciones que realmente funcionan para tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="group relative rounded-2xl border border-border bg-surface/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface/50"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-accent/5" />

              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl border border-border bg-surface/60 p-2.5 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                  <Icon className="size-6 text-accent group-hover:text-accent group-hover:scale-110 duration-300 transition-all" />
                </div>

                <h3 className="mb-2 font-semibold text-text">{name}</h3>

                <p className="text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted">
            ¿No encuentras lo que buscas?{" "}
            <span className="text-text/70">Hablemos.</span>
          </p>
          <Button href="#contacto" variant="secondary">
            Cuéntanos tu proyecto
            <ArrowLongRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
