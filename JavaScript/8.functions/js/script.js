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