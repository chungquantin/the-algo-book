class Point {
	constructor(x, y, userData) {
		this.x = x;
		this.y = y;
		this.userData = userData;
	}
	show() {
		stroke("red");
		strokeWeight(3);
		point(this.x, this.y);
		strokeWeight(1);
	}
}

// circle class for a circle shaped query
class Circle {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.rSquared = this.r * this.r;
	}

	contains(point) {
		// check if the point is in the circle by checking if the euclidean distance of
		// the point and the center of the circle if smaller or equal to the radius of
		// the circle
		let d = Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2);
		return d <= this.rSquared;
	}

	intersects(range) {
		var xDist = Math.abs(range.x - this.x);
		var yDist = Math.abs(range.y - this.y);

		// radius of the circle
		var r = this.r;

		var w = range.w;
		var h = range.h;

		var edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2);

		// no intersection
		if (xDist > r + w || yDist > r + h) return false;

		// intersection within the circle
		if (xDist <= w || yDist <= h) return true;

		// intersection on the edge of the circle
		return edges <= this.rSquared;
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
	intersect(range) {
		// Check wether two rectangles are overlapping or not
		return !(
			range.x - range.w > this.x + this.w ||
			range.x + range.w < this.x - this.w ||
			range.y - range.h > this.y + this.h ||
			range.x + range.h < this.y - this.h
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
	query(range, found) {
		if (!found) {
			found = [];
		}
		if (!this.boundary.intersect(range)) return;
		for (let p of this.points) {
			if (range.contains(p)) {
				found.push(p);
			}
		}
		if (this.divided) {
			this.northwest.query(range, found);
			this.northeast.query(range, found);
			this.southeast.query(range, found);
			this.southwest.query(range, found);
		}
		return found;
	}
}
