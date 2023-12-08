/**
 * @param {number[]} digits
 * @returns {number}
 */
const calculateSum = (digits) => {
  return digits.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const UPC_DIGITS_LENGTH = 12;

/**
 * @param {string} upcCode
 * @returns {boolean}
 */
const checkIfValidUPC = (upcCode) => {
  const upcDigits = upcCode.replaceAll(" ", "");

  if (!upcDigits || upcDigits.length !== UPC_DIGITS_LENGTH) return false;

  const upcDigitsArray = [...upcDigits];
  const upcCheckDigit = parseInt(upcDigitsArray.pop());

  const oddPositionDigits = [];
  const evenPositionDigits = [];

  upcDigitsArray.forEach((digit, index) => {
    if (index % 2 === 0) {
      // Since index start from zero, if a number is divisible by two, it will be at an odd position.
      oddPositionDigits.push(parseInt(digit));
    } else {
      evenPositionDigits.push(parseInt(digit));
    }
  });

  const totalSum =
    calculateSum(oddPositionDigits) * 3 + calculateSum(evenPositionDigits);
  const remainder = totalSum % 10;
  const calculatedCheckDigit = remainder === 0 ? 0 : 10 - remainder;

  return upcCheckDigit === calculatedCheckDigit;
};
