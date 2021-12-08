const fs = require("fs");
const path = require("path");

// Path valid if running from "js/day01"

const testFileContent = fs.readFileSync(path.resolve('./test1.txt'), 'utf-8');
const fileContent = fs.readFileSync(path.resolve('./input1.txt'), 'utf-8');

function day1part1answer(input) {
    const numbers = input.split('\n').map(Number);
    return numbers.reduce((result, current, index, array) => {
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

console.log(`Test input is ${day1part1answer(testFileContent) === 7 ? '' : 'in'}correct!`);

/**
 * SOLUTION
 */

console.log('Results is: ', day1part1answer(fileContent));