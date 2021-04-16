import React, { useState } from "react";
import API from "../../api";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddRecordForm = () => {
  const history = useHistory();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recordData, setRecordData] = useState({
    title: "",
    description: "",
    date_performed: new Date(),
    mileage: 0,
    cost: 0,
  });

  const onRecordDataInput = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    setRecordData({
      ...recordData,
      [name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.disabled = true;
    setFormSubmitted(true);
    API.addRecord(recordData)
      .then(() => setTimeout(history.push("/"), 500))
      .catch((error) => console.error(error));
  };

  return (
    <Form aria-disabled={formSubmitted} className="add-record-form">
      <h3 className="form-header">Add Maintenance Item</h3>
      <FormGroup>
        <Label for="year">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Blinker Fluid Replacement"
          onInput={onRecordDataInput}
          required
        />
      </FormGroup>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="mileage">Mileage</Label>
            <Input
              id="mileage"
              name="mileage"
              type="number"
              placeholder="69,420"
              onInput={onRecordDataInput}
              required
            />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="date_performed">Date Performed</Label>
            <div>
              <DatePicker
                selected={recordData.date_performed}
                onChange={(date) =>
                  setRecordData({ ...recordData, date_performed: date })
                }
                className="form-control"
                placeholderText="01/01/1970"
              />
            </div>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="cost">Cost</Label>
            <Input
              id="cost"
              name="cost"
              type="text"
              placeholder="$3.50"
              onInput={onRecordDataInput}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          id="description"
          name="description"
          type="textarea"
          placeholder="What did you do?"
          onInput={onRecordDataInput}
          required
        />
      </FormGroup>
      <Button type="submit" onClick={onSubmit}>
        Create Record
      </Button>
    </Form>
  );
};

export default AddRecordForm;
