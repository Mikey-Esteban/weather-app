import React, { useState } from "react";
import "./styles/App.css";
import styled from "styled-components";
import fetchWeatherData from "../services/dataGathering/fetchWeatherData";
import fetchGifData from "../services/dataGathering/fetchGifData";
import calculateDayOrNight from "../services/calculations/calculateDayOrNight";

import Search from "./UI/Search";
import WeatherInfo from "./WeatherInfo";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;

  &::after {
    content: "";
    background: url(${props => props.background});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center-top;
    background-size: cover;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  height: 100vh;
  width: 100%;
`;

function App() {
  const [loadData, setLoadData] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [background, setBackground] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event, query) => {
    event.preventDefault();
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
      <AppWrapper background={background}>
        <Search handleSubmit={handleSubmit} />
        <div id="errorMessage">{errorMessage}</div>
        <div id="weatherInfo">
          {loadData ? (
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
