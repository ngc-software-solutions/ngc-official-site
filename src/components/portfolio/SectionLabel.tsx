export default function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs font-medium uppercase tracking-widest text-muted/60">
        {label}
      </span>
      <div className="flex-1 border-t border-border" />
    </div>
  );
}
