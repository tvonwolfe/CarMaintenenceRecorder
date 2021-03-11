import React, { useState } from "react";
import API from "../../api";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

const generateYearRange = (start, end) =>
  Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);

export default function () {
  const history = useHistory();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [carData, setCarData] = useState({
    year: 2021,
    make: "",
    model: "",
    transmission: "",
    drive_type: "AWD",
    vin: "",
  });

  const onCarDataInput = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    setCarData({
      ...carData,
      [name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.disabled = true;
    setFormSubmitted(true);
    API.addCar(carData)
      .then(() => setTimeout(history.push("/"), 500))
      .catch((error) => console.error(error));
  };

  return (
    <Form aria-disabled={formSubmitted} className="add-car-form">
      <h3 className="form-header">Add Car</h3>
      <FormGroup>
        <Label for="year">Year</Label>
        <Input
          id="year"
          name="year"
          type="select"
          placeholder={new Date().getFullYear()}
          onInput={onCarDataInput}
          defaultValue={new Date().getFullYear()}
          required
        >
          {generateYearRange(1920, new Date().getFullYear()).map(
            (year, index) => (
              <option key={index}>{year}</option>
            )
          )}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="make">Make</Label>
        <Input
          id="make"
          name="make"
          type="text"
          placeholder="Alfa-Romeo"
          onInput={onCarDataInput}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="model">Model</Label>
        <Input
          id="model"
          name="model"
          type="text"
          placeholder="Giulia"
          onInput={onCarDataInput}
          required
        />
      </FormGroup>
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="transmission">Transmission</Label>
            <FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="transmission"
                    value="Standard"
                    onInput={onCarDataInput}
                    required
                  />
                  Standard
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="transmission"
                    value="Automatic"
                    onInput={onCarDataInput}
                    required
                  />
                  Automatic
                </Label>
              </FormGroup>
            </FormGroup>
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup>
            <Label for="drive_type">Drive Type</Label>
            <Input
              id="drive_type"
              name="drive_type"
              type="select"
              onInput={onCarDataInput}
              required
            >
              <option>AWD</option>
              <option>FWD</option>
              <option>RWD</option>
              <option>4WD</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="vin">VIN</Label>
        <Input
          id="vin"
          name="vin"
          type="text"
          minLength={carData.year < 1981 ? 5 : 17}
          maxLength={carData.year < 1981 ? 13 : 17}
          placeholder={`${carData.year < 1981 ? "5-13" : "17"} characters`}
          onInput={onCarDataInput}
          required
        />
      </FormGroup>
      <Button type="submit" onClick={onSubmit}>
        Add to Garage
      </Button>
    </Form>
  );
}
