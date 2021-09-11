"use strict";

//! To String

// 1)   String
console.log(typeof(String(null)));  // команду юзають рідко
console.log(typeof(String(4)));     // команду юзають рідко


// 2)   Конкатенація
console.log(typeof(5 + ''));

const num = 5;
console.log('http://vk.com/catalog/' + num);

const fontSize = 26 + 'px';


//! To Nomber

// 1)   Number
console.log(typeof(Number('4')));  // команду юзають рідко

// 2)   Унарний плюс +*
console.log(typeof(+'5'));
let answer = +prompt('Hello', '');

// 3)
console.log(typeof(parseInt('15px', 10)));  // команду юзають рідко


//! To boolean

//? значення false =  0, '', null, undefined, NaN;

// 1)
let switcher = null;
if (switcher) {
    console.log('Working...');
}

switcher = 1;
if (switcher) {
    console.log('Working...');
}

// 2)   Boolean
console.log(typeof(Boolean('4')));

// 3) 
console.log(typeof(!!"444"));

