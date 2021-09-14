'use strict';


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      сircles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),  // пошук у wrapper
      oneHeart = wrapper.querySelector('.heart');  // пошук у wrapper
      

//! Style, стилізація елементів 
//? інлайнові стилі, високий приорітет
//отриманні як 1 елемент
box.style.backgroundColor = 'blue';
box.style.width = '500px';
//отриманні як колекція
btns[1].style.borderRadius = '100%';
сircles[0].style.backgroundColor = 'red';

//? Декілька CSS властивостей для 1 елементу  
// box.style.cssText = 'background-color: pink; width: 500px';
// сircles[1].style.cssText = 'background-color: green; width: 500px';
// box.style.cssText = `background-color: pink; width: ${num}px`;

//? Дії над кількома елементами одразу цикл For
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

//? Дії над кількома елементами одрузу метод forEach
hearts.forEach(item => {
    item.style.backgroundColor = "yellow";
});

//! маніпуляції
//? створює елемент в JS
const div = document.createElement('div');
//? добавляєм текст елементу
const text = document.createTextNode('Тут був я'); // юз рідко

//! робота з CSS класами
div.classList.add('black');

//! добавляєм елемент в DOM 
// document.body.append(div); // добавили в Body в кінець
//? форма запису, якщо елемент добавляється 1 раз
// document.querySelector('.wrapper').append(div);
//? добавляєм елементи
wrapper.append(div);   // вставка останнім
// wrapper.prepend(div); // вставка 1-м
// wrapper.appendChild(div);  // застарілий спосіб

// box.before(div);      // вставка перед елементом
// box.after(div);       // вставка після елементом
// hearts[0].before(div);   // вставка перед елементом
// hearts[1].after(div);     // вставка після елемента

// wrapper.insertBefore(div, hearts[0]); // старий спосіб, що і перед чим

//! видаляєм елементи
// сircles[0].remove();
// wrapper.removeChild(hearts[1]); // старий спосіб

//! замінює А на Б , А-видаляється, Б-переміщається
box.replaceWith(сircles[0]);
// hearts[0].replaceWith(сircles[0]);
// wrapper.replaceChild(сircles[0], hearts[0]); // старий спосіб А стає Б

//! Добавлення даних елементам і HTML код
div.innerHTML = 'Hello - Привіт'; // вставимо текст
div.innerHTML = '<h1>Абзац</h1>'; // вставимо HTML код

// div.textContent = 'Hello'; // добавляєм Текст


// div.insertAdjacentHTML("beforebegin", '<h2>Привіт</h2>'); // вставка перед елементом
// div.insertAdjacentHTML("afterbegin", '<h2>Привіт</h2>'); // вставка 1-м в середину
// div.insertAdjacentHTML("beforeend", '<h2>beforeend</h2>'); // вставка останнім в середину
// div.insertAdjacentHTML("afterend", '<h2>beforeend</h2>'); //  вставка після елемента

