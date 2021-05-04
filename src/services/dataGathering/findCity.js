const findCity = (name, data) => {
  console.log("helllooooooo");
  console.log("name", name);
  console.log("data", data);
  return data.filter(c => c.name.toLowerCase() === name.toLowerCase());
};

export default findCity;
