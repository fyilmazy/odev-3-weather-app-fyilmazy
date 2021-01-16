import axios from "axios";

const APIKEY = process.env.REACT_APP_API_KEY;
export let cityDisplay;
export const getData = async (city, lang) => {
  try {
    const theData = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=turkey&days=8&units=C&lang=${lang}&key=${APIKEY}`
    );
    cityDisplay = theData.data.city_name;

    const resArray = theData.data.data.map((item) => {
      const daysInTr = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",
      ];
      const daysInEn = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayCr = new Date(item.datetime);
      const dateTry =
        lang === "tr" ? daysInTr[dayCr.getDay()] : daysInEn[dayCr.getDay()];
      return {
        dateTime: dateTry,
        maxTemp: item.app_max_temp,
        minTemp: item.app_min_temp,
        windDirec: item.wind_dir,
        windSpeed: item.wind_spd,
        dewPoint: item.dewpt,
        description: item.weather.description,
        iconCode: item.weather.icon,
      };
    });
    return resArray;
  } catch (e) {
    console.log(e);
  }
};
