import React from "react";
import PropTypes from "prop-types";
import "./PageLoader.css";

const PageLoader = ({ loading }) => {
  return (
    <div className={`page-loader ${loading ? "" : "hidden"}`}>
      <div className="logo-container">
        <div className="logo-skeleton"></div>
      </div>

      {/* Loading dots */}
      <div className="loading-dots">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
};

PageLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default PageLoader;
