function optimalChange(input, change = [2, 5, 10]) {
  return computeOptimalChange(
    input,
    change.sort((a, b) => b - a)
  );
}

function computeOptimalChange(
  input,
  change,
  baseResults = {},
  baseChangeIndex = 0
) {
  const currentChange = change[baseChangeIndex];
  const changeResult = Math.floor(input / currentChange);
  let changeRest = input % currentChange;

  let results = {
    ...baseResults,
    [currentChange]: changeResult,
    rest: changeRest,
  };

  if (baseChangeIndex === change.length - 1) {
    return results;
  }

  do {
    results = computeOptimalChange(
      changeRest,
      change,
      results,
      baseChangeIndex + 1
    );

    if (results[currentChange] === 0) {
      break;
    } else if (results.rest > 0) {
      results[currentChange] -= 1;
      changeRest += currentChange;
    }
  } while (results[currentChange] >= 0 && results.rest > 0);

  return results;
}

module.exports = {
  optimalChange,
};
