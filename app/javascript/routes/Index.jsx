import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Car from "../components/Car";
import AddCarForm from "../components/forms/AddCarForm";
import Header from "../components/Header";
import AddRecordForm from "../components/forms/AddRecordForm";
import MaintenanceRecord from "../components/MaintenanceRecord";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/car/new" exact component={AddCarForm} />
      <Route path="/car/:vin" exact component={Car} />
      <Route path="/car/:vin/add" exact component={AddRecordForm} />
      <Route path="/record/:id" exact component={MaintenanceRecord} />
    </Switch>
  </Router>
);
