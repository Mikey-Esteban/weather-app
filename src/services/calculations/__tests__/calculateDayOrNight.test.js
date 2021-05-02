import calculateDayOrNight from "../calculateDayOrNight";

describe("Calculate Day or Night", () => {
  it("returns `day` when time is between sunrise, and sunset", () => {
    const time = 1619787452;
    const sunrise = 1619776650;
    const sunset = 1619826717;
    expect(calculateDayOrNight(time, sunrise, sunset)).toBe("day");
  });

  it("returns `night` when time is below sunrise", () => {
    const time = 1619789105;
    const sunrise = 1619798450;
    const sunset = 1619844968;
    expect(calculateDayOrNight(time, sunrise, sunset)).toBe("night");
  });

  it("returns `night` when time is after sunset", () => {
    const time = 1619788720;
    const sunrise = 1619732036;
    const sunset = 1619777549;
    expect(calculateDayOrNight(time, sunrise, sunset)).toBe("night");
  });
});
