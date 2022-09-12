"use strict";

//? BigInt - не можна викоритовувати з методами зі встроєним обєктом Math (Math.round(),... etc.)
//? BigInt - не можна змішувати в операціях з іншими звичайними числами крім порівнянь

const bigint = 9999999999999999999999999999999999n;
const sameBigInt = BigInt(9999999999999999999999999999999999);

console.log(5n / 2n);    // => '2n'    -> операції ділення закруглюються без дробної частини
console.log(2n == 2);    // => 'true'  -> нестроге порівняння працює як зі звичайним числом
console.log(2n === 2);   // => 'false' -> строге порівняння працює коректно

//! convert
let bigint2 = 1n;
let number = 2;

console.log(bigint2 + BigInt(number))   // => 3n
console.log(Number(bigint2) + number)   // => 3
