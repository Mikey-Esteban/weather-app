import React, { useState } from "react";
import "./styles/App.css";
import { AppWrapper } from "./styles/App";

import findCity from "../services/dataGathering/findCity";
import fetchWeatherData from "../services/dataGathering/fetchWeatherData";
import fetchGifData from "../services/dataGathering/fetchGifData";
import calculateDayOrNight from "../services/calculations/calculateDayOrNight";
import calculateWeatherType from "../services/calculations/calculateWeatherType";

import Search from "./UI/Search";
import Cities from "./Cities";
import Weather from "./Weather";

import * as data from "../assets/city.list.json";
const cities = Object.values(data)[0];

const collateWeatherData = data => {
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

  return { location, tempInfo, timeInfo, description, icon };
};

function App() {
  const [citiesData, setCitiesData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [background, setBackground] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearchSubmit = (event, query) => {
    event.preventDefault();
    const queryResults = findCity(query, cities);
    console.log("QR", queryResults);
    console.log(queryResults.length);
    setCitiesData(queryResults);
    if (queryResults.length > 1) {
      console.log("WHAT UP");
    } else {
      // run something
    }
  };

  const handleCityClick = cityId => event => {
    fetchWeatherData(cityId)
      .then(response => {
        console.log(response);
        const data = response.data;
        const {
          location,
          tempInfo,
          timeInfo,
          description,
          icon
        } = collateWeatherData(data);

        let weatherType = calculateWeatherType(
          data.weather[0].main,
          data.weather[0].id
        );
        const time_period = calculateDayOrNight(
          timeInfo.currentTime,
          timeInfo.sunrise,
          timeInfo.sunset
        );

        fetchGifData(time_period, weatherType)
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
        setCitiesData(null);
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
        <Search handleSubmit={handleSearchSubmit} />
        <div id="errorMessage">{errorMessage}</div>
        <Cities citiesData={citiesData} handleClick={handleCityClick} />
        <Weather
          weatherData={weatherData}
          background={background}
          mode={"celsius"}
        />
      </AppWrapper>
    </div>
  );
}

export default App;
