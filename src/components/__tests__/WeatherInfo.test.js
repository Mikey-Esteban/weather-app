import React from "react";
import { shallow } from "enzyme";

import calculateTime from "../../services/calculations/calculateTime";
import calculateTemp from "../../services/calculations/calculateTemp";
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
        temp: 280.3,
        temp_max: 281.3,
        temp_min: 279.0,
        feels_like: 280.3,
        humidity: 80
      }
    }
  };
  beforeEach(() => {
    wrapper = shallow(<WeatherInfo {...initialProps} />);
  });

  it("renders main div", () => {
    expect(wrapper.find("#main").exists()).toBeTruthy();
  });

  describe("Header", () => {
    it("renders", () => {
      expect(wrapper.find("#header").exists()).toBeTruthy();
    });

    it("renders location span", () => {
      const span = wrapper.find("#location");
      expect(span.exists()).toBeTruthy();
      expect(span.text()).toBe(initialProps.data.location);
    });

    it("renders weather description span", () => {
      const span = wrapper.find("#description");
      expect(span.exists()).toBeTruthy();
      expect(span.text()).toBe(initialProps.data.description);
    });
  });

  it("renders an img", () => {
    const img = wrapper.find("img");
    const imgUrl = `http://openweathermap.org/img/wn/${initialProps.data.icon}@2x.png`;
    expect(img.exists()).toBeTruthy();
    expect(img.prop("src")).toBe(imgUrl);
    expect(img.prop("alt")).toBe(initialProps.data.description);
  });

  describe("Temperature info", () => {
    it("renders", () => {
      expect(wrapper.find("#tempInfo").exists()).toBeTruthy();
    });

    it("renders main temperature", () => {
      expect(wrapper.find("#mainTemp").exists()).toBeTruthy();
      expect(wrapper.find("#mainTemp").text()).toBe(
        `${calculateTemp(initialProps.data.tempInfo.temp, "celsius")}º`
      );
    });

    describe("side temperatures", () => {
      let sideTemp;
      beforeEach(() => (sideTemp = wrapper.find("#sideTemp")));

      it("renders", () => {
        expect(sideTemp.exists()).toBeTruthy();
      });

      it("renders Toggle component", () => {
        expect(sideTemp.find("Toggle").exists()).toBeTruthy();
      });

      it("renders max temp", () => {
        expect(sideTemp.find("#maxTemp").exists()).toBeTruthy();
        expect(sideTemp.find("#maxTemp").text()).toBe(
          `max: ${calculateTemp(
            initialProps.data.tempInfo.temp_max,
            "celsius"
          )}º`
        );
      });

      it("renders min temp", () => {
        expect(sideTemp.find("#minTemp").exists()).toBeTruthy();
        expect(sideTemp.find("#minTemp").text()).toBe(
          `min: ${calculateTemp(
            initialProps.data.tempInfo.temp_min,
            "celsius"
          )}º`
        );
      });

      it("renders feels like", () => {
        expect(sideTemp.find("#feelsLike").exists()).toBeTruthy();
        expect(sideTemp.find("#feelsLike").text()).toBe(
          `feels like: ${calculateTemp(
            initialProps.data.tempInfo.feels_like,
            "celsius"
          )}º`
        );
      });

      it("renders humidity", () => {
        expect(sideTemp.find("#humidity").exists()).toBeTruthy();
        expect(sideTemp.find("#humidity").text()).toBe(
          `humidity: ${initialProps.data.tempInfo.humidity}`
        );
      });
    });
  });

  describe("Time info", () => {
    it("has a current time span", () => {
      const span = wrapper.find("span").find("#currentTime");
      const unix_time = initialProps.data.timeInfo.currentTime;
      const timezone = initialProps.data.timeInfo.timezone;
      const currentTime = calculateTime(unix_time, timezone);
      expect(span.exists()).toBeTruthy();
      expect(span.text()).toBe(`Current time: ${currentTime}`);
    });

    it("has a sunrise time span", () => {
      const span = wrapper.find("span").find("#sunriseTime");
      const unix_time = initialProps.data.timeInfo.sunrise;
      const timezone = initialProps.data.timeInfo.timezone;
      const sunrise = calculateTime(unix_time, timezone);
      expect(span.exists()).toBeTruthy();
      expect(span.text()).toBe(`Sunrise: ${sunrise}`);
    });

    it("has a sunset time span", () => {
      const span = wrapper.find("span").find("#sunsetTime");
      const unix_time = initialProps.data.timeInfo.sunset;
      const timezone = initialProps.data.timeInfo.timezone;
      const sunset = calculateTime(unix_time, timezone);
      expect(span.exists()).toBeTruthy();
      expect(span.text()).toBe(`Sunset: ${sunset}`);
    });
  });
});
