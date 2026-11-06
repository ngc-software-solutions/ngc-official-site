"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { CheckIcon, DesktopIcon, MoonIcon, SunIcon } from "@phosphor-icons/react";
import {
  applyTheme,
  THEME_STORAGE_KEY,
  type ThemePreference,
} from "@/lib/theme";

const options: {
  value: ThemePreference;
  label: string;
  Icon: typeof SunIcon;
}[] = [
  { value: "light", label: "Claro", Icon: SunIcon },
  { value: "dark", label: "Oscuro", Icon: MoonIcon },
  { value: "system", label: "Sistema", Icon: DesktopIcon },
];

// Stored preference as an external store, so every instance stays in sync
// and the static HTML (rendered as "light") hydrates without a mismatch.
const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};
const getSnapshot = (): ThemePreference => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "dark" || stored === "system" ? stored : "light";
};
const getServerSnapshot = (): ThemePreference => "light";

export default function ThemeSelect() {
  const preference = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Follow OS changes while "Sistema" is selected.
  useEffect(() => {
    if (preference !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [preference]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const select = (value: ThemePreference) => {
    localStorage.setItem(THEME_STORAGE_KEY, value);
    listeners.forEach((notify) => notify());
    applyTheme(value);
    setOpen(false);
  };

  const current = options.find((o) => o.value === preference) ?? options[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Tema: ${current.label}`}
        className="flex size-10 items-center justify-center rounded-full text-muted transition-colors duration-300 ease-base hover:bg-surface-alt hover:text-text active:scale-[0.98]"
      >
        <current.Icon size={20} weight="regular" />
      </button>

      <div
        role="menu"
        aria-label="Tema"
        className={`absolute right-0 top-full mt-2 w-40 origin-top-right rounded-2xl border border-border bg-surface p-1 shadow-lg shadow-black/5 transition duration-300 ease-base ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {options.map(({ value, label, Icon }) => {
          const active = value === preference;
          return (
            <button
              key={value}
              type="button"
              role="menuitemradio"
              aria-checked={active}
              tabIndex={open ? 0 : -1}
              onClick={() => select(value)}
              className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 body-5 transition-colors duration-300 ease-base ${
                active
                  ? "bg-surface-alt text-text"
                  : "text-muted hover:bg-surface-alt hover:text-text"
              }`}
            >
              <Icon size={16} />
              <span className="flex-1 text-left">{label}</span>
              {active && <CheckIcon size={16} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
