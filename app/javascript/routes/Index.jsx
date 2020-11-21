import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Cars from "../components/Cars";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cars" exact component={Cars} />
    </Switch>
  </Router>
);
