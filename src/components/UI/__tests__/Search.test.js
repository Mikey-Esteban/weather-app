import React from "react";
import { shallow } from "enzyme";

import Search from "../Search";

describe("Search", () => {
  let wrapper;
  let initialProps = {
    handleSubmit: jest.fn(),
    handleInputChange: jest.fn(value => {
      console.log("hello", value);
      initialProps.query = value;
    }),
    query: ""
  };
  beforeEach(() => {
    wrapper = shallow(<Search {...initialProps} />);
  });

  // SEARCH INPUT
  describe("input", () => {
    it("renders", () => {
      expect(wrapper.find("input[type='text']").exists()).toBeTruthy();
    });

    it("has the correct props", () => {
      const input = wrapper.find("input");
      expect(input.props()).toEqual({
        name: "query",
        type: "text",
        placeholder: "...enter city here",
        value: "",
        onChange: initialProps.handleInputChange
      });
    });

    it("onChange calls handleInputChange", () => {
      const input = wrapper.find("input");
      input.simulate("change");
      expect(initialProps.handleInputChange).toHaveBeenCalledTimes(1);
    });
  });

  // SEARCH BUTTON
  describe("button", () => {
    it("renders with text `Search`", () => {
      expect(wrapper.find("button").exists()).toBeTruthy();
      expect(wrapper.find("button").text()).toBe("Search");
    });

    it("has the correct props", () => {
      expect(wrapper.find("button").props()).toEqual({
        children: "Search",
        onClick: expect.any(Function)
      });
    });

    it("clicking search button calls handleSubmit", () => {
      wrapper.find("button").simulate("click");
      expect(initialProps.handleSubmit).toHaveBeenCalledTimes(1);
    });
  });
});
