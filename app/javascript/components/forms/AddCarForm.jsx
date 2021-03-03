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
  const [carData, setCarData] = useState({});

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
                      <Input type="radio" name="transmission" required />
                      Standard
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="transmission" required />
                      Automatic
                    </Label>
                  </FormGroup>
                </FormGroup>
              </FormGroup>
            </Col>
            <Col md={8}>
              <FormGroup>
                <Label for="drive_type">Drive Type</Label>
                <Input id="drive_type" name="drive_type" type="select" required>
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
              type="text"
              minLength={carData.year < 1981 ? 5 : 17}
              maxLength={carData.year < 1981 ? 13 : 17}
              placeholder={`Must be ${
                carData.year < 1981 ? "5-13" : "17"
              } characters`}
              required
            />
          </FormGroup>
          <Button>Add to Garage</Button>
        </Form>
      </Modal>
    </div>
  );
};
