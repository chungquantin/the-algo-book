require("../../utils/array_utils/swap");
/** Selection Sort Explanation
 * ---------------------------------------------------------
 * Description:
 *
 * - Time complexity: O( n^2 )
 *
 * Explanation
 *
 * - Initialize start_index = 0
 * - Loop through the array to retrieve the smallest element
 * - Swap the smallest element with the first element
 * - start_index++
 * ---------------------------------------------------------
 * @param {Array} arr - The array is sorted
 * @returns {Array} The sorted array
 *
 * @chungquantin
 */
const selection_sort = function SelectionSort(arr) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		min_index = i;
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[min_index]) {
				min_index = j;
			}
		}
		arr.swap(arr, i, min_index);
	}
	return arr;
};

const double_selection_sort = function DoubleSelectionSort(arr) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		let min_index = i;
		let max_index = len - 1 - i;
		for (let j = i + 1; j < len - i; j++) {
			if (arr[min_index] > arr[j]) {
				min_index = j;
			}
			if (arr[max_index] < arr[j]) {
				max_index = j;
			}
		}
		arr.swap(arr, i, min_index);
		arr.swap(arr, len - 1 - i, max_index);
	}
	return arr;
};

module.exports = {
	selection_sort,
	double_selection_sort,
};
