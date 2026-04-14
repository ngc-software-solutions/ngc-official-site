import type { PortfolioBlock } from "@components/portfolio/types";

const params =
  "?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=";

export const blocks: PortfolioBlock[] = [
  {
    badge: "Sector Energético Industrial",
    title: "Ecosistema Digital Completo — Sector Energético Industrial",
    description:
      "Construimos la infraestructura digital end-to-end de una empresa líder del sector energético industrial en México — desde sistemas empresariales complejos hasta su presencia pública completa.",
    systems: [
      {
        title: "Plataforma de Monitoreo Eléctrico en Tiempo Real",
        description:
          "Sistema que permite a operadores del sector eléctrico monitorear parámetros de red en vivo, verificar cumplimiento del Código de Red V2.0 mexicano y construir diagramas interactivos de su infraestructura — con alertas automáticas antes de que un problema se convierta en falla o multa.",
        status: "En Producción",
        stack: ["React", "Spring Boot", "MySQL", "WebSockets", "Docker"],
        videoUrl: `https://www.youtube.com/embed/mN6xWBGA2e0${params}mN6xWBGA2e0`,
      },
      {
        title: "Sistema de Gestión de Compras Interno",
        description:
          "Plataforma que estandariza y centraliza el flujo completo de requisiciones de materiales y servicios — desde que un empleado levanta una solicitud hasta que el área de compras la cotiza, asigna y cierra — eliminando la pérdida de información en correos y mensajes informales.",
        status: "En Producción",
        stack: ["React", "Spring Boot", "MySQL", "Docker"],
        videoUrl: `https://www.youtube.com/embed/-51ME3M-YPU${params}-51ME3M-YPU`,
      },
    ],
    pages: [
      {
        title: "Sitio Corporativo",
        description:
          "Presencia digital principal de la empresa con catálogo de servicios, portafolio de clientes industriales y portal de reclutamiento.",
        status: "En Producción",
        videoUrl: `https://www.youtube.com/embed/J5WLkJ4yB8g${params}J5WLkJ4yB8g`,
      },
      {
        title: "Gevensi — Landing Page",
        description:
          "Página de aterrizaje comercial que presenta el sistema de gestión energética a industrias con obligación legal de implementar un SGEn.",
        status: "En Producción",
        videoUrl: `https://www.youtube.com/embed/hPmufJPyKnU${params}hPmufJPyKnU`,
      },
      {
        title: "Monitor i3 — Landing Page",
        description:
          "Landing orientada a responsables de planta que necesitan visibilidad sobre su consumo eléctrico y cumplimiento normativo en tiempo real.",
        status: "En Producción",
        videoUrl: `https://www.youtube.com/embed/HkGRpXlsX7I${params}HkGRpXlsX7I`,
      },
      {
        title: "SISMEDIA — Landing Page",
        description:
          "Sitio de aterrizaje para un sistema de submedición eléctrica inteligente e inalámbrico dirigido a industrias manufactureras y de administración de edificios.",
        status: "En Producción",
        videoUrl: `https://www.youtube.com/embed/Eui6RX98GUY${params}Eui6RX98GUY`,
      },
      {
        title: "Panel de Administración Interna",
        description:
          "Dashboard centralizado que permite a los equipos internos gestionar formularios entrantes, postulaciones, vacantes y métricas de negocio con control de acceso por rol.",
        status: "En Producción",
        videoUrl: `https://www.youtube.com/embed/QV0bkNM6iYI${params}QV0bkNM6iYI`,
      },
    ],
  },
  {
    badge: "Sector Salud",
    title: "Digitalización Clínica — Sector Salud",
    description:
      "Sistema a medida que reemplaza procesos en papel por una plataforma centralizada de gestión médica para una clínica en Tetela del Volcán, Morelos.",
    systems: [
      {
        title: "Sistema de Gestión de Expedientes Clínicos",
        description:
          "Plataforma que digitaliza la operación completa de Clínica San Juan — gestión de pacientes, expedientes clínicos, agenda de consultas y reportes — con control de acceso diferenciado para médicos, enfermeras y administradores.",
        status: "En Producción",
        stack: ["React", "Spring Boot", "MySQL", "Docker"],
      },
    ],
    pages: [],
  },
];
