"use strict";

//? Set - особливий вид колекції по типу масива де кожна значення зустрічається 1 раз тільки


// const arr = [1, 1, 2, 2, 3, 5, 6, 5];
const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];


// --------------------------- CREATE ----------------------------------------

const set = new Set(arr);

// --------------------------- METHODS --------------------------------------

//! set.add(*)        - добавляєм елемент в Set, повертає знову Set

set.add('Oleg')
    .add('Ivan')


// console.log(set);

//! set.delete(value)  -  видаляєм потрібне значення
//! set.has(value)     -  перевіряєм наявність значення в Set
//! set.clear()        -  очистити Set
//! set.size           -  розмір Set, к-ть елементів

// --------------------------- ITERATORS -------------------------------------

for (let value of set) console.log(value);       //*  1. цикл for of

set.forEach((value, valueAgain, set) => {        //*  2. цикл forEach
    console.log(value, valueAgain);              // => Alex Alex ... ...
})

// -----------------------

//! set.values()       -  повертає усі значення Set
//! set.keys()         -  повертає усі значення Set
//! set.entries()      -  перетворює елементи Set в масив масивів [value, value]   
console.log(set.values());                       // =>  {'Alex', 'Ann', 'Oleg', 'Ivan'}
console.log(set.keys());                         // =>  {'Alex', 'Ann', 'Oleg', 'Ivan'}
console.log(set.entries());                      // => { ['Alex', 'Alex' ], 'Ann', 'Ann' ] ...}

// --------------------------- HELPER function --------------------------------

const arr2 = ['Alex', 'Ann', 'Oleg', 'Alex'];

function unique(arr) {                          //* fn приймає-повертає відфільт. масив
    return Array.from(new Set(arr))
}

console.log(unique(arr2))                        // => [ 'Alex', 'Ann', 'Oleg' ] 