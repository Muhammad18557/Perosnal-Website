import React, {useState, useEffect} from 'react'

function CountrySelect({country, setCountry}) {

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countries = data.map(country => country.name.common);
        setCountryList(countries);
      })
      .catch(error => {
        console.error('Error fetching country list:', error);
      });
  }, []);

  return (
    <>
    <label htmlFor="country">Country:</label>
    <select
      id="country"
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      required
    >
      <option value="" > Select a Country</option>
      {countryList.map((countryName, index) => (
        <option key={index} value={countryName}>{countryName}</option>
      ))}
    </select>
    </>
  )
}

export default CountrySelect
