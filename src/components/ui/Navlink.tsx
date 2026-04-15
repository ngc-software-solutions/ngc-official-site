const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Navlink({
  id,
  label,
  Icon,
  onClick,
  index = 0,
  light = false,
}: {
  id: string;
  label: string;
  Icon: React.ElementType;
  onClick?: () => void;
  index?: number;
  light?: boolean;
}) {
  return (
    <button
      onClick={() => {
        scrollTo(id);
        onClick?.();
      }}
      style={{ animationDelay: `${index * 120}ms` }}
      className={`animate-fade-in-up opacity-0 animate-fill-mode-forwards group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/20 transition-all duration-300 ${light ? "text-white" : "text-text/70"} transition-all duration-300`}
    >
      <Icon
        className={`size-4 transition-colors duration-300 shrink-0 ${light ? "text-accent" : "text-muted group-hover:text-accent"} transition-all duration-300`}
      />
      {label}
    </button>
  );
}
