/** Replace a part array
 * @param {Array} arr - The root Array
 * @param {Number} start - Start Index
 * @param {Number} deleteCount - End Index
 * @param {Array} replacedArr - The sub array
 */
Array.prototype.replace = function Replace(arr, start, deleteCount, subArr) {
	arr.splice(start, deleteCount, ...subArr);
};
