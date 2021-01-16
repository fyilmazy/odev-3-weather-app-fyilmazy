import { createContext, useState, useEffect } from "react";
import { getData, cityDisplay } from "../DataCall";
export const ForecastContext = createContext();
export const ForecastProvider = ({ children }) => {
  const [lang, setLang] = useState("tr");
  const [city, setCity] = useState("istanbul");
  const [weatherData, setWeatherData] = useState([]);
  const todayData = weatherData;

  const langHandler = () => {
    lang === "tr" ? setLang("en") : setLang("tr");
  };

  const daysEn = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysTr = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const monthsTr = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];
  const monthsEn = [
    "January",
    "Februrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayCount = new Date();
  const dayName =
    lang === "tr" ? daysTr[dayCount.getDay()] : daysEn[dayCount.getDay()];
  const dayNumber = dayCount.getDate();
  const yearNumber = dayCount.getFullYear();
  const monthName =
    lang === "tr"
      ? monthsTr[dayCount.getMonth()]
      : monthsEn[dayCount.getMonth()];

  const langText = lang.toUpperCase();

  const values = {
    lang,
    setLang,
    city,
    setCity,
    weatherData,
    setWeatherData,
    langHandler,
    langText,
    todayData,
    getData,
    dayName,
    dayNumber,
    monthName,
    yearNumber,
    cityDisplay,
    dayCount,
    daysEn,
    daysTr,
  };

  useEffect(() => {
    getData(city, lang).then((response) => {
      setWeatherData(response);
      setLang(lang);
    });
  }, [city, lang]);

  return (
    <ForecastContext.Provider value={values}>
      {children}
    </ForecastContext.Provider>
  );
};

export default ForecastContext;
