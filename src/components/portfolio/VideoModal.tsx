"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

function buildModalUrl(url: string): string {
  const parsed = new URL(url);
  parsed.searchParams.set("controls", "1");
  parsed.searchParams.delete("mute");
  return parsed.toString();
}

export default function VideoModal({
  videoUrl,
  isOpen,
  onClose,
}: VideoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const modalUrl = buildModalUrl(videoUrl);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-xs" />

          <motion.div
            className="relative z-10 w-full max-w-5xl"
            initial={{ scale: 0.88, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 12 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/50 hover:text-white transition-colors duration-150 text-sm"
            >
              <XMarkIcon className="size-4" />
              <span>ESC</span>
            </button>

            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <iframe
                src={modalUrl}
                title="Demo del proyecto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
              <div className="absolute inset-0 z-10" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
