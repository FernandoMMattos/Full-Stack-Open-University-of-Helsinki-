const CountryList = ({country, onShow}) => {
  return (
    <div>
      {country.name.common}
      <button onClick={() => onShow(country)}>Show</button>
    </div>
  )
}

export default CountryList