"use strict";

//? Symbol - дозволяють створювати скриті при звичайному доступі елементи обєкта і його переборі
//? Symbol - дозволяє створити властивість яка не буде ніяк перезаписана

let id = Symbol('id');                    //! created new Sembol

const obj = {
    'name': "Test",
    [Symbol('something')]: 'Something',   //! created new Symbol
    [id]: 1,                              //* Symbol
    getId: function () {
        return this[id];
    }
}

//! Створюєм новий Symbol і добавляєм в обєкт
let newSymbol = Symbol('newSymbol');
obj[newSymbol] = 'New Symbol';

//! Отримуєм Symbol та їх значення
console.log(obj.getId());                               // =>> метод отримання Symbol 'id'
console.log(Object.getOwnPropertySymbols(obj));         // =>> отримаєм [ Масив ] Symbols обєкту
console.log(obj[Object.getOwnPropertySymbols(obj)[2]]); // =>> отримаєм значення 1-о Symbol

//! Перезаписуєм значення Symbol
obj[Object.getOwnPropertySymbols(obj)[2]] = 'New Symbol + modified'
// console.log(obj);

//? циклом перебрав масив Symbols і вивів значення
// for (let value in Object.getOwnPropertySymbols(obj)) {
//     console.log(obj[Object.getOwnPropertySymbols(obj)[value]]);
// }

// ------------------------- Global Symbol ------------------------

const myAwesomeDB = {
    movie: [],
    actors: [],
    [Symbol.for('id')]: 123,                    //! створєм Глобальний Symbol
}

// myAwesomeDB.id = '23222333';                // створить просто нову властивість

console.log(myAwesomeDB[Symbol.for('id')]);     //! отримаєм значення Глобального символу
console.log(myAwesomeDB)

// --------- Symbol.keyFor(*)
// const someSymbol = Symbol.for('ID');
// console.log(Symbol.keyFor(someSymbol));

