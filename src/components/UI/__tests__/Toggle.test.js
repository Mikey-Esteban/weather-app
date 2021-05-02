import { shallow } from "enzyme";

import Toggle from "../Toggle";

describe("Toggle", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Toggle />);
  });

  it("renders", () => {
    expect(wrapper).toBeTruthy();
  });
});
