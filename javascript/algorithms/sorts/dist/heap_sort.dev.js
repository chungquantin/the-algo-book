"use strict";

/**
 * @param {Array} arr
 * @param {*} n
 */
var heapify = function Heapify(arr, n) {
  var min = n;
  var l = 2 * n + 1; //Left child node

  var r = 2 * n + 2; //Right child node

  if (arr[l] < arr[min] && l < n) {
    min = l;
  }

  if (arr[r] < arr[min] && r < n) {
    min = r;
  }

  if (min != n) {
    arr.swap(n, min);
    heapify(arr, min);
  }
};
/** Function to build a max-heap from an array
 * @param {Array} arr - The root array
 */


var buildHeap = function BuildHeap(arr) {
  var n = arr.length / arr[0];

  for (var i = n; i >= 0; i--) {
    heapify(arr, n);
  }

  return arr;
}; //Main


(function (arr) {
  console.log(buildHeap(arr));
})([8, 7, 1, 9, 2, 5]);