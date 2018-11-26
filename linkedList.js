'use strict';

const Node = require('./node.js');

class DoubleList {  
  constructor() {
    this.head = null;
  }

  append(val){
    let node = new Node(val);
    let verify = val/0;
    if(!verify){
      return 'Error: Input must be a number';
    }
    if(!this.head){
      this.head = node;
      return this;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
    current.next.prev = current;
    current = current.next;
  }

  prepend(val){
    let holdThis = this.head;
    let node = new Node(val);
    let verify = val/0;
    if(!verify){
      return 'Error: Input must be a number';
    }
    if(!this.head){
      this.head = node;
      return this;
    }
    this.head = node;
    this.head.next = holdThis;
    holdThis.prev = this.head;
    this.head.prev = null;
    return this;
  }
}

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
    return this;
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
    return this;
  }
  remove(val){
    let current = this.head;
    let offset = 1;
    while(offset < val){
      offset +=1;
      current = current.next;
    }
    while(current.next){
      current.value = current.next.value;
      current = current.next;
    }
    return this;
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
  serialize(){
    let results = [];
    let current = this.head;
    while(current.next){
      results.push(current.value);
      current = current.next;
    }
    results.push(current.value);
    results.push(null);
    return results;
  }
  deserialize(arr){
    for(let i = 0; i < arr.length; i++){
      this.append(arr[i]);
    }
    return this;
  }
}










module.exports = List;

let bill = new DoubleList();

bill.prepend(3);

bill.prepend(2);

bill.prepend(1);
// console.log(bill);
console.log(bill.head.next);