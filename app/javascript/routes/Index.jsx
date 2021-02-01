import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Car from "../components/Car";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/car/:vin" exact component={Car} />
    </Switch>
  </Router>
);
