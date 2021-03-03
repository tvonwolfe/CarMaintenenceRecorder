const API = "/api/v1";
const carsAPI = `${API}/cars`;

const getData = (apiRoute) =>
  fetch(apiRoute, {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

const postData = (apiRoute, data) =>
  fetch(apiRoute, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());

export const addCar = (data) => {
  postData(`${carsAPI}/create`, data);
};
// fetch a single car, with its maintenance records.
export const getCar = (vin) => getData(`${carsAPI}/${vin}`);

// fetch all cars.
export const getAllCars = () => getData(`${carsAPI}/index`);

export default getAllCars;
