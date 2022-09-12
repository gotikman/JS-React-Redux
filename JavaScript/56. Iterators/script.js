"use strict";
//? for in --> loop calls key 'data[key]'
//? for of --> loop calls value

const user = {
    name: 'Stepan',
    surname: 'Bandera',
    birthday: '01/01/1909',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

for (const key in user) {
    console.log(user[key]);
}

//перевірка наявності властивості в обєкті
console.log(user.hasOwnProperty('name'))                      //! showMyPublicData() => true

// ---------------------------------------------------------------
const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function () { };

for (const key in arr) {
    console.log(key);
}

//! ------------- 'for of' loop for an object ----------------------

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function () {
        console.log('Hello');
    }
}

salaries[Symbol.iterator] = function () {                    //! *[Symbol.iterator]
    // коли запуститься for of, він почне працювати з обєктом нижче і запустить метод next(), 
    // результат метода це завжди обєкт який вказує - працює перебор далі чи закінчений + value

    return {
        current: this.john,
        last: this.ann,

        next() {
            if (this.current < this.last) {                  // перебор працює поки спрацьовує умова
                this.current = this.current + 500;           //* логіка може бути будь-яка
                return { done: false, value: this.current }  //! this.current => значення для наступного перебору
            } else {
                return { done: true }                        // вихід з циклу перебору
            }
        }
    }
}

const iterator = salaries[Symbol.iterator]();               // --> спосіб покрокового ручного перебору
console.log(iterator.next());
console.log(iterator.next());

for (let res of salaries) {                                 // --> спосіб перебору циклом
    console.log(res);
}