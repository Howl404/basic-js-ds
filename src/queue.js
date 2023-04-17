const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor () {
    this.data = new ListNode();
  }

  getUnderlyingList() {
    return this.data;
  }

  enqueue(value) {
    let l = this.data
    if(l.value === undefined) {
      l.value = value;
      return;
    }

    while(l.next !== null) {
      l = l.next
    }

    l.next = new ListNode(value);
  }

  dequeue() {
    let value = this.data.value
    this.data = this.data.next
    return value;
  }
}

module.exports = {
  Queue
};
