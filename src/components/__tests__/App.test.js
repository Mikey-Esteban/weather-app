import React from "react";
import { shallow } from "enzyme";

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

  it("renders Cities component", () => {
    expect(wrapper.find("Cities").exists()).toBeTruthy();
  });

  it("renders Weather component", () => {
    expect(wrapper.find("Weather").exists()).toBeTruthy();
  });
});
