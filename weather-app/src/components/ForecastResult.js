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
          <div key={k}>
            {k === 0 ? (
              <div className="today forecast">
                <div className="forecast-header">
                  <div className="day">{dayName}</div>
                  <div className="date">
                    {dayNumber} {monthName} {yearNumber}
                  </div>
                </div>
                <div className="forecast-content">
                  <div className="location">{cityDisplay}</div>
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
                      />
                    </div>
                  </div>
                  <span>
                    <img src="images/icon-umberella.png" alt="" />
                  </span>
                  <span>
                    <img src="images/icon-wind.png" alt="" />
                    18km/h
                  </span>
                  <span>
                    <img src="images/icon-compass.png" alt="" />
                    East
                  </span>
                </div>
              </div>
            ) : (
              <div key={k}>
                <h1>No: {k}</h1>
                <div className="day">{item.dateTime}</div>
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
                    />
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
