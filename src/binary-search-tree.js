const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this._root = null;
    this.curr = this._root;
  }
  root() {
    return this._root;
  }

  isVoid() {
    return this._root === null ? true : false;
  }

  add(data) {
    if (this.isVoid()) {
      this._root = new Node(data);
      this.curr = this._root;
    } else {
      let curr = this._root;
      while (curr.next != null) {
        if (curr.data > data) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      }
      if (curr.data > data) {
        curr.left = new Node(data);
      } else curr.right = new Node(data);
    }
  }

  has(data) {
    return this.find(data) === null ? false : true;
  }

  find(data) {
    if (this._root != null) {
      let curr = this._root;

      while (curr != null) {
        if (curr.data === data) {
          return curr;
        } else if (curr.data > data) {
          curr = curr.left;
        } else {
          curr = curr.right;
        }
      }
    }
    return null;
  }

  remove(data) {
    if (!this.isVoid) {
      let el = this.find(data);
      if (el.left === null && el.right === null) {
        
      }
    }
  }

  min() {
    while (this.curr.left != null) {
     this.curr = this.curr.left;
      this.min();
    }
    return this.curr.value;
  }

  max() {

    while (curr.rigth != null) {
      curr = curr.right;
    }
    return curr.value;
  }

}