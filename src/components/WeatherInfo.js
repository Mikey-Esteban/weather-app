import React, { useState } from "react";
import calculateTime from "../services/calculations/calculateTime";
import calculateTemp from "../services/calculations/calculateTemp";
import {
  MainWrapper,
  HeaderWrapper,
  ImageWrapper,
  TempWrapper,
  TimeWrapper
} from "./styles/WeatherInfo";

import Toggle from "./UI/Toggle";

const WeatherInfo = props => {
  const imgUrl = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`;
  const unix_current = props.data.timeInfo.currentTime;
  const unix_sunrise = props.data.timeInfo.sunrise;
  const unix_sunset = props.data.timeInfo.sunset;
  const timezone = props.data.timeInfo.timezone;
  const temp_now = props.data.tempInfo.temp;
  const temp_max = props.data.tempInfo.temp_max;
  const temp_min = props.data.tempInfo.temp_min;
  const temp_feels_like = props.data.tempInfo.feels_like;
  const humidity = props.data.tempInfo.humidity;

  const [tempMode, setTempMode] = useState("celsius");

  const handleToggle = e => {
    e.target.checked ? setTempMode("fahrenheit") : setTempMode("celsius");
  };

  return (
    <MainWrapper id="main">
      <HeaderWrapper id="header">
        <span id="location">{props.data.location}</span>
        <span id="description">{props.data.description}</span>
      </HeaderWrapper>

      <ImageWrapper>
        <img src={imgUrl} alt={props.data.description} />
      </ImageWrapper>

      <TempWrapper id="tempInfo">
        <div id="mainTemp">
          <h1>{calculateTemp(temp_now, tempMode)}º</h1>
        </div>
        <div id="sideTemp">
          <Toggle handleToggle={handleToggle} />
          <span id="maxTemp">max: {calculateTemp(temp_max, tempMode)}º</span>
          <span id="minTemp">min: {calculateTemp(temp_min, tempMode)}º</span>
          <span id="feelsLike">
            feels like: {calculateTemp(temp_feels_like, tempMode)}º
          </span>
          <span id="humidity">humidity: {humidity}</span>
        </div>
      </TempWrapper>

      <TimeWrapper>
        <span id="currentTime">
          Current time: {calculateTime(unix_current, timezone)}
        </span>
        <span id="sunriseTime">
          Sunrise: {calculateTime(unix_sunrise, timezone)}
        </span>
        <span id="sunsetTime">
          Sunset: {calculateTime(unix_sunset, timezone)}
        </span>
      </TimeWrapper>
    </MainWrapper>
  );
};

export default WeatherInfo;
