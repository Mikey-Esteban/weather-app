import calculateTemp from "../calculateTemp";

describe("Calculate temp", () => {
  describe("to Celsius", () => {
    it("takes in a Kelvin temp and returns Celsius", () => {
      const temp = "284";
      const mode = "celsius";
      expect(calculateTemp(temp, mode)).toBe(10);
    });
  });

  describe("to Fahrenheit", () => {
    it("takes in a Kelvin temp and returns Fahrenheit", () => {
      const temp = "284";
      const mode = "fahrenheit";
      expect(calculateTemp(temp, mode)).toBe(51);
    });
  });
});
