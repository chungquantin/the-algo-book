class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
/** Data Structure: Binary Search Tree
 *
 * - Initialization: Root of tree
 * - Insert: Add new node to the tree
 * - Search: Search the node of the tree
 *
 * Author: @chungquantin
 */
class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		// Initialize the new node
		let node = new Node(value);
		// Check if there's a root
		if (this.root) {
			// The current node is the tree root
			let current = this.root;
			while (true) {
				// If the value is duplicate, return undefined
				if (value === current.value) return undefined;
				// If the current node value is greater than the inserted value, go left
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
	search(value) {
		if (this.root === null) return;
		let current = this.root;
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
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(1);
bst.insert(2);
bst.search(5);
console.log(bst.search(2));
