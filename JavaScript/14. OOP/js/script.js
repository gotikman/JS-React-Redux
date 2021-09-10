"use strict";

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

//! Прототипи та наслідування

const soldier = {  // прототип
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

//? новий обєкт одразу з заданим прототипом
const jonh = Object.create(soldier);

//? старий обєкт і наслідування прототипу
const ruslan = {   // наслідує прототипи
    health: 100
};
Object.setPrototypeOf(ruslan, soldier);


// jonh.__proto__ = soldier; // Старий спосіб наслідування прото.
// jonh.sayHello();


jonh.sayHello();  // виклик функції що в прототипі є
ruslan.sayHello();  // виклик функції що в прототипі є

