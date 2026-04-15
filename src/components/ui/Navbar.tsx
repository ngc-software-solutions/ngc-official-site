"use client";

import { useState, useEffect, useRef } from "react";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  UserGroupIcon,
  QueueListIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Navlink from "@/components/ui/Navlink";

const navItems = [
  { id: "inicio", label: "Inicio", icon: HomeIcon },
  { id: "servicios", label: "Servicios", icon: WrenchScrewdriverIcon },
  { id: "proceso", label: "Proceso", icon: QueueListIcon },
  { id: "portafolio", label: "Portafolio", icon: BriefcaseIcon },
  { id: "equipo", label: "Equipo", icon: UserGroupIcon },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightSection, setLightSection] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lightSectionIds = ["proceso", "equipo"];

    const check = () => {
      const navBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      const isLight = lightSectionIds.some((id) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect && navBottom >= rect.top && navBottom <= rect.bottom;
      });
      setLightSection(isLight);
    };

    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-30 w-[calc(100%-2rem)] ${scrolled ? "max-w-4xl md:top-6" : "max-w-3xl md:top-18"} transition-all duration-300`}
    >
      <nav
        className={`animate-fade-in backdrop-blur-[5px] border px-4 py-2 rounded-full flex items-center justify-between gap-4 ${lightSection ? "bg-bg/80 border-bg/40 shadow" : "bg-white/10 border-white/20"} transition-all duration-300`}
      >
        <div className="flex gap-2 items-center animate-fade-in-up">
          <img className="h-10 w-10" src="/logos/logo_reducido.svg" alt="NGC" />
          <span
            className={`font-semibold hidden md:block ${lightSection ? "text-white" : "text-text/70"} transition-all duration-300`}
          >
            Software Solutions
          </span>
        </div>

        <div className="flex gap-3 items-center md:hidden animate-fade-in-up">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span
            className={`font-semibold transition-all duration-300 ${lightSection ? "text-white" : "text-text/70"}`}
          >
            Software Solutions
          </span>
        </div>

        {/* Nav desktop */}
        <ul className="hidden sm:flex items-center gap-1">
          {navItems.map(({ id, label, icon: Icon }, index) => (
            <li key={id}>
              <Navlink
                id={id}
                label={label}
                Icon={Icon}
                index={index}
                light={lightSection}
              />
            </li>
          ))}
        </ul>

        <button
          className={`sm:hidden flex items-center justify-center p-1.5 rounded-full hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/20 transition-all duration-300 animate-slide-in-right ${lightSection ? "text-white" : "text-text/70"}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <XMarkIcon className="size-5" />
          ) : (
            <Bars3Icon className="size-5" />
          )}
        </button>
      </nav>

      {/* Nav Mobile */}
      {menuOpen && (
        <div
          className={`sm:hidden mt-2 backdrop-blur-[5px] border rounded-2xl px-3 py-2 flex flex-col gap-1 animate-fade-in-down ${lightSection ? "bg-bg/80 border-bg/40 shadow" : "bg-white/10 border-white/20"} transition-all duration-300`}
        >
          {navItems.map(({ id, label, icon: Icon }, index) => (
            <Navlink
              key={id}
              id={id}
              label={label}
              Icon={Icon}
              index={index}
              light={lightSection}
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>
      )}
    </header>
  );
}
