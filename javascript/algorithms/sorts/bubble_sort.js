require("../../utils/array_utils/swap");
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
const bubbleSort = function BubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] >= arr[j]) {
				arr.swap(arr, i, j);
			}
		}
	}
	return arr;
};

module.exports = { bubbleSort };
