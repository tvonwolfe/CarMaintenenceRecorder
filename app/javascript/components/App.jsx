import React from "react";
import Routes from "../routes/Index";
import Footer from "../components/Footer";

const VERSION = "0.0.1";

export default () => (
  <div className="app-container">
    <div className="app-view">
      <Routes />
    </div>
    <Footer appVersion={VERSION} />
  </div>
);
