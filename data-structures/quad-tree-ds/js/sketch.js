let map = {
	width: 400,
	height: 400,
};
let quadTree;

function setup() {
	createCanvas(map.width, map.height);

	const boundary = new Rectangle(
		map.width / 2,
		map.width / 2,
		map.width / 2,
		map.width / 2
	);
	const capacity = 4;
	quadTree = new QuadTree(boundary, capacity);
	console.log(quadTree);
}

function draw() {
	background(0);
	// setInterval(() => {
	// 	let p = new Point(random(map.width), random(map.height));
	// 	quadTree.insert(p);
	// }, 1000);
	quadTree.show();

	stroke(0, 255, 0);
	rectMode(CENTER);
	rect(300, 300, 107, 92);
}
