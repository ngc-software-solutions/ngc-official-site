const metrics = [
  { value: "9", label: "Sistemas en producción" },
  { value: "3", label: "Industrias atendidas" },
  { value: "2", label: "Clientes activos" },
  { value: "100%", label: "Código a medida" },
];

export default function Metrics() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface">
      <dl className="relative mx-auto flex max-w-5xl divide-x divide-border">
        {metrics.map(({ value, label }) => (
          <div
            key={label}
            className="group flex flex-1 flex-col items-center gap-1 px-4 py-8 text-center"
          >
            <dt className="text-4xl font-bold text-text transition-opacity duration-300 group-hover:opacity-75 md:text-5xl">
              {value}
            </dt>
            <dd className="text-xs leading-snug text-muted">{label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
