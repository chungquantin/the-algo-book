"use strict";

/** Quick Sort Explanation
 * --------------------------------------------------
 * Time Complexity
 *
 * - Best case: O(n*log(n))
 * - Average: O(n*log(n))
 * - Worst case: O(n^2)
 *
 * Code Explanation
 *
 * - Chose the pivot
 * -- The pivot can be at the middle
 * -- The pivot can be random
 * -- The pivot can be the first element
 * -- The pivot can be the last element
 * - Initialize left, right array (Or partitioning)
 * - Divide the elements to left and right
 * -- Left (element < the pivot)
 * -- Right (element > the pivot)
 * - Concatenate the recursive call of left and right
 * --------------------------------------------------
 * @param {Array} arr -- The root array
 * @returns {Array} The sorted array
 */
var quickSort = function QuickSort(arr) {
  if (arr.length == 0) return [];
  var left = [],
      right = [],
      // Take the pivot as the first element of arr
  pivot = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);else right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
};