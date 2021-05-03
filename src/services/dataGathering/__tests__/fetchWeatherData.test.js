import axios from "axios";

import fetchData from "../fetchWeatherData";

jest.mock("axios");

describe("fetchData", () => {
  const query = "4671654";
  const API_key = process.env.REACT_APP_OPENWEATHER_SECRET;

  it("fetches data successfully from an API", async () => {
    const data = {
      weather: [
        {
          main: "Clear"
        }
      ]
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData(query)).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?id=${query}&appid=${API_key}`
    );
  });

  it("fetches data erroneously from an API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchData("austin")).rejects.toThrow(errorMessage);
  });
});
