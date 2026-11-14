import { useEffect, useState } from "react";
import CountryService from "../services/country.js";

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const [lat, lon] = country.capitalInfo?.latlng ?? country.latlng;

  useEffect(() => {
    CountryService.getCountryWeather(lat, lon)
      .then((data) => setWeather(data))
      .catch((err) => console.error("weather request failed:", err));
  }, [lat, lon]);

  return (
    <>
      <h1>{country.name.common}</h1>
      <div>Capital: {country.capital?.[0]}</div>
      <div>Area: {country.area}</div>

      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages ?? {}).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

      <h3>Weather in {country.capital?.[0] ?? country.name.common}</h3>
      {weather ? (
        <>
          <div>Temperature: {weather.main.temp.toFixed(1)} °C</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <div>Wind: {weather.wind.speed} m/s</div>
        </>
      ) : (
        <p>Loading weather...</p>
      )}
    </>
  );
};

export default CountryInfo;
