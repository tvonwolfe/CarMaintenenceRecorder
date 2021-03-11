import React, { useState, useEffect } from "react";
import API from "../api.js";
import { BeatLoader } from "react-spinners";
import CarList from "./CarList";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const cars = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    API.getAllCars()
      .then((response) => {
        setCars(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={`${isLoading ? "loading" : ""}`}>
      {isLoading ? (
        <BeatLoader className="loader" color={"gray"} size={75} />
      ) : (
        <>
          <CarList cars={cars} />
          <Link
            to="/car/new"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button color="primary" className="add-car-button">
              Add Car...
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};
export default cars;
