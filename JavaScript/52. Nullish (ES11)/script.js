'use strict';

//!  ?? --> null, undefined =>> false  //  0, NaN, "" =>> true

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    // elem.style.height = `${h || 200}px`;  // =>> 200
    // elem.style.width = `${w || 200}px`;
    elem.style.height = `${h ?? 200}px`;     // =>> 0
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

// --------------------------------
let userName = NaN;   // --> undefined
let userKey;

console.log(userName ?? userKey ?? 'User'); // =>> NaN
console.log(userName || userKey || 'User'); // =>> User
