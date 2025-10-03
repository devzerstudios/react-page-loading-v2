import * as React from "react";

export type SpinnerType =
  | "blank"
  | "balls"
  | "bars"
  | "bubbles"
  | "cubes"
  | "cylon"
  | "spin"
  | "spinningBubbles"
  | "spokes";

export interface SpinnerProps {
  type?: SpinnerType;
  color?: string;
  height?: number | string;
  width?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const asPx = (v: number | string | undefined, fallback: number) =>
  typeof v === "number" ? `${v}px` : v ?? `${fallback}px`;

/** Simple CSS/SVG spinners covering common types */
export function Spinner({
  type = "bars",
  color = "#A9A9A9",
  height = 40,
  width = 40,
  className,
  style,
}: SpinnerProps) {
  const h = asPx(height, 40);
  const w = asPx(width, 40);

  switch (type) {
    case "spin":
    case "spokes":
      return (
        <svg
          viewBox="0 0 50 50"
          role="img"
          aria-label="Loading"
          width={w}
          height={h}
          className={className}
          style={style}
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="100"
            style={{ animation: "rplv2-rot 1s linear infinite" }}
          />
          <style>{`@keyframes rplv2-rot { to { transform: rotate(360deg); } }`}</style>
        </svg>
      );

    case "balls":
    case "bubbles":
    case "spinningBubbles":
      return (
        <div
          aria-label="Loading"
          role="img"
          className={className}
          style={{
            display: "inline-flex",
            gap: "6px",
            alignItems: "center",
            ...style,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: h,
                height: h,
                borderRadius: "50%",
                background: color,
                opacity: 0.2,
                animation: `rplv2-bounce 1s ${i * 0.15}s infinite ease-in-out`,
              }}
            />
          ))}
          <style>{`
            @keyframes rplv2-bounce {
              0%, 80%, 100% { transform: scale(0.6); opacity: .2; }
              40% { transform: scale(1.0); opacity: 1; }
            }
          `}</style>
        </div>
      );

    case "cubes":
    case "cylon":
    case "blank":
    case "bars":
    default:
      return (
        <div
          aria-label="Loading"
          role="img"
          className={className}
          style={{
            display: "inline-flex",
            alignItems: "end",
            gap: "4px",
            height: h,
            ...style,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                width: `calc((${w}) / 6)`,
                height: `calc(${h} * 0.4)`,
                background: color,
                display: "inline-block",
                animation: `rplv2-bars 1s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          ))}
          <style>{`
            @keyframes rplv2-bars {
              0%, 40%, 100% { transform: scaleY(0.5); opacity: .6; }
              20% { transform: scaleY(1.0); opacity: 1; }
            }
          `}</style>
        </div>
      );
  }
}
