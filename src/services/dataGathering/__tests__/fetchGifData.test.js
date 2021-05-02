import axios from "axios";

import fetchData from "../fetchGifData";

jest.mock("axios");

describe("fetchData", () => {
  const weather = {
    rain: "t7Qb8655Z1VfBGr5XB",
    clearNight: "xUPGcshrKRahaS8ef6"
  };
  const query = "clearNight";
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

    await expect(fetchData(weather[query])).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.giphy.com/v1/gifs/${weather[query]}?api_key=${API_key}`
    );
  });

  it("fetches data erroneously from API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchData(query)).rejects.toThrow(errorMessage);
  });
});
