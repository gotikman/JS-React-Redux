"use strict";

let num = 20;

function showFirstMessage (text) {
    console.log(text);
    console.log(num);
}

showFirstMessage ('Йоу');
console.log(num);
// _____________________

// function calc( a, b ) {
//     return( a + b );
// }

// console.log(calc( 4 , 3 ));
// console.log(calc( 55 , 44 ));
// console.log(calc( 22 , 55 ));


function ret() {
        let num = 9999;

        // ! код, може бути певна логіка

        return num;      /* повертає значення лок змінної на вверх */
        
}

const anotherNum = ret();
console.log(anotherNum);
// _____________________

const logger = function(){
    console.log('Hello');
};

logger();

const calc = (a, b) => a + b;
console.log(calc(2, 3));

//! Стрілкові функції

const double1 = (a) => {
    return a * 2;
};
const double2 = (a) => a * 2; 
const double3 = (a, b) => a * b;
const double4 = a => a * 2;

console.log(double1(5));
console.log(double2(10));
console.log(double3(10, 5));
console.log(double4(20));
