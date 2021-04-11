import React, { useEffect, useState } from "react";
import API from "../api";
import { BeatLoader } from "react-spinners";

const Car = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [car, setCar] = useState({});
  const [records, setRecords] = useState({});
  const {
    match: {
      params: { vin },
    },
  } = props;

  useEffect(() => {
    API.getCar(vin)
      .then((response) => {
        setCar(response);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    API.getRecordsForCar(vin)
      .then((response) => {
        setRecords(records);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="car-info-container">
      {isLoading ? (
        <BeatLoader color={"gray"} size={75} />
      ) : (
        <h3 className="car-header">
          {car.year} {car.make} {car.model}
        </h3>
      )}
    </div>
  );
};

export default Car;
