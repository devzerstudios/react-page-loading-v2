import * as React from 'react';
import ReactLoading from 'react-loading';
import { jsx } from 'react/jsx-runtime';

// src/page-loading.tsx
var PageLoading = ({
  duration = 1300,
  color = "#A9A9A9",
  height = 40,
  width = 40,
  type = "bars",
  children,
  ...rest
}) => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
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
      ReactLoading,
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