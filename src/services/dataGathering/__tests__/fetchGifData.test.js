import axios from "axios";

import fetchData from "../fetchGifData";

jest.mock("axios");

describe("fetchData", () => {
  const weather = {
    night: {
      rainy: "pVGsAWjzvXcZW4ZBTE"
    }
  };
  const type = "rainy";
  const time = "night";
  const API_key = process.env.REACT_APP_GIPHY_API_KEY;

  it("fetches data successfully from API", async () => {
    const data = {
      gif: [
        {
          something: "something"
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData(time, type)).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.giphy.com/v1/gifs/${weather[time][type]}?api_key=${API_key}`
    );
  });

  it("fetches data erroneously from API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchData(time, type)).rejects.toThrow(errorMessage);
  });
});
