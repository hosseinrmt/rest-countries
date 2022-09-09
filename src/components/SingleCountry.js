import { Link } from "react-router-dom";

const SingleCountry = ({ country }) => {
  const countryState = {
    name: country.name.common,
    officialname: country.name.official,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    tld: country.tld,
    language: country.languages,
    borders: country.borders,
    flag: country.flags.png,
    language: country.languages,
    currency: country.currencies,
  };

  return (
    <div className="flex flex-col w-52 mx-auto mb-6 bg-white shadow-md rounded-md ">
      <Link to="/country-detail" state={countryState}>
        <div className="cursor-pointer">
          <img
            className="w-52 h-32 rounded-t-md border-b-2"
            src={country.flags.png}
            alt={country.name.common}
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col gap-y-4">
        <h3 className="break-normal w-44 text-lg font-semibold">
          {country.name.common}
        </h3>

        <p>
          <span className="detail-homePage">population: </span>
          {country.population}
        </p>

        <p>
          <span className="detail-homePage">Region: </span>
          {country.region}
        </p>

        <p>
          <span className="detail-homePage">capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
};

export default SingleCountry;
