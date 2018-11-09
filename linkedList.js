'use strict';

const Node = require('./node.js');

class List {

  constructor() {
    this.head = null;
  }

  append(val) {
    let node = new Node(val);
    let verify = val/0;
    if(!verify){
      return 'Error:  Input must be a number';
    }
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



module.exports = List;
