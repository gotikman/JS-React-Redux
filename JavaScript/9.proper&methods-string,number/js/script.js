'use strict';

const str = "tEst";
const arr = [1, 3, 6];

// console.log(str.length);
// console.log(str[3]);


console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

// _____________________
let fruit = "Some fruits";

console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('x'));
// _____________________

const logg = 'Hello world!';

console.log(logg.slice(6, 11));
console.log(logg.slice(-5, -1));
console.log(logg.slice(6));

console.log(logg.substring(6, 11));
console.log(logg.substring(1));

console.log(logg.substr(6, 6));
// _____________________

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));