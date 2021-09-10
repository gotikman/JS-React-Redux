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
const test = Object.assign(numbers, add);  // створить новий склеївши 2


clone.d = 20;
test.e = 'Привіт';

console.log(add);
console.log(clone);
console.log(test);

// ! копіювання масивів Slice

const oldArray = ['a', 'b', 'c', 'd', 'e'];
const newArray = oldArray.slice(2,4);

// newArray[1] = 'hello';
console.log(oldArray);
console.log(newArray);

// ! оператор Spread

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet); // виведе всі обєднані значення в даний масив

// ? функція що приймає розгорнуті значення масиву в аргументи
function log(a, b, c, d) {   
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

const num = [2, 5, 7, 8 ];

log(...num);
// __________________________________

// ? копіювання масиву ES6
const array = ['a', 'b', 'c'];
const newArrray = [...array];    // копія

// ? копіювання обєкту ES9
const q = {
    one: 1,
    two: 2
};
const newObj = {...q};   // копія
console.log(newObj);
