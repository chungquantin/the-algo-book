const SLL = require("./singly_linked_list");
const { generateSLL } = require("./utils");

let sll = new SLL();
let mergedSll = new SLL();

generateSLL(sll, 1, 50, 5);
generateSLL(mergedSll, 1, 50, 10);

const layout = (sll) => {
	let output = [];
	output.push({
		"Root length": sll.getLength(),
		"After merge length": sll.merge(mergedSll).getLength(),
		Max: sll.max(),
		Min: sll.min(),
		[`Contains ${sll.max()}`]: sll.contains(sll.max()),
		Length: sll.getLength(),
		[`First Node `]: sll.index(0).value,
		[`Last Node `]: sll.index(sll.getLength() - 1).value,
	});
	console.table(output);
};
// sll.insert(0, 200);

layout(sll);
sll.unshift(200);
let reversedSll = sll.reverse();

layout(reversedSll);
