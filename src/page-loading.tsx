import {
  useEffect,
  useState,
  type FC,
  type ReactNode,
  type CSSProperties,
} from "react";
import { Spinner, type SpinnerProps, type SpinnerType } from "./spinners";

export interface PageLoadingProps extends Omit<SpinnerProps, "type"> {
  /** How long to keep showing the loader (ms) */
  duration?: number;
  /** Spinner style/type */
  type?: SpinnerType;
  children?: ReactNode;
}

export const PageLoading: FC<PageLoadingProps> = ({
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

  const containerStyle: CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <Spinner
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

export default PageLoading;
