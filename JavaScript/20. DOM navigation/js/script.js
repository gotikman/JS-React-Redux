"use strict";

//! отримуєм доступ до елементів сторінки
// console.log(document.documentElement);  //? вся сторінка тегу <html>
console.log(document.body);     //? Теги можна вибирати одразу без querySelector
// console.log(document.head);

//! отримуєм усі вузли (ноди) що є в батька (body) у псевдомасив NodeList
// console.log(document.body.childNodes); //? отримуєм усі вузли в псевдомасив

// console.log(document.body.firstChild); //?  отримуєм 1-й вузол в середині
// console.log(document.body.lastChild);  //?  отримуєм останній вузол в середині

// console.log(document.querySelector('#current').parentNode); //? отримуєм батька вище "=="
// console.log(document.querySelector('#current').parentNode.parentNode); //? отримуєм батька-батька


//! data атрибути, атрибут при пошуку прописуєм повністю і в []
// console.log(document.querySelector('[data-current="3"]'));  //? отримали елемент по атрибуту 

// console.log(document.querySelector('[data-current="3"]').nextSibling);  //? отр. наст. ВУЗОЛ сусіда
// console.log(document.querySelector('[data-current="3"]').previousSibling); //? отр. попер. ВУЗОЛ сусіда

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //? отримали наст. ЕЛЕМЕНТ
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); //? отримали попер. ЕЛЕМЕНТ

// console.log(document.querySelector('#current').parentElement); //? отримуєм ЕЛЕМЕНТ батька вище "=="
// console.log(document.body.firstElementChild); //?  отримуєм 1-й ЕЛЕМЕНТ в середині
// console.log(document.body.lastElementChild);  //?  отримуєм останній ЕЛЕМЕНТ в середині


//! отримуєм тільки Елементи, цикл for of + continue
for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    
    console.log(node);
}