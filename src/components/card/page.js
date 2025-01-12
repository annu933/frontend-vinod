import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const CustomCard = ({ title, content, imageUrl, footer, className, icon }) => {
  return (
    <div
      className={`card upper-parent text-blue transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 shadow-xl hover:shadow-xl rounded-md p-8 ${className}`}
    >
      {imageUrl && <img src={imageUrl} alt={title} className="card-img-top" />}
      <div className="card-body">
        {icon && (
          <div className="flex justify-center items-center">
            <div
              className="icon flex justify-center text-orange flex-wrap p-2 w-12 h-12 border-1 border-gray rounded-sm text-2xl
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300
            "
            >
              {icon}
            </div>
          </div>
        )}
        {title && <h1 className="card-title font-bold text-center">{title}</h1>}
        {content && (
          <p className="card-text text-gray text-center text-base font-medium">
            {content}
          </p>
        )}
      </div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  footer: PropTypes.node,
  className: PropTypes.string,
};

export default CustomCard;
