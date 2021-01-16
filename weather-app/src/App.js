import "./App.css";

import Main from "./components/Main";
import { ForecastProvider } from "./components/context/ForecastContext";

function App() {
  return (
    <div className="App">
      <ForecastProvider>
        <Main />
      </ForecastProvider>
    </div>
  );
}
export default App;
