/**
 * Hero illustration: "convergence". Scattered sources (Excel, WhatsApp,
 * paper, email) flow into one NGC system window with real module names.
 * Front facing, abstract data only (no invented numbers). Colors come from
 * theme tokens through the .ill-* classes in globals.css.
 */

type Source = {
  label: string;
  x: number;
  y: number;
  rotate: number;
  glyph: "sheet" | "chat" | "paper" | "mail";
};

const sources: Source[] = [
  { label: "Excel", x: 0, y: 64, rotate: -4, glyph: "sheet" },
  { label: "WhatsApp", x: 18, y: 144, rotate: 3, glyph: "chat" },
  { label: "Papel", x: 4, y: 224, rotate: -2, glyph: "paper" },
  { label: "Correo", x: 22, y: 304, rotate: 4, glyph: "mail" },
];

const CHIP_W = 116;
const CHIP_H = 40;

// System window geometry.
const WX = 196;
const WY = 36;
const WW = 316;
const WH = 336;
const BAR = 36; // top bar height
const SIDE = 104; // sidebar width

const modules = ["Expedientes", "Compras", "Reportes", "Permisos"];
const ACTIVE = 1;
const bars = [34, 50, 42, 64, 56, 76, 70, 88];

// Where each source line lands on the window's left edge.
const targets = [118, 176, 234, 292];

function Glyph({ kind, x, y }: { kind: Source["glyph"]; x: number; y: number }) {
  // 20×20 box drawn with simple strokes.
  const s = "ill-glyph";
  switch (kind) {
    case "sheet":
      return (
        <g className={s}>
          <rect x={x} y={y} width={20} height={20} rx={4} />
          <line x1={x} y1={y + 7} x2={x + 20} y2={y + 7} />
          <line x1={x} y1={y + 13} x2={x + 20} y2={y + 13} />
          <line x1={x + 7} y1={y} x2={x + 7} y2={y + 20} />
        </g>
      );
    case "chat":
      return (
        <g className={s}>
          <path
            d={`M${x + 10} ${y + 1} a9 8 0 1 1 -5.6 14.3 L${x + 2} ${y + 19} l1.4 -4.6 A9 8 0 0 1 ${x + 10} ${y + 1} z`}
          />
        </g>
      );
    case "paper":
      return (
        <g className={s}>
          <path d={`M${x + 3} ${y} h9 l5 5 v15 h-14 z`} />
          <line x1={x + 6} y1={y + 9} x2={x + 14} y2={y + 9} />
          <line x1={x + 6} y1={y + 13} x2={x + 14} y2={y + 13} />
        </g>
      );
    case "mail":
      return (
        <g className={s}>
          <rect x={x} y={y + 3} width={20} height={14} rx={3} />
          <path d={`M${x + 1} ${y + 5} l9 6 l9 -6`} />
        </g>
      );
  }
}

