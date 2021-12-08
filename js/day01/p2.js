const fs = require("fs");
const path = require("path");

// Path valid if running from "js/day01"

const testFileContent = fs.readFileSync(path.resolve("./test1.txt"), "utf-8");
const fileContent = fs.readFileSync(path.resolve("./input1.txt"), "utf-8");

function day1part2answer(input) {
  const numbers = input.split("\n").map(Number);
  const measurementCount = numbers.length - 2;
  const measurements = [];
  for (let i = 0; i < measurementCount; i++) {
    measurements.push(
      numbers.slice(i, i + 3).reduce((result, current) => result + current, 0)
    );
  }
  return measurements.reduce((result, current, index, array) => {
    const previous = array[index - 1];
    if (previous && previous < current) {
      return result + 1;
    }
    return result;
  }, 0);
}

/**
 * TEST
 */

console.log(
  `Test input is ${day1part2answer(testFileContent) === 5 ? "" : "in"}correct!`
);

/**
 * SOLUTION
 */

console.log("Results is: ", day1part2answer(fileContent));
