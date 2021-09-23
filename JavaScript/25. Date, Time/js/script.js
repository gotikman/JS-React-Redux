"use strict";

let nowTime = new Date();            //? отримаєм актуальну дату --> 2021-09-23T13:54:50.444Z

//! Передаєм значення в дату      
nowTime = new Date('2021-10-19');    //? можна передати значення як STRING // new Date.parse('2021-10-19')
nowTime = new Date(2020, 5, 1, 20);  //? можна передати числові значення    --> 2020-06-01T17:00:00.000Z
nowTime = new Date(0);               //? передаєм мілісек., початок з 2070р.--> 1970-01-01T00:00:00.000Z


//! Методи Гетери, отримуєм потріні значення дати, годин
const now = new Date();

// console.log(now.getFullYear());     //? отримуєм Рік
// console.log(now.getMonth());        //? отримуєм Місяць       // початок січень=0
// console.log(now.getDate());         //? отримуєм День
// console.log(now.getHours());        //? отримуєм Годити і т.д
// console.log(now.getDay());          //? отримуєм День тижня   // початок неділя=0
// console.log(now.getUTCHours());     //? отримуєм UTC - година-дата по нульовому меридіану

// console.log(now.getTimezoneOffset()); //? різниця поясів у Хвилинах між моїм та нульовим
// console.log(now.getTime());           //? отрим. число в міліс. з 1970 р. 


//! Методи Cетери, втстановлюємо потрібні значення дати, години
//! всі тіж самі методи що для "get" тільки "set" 

// console.log(now.setFullYear(1999));     
// console.log(now.setMonth(11));        
// console.log(now.setDate(31));         
// console.log(now.setHours(50));         //? встановлюєм годину, в консолі VSC буде по 0 мер.
     
// console.log(now);

//! Підрахунок часу Роботи циклу
let start = new Date();             //початок

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();              //кінець

alert(`Цикл відпрацював за ${ end - start } мілісекунд`);  // Цикл відпрацював за 12 мілісекунд