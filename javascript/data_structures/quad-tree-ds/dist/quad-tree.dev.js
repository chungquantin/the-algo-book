"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point =
/*#__PURE__*/
function () {
  function Point(x, y, userData) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
    this.userData = userData;
  }

  _createClass(Point, [{
    key: "show",
    value: function show() {
      stroke("red");
      strokeWeight(3);
      point(this.x, this.y);
      strokeWeight(1);
    }
  }]);

  return Point;
}(); // circle class for a circle shaped query


var Circle =
/*#__PURE__*/
function () {
  function Circle(x, y, r) {
    _classCallCheck(this, Circle);

    this.x = x;
    this.y = y;
    this.r = r;
    this.rSquared = this.r * this.r;
  }

  _createClass(Circle, [{
    key: "contains",
    value: function contains(point) {
      // check if the point is in the circle by checking if the euclidean distance of
      // the point and the center of the circle if smaller or equal to the radius of
      // the circle
      var d = Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2);
      return d <= this.rSquared;
    }
  }, {
    key: "intersects",
    value: function intersects(range) {
      var xDist = Math.abs(range.x - this.x);
      var yDist = Math.abs(range.y - this.y); // radius of the circle

      var r = this.r;
      var w = range.w;
      var h = range.h;
      var edges = Math.pow(xDist - w, 2) + Math.pow(yDist - h, 2); // no intersection

      if (xDist > r + w || yDist > r + h) return false; // intersection within the circle

      if (xDist <= w || yDist <= h) return true; // intersection on the edge of the circle

      return edges <= this.rSquared;
    }
  }]);

  return Circle;
}();

var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle(x, y, w, h) {
    _classCallCheck(this, Rectangle);

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  /**
   * Check wether the boundary contains the point
   * @param {Point} point
   */


  _createClass(Rectangle, [{
    key: "contains",
    value: function contains(point) {
      return point.x >= this.x - this.w && point.x <= this.x + this.w && point.y >= this.y - this.h && point.y <= this.y + this.h;
    }
  }, {
    key: "intersect",
    value: function intersect(range) {
      // Check wether two rectangles are overlapping or not
      return !(range.x - range.w > this.x + this.w || range.x + range.w < this.x - this.w || range.y - range.h > this.y + this.h || range.x + range.h < this.y - this.h);
    }
  }]);

  return Rectangle;
}();
/** Quad Tree Initialization
 *
 * Author: @chungquantin
 */


var QuadTree =
/*#__PURE__*/
function () {
  /**
   * @param {Rectangle} boundary
   * @param {*} cap
   */
  function QuadTree(boundary, cap) {
    _classCallCheck(this, QuadTree);

    this.boundary = boundary;
    this.capacity = cap;
    this.points = [];
    this.divided = false;
  }

  _createClass(QuadTree, [{
    key: "subdivide",
    value: function subdivide() {
      var _this$boundary = this.boundary,
          x = _this$boundary.x,
          y = _this$boundary.y,
          w = _this$boundary.w,
          h = _this$boundary.h;
      /**
       * Create the four quarter quad tree inside the big one
       * * * * * * *  The representatives of four quarter parts
       *  NW *  NE *
       * * * * * * *
       *  SW *  SE *
       * * * * * * *
       */

      var ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2);
      this.northeast = new QuadTree(ne, this.capacity);
      var nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2);
      this.northwest = new QuadTree(nw, this.capacity);
      var se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2);
      this.southeast = new QuadTree(se, this.capacity);
      var sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2);
      this.southwest = new QuadTree(sw, this.capacity);
      this.divided = true;
    }
    /**
     * @param {Point} point
     */

  }, {
    key: "insert",
    value: function insert(point) {
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

  }, {
    key: "show",
    value: function show() {
      var _this$boundary2 = this.boundary,
          x = _this$boundary2.x,
          y = _this$boundary2.y,
          w = _this$boundary2.w,
          h = _this$boundary2.h;
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

      this.points.forEach(function (point) {
        return point.show();
      });
    }
  }, {
    key: "query",
    value: function query(range, found) {
      if (!found) {
        found = [];
      }

      if (!this.boundary.intersect(range)) return;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var p = _step.value;

          if (range.contains(p)) {
            found.push(p);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
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
  }]);

  return QuadTree;
}();