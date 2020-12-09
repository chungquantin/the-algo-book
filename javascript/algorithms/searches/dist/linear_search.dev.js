"use strict";

/** Linear Search
 *
 * @param {Array} arr - The searched array
 * @param {Number} x - The searched element
 */
var linearSearch = function LinearSearch(x, arr) {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    if (arr[i] == x) {
      return x;
    }
  }
};