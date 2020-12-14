function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

/**
 * @param {Number} min - Min value of element
 * @param {Number} max - Max value of element
 * @param {Number} n - Number of element
 */
function generateArray(min, max, n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		arr.push(getRandomArbitrary(min, max));
	}
	return arr;
}

/**
 * @function
 * @description Deep clone a class instance.
 * @param {object} instance The class instance you want to clone.
 * @returns {object} A new cloned instance.
 */
function clone(instance) {
	return Object.assign(
		Object.create(
			// Set the prototype of the new object to the prototype of the instance.
			// Used to allow new object behave like class instance.
			Object.getPrototypeOf(instance)
		),
		// Prevent shallow copies of nested structures like arrays, etc
		JSON.parse(JSON.stringify(instance))
	);
}

module.exports = { getRandomArbitrary, generateArray, clone };
