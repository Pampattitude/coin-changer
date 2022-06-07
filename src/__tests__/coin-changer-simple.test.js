const { optimalChange } = require("../coin-changer.js");

describe("Coin changer", () => {
  it("should return the correct change for input 2", () => {
    const input = 2;

    const result = optimalChange(input);

    expect(result).toEqual({
      2: 1,
      5: 0,
      10: 0,
      rest: 0,
    });
  });

  it("should return the correct change for input 5", () => {
    const input = 5;

    const result = optimalChange(input);

    expect(result).toEqual({
      2: 0,
      5: 1,
      10: 0,
      rest: 0,
    });
  });

  it("should return the correct change for input 10", () => {
    const input = 10;

    const result = optimalChange(input);

    expect(result).toEqual({
      2: 0,
      5: 0,
      10: 1,
      rest: 0,
    });
  });

  it("should return the correct change for input 11", () => {
    const input = 11;

    const result = optimalChange(input);

    expect(result).toEqual({
      2: 3,
      5: 1,
      10: 0,
      rest: 0,
    });
  });

  it("should return the correct change with rest for input 3", () => {
    const input = 3;

    const result = optimalChange(input);

    expect(result).toEqual({
      2: 1,
      5: 0,
      10: 0,
      rest: 1,
    });
  });
});
