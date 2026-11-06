import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteMetadata } from "@/lib/data/metadata";

// Only facts confirmed by NGC. Plain question/answer text for AEO.
const faqs = [
  {
    q: "¿Cuánto cuesta un sistema a medida?",
    a: "Depende del alcance. Después del diagnóstico, que no tiene costo, te damos una cotización en renta mensual y en licencia permanente.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Depende de la complejidad del sistema. En el diagnóstico definimos las etapas y te damos fechas para cada una.",
  },
  {
    q: "¿Qué diferencia hay entre rentar y comprar la licencia?",
    a: "Con la renta pagas una mensualidad y nosotros nos encargamos de que funcione. Con la licencia permanente haces un solo pago por el derecho de uso, sin vencimiento.",
  },
  {
    q: "¿De quién es el código y de quién son mis datos?",
    a: "El código lo desarrolla y mantiene NGC en los dos modelos. Tus datos siempre son tuyos.",
  },
  {
    q: "¿Pueden mejorar un sistema que ya tengo?",
    a: "No. Todos nuestros proyectos son desarrollos nuevos, hechos a la medida de cómo trabaja tu equipo.",
  },
  {
    q: "¿Qué pasa si necesito cambios después de la entrega?",
    a: "Seguimos contigo. Hacemos correcciones, ajustes y nuevas funciones como parte del soporte y la mejora continua.",
  },
  {
    q: "¿Trabajan con empresas fuera de Morelos?",
    a: "Sí. Trabajamos de forma remota con empresas de todo México.",
  },
  {
    q: "¿Qué tecnologías usan?",
    a: "Principalmente React, Next.js, Spring Boot, MySQL y Docker.",
  },
  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "No. Tú nos explicas cómo trabaja tu equipo y nosotros lo convertimos en un sistema.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Escríbenos por WhatsApp o déjanos tus datos en el formulario. Agendamos tu diagnóstico sin costo y te respondemos en menos de 24 horas.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Faq() {
  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-titulo"
      className="px-6 py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-170">
            <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted">
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              Preguntas frecuentes
            </p>
            <h2
              id="preguntas-titulo"
              className="mt-6 heading-4 text-text md:heading-2"
            >
              Lo que nos preguntan antes de empezar
            </h2>
          </Reveal>
          <Reveal delay={120} className="shrink-0">
            <Button href={siteMetadata.whatsappUrl} variant="secondary">
              <WhatsappLogoIcon size={20} aria-hidden="true" />
              ¿Otra duda? Escríbenos
            </Button>
          </Reveal>
        </div>

        <dl className="mt-16 grid gap-x-16 border-t border-border md:grid-cols-2">
          {faqs.map(({ q, a }, i) => (
            <Reveal
              key={q}
              delay={(i % 2) * 60}
              className="border-b border-border py-8"
            >
              <dt className="title-2 text-text">{q}</dt>
              <dd className="mt-3 max-w-lg body-6 text-muted">{a}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
