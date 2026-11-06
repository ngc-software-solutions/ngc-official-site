import Link from "next/link";

type Variant = "primary" | "secondary" | "link";
type Size = "md" | "sm";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
}

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap transition duration-300 ease-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text";

const variants: Record<Variant, string> = {
  primary:
    "rounded-xl bg-accent text-on-accent hover:opacity-90 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]",
  secondary:
    "rounded-xl border border-border bg-surface text-text hover:bg-surface-alt active:scale-[0.98]",
  link: "text-text underline decoration-border underline-offset-4 hover:decoration-text",
};

const sizes: Record<Variant, Record<Size, string>> = {
  primary: { md: "px-3 py-2 button-md", sm: "px-3 py-2 button-sm" },
  secondary: { md: "px-3 py-2 button-md", sm: "px-3 py-2 button-sm" },
  link: { md: "button-md", sm: "button-sm" },
};

/**
 * Anchors (#id) use native smooth scroll, external URLs open in a new tab,
 * everything else goes through next/link.
 */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[variant][size]} ${className}`;

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
