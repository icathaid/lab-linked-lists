'use strict';

const List = require('../linkedList.js');

describe('SLL append method', () => {
  it('should insert its input value as the last node', () => {
    let dolphins = new List;
    expect(dolphins.head).toBe(null);
    dolphins.append(1);
    expect(dolphins.head.value).toEqual(1);
    dolphins.append(2);
    expect(dolphins.head.next.value).toEqual(2);
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

describe('SLL remove(offset) Method', () => {
  it('should remove the given node in a linked list and return the ammended list', () => {
    let packers = new List;
    packers.append(1).append(2).append(3);
    let actual = packers.remove(2);
    expect(actual.head.value).toEqual(1);
    expect(actual.head.next.value).toEqual(3);
  });
  it('should work on the beginning of a linked list', () => {
    let bills = new List;
    bills.append(1).append(2).append(3);
    let actual = bills.remove(1);
    expect(actual.head.value).toEqual(2);
    expect(actual.head.next.value).toEqual(3); 
  });
  it('should work on the end of a list', () => {
    let vikings = new List;
    vikings.append(1).append(2).append(3);
    let actual = vikings.remove(3);
    expect(actual.head.value).toEqual(1);
    expect(actual.head.next.value).toEqual(2);
  });
});

describe('SLL serialize/deserialize module', () => {
  it('should create an array with the results of an in-order traversal', () => {
    let seahawks = new List;
    seahawks.append(1).append(2).append(3);
    expect(seahawks.serialize()).toEqual([1,2,3,null]); 
  });
  it('should generate a new list from a given array', () => {
    let bengals = new List;
    let browns = [1,2,3,null];
    let actual = bengals.deserialize(browns);
    expect(actual.head.value).toEqual(1);
    expect(actual.head.next.value).toEqual(2);
    expect(actual.head.next.next.value).toEqual(3);
    expect(actual.head.next.next.next).toBe(null);
  });
});