const team = [
  {
    name: "Jayr Gil Galicia Jiménez",
    role: "Fundador · Backend & Fullstack",
    description:
      "Diseña y construye los sistemas de negocio que sostienen cada producto — desde la base de datos hasta la pantalla.",
    photo: "/team/jayr_gil_galicia_jimenez.webp",
    github: "https://github.com/JayrGilGalicia",
    linkedin:
      "https://www.linkedin.com/in/jayr-gil-galicia-jim%C3%A9nez-1053a3359/",
  },
  {
    name: "Alexis Leonardo Noriega Rangel",
    role: "Fundador · DevOps & Cloud",
    description:
      "Lleva los sistemas de desarrollo a producción con automatización, infraestructura como código y cultura SRE.",
    photo: "/team/alexis_leonardo_noriega_rangel.webp",
    github: "https://github.com/Leo-Noriega",
    linkedin: "https://www.linkedin.com/in/leo-noriega/",
    portfolio: "https://leo-noriega.github.io/portfolio/",
  },
  {
    name: "Carlos Martínez Gómez",
    role: "Fundador · Backend & Arquitectura",
    description:
      "Construye los cimientos técnicos de cada proyecto y se asegura de que lo que el usuario ve sea igual de robusto que lo que corre por detrás.",
    photo: "/team/carlos_martinez_gomez.webp",
    github: "https://github.com/Carlos-Mtzg",
    linkedin: "https://www.linkedin.com/in/carlos-mtzg",
    portfolio: "https://carlos-mtzg.github.io/carlos-portfolio/",
  },
];

import { GlobeAltIcon } from "@heroicons/react/24/outline";

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

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Team() {
  return (
    <section
      id="equipo"
      className="relative py-28 px-6 overflow-hidden timeline-view animate-blurred-fade-in animate-range-[entry_0%_contain_1%] bg-[#f0f7fb] border-t-4 border-b-4 border-accent"
    >
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c5dbe8] bg-white/60 px-4 py-1.5 text-xs text-[#4a6a80] backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Quiénes somos
          </div>

          <h2 className="font-display mb-4 text-4xl font-bold tracking-tight text-bg md:text-5xl">
            Las personas detrás de{" "}
            <span className="text-accent">cada proyecto</span>
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#4a6a80]">
            Tres fundadores que escriben código, toman decisiones técnicas y
            entregan resultados — sin intermediarios.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col items-center rounded-2xl border border-[#c5dbe8] bg-white/70 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-white/90 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-accent/5" />

              <div className="relative mb-6">
                <div className="size-24 rounded-full border-2 border-[#c5dbe8] overflow-hidden transition-colors duration-300 group-hover:border-accent/50">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex flex-col items-center text-center flex-1">
                <p className="mb-1 text-xs font-medium text-accent tracking-wide uppercase">
                  {member.role}
                </p>

                <h3 className="mb-3 font-semibold text-bg leading-snug">
                  {member.name}
                </h3>

                <p className="text-sm leading-relaxed text-[#4a6a80] flex-1">
                  {member.description}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a6a80] hover:text-bg transition-colors duration-200"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <GitHubIcon className="size-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a6a80] hover:text-bg transition-colors duration-200"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <LinkedInIcon className="size-5" />
                  </a>
                  {member.portfolio && (
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a6a80] hover:text-bg transition-colors duration-200"
                      aria-label={`Portafolio de ${member.name}`}
                    >
                      <GlobeAltIcon className="size-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
