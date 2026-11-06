"use client";

import Button from "@/components/ui/Button";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden" id="inicio">
      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-1.5 text-xs text-muted backdrop-blur-sm animate-slide-up-fade">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          NGC Software Solutions · Cuernavaca, México
        </div>

        <h1 className="mb-5 max-w-170 heading-3 md:heading-1 text-hero-gradient animate-slide-up-fade animate-delay-150">
          Software que{" "}
escala, transforma y genera resultados
        </h1>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-muted md:text-lg animate-slide-up-fade animate-delay-250">
          Diseñamos y desarrollamos soluciones digitales a medida — desde
          aplicaciones web hasta sistemas empresariales — para que tu negocio
          avance sin límites.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#contacto" variant="primary">
            Hablemos de tu proyecto
            <ArrowLongRightIcon className="size-6" />
          </Button>
          <Button href="#portafolio" variant="secondary">
            Ver nuestro trabajo
          </Button>
        </div>
      </div>

      <ScrollIndicator targetId="servicios" />
    </section>
  );
}
