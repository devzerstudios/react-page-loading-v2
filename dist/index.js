import { useState, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

// src/page-loading.tsx
var asPx = (v, fallback) => typeof v === "number" ? `${v}px` : v ?? `${fallback}px`;
function Spinner({
  type = "bars",
  color = "#A9A9A9",
  height = 40,
  width = 40,
  className,
  style
}) {
  const h = asPx(height, 40);
  const w = asPx(width, 40);
  switch (type) {
    case "spin":
    case "spokes":
      return /* @__PURE__ */ jsxs(
        "svg",
        {
          viewBox: "0 0 50 50",
          role: "img",
          "aria-label": "Loading",
          width: w,
          height: h,
          className,
          style,
          children: [
            /* @__PURE__ */ jsx(
              "circle",
              {
                cx: "25",
                cy: "25",
                r: "20",
                fill: "none",
                stroke: color,
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeDasharray: "100",
                style: { animation: "rplv2-rot 1s linear infinite" }
              }
            ),
            /* @__PURE__ */ jsx("style", { children: `@keyframes rplv2-rot { to { transform: rotate(360deg); } }` })
          ]
        }
      );
    case "balls":
    case "bubbles":
    case "spinningBubbles":
      return /* @__PURE__ */ jsxs(
        "div",
        {
          "aria-label": "Loading",
          role: "img",
          className,
          style: {
            display: "inline-flex",
            gap: "6px",
            alignItems: "center",
            ...style
          },
          children: [
            [0, 1, 2].map((i) => /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  width: h,
                  height: h,
                  borderRadius: "50%",
                  background: color,
                  opacity: 0.2,
                  animation: `rplv2-bounce 1s ${i * 0.15}s infinite ease-in-out`
                }
              },
              i
            )),
            /* @__PURE__ */ jsx("style", { children: `
            @keyframes rplv2-bounce {
              0%, 80%, 100% { transform: scale(0.6); opacity: .2; }
              40% { transform: scale(1.0); opacity: 1; }
            }
          ` })
          ]
        }
      );
    case "cubes":
    case "cylon":
    case "blank":
    case "bars":
    default:
      return /* @__PURE__ */ jsxs(
        "div",
        {
          "aria-label": "Loading",
          role: "img",
          className,
          style: {
            display: "inline-flex",
            alignItems: "end",
            gap: "4px",
            height: h,
            ...style
          },
          children: [
            [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  width: `calc((${w}) / 6)`,
                  height: `calc(${h} * 0.4)`,
                  background: color,
                  display: "inline-block",
                  animation: `rplv2-bars 1s ease-in-out ${i * 0.1}s infinite`
                }
              },
              i
            )),
            /* @__PURE__ */ jsx("style", { children: `
            @keyframes rplv2-bars {
              0%, 40%, 100% { transform: scaleY(0.5); opacity: .6; }
              20% { transform: scaleY(1.0); opacity: 1; }
            }
          ` })
          ]
        }
      );
  }
}
var PageLoading = ({
  duration = 1300,
  color = "#A9A9A9",
  height = 40,
  width = 40,
  type = "bars",
  children,
  ...rest
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);
  const containerStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { style: containerStyle, children: /* @__PURE__ */ jsx(
      Spinner,
      {
        color,
        height,
        width,
        type,
        ...rest
      }
    ) });
  }
  return /* @__PURE__ */ jsx("div", { children });
};

export { PageLoading };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map