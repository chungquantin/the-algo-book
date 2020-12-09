/** Linear Search
 *
 * @param {Array} arr - The searched array
 * @param {Number} x - The searched element
 */
const linearSearch = function LinearSearch(x, arr) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		if (arr[i] == x) {
			return x;
		}
	}
};
