import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

export default function PageLoading({ duration, children, ...props }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), duration);
  }, []);

  const containerStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <ReactLoading {...props} />
      </div>
    );
  }

  return <div>{children}</div>;
}

PageLoading.propTypes = {
  color: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  type: PropTypes.string,
};

PageLoading.defaultProps = {
  color: "#A9A9A9",
  delay: 0,
  duration: 1300,
  height: 40,
  width: 40,
  type: "bars",
};
