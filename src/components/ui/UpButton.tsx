"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@phosphor-icons/react";

/** Appears once the hero has left the viewport. */
export default function UpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#inicio"
      aria-label="Volver al inicio"
      tabIndex={visible ? 0 : -1}
      className={`fixed right-6 bottom-6 z-30 flex size-10 items-center justify-center rounded-xl border border-border bg-surface/70 text-muted backdrop-blur-xl transition duration-500 ease-base hover:text-text active:scale-[0.98] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUpIcon size={20} aria-hidden="true" />
    </a>
  );
}
