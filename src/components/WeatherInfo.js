import React from "react";
import calculateTime from "../services/calculateTime";

const WeatherInfo = props => {
  // console.log(props);
  const imgUrl = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`;
  const unix_current = props.data.timeInfo.currentTime;
  const unix_sunrise = props.data.timeInfo.sunrise;
  const unix_sunset = props.data.timeInfo.sunset;
  const timezone = props.data.timeInfo.timezone;

  return (
    <div id="main">
      <span id="location">{props.data.location}</span>
      <img src={imgUrl} alt={props.data.description} />
      <span id="currentTime">
        Current time: {calculateTime(unix_current, timezone)}
      </span>
      <span id="sunriseTime">
        Sunrise: {calculateTime(unix_sunrise, timezone)}
      </span>
      <span id="sunsetTime">
        Sunset: {calculateTime(unix_sunset, timezone)}
      </span>
    </div>
  );
};

export default WeatherInfo;
