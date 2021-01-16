import React, { useContext } from "react";
import { ForecastContext } from "./context/ForecastContext";

function Today() {
  const {
    cityDisplay,
    weatherData,
    dayName,
    dayNumber,
    monthName,
    yearNumber,
  } = useContext(ForecastContext);

  return (
    <div>
      {weatherData.map((item, k) => {
        return (
          <div id="day-submain" key={k}>
            {k === 0 ? (
              <div className="today forecast">
                <div className="forecast-header">
                  <div className="date">
                    <h2>
                      {dayNumber} {monthName} {yearNumber}
                    </h2>
                    <div className="day">
                      <h4>{dayName}</h4>
                    </div>
                  </div>
                </div>
                <div className="forecast-content">
                  <div className="location">
                    <h4>{cityDisplay}</h4>
                  </div>
                  <div className="degree">
                    <div className="num">
                      {item.minTemp} <sup>o</sup>C / {item.maxTemp}
                      <sup>o</sup>C
                    </div>
                    <div className="forecast-icon">
                      <img
                        src={`https://www.weatherbit.io/static/img/icons/${item.iconCode}.png`}
                        alt=""
                        width="90"
                      />{" "}
                      <h5>{item.description}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={k}>
                <div className="day">
                  <h3>{item.dateTime}</h3>
                </div>
                <div className="degree">
                  <div className="num">
                    {item.minTemp} <sup>o</sup>C / {item.maxTemp}
                    <sup>o</sup>C
                  </div>
                  <div className="forecast-icon">
                    <img
                      src={`https://www.weatherbit.io/static/img/icons/${item.iconCode}.png`}
                      alt=""
                      width="90"
                    />{" "}
                    <h5>{item.description}</h5>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Today;
