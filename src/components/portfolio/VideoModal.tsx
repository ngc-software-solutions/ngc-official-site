"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "@phosphor-icons/react";

interface VideoModalProps {
  videoUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const subscribe = () => () => {};
const ease = [0.22, 1, 0.36, 1] as const;

export default function VideoModal({
  videoUrl,
  title,
  isOpen,
  onClose,
}: VideoModalProps) {
  // true only on the client, so the portal never renders during SSR.
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Demo en video: ${title}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="truncate title-4 text-white">{title}</p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 button-sm text-white/70 transition-colors duration-300 ease-base hover:bg-white/10 hover:text-white focus-visible:outline-white"
              >
                <X size={16} aria-hidden="true" />
                Cerrar
              </button>
            </div>

            <div className="aspect-video overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
              <iframe
                src={videoUrl}
                title={`Demo en video: ${title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
