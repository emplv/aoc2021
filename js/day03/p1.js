const fs = require("fs");
const path = require("path");

// Path valid if running from "js/day03"

const testFileContent = fs.readFileSync(path.resolve("./test1.txt"), "utf-8");
const fileContent = fs.readFileSync(path.resolve("./input1.txt"), "utf-8");
function day3part1answer(input) {
  const lines = input.split("\n");
  const bitCount = lines[0].length;
  const mostCommonBits = []; // MSB order
  lines.forEach((line) => {
    [...line].forEach((bit, index) => {
      mostCommonBits[index] = bit == 1 ? -~mostCommonBits[index] : ~-mostCommonBits[index];
    });
  });
  const gammaRate = `0b${mostCommonBits.map(bit => bit > 0 | 0).join('')}` | 0;
  const xorValue = (1 << bitCount) - 1;
  const epsilonRate = xorValue ^ gammaRate; 
  return gammaRate * epsilonRate;
}

/**
 * TEST
 */

console.log(
  `Test input is ${
    day3part1answer(testFileContent) === 198 ? "" : "in"
  }correct!`
);

/**
 * SOLUTION
 */

console.log("Results is: ", day3part1answer(fileContent));
