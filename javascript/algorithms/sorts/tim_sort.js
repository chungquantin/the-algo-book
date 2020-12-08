require("../../utils/array_utils/swap");
require("../../utils/array_utils/replace");
const { generateArray } = require("../../utils/main");

const DEFAULT_MIN_MERGE = 4; // Size less than 64 & power of 2

const DEFAULT_MIN_GALLOPING = 7; // Consider

/**
 * @param {Array} left
 * @param {Array} right
 */
const merge = function Merge(left, right) {
	let arr = [];
	let l = 0,
		r = 0;

	while (l < left.length && r < right.length) {
		if (right[r] < left[l]) {
			arr.push(right[r]);
			r++;
		} else {
			arr.push(left[l]);
			l++;
		}
	}
	return arr.concat(left.slice(l), right.slice(r));
};

/**
 * @param {Array} arr
 * @returns {Array}
 */
const insertionSort = function InsertionSort(arr) {
	let len = arr.length;
	for (let i = 1; i < len; i++) {
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j + 1] < arr[j]) {
				arr.swap(arr, j + 1, j);
			}
		}
	}
	return arr;
};

/** Tim Sort - Not complete
 * ------------------
 * Time Complexity:
 *
 * - Best case: O(n*log(n))
 * - Worst case: O(n*log(n))
 *
 * Description:
 * - Tim Sort makes use of Insertion Sort and Merge Sort
 * - If the array has fewer 64 elements init
 * => Tim sort will implement Insertion Sort
 * - If the array has more than 64 elements
 * => The algorithm will make a first pass through the list looking for parts that are strictly increasing or decreasing. If the part is decreasing, it will reverse that part.
 * - Divide the whole operation into runs (32-64 runs)
 *
 * Reference:
 * https://hackernoon.com/timsort-the-fastest-sorting-algorithm-youve-never-heard-of-36b28417f399
 * ------------------
 * @param {Array} arr
 *
 * @chungquantin
 */
const timSort = function TimSort(arr) {
	let len = arr.length;
	let RUN = minRunLength(len);
	for (let x = 0; x < len; x += RUN) {
		arr.replace(arr, x, RUN, insertionSort(arr.slice(x, x + RUN)));
	}
	let RUN_INC = RUN;
	while (RUN_INC < len) {
		for (let x = 0; x < len; x += RUN_INC * 2) {
			arr.replace(
				arr,
				x,
				RUN_INC * 2,
				merge(
					arr.slice(x, x + RUN_INC),
					arr.slice(x + RUN_INC, x + RUN_INC * 2)
				)
			);
		}
		RUN_INC *= 2;
	}

	return arr;
};

function minRunLength(n) {
	let r = 0;
	// If array length is greater than MIN_MERGE
	while (n >= DEFAULT_MIN_MERGE) {
		/**
		 * "AND" the bitwise of n and 1 (001)
		 * "OR" the bitwise of r and (n&1)
		 */
		r |= n & 1;
		/**
		 * Right shift the value of n by 1 = Divide by 2
		 */
		n >>= 1;
	}

	return n + r;
}

let root = generateArray(0, 1000, 1000);

console.log(timSort(root));
