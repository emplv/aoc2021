const fs = require("fs");
const path = require("path");

// Path valid if running from "js/day03"

function filterArrayByBit(arr, treshold, sign, index) {
  if (arr.length === 1 || !arr[0].length === index) return `0b${arr[0]}` | 0;
  const mostCommonBits = []; // MSB order
  arr.forEach((line) => {
    [...line].forEach((bit, index) => {
      mostCommonBits[index] =
        bit == 1 ? -~mostCommonBits[index] : ~-mostCommonBits[index];
    });
  });
  const currentBitFilterValue = (sign * mostCommonBits[index] >= treshold) | 0;
  return filterArrayByBit(
    arr.filter((numberString) => currentBitFilterValue == numberString[index]),
    treshold,
    sign,
    index + 1
  );
}

const testFileContent = fs.readFileSync(path.resolve("./test1.txt"), "utf-8");
const fileContent = fs.readFileSync(path.resolve("./input1.txt"), "utf-8");
function day3part2answer(input) {
  const lines = input.split("\n");
  const oxygenGeneratorRating = filterArrayByBit(lines, 0, 1, 0);
  const co2ScrubberRating = filterArrayByBit(lines, 1, -1, 0);
  const lifeSupoortRating = oxygenGeneratorRating * co2ScrubberRating;
  return lifeSupoortRating;
}

/**
 * TEST
 */

console.log(
  `Test input is ${
    day3part2answer(testFileContent) === 230 ? "" : "in"
  }correct!`
);

/**
 * SOLUTION
 */

console.log("Results is: ", day3part2answer(fileContent));
