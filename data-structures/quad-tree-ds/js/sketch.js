let map = {
	width: 400,
	height: 400,
};
let quadTree;
let range;

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

	for (let i = 0; i < 100; i++) {
		let p = new Point(random(map.width), random(map.height));
		quadTree.insert(p);
	}
	let points = [];
	range = new Rectangle(250, 250, 107, 92);
	quadTree.query(range, points);

	console.log(points);

	background(0);
	quadTree.show();

	stroke(0, 255, 0);
	rectMode(CENTER);
	rect(range.x, range.y, range.w * 2, range.h * 2);

	for (let p of points) {
		strokeWeight(4);
		stroke(0, 255, 0);
		point(p.x, p.y);
	}
}

function draw() {}
