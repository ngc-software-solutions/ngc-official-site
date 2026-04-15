const metrics = [
  { value: "9", label: "Sistemas en producción" },
  { value: "3", label: "Industrias atendidas" },
  { value: "2", label: "Clientes activos" },
  { value: "100%", label: "Código a medida" },
];

export default function Metrics() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-xl">
      {/* Rim superior — reflejo de vidrio */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />

      {/* Glow radial central */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 50%, color-mix(in srgb, #259dc2 10%, transparent), transparent 70%)",
        }}
      />

      <dl className="relative mx-auto flex max-w-5xl divide-x divide-white/10">
        {metrics.map(({ value, label }) => (
          <div
            key={label}
            className="group flex flex-1 flex-col items-center gap-1 px-4 py-8 text-center"
          >
            <dt className="font-display text-4xl font-bold text-accent transition-opacity duration-300 group-hover:opacity-75 md:text-5xl">
              {value}
            </dt>
            <dd className="text-xs leading-snug text-muted">{label}</dd>
          </div>
        ))}
      </dl>

      {/* Rim inferior */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
