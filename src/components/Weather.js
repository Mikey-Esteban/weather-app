import React from "react";

import WeatherInfo from "./WeatherInfo";

const Weather = props => {
  return (
    <div>
      {props.weatherData && (
        <WeatherInfo data={props.weatherData} background={props.background} />
      )}
    </div>
  );
};

export default Weather;
