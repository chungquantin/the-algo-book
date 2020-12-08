require("../utils/array_utils/swap");
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
		min = arr[min_index];
		for (let j = i + 1; j < len; j++) {
			if (arr[j] < min) {
				min = arr[j];
				min_index = j;
			}
		}
		arr.swap(arr, i, min_index);
	}
	return arr;
};
