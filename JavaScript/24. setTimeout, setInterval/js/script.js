"use strict";

// const timeId = setTimeout(function() { //? функція
//     console.log('Hello');
// }, 2000);                    //? час в мілісекундах

// const timeId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');           //? спосіб з передачою аргументів у функцію одразу


// const timerId = setTimeout(logger, 2000);  //? виклик функції logger після 2000 мс

// clearInterval(timerId);                    //? відміняєм запуск по таймеру

// function logger () {
//     console.log('text');
// }

//! обробка кліка після чого запуск функції з інтервалами і вихід після 4 ітерацій
// const btn = document.querySelector('.btn');
// let   timerId,
//       i = 0;

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500); 
// });

// function logger () {
//     if (i === 3) {                 //? провірка для виходу з інтервалів
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

//! рекурсивна функція setTimeout з затримкою що виконується поступово, очікуючи код!
// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 1000);     // рекурсія
// }, 1000);

//? ______________ рекурсивна функція setTimeout за межами ____________

// let id = setTimeout(log, 1000);

// function log() {
//     console.log('hello');
//     id = setTimeout(log, 1000);
// }

//? ______________ рекурсивна функція за межами + запуск по кліку ____________
// let timerId,
//     i = 0,
//     btn = document.querySelector('.btn');

// btn.addEventListener('click', function() {
//     timerId = setTimeout(log, 1000);
// });

// function log() {
//     if (i === 4) {
//         clearInterval(timerId);
//     } else {
//         i++;
//         console.log('hello');
//         timerId = setTimeout(log, 1000);
//     }    
// }


//! Анімація з затримкою
const btn = document.querySelector('.btn');

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);             //? запускаєм анімацію    

    function frame() {
        if (pos == 300) {
            clearInterval(id);                     //? відміняєм повторення по закінченню
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);       //? тригер запуску анімації
