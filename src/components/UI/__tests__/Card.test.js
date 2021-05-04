import { shallow } from "enzyme";

import Card from "../Card";

describe("Card", () => {
  let wrapper;
  const props = {
    cityData: {
      id: 104,
      name: "Pallet Town",
      state: "",
      country: "Kanto"
    },
    handleClick: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("renders name", () => {
    expect(wrapper.find("#name").exists()).toBeTruthy();
    expect(wrapper.find("#name").text()).toBe("Pallet Town");
  });

  it("renders state", () => {
    expect(wrapper.find("#state").exists()).toBeTruthy();
    expect(wrapper.find("#state").text()).toBe("");
  });

  it("renders img of flag", () => {
    expect(wrapper.find("#flag").exists()).toBeTruthy();
    expect(wrapper.find("#flag").prop("src")).toBe(
      "https://www.countryflags.io/kanto/flat/24.png"
    );
  });

  it("renders country", () => {
    expect(wrapper.find("#country").exists()).toBeTruthy();
    expect(wrapper.find("#country").text()).toBe("Kanto");
  });

  it("clicking on card calls handleClick", () => {
    wrapper.simulate("click");
    expect(props.handleClick).toHaveBeenCalledTimes(1);
    expect(props.handleClick).toHaveBeenCalledWith(props.cityData.id);
  });
});
