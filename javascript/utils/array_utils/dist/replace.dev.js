"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/** Replace a part array
 * @param {Array} arr - The root Array
 * @param {Number} start - Start Index
 * @param {Number} deleteCount - End Index
 * @param {Array} replacedArr - The sub array
 */
Array.prototype.replace = function Replace(arr, start, deleteCount, subArr) {
  arr.splice.apply(arr, [start, deleteCount].concat(_toConsumableArray(subArr)));
};