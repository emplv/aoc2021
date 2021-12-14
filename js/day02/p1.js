const fs = require("fs");
const path = require("path");

// Path valid if running from "js/day02"

const testFileContent = fs.readFileSync(path.resolve("./test1.txt"), "utf-8");
const fileContent = fs.readFileSync(path.resolve("./input1.txt"), "utf-8");
function day2part1answer(input) {
  const lines = input.split("\n");
  const pos = [0, 0];
  lines.forEach((line) => {
    const [instruction, amount] = line.split(" ");
    switch (instruction) {
      case "forward": {
        pos[0] += +amount;
        break;
      }
      case "down": {
        pos[1] += +amount;
        break;
      }
      case "up": {
        pos[1] -= +amount;
        break;
      }
    }
  });
  return pos[0] * pos[1];
}

/**
 * TEST
 */

console.log(
  `Test input is ${
    day2part1answer(testFileContent) === 150 ? "" : "in"
  }correct!`
);

/**
 * SOLUTION
 */

console.log("Results is: ", day2part1answer(fileContent));
