import axios from "axios";

const fetchWeatherData = async query => {
  const API_key = process.env.REACT_APP_OPENWEATHER_SECRET;
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_key}`
  );

  return response;
};

export default fetchWeatherData;
