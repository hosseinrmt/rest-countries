import { useLocation, useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

const CountryDetail = () => {
  const { state } = useLocation();
  const Navigate = useNavigate();

  return (
    <div className="bg-gray-100 h-full p-4 md:px-12">
      <section className="container mx-auto">
        <button
          onClick={() => Navigate("/")}
          className="bg-white cursor-pointer flex gap-x-2 px-4 py-2 mb-8 rounded-sm shadow-md items-center"
        >
          <HiArrowNarrowLeft />
          <span>Back</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-start">
          <section>
            <img className="mb-12 w-72 h-40 shadow-lg" src={state.flag} />
          </section>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <section className="flex flex-col gap-y-3 mb-12 mr-12">
              <h2 className="text-2xl mb-6 font-semibold">{state.name}</h2>
              <p>
                <span className="detail-singleCountryPage">
                  official Name:{" "}
                </span>
                {state.officialname}
              </p>
              <p>
                <span className="detail-singleCountryPage">Population: </span>
                {state.population}
              </p>
              <p>
                <span className="detail-singleCountryPage">Region: </span>
                {state.region}
              </p>
              <p>
                <span className="detail-singleCountryPage">Sub Region: </span>
                {state.subregion}
              </p>
              <p>
                <span className="detail-singleCountryPage">Capital: </span>
                {state.capital}
              </p>
            </section>

            <section className="flex flex-col gap-y-3 mb-12">
              <p>
                <span className="detail-singleCountryPage">
                  Top Level Domain:{" "}
                </span>
                {state.tld}
              </p>
              <p>
                <span className="detail-singleCountryPage">Currency: </span>
                {state.currency[Object.keys(state.currency)[0]].name}
              </p>
              <p>
                <span className="detail-singleCountryPage">Language: </span>
                {state.language[Object.keys(state.language)[0]]}
              </p>
            </section>
          </div>
        </div>
        <section className="flex flex-col items-left">
          <span className="detail-singleCountryPage">Border countries:</span>
          <section className="flex justify-evenly mt-6">
            {state.borders.map((border) => (
              <div className="bg-white shadow-md flex-1 mr-1 py-2 px-2 text-center">
                {border}
              </div>
            ))}
          </section>
        </section>
      </section>
    </div>
  );
};

export default CountryDetail;
