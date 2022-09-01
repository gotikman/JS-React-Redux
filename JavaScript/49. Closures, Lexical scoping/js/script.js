"use strict";

// let number = 5; debugger;

// function logNumber() {
//     console.log(number); debugger
// }

// number = 6;

// logNumber(); debugger;

//! Замикання -  кожен виклик функції створює нове ликсичене оточення зі своїми змінними та особливостями

function createCounter() { // fn що повертає іншу fn
    let counter = 0;

    const myFunction = function () {
        counter = counter + 1; debugger
        return counter; debugger
    }

    return myFunction;
}

const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3)

// ____________________________________

for (let i = o; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3
    }
    // error томущо num в іншому лексичному оточені
    console.log(num)
}