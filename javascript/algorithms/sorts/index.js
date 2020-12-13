const { bubbleSort } = require("./bubble_sort");
const { insertionSort } = require("./insertion_sort");
const { timSort } = require("./tim_sort");
const { mergeSort } = require("./merge_sort");
const { quickSort } = require("./quick_sort");
const { double_selection_sort, selection_sort } = require("./selection_sort");

module.exports = {
	bubbleSort,
	insertionSort,
	timSort,
	mergeSort,
	quickSort,
	double_selection_sort,
	selection_sort,
};
