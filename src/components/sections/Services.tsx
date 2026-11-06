import {
  Browser,
  Files,
  Lifebuoy,
  PlugsConnected,
  Stack,
} from "@phosphor-icons/react/ssr";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const services = [
  {
    Icon: Stack,
    name: "Sistemas a medida",
    description:
      "Expedientes, compras, inventario o lo que tu operación necesite, con los pasos y permisos que ya usa tu equipo.",
  },
  {
    Icon: Files,
    name: "Digitalización de procesos",
    description:
      "Pasamos a pantalla los formatos en papel y las solicitudes por correo, con registro de quién hizo qué y cuándo.",
  },
  {
    Icon: PlugsConnected,
    name: "Integraciones",
    description:
      "Conectamos tu sistema con facturación, bancos u otras herramientas para no capturar dos veces el mismo dato.",
  },
  {
    Icon: Browser,
    name: "Sitios y landing pages",
    description:
      "Páginas rápidas que explican tu servicio y llevan a tus clientes a escribirte.",
  },
  {
    Icon: Lifebuoy,
    name: "Soporte y mejora continua",
    description:
      "Monitoreo, correcciones y nuevas funciones después de la entrega.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-titulo"
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        {/* Header stays in view while the list scrolls past. */}
        <Reveal className="lg:sticky lg:top-24">
          <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Servicios
          </p>
          <h2
            id="servicios-titulo"
            className="mt-6 heading-4 text-text md:heading-2"
          >
            Lo que construimos para tu empresa
          </h2>
          <p className="mt-6 max-w-md body-3 text-muted">
            Cada sistema parte de cómo trabaja tu equipo hoy. No adaptamos tu
            operación a un software genérico.
          </p>
          <Button href="#contacto" variant="link" className="mt-8">
            Agenda tu diagnóstico sin costo
          </Button>
        </Reveal>

        <ol className="border-b border-border">
          {services.map(({ Icon, name, description }, i) => (
            <li key={name} className="border-t border-border">
              <Reveal
                delay={i * 60}
                className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-4 py-8 sm:grid-cols-[48px_auto_minmax(0,1fr)]"
              >
                <span className="pt-1 caption-3 tabular-nums text-muted max-sm:hidden">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-surface text-accent-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="heading-6 text-text">
                    <span className="mr-2 caption-3 tabular-nums text-muted sm:hidden">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {name}
                  </h3>
                  <p className="mt-2 max-w-xl body-3 text-muted">
                    {description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
