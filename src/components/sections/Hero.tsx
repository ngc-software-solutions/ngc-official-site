"use client";

import Aurora from "@reactbits/Aurora";
import Button from "@/components/ui/Button";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden" id="inicio">
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#259dc2", "#0b1e2d", "#259dc2"]}
          blend={0.4}
          amplitude={0.9}
          speed={0.6}
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-bg/70 via-bg/10 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-1.5 text-xs text-muted backdrop-blur-sm animate-slide-up-fade">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          NGC Software Solutions · Cuernavaca, México
        </div>

        <h1 className="font-display mb-5 max-w-3xl text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text animate-slide-up-fade animate-delay-150">
          Software que{" "}
          <span className="text-accent">
            escala, transforma y genera resultados
          </span>
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
