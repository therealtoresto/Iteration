'use strict';

const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'value2';
numbers[-10] = 'value3';
numbers.field1 = 'value1';
numbers[5] = 20;

for (const i in numbers) {
    const value = numbers[i];
    console.log(i, typeof i, value);
}