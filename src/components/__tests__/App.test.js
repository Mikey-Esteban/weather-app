import React from "react";
import { shallow, mount } from "enzyme";

import App from "../App";
import Search from "../Search";
import WeatherInfo from "../WeatherInfo";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders properly", () => {
    shallow(<App />);
  });

  it("has an Search component", () => {
    wrapper = mount(<App />);
    expect(wrapper.find(Search).length).toBe(1);
  });

  it("has an error message div", () => {
    expect(wrapper.find("#errorMessage").length).toBe(1);
  });

  it("has a weatherInfo div", () => {
    expect(wrapper.find("#weatherInfo").length).toBe(1);
  });

  it("default weather div as a search call to action span", () => {
    expect(wrapper.find("#weatherInfo").find("span").length).toBe(1);
    expect(wrapper.find("#searchCTA").text()).toBe(
      "Enter a city to find out the weather!"
    );
  });
});
