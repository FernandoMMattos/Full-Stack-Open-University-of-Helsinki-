import axios from "axios";
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/";

const getAllCountries = () => {
  const req = axios.get(`${baseURL}all`);
  return req.then((res) => res.data);
};

const getCountryByName = (country) => {
  const req = axios.get(`${baseURL}name/${country}`);
  return req.then((res) => res.data);
};

const getCountryWeather = (lat, lon) => {
  const key = import.meta.env.VITE_WEATHER_API_KEY;
  const req = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`,
  );
  return req.then((res) => res.data);
};

export default {
  getAllCountries,
  getCountryByName,
  getCountryWeather,
};
