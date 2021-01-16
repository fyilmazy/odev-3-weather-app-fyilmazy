import React, { useContext } from "react";
import ForecastContext from "./context/ForecastContext";
import CitySelector from "./CitySelector";
import Forecast from "./Forecast";
import ForecastResult from "./ForecastResult";

function Main() {
  const { city, setCity, langHandler, langText } = useContext(ForecastContext);
  return (
    <div className="Main">
      <h1>Weather App</h1>
      <button onClick={langHandler}>{langText}</button>
      <form>
        <label htmlFor="cities">City: </label>
        <CitySelector city={city} setCity={setCity} />
      </form>
      <Forecast>
        <ForecastResult city={city} />
      </Forecast>
    </div>
  );
}

export default Main;
