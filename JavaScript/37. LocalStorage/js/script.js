'use strict';

//! Команди
// localStorage.setItem('number', 5);  // команда для запису в локалсторедж ключ:значення
// localStorage.getItem('number');     // команда для отримання даних з лок.стор
// localStorage.removeItem('number'); // видаляєм ключ і значення
// localStorage.clear();              // очистка лок.стор


//! checkbox
const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked') === 'true') {
    checkbox.checked = true;                        // 1 загрузка включаєм галочку якщо є в ЛС
}

if( localStorage.getItem('bg') === 'changed') {    // 1 загрузка включаєм колір якщо є в ЛС
    form.style.backgroundColor = 'red';

}

checkbox.addEventListener('change', () => {     // відслідковуєм зміну стану галочки
    localStorage.setItem('isChecked', true);    // добавляєм ключ в ЛС
});

// //! color
change.addEventListener('click', () => {
    if( localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';

    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

//! заносим обєкт
const person = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(person);   // переводим обєкт в JSON
localStorage.setItem('Alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('Alex')));  // Отримуєм назад обєкт

