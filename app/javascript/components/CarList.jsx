import React from "react";
import { Link } from "react-router-dom";

const CarList = ({ cars }) => (
  <div className="car-list">
    {cars.map((car, index) => (
      <CarListing key={index} carData={car} />
    ))}
  </div>
);

const CarListing = ({ carData }) => (
  <div className="car-listing-item">
    <Link
      to={`/car/${carData.vin}`}
      style={{ color: "grey", textDecoration: "none" }}
    >
      <div className="inner-car-listing-item">
        {carData.year} {carData.make} {carData.model}
        <span className="inner-data">{carData.vin}</span>
      </div>
    </Link>
  </div>
);

export default CarList;
