import React, { useState } from "react";
import "./styles/App.css";
import { AppWrapper } from "./styles/App";

import findCity from "../services/dataGathering/findCity";
import fetchWeatherData from "../services/dataGathering/fetchWeatherData";
import fetchGifData from "../services/dataGathering/fetchGifData";
import calculateDayOrNight from "../services/calculations/calculateDayOrNight";

import Search from "./UI/Search";
import WeatherInfo from "./WeatherInfo";

import * as data from "../assets/city.list.json";
const cities = Object.values(data)[0];
console.log(cities);

function App({ showWeather = false, showCityCards = false }) {
  // const [loadData, setLoadData] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [background, setBackground] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event, query) => {
    event.preventDefault();
    const queryResults = findCity(query, cities);
    console.log("QR", queryResults);
    queryResults.length > 1 && (showCityCards = true);
  };

  const something = query => {
    fetchWeatherData(query)
      .then(response => {
        console.log(response);
        const data = response.data;
        const location = `${data.name}, ${data.sys.country}`;
        const tempInfo = data.main;
        const timeInfo = {
          timezone: data.timezone,
          currentTime: data.dt,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset
        };
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const time_period = calculateDayOrNight(
          timeInfo.currentTime,
          timeInfo.sunrise,
          timeInfo.sunset
        );
        fetchGifData("rainyChillhopDay")
          .then(response => {
            console.log("GIF RESPONSE", response);
            setBackground(response.data.data.images.original.url);
          })
          .catch(error => {
            console.log("GIF ERROR", error);
          });
        setWeatherData({
          location,
          tempInfo,
          timeInfo,
          description,
          icon
        });
        setErrorMessage("");
        // setLoadData(true);
      })
      .catch(error => {
        if (error.response) {
          // Request made and server responded
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("error REQUEST", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("error MESSAGE", error.message);
        }
      });
  };

  return (
    <div className="App">
      <AppWrapper background={background}>
        <Search handleSubmit={handleSubmit} />
        <div id="errorMessage">{errorMessage}</div>
        {showCityCards && <div id="cityCards"></div>}
        <div id="weatherInfo">
          {showWeather ? (
            <WeatherInfo data={weatherData} background={background} />
          ) : (
            <span id="searchCTA">Enter a city to find out the weather!</span>
          )}
        </div>
      </AppWrapper>
    </div>
  );
}

export default App;
