"use strict";

//? Flags обєктів, застосовуються саме до конкретних властивостей обєкта
//? true - дефолтне значення усіх flags для кожно властивості

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
}

//! Flags обєктів
//* writable     --> true - власт. можна змінити, false - read only
//* enumerable   --> true - власт. перерах в циклах, false - ignor
//* configurable --> true - властивості видаляються, атрибути - змінюються

//! method: getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));         //? переглянути Flags властивості

//! method: defineProperty
Object.defineProperty(user, 'birthday', { writable: false });           //? змінюєм flags конкретної властивості
Object.defineProperty(user, 'gender', { value: 'male' });               //! створив властивіть, усі flags -> false 
Object.defineProperty(user, 'age', {                                    //? створив властивість з потрібними параметрами
    value: prompt('age?'),
    enumerable: true,
    configurable: true
});

//! method: defineProperties
Object.defineProperties(user, {                                         //? зміна falgs кількох властивостей одразу 
    name: { writable: false },
    surname: { writable: false },
})

// ----------------------- Object Block  ---------------------------------

// Object.preventExtensions()    // блокує добавлення властивостей в обєкт
// Object.seal()                 // блокує добавлення властивостей і їх настройку
// Object.freeze()               // блокує повністю обєкт

