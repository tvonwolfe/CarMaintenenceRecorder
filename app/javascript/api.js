const API_ROUTE = "/api/v1";
const CAR_API = `${API_ROUTE}/cars`;
const RECORDS_API = `${API_ROUTE}/records`;

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

const deleteData = (resourceRoute) =>
  fetch(resourceRoute, {
    method: "DELETE",
    mode: "cors",
    credentials: "same-origin",
  }).then((response) => response.json());

const API = {
  addCar: (car) => postData(`${CAR_API}/create`, car),
  // fetch a single car, with its maintenance records.
  getCar: (vin) => getData(`${CAR_API}/${vin}`),
  // fetch all cars.
  getAllCars: () => getData(`${CAR_API}/index`),
  deleteCar: (vin) => deleteData(`${CAR_API}/destroy/${vin}`),
  getRecord: (recordId) => getData(`${RECORDS_API}/${recordId}`),
  getRecordsForCar: (vin) => getData(`${RECORDS_API}?vin=${vin}`),
  addRecord: (record) => postData(`${RECORDS_API}/create`, record),
  deleteRecord: (id) => deleteData(`${CAR_API}/destroy/${id}`),
};

export default API;
