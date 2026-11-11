import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(baseURL);
  return req.then((res) => res.data);
};

const addPerson = (person) => {
  const req = axios.post(baseURL, person);
  return req.then((res) => res.data);
};

const updatePerson = (id, updatedPerson) => {
  const req = axios.put(`${baseURL}/${id}`, updatedPerson);
  return req.then((res) => res.data);
};

export default {
  getAll,
  addPerson,
  updatePerson,
};
