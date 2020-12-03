// Time complexity
const o_pow_n_2 = (n) => Math.pow(n, 2);
const o_n_log_n = (n) => 10 * Math.log10(n);

const __main__ = (o1, o2) => (range) => {
	for (let i = 1; i < range; i++) {
		console.log("-----------");
		console.log(o1, o1(i));
		console.log(o2, o2(i));
		console.log("-----------");
	}
};

__main__(o_n_log_n, o_pow_n_2)(1000);
