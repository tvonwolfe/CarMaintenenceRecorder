import React, { useState, useEffect } from "react";
import API from "../api.js";
import CarList from "./CarList";
import { Button, Spinner } from "reactstrap";
import { useHistory } from "react-router-dom";

const cars = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const history = useHistory();

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
        <Spinner style={{ width: "3rem", height: "3rem" }} color="secondary" />
      ) : (
        <div>
          <CarList cars={cars} />
          <Button color="primary" onClick={() => history.push("/car/new")}>
            Add Car...
          </Button>
        </div>
      )}
    </div>
  );
};
export default cars;
