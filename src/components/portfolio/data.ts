import type { Project } from "@components/portfolio/types";

/**
 * Order matters: the first project renders as the large bento card.
 * The energy sector client must stay anonymous (no name, no logo).
 */
export const projects: Project[] = [
  {
    title: "Monitoreo eléctrico en tiempo real",
    sector: "Energía",
    description:
      "Operadores del sector eléctrico monitorean parámetros de red en vivo, verifican el cumplimiento del Código de Red V2.0 y construyen diagramas de su infraestructura, con alertas antes de que un problema se convierta en falla o multa.",
    status: "En producción",
    stack: ["React", "Spring Boot", "MySQL", "WebSockets", "Docker"],
    videoId: "mN6xWBGA2e0",
  },
  {
    title: "Gestión de compras",
    sector: "Energía",
    description:
      "Centraliza las requisiciones de materiales y servicios, desde que alguien levanta la solicitud hasta que compras la cotiza, asigna y cierra. La información ya no se pierde en correos y mensajes.",
    status: "En producción",
    stack: ["React", "Spring Boot", "MySQL", "Docker"],
    videoId: "zGDKg9FvWD8",
  },
  {
    title: "Panel de administración interna",
    sector: "Energía",
    description:
      "Los equipos internos gestionan formularios, postulaciones, vacantes y métricas del negocio, con acceso por rol.",
    status: "En producción",
    stack: ["React", "Spring Boot", "MySQL", "Docker"],
    videoId: "CzYr-h1TY8Q",
  },
  {
    title: "MedOnline, expediente clínico electrónico",
    sector: "Salud",
    description:
      "Digitaliza la operación de Clínica San Juan: pacientes, expedientes clínicos, agenda de consultas y reportes, con acceso distinto para médicos, enfermería y administración.",
    status: "En producción",
    stack: ["React", "Spring Boot", "MySQL", "Docker"],
    videoId: "F71Kk-L_1Cg",
    href: "https://medonline.com.mx",
  },
  {
    title: "Kaptia, sitio de marketing",
    sector: "Agroindustria",
    description:
      "Sitio para una plataforma SaaS de prospección comercial geolocalizada, dirigida a equipos de ventas del sector agroindustrial.",
    status: "En producción",
    stack: ["React", "Next.js"],
    videoId: "QPQZgiveDZQ",
  },
];

/** Embed URL used by the video modal. */
export const embedUrl = (videoId: string) =>
  `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
