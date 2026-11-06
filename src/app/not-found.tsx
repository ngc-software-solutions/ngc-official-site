import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import Button from "@/components/ui/Button";
import { siteMetadata } from "@/lib/data/metadata";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false },
};

const shortcuts = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#portafolio", label: "Proyectos" },
  { href: "/#preguntas", label: "Preguntas frecuentes" },
  { href: "/privacidad", label: "Aviso de privacidad" },
];

export default function NotFound() {
  return (
    <main id="contenido" className="px-6 pt-24 pb-24">
      <div className="mx-auto mt-12 max-w-170 md:mt-24">
        <p className="caption-3 tabular-nums text-muted">Error 404</p>
        <h1 className="mt-4 pb-3 heading-4 text-hero-gradient md:heading-2">
          Esta página no existe o cambió de lugar
        </h1>
        <p className="mt-4 body-3 text-muted md:title-2">
          Revisa la dirección o vuelve al inicio. Si buscabas algo en
          particular, escríbenos y te ayudamos.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-3 py-2 button-md text-on-accent transition duration-300 ease-base hover:opacity-90 active:scale-[0.98]"
          >
            <ArrowLeftIcon size={20} weight="bold" aria-hidden="true" />
            Volver al inicio
          </Link>
          <Button href={siteMetadata.whatsappUrl} variant="secondary">
            <WhatsappLogoIcon size={20} aria-hidden="true" />
            Escríbenos por WhatsApp
          </Button>
        </div>

        <nav aria-label="Atajos" className="mt-16 border-t border-border pt-8">
          <p className="caption-3 text-muted">También te puede servir</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
            {shortcuts.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="body-5 text-text underline decoration-border underline-offset-4 transition-colors duration-300 ease-base hover:decoration-text"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
