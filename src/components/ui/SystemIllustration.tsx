/**
 * Isometric illustration for the hero: stacked layers that form one system.
 * Base = "Un solo sistema" (brand accent), two layers with real NGC modules,
 * a logo blue module on top and a dashed one for "tu próximo módulo".
 * Pure SVG; colors come from theme tokens (.iso-* classes in globals.css).
 */

const U = 22; // px per isometric unit
const C = Math.cos(Math.PI / 6);
const S = 0.5;
const OX = 252;
const OY = 128;

type P = [number, number];
const iso = (x: number, y: number, z: number): P => [
  OX + (x - y) * C * U,
  OY + (x + y) * S * U - z * U,
];
const pts = (...p: P[]) => p.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(" ");

type Box = { x: number; y: number; z: number; w: number; d: number; h: number };

function faces({ x, y, z, w, d, h }: Box) {
  return {
    top: pts(iso(x, y, z + h), iso(x + w, y, z + h), iso(x + w, y + d, z + h), iso(x, y + d, z + h)),
    left: pts(iso(x, y + d, z + h), iso(x + w, y + d, z + h), iso(x + w, y + d, z), iso(x, y + d, z)),
    right: pts(iso(x + w, y, z + h), iso(x + w, y + d, z + h), iso(x + w, y + d, z), iso(x + w, y, z)),
  };
}

/** Text lying on the left face (runs along +x) or right face (runs along -y). */
function FaceLabel({
  box,
  side,
  text,
  size,
  className,
}: {
  box: Box;
  side: "left" | "right";
  text: string;
  size: number;
  className: string;
}) {
  const { x, y, z, w, d, h } = box;
  const baseline = z + h / 2 - size / U / 2.8;
  const [px, py] =
    side === "left" ? iso(x + 0.6, y + d, baseline) : iso(x + w, y + d - 0.6, baseline);
  const matrix =
    side === "left" ? `matrix(${C} ${S} 0 1 ${px} ${py})` : `matrix(${C} ${-S} 0 1 ${px} ${py})`;
  return (
    <text
      transform={matrix}
      fontSize={size}
      fontWeight={600}
      letterSpacing="0.02em"
      className={className}
    >
      {text}
    </text>
  );
}

function Slab({
  box,
  tone,
  left,
  right,
  labelSize = 12,
}: {
  box: Box;
  tone: "neutral" | "accent" | "blue";
  left?: string;
  right?: string;
  labelSize?: number;
}) {
  const f = faces(box);
  const label = tone === "accent" ? "iso-label-on-accent" : "iso-label";
  return (
    <g>
      <polygon points={f.left} className={`iso-${tone}-left`} />
      <polygon points={f.right} className={`iso-${tone}-right`} />
      <polygon points={f.top} className={`iso-${tone}-top`} />
      {left && <FaceLabel box={box} side="left" text={left} size={labelSize} className={label} />}
      {right && <FaceLabel box={box} side="right" text={right} size={labelSize} className={label} />}
    </g>
  );
}

/** Dashed vertical links between two layers, at the visible corners of `upper`. */
function Links({ lower, upper }: { lower: Box; upper: Box }) {
  const from = lower.z + lower.h;
  const to = upper.z;
  const corners: [number, number][] = [
    [upper.x, upper.y + upper.d],
    [upper.x + upper.w, upper.y + upper.d],
    [upper.x + upper.w, upper.y],
  ];
  return (
    <g className="iso-link">
      {corners.map(([cx, cy]) => {
        const [x1, y1] = iso(cx, cy, from);
        const [x2, y2] = iso(cx, cy, to);
        return <line key={`${cx}-${cy}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  );
}

const base: Box = { x: 0, y: 0, z: 0, w: 12, d: 12, h: 1.6 };
const middle: Box = { x: 1.5, y: 1.5, z: 3.1, w: 9, d: 9, h: 1.2 };
const upper: Box = { x: 3, y: 3, z: 5.8, w: 6, d: 6, h: 1.2 };
const blueModule: Box = { x: 3.7, y: 4.3, z: 7, w: 2, d: 2, h: 2 };
const next: Box = { x: 7, y: 3.4, z: 7, w: 2, d: 2, h: 2 };

const rise = (ms: number) => ({ animationDelay: `${ms}ms` });

export default function SystemIllustration({ className = "" }: { className?: string }) {
  const ghost = faces(next);
  const [tx, ty] = iso(next.x + next.w, next.y, next.z + next.h);

  return (
    <svg
      viewBox="0 0 504 416"
      role="img"
      aria-labelledby="ilustracion-titulo"
      className={className}
    >
      <title id="ilustracion-titulo">
        Capas de un solo sistema: expedientes, compras, reportes y permisos,
        con espacio para tu próximo módulo
      </title>

      <g className="animate-rise" style={rise(200)}>
        <Slab box={base} tone="accent" left="Un solo sistema" labelSize={14} />
      </g>

      <g className="animate-rise" style={rise(320)}>
        <Links lower={base} upper={middle} />
        <Slab box={middle} tone="neutral" left="Expedientes" right="Compras" />
      </g>

      <g className="animate-rise" style={rise(440)}>
        <Links lower={middle} upper={upper} />
        <Slab box={upper} tone="neutral" left="Reportes" right="Permisos" />
      </g>

      <g className="animate-rise" style={rise(560)}>
        <Slab box={blueModule} tone="blue" />
        {/* The next module: dashed outline only, the system keeps growing. */}
        <g className="iso-ghost">
          <polygon points={ghost.left} />
          <polygon points={ghost.right} />
          <polygon points={ghost.top} />
        </g>
        <line x1={tx + 4} y1={ty + 6} x2={tx + 28} y2={ty - 6} className="iso-link" />
        <text x={tx + 32} y={ty - 2} fontSize={12} fontWeight={500} className="iso-caption">
          Tu próximo módulo
        </text>
      </g>
    </svg>
  );
}
