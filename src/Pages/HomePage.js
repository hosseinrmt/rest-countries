import axios from "axios";
import { useEffect, useState } from "react";
import SingleCountry from "../components/SingleCountry";

const HomePage = () => {
  const [allCountreis, setAllCountreis] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setAllCountreis(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full bg-gray-100 pt-16">
      <section className="container mx-auto gap-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allCountreis.map((country) => {
          return <SingleCountry country={country} key={country.name.common} />;
        })}
      </section>
    </div>
  );
};

export default HomePage;
