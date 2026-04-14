"use client";

import Aurora from "@/components/ui/reactbits/Aurora";

const NGC_EMAIL = "ngcsoftwaresolutions@gmail.com";
const NGC_WHATSAPP = "5660267647";
const NGC_GITHUB_ORG = "https://github.com/ngc-software-solutions";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const navLinks = [
  { id: "servicios", label: "Servicios" },
  { id: "portafolio", label: "Portafolio" },
  { id: "equipo", label: "Equipo" },
  { id: "contacto", label: "Contáctanos" },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative px-6 py-12">
      <div className="absolute bottom-0 left-0 right-0 h-screen scale-y-[-1] pointer-events-none">
        <Aurora
          colorStops={["#259dc2", "#0b1e2d", "#259dc2"]}
          blend={1}
          amplitude={0.9}
          speed={0.6}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <img src="/logos/logo_reducido.svg" alt="NGC" className="h-9 w-9" />
            <p className="text-xs text-muted text-center sm:text-left">
              Desarrollo de software a medida — Cuernavaca, México.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-sm text-muted transition-colors duration-200 hover:text-text"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted/60">
            © 2025 NGC Software Solutions. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={NGC_GITHUB_ORG}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted/60 transition-colors duration-200 hover:text-text"
              aria-label="GitHub de NGC"
            >
              <GitHubIcon className="size-4.5" />
            </a>
            <a
              href={`mailto:${NGC_EMAIL}`}
              className="text-muted/60 transition-colors duration-200 hover:text-text"
              aria-label="Correo de NGC"
            >
              <EnvelopeIcon className="size-4.5" />
            </a>
            <a
              href={`https://wa.me/${NGC_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted/60 transition-colors duration-200 hover:text-text"
              aria-label="WhatsApp de NGC"
            >
              <WhatsAppIcon className="size-4.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
