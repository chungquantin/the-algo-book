global.stage = 0;

let array = [9, 12, 2, 3, 5, 2, 5, 6, 4, 3, 7, 10, 1, 12, 8, 11];
/**
 * @param {Array} array
 */
function quickSort(array) {
	if (array.length == 0) return [];
	let left = [],
		right = [],
		// Take the pivot as the first element of array
		pivot = array[0];

	for (let i = 1; i < array.length; i++) {
		if (array[i] < pivot) left.push(array[i]);
		else right.push(array[i]);
	}
	console.log(`stage ${stage}:`, left, pivot, right);
	++stage;
	return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(array.slice()));
