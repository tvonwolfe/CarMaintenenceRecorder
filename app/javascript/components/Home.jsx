import React, { useState, useEffect } from "react";
import { getAllCars } from "../api.js";
import { BeatLoader } from "react-spinners";
import { Button } from "reactstrap";
import CarList from "./CarList";

const cars = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCars()
      .then((response) => {
        setCars(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={`car-list-container ${isLoading ? "loading" : ""}`}>
      {isLoading ? (
        <BeatLoader color={"gray"} size={75} />
      ) : (
        <CarList cars={cars} />
      )}
      <Button id="add-car">Add Car...</Button>
    </div>
  );
};
export default cars;
