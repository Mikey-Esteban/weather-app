import { shallow } from "enzyme";

import Weather from "../Weather";

describe("Weather", () => {
  let wrapper;

  const props = {
    weatherData: { temp: 70 },
    background: { test: "test" }
  };

  beforeEach(() => {
    wrapper = shallow(<Weather />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders WeatherInfo component when weatherData exists", () => {
    wrapper = shallow(<Weather {...props} />);
    expect(wrapper.find("WeatherInfo").exists()).toBeTruthy();
  });
});
