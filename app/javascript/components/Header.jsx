import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import backArrow from "../../assets/images/svg/arrow-left.svg";

export default () => {
  const history = useHistory();
  const location = useLocation();
  const hasBackLink = location.pathname !== "/";
  return (
    <div className="header-container">
      {hasBackLink && (
        <button className="back-link" onClick={() => history.goBack()}>
          <img src={backArrow} alt="back button" />
        </button>
      )}
      <Link to="/" className="home-link">
        <h1>Project Head Gasket</h1>
      </Link>
    </div>
  );
};
