#  Notes

I couldn't get the !typeof(val)===Number validation to work for the input, so I defined a variable as the input value divided by zero and checked if that variable was undefined.  There are probably some weird edge cases with NaN, null, undefined that will break this but I haven't tested them yet.




![cf](http://i.imgur.com/7v5ASc8.png) Linked List Data Structure
================================================================

## Submission Instructions
* Follow the data structures submission instructions

### Before you begin
* You'll need to initialize the implementation folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files


## Requirements
[x] * implement a Singly Linked List (SLL) data structure
* implement `append(value)`, `prepend(value)`, `reverse()`, and `remove(offset)` methods to the SLL class
* implement `serialize()` and `deserialize()` methods on the class
* in a comment within each function, note the it's Big-O runtime

* implement a Doubly Linked List (DLL) data structure
* implement `append(value)`, `prepend(value)`, `reverse()`, and `remove(offset)` methods to the SLL class
* implement `serialize()` and `deserialize()` methods on the class
* in a comment within each function, note the it's Big-O runtime

#### Testing
  * write at least three test assertions for each method of the Linked List Data Structure
  * organize your tests into appropriate describe/it blocks for test output readability

####  Documentation
  * in your README, write documentation for you data structures
  * your documentation should includes code block useage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests




# Resources:

https://www.geeksforgeeks.org/reverse-a-linked-list/