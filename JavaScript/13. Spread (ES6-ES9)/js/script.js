"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copyObj = obj; // ! Посилання на первинний обєкт

copyObj.a = 10;

console.log(copyObj);
console.log(obj);

// ! Створюєм цикл перебору обєкта для створення копії

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];   
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;   // змінна ключа 2-о рівня в поверхневій копії

console.log(newNumbers);
console.log(numbers);

// ! Object.assign(*, *), спосіб копіювання обєктів 

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add )); // склейка, добавить add до numbers
const clone = Object.assign({}, add );     // створює новий обєкт, клонуючи інший

const test = Object.assign(numbers, add);
console.log(test);

clone.d = 20;

console.log(add);
console.log(clone);

