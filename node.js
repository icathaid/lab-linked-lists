'use strict';


class Node {
  constructor(value){
    this.value = value;
    // if(!value){this.value = null;}    
    this.next = null;
  }
}

module.exports = Node;