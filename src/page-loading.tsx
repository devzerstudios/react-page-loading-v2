// src/PageLoading.tsx
import * as React from "react";
import ReactLoading from "react-loading";
import type { LoadingProps } from "react-loading";

export interface PageLoadingProps extends Omit<LoadingProps, "delay"> {
  /** How long to keep showing the loader (ms) */
  duration?: number;
  children?: React.ReactNode;
  /** Ensure 'type' matches react-loading’s accepted values */
  type?: LoadingProps["type"];
}

export const PageLoading: React.FC<PageLoadingProps> = ({
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

  const containerStyle: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <ReactLoading
          color={color}
          height={height}
          width={width}
          type={type}
          {...rest}
        />
      </div>
    );
  }

  return <div>{children}</div>;
};
