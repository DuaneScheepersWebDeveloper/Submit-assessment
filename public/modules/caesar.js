"use strict";
// Function: Caesar Cipher
/**
 **This is what I did to repair your code and make it work
 ** -> @shift param in caesar_cipher() should be set to type number
 ** -> updated the while loop in the if conditional statement indexOf() to include
 **    toUpperCase() to work with alphabetIndex more coherently
 ** -> I changed print at the very bottom to console.log() so that a value is displayed
 **    in the console. print is not valid in Typescript (Javascript)
 **
 ** Personal notes on the code:
 ** -> You used `string` and `encodedTest` to refer to the input string.
 ** It would be better to use a consistent name for your variable to improve readability.
 **
 ** -> Your code checks if the shift value is greater than 26. This is completely valid, however
 **  ,you could also include negative values as well.
 **
 ** -> Your code appends specific characters to the `encodedText` string without changing them.
 ** You may want to find a way of dealing with non-alphanumeric characters if they arise.
 **
 **Styling notes :
 ** -> Your code follows consistent styling convention , using camel case for variable and function names.
 ** ->Your code has proper indentation and you make sure you use of constants
 ** ->You code is well commented
 ** I left an example of how I would structure the code at the bottom
 */
/**
 * Performs a Caesar cipher encryption on the given string.
 * @param {string} string - The input string to be encrypted.
 * @param {number} shift - The number of positions to shift the alphabet.
 * @returns {string} The encrypted string.
 */
const caesar_cipher = (string, shift) => {
    // use shift:number instead of shift:string
    // Alphabet
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Encoded Text
    let encodedText = '';
    if (shift > 26) {
        shift = shift % 26;
    }
    let i = 0;
    while (i < string.length) {
        // Valid Alphabet Characters
        if (alphabet.indexOf(string[i].toUpperCase()) !== -1) {
            // Find Alphabet Index
            const alphabetIndex = alphabet.indexOf(string[i].toUpperCase()); // added a toUpperCase()
            // Alphabet Index Is In Alphabet Range
            if (alphabet[alphabetIndex + shift]) {
                // Append To String
                encodedText += alphabet[alphabetIndex + shift];
            }
            // Alphabet Index Out Of Range (Adjust Alphabet By 26 Characters)
            else {
                // Append To String
                encodedText += alphabet[alphabetIndex + shift - 26];
            }
        }
        // Special Characters
        else {
            // Append To String
            encodedText += string[i];
        }
        // Increase i
        i++;
    }
    return encodedText;
};
// Printing the output to the console to test for correct output
// It should print: THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
console.log(caesar_cipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39));
//----------------------------------------------------------------
//How I would solve the code
//Uncomment the code to see.
// TypeScript Type: Alphabet
// type Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Function: Caesar Cipher
// const caesarCipher = (string: string, shift: number): string => {
//   // Precompute shifted alphabet array
//   const alphabet: Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const alphabetLength = alphabet.length;
//   const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
//   // Use StringBuilder for efficient string concatenation
//   const encodedText: string[] = [];
//   for (let i = 0; i < string.length; i++) {
//     const char = string[i].toUpperCase();
//     if (alphabet.includes(char)) {
//       const alphabetIndex = alphabet.indexOf(char);
//       const shiftedChar = shiftedAlphabet[alphabetIndex];
//       encodedText.push(shiftedChar);
//     } else {
//       encodedText.push(char); // Preserve non-alphabet characters
//     }
//   }
//   return encodedText.join('');
// };
// // Printing the output to the console to test for correct output
// // It should print: THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.
// console.log(caesarCipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39));
//----------------------------------------------------------------
//Thank you for your time
