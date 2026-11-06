import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { siteMetadata } from "@/lib/data/metadata";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#modelos", label: "Modelos" },
  { href: "/#portafolio", label: "Proyectos" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#preguntas", label: "Preguntas" },
  { href: "/#contacto", label: "Contacto" },
];

const iconLink =
  "flex size-10 items-center justify-center rounded-lg text-muted transition-colors duration-300 ease-base hover:bg-surface-alt hover:text-text active:scale-[0.98]";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 pt-16 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link href="/#inicio" className="inline-flex items-center gap-2">
              <Logo className="size-8" />
              <span className="title-4 text-text">Software Solutions</span>
            </Link>
            <p className="mt-4 body-6 text-muted">
              Software a medida para empresas mexicanas. Desde{" "}
              {siteMetadata.location}, con trabajo remoto en todo el país.
            </p>
          </div>

          <nav aria-label="Pie de página">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="body-5 text-muted transition-colors duration-300 ease-base hover:text-text"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-1">
            <a
              href={siteMetadata.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de NGC"
              className={iconLink}
            >
              <WhatsappLogoIcon size={20} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${siteMetadata.email}`}
              aria-label="Correo de NGC"
              className={iconLink}
            >
              <EnvelopeSimpleIcon size={20} aria-hidden="true" />
            </a>
            <a
              href={siteMetadata.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de NGC"
              className={iconLink}
            >
              <GithubLogoIcon size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="caption-5 text-muted">
            © {year} {siteMetadata.name}. Todos los derechos reservados.
          </p>
          <Link
            href="/privacidad"
            className="caption-4 text-muted underline decoration-border underline-offset-4 transition-colors duration-300 ease-base hover:text-text hover:decoration-text"
          >
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
