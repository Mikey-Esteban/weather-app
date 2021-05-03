import axios from "axios";

const weather = {
  day: {
    rainy: "iiJ870TcI3PZKxatzS",
    sunny: "2wh8ugh52dGSJYrA26",
    cloudy: "jQyztJ1gSbMvrI2XH8",
    snowy: "FjURk1y29dX4Q",
    misty: "3o72F65dJl7Z0PtdjG"
  },
  night: {
    rainy: "pVGsAWjzvXcZW4ZBTE",
    sunny: "MHboUUIoxzOKs",
    cloudy: "IeSXccYMz3K4U",
    snowy: "FjURk1y29dX4Q",
    misty: "3o72F65dJl7Z0PtdjG"
  }
};

const fetchGifData = async (time, type) => {
  const API_key = process.env.REACT_APP_GIPHY_API_KEY;
  const response = await axios.get(
    `https://api.giphy.com/v1/gifs/${weather[time][type]}?api_key=${API_key}`
  );

  return response;
};

export default fetchGifData;
