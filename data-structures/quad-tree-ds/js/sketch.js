let map = {
	width: 400,
	height: 400,
};
let quadTree;
let range;
let particles = [];

function setup() {
	createCanvas(map.width, map.height);

	for (let i = 0; i < 10; i++) {
		particles[i] = new Particle(random(map.width), random(height));
	}
}

function draw() {
	background(0);

	const boundary = new Rectangle(
		map.width / 2,
		map.width / 2,
		map.width / 2,
		map.width / 2
	);
	const capacity = 4;
	quadTree = new QuadTree(boundary, capacity);

	for (let p of particles) {
		let point = new Point(p.x, p.y, p);
		quadTree.insert(point);
		p.move();
		p.render();
		p.setHighlight(false);
	}
	for (let p of particles) {
		let range = new Circle(p.x, p.y, p.r * 2);
		let points = quadTree.query(range);
		for (let point of points) {
			let other = point.userData;
			if (p !== other && p.intersect(other)) {
				p.setHighlight(true);
			}
		}
	}
}

function rangeDraw(x, y, w, h) {
	let points = [];
	range = new Rectangle(x, y, w, h);
	quadTree.query(range, points);

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
