'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

//! отримуєм ширину-висоту Netto елемента без відступів та бордерів
const width = box.clientWidth;
const height = box.clientHeight;
console.log(width, height);

console.log(document.documentElement.clientHeight);  // отримую всього вікна  

//! отримуєм ширину-висоту brutto елемента з відступами та бордерами
const widthOf = box.offsetWidth;
const heightOf = box.offsetHeight;
console.log(widthOf, heightOf);

//! отримуєм ширину-висоту елемента netto але Full з врахування прокрутки
const widthSc = box.scrollWidth;
const heightSc = box.scrollHeight;
console.log(widthSc, heightSc);

//! розкриваєм елемент з прокрутки на всю висоту за допомогою scrollHeight
btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

//! отримуєм  значення кількості пролистаного вікна елемента
// btn.addEventListener('click', () => {
//     console.log(box.scrollTop);
// });

//! отримуєм координати елемента на сторінці
console.log(box.getBoundingClientRect());         // отримуєм усі
console.log(box.getBoundingClientRect().bottom);  // отримуєм конкретний


//! ____________ Отримуєм Style СSS елемента __________
//? Подивитися актуальні параметри елемента Inspect --> Elements --> Computed

// const style = window.getComputedStyle(box);   // отримуєм усі стилі CSS
// console.log(style);                           // перегляд усіх
// console.log(style.display);                   // перегляд конретного
                  
//! ______ SCROLL _______
// нижче методи тестую на будь-якому сайті через консоль

document.documentElement.scrollTop = 100; // пролистає сайт на 100px

window.scrollBy(0, 400);    // (x,y) пролистаєм від поточного до 400
window.scrollTo(0, 400);    // (x,y) пролистаєм від базового до 400