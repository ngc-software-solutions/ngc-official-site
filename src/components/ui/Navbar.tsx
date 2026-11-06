"use client";

import { useEffect, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import Logo from "@/components/ui/Logo";
import ThemeSelect from "@/components/ui/ThemeSelect";
import Button from "@/components/ui/Button";
import { siteMetadata } from "@/lib/data/metadata";

const navItems = [
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Proceso" },
  { id: "portafolio", label: "Proyectos" },
  { id: "equipo", label: "Equipo" },
  { id: "contacto", label: "Contacto" },
];

const ids = navItems.map((item) => item.id);

/** Tracks which section sits under the middle band of the viewport. */
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

function MenuIcon({ open }: { open: boolean }) {
  const line =
    "absolute left-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-500 ease-base";
  return (
    <span aria-hidden="true" className="relative block h-3.5 w-5">
      <span
        className={`${line} top-0 ${open ? "translate-y-1.5 rotate-45" : ""}`}
      />
      <span
        className={`${line} bottom-0 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
      />
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
      <nav
        aria-label="Principal"
        className="relative z-10 flex w-full items-center gap-2 rounded-2xl border border-border bg-surface/70 py-2 pr-2 pl-3 backdrop-blur-xl md:w-auto"
      >
        <a
          href="#inicio"
          onClick={close}
          className="mr-2 flex items-center gap-2 rounded-lg"
        >
          <Logo className="size-8" />
          <span className="title-4 text-text">Software Solutions</span>
        </a>

        <ul className="hidden items-center md:flex">
          {navItems.map(({ id, label }) => {
            const current = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={current ? "location" : undefined}
                  className={`block rounded-lg px-3 py-2 title-4 transition-colors duration-300 ease-base ${
                    current
                      ? "bg-surface-alt text-text"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-1">
          <ThemeSelect />
          <Button
            href={siteMetadata.whatsappUrl}
            size="sm"
            className="max-md:hidden"
          >
            <WhatsappLogo size={16} weight="bold" aria-hidden="true" />
            WhatsApp
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex size-10 items-center justify-center rounded-full text-text transition-colors duration-300 ease-base hover:bg-surface-alt active:scale-[0.98] md:hidden"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile: full height panel, links arrive in reading order. */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className={`fixed inset-0 bg-bg/95 backdrop-blur-2xl transition-opacity duration-300 ease-base md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2 px-6 pt-32">
          {[...navItems, null].map((item, i) => (
            <li
              key={item?.id ?? "cta"}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`transition duration-500 ease-base ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              } ${item ? "" : "pt-6"}`}
            >
              {item ? (
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  aria-current={active === item.id ? "location" : undefined}
                  className={`block py-2 heading-4 ${
                    active === item.id ? "text-text" : "text-muted"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Button href={siteMetadata.whatsappUrl} onClick={close}>
                  <WhatsappLogo size={20} weight="bold" aria-hidden="true" />
                  Escríbenos por WhatsApp
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
