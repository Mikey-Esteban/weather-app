import findCity from "../findCity";

describe("findCity", () => {
  const cities = [
    {
      id: 0,
      name: "Pallet Town",
      lat: 46.89,
      lon: 177.83
    },
    {
      id: 1,
      name: "Victory Road",
      lat: 87.89,
      lon: 77.83
    },
    {
      id: 2,
      name: "Victory Road",
      lat: 100.8,
      lon: 17.83
    }
  ];

  it("loads", () => {
    expect(findCity).toBeTruthy();
  });

  it("returns first city when name is `pallet town`", () => {
    expect(findCity("pallet town", cities)).toEqual([cities[0]]);
  });

  it("returns second and third city when name is `victory ROAD`", () => {
    expect(findCity("victory ROAD", cities)).toEqual([cities[1], cities[2]]);
  });
});
