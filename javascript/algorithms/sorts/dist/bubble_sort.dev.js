"use strict";

require("../utils/array_utils/swap");
/** Bubble Sort Explanation
 *---------------------------------------------------------------------------------
 * Time Complexity
 *
 * - Best case: O(n)
 * - Worst case: O(n^2)
 * - Average: O(n^2)
 *
 * Space Complexity
 *
 * - O(1)
 *
 * Code Explanation
 *
 * - Wrap the array with two for loop
 * - Bring the smallest element index j swapped with start element i of that stage
 * -------------------------------------------------------------------------------
 * @param {Array} arr - The root
 * @returns {Array} The sorted array
 *
 * Author: @chungquantin
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