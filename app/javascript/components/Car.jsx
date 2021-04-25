import React, { useEffect, useState } from "react";
import API from "../api";
import { Button, Spinner } from "reactstrap";
import RecordList from "./RecordList";
import { useHistory } from "react-router-dom";

const Car = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [car, setCar] = useState({});
  const [records, setRecords] = useState([]);
  const {
    match: {
      params: { vin },
    },
  } = props;

  const history = useHistory();

  const handleDeleteCar = () => {
    API.deleteCar(car.vin).then((response) =>
      response.message == "Success"
        ? setTimeout(history.push("/"), 500)
        : console.log(response)
    );
  };

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
        setRecords(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={`car-info-container ${isLoading ? "loading" : ""}`}>
      {isLoading ? (
        <Spinner style={{ width: "3rem", height: "3rem" }} color="secondary" />
      ) : (
        <div className="car-info">
          <div className="car-header">
            <h3>
              {car.year} {car.make} {car.model}
            </h3>
            <Button outline color="danger" onClick={handleDeleteCar}>
              Delete Car
            </Button>
          </div>
          <RecordList records={records} />
          <Button onClick={() => history.push(`/car/${vin}/add`)}>
            Add Maintenance Item...
          </Button>
        </div>
      )}
    </div>
  );
};

export default Car;
