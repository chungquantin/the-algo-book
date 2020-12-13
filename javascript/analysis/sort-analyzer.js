const SORT = require("../algorithms/sorts");
const { generateArray } = require("../utils/main");
const performance = require("perf_hooks").performance;
require("../utils/array_utils/swap");

const arraySortedOrNot = (arr, n) => {
	if (n == 1 || n == 0) return 1;
	if (arr[n - 1] < arr[n - 2]) return 0;
	return arraySortedOrNot(arr, n - 1);
};

const timer = (func) => {
	return (arr) => {
		let begin = performance.now();
		let rv = func(arr);
		let end = performance.now();
		let isSorted = rv.every((v, i, a) => !i || a[i - 1] <= v);
		console.log(func.name, isSorted, Number((end - begin).toFixed(3)));
	};
};

let arr = generateArray(20, 100, 10);
timer(SORT.bubbleSort)(arr);
timer(SORT.insertionSort)(arr);
timer(SORT.selection_sort)(arr);
timer(SORT.double_selection_sort)(arr);
timer(SORT.mergeSort)(arr);
timer(SORT.quickSort)(arr);
timer(SORT.timSort)(arr);
