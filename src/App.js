import "./App.css";

import Main from "./components/Main";
import Footer from "./components/Footer";
import { ForecastProvider } from "./components/context/ForecastContext";

function App() {
  return (
    <div className="App">
      <ForecastProvider>
        <Main />
        <Footer />
      </ForecastProvider>
    </div>
  );
}
export default App;
