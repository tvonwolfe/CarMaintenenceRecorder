import React, { useEffect, useState } from "react";
import { addCar } from "../../api";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

const generateYearRange = (start, end) =>
  Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);

export const NewCarModal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [carData, setCarData] = useState({
    year: 2021,
    make: '',
    model: '',
    transmission: '',
    driveType: 'AWD',
    vin: '',
    numCyl: 0,
    engineDisplacement: 0.0,
  });

  const onYearChange = (event) => {
    event.preventDefault();
    setCarData({
      ...carData,
      year: Number(event.target.value),
    });
  };

  const onMakeChange = (event) => {
    event.preventDefault();
    setCarData({
      ...carData,
      make: event.target.value,
    });
  };

  const onModelChange = (event) => {
    event.preventDefault();
    setCarData({
      ...carData,
      model: event.target.value,
    });
  };

  const onTransmissionChange = (event) => {
    event.preventDefault();
    setCarData({
      ...carData,
      transmission: event.target.value,
    });
  };

  const onDriveTypeChange = (event) => {
    event.preventDefault();
    setCarData({
      ...carData,
      driveType: event.target.value,
    });
  };

  const onVinChange = (event) => {
    event.preventDefault();
    setCarData({
      ...carData,
      vin: event.target.value,
    });
  };

  return (
    <div>
      <Button className="add-car-button" onClick={toggleModal}>
        Add Car...
      </Button>
      <Modal isOpen={modal} toggle={toggleModal} className="add-car-modal">
        <ModalHeader toggle={toggleModal}>Add New Vehicle</ModalHeader>
        <Form className="add-car-form">
          <FormGroup>
            <Label for="year">Year</Label>
            <Input
              id="year"
              type="select"
              placeholder={new Date().getFullYear()}
              onInput={onYearChange}
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
              onInput={onMakeChange}
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
              onInput={onModelChange}
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
                      <Input type="radio" name="transmission" value="Standard" onInput={onTransmissionChange} required />
                      Standard
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="transmission" valueu="Automatic" onInput={onTransmissionChange} required />
                      Automatic
                    </Label>
                  </FormGroup>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col md={8}>
              <FormGroup>
                <Label for="drive_type">Drive Type</Label>
                <Input id="drive_type" name="drive_type" type="select" onInput={onDriveTypeChange} required>
                  <option>AWD</option>
                  <option>FWD</option>
                  <option>RWD</option>
                  <option>4WD</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="num_cyl">Cylinder Count</Label>
                <Input id="num_cyl" name="num_cyl" type="select" required>
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map(num => <option>{num}</option>)}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="displacement">Displacement (L)</Label>
                <Input id="displacement" name="displacement" type="number" min="0.1" max="10.0" step="0.1" onInput={onDriveTypeChange} required /> 
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="vin">VIN</Label>
            <Input
              id="vin"
              type="text"
              minLength={carData.year < 1981 ? 5 : 17}
              maxLength={carData.year < 1981 ? 13 : 17}
              placeholder={`${
                carData.year < 1981 ? "5-13" : "17"
              } characters`}
              onInput={onVinChange}
              required
            />
          </FormGroup>
          <Button onClick={() => console.log(carData)}>Add to Garage</Button>
        </Form>
      </Modal>
    </div>
  );
};
