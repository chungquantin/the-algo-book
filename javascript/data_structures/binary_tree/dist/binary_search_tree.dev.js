"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(value) {
  _classCallCheck(this, Node);

  this.value = value;
  this.left = null;
  this.right = null;
};
/** Data Structure: Binary Search Tree
 *
 * - Initialization: Root of tree
 * - Insert: Add new node to the tree
 * - Search: Search the node of the tree
 *
 * Author: @chungquantin
 */


var BinarySearchTree =
/*#__PURE__*/
function () {
  function BinarySearchTree() {
    _classCallCheck(this, BinarySearchTree);

    this.root = null;
  }
  /** Insert method for BST
   *
   * Time complexity: O(log(n))
   * @param {Integer} value
   * @returns {BinarySearchTree} Binary Search Tree
   *
   * Author: @chungquantin
   */


  _createClass(BinarySearchTree, [{
    key: "insert",
    value: function insert(value) {
      // Initialize the new node
      var node = new Node(value); // Check if there's a root

      if (this.root) {
        // The current node is the tree root
        var current = this.root;

        while (true) {
          // If the value is duplicate, return undefined
          if (value === current.value) return undefined; // If the current node value is greater than the inserted value, go left

          if (current.value > value) {
            // Left node
            if (current.left === null) {
              // If there's not any node, set the new node as the left node
              current.left = node;
              return this;
            } else {
              // Set the current node as the left node if there's a left node
              current = current.left;
            }
          } else {
            // Right node
            if (current.right === null) {
              // If there's not any node, set the new node as the right node
              current.right = node;
              return this;
            } else {
              // Set the current node as the right node if there's a right node
              current = current.right;
            }
          }
        }
      } else {
        // If there's not any root, set the new node as root
        this.root = node;
        return this;
      }
    }
    /** Search method for BST
     *
     * Time complexity: O(log(n))
     * @param {Integer} value
     * @returns {Node} Found node or undefined
     *
     * Author: @chungquantin
     */

  }, {
    key: "search",
    value: function search(value) {
      if (this.root === null) return;
      var current = this.root;

      while (true) {
        if (current.value === value) {
          return current;
        } else {
          if (value < current.value) {
            // Left
            current = current.left;
          } else {
            // Right
            current = current.right;
          }
        }
      }
    }
  }]);

  return BinarySearchTree;
}();

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(1);
bst.insert(2);
bst.search(5);
console.log(bst.search(2));