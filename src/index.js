const { optimalChange } = require("./coin-changer");

const testSet = [1, 2, 3, 5, 10, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const changeBase = [2, 3, 5, 7, 11, 13];
for (const test of testSet) {
  console.log(`Computing change for ${test}...`);
  console.log(
    `Change for ${test}: ${JSON.stringify(
      optimalChange(test, changeBase),
      null,
      2
    )}`
  );
  console.log();
}
