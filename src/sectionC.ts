import { singleDigits, twoDigits, powersOfTen } from './data/section3Data';
/**
 * Converts a numeral to its standard representation in words.
 *
 * @param {string} numeral - The numeral to convert.
 * @returns {string} The standard representation of the numeral in words.
 */
const readNumber = (numeral: string): string => {
  /**
   * Inserts commas every three digits in a number.
   *
   * @param {string} num - The number to insert commas in.
   * @returns {string} The number with commas inserted.
   */
  // Function to insert commas every three digits
  const insertCommas = (num: string): string => {
    let result = '';
    let count = 0;
    for (let i = num.length - 1; i >= 0; i--) {
      result = num[i] + result;
      count++;
      if (count % 3 === 0 && i !== 0) {
        result = ',' + result;
      }
    }
    return result;
  };
  // Helper function to read a number up to three digits
  const readThreeDigits = (num: string): string => {
    let result = '';
    const length = num.length;

    if (length === 3) {
      result += singleDigits[num[0]] + ' ' + powersOfTen[2] + ' ';
      num = num.slice(1);
    }

    if (length >= 2) {
      const twoDigit = twoDigits[num.slice(0, 2)];
      if (twoDigit) {
        result += twoDigit + ' ';
        num = num.slice(2);
      } else {
        const tenDigit = twoDigits[num[0] + '0'];
        if (tenDigit) {
          result += tenDigit + ' ';
          num = num.slice(1);
        }
      }
    }

    if (length === 1) {
      result += singleDigits[num];
    }

    return result.trim();
  };

  // Remove leading zeros
  numeral = numeral.replace(/^0+/, '');

  // If the numeral is zero
  if (numeral === '0') {
    return singleDigits['0'];
  }

  // Initialize result
  let result = '';

  // Split the numeral into groups of three digits from right to left
  const groups = numeral.match(/\d{1,3}/g)?.reverse() || [];

  // Iterate over each group and read the number
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    const groupRead = readThreeDigits(group);
    if (groupRead) {
      result = groupRead + ' ' + powersOfTen[i * 3] + ' ' + result;
    }
  }

  // Trim extra spaces and insert commas
  result = result.trim();
  result = insertCommas(result);

  return result;
};
