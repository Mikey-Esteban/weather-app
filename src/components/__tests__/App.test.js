import React from "react";
import { shallow, mount } from "enzyme";

import App from "../App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders", () => {
    expect(shallow(<App />).exists()).toBeTruthy();
  });

  it("renders Search component", () => {
    wrapper = shallow(<App />);
    expect(wrapper.find("Search").exists()).toBeTruthy();
  });

  it("renders error message div", () => {
    expect(wrapper.find("#errorMessage")).toBeTruthy();
  });

  describe("cities info", () => {
    const props = { showCityCards: true };

    it("renders when showCityCards is true", () => {
      let wrapper = shallow(<App {...props} />);
      expect(wrapper.find("#cityCards").exists()).toBeTruthy();
    });
  });

  describe("weather info", () => {
    const props = { showWeather: true };

    it("renders", () => {
      expect(wrapper.find("#weatherInfo").exists()).toBeTruthy();
    });
    it("default renders search CTA span", () => {
      expect(wrapper.find("#weatherInfo").find("span").length).toBe(1);
      expect(wrapper.find("#searchCTA").text()).toBe(
        "Enter a city to find out the weather!"
      );
    });

    it("when showWeather is true it renders WeatherInfo component", () => {
      wrapper = shallow(<App {...props} />);
      expect(wrapper.find("WeatherInfo").exists()).toBeTruthy();
    });
  });
});
