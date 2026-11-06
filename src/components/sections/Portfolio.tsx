import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/components/portfolio/data";

// Bento spans for the five projects, in order. First one is the large card.
const spans = [
  "md:col-span-2 lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      aria-labelledby="portafolio-titulo"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-170">
            <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted">
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              Proyectos
            </p>
            <h2
              id="portafolio-titulo"
              className="mt-6 heading-4 text-text md:heading-2"
            >
              Sistemas que hoy usan nuestros clientes
            </h2>
            <p className="mt-6 body-3 text-muted md:title-2">
              Cada proyecto resuelve un problema concreto de operación. Estos
              siguen en producción.
            </p>
          </Reveal>
          <Reveal delay={120} className="shrink-0">
            <Button href="#contacto" variant="link">
              Cuéntanos qué necesitas
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 80}
              className={spans[i] ?? "lg:col-span-2"}
            >
              <ProjectCard project={project} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
