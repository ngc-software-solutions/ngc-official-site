import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/ssr";
import { siteMetadata } from "@/lib/data/metadata";

/*
 * Person responsible for the data. No fiscal address yet: when NGC has one,
 * add it to section 1 (the law asks for the responsible party's address).
 */
const RESPONSABLE = "Alexis Leonardo Noriega Rangel";
const LAST_UPDATED = "6 de noviembre de 2026";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Cómo NGC Software Solutions recaba, usa y protege los datos personales que compartes en este sitio y en nuestros canales de contacto.",
  alternates: { canonical: "/privacidad" },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="border-t border-border pt-10">
      <h2 id={id} className="heading-6 text-text">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 body-3 text-muted [&_strong]:font-semibold [&_strong]:text-text [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  const { email, phone, name } = siteMetadata;

  return (
    <main id="contenido" className="px-6 pt-24 pb-24">
      <article className="mx-auto mt-12 max-w-170 md:mt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 body-5 text-muted transition-colors duration-300 ease-base hover:text-text"
        >
          <ArrowLeftIcon size={16} aria-hidden="true" />
          Volver al inicio
        </Link>

        <h1 className="mt-8 heading-4 text-text md:heading-2">
          Aviso de privacidad
        </h1>
        <p className="mt-4 caption-2 text-muted">
          Última actualización: {LAST_UPDATED}
        </p>
        <p className="mt-8 body-3 text-muted">
          En {name} cuidamos los datos personales que nos compartes. Este aviso
          explica qué datos recabamos, para qué los usamos, con quién los
          compartimos y cómo puedes ejercer tus derechos, conforme a la Ley
          Federal de Protección de Datos Personales en Posesión de los
          Particulares y demás normativa aplicable.
        </p>

        <div className="mt-12 flex flex-col gap-10">
          <Section id="responsable" title="1. Responsable de tus datos">
            <p>
              <strong>{RESPONSABLE}</strong>, que opera bajo el nombre comercial{" "}
              <strong>{name}</strong>, es responsable del tratamiento de tus
              datos personales.
            </p>
            <p>
              Para cualquier asunto relacionado con este aviso puedes
              escribirnos a{" "}
              <a
                href={`mailto:${email}`}
                className="text-text underline underline-offset-4"
              >
                {email}
              </a>{" "}
              o al teléfono y WhatsApp {phone}.
            </p>
          </Section>

          <Section id="datos" title="2. Datos personales que recabamos">
            <p>Recabamos únicamente los datos que tú nos proporcionas:</p>
            <ul>
              <li>
                <strong>Formulario de contacto:</strong> nombre completo,
                correo electrónico, nombre de tu empresa y la información que
                incluyas en tu mensaje.
              </li>
              <li>
                <strong>WhatsApp:</strong> número de teléfono, nombre de
                perfil y el contenido de la conversación.
              </li>
              <li>
                <strong>Datos técnicos:</strong> dirección IP, tipo de
                navegador y fecha y hora de acceso, que nuestro proveedor de
                hospedaje registra por seguridad y para el funcionamiento del
                sitio.
              </li>
            </ul>
            <p>
              No solicitamos datos personales sensibles. Te pedimos no
              incluirlos en tus mensajes.
            </p>
            <p>
              Este aviso aplica a los datos que recabamos en este sitio y en
              nuestros canales de contacto. Los datos que nuestros clientes
              tratan dentro de los sistemas que desarrollamos para ellos se
              rigen por los avisos de privacidad de cada cliente y por los
              contratos correspondientes.
            </p>
          </Section>

          <Section id="finalidades" title="3. Para qué usamos tus datos">
            <p>
              <strong>Finalidades necesarias</strong> para atender tu
              solicitud:
            </p>
            <ul>
              <li>Responder tus mensajes y dudas.</li>
              <li>Agendar y realizar el diagnóstico de tu proyecto.</li>
              <li>Preparar cotizaciones y propuestas.</li>
              <li>
                Dar seguimiento a la relación comercial y, en su caso, al
                contrato de servicios.
              </li>
            </ul>
            <p>
              <strong>Finalidad adicional</strong>, que no es necesaria para
              atenderte: enviarte información sobre nuevos servicios o mejoras.
              Si no quieres que usemos tus datos para esto, escríbenos a{" "}
              {email} en cualquier momento. Negarte no afecta la atención que
              te damos.
            </p>
          </Section>

          <Section
            id="compartimos"
            title="4. Con quién compartimos tus datos"
          >
            <p>
              No vendemos ni rentamos tus datos personales. Para operar el
              sitio y nuestros canales de contacto nos apoyamos en proveedores
              que tratan los datos por cuenta nuestra y solo para prestarnos su
              servicio:
            </p>
            <ul>
              <li>
                <strong>Cloudflare:</strong> hospedaje y seguridad del sitio.
              </li>
              <li>
                <strong>Resend:</strong> envío de los mensajes del formulario
                a nuestro correo.
              </li>
              <li>
                <strong>Google (Gmail):</strong> buzón donde recibimos y
                respondemos tus mensajes.
              </li>
              <li>
                <strong>Meta (WhatsApp):</strong> mensajería, cuando decides
                escribirnos por ese medio.
              </li>
              <li>
                <strong>Google (YouTube):</strong> reproducción de los videos
                de nuestros proyectos, solo si decides verlos.
              </li>
            </ul>
            <p>
              Algunos de estos proveedores pueden almacenar datos fuera de
              México. Fuera de estos casos, solo compartiremos tus datos
              cuando la ley lo exija o lo ordene una autoridad competente.
            </p>
          </Section>

          <Section id="arco" title="5. Tus derechos ARCO">
            <p>
              Tienes derecho a <strong>acceder</strong> a tus datos,{" "}
              <strong>rectificarlos</strong> si son inexactos,{" "}
              <strong>cancelarlos</strong> cuando consideres que no son
              necesarios y <strong>oponerte</strong> a su uso para fines
              específicos.
            </p>
            <p>
              Para ejercerlos, envía un correo a {email} con el asunto
              “Derechos ARCO” que incluya:
            </p>
            <ul>
              <li>Tu nombre y un medio para comunicarte contigo.</li>
              <li>
                Una copia de tu identificación oficial o, si actúas en nombre
                de otra persona, el documento que acredite tu representación.
              </li>
              <li>
                La descripción clara del derecho que quieres ejercer y de los
                datos involucrados.
              </li>
              <li>Cualquier documento que facilite ubicar tus datos.</li>
            </ul>
            <p>
              Te responderemos por el mismo medio dentro de los plazos que
              establece la ley.
            </p>
          </Section>

          <Section
            id="revocacion"
            title="6. Revocar tu consentimiento o limitar el uso"
          >
            <p>
              Puedes revocar el consentimiento que nos diste o pedirnos que
              limitemos el uso de tus datos escribiendo a {email}. Ten en
              cuenta que, si la revocación afecta una finalidad necesaria, es
              posible que no podamos seguir atendiendo tu solicitud.
            </p>
          </Section>

          <Section id="cookies" title="7. Cookies y tecnologías similares">
            <p>
              Este sitio no usa cookies propias de publicidad ni de analítica.
              Guardamos en tu navegador tu preferencia de tema claro u oscuro;
              no es un dato personal y puedes borrarla desde la configuración
              de tu navegador.
            </p>
            <p>
              Nuestro proveedor de hospedaje puede usar cookies técnicas de
              seguridad. Los videos se cargan en el modo de privacidad mejorada
              de YouTube, que solo puede usar cookies cuando decides
              reproducir uno.
            </p>
          </Section>

          <Section id="consentimiento" title="8. Consentimiento">
            <p>
              Al enviarnos tus datos por el formulario o por WhatsApp, aceptas
              que los tratemos conforme a este aviso.
            </p>
          </Section>

          <Section id="cambios" title="9. Cambios a este aviso">
            <p>
              Podemos actualizar este aviso para reflejar cambios en la ley o
              en nuestros servicios. Publicaremos cualquier cambio en esta
              misma página, con su fecha de actualización.
            </p>
            <p>
              Si consideras que tu derecho a la protección de datos personales
              fue vulnerado, puedes acudir a la autoridad competente en la
              materia.
            </p>
          </Section>
        </div>
      </article>
    </main>
  );
}
