import React from "react";
import { Table } from "reactstrap";
import { useHistory } from "react-router-dom";

const RecordList = ({ records }) => {
  const history = useHistory();
  return (
    <Table hover responsive className="records-list">
      <thead>
        <tr>
          <th>Task</th>
          <th>Recorded Mileage</th>
          <th>Date Performed</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record, index) => (
          <tr
            key={index}
            className="listing-item"
            onClick={() => history.push(`/record/${record.id}`)}
          >
            <td>{record.title}</td>
            <td>{record.mileage}</td>
            <td>{record.date_performed}</td>
            <td>${record.cost / 100}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RecordList;
