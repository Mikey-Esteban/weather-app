const calculateTemp = (temp, mode) => {
  let convertedTemp;
  mode === "celsius"
    ? (convertedTemp = temp - 273.15)
    : (convertedTemp = 1.8 * (temp - 273) + 32);
  return Math.trunc(convertedTemp);
};

export default calculateTemp;
