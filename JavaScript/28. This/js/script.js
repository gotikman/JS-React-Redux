"use strict";

//!  1) Звичайна функція: this = window, але якщо strict = undefined

function showThis(a, b) {
    console.log(this);        // undefined
    function sum() {
        console.log(this);    // undefined
        return a + b; 
    }

    console.log(sum());
}
showThis(4, 5);

//!  2) Контекст this у методів обєкта - сам обєкт !!!

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        // console.log(this);    // {a: 20, b: 15, sum: ƒ} // this - сам обєкт
        function shout() {
            console.log(this);   // undefined , тому що це вже не метод обєкта а простий визов фун.
        }
        shout();
    }
};
obj.sum();

//!  3) Контекст this в конструкторах new і class - це новий екземпляр обєкта

function User(name, id) {     // функція конструктор
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log('Hello ' + name);
    };
}
let ruslan = new User('Ruslan', 99);
ruslan.hello();                       //викликаєм функцію метод


//! 4) Ручна привязка контексту this: call, apply

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: "Ivan"
};
sayName.call(user, 'Petrenko');       // привязуєм контекст user до функції
sayName.apply(user, ['Petrenko']);    // привязуєм контекст user до функції

//! 5) Ручна привязка контексту this: bind - створює нову функцію і під неї привязує контекст

function count(num) {
    return this*num;
}

const double = count.bind(2);        // поміщаєму в double нову функцію, 2 = this
console.log(double(3));
console.log(double(13));


// _______ practice _______ 

//! 6)  Контекст this в обродниках будій буде сам елемент на якогму відбулася подія
const btn = document.querySelector('button');

btn.addEventListener('click', function() {    // стрілкова функція видасть undefined
    console.log(this);                        // контекстом буде сам елемента на якому відбулася подія
    this.style.backgroundColor = 'red';
});


//! 7) Контекст this стрілкова функція бере у батьківського елемента
const object = {
    num: 5,
    sayNumber: function () {         
        const say = () => {          // звичайна функція видасть undefined
            console.log(this);
            console.log(this.num);
        };
        
        say();
    }
};

object.sayNumber();



// ________ Стрілкові функції

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
