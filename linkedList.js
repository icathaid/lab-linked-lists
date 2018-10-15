'use strict';

const Node = require('./node.js');

class List {

  constructor() {
    this.head = null;
  }

  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;

  }
}

// module.exports = List;

const bill = new List;
bill.append(4);

console.log(bill);
bill.append(3);
console.log(bill);
bill.append(2);
console.log(bill);