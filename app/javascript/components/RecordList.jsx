import React from "react";
import { Table } from "reactstrap";
import { useHistory } from "react-router-dom";

const RecordList = ({ records }) => {
  const history = useHistory();
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const total = records.reduce((total, record) => total + record.cost, 0) / 100;
  return (
    <>
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
              <td>{formatter.format(record.cost / 100)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="cost-total">
        <h4>Total: {formatter.format(total)}</h4>
      </div>
    </>
  );
};

export default RecordList;
