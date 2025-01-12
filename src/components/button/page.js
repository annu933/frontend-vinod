import React from "react";

const CustomButton = ({ label, onClick, className }) => {
  return (
    <button
      className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300+ ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// CustomButton.propTypes = {
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
//   className: PropTypes.string,
// };

// CustomButton.defaultProps = {
//   className: "custom-button",
// };

export default CustomButton;