const rise = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function SystemIllustration({ className = "" }: { className?: string }) {
  const mainX = WX + SIDE + 12;
  const mainW = WW - SIDE - 24;
  const top = WY + BAR + 14;

  return (
    <svg
      viewBox="0 0 520 400"
      role="img"
      aria-labelledby="ilustracion-titulo"
      className={className}
    >
      <title id="ilustracion-titulo">
        Excel, WhatsApp, papel y correo convergen en un solo sistema con
        módulos de expedientes, compras, reportes y permisos
      </title>

      {/* Flow lines from each source into the system. */}
      <g className="animate-rise" style={rise(300)}>
        {sources.map((src, i) => {
          const sx = src.x + CHIP_W;
          const sy = src.y + CHIP_H / 2;
          const ty = targets[i];
          return (
            <g key={src.label}>
              <path
                d={`M${sx} ${sy} C${sx + 44} ${sy}, ${WX - 44} ${ty}, ${WX} ${ty}`}
                className="ill-flow"
                style={{ animationDelay: `${i * -300}ms` }}
              />
              <circle cx={WX} cy={ty} r={3} className="ill-node" />
            </g>
          );
        })}
      </g>

      {/* Today: scattered, dashed, muted. */}
      {sources.map((src, i) => (
        <g key={src.label} className="animate-rise" style={rise(120 + i * 60)}>
          <g
            transform={`rotate(${src.rotate} ${src.x + CHIP_W / 2} ${src.y + CHIP_H / 2})`}
          >
            <rect
              x={src.x}
              y={src.y}
              width={CHIP_W}
              height={CHIP_H}
              rx={10}
              className="ill-chip"
            />
            <Glyph kind={src.glyph} x={src.x + 12} y={src.y + 10} />
            <text
              x={src.x + 42}
              y={src.y + 25}
              fontSize={14}
              fontWeight={500}
              className="ill-muted"
            >
              {src.label}
            </text>
          </g>
        </g>
      ))}

      {/* The system window. */}
      <g className="animate-rise" style={rise(200)}>
        <rect x={WX} y={WY} width={WW} height={WH} rx={16} className="ill-window" />
        <line x1={WX} y1={WY + BAR} x2={WX + WW} y2={WY + BAR} className="ill-divider" />
        <rect x={WX + 14} y={WY + 12} width={12} height={12} rx={3} className="ill-accent" />
        <text x={WX + 34} y={WY + 23} fontSize={12} fontWeight={600} className="ill-text">
          Tu sistema
        </text>

        {/* Sidebar with real NGC modules. */}
        <line x1={WX + SIDE} y1={WY + BAR} x2={WX + SIDE} y2={WY + WH} className="ill-divider" />
        {modules.map((name, i) => {
          const y = top + i * 34;
          const active = i === ACTIVE;
          return (
            <g key={name}>
              {active && (
                <rect x={WX + 8} y={y} width={SIDE - 16} height={26} rx={8} className="ill-accent" />
              )}
              <text
                x={WX + 18}
                y={y + 17}
                fontSize={12}
                fontWeight={active ? 600 : 500}
                className={active ? "ill-on-accent" : "ill-muted"}
              >
                {name}
              </text>
            </g>
          );
        })}
        <rect x={WX + 8} y={top + 4 * 34} width={SIDE - 16} height={26} rx={8} className="ill-ghost" />
        <text x={WX + 18} y={top + 4 * 34 + 17} fontSize={12} fontWeight={500} className="ill-muted">
          + Próximo
        </text>

        {/* Main panel: two summary tiles. */}
        {[0, 1].map((t) => {
          const x = mainX + t * (mainW / 2 + 4);
          const w = mainW / 2 - 4;
          return (
            <g key={t}>
              <rect x={x} y={top} width={w} height={56} rx={8} className="ill-tile" />
              <rect x={x + 10} y={top + 12} width={w * 0.45} height={6} rx={3} className="ill-line" />
              <rect x={x + 10} y={top + 28} width={w * 0.6} height={14} rx={4} className="ill-strong" />
            </g>
          );
        })}

        {/* Chart with bars that grow in. */}
        <rect x={mainX} y={top + 68} width={mainW} height={112} rx={8} className="ill-tile" />
        {bars.map((h, i) => {
          const bw = 13;
          const gap = (mainW - 28 - bars.length * bw) / (bars.length - 1);
          const x = mainX + 14 + i * (bw + gap);
          const base = top + 68 + 98;
          return (
            <rect
              key={i}
              x={x}
              y={base - h}
              width={bw}
              height={h}
              rx={3}
              className={`ill-bar ${i === bars.length - 1 ? "ill-accent" : "ill-blue"}`}
              style={{ animationDelay: `${500 + i * 60}ms` }}
            />
          );
        })}

        {/* Activity list with status. */}
        {[0, 1, 2].map((r) => {
          const y = top + 192 + r * 26;
          return (
            <g key={r}>
              <circle cx={mainX + 6} cy={y + 8} r={4} className="ill-ok" />
              <rect
                x={mainX + 18}
                y={y + 5}
                width={mainW * (0.55 - r * 0.08)}
                height={6}
                rx={3}
                className="ill-line"
              />
              <rect x={mainX + mainW - 34} y={y + 3} width={34} height={10} rx={5} className="ill-tile" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
