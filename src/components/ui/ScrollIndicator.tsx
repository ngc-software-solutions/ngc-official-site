"use client";

import { motion, type Transition } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface ScrollIndicatorProps {
  targetId?: string;
}

export default function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
  const handleClick = () => {
    if (!targetId) return;
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-2 group animate-fade-in-down"
      aria-label="Scroll hacia abajo"
    >
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted group-hover:text-accent transition-colors duration-300">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={
          {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          } satisfies Transition
        }
      >
        <ChevronDownIcon className="size-6 text-muted group-hover:text-accent transition-colors duration-200" />
      </motion.div>
    </button>
  );
}
