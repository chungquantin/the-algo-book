/** Merge the two arrays: left and right
 * @param {Array} left - Left half of a root array
 * @param {Array} right - Right half of a root array
 */
function merge(left, right) {
	let resultArray = [],
		leftIndex = 0,
		rightIndex = 0;
	// We will concatenate values into the resultArray in order
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]);
			leftIndex++; // move left array cursor
		} else {
			resultArray.push(right[rightIndex]);
			rightIndex++; // move right array cursor
		}
	}

	// We need to concat here because there will be one element remaining
	// from either left OR the right
	return resultArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
}

/** Merge Sort Explanation
 * ------------------------------------------------------------
 * Description: Divide and Conquer Algorithm
 *
 * - Worst Case Time Complexity [ Big-O ]: O(n*log n)
 * - Best Case Time Complexity [Big-omega]: O(n*log n)
 * - Average Time Complexity [Big-theta]: O(n*log n)
 *
 * Explanation
 * - If r > l
 * - Find the middle point to divide the array into two halves:
 * -- middle m = (l+r)/2
 * - Call mergeSort for first half:
 * -- Call mergeSort(arr, l, m)
 * - Call mergeSort for second half:
 * -- Call mergeSort(arr, m+1, r)
 * - Merge the two halves sorted in step 2 and 3:
 * -- Call merge(arr, l, m, r)
 * ------------------------------------------------------------
 * @param {Array} arr - The root array
 * @returns {Array} The sorted array
 *
 * @chungquantin
 */
const mergeSort = function MergeSort(arr) {
	let len = arr.length;
	// Do not need to sort the array if it only has 1 element
	if (len <= 1) return arr;
	// Calculate the middle
	let m = Math.floor(len / 2);
	// Divide the left half
	let l = arr.slice(0, m);
	// Divide the right half
	let r = arr.slice(m);
	return merge(mergeSort(l), mergeSort(r));
};

module.exports = { mergeSort };
