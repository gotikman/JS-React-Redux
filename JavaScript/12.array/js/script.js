"use strict";

const arr = [ 'q', 'a', 2, 13, 'd', 26, 8, 65];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// _________________

// arr.pop();
// console.log(arr);
// arr.push(10);
// console.log(arr);
// _________________


// ! цикли перебору forEach \ не модифікує, а тільки перебирає
// arr.forEach(function(item, i, arr ) {
//     console.log(`${i}: ${item} масиву ${arr}`);
// });

// ! цикли перебору
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// ! цикли перебору for of
// for (let value of arr) {
//     console.log(value);
// }

// ! створюєм масив на основі строк і навпаки
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products);
// console.log(products.join('; '));





