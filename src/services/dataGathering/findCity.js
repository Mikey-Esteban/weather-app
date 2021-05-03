const findCity = (name, data) => {
  return data.filter(c => c.name.toLowerCase() === name.toLowerCase());
};

export default findCity;
