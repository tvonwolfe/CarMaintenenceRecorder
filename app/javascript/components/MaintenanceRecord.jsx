import React, { useEffect, useState } from "react";
import API from "../api";
import { Spinner } from "reactstrap";
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

  useEffect(() => {
    API.getRecord(id)
      .then((response) => {
        setRecord(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return <h1>{record.cost}</h1>;
};

export default MaintenanceRecord;
