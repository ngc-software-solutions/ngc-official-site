/**
 * Cloudflare Pages Function: POST /api/contact
 *
 * Deployed automatically next to the static export (Next `output: "export"`).
 * Sends the contact form through Resend. Configure in Cloudflare Pages →
 * Settings → Variables and secrets:
 *   RESEND_API_KEY  (secret, required)
 *   CONTACT_TO      (optional, defaults to ngcsoftwaresolutions@gmail.com)
 *   CONTACT_FROM    (optional, defaults to Resend's onboarding sender, which
 *                    only delivers to the Resend account owner's address
 *                    until a domain is verified)
 */

interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface Context {
  request: Request;
  env: Env;
}

type Payload = {
  nombre?: unknown;
  email?: unknown;
  empresa?: unknown;
  mensaje?: unknown;
  website?: unknown; // honeypot, must stay empty
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

const field = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function onRequestPost({ request, env }: Context) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return json(400, { ok: false, error: "Solicitud inválida." });
  }

  // Bots fill every field; people never see this one. Pretend success.
  if (field(data.website, 200)) return json(200, { ok: true });

  const nombre = field(data.nombre, 120);
  const email = field(data.email, 200);
  const empresa = field(data.empresa, 160);
  const mensaje = field(data.mensaje, 5000);

  if (nombre.length < 2 || empresa.length < 2 || mensaje.length < 10) {
    return json(400, { ok: false, error: "Faltan datos obligatorios." });
  }
  if (!EMAIL_RE.test(email)) {
    return json(400, { ok: false, error: "El correo no es válido." });
  }

  if (!env.RESEND_API_KEY) {
    return json(500, { ok: false, error: "El envío no está configurado." });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM || "NGC Sitio Web <onboarding@resend.dev>",
      to: [env.CONTACT_TO || "ngcsoftwaresolutions@gmail.com"],
      reply_to: email,
      subject: `Proyecto de ${empresa} · ${nombre}`,
      // Plain text only, so user input is never rendered as HTML.
      text: `Nombre: ${nombre}\nEmpresa: ${empresa}\nCorreo: ${email}\n\nMensaje:\n${mensaje}\n`,
    }),
  });

  if (!res.ok) {
    return json(502, { ok: false, error: "No pudimos enviar el mensaje." });
  }

  return json(200, { ok: true });
}

export async function onRequest() {
  return json(405, { ok: false, error: "Método no permitido." });
}
