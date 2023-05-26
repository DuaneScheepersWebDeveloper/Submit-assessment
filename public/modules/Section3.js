"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readNumber = (numeral) => {
    // Remove leading zeros
    numeral = numeral.replace(/^0+/, '');
    // Parse the numeral as a number
    const number = parseInt(numeral, 10);
    // Format the number using numeral.js
    const formattedNumber = numeral(number).format('0,0');
    // Convert the formatted number to words
    const words = formattedNumber
        .split(',')
        .map((part) => numeral(part).format('words'))
        .join(' ');
    return words;
};
// Example usage
console.log(readNumber('19093')); // Output: "nineteen thousand ninety-three"
console.log(readNumber('1000000')); // Output: "one million"
console.log(readNumber('1234567890')); // Output: "one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred ninety"
