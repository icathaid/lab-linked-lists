[![Build Status](https://www.travis-ci.com/icathaid/lab-linked-lists.svg?branch=master)](https://www.travis-ci.com/icathaid/lab-linked-lists)

# Linked List Lab

Rather than convert a working codebase, I implemented two separate classes for Singly and Doubly linked lists.

##  Class List

The following methods are available to this class:

- append(val)
    - this takes a value and adds a new node to the end of the linked list with that value
      I had difficulty checking for invalid inputs (NaN, undefined) so I started the append and prepend methods by assigning the input to a variable and dividing it by 0, then returning a mocked error if that variable is undefined.
      `
      let verify = val/0;
      if(!verify){
      return 'Error: Input must be a number';
    }
      `
- prepend(val)
    - this takes a value and replaces the head node of the linked list with a new node of that value, moving each existing node one position down the line.
- remove(offset)
  - this takes a value and removes the node that many nodes from the head, reconnecting the two severed list halves.
- serialize()
  - this outputs the structure of the linked list to an array with an in-order traversal (which is a simple iterative loop since singly linked lists have only one branch)
- deserialize(array)
  - this rebuilds the linked list from an array

##  Class DoubleList

All of the same methods are available to this class, and have the same names, but add a prev pointer that points to the node before it.


##  Build Instructions

dependencies can be installed with `npm i`.  The lab can be started with `node linkedList.js` but in its default state will only export the classes and log out some sample prev pointers.  Tests can be run with `npm test`.  I had to skip the last one because there is something wrong with either my tests or my code and I don't want to change either one until I figure out what it is.  When I declare a new list within the module and log its output, it keeps accurate track of the prev pointers, but when I export the list to the test, the prev pointers are all null.

This works:

`
let testList = new DoubleList;

testList.append(1).append(2).append(3);
console.log('testList.head.value:   ', testList.head.value);
console.log('testList.head.prev:    ', testList.head.prev);
console.log('testList.head.next.value:     ', testList.head.next.value);
console.log('testList.head.next.prev.value:     ', testList.head.next.prev.value);
`


This does not:

`
describe('DLL append module', () => {
  it('should maintain correct prev pointers', () => {
    let testList = new DoubleList;
    testList.append(1).append(2).append(3);
    expect(testList.head.prev).toBe(null);
    expect(testList.head.next.prev.value).toEqual(1);
  });
});
`


#### Resources:

trying to figure out a way to reverse a linked list without making it doubly linked:
https://www.geeksforgeeks.org/reverse-a-linked-list/

had no idea what 'serialize' or 'deserialize' meant:
https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/


## Requirements
[x] implement a Singly Linked List (SLL) data structure
[x] implement `append(value)`
[x]`prepend(value)`
[]  `reverse()`
[x] `remove(offset)` methods to the SLL class
[x]  implement `serialize()` and `deserialize()` methods on the class

[x]  in a comment within each function, note the it's Big-O runtime



[x]  implement a Doubly Linked List (DLL) data structure
[x]  implement `append(value)`
[x]  `prepend(value)`
[]   `reverse()`
[x]  `remove(offset)` methods to the DLL class
[x]  implement `serialize()`
[x]  `deserialize()` methods on the class

[x]   in a comment within each function, note the it's Big-O runtime
