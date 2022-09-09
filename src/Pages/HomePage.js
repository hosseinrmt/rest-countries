import axios from "axios";
import { useEffect, useState } from "react";
import SingleCountry from "../components/SingleCountry";

const HomePage = () => {
  const [allCountreis, setAllCountreis] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setAllCountreis(res.data);
        setFilteredCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
    const searchValue = e.target.value.toLowerCase();

    if (searchValue !== "") {
      const filteredCountries = allCountreis.filter((country) => {
        return Object.values(country)
          .join(" ")
          .toLocaleLowerCase()
          .includes(searchValue);
      });
      setFilteredCountries(filteredCountries);
    } else {
      setFilteredCountries(allCountreis);
    }
  };

  return (
    <div className="w-full bg-gray-100 pt-4">
      <section className="flex p-4 justify-center mb-8 items-center">
        <input
          type="text"
          onChange={changeHandler}
          values={searchTerm}
          className="w-96 h-12 p-4 rounded-md shadow-md"
          placeholder="search for a country..."
        />
      </section>
      <section className="container mx-auto gap-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCountries.map((country) => {
          return <SingleCountry country={country} key={country.name.common} />;
        })}
      </section>
    </div>
  );
};

export default HomePage;
