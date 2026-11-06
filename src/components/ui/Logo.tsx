/** NGC mark. Swaps to the white variant in dark mode so the navy parts stay visible. */
export default function Logo({
  variant = "reducido",
  className = "",
}: {
  variant?: "reducido" | "completo";
  className?: string;
}) {
  const base = variant === "reducido" ? "logo_reducido" : "logo";
  return (
    <>
      <img
        src={`/logos/${base}.svg`}
        alt="NGC Software Solutions"
        className={`${className} dark:hidden`}
      />
      <img
        src={`/logos/${base}_dark.svg`}
        alt="NGC Software Solutions"
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
