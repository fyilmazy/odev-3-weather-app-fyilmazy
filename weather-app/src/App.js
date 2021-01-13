import { useState } from "react";
import axios from "axios";
import "./App.css";
import CitySelector from "./components/CitySelector";

function App() {
  const [city, setCity] = useState("istanbul");

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form>
        <label htmlFor="cities">City: </label>
        <CitySelector city={city} setCity={setCity} />
      </form>
    </div>
  );
}

export default App;
