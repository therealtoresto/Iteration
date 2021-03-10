'use strict';

const sum = (...args) => {
    let acc = 0;
    let i = 0;
    while (i < args.length) {
        acc += args[i];
        i++;
    }
    return acc;
};

// const sum = (...args) => {
//     let value = 0;
//     while (args.length > 0) {
//       value += args.pop();
//     }
//     return value;
//   };

// Usage

const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7

console.log(a, b, c, d, e);
