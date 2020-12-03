class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	show() {
		stroke("red");
		strokeWeight(3);
		point(this.x, this.y);
		strokeWeight(1);
	}
}

class Rectangle {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	/**
	 * Check wether the boundary contains the point
	 * @param {Point} point
	 */
	contains(point) {
		return (
			point.x >= this.x - this.w &&
			point.x <= this.x + this.w &&
			point.y >= this.y - this.h &&
			point.y <= this.y + this.h
		);
	}
}

class QuadTree {
	/**
	 * @param {Rectangle} boundary
	 * @param {*} cap
	 */
	constructor(boundary, cap) {
		this.boundary = boundary;
		this.capacity = cap;
		this.points = [];
		this.divided = false;
	}
	subdivide() {
		let { x, y, w, h } = this.boundary;
		/**
		 * Create the four quarter quad tree inside the big one
		 * * * * * * *  The representatives of four quarter parts
		 *  NW *  NE *
		 * * * * * * *
		 *  SW *  SE *
		 * * * * * * *
		 */
		let ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2);
		this.northeast = new QuadTree(ne, this.capacity);
		let nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2);
		this.northwest = new QuadTree(nw, this.capacity);
		let se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2);
		this.southeast = new QuadTree(se, this.capacity);
		let sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2);
		this.southwest = new QuadTree(sw, this.capacity);
		this.divided = true;
	}
	/**
	 * @param {Point} point
	 */
	insert(point) {
		point.show();
		if (!this.boundary.contains(point)) return;
		if (this.points.length <= this.capacity) {
			this.points.push(point);
		} else {
			if (!this.divided) {
				this.subdivide();
			}
			this.northeast.insert(point);
			this.northwest.insert(point);
			this.southeast.insert(point);
			this.southwest.insert(point);
		}
	}
	/**
	 * This part is only for p5.js
	 */
	show() {
		let { x, y, w, h } = this.boundary;
		stroke(255);
		noFill();
		rectMode(CENTER);
		rect(x, y, w * 2, h * 2);
		if (this.divided) {
			this.northeast.show();
			this.northwest.show();
			this.southeast.show();
			this.southwest.show();
		}
		this.points.forEach((point) => point.show());
	}
}
