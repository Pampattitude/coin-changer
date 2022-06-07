const { optimalChange } = require("../coin-changer.js");

describe("Coin changer", () => {
  it("should return the correct change for input 3 with base [1, 3]", () => {
    const input = 3;
    const changeBase = [1, 3];

    const result = optimalChange(input, changeBase);

    expect(result).toEqual({
      1: 0,
      3: 1,
      rest: 0,
    });
  });

  it("should return the correct change for input 38 with base [2, 5, 11, 13]", () => {
    const input = 38;
    const changeBase = [2, 5, 11, 13];

    const result = optimalChange(input, changeBase);

    expect(result).toEqual({
      2: 1,
      5: 2,
      11: 0,
      13: 2,
      rest: 0,
    });
  });
});
