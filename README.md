# NGC Software Solutions — Sitio Oficial

Sitio web oficial de **NGC Software Solutions**, empresa de desarrollo de software a medida con base en Cuernavaca, Morelos, México.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion, tailwind-animations |
| Formularios | React Hook Form + Yup |
| Gráficos WebGL | OGL (Aurora shader) |
| Iconos | Heroicons |
| Fuentes | Inter (sans), Syne (display) |
| Package manager | pnpm |

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz — Navbar, UpButton, metadata
│   ├── page.tsx            # Página principal (single-page)
│   └── globals.css
├── components/
│   ├── sections/           # Secciones de la página
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Team.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── portfolio/          # Componentes del portafolio
│   │   ├── PortfolioBlock.tsx
│   │   ├── SystemsCarousel.tsx
│   │   ├── SystemCard.tsx
│   │   ├── PageCard.tsx
│   │   ├── VideoModal.tsx
│   │   └── SectionLabel.tsx
│   └── ui/                 # Componentes reutilizables
│       ├── Navbar.tsx
│       ├── Navlink.tsx
│       ├── Button.tsx
│       ├── UpButton.tsx
│       ├── ScrollIndicator.tsx
│       └── reactbits/
│           └── Aurora.tsx  # Shader WebGL de fondo animado
└── lib/
    └── data/
        └── metadata.ts     # Datos globales del sitio (nombre, URL, contacto)
```

## Secciones

- **Hero** — Presentación principal con Aurora animada y CTAs de scroll
- **Servicios** — Tarjetas con los 6 servicios principales de NGC
- **Portafolio** — Proyectos destacados con carrusel, videos y tarjetas
- **Equipo** — Los tres fundadores con links a GitHub, LinkedIn y portafolio
- **Contacto** — Formulario validado que abre el cliente de correo + link a WhatsApp
- **Footer** — Links de navegación, redes sociales y Aurora decorativa

## Desarrollo local

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts

```bash
pnpm dev      # Servidor de desarrollo
pnpm build    # Build de producción
pnpm start    # Servidor de producción
pnpm lint     # Linter
```

## Contacto

- Web: [ngcsoftwaresolutions.com](https://ngcsoftwaresolutions.com/)
- Correo: ngcsoftwaresolutions@gmail.com
- WhatsApp: +52 56-6026-7647
- GitHub: [github.com/ngc-software-solutions](https://github.com/ngc-software-solutions)
- Ubicación: Cuernavaca, Morelos, México
