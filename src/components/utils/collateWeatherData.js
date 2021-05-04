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

export default collateWeatherData;
