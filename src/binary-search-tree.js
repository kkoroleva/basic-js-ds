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
      return;
    }

    let prev = null;
    let curr = this._root;
    while (curr != null) {
      if (curr.data === data) {
        return;
      }

      prev = curr;
      curr = curr.data > data ? curr.left : curr.right;
    }

    if (prev.data > data) {
      prev.left = new Node(data);
    } else {
      prev.right = new Node(data);
    }
  }

  has(data) {
    return this.find(data) === null ? false : true;
  }

  find(data) {
    if (this._root !== null) {
      let curr = this._root;

      while (curr !== null) {
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
    if (this.isVoid()) {
      return;
    }

    let node = this.find(data);
    if (node === null) {
      return;
    }

    if (node.left === null && node.right === null) {

    }
  }

  min() {
    if (this.isVoid()) {
      return undefined;
    }

    let curr = this._root;
    while (curr.left != null) {
     curr = curr.left;
    }

    return curr.value;
  }

  max() {
    if (this.isVoid()) {
      return undefined;
    }

    let curr = this._root;
    while (curr.rigth != null) {
      curr = curr.right;
    }

    return curr.value;
  }

}