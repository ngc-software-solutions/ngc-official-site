"use client";

import { useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ArrowRightIcon,
  ClockIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  SealCheckIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { siteMetadata } from "@/lib/data/metadata";

type SendState =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent"; nombre: string; email: string }
  | { kind: "error" };

const schema = yup.object({
  nombre: yup
    .string()
    .required("Escribe tu nombre")
    .trim()
    .min(2, "Escribe al menos 2 letras")
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s''-]+$/,
      "Usa solo letras y espacios",
    ),
  email: yup
    .string()
    .required("Escribe tu correo")
    .email("Revisa el correo, parece incompleto"),
  empresa: yup
    .string()
    .required("Escribe el nombre de tu empresa")
    .trim()
    .min(2, "Escribe al menos 2 caracteres")
    .matches(
      /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s.,&''-]+$/,
      "Quita los caracteres especiales del nombre",
    ),
  mensaje: yup
    .string()
    .required("Cuéntanos qué necesitas")
    .trim()
    .min(10, "Agrega un poco más de detalle, mínimo 10 caracteres"),
});

type FormValues = yup.InferType<typeof schema>;

const promises = [
  { Icon: SealCheckIcon, text: "Primer diagnóstico sin costo" },
  { Icon: ClockIcon, text: "Respuesta en menos de 24 horas" },
  { Icon: MapPinIcon, text: "Cuernavaca, Morelos · Remoto en todo México" },
];

function Field({
  id,
  label,
  error,
  registration,
  textarea = false,
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
  registration: UseFormRegisterReturn;
  textarea?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  const className = `w-full rounded-lg border bg-bg px-4 py-3 body-6 text-text placeholder:text-muted transition-colors duration-300 ease-base ${
    error
      ? "border-red-600 dark:border-red-400"
      : "border-border hover:border-muted focus:border-text"
  }`;
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block title-4 text-text">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`resize-none ${className}`}
          {...rest}
          {...registration}
        />
      ) : (
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={className}
          {...rest}
          {...registration}
        />
      )}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-2 caption-5 text-red-700 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const [state, setState] = useState<SendState>({ kind: "idle" });

  const onSubmit = async (data: FormValues) => {
    setState({ kind: "sending" });
    const website =
      (document.getElementById("website") as HTMLInputElement | null)?.value ??
      "";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, website }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState({ kind: "sent", nombre: data.nombre, email: data.email });
      reset();
    } catch {
      setState({ kind: "error" });
    }
  };

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 caption-4 text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            Contacto
          </p>
          <h2
            id="contacto-titulo"
            className="mt-6 max-w-170 heading-4 text-text md:heading-2"
          >
            Cuéntanos qué proceso quieres ordenar
          </h2>
          <p className="mt-6 max-w-md body-3 text-muted">
            Escríbenos por WhatsApp o déjanos tus datos. Agendamos tu
            diagnóstico y te decimos qué conviene construir.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {promises.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3 body-5 text-text">
                <span className="flex size-8 items-center justify-center rounded-lg border border-border bg-surface text-accent-icon">
                  <Icon size={16} aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-4">
            <Button href={siteMetadata.whatsappUrl}>
              <WhatsappLogoIcon size={20} weight="bold" aria-hidden="true" />
              Escríbenos por WhatsApp
            </Button>
            <a
              href={`mailto:${siteMetadata.email}`}
              className="inline-flex items-center gap-2 body-5 text-muted underline decoration-border underline-offset-4 transition-colors duration-300 ease-base hover:text-text hover:decoration-text"
            >
              <EnvelopeSimpleIcon size={16} aria-hidden="true" />
              {siteMetadata.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Formulario de contacto"
            className="relative flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 shadow-xl shadow-black/5 md:p-10 dark:shadow-none"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field
                id="nombre"
                label="Nombre completo"
                placeholder="Ana López"
                autoComplete="name"
                error={errors.nombre?.message}
                registration={register("nombre")}
              />
              <Field
                id="email"
                label="Correo electrónico"
                type="email"
                placeholder="ana@tuempresa.com"
                autoComplete="email"
                error={errors.email?.message}
                registration={register("email")}
              />
            </div>
            <Field
              id="empresa"
              label="Empresa"
              placeholder="Nombre de tu empresa"
              autoComplete="organization"
              error={errors.empresa?.message}
              registration={register("empresa")}
            />
            <Field
              id="mensaje"
              label="¿Qué necesitas?"
              placeholder="Por ejemplo: hoy llevamos las requisiciones en Excel y queremos un sistema con aprobaciones."
              textarea
              error={errors.mensaje?.message}
              registration={register("mensaje")}
            />

            {/* Honeypot: hidden from people, bots fill it in. */}
            <div
              aria-hidden="true"
              className="sr-only"
            >
              <label htmlFor="website">No llenar este campo</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={state.kind === "sending"}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-3 py-2 button-md text-on-accent transition duration-300 ease-base hover:opacity-90 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
            >
              {state.kind === "sending"
                ? "Enviando tu proyecto…"
                : "Enviar mi proyecto"}
              <ArrowRightIcon size={16} weight="bold" aria-hidden="true" />
            </button>

            <p className="caption-5 text-muted">
              Al enviar aceptas que tratemos tus datos conforme a nuestro{" "}
              <Link
                href="/privacidad"
                className="text-text underline decoration-border underline-offset-4 hover:decoration-text"
              >
                aviso de privacidad
              </Link>
              .
            </p>

            <div aria-live="polite" className="min-h-5">
              {state.kind === "sent" && (
                <p className="body-6 text-text">
                  Recibimos tu mensaje, {state.nombre}. Te escribimos a{" "}
                  {state.email} en menos de 24 horas.
                </p>
              )}
              {state.kind === "error" && (
                <p className="body-6 text-red-700 dark:text-red-400">
                  No pudimos enviar tu mensaje. Intenta de nuevo en unos
                  minutos o{" "}
                  <a
                    href={siteMetadata.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    escríbenos por WhatsApp
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
