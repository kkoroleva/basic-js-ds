const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
  constructor (dataArr = []) {
    this.data = dataArr;
  }
  push(value) {
    this.data.push(value);
  }

  pop() {
    if (this.data != [])
    {
      const top = this.data[this.data.length-1];
      this.data.pop();
      return top;
    }
    else return undefined;
  }

  peek() {
    return this.data[this.data.length-1];
  }
}
