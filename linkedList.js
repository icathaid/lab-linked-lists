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
  insertBefore(val, newVal){
    let current = this.head;
    while(current.next && current.value != val){
      current = current.next;
    }
    let holdThis = current.next;
    let node = new Node(newVal);
    current.next = node;
    current.next.next = holdThis;
  }
  kthFromEnd(k){
    if(!this.head){
      return 'error';
    }
    let ctr = 0;
    let current = this.head;
    while(current.next){
      current = current.next;
      ctr++;
    }
    if(k > ctr){
      return 'error';
    }
    current = this.head;
    for(let i = 0; i < (ctr - k); i++){
      current = current.next;
    }
    return current.value;
  }
}



// module.exports = List;


const bill = new List;

bill.append(1).append(3).append(8).append(2);
console.log(bill);

// console.log('2 from end should be 3', bill.kthFromEnd(2));
// console.log('1 from end should be 8', bill.kthFromEnd(1));
// console.log('0 from end should return 2', bill.kthFromEnd(0));

console.log('too large an input should return -1', bill.kthFromEnd(8));
