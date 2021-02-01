import React, { useEffect, useState } from "react";
import { getCar } from "../api";
import { BeatLoader } from "react-spinners";

const Car = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [car, setCar] = useState({});
  const {
    match: {
      params: { vin },
    },
  } = props;

  useEffect(() => {
    getCar(vin)
      .then((response) => {
        setCar(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return isLoading ? (
    <BeatLoader color={"gray"} size={75} />
  ) : (
    <h1>
      {car.year} {car.make} {car.model}
    </h1>
  );
};

export default Car;
