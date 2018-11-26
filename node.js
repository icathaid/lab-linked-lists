'use strict';


class Node {
  constructor(value){
    this.value = value;
    // if(!value){this.value = null;}    
    this.next = null;
    this.prev = null;
  }
}

module.exports = Node;