import { shallow } from "enzyme";

import Cities from "../Cities";

describe("Cities", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Cities />);
  });
  const props = {
    citiesData: [
      {
        id: 1,
        name: "Austin",
        state: "AR",
        country: "US"
      },
      {
        id: 2,
        name: "Austin",
        state: "TX",
        country: "US"
      }
    ]
  };

  it("renders", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("is empty when citiesData is null", () => {
    expect(wrapper.text()).toBe("");
  });

  describe("when cityData exists", () => {
    beforeEach(() => {
      wrapper = shallow(<Cities {...props} />);
    });

    it("renders cityCards", () => {
      expect(wrapper.find("#cityCards").text()).toBe("...found 2 cities");
    });

    it("renders 2 Card(s) component", () => {
      expect(wrapper.find("Card").length).toBe(2);
    });
  });
});
