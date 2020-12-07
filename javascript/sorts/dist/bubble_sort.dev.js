"use strict";

require("../utils/array_utils/swap");
/** Bubble Sort Explanation
 * @param {Array} arr - The root array
 */


var bubbleSort = function BubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] >= arr[j]) {
        arr.swap(arr, i, j);
      }
    }
  }

  return arr;
};

console.log(bubbleSort([2, 3, 1, 5, 2, 7]));