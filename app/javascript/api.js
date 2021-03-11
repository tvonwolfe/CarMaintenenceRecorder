const API_ROUTE = "/api/v1";
const CAR_API = `${API_ROUTE}/cars`;

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

const API = {
  addCar: (car) => postData(`${CAR_API}/create`, car),
  // fetch a single car, with its maintenance records.
  getCar: (vin) => getData(`${CAR_API}/${vin}`),
  // fetch all cars.
  getAllCars: () => getData(`${CAR_API}/index`),
};

export default API;
