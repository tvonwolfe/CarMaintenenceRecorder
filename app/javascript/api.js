const API = "/api/v1";
const carsAPI = `${API}/cars`;

// fetch a single car, with its maintenance records.
export const getCar = async (vin) =>
  fetch(`${carsAPI}/${vin}`).then((response) => response.json());

// fetch all cars.
export const getAllCars = async () =>
  fetch(`${carsAPI}/index`).then((response) => response.json());

export default getAllCars;
