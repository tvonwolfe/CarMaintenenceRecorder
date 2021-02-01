import React from "react";
import Routes from "../routes/Index";
import Header from "../components/Header";
import Footer from "../components/Footer";

const VERSION = "0.0.1";

export default () => (
  <>
    <Header />
    {Routes}
    <Footer appVersion={VERSION} />
  </>
);
