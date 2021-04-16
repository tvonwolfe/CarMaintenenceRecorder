import React from "react";
import { Table } from "reactstrap";
import { useHistory } from "react-router-dom";

const CarList = ({ cars }) => {
  const history = useHistory();
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>Year</th>
          <th>Make</th>
          <th>Model</th>
          <th>VIN</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr
            key={index}
            className="listing-item"
            onClick={() => history.push(`/car/${car.vin}`)}
          >
            <td>{car.year}</td>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.vin}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CarList;
