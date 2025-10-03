declare module "react-loading" {
  import * as React from "react";

  export type LoadingType =
    | "blank"
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes";

  export interface LoadingProps {
    type?: LoadingType;
    color?: string;
    delay?: number;
    height?: number | string;
    width?: number | string;
    className?: string;
    style?: React.CSSProperties;
  }

  const ReactLoading: React.FC<LoadingProps>;
  export default ReactLoading;
}
// src/types/react-loading.d.ts