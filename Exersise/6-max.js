'use strict';

const max = arr => {
    const arrNew = arr.reduce((elem, acc) => acc.concat(elem));
    return arrNew.sort().reverse()[0];
};

// Usage
console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
