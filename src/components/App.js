import React, { useState } from "react";
import "./styles/App.css";
import styled from "styled-components";
import fetchData from "../services/fetchData";

import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [loadData, setLoadData] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event, query) => {
    event.preventDefault();
    fetchData(query)
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
        setWeatherData({
          location,
          tempInfo,
          timeInfo,
          description,
          icon
        });
        setErrorMessage("");
        setLoadData(true);
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
      <AppWrapper>
        <Search handleSubmit={handleSubmit} />
        <div id="errorMessage">{errorMessage}</div>
        <div id="weatherInfo">
          {loadData ? (
            <WeatherInfo data={weatherData} />
          ) : (
            <span id="searchCTA">Enter a city to find out the weather!</span>
          )}
        </div>
      </AppWrapper>
    </div>
  );
}

export default App;
