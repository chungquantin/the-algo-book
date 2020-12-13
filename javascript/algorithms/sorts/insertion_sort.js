require("../../utils/array_utils/swap");
/** Insertion Sort Explanation
 * ----------------------------------------------------------------------------------------
 *
 * Time complexity:
 *
 * - Best case: O(n) - The root array has been sorted
 * - Worst case: O(n^2)
 * - Average: O(n^2)
 *
 * Code Explanation:
 *
 * - Iterate from arr[1] to arr[n] over the array.
 * - Compare the current element (key) to its predecessor.
 * - If the key element is smaller than its predecessor, compare it to the elements before.
 * Move the greater elements one position up to *  make space for the swapped element.
 * ----------------------------------------------------------------------------------------
 * @param {Array} arr - the root array
 * @returns {Array} the sorted array
 *
 * @chungquantin
 */
const insertionSort = function InsertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] > arr[j + 1]) {
				arr.swap(arr, j + 1, j);
			}
		}
	}
	return arr;
};

module.exports = { insertionSort };
