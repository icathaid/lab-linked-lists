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
  prepend(val){
    let holdThis = this.head;
    let node = new Node(val);
    this.head = node;
    this.head.next = holdThis;
  }
}

module.exports = List;
