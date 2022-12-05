// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};
  for (const char of str.split(' ').join('')) {
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  return results;
};

const result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1);
assertEqual(result["h"], 4);
assertEqual(result["a"], undefined);
assertEqual(result["b"], undefined);

module.exports = countLetters;