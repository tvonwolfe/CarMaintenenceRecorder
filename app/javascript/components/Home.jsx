import React, { useState, useEffect } from "react";
import { getAllCars } from "../api.js";
import { BeatLoader } from "react-spinners";
import { NewCarModal } from "./forms/AddCarForm";
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
        <BeatLoader className="loader" color={"gray"} size={75} />
      ) : (
        <>
          <CarList cars={cars} />
          <NewCarModal />
        </>
      )}
    </div>
  );
};
export default cars;
