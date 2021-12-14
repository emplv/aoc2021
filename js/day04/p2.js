const fs = require("fs");
const path = require("path");

// Path valid if running from "js/day04"

const testFileContent = fs.readFileSync(path.resolve("./test1.txt"), "utf-8");
const fileContent = fs.readFileSync(path.resolve("./input1.txt"), "utf-8");

const chunk = ([...a], s) => (0 in a ? [a, ...chunk(a.splice(s), s)] : a);

const checkForBingo = (board) => {
  let bingo = false;
  // check rows
  for (let row = 0; row < 5; row++) {
    const startIndex = row * 5;
    const endIndex = startIndex + 5;
    if (!/\d+/.test(board.slice(startIndex, endIndex).join(" "))) {
      return (bingo = true);
    }
  }
  // check columns
  for (let col = 0; col < 5; col++) {
    if (!/\d+/.test([...Array(5)].map((_, i) => board[col + i * 5]).join(" "))) {
      return (bingo = true);
    }
  }

  return bingo;
};

function day4part2answer(input) {
  const [bingoNumbersString, ...lines] = input.split("\n");
  const bingoNumbers = bingoNumbersString.split(",").map(Number);
  let boards = chunk(lines, 6).map((boardLines) =>
    boardLines.slice(1).join(" ").match(/\d+/g).map(Number)
  );

  while (bingoNumbers.length) {
    const currentNumber = bingoNumbers.shift();
    const remainingBoards = boards.filter((board) => {
      let bingo = false;
      const index = board.findIndex((value) => value === currentNumber);
      if (index >= 0) {
        board[index] = "";
        // check for bingo only if something changed in the board
        bingo = checkForBingo(board);
      }
      return !bingo;
    });
    if (!remainingBoards.length && boards.length === 1) {
      const sumOfNumbersLeft = boards[0].reduce((sum, item) => +item + sum, 0);
      return sumOfNumbersLeft * currentNumber;
    }
    boards = remainingBoards;
  }
}

/**
 * TEST
 */

console.log(
  `Test input is ${
    day4part2answer(testFileContent) === 1924 ? "" : "in"
  }correct!`
);

/**
 * SOLUTION
 */

console.log("Results is: ", day4part2answer(fileContent));
