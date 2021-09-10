"use strict";

let stroka = '20';
console.log( +stroka + 6 );
// _____________________

let incr = 10,
    decr = 10;

// incr++;
// --decr;

console.log(incr++);
console.log(--decr);
// _____________________

console.log(5%2);
// _____________________

console.log(2*4 == '8');
console.log(2*4 === '8');
console.log(2*4 === 8);
// _____________________

const isChecked = true,
      isClose = false;

console.log(isChecked && isClose);
// _____________________

const isChecked2 = true,
      isClose2 = false;

console.log(isChecked2 || isClose2);
// _____________________

const isChecked3 = false,
      isClose3 = false;

console.log(isChecked3 || !isClose3);
// _____________________

console.log (2 + 2 * 2 === '6'); /* false */
console.log (2 + 2 * 2 === 6);   /* true */
console.log (2 + 2 * 2 == '6');  /* true */
console.log (2 + 2 * 2 != '6');  /* false */
console.log (2 + 2 * 2 !== '6'); /* true */



