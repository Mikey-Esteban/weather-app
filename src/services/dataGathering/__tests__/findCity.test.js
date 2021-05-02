import findCity from "../findCity";

describe("findCity", () => {
  const data = [
    {
      id: 0,
      name: "Pallet Town",
      state: "",
      country: "Kanto",
      coord: {
        lon: 47.159401,
        lat: 34.330502
      }
    }
  ];

  expect(findCity("pallet town")).toEqual(data[0]);
});
