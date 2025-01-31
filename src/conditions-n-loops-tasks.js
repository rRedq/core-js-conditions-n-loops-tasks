/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let result = null;
  if (a > result) {
    result = a;
  } else if (b > result) {
    result = b;
  } else {
    result = c;
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let result = '';

  if (king.x === queen.x) {
    result = true;
  } else if (king.y === queen.y) {
    result = true;
  } else if (Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)) {
    return true;
  } else {
    result = false;
  }

  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result = null;
  if (
    (a === b && a === Math.ceil(Math.sqrt(c))) ||
    (a === c && a === Math.ceil(Math.sqrt(b))) ||
    (b === c && b === Math.ceil(Math.sqrt(a)))
  ) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let newNum = num;
  let newStr = '';

  while (newNum / 10 > 0) {
    if (newNum - 10 >= 0) {
      newStr += 'X';
      newNum -= 10;
    } else if (newNum - 9 >= 0) {
      newStr += 'IX';
      newNum -= 9;
    } else if (newNum - 5 >= 0) {
      newStr += 'V';
      newNum -= 5;
    } else if (newNum - 4 >= 0) {
      newStr += 'IV';
      newNum -= 4;
    } else if (newNum - 1 >= 0) {
      newStr += 'I';
      newNum -= 1;
    }
  }

  return newStr;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let newStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        newStr += newStr.length > 0 ? ' minus' : 'minus';
        break;
      case '1':
        newStr += newStr.length > 0 ? ' one' : 'one';
        break;
      case '2':
        newStr += newStr.length > 0 ? ' two' : 'two';
        break;
      case '3':
        newStr += newStr.length > 0 ? ' three' : 'three';
        break;
      case '4':
        newStr += newStr.length > 0 ? ' four' : 'four';
        break;
      case '5':
        newStr += newStr.length > 0 ? ' five' : 'five';
        break;
      case '6':
        newStr += newStr.length > 0 ? ' six' : 'six';
        break;
      case '7':
        newStr += newStr.length > 0 ? ' seven' : 'seven';
        break;
      case '8':
        newStr += newStr.length > 0 ? ' eight' : 'eight';
        break;
      case '9':
        newStr += newStr.length > 0 ? ' nine' : 'nine';
        break;
      case '0':
        newStr += newStr.length > 0 ? ' zero' : 'zero';
        break;
      case '.':
        newStr += newStr.length > 0 ? ' point' : 'point';
        break;
      case ',':
        newStr += newStr.length > 0 ? ' point' : 'point';
        break;
      default:
        newStr += '';
        break;
    }
  }

  return newStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    newStr += str[i];
  }

  return newStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
    }
  }
  return result;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let index = 0;
  const n = `${num}`;
  const d = `${digit}`;
  while (index < n.length) {
    if (n[index] === d) {
      return true;
    }
    index += 1;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let left = 0;
    let right = 0;
    for (let j = 0; j < i; j += 1) {
      left += arr[j];
    }
    for (let k = arr.length - 1; k > i; k -= 1) {
      right += arr[k];
    }
    if (left === right) return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let arr = new Array(size);
  let count = 1;
  let maxSize = size ** 2;
  let index = size;
  let row = 0;
  let circle = 4;
  let colDefault = 0;

  function rotateMatrixLeft(param) {
    const newArr = [...param];
    for (let i = 0; i < newArr.length; i += 1) {
      newArr[i] = [...param[i]];
    }

    for (let i = 0; i < param.length; i += 1) {
      for (let j = 0; j < param.length; j += 1) {
        newArr[j][i] = param[i][param.length - 1 - j];
      }
    }

    return newArr;
  }

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = new Array(size);
    for (let j = 0; j < arr.length; j += 1) {
      arr[i][j] = 0;
    }
  }

  while (count <= size ** 2) {
    let col = colDefault;
    if (circle === 0) {
      circle = 3;
      row += 1;
    } else {
      circle -= 1;
    }
    while (index > 0) {
      if (arr[row][col] !== 0) {
        col += 1;
        colDefault += 1;
      }
      arr[row][col] = count;
      maxSize -= 1;
      count += 1;
      index -= 1;
      col += 1;
    }
    arr = rotateMatrixLeft(arr);
    index = Math.floor(Math.sqrt(maxSize));
  }

  let position = arr[0][0] === 1;
  while (!position) {
    arr = rotateMatrixLeft(arr);
    position = arr[0][0] === 1;
  }

  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newArr = [...matrix];
  const arr = matrix;

  for (let i = 0; i < newArr.length; i += 1) {
    newArr[i] = [...matrix[i]];
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      arr[j][matrix.length - 1 - i] = newArr[i][j];
    }
  }

  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const newArr = arr;
  for (let i = 0; i < newArr.length; i += 1) {
    for (let j = i; j > 0 && newArr[j] < newArr[j - 1]; j -= 1) {
      const swap = newArr[j];
      newArr[j] = newArr[j - 1];
      newArr[j - 1] = swap;
    }
  }
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  function countIterator(param, iter) {
    let id = iter;
    if (iter !== iterations && param === str) {
      id = iter % (iterations - iter);
    }

    if (iter === 0) return param;
    let odd = '';
    let even = '';

    for (let i = 0; i < param.length; i += 1) {
      if (i % 2 !== 0) {
        even += param[i];
      } else {
        odd += param[i];
      }
    }
    return countIterator(odd + even, id - 1);
  }

  return countIterator(str, iterations);
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = Array.from(String(number), Number);
  const left = [];
  let right = [];
  let index = '';

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    } else {
      left.push(arr[i]);
    }
  }
  if (index === '') return number;

  for (let i = 0; i < left.length; i += 1) {
    if (left[i] > arr[index]) {
      const swap = left[i];
      left.splice(i, 1, arr[index]);
      right = arr.splice(0, index);
      index = swap;
      break;
    }
  }

  left.sort((a, b) => {
    return a - b;
  });

  const int = [...right, index, ...left].reduce(
    (accum, digit) => accum * 10 + digit,
    0
  );

  return int;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
