import { shallow } from "enzyme";

import Toggle from "../Toggle";

describe("Toggle", () => {
  let wrapper;
  let handleToggle = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Toggle handleToggle={handleToggle} />);
  });

  it("renders", () => {
    expect(wrapper).toBeTruthy();
  });

  it("clicking checkbox calls handleToggle", () => {
    wrapper.find("#checkbox").simulate("click");
    expect(handleToggle).toHaveBeenCalledTimes(1);
  });
});
