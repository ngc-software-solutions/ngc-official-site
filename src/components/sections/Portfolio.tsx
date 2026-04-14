import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";
import PortfolioBlock from "@/components/portfolio/PortfolioBlock";
import { blocks } from "@/components/portfolio/data";

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="relative py-28 px-6 overflow-hidden timeline-view animate-blurred-fade-in animate-range-[entry_0%_contain_1%]"
    >
      <div className="absolute inset-0 bg-linear-to-b from-bg via-surface/20 to-bg pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-20 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-1.5 text-xs text-muted backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Nuestro trabajo
          </div>
          <h2 className="font-display mb-4 text-4xl font-bold tracking-tight text-text md:text-5xl">
            Proyectos que{" "}
            <span className="text-accent">generan impacto real</span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted">
            Cada proyecto resuelve un problema concreto de negocio. Aquí
            mostramos lo que hemos construido y el resultado que entregamos.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {blocks.map((block) => (
            <div key={block.badge}>
              <PortfolioBlock block={block} />
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 text-center border-t border-border pt-16">
          <p className="text-sm text-muted">
            ¿Quieres ver más detalle de algún proyecto?{" "}
            <span className="text-text/70">Hablemos.</span>
          </p>
          <Button href="#contacto" variant="secondary">
            Cuéntanos qué necesitas
            <ArrowLongRightIcon className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
