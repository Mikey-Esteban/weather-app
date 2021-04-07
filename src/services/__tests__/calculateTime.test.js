import calculateTime from "../calculateTime";

describe("Calculate time", () => {
  it("takes in a unix timestamp and returns a correct time", () => {
    const city = "Manila";
    const expected_time = "5:47 AM";
    expect(calculateTime(1617745650, 28800)).toBe(expected_time);
  });
});
