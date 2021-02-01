import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  root.id = "root";
  render(<App />, document.body.appendChild(root));
});
