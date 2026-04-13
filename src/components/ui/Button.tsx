"use client";

import Link from "next/link";
import { motion, type Transition } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
  className?: string;
}

const sharedTransition: Transition = {
  duration: 2.4,
  repeat: Infinity,
  ease: "easeInOut",
};

const floatAnimation: Record<
  "primary" | "secondary",
  { animate: { y: number[] }; transition: Transition }
> = {
  primary: {
    animate: { y: [0, -6, 0] },
    transition: sharedTransition,
  },
  secondary: {
    animate: { y: [0, 6, 0] },
    transition: sharedTransition,
  },
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-accent text-bg hover:bg-accent-hover animate-fade-in-left",
    secondary:
      "border border-border text-text hover:border-accent hover:text-accent animate-fade-in-right",
  };

  const { animate, transition } = floatAnimation[variant];

  return (
    <motion.div animate={animate} transition={transition}>
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
