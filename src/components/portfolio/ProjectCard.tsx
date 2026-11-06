"use client";

import { useCallback, useState } from "react";
import { ArrowUpRightIcon, PlayIcon } from "@phosphor-icons/react";
import type { Project } from "@components/portfolio/types";
import { embedUrl } from "@components/portfolio/data";
import VideoModal from "@components/portfolio/VideoModal";

/**
 * Shows the YouTube thumbnail only; the video iframe loads when the
 * visitor asks for it (in the modal), so the page stays light.
 */
export default function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const { title, sector, description, status, stack, videoId, href } = project;
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-2">
      {videoId && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Ver demo en video: ${title}`}
          className={`group relative block overflow-hidden rounded-lg bg-surface-alt ${
            large ? "aspect-video lg:aspect-auto lg:min-h-80 lg:flex-1" : ""
          }`}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt={`Pantalla de ${title}`}
            width={1280}
            height={720}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-500 ease-base group-hover:scale-[1.02] ${
              large ? "absolute inset-0 h-full" : "aspect-video"
            }`}
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-xl bg-accent px-3 py-2 button-sm text-on-accent shadow-lg shadow-black/20 transition duration-300 ease-base group-hover:opacity-90 group-active:scale-[0.98]">
              <PlayIcon size={16} weight="fill" aria-hidden="true" />
              Ver demo
            </span>
          </span>
        </button>
      )}

      <div className={`flex flex-col ${large ? "p-4 md:p-6" : "flex-1 p-4"}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-border px-2 py-0.5 caption-4 text-muted">
            {sector}
          </span>
          <span className="inline-flex items-center gap-2 caption-4 text-muted">
            <span
              aria-hidden="true"
              className={`size-2 rounded-full ${status === "En producción" ? "bg-emerald-500" : "bg-amber-500"}`}
            />
            {status}
          </span>
        </div>

        <h3 className={`mt-4 text-text ${large ? "heading-5" : "heading-6"}`}>
          {title}
        </h3>
        <p className={`mt-2 text-muted ${large ? "body-3" : "body-6"}`}>
          {description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {stack.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface-alt px-2 py-0.5 caption-5 text-muted"
            >
              {tag}
            </span>
          ))}
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 body-5 text-text underline decoration-border underline-offset-4 transition-colors duration-300 ease-base hover:decoration-text"
            >
              Visitar sitio
              <ArrowUpRightIcon size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {videoId && (
        <VideoModal
          videoUrl={embedUrl(videoId)}
          title={title}
          isOpen={open}
          onClose={close}
        />
      )}
    </article>
  );
}
