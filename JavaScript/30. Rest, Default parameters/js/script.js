"use strict";

const log = function(a, b, ...rest) {    //назву можна будь-яку замість rest
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

//! параметри по замовчуванню

function calcOrDouble(number, basis = 2) {
    // basis = basis || 2;                   // старий спосіб, "або" затинається на правді
    console.log(number * basis);
}

calcOrDouble(3);