const { getRandomArbitrary } = require("../../utils/main");

const generateSLL = (sll, min, max, num) => {
	for (let i = 0; i < num; i++) {
		sll.push(getRandomArbitrary(min, max));
	}
};

module.exports = { generateSLL };
