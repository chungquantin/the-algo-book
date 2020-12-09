"use strict";

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
/**
 * @param {Number} min - Min value of element
 * @param {Number} max - Max value of element
 * @param {Number} n - Number of element
 */


function generateArray(min, max, n) {
  var arr = [];

  for (var i = 0; i < n; i++) {
    arr.push(getRandomArbitrary(min, max));
  }

  return arr;
}

module.exports = {
  getRandomArbitrary: getRandomArbitrary,
  generateArray: generateArray
};