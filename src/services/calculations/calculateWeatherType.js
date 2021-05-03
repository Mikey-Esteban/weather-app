const calculateWeatherType = (main, weatherId) => {
  let type;
  if (main === "Thunderstorm" || main === "Drizzle" || main === "Rain") {
    type = "rainy";
  } else if (main === "Snow") {
    type = "snowy";
  } else if (weatherId > 700 && weatherId < 800) {
    type = "misty";
  } else if (main === "Clear") {
    type = "sunny";
  } else if (main === "Clouds") {
    type = "cloudy";
  }

  return type;
};

export default calculateWeatherType;
