const Node = require("./node");
const { clone } = require("../../utils/main");
/**
 * Time Complexity:
 * - Access: O(n)
 * - Search: O(n)
 * - Insert: O(1)
 * - Delete: O(1)
 *
 * @chungquantin
 */
class SinglyLinkedList {
	/**
	 * @constructor
	 */
	constructor() {
		this.head = null;
	}
	/**
	 * @returns {SinglyLinkedList}
	 */
	push(value) {
		if (!this.head) {
			this.setHead(value);
		} else {
			let currentNode = this.head;
			while (true) {
				if (!currentNode.next) {
					currentNode.setNext(new Node(value));
					return this;
				}
				currentNode = currentNode.next;
			}
		}
	}
	/**
	 * @returns {SinglyLinkedList}
	 */
	pop() {
		let currentNode = this.head;
		while (true) {
			if (!currentNode) return;
			if (currentNode.next?.next) {
				currentNode = currentNode.next;
			} else {
				currentNode.next = null;
				return this;
			}
		}
	}
	/**
	 * @returns {SinglyLinkedList}
	 */
	shift() {
		if (!this.head) return;
		this.head = this.head.next;
		return this;
	}
	/** Search method for Singly Linked List
	 * @param {Number} searchedValue
	 * @returns {Boolean}
	 */
	contains(searchedValue) {
		let currentNode = this.head;
		while (true) {
			if (!currentNode) return false;
			if (currentNode.value == searchedValue) {
				return true;
			}
			currentNode = currentNode.next;
		}
	}
	/**
	 * @returns {SinglyLinkedList}
	 */
	reverse() {
		let currentNode = this.head;
		let reversedList = new SinglyLinkedList();
		let tempList = clone(this);
		while (tempList.getLength() > 1) {
			if (!currentNode) return reversedList;
			if (!currentNode.next) {
				reversedList.push(currentNode.value);
				tempList.pop();
				currentNode = tempList.head;
			} else {
				currentNode = currentNode.next;
			}
		}
		reversedList.push(tempList.head.value);
		return reversedList;
	}
	/**
	 * @returns {SinglyLinkedList}
	 */
	merge(sll) {
		let mergedList = clone(this);
		let currentNode = mergedList.head;
		while (true) {
			if (!currentNode) {
				mergedList.setHead(sll.head);
				return mergedList;
			}
			if (!currentNode.next) {
				currentNode.next = sll.head;
				return mergedList;
			}
			currentNode = currentNode.next;
		}
	}
	/**
	 * @returns {Number}
	 */
	max() {
		let currentNode = this.head;
		if (!currentNode) return;
		let __max = currentNode.value;
		while (true) {
			if (!currentNode.next) {
				return __max;
			}
			if (currentNode.next.value > __max) {
				__max = currentNode.next.value;
			}
			currentNode = currentNode.next;
		}
	}
	/**
	 * @returns {Number}
	 */
	min() {
		let currentNode = this.head;
		if (!currentNode) return;
		let __min = currentNode.value;
		while (true) {
			if (!currentNode.next) {
				return __min;
			}
			if (currentNode.next.value < __min) {
				__min = currentNode.next.value;
			}
			currentNode = currentNode.next;
		}
	}
	traversal() {
		let currentNode = this.head;
		let index = 0;
		while (true) {
			if (!currentNode) return;
			console.log(`Node ${index}:`, currentNode);
			currentNode = currentNode.next;
			index++;
		}
	}
	setHead(value) {
		this.head = new Node(value);
	}
	/**
	 * @returns {Number}
	 */
	getLength() {
		let currentNode = this.head;
		if (!this.head) return 0;
		let length = 1;
		while (true) {
			if (!currentNode.next) {
				return length;
			}
			length++;
			currentNode = currentNode.next;
		}
	}
	unshift(value) {
		this.insert(0, value);
		return this;
	}
	delete(index) {
		if (index == 0) {
			this.shift();
		}
		let tempList = new SinglyLinkedList();
		let currentNode = this.index(index);
		let rootList = clone(this);
		tempList.head = currentNode;
		for (let i = index; i < this.getLength(); i++) {
			rootList.pop();
		}
		return Object.assign(this, rootList.merge(tempList));
	}
	/**
	 * @param {Number} index
	 * @param {Number} value
	 */
	insert(index, value) {
		if (index == 0) {
			let newLinkedList = new SinglyLinkedList();
			newLinkedList.push(value);
			return Object.assign(this, newLinkedList.merge(this));
		}
		let tempList = new SinglyLinkedList();
		let currentNode = this.index(index);
		let rootList = clone(this);
		tempList.head = new Node(value).setNext(currentNode);
		for (let i = index; i < this.getLength(); i++) {
			rootList.pop();
		}
		return Object.assign(this, rootList.merge(tempList));
	}
	/** Indexing of Singly Linked List
	 * @param {Number} i - index
	 * @returns {Node}
	 */
	index(index) {
		let currentNode = this.head;
		let currentIndex = 0;
		while (true) {
			if (!currentNode) return NaN;
			if (currentIndex == index) {
				return currentNode;
			}
			currentIndex++;
			currentNode = currentNode.next;
		}
	}
}

module.exports = SinglyLinkedList;
