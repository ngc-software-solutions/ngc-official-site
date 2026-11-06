"use client";

import { useEffect, useRef } from "react";

const lines = [
  "Tu empresa ya tiene un proceso que funciona.",
  "Nosotros lo convertimos en un sistema.",
];

/**
 * Tagline reveal: words go from muted to full color one at a time, in
 * reading order, as the section moves through the viewport.
 * One scroll listener throttled with requestAnimationFrame, attached only
 * while the section is on screen. Words are toggled through data attributes
 * (no React re-render per frame). Reduced motion shows full color at once.
 */
export default function Tagline() {
  const rootRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const words = Array.from(
      root.querySelectorAll<HTMLSpanElement>("[data-word]"),
    );

    const setActive = (count: number) => {
      words.forEach((word, i) => {
        word.dataset.active = String(i < count);
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(words.length);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const top = root.getBoundingClientRect().top;
      // 0 when the heading's top reaches 85% of the viewport, 1 at 30%.
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - top) / (vh * 0.55)));
      setActive(Math.round(progress * words.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
      } else {
        window.removeEventListener("scroll", onScroll);
      }
    });
    observer.observe(root);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="propuesta" aria-label="Nuestra propuesta" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2
          ref={rootRef}
          className="max-w-170 heading-4 md:heading-2 lg:heading-1"
        >
          {lines.map((line, l) => (
            <span key={line} className={l > 0 ? "mt-2 block" : "block"}>
              {line.split(" ").map((word, w) => (
                <span key={`${l}-${w}`}>
                  <span data-word="" data-active="false" className="tagline-word">
                    {word}
                  </span>{" "}
                </span>
              ))}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
