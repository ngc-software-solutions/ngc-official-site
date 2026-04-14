"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const NGC_EMAIL = "ngcsoftwaresolutions@gmail.com";
const NGC_WHATSAPP = "5660267647";

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

const schema = yup.object({
  nombre: yup
    .string()
    .required("El nombre es obligatorio")
    .trim()
    .min(2, "Mínimo 2 caracteres")
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s''-]+$/,
      "Solo se permiten letras y espacios",
    ),
  email: yup
    .string()
    .required("El correo es obligatorio")
    .email("Ingresa un correo válido"),
  empresa: yup
    .string()
    .required("La empresa es obligatoria")
    .trim()
    .min(2, "Mínimo 2 caracteres")
    .matches(
      /^[a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s.,&''-]+$/,
      "Caracteres no permitidos en el nombre de empresa",
    ),
  mensaje: yup
    .string()
    .required("El mensaje es obligatorio")
    .trim()
    .min(10, "Mínimo 10 caracteres"),
});

type FormValues = yup.InferType<typeof schema>;

const inputBase =
  "w-full rounded-xl border bg-surface/30 px-4 py-3 text-sm text-text placeholder:text-muted/40 backdrop-blur-sm transition-colors duration-200 focus:outline-none";
const inputNormal = `${inputBase} border-border focus:border-accent/60`;
const inputError = `${inputBase} border-red-500/50 focus:border-red-500/60`;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(
      `Proyecto de ${data.empresa} — ${data.nombre}`,
    );
    const body = encodeURIComponent(
      `Nombre: ${data.nombre}\nEmpresa: ${data.empresa}\nCorreo: ${data.email}\n\nMensaje:\n${data.mensaje}`,
    );
    window.location.href = `mailto:${NGC_EMAIL}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <section
      id="contacto"
      className="relative py-28 px-6 overflow-hidden timeline-view animate-blurred-fade-in animate-range-[entry_10%_contain_30%]"
    >
      <div className="absolute inset-0 bg-linear-to-b from-bg via-surface/20 to-bg pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          {/* Left — copy */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-1.5 text-xs text-muted backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Hablemos
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-text md:text-5xl leading-tight">
                ¿Tienes un proyecto{" "}
                <span className="text-accent">en mente?</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Respondemos en menos de 24 horas. Cuéntanos qué necesitas y te
                decimos exactamente cómo podemos ayudarte.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <p className="text-sm text-muted/70">
                ¿Prefieres escribirnos directo?
              </p>
              <a
                href={`https://wa.me/${NGC_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-xl border border-border bg-surface/30 px-5 py-3 text-sm font-medium text-text backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface/60 hover:text-accent"
              >
                <WhatsAppIcon className="size-5 text-accent" />
                Escríbenos por WhatsApp
                <ArrowLongRightIcon className="size-4 text-muted" />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-1.5 block text-xs font-medium text-muted"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Juan Pérez"
                  className={errors.nombre ? inputError : inputNormal}
                  {...register("nombre")}
                />
                {errors.nombre && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.nombre.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-muted"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="juan@empresa.com"
                  className={errors.email ? inputError : inputNormal}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="empresa"
                className="mb-1.5 block text-xs font-medium text-muted"
              >
                Empresa u organización
              </label>
              <input
                id="empresa"
                type="text"
                placeholder="Nombre de tu empresa"
                className={errors.empresa ? inputError : inputNormal}
                {...register("empresa")}
              />
              {errors.empresa && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.empresa.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="mensaje"
                className="mb-1.5 block text-xs font-medium text-muted"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={5}
                placeholder="Cuéntanos qué necesitas construir o mejorar..."
                className={`resize-none ${errors.mensaje ? inputError : inputNormal}`}
                {...register("mensaje")}
              />
              {errors.mensaje && (
                <p className="mt-1.5 text-xs text-red-400">
                  {errors.mensaje.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center cursor-pointer justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:bg-accent-hover active:scale-95"
            >
              Enviar mensaje
              <ArrowLongRightIcon className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
