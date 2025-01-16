import { cn } from "@/app/utils/cn";
import React from "react";

const CustomButton = ({ label, onClick, className }) => {
  return (
    // <button
    //   className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300+ ${className}`}
    //   onClick={onClick}
    // >
    //   {label}
    // </button>
    <button
      className={cn(
        "px-4 py-2 rounded-md text-sm hover:shadow-[4px_4px_0px_0px_orange] transition duration-200",
        className
      )}
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
