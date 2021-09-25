'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

//! отримуєм ширину-висоту Netto елемента без відступів та бордерів
const width = box.clientWidth;
const height = box.clientHeight;
const fullW = document.documentElement.clientWidth;  // отримую всього вікна     
const fullH = document.documentElement.clientHeight;  // отримую всього вікна      

console.log(width, height, 'full->', fullW, fullH);


//! отримуєм ширину-висоту brutto елемента з відступами та бордерами
const widthOf = box.offsetWidth;
const heightOf = box.offsetHeight;
const topOf = box.offsetTop;
const leftOf = box.offsetLeft;
console.log(widthOf, heightOf, topOf, leftOf);

//! отримуєм ширину-висоту елемента netto але Full з врахування прокрутки
const widthSc = box.scrollWidth;
const heightSc = box.scrollHeight;
const fullWidth = document.documentElement.scrollWidth;
const fullHeight = document.documentElement.scrollHeight;
console.log(widthSc, heightSc, 'full->', fullWidth, fullHeight);

//! розкриваєм елемент з прокрутки на всю висоту за допомогою scrollHeight
btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

//! отримуєм  SCROLL значення кількості пролистаного вікна елемента
// btn.addEventListener('click', () => {
//     console.log(box.scrollTop);
// });

box.addEventListener('scroll', () => {
    console.log(box.scrollTop);
});

document.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop); 
    
});

//! отримуєм координати елемента на сторінці
console.log(box.getBoundingClientRect());         // отримуєм усі
console.log(box.getBoundingClientRect().bottom);  // отримуєм конкретний


//! ____________ Отримуєм Style СSS елемента __________
//? Подивитися актуальні параметри елемента Inspect --> Elements --> Computed

const style = window.getComputedStyle(box);   // отримуєм усі стилі CSS
console.log(style);                           // перегляд усіх
console.log(style.display);                   // перегляд конретного
                  
//! ______ SCROLL _______
// нижче методи тестую на будь-якому сайті через консоль

document.documentElement.scrollTop = 100; // пролистає сайт на 100px

window.scrollBy(0, 400);    // (x,y) пролистаєм від поточного до 400
window.scrollTo(0, 400);    // (x,y) пролистаєм від базового до 400




