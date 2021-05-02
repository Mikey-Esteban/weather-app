import React from "react";
import { shallow } from "enzyme";

import calculateTime from "../../services/calculations/calculateTime";
import WeatherInfo from "../WeatherInfo";

describe("WeatherInfo", () => {
  let wrapper;
  let initialProps = {
    data: {
      location: "Beijing, CN",
      icon: "04n",
      description: "overcast clouds",
      timeInfo: {
        currentTime: 1617805154,
        sunrise: 1617745650,
        sunset: 1617790117,
        timezone: 28800
      },
      tempInfo: {
        temp: 200.3
      }
    }
  };
  beforeEach(() => {
    wrapper = shallow(<WeatherInfo {...initialProps} />);
  });

  it("has a main div", () => {
    expect(wrapper.find("#main").length).toBe(1);
  });

  it("has a location span", () => {
    const span = wrapper.find("span").find("#location");
    expect(span.length).toBe(1);
    expect(span.text()).toBe("Beijing, CN");
  });

  it("has an img", () => {
    const img = wrapper.find("img");
    const imgUrl = `http://openweathermap.org/img/wn/${initialProps.data.icon}@2x.png`;
    expect(img.length).toBe(1);
    expect(img.prop("src")).toBe(imgUrl);
    expect(img.prop("alt")).toBe(initialProps.data.description);
  });

  it("has a temp info div", () => {
    const tempInfo = wrapper.find("#tempInfo");
    expect(tempInfo.length).toBe(1);
  });

  it("renders a toggle component", () => {
    const toggler = wrapper.find("Toggle");
    expect(toggler.length).toBe(1);
  });

  describe("Time info", () => {
    it("has a current time span", () => {
      const span = wrapper.find("span").find("#currentTime");
      const unix_time = initialProps.data.timeInfo.currentTime;
      const timezone = initialProps.data.timeInfo.timezone;
      const currentTime = calculateTime(unix_time, timezone);
      expect(span.length).toBe(1);
      expect(span.text()).toBe(`Current time: ${currentTime}`);
    });

    it("has a sunrise time span", () => {
      const span = wrapper.find("span").find("#sunriseTime");
      const unix_time = initialProps.data.timeInfo.sunrise;
      const timezone = initialProps.data.timeInfo.timezone;
      const sunrise = calculateTime(unix_time, timezone);
      expect(span.length).toBe(1);
      expect(span.text()).toBe(`Sunrise: ${sunrise}`);
    });

    it("has a sunset time span", () => {
      const span = wrapper.find("span").find("#sunsetTime");
      const unix_time = initialProps.data.timeInfo.sunset;
      const timezone = initialProps.data.timeInfo.timezone;
      const sunset = calculateTime(unix_time, timezone);
      expect(span.length).toBe(1);
      expect(span.text()).toBe(`Sunset: ${sunset}`);
    });
  });
});
