"use strict";

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

//! Старий спосіб коду подій
// btn.onclick = function () {  
//     alert('Klic');
// };

//! подія і callback
// btn.addEventListener('click', () => {  
//     alert('Click');
// });

//! Додатковий аргумент у функції
// btn.addEventListener('mouseenter', (evt, 'text',) => {  
//! evt попертає обєкт MouseEvent в якому багато параметрів, координат і т.д
// btn.addEventListener('click', (evt) => {  
//     console.log(evt.target);
//     evt.target.remove();
// });


//! створюєм змінну-функцію delete і після сам обробник
// let i = 0;
// const deleteElement = (evt) => { 
//     // evt.remove();
//     console.log(evt.target);
//     i++;
//     if (i == 1) {
//            //! видалення обробки після 1-о спрацювання
//         btn.removeEventListener('click', deleteElement); 
//     }
// };

// btn.addEventListener('click', deleteElement); //! обробка і силка на функцію



//! Вспливання Подій Обробки, вложеність Подій
const deleteElement = (evt) => {  
    console.log(evt.type);
    console.log(evt.currentTarget);
    
};

btn.addEventListener('click', deleteElement);  
overlay.addEventListener('click', deleteElement);  


//! Відміняєм стандартну поведінку браузера
const link = document.querySelector('a');

link.addEventListener('click', (evt) => {
    evt.preventDefault();

    console.log(evt.target);
});

//! Один Обробник подій на декілька елементів
const btns = document.querySelectorAll('button');

btns.forEach(item => {
    // item.addEventListener('click', deleteElement);
    //! 3-й параметр EventLisener, once - функція 1 раз
    item.addEventListener('click', deleteElement, {once: true});
});

btns.forEach(item => { item.addEventListener('click', deleteElement);});