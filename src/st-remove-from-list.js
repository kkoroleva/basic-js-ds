const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  if (l.value != null) {
    let prev = l;
    let curr = l.next;
    if (l.value === k) {
      l = curr;
      prev = curr;
      curr = curr.next;
    }
    while (curr != null) {
      if (curr.value === k) {
        prev.next = curr.next;
        curr = curr.next;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
    return l;
  } else return undefined;
}