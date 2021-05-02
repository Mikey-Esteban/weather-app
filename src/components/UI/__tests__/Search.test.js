import React from "react";
import { shallow } from "enzyme";

import Search from "../Search";

describe("Search", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  // SEARCH INPUT
  describe("input", () => {
    it("exists", () => {
      expect(wrapper.find("input[type='text']").length).toBe(1);
    });

    it("has the correct props", () => {
      const input = wrapper.find("input");
      expect(input.props()).toEqual({
        name: "query",
        type: "text",
        placeholder: "...enter city here",
        value: "",
        onChange: expect.any(Function)
      });
    });

    it("should set the query value on change event", () => {
      wrapper.find("input[type='text']").simulate("change", {
        target: { value: "austin" }
      });
      expect(wrapper.find("input[type='text']").prop("value")).toEqual(
        "austin"
      );
    });
  });

  // SEARCH BUTTON
  describe("button", () => {
    it("exists with text `Search`", () => {
      expect(wrapper.find("button").length).toBe(1);
      expect(wrapper.find("button").text()).toBe("Search");
    });

    it("has the correct props", () => {
      const handleSubmit = jest.fn();
      wrapper = shallow(<Search handleSubmit={handleSubmit} />);
      expect(wrapper.find("button").props()).toEqual({
        children: "Search",
        onClick: expect.any(Function)
      });
    });

    it("clicking search button calls handleSubmit", () => {
      const handleSubmit = jest.fn();
      wrapper = shallow(<Search handleSubmit={handleSubmit} />);
      wrapper.find("button").simulate("click");
      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it("clicking search button calls with correct parameter", () => {
      const handleSubmit = jest.fn(query => {});
      const event = undefined;
      wrapper = shallow(<Search handleSubmit={handleSubmit} />);
      wrapper.find('input[type="text"]').simulate("change", {
        target: { value: "austin" }
      });
      wrapper.find("button").simulate("click");
      expect(handleSubmit).toHaveBeenCalledWith(event, "austin");
    });
  });
});
