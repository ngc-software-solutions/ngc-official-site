"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { SystemProject } from "@components/portfolio/types";
import { statusStyles } from "@components/portfolio/statusStyles";
import VideoPlaceholder from "@components/portfolio/VideoPlaceholder";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
  }),
};

interface SystemsCarouselProps {
  systems: SystemProject[];
  badge: string;
}

export default function SystemsCarousel({
  systems,
  badge,
}: SystemsCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + systems.length) % systems.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const system = systems[current];

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface/30 backdrop-blur-sm">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-5"
          >
            <div className="lg:col-span-3">
              <VideoPlaceholder videoUrl={system.videoUrl} />
            </div>

            <div className="lg:col-span-2 flex flex-col justify-between gap-6 p-6 lg:p-8 min-h-55 lg:min-h-0">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-xs text-muted">
                    {badge}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs ${statusStyles[system.status]}`}
                  >
                    {system.status}
                  </span>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-text leading-snug">
                    {system.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted line-clamp-4">
                    {system.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-4 flex flex-wrap gap-1.5">
                {system.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-surface/60 px-2 py-0.5 text-xs text-muted/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {systems.length > 1 && (
        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex size-9 items-center justify-center rounded-full border border-border bg-surface/40 text-muted hover:border-accent/40 hover:text-accent transition-all duration-200"
            aria-label="Sistema anterior"
          >
            <ChevronLeftIcon className="size-4" />
          </button>

          <div className="flex items-center gap-2">
            {systems.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Sistema ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 h-1.5 bg-accent"
                    : "w-1.5 h-1.5 bg-border hover:bg-muted/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            className="flex size-9 items-center justify-center rounded-full border border-border bg-surface/40 text-muted hover:border-accent/40 hover:text-accent transition-all duration-200"
            aria-label="Sistema siguiente"
          >
            <ChevronRightIcon className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
