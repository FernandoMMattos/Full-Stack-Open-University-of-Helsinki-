import { useEffect, useState } from "react";
import CountryService from "./services/country.js";
import CountryInfo from "./components/CountryInfo.jsx";
import Filter from "./components/Filter.jsx";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    CountryService.getAllCountries().then((data) => setCountries(data));
  }, []);

  const matches = countries.filter((c) =>
    c.name.common.toLowerCase().includes(filter.toLowerCase()),
  );

  const renderResult = () => {
    if (filter === "") return null;
    if (matches.length > 10)
      return <p>Too many matches, specify another filter</p>;
    if (matches.length > 1)
      return matches.map((c) => <div key={c.cca3}>{c.name.common}</div>);
    if (matches.length === 1) return <CountryInfo country={matches[0]} />;
    return <p>No matches</p>;
  };

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      {renderResult()}
    </div>
  );
};

export default App;
