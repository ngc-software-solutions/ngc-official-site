import {
  Code,
  GithubLogo,
  Globe,
  Handshake,
  LinkedinLogo,
  Pulse,
  Scales,
} from "@phosphor-icons/react/ssr";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    Icon: Code,
    title: "Hablas con quien programa",
    text: "Tres fundadores, sin intermediarios ni vendedores de por medio.",
  },
  {
    Icon: Pulse,
    title: "Sistemas en producción, no prototipos",
    text: "Hoy tenemos 9 sistemas funcionando con usuarios reales.",
  },
  {
    Icon: Scales,
    title: "Conocemos la normativa de tu sector",
    text: "El Código de Red en energía y la NOM 004 en salud.",
  },
  {
    Icon: Handshake,
    title: "No desaparecemos al entregar",
    text: "Te acompañamos con mantenimiento, mejoras y soporte.",
  },
];

const team = [
  {
    name: "Jayr Gil Galicia Jiménez",
    role: "Fundador · Backend y Fullstack",
    description:
      "Diseña y construye los sistemas de negocio que sostienen cada producto, desde la base de datos hasta la pantalla.",
    photo: "/team/jayr_gil_galicia_jimenez.webp",
    github: "https://github.com/JayrGilGalicia",
    linkedin:
      "https://www.linkedin.com/in/jayr-gil-galicia-jim%C3%A9nez-1053a3359/",
    portfolio: "https://jayrgalicia.dev/es",
  },
  {
    name: "Alexis Leonardo Noriega Rangel",
    role: "Fundador · DevOps y Cloud",
    description:
      "Lleva los sistemas a producción con automatización, infraestructura como código y cultura SRE.",
    photo: "/team/alexis_leonardo_noriega_rangel.webp",
    github: "https://github.com/Leo-Noriega",
    linkedin: "https://www.linkedin.com/in/leo-noriega/",
    portfolio: "https://leo-noriega.dev/",
  },
  {
    name: "Carlos Martínez Gómez",
    role: "Fundador · Backend y Arquitectura",
    description:
      "Construye los cimientos técnicos de cada proyecto y cuida que lo que el usuario ve sea igual de sólido que lo que corre por detrás.",
    photo: "/team/carlos_martinez_gomez.webp",
    github: "https://github.com/Carlos-Mtzg",
    linkedin: "https://www.linkedin.com/in/carlos-mtzg",
    portfolio: "https://carlosmtzg.dev/",
  },
];

const linkClass =
  "flex size-10 items-center justify-center rounded-lg text-muted transition-colors duration-300 ease-base hover:bg-surface-alt hover:text-text active:scale-[0.98]";

export default function Team() {
  return (
    <section
      id="equipo"
      aria-labelledby="equipo-titulo"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted">
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              Por qué NGC
            </p>
            <h2
              id="equipo-titulo"
              className="mt-6 heading-4 text-text md:heading-2"
            >
              Hablas directo con quienes construyen tu sistema
            </h2>
            <p className="mt-6 max-w-md body-3 text-muted">
              Somos tres fundadores que escriben código, toman las decisiones
              técnicas y responden por cada entrega.
            </p>
          </Reveal>

          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-16">
            {reasons.map(({ Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={i * 60}>
                  <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-accent-icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 title-3 text-text">{title}</h3>
                  <p className="mt-1 body-6 text-muted">{text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-24 caption-3 text-muted">El equipo</h3>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {team.map((member, i) => (
            <li key={member.name}>
              <Reveal delay={i * 80} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={member.photo}
                      alt={`Foto de ${member.name}`}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="size-16 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0">
                      <p className="title-3 text-text">{member.name}</p>
                      <p className="caption-2 text-muted">{member.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 body-6 text-muted">{member.description}</p>
                  <div className="mt-auto flex gap-1 pt-6">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${member.name}`}
                      className={linkClass}
                    >
                      <GithubLogo size={20} aria-hidden="true" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${member.name}`}
                      className={linkClass}
                    >
                      <LinkedinLogo size={20} aria-hidden="true" />
                    </a>
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Portafolio de ${member.name}`}
                      className={linkClass}
                    >
                      <Globe size={20} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
