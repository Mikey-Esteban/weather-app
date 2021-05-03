import calculateWeatherType from "../calculateWeatherType";

describe("calculateWeatherType", () => {
  describe("Rainy", () => {
    it("when main is Thunderstorm", () => {
      expect(calculateWeatherType("Thunderstorm", 200)).toBe("rainy");
    });

    it("when main is Drizzle", () => {
      expect(calculateWeatherType("Drizzle", 300)).toBe("rainy");
    });

    it("when main is Rain", () => {
      expect(calculateWeatherType("Rain", 500)).toBe("rainy");
    });
  });

  it("when main is Snow", () => {
    expect(calculateWeatherType("Snow", 600)).toBe("snowy");
  });

  it("when id is between 700-800", () => {
    expect(calculateWeatherType("Mist", 701)).toBe("misty");
  });

  it("when main is Clear", () => {
    expect(calculateWeatherType("Clear", 800)).toBe("sunny");
  });

  it("when main is Clouds", () => {
    expect(calculateWeatherType("Clouds", 801)).toBe("cloudy");
  });
});
