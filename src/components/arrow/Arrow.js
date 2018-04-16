import React from "react";
import PropTypes from "prop-types";

const Arrow = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="14"
    viewBox="0 0 960 560"
  >
    <path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937 c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937 c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z" />
  </svg>
);

Arrow.propTypes = {
  className: PropTypes.string
};
Arrow.defaultProps = {
  className: ""
};
export default Arrow;
