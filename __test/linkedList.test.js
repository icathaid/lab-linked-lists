'use strict';

const List = require('../linkedList.js');

describe('SLL append method', () => {
  it('should insert its input value as the last node', () => {
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

describe('SLL prepend method', () => {
  it('should insert its input value at the first node', () => {
    let falcons = new List;
    expect(falcons.head).toBe(null);
    falcons.prepend(9);
    expect(falcons.head.value).toEqual(9);
  });
  it('should continue moving the other nodes down the list', () => {
    let rams = new List;
    rams.prepend(9);
    expect(rams.head.value).toEqual(9);
    rams.prepend(8);
    expect(rams.head.value).toEqual(8);
    expect(rams.head.next.value).toEqual(9);
  });
  it('should be chainable', () => {
    let raiders = new List;
    raiders.prepend(5).prepend(6).prepend(7);
    expect(raiders.head.value).toEqual(7);
    expect(raiders.head.next.value).toEqual(6);
    expect(raiders.head.next.next.value).toEqual(5);
  });
});