import React, { useState } from "react";
import API from "../../api";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddRecordForm = (props) => {
  const {
    match: {
      params: { vin },
    },
  } = props;
  const history = useHistory();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [recordData, setRecordData] = useState({
    title: "",
    description: "",
    date_performed: new Date(),
    mileage: 0,
    cost: 0,
    vin,
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

  const onInputFocus = (str) => {
    return (event) => {
      event.preventDefault();
      if (event.target.value.length === 0) {
        event.target.value = str;
      }
    };
  };

  const onInputBlur = (str) => {
    return (event) => {
      event.preventDefault();
      if (event.target.value === str) {
        event.target.value = "";
      }
    };
  };

  const onCostInput = (event) => {
    onInputFocus("$0.00")(event);
    const inputNum = Number(
      event.target.value.replace(/\$/, "").replace(/[^0-9\.]/, "")
    );
    const cost = event.nativeEvent.data ? inputNum * 10 : inputNum / 10;
    setRecordData({
      ...recordData,
      cost: cost * 100,
    });

    event.target.value = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(cost);
  };

  const onMileageInput = (event) => {
    event.preventDefault();
    const mileage = parseInt(
      event.target.value.replace(/[^0-9]/gi, "").replace(/,/gi, "")
    );
    setRecordData({
      ...recordData,
      mileage,
    });
    event.target.value = mileage === 0 ? "" : mileage.toLocaleString();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.disabled = true;
    setFormSubmitted(true);
    API.addRecord(recordData)
      .then(() =>
        setTimeout(
          history.push(history.location.pathname.replace("/add", "")),
          500
        )
      )
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
          placeholder="Blinker Fluid Change"
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
              type="text"
              placeholder="69,420"
              onInput={onMileageInput}
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
              onInput={onCostInput}
              onBlur={onInputBlur("$0.00")}
              onFocus={onInputFocus("$0.00")}
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="description">Description (optional)</Label>
        <Input
          id="description"
          name="description"
          type="textarea"
          placeholder="What did you do?"
          onInput={onRecordDataInput}
        />
      </FormGroup>
      <Button type="submit" onClick={onSubmit}>
        Create Record
      </Button>
    </Form>
  );
};

export default AddRecordForm;
