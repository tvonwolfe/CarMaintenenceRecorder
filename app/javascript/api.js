const API = "/api/v1";
const carsAPI = `${API}/cars`;

export const getData = (apiRoute) =>
  fetch(apiRoute, {
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

// fetch a single car, with its maintenance records.
export const getCar = (vin) => getData(`${carsAPI}/${vin}`);

// fetch all cars.
export const getAllCars = () => getData(`${carsAPI}/index`);

export default getAllCars;
