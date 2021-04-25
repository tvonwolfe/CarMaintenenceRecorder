import React, { useEffect, useState } from "react";
import API from "../api";
import { Spinner, List, Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const MaintenanceRecord = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [record, setRecord] = useState({});
  const {
    match: {
      params: { id },
    },
  } = props;
  const history = useHistory();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleDeleteRecord = (event) => {
    event.preventDefault();
    event.target.disabled = true;
    API.deleteRecord(id)
      .then((response) =>
        response.message === "Success"
          ? setTimeout(history.goBack(), 500)
          : console.log(response)
      )
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    API.getRecord(id)
      .then((response) => {
        setRecord(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={isLoading ? "loading" : ""}>
      {isLoading ? (
        <Spinner style={{ width: "3rem", height: "3rem" }} color="secondary" />
      ) : (
        <div className="car-info-container">
          <div className="car-header">
            <h3>{record.title}</h3>
            <Button outline color="danger" onClick={handleDeleteRecord}>
              Delete Record
            </Button>
          </div>
          <List type="unstyled">
            <li>Performed on: {record.date_performed}</li>
            <li>Recorded Mileage: {record.mileage}</li>
            <li>Cost: {formatter.format(record.cost / 100)}</li>
          </List>
          {record.description.length > 0 && (
            <div>
              <h5>Additional Description: </h5>
              <p>{record.description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MaintenanceRecord;
