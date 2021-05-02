import axios from "axios";

const weather = {
  rainyChillhopDay: "iiJ870TcI3PZKxatzS",
  rainyChillhopNight: "pVGsAWjzvXcZW4ZBTE",
  sunnyChillhopDay: "2wh8ugh52dGSJYrA26",
  sunnyChillhopNight: "MHboUUIoxzOKs",
  cloudyChillhopDay: "jQyztJ1gSbMvrI2XH8",
  cloudyChillhopNight: "IeSXccYMz3K4U",
  snowyChillhop: "FjURk1y29dX4Q",
  mistyChillhop: "3o72F65dJl7Z0PtdjG"
};

const fetchGifData = async query => {
  console.log("hiyo");
  console.log(weather[query]);
  const API_key = process.env.REACT_APP_GIPHY_API_KEY;
  const response = await axios.get(
    `https://api.giphy.com/v1/gifs/${weather[query]}?api_key=${API_key}`
  );

  return response;
};

export default fetchGifData;
