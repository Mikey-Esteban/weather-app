import React from "react";

import WeatherInfo from "./WeatherInfo";

const Weather = props => {
  return (
    <div>
      {props.weatherData ? (
        <WeatherInfo data={props.weatherData} background={props.background} />
      ) : (
        <span id="searchCTA">Enter a city to find out the weather!</span>
      )}
    </div>
  );
};

export default Weather;
