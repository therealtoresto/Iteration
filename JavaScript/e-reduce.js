'use strict';

let count = 0;
const arr = [7, 10, 1, 5, 2];
const sum = (acc, val) => (count++, acc + val);
const res = arr.reduce(sum); // second arg in reduce is start val
console.log({ res, count });