const calculateDayOrNight = (time, sunrise, sunset) => {
  let period;
  time > sunrise && time < sunset ? (period = "day") : (period = "night");
  return period;
};

export default calculateDayOrNight;
