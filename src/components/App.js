import React, { useState } from "react";
import "./styles/App.css";
import { AppWrapper } from "./styles/App";

import findCity from "../services/dataGathering/findCity";
import fetchWeatherData from "../services/dataGathering/fetchWeatherData";
import fetchGifData from "../services/dataGathering/fetchGifData";
import calculateDayOrNight from "../services/calculations/calculateDayOrNight";
import calculateWeatherType from "../services/calculations/calculateWeatherType";
import collateWeatherData from "./utils/collateWeatherData";
import handleErrors from "./utils/handleErrors";

import Search from "./UI/Search";
import Cities from "./Cities";
import Weather from "./Weather";

import * as data from "../assets/city.list.json";
const cities = Object.values(data)[0];

function App() {
  const [query, setQuery] = useState("");
  const [citiesData, setCitiesData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [background, setBackground] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const grabAndSetWeatherData = cityId => {
    fetchWeatherData(cityId)
      .then(response => {
        console.log(response);
        const data = response.data;
        setWeatherData(collateWeatherData(data));

        let weatherType = calculateWeatherType(
          data.weather[0].main,
          data.weather[0].id
        );
        const time_period = calculateDayOrNight(
          data.dt,
          data.sys.sunrise,
          data.sys.sunset
        );

        fetchGifData(time_period, weatherType)
          .then(response => {
            console.log("GIF RESPONSE", response);
            setBackground(response.data.data.images.original.url);
          })
          .catch(error => {
            const message = handleErrors(error);
            setErrorMessage(message);
          });
        setErrorMessage("");
        setCitiesData(null);
      })
      .catch(error => {
        const message = handleErrors(error);
        setErrorMessage(message);
      });
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (event, query) => {
    event.preventDefault();
    const queryResults = findCity(query, cities);
    console.log(queryResults);
    setQuery("");
    if (queryResults.length > 1) {
      setCitiesData(queryResults);
    } else if (queryResults.length === 0) {
      setErrorMessage("couldn't find city");
    } else {
      grabAndSetWeatherData(queryResults[0].id);
    }
  };

  const handleCityClick = cityId => event => {
    grabAndSetWeatherData(cityId);
  };

  return (
    <div className="App">
      <AppWrapper background={background}>
        <Search
          handleSubmit={handleSearchSubmit}
          handleInputChange={handleInputChange}
          query={query}
        />
        <div id="errorMessage">{errorMessage}</div>
        <Cities citiesData={citiesData} handleClick={handleCityClick} />
        <Weather
          weatherData={weatherData}
          background={background}
          mode={"celsius"}
        />
        {!weatherData && !citiesData && (
          <span id="searchCTA">Enter a city to find out the weather!</span>
        )}
      </AppWrapper>
    </div>
  );
}

export default App;
