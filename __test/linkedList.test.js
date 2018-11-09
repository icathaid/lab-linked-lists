'use strict';

const List = require('../linkedList.js');

describe('SLL append method', () => {
  it('should insert its input value as the first node, moving the rest down the list', () => {
    let dolphins = new List;
    expect(dolphins.head).toBe(null);
    dolphins.append(1);
    console.log(dolphins);
    expect(dolphins.head.value).toEqual(1);
    dolphins.append(2);
    expect(dolphins.head.next.value).toEqual(2);
    console.log(dolphins);
  });
  it('should return a mocked error if given an invalid input', () => {
    let cowboys = new List;
    let expected = cowboys.append('string');
    expect(expected).toEqual('Error:  Input must be a number');
  });
  it('should be chainable', () => {
    let saints = new List;
    saints.append(1).append(2).append(3);
    expect(saints.head.value).toEqual(1);
    expect(saints.head.next.value).toEqual(2);
    expect(saints.head.next.next.value).toEqual(3);
  });
});